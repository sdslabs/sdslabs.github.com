---
layout: post
title: Backdoor Internet Launch and scytheCTF
excerpt: "Making backdoor accessible over the internet and organizing scytheCTF"
author:
  name: Abhishek Kandoi
  twitter: kandoiabhi
  bio: Developer, SDSLabs
  image: kandoi.jpg
---

Last year, in March, we organized [BackdoorCTF' 14](https://blog.sdslabs.co/2014/04/backdoor-ctf/ "BackdoorCTF '14"). BackdoorCTF is a jeopardy style capture the flag competition. It reflects our aim to foster participation in the field of competitive Computer Security.

Last summer, we discussed the idea of converting Backdoor into a year round platform for computer security hackers.
Things started to get interesting. We were excited to kickstart the project development.
Before anything else, we knew that designing challenges around real world scenarios was critical for platform's success.

Slack played a major role for discussing both design and structure of the code. An overview of the application's user experience design and interaction can be seen [here](https://vikalpgupta.com/projects/bckdr.html "Backdoor UX/UI"). By the end of October 2014, we had Backdoor deployed over the intranet of IIT Roorkee.

The initial aim was to launch Backdoor over the internet. We want it to be accessible to any inquisitive mind. Following a major refactor of the codebase, to modularize its backend, we made Backdoor accessible over the internet starting **24th February 2015**.

Backdoor is accessible at [backdoor.sdslabs.co](https://backdoor.sdslabs.co "Backdoor"). Challenge designers can be found hanging around at [chat.sdslabs.co](https://chat.sdslabs.co "Chat with SDSLabs")

![Backdoor Home](/images/posts/backdoor-internet-launch/backdoor_home.png)

In order to make sure we have a stable and robust platform ahead of time, we organized scytheCTF. For this we invited participants from both IIT Roorkee and outside. It started at 4 pm on 26th February and lasted for 8 hours. scytheCTF saw a decent participation, enough for us to nail down bugs and issues. We have already fixed any major reported bug. With this we make way for our flagship capture the flag event ie. BackdoorCTF '15.

[dcua](https://twitter.com/DefConUA "DefConUA") won the [competition](https://backdoor.sdslabs.co/competitions/scythe15 "scytheCTF").

## Techical Details

* Backdoor Challenges are hosted over a separate domain and on a different server to avoid cross-site scripting and ensure isolation

* An inhouse tool is used for automating the process of deployment

* Backdoor’s backend is written in `PHP` using `Toro` as the framework.

* All the services on the server are running in a `chroot` jail thereby preventing access to the parent directory and files.
