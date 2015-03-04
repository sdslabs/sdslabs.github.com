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

Last year, some time around March, we organized [BackdoorCTF' 14](https://blog.sdslabs.co/2014/04/backdoor-ctf/ "BackdoorCTF '14"). BackdoorCTF is a jeopardy style capture the flag competition, which reflects our aim to foster participation in the field of competitive Computer Security.

Last summer, we discussed the idea of converting Backdoor into a year round platform for computer security hackers.
Things started to get interesting, and we were able to kickstart the project right away.
Before anything else, we knew that the platform would unfold to be success only if, the challenges designed are based around real world scenarios.

Following long discussion sessions, both on slack and in person, over the design and the structure of the code, we deployed Backdoor over the intranet of IIT Roorkee by end of October 2014.

The initial aim was to launch Backdoor over the internet, making it accessible to any inquisitive mind. Following a major refactor of the codebase, to modularize its backend, we made Backdoor accessible over the internet starting 24th February 2015.

Backdoor can be accessed at [backdoor.sdslabs.co](https://backdoor.sdslabs.co "Backdoor"). Challenges designers can be found hanging around at [chat.sdslabs.co](https://chat.sdslabs.co "Chat with SDSLabs")

In order to make sure we have a stable and robust platform ahead of time, we organized scytheCTF, inviting participants from both IIT Roorkee and outside. It started at 4 pm on 26th February and lasted for 8 hours. scytheCTF saw a decent participation, enough to nail down bugs and issues. We have already fixed major bugs, before we make way for our flagship capture the flag event ie. BackdoorCTF '15.

[DefConUA](https://twitter.com/DefConUA "dcua") won the [competition](https://backdoor.sdslabs.co/competitions/scythe15 "scytheCTF").

##Techical Details

* Backdoor Challenges are hosted over a separate domain and on a different server to avoid cross-site scripting and ensure isolation

* The domain object models in Backdoor now extend a Base model which provides common methods and the ability to extend their functionality
