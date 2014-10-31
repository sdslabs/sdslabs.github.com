---
layout: post
title: Launching Backdoor
excerpt: SDSLabs launches backdoor
author:
  name: Dhaval Kapil
  link: http://dhavalkapil.com
  bio: Developer, SDSLabs
  twitter: dhaval_kapil
  image: vampire.jpg
---

Backdoor is a platform for the hackers out there to showcase their talent in a competitive environment. Currently it has been launched only within the IIT Roorkee campus.

> It is a Capture the Flag styled event. A flag (basically a string) is associated with every challenge. Once you have solved a particular challenge you would get the hidden flag which you need to submit back to us for getting points.

##History

In March 2013, SDSLabs organized the first ever Capture the Flag event by IIT Roorkee under the banner of Cognizance, the technical festival of IIT Roorkee. 80 teams participated in it from all over the world with Team [dcua](https://ctftime.org/team/762 "Team dcua")(currently ranked 9 at [ctftime](https://ctftime.org/ "ctftime") winning it.

Encouraged by its success, SDSLabs was back with BackdoorCTF '14 the next year during Cognizance. We had a participation of whopping 460 teams from 68 different countries. 

Inspired by all this, we decided to develop Backdoor not only as an annual CTF, but as an application that consists of challenges available for the user anytime of the year, more like a continuous learning environment, a cyber security playground. Apart from this, we shall be hosting competitions frequently. 

> ###Challenges

The challenges in Backdoor will range from web, security, network, binary, crypto, etc. Each of these will have a score associated with them. We have tried to simulate real world applications so as to give a hands-on experience. To solve these challenges you would need to exploit some vulnerability.

##Practice Arena

Backdoor has a Practice Arena where users can test their skills by solving various challenges. Each challenge will be tagged for easier accessibility. Users will be ranked based on their scores.

##Competitions

This is where we would be hosting our competitions. There will be team participation as is the case with many other CTFs. Each competition will be open for a particular amount of time only and there will be a separate leaderboard for each one. Challenges will be shifted to Practice Arena soon after the competition ends. 

##Screenshots

![PracticeArena](/images/posts/launching-backdoor/practice-arena.png)

![Competitions](/images/posts/launching-backdoor/competitions.png)

![User](/images/posts/launching-backdoor/user.png)

##Technical details

1. The challenges are hosted on a different server so that the main Backdoor platform is free from any exploits.
2. We even have a different domain for the challenges so as to prevent an XSS vulnerability in one of the challenges leading to the hijacking of the SDSLabs account of the user.
3. Backdoor's backend is written in PHP using Toro as the framework.
4. All the services on the server are running in a chroot jail thereby preventing access to the parent directory and files.
