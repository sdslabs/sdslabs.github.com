---
layout: post
title: Building a single-threaded FUSE filesystem in Rust using io_uring
excerpt: And the kernel bugs that humbled me
author:
  name: Ritesh
  link: https://github.com/riteshco
  bio: Developer, SDSLabs
  image: regie.jpeg
---

Okay, so I searched the internet to find that there is no “Rust” library for io_uring over fuse.
I found two related and significant things:
- [“Fuser”](https://github.com/cberner/fuser) crate, which is a Rust library for fuse, but with synchronous blocking I/O and thread pools.
- A massive crate developed largely for virtio-fs and VMs ([“fuse-backend-rs”](https://github.com/cloud-hypervisor/fuse-backend-rs), also in Rust). It does have some *io_uring* and *tokio_uring* feature flags, but it’s heavily abstracted, complex and tied to the Tokio ecosystem (apparently).

---

### The Core Problem

If you want to build a FUSE filesystem in Rust, you will reach out for the standard “fuser” crate (if you specifically target Rust). It is robust, but it comes with an architectural bottleneck, its blocking sync I/O. Every syscall (*read*, *write*, or *getattr*) blocks a thread until the user-space filesystem computes the response. If your filesystem is doing any heavy or complex I/O, disk reads, or whichever takes time, the threads from the thread pool just sit idle.

You can try to wrap this in Tokio, but you are still ultimately bridging synchronous FUSE APIs with async runtimes, leading to context-switching overhead. I wanted a lock-free event loop. So, I went on to make something with **raw io_uring** submission and completion queues talking directly to **/dev/fuse**. ([fuser-iouring](https://github.com/sdslabs/fuser-iouring)).

---

### The Architecture

The core idea is simple. Instead of a thread pool, we have a single loop. We grab the RawFd for */dev/fuse* and push an **opcode::Read** onto the io_uring submission queue. When the completion queue gets the FUSE packet, we decode the header, match the opcode and dispatch it to the FileSystem trait. It then immediately pushes an **opcode::Write** with the response back to the io_uring ring.

In the development, I faced many challenges, the most significant of which are:

### The READDIRPLUS HEADACHE

When you first mount a FUSE filesystem, the kernel sends a FUSE_INIT request. I initially used the modern ABI v7.32 for my filesystem to respond to that request. Because of this, the kernel assumed I supported **READDIRPLUS** (opcode = 52). Since I hadn’t implemented it yet (due to complications compared to the normal READDIR), my dispatcher simply returned **ENOSYS** (Not implemented).

I expected the kernel to gracefully fall back to standard READDIR. Instead, it got confused and kept trying the same request indefinitely, freezing my terminal (it was a headache to boot my computer again and again just to test this) every time I typed “ls”.

**Fix:** I had to downgrade the protocol version in the INIT response to v7.1 (which predates the READDIRPLUS becoming the default). The kernel then used standard READDIR, and I got the correct directory listings (and without frozen terminal and computer rebooting headache).

### The double negative panic

FUSE expects error codes to be returned as i32 negative values (for example, -2 for ENOENT). I wrote a helper function ***reply_error(err)*** that negated the input (error: -err) by itself before constructing the FuseOutHeader struct and writing to the submission queue.
But somehow, in my main dispatcher, I was calling it like this:

```rust
Err(e) => reply_error(&mut ring, fuse_fd, header.unique, -e)

```

This double-negative ***(-(-e))*** resulted in sending a positive number to the kernel.

In the FUSE ABI, a positive return value means "Success, I wrote X bytes". Because I was returning a positive number but an empty payload, the kernel detected a severe protocol violation. Instead of a graceful error, it immediately nuked the mount with an os error 107: Transport endpoint is not connected panic. It took me hours to realise this (learnt new things though).

### The Ghost Directory

Once mkdir and rmdir were implemented, I ran into a menacing challenge: Linux directory caching (dcache).
The sequence looked like this (in the terminal):
1. mkdir yo
2. rmdir yo (Successfully deleted from my Rust BTreeMap and disk)
3. ls -> Output: yo/ with another line saying (The directory with the name “yo” can’t be found, it is not present)  (Wait, what?)
When ls attempted to stat yo/, the filesystem correctly returned ENOENT, resulting in a phantom directory that ls could see but couldn't access.

My first fix was to drop the cache TTLs (entry_valid and attr_valid) to 0, forcing the kernel to always ask my program for the truth. But even with TTLs at zero, the ghost directory persisted if I ran rmdir and ls fast enough.

**Second and final fix:** I had to dynamically calculate the parent directory's size based on its contents:

```rust
parent_attr.mtime = time_now();
parent_attr.size = parent_map.len() as u64; 
self.write_inode(&parent_attr);
```

By forcing the size property to act as a state-versioning integer, any addition or deletion instantly invalidated all the kernel's dcache.

---

### Current State

The filesystem is now feature-complete for standard **POSIX** operations. A custom test suite verifying touch, echo, cat, mkdir, ls, rm, and rmdir passes cleanly through the io_uring pipeline without blocking a single thread.
The next step would be implementing FUSE Notifications (**FUSE_NOTIFY_INVAL_ENTRY**) to proactively invalidate the kernel cache instead of relying on metadata tricks, but for now, the single-threaded event loop is rock solid.

---

Repo link: [fuser-iouring](https://github.com/sdslabs/fuser-iouring)