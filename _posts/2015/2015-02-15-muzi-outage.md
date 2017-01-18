---
layout: post
title: Muzi was down - Incident Report
excerpt: "The hard disk containg all tracks of Muzi recently died"
author:
    name: Ravi Kishore R
    bio: Developer, SDSLabs
    image: ravi.jpg
---

## The Situation

Muzi is one of the most popular application in campus, that boasts of thousands of all time users and thousands of [listens per day](https://dashboard.sdslabs.co.in/). The songs collection of Muzi resides in a single Hard Disk of 2 Terabytes in size. This drive has a collection of 1,69,000 Hindi tracks and 72,000 English tracks.

On **13th February 2015** at 6:30PM, the hard disk died. 

The drive showed signs of bad sectors which we suspect has been because of continuous read/write operations that happen 24X7 on this disk. 

## Impact on services

The workstation containing this disk also hosted couple of our services, thankfully in another hard disk. 
Muzi backend server was hosted on another Virtual Machine totally different from the storage drive. This means the muzi frontend website was available at all times, but the songs themselves were not reachable. We are really sorry for the outage. We regret as much as you do.

The other services running in the machine include Presence, our own lab tracking system and a gitolite instance that hosts all of our source code. These applications didn't use the muzi hard disk, but suffered downtime as we had to perform hardware upgrades to the machine in order to rescue the bad disk.

## Rescue Method

We immediately detached the disk from the CPU cabinet and checked for the actual losses. We analysed that most of the data could be backed up thanks to Windows Disk Analyzer. 
We further observed that when the disk attempted to read the bad sectors, it borked and did not allow us to read anything further. 

We searched for alternative storage to transfer the 1.6Tb of data. That being a very large size, we had to divide the size into parts and transfer them to backup locations either by using a USB-Hdd adapter or by manually mounting it into other workstations that had enough free space.

We closed in selecting two workstations having free space of around 1Tb each and transferred the data into them. Note that this was a highly attention seeking task, since the transfer was to be restarted everytime a bad sector was found. We were doubtful to use any disk repair tools fearing a loss of nearby data.

**14th February 2015 2:30PM**

Thus at speeds averaging 20MBps transfer, we could succesfully recover almost all of the data. It took us 18 hours in the process of transfer. 

Later we retired the defective drive and took another 2Tb hard disk and transferred back the tracks into it, which would then be the replacement.

**15th February 2015 1:30AM**

This disk was then put back into the same workstation hosting the previous disk and thus Muzi was revived!

## Permanent Losses and Recovery

In this recovery process, we lost a total of 2000 songs, 34 of Hindi and rest of them of English. We are determined to get them back and in the next few days, we will cross verify our database dumps for the missing songs and get them back.

Thanks to Teracopy for humane copy controls and good error reporting in this regard.

## Future Thinking

We are totally moved by this situation and will go to any lengths to make sure such an incident never happens again. 

We have already drafted an initial plan of building our own Network Attached Storage housing massive space in 10s of Terabytes so that, we will never be short of space and resort to hacky methods for backup. We aim to shift all the storage intensive application to this NAS in the near future and take regular backups, however large the data may be.



