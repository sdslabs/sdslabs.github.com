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

This writing will be mostly a collection of guides distributed across the internet and our experiences that we felt needed to be interwoven to make the user's experience much easier, thus being a.to understand the causes or particulars of any specific part you would need to do some extra research but fret not as Google will always be you best companion. Also, our guide will be specific to Ubuntu but would work for almost any Debian based distro.

## How to use this guide?

First, give this a light reading. You wouldn't want to be distracted by theory, mid-flight the installation process. After tskimming through, you should be able to figure out parts that are relevant to you and follow them while installing.

# Dual Boot vs VM

So here is the first question that may come to one's mind when they get introduced to the world of Linux.

_Why go through all the hassle of dual boot when you can simply run a VM?_

* VMs are resource-intensive, you need to have a beefy computer to have a smooth experience inside a VM
* On using a laptop this will adversely battery life and hence limit a laptop's portability

[Here](https://www.makeuseof.com/tag/dual-boot-vs-virtual-machine/) is a much more exhaustive list

Besides, this is also a great opportunity to learn about wacky terms like BIOS, UEFI, EFI tables, Bootloader, etc. that you may or may have not heard.

# Preparing a bootable media

Ubuntu provided a great guide of how you can prepare a bootable media [here](https://tutorials.ubuntu.com/tutorial/tutorial-create-a-usb-stick-on-windows#0)

Here we would like to stress on point 4, Boot selection and Partition scheme, to keep you partition scheme as MBR and this wouldn't cause a problem, though you can give the other options a try but they require more care in the installation process

# Understanding EFI tables and custom partitions

EFI tables- In a 'not that technical' language it is a partition(like the C: or D: drive on your windows) which stores 'bootloaders' of various OS present on your system
Now about 'bootloaders', they are programs that fire up your OS on startup.
On a Windows laptop, you would be having the Windows Bootloader installed by default on an EFI partition, you can check this by opening Disk Management from the Start menu.
Now this knowledge will come in useful later on

You may be used to using Windows partition scheme in which one makes different drives like C:, D:, etc but Linux uses a different Partition scheme.

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

So what you see above is the list of directories that were in my '/'(pronounced 'root') directory. So instead of providing different drives for segregating data Linux gives a master directory that contains everything and within this, several directories can be allocated separate space on your hard disk so it would be somewhat like a different drive. If you don't give allocate separate space to separate directories then would be sharing root's allocated space by default.

[This](https://www.youtube.com/watch?v=HbgzrKJvDRw) is a great video explaining the Linux filesystem in detail and don't worry if a lot of things go over your head, for starters, we are only concerned with /, /home and swap

/home is where a user's files are stored(similar to the C:\Users in windows) but you would have to allocate more space than what you might be using in C:\Users because ALL of the user files will be in /home and there would be no other D: or E: drive to store these files

swap is a 'virtual RAM' that is utilised to extend RAM beyond its physical capacity, with swap memory an 8 GB RAM can 'store' much more data than 8 GB though it would be much slower.

Now for all this blabbering from our experience a general space ratio of 40:60 between / and /home and having swap as double the size of your RAM is the ideal composition. Also, root requires a minimum of 20 GB for smooth operation

## The actual partitioning

Now we have three cases

* Only SSD or only HDD
* SSD + HDD
* Optane + HDD

Now for only HDD laptops, the work is pretty straightforward that you have to shrink the required memory which you have calculated previously. 

For only SSD the process is the same as only HDD laptops except that you have to shift your SSD from RAID to AHCI using [this](https://support.thinkcritical.com/kb/articles/switch-windows-10-from-raid-ide-to-ahci). Step 5 of the previous link will vary with manufacturer, so explore your BIOS a bit (don't go on changing any random setting!) and you'll be bound to hit it or you can google for "____ RAID to AHCI".

For SSD + HDD laptops you would want to keep minimum stuff on SSD as it is generally small. So what should be done in this case is to allocate space for / on the SSD(minimal boot time) and /home on the HDD.

For shrinking your Windows drives follow [this guide](https://www.dummies.com/computers/pcs/how-to-shrink-a-hard-drive-volume-in-windows/) for both SSD and HDD

Optane is rare so first check [this](https://www.intel.in/content/www/in/en/support/articles/000023990/memory-and-storage/intel-optane-memory.html) to determine if you have Optane in use in case you are unsure. Installing Ubuntu on Optane is a bit complex so we won't be going there, use [this](https://support.cyberpowerpc.com/hc/en-us/articles/360014775073-How-do-I-disable-Intel-Optane-)(also Disable Intel Optane memory with Intel RST is enough, no need disable from BIOS!), install ubuntu but remember to keep EXTRA 10 MB unallocated space at the END of your HDD which is required by Optane, other than the memory used by Ubuntu. Then use the previous guide to reenable Optane.

Use [this](https://askubuntu.com/a/521195) to apply the theory you learned. "/dev\*" type of names refer to HDD and "/dev/nvmp\*" refer to SSD.

In `Device for boot loader installation` shown in the previous link select your SSD in case you have one or you HDD in other case.

# GRUB

Remember the talk about bootloaders? now GRUB is your new bootloader. You would be seeing a black screen with white text in a not-so-appealing font show up after your manufacturer's logo on startup. Here is where you can select your OS using arrow keys.

In case GRUB is now showing up and you are directly booting into an OS(which will not happen in case you followed the instructions) then the issue can be subjective and your best bet would be to do subjective google searches describing what is happening and we are 99% sure that you will find a solution(trust us we've been there). You can also reach out to us [here](chat.sdslabs.co) and we would love to help you!

# Graphics Driver Errors

This is the main issue with most of the laptops that get ubuntu newly installed. A variety of errors are reported in this category. You may even install some OS that provides you graphics drivers pre-installed. We recommend [Pop!_OS](https://system76.com/pop) if you are interested in such an OS, as it is based on Ubuntu, so all terminal interactions remain the same.

* Black screen on login
* ACPI errors after GRUB
* Corrupted display
and many more...

This is mainly due to Nvidia graphics cards being present on a system and the need to manually install their drivers.
If you face this issue or if miraculously don't while owning Nvidia graphics card, follow [this](https://itsfoss.com/fix-ubuntu-freezing/)(follow step 1 then step 3 then revert step 1)
Another error that may show up is that Windows entry is not showing up in GRUB and a variety of solutions are available [here](https://askubuntu.com/questions/197868/grub-does-not-detect-windows)

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

[Desktop Environments](https://www.forbes.com/sites/jasonevangelho/2018/09/17/linux-for-beginners-whats-a-desktop-environment/#4f3f2adb1b0a)

[Hot Distros](https://itsfoss.com/best-linux-distributions/)

[Everything is a file!](https://www.howtogeek.com/117939/htg-explains-what-everything-is-a-file-means-on-linux/)

[Terminal Commands](https://www.makeuseof.com/tag/most-used-linux-terminal-commands/) Don't go on memorising these, just know that they exist and you'll learn them over time

[Nano Text Editor](https://www.tecmint.com/learn-nano-text-editor-in-linux/)

[Vim text Editor](https://scotch.io/tutorials/getting-started-with-vim-an-interactive-guide)

[Practice and learn command-line skills](https://overthewire.org/wargames/bandit/)
