---
layout: post
title: Launching Erdos and CodeBot
excerpt: Two new applications from SDSLabs for math geeks
---


We are proud to announce two new applications from SDSLabs: Erdős and CodeBot.
Both are immediately available to all users. While Erdős is an internal application,
CodeBot can be used by anyone across the world.

##[Erdős](https://erdos.sdslabs.co.in/)

Erdős is an application for Math Geeks to try out new mathematical problems
and keep track of who solves what. Named after one of the most prolific 
mathematician of all times, [Paul Erdős](https://en.wikipedia.org/wiki/Paul_Erd%C5%91s),
it is a portal for users to try their mettle on various mathematical problems,
some of which may require user to write code.

The design of Erdős is clean and card-based, with a focus on user-interaction
above everything else. Go give it a try at <https://erdos.sdslabs.co.in> and
[let us know](https://sdslabs.co.in/feedback/?from=erdos) what you think.

##[CodeBot](http://codebot.sdslabs.co.in/)
Many of you may have heard of [Project Euler](https://projecteuler.net), a 
collection of various mathematical problems ranging in difficulty from easy
to extremely hard. CodeBot is a stylized, terminal-style alternative interface
to Project Euler. It is an online application, available for everyone at
<http://codebot.sdslabs.co.in/>. You can create a new account and submit
solutions to the Project Euler problems. The problems are re-used from Project
Euler under a Creative Commons licence.

With the introduction of CodeBot and Erdős, we are now discontinuing CodeMatics,
some parts of which were re-used for CodeBot. We also plan to hold regular 
contests on Erdős, similar to the CodeBlitz contests we have on CodeVillage.

##Technical Details
- Both Erdős and CodeBot emerged as weekend hacks, which were then polished
over to iron the kinks before their public launch.
- CodeBot uses node.js for the backend, and redis as the storage mechanism,
while being hosted on Heroku.
- [Programming and Algorithm Group](http://pag.sdslabs.co/) (PAG), IITR has
agreed to help us out in keeping Erdős updated with new problems.
- Erdős uses Chart.js to generate all the awesome charts.