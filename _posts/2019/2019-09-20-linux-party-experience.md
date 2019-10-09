---
 layout: post
 title: Linux Party experience - Playing with your bootloader for fun and happiness
 excerpt: A crude collection of various gimmicks and tricks we learnt while installing linux on a wide variety of systems
 author:
   name: Manas Chaudhary, Adrij Shikhar
   link: https://https://github.com/sin3point14, https://https://github.com/adrijshikhar
   bio: Developers, SDSLabs
   image: 
---

For a brief context, SDSLabs conducts an event called "Linux Party" in which our members help the freshers of IIT Roorkee install a Linux distro (mainly Ubuntu) on their systems.

# The Motivation behind this blog

Linux is a whole new world for someone new to it; beginners(and even veterans!) find many intricacies/difficulties which start appearing right from the installation process. After installing linux on a lot of systems and experimenting a lot with ours we thought that it would be a great idea to post all our learnings that may assist someone trying to do it themselves person.

This writing will be mostly a collection of guides distributed across the internet and our experiences that we felt needed to be interwoven to make the installation experience smoother. Note that this is not an exhaustive guide and you would need to do some Googling along the way. Also, our guide will be specific to Ubuntu but should work for any Debian based distro.

## How to use this guide?

First, give this a light reading. You wouldn't want to be distracted by theory during the installation process. After skimming through, you should be able to figure out the parts that are relevant to you and follow them while installing.

# Dual Boot vs VM

_Why go through all the hassle of dual boot when you can simply run a VM?_

* VMs are resource-intensive, you need to have a beefy computer to have a smooth experience inside a VM
* On using a laptop this will adversely battery life and hence limit a laptop's portability

[Here](https://www.makeuseof.com/tag/dual-boot-vs-virtual-machine/) is a much more exhaustive list

Besides, this is also a great opportunity to learn about wacky terms like BIOS, UEFI, EFI tables, Bootloader, etc. that you may or may have not heard.

# Preparing a bootable media

Ubuntu provides a great guide on how preparing a bootable media [here](https://tutorials.ubuntu.com/tutorial/tutorial-create-a-usb-stick-on-windows#0)

Here we would like to stress on point 4, Boot selection and Partition scheme. We recommend selecting MBR for the partition scheme; though you can give the other options a try, but they require more care during the installation process.

# Understanding EFI tables and custom partitions

EFI tables- In layman's terms, it is a partition(like the C: or D: drive on your windows) which stores 'bootloaders' of various OSs present on your system.
'Bootloaders' are programs that are responsible for starting up an operating system.
On a Windows laptop, you probably have the Windows Bootloader installed by default on an EFI partition. You can verify this by opening Disk Management from the Start menu.
Remember this bit of information, it will be useful later.

You may be used to the Windows partition scheme in there are different drives like C:, D:, etc., but Linux uses a different partition scheme.

```
/
├── bin
├── boot
├── dev
├── etc
├── home
├── lib
├── lib64
├── lost+found
├── media
├── mnt
├── opt
├── proc
├── root
├── run
├── sbin
├── snap
├── srv
├── sys
├── tmp
├── usr
├── var
```

Linux has a more hierarchical file structure, wherein there are different directories inside a '/'(pronounced 'root') directory. What you see above is the list of directories that were in my root directory. Instead of having different drives for segregating data, Linux gives a master directory that contains everything. Each directory in the root directory has a specific purpose, and each directory can be mounted on a separate partition akin to Windows partitions. If you don't allocate separate space for separate directories, they would share root's allocated space by default.

[This](https://www.youtube.com/watch?v=HbgzrKJvDRw) is a great video explaining the Linux filesystem in detail. Don't worry if a lot of things go over your head. For starters, we are only concerned with /, /home and swap.

/home is where a user's files are stored(similar to the C:\Users in windows) but you would have to allocate more space than what you might be using in C:\Users because ALL of the user files will be in /home and there would be no other D: or E: drive to store these files

swap is a 'virtual RAM' that is utilised to extend RAM beyond its physical capacity. With swap memory, an 8 GB RAM can 'store' much more data than 8 GB, though it would be significantly slower.

From our experience, a general space ratio of 40:60 between / and /home, and setting swap size to double the size of your RAM is a good composition. If possible, give root more than 20 GB of space apart from the space for /home for smooth operation.

## The actual partitioning

There are three cases:

* SSD only or HDD only
* SSD + HDD
* Optane + HDD

Now for HDD only laptops, the work is pretty straightforward. Shrink the required memory which you have calculated previously. 

For SSD only laptops the process is the same as HDD only laptops except that you have to shift your SSD from RAID to AHCI using [this](https://support.thinkcritical.com/kb/articles/switch-windows-10-from-raid-ide-to-ahci). Step 5 of the previous link will vary with manufacturer, so explore your BIOS a bit (don't go on changing any random setting!) and you'll find the appropriate setting to switch or you can google for "<insert laptop model> RAID to AHCI".

For SSD + HDD laptops, you would want to minimize stuff on the SSD as it is generally small. In this case, allocate space for / on the SSD(minimal boot time) and /home on the HDD.

For shrinking your Windows drives follow [this guide](https://www.dummies.com/computers/pcs/how-to-shrink-a-hard-drive-volume-in-windows/) for both SSD and HDD

Optane is rare so first check [this](https://www.intel.in/content/www/in/en/support/articles/000023990/memory-and-storage/intel-optane-memory.html) to determine if you have Optane in use in case you are unsure. Installing Ubuntu on Optane is a bit complex so we won't be going there; use [this](https://support.cyberpowerpc.com/hc/en-us/articles/360014775073-How-do-I-disable-Intel-Optane-)(disabling Intel Optane memory with Intel RST is enough, no need disable from BIOS!) and install Ubuntu, but remember to keep an EXTRA 10 MB unallocated space at the END of your HDD which is required by Optane, other than the memory used by Ubuntu. Then use the previous guide to re-enable Optane.

Use [this](https://askubuntu.com/a/521195) to install Ubuntu and configure the partitions according to your needs. "/dev/sd\*" type of names refer to HDD and "/dev/nvmp\*" refer to SSD.

In `Device for boot loader installation` shown in the previous link select your SSD in case you have one or your HDD if you don't.

# GRUB

Remember the talk about bootloaders? Now GRUB is your new bootloader. Upon booting up your PC, you should now be greeted with a black or magenta screen with white text in a not-so-appealing font. Here is where you can select your OS using arrow keys.

In case GRUB is now showing up and you are directly booting into an OS(which should not happen if you followed the instructions), the issue can be subjective and your best bet would be to do google searches describing what is happening and you should find a solution(trust us, we've been there too). You can also reach out to us [here](https://chat.sdslabs.co) and we would love to help!

# Graphics Driver Errors

This is the main issue with most of the laptops that get ubuntu newly installed. A variety of errors are reported in this category.

* Black screen on login
* ACPI errors after GRUB
* Corrupted display
and many more...

This is mainly due to Nvidia graphics cards being present on a system and the need to manually install their drivers.
If you face this issue (or miraculously don't while owning an Nvidia graphics card), follow [this](https://itsfoss.com/fix-ubuntu-freezing/)(follow step 1, then step 3, and then undo step 1)
Another error that you may encounter is that of Windows entry not showing up in GRUB. A variety of solutions are available [here](https://askubuntu.com/questions/197868/grub-does-not-detect-windows)

To avoid this problem, you may install some OS that provides you graphics drivers pre-installed. We recommend [Pop!_OS](https://system76.com/pop) if you are interested in such an OS. It is based on Ubuntu, so all terminal interactions remain the same.

# Issues after installing Ubuntu

## Touchpad dysfunctional

Mostly a drivers issue, Run this on your terminal-
`sudo apt-get install xserver-xorg-input-synaptics`

## Internal Speakers dysfunctional

Run `alsamixer` in your terminal and using left/right and up/down keys raise all bars to max.
Internal speakers generally do not perform to their maximum ability on Ubuntu but external speakers/headphones work fine.

# Further Exploration?

So you have everything set up and want to know more about the world of this amazing piece of open-source software?

Then check these out-

[Desktop Environments](https://itsfoss.com/best-linux-desktop-environments/)

[Hot Distros](https://itsfoss.com/best-linux-distributions/)

[Everything is a file!](https://www.howtogeek.com/117939/htg-explains-what-everything-is-a-file-means-on-linux/)

[Terminal Commands](https://www.makeuseof.com/tag/most-used-linux-terminal-commands/) Don't go on memorising these, just know that they exist and you'll learn them over time

[Nano Text Editor](https://www.tecmint.com/learn-nano-text-editor-in-linux/)

[Vim text Editor](https://scotch.io/tutorials/getting-started-with-vim-an-interactive-guide)

[Practice and learn command-line skills](https://overthewire.org/wargames/bandit/)
