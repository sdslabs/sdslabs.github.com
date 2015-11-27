---
layout: post
title: Dockerizing Backdoor
excerpt: Backdoor now runs on Docker containers
author:
  name: Ashish Chaudhary
  link: https://ashishchaudhary.in
  bio: Developer, SDSLabs
  image: ashish.jpg
---

[Backdoor](https://backdoor.sdslabs.co/) is a long-lived Capture The Flag style competition run by [SDSLabs](https://sdslabs.co/). For the uninitiated, in [Capture The Flag (CTF)](https://ctftime.org/ctf-wtf/) style events in network security, participants have to solve questions in various categories like cryptography, web, binary exploitations etc. Backdoor hosts CTFs from time to time having duration ranging from 6 hours to 1 day.

On the basis of how challenges are presented on Backdoor, there are two broad categories:

1. Webpage-based (hereafter referred to as `public` type):  
   These challenges are accessible from a web browser. Example: [JUDGE](https://backdoor.sdslabs.co/challenges/JUDGE), [MEDUSA](https://backdoor.sdslabs.co/challenges/MEDUSA).
 
2. Interactive challenges (hereafter referred to as `script` type):  
   These challenges are accessible over netcat. Example: [CLOSED](https://backdoor.sdslabs.co/challenges/CLOSED), [RAPIDFIRE](https://backdoor.sdslabs.co/challenges/RAPIDFIRE)
 
Then there is the third type where the challenge requires both types. Example: [TEAM](https://backdoor.sdslabs.co/challenges/TEAM).

### Previous architecture:

The public-type challenges were served by an Apache server running at `http://hack.bckdr.in`. The script-type challenges were run in `chroot` jails and served using the `xinetd` super-server. `chroot` operation is used to mimic the current directory as the root directory of the system ([change]root). More can be learned about this from [this post](https://dhavalkapil.com/blogs/Combining-chroot-and-xinetd/) by [Dhaval Kapil](https://twitter.com/dhaval_kapil).

### Problems with the previous architecture:

For public-type challenges, the same structure has been retained. Earlier, all challenges had the same `virtualHost` but now each challenge has its own. This was done to better implement challenges that required custom rules or a custom domain name.

Script-type challenges, however, had some major problems:

1. The aim is to run all script-type challenges in `chroot` jails but adding new environments to the jail is a huge pain.
2. There is a big problem of redundancy. Because each challenge runs in a separate jail, each of them had their own copy of the necessary environment. This can be solved by creating a common jail for all challenges, but that puts other challenges at risk in case one of them gets compromised.
3. Automated monitoring of challenges' deployment status is not easy because there is no standardization.
4. Deployment takes up a lot of time. Shifting challenges from one machine to another and ensuring they work fine required a lot of manual labour given that we have 70+ challenges and many of them require an elaborate setup.

### Tackling the problems:

Initially, I started working on problem 4 but figuring that out was turning out to be insanely difficult because of no standardization in the challenges. It was obvious then that a restructure was necessary. Looking for alternatives, I found Jails in FreeBSD. While these jails did solve problem 1 with their ease of setup and adding new environments, problem 2 still persisted. I came across Docker while learning about jails and after spending some time in containers, Docker became the obvious choice.

### How Docker solves these problems:

The description on the [Docker](https://www.docker.com/what-docker) website reads:

> Docker allows you to package an application with all of its dependencies into a standardized unit for software development.

And that's precisely what we need!

1. Setting up a new environment is as easy as `docker pull python` which effortlessly sets up a python image for us. And we can make our own Docker images to be used and combined with other images.
2. Each Docker image consists of a series of layers. Docker makes use of union file systems to combine these layers into a single image. These layers are where the magic lies. If you want to update an image, instead of updating the whole image, only the relevant layer is updated. And these layers can further be used to stack images one over the other! So we can just build a python environment once and use the same layer for building secondary layers without redundancy thus solving problem 2.

With the major problems sorted out, lets look at the new architecture.

### The new architecture:

The flowchart below explains how we build layers upon layers to reduce redundancy.

![Hack architecture](/images/posts/dockerizing-backdoor/architecture.svg)

First we build an image `hack-base` that is based on an Ubuntu 15.04 image itself. We use this image to install various packages that will be required by multiple challenges and thus reducing redundancy. We follow the same approach as we move up the chart. We make separate images for each type of primary environment (nodejs/python etc) and further build an image for each challenge + images for any external dependency they need (like redis/mongodb). Then we create what are called `containers` that are instances of the challenge images and link containers of external dependencies, if any. It's worth noting that the user cannot modify the image itself. The user is provided with a writable layer over the container. You may as well run `rm -rf /*` in an Ubuntu container and it will delete all your commands and system files but only from that instance. So you can just close the container and spin up one more in less than 2 seconds and whamm! you get the vanilla system back!

As for the networking to and fro from the container, we have to expose the ports that we want to map to the system. Say if a challenge based on python listens on port 8999, we expose this port from within the container and map it to a port on the system (usually the same as the one in the container). The Docker documentation provides good examples for this. Then we use the `xinetd` super-server to listen to the requests to the specified ports and spin up a disposable container accordingly.

### The deployment tool:

To solve problem 4, we created a tool named Beast. Beast is written in python and performs all the tasks from syncing the challenges with the production server to building the challenge images and setting up the `xinetd` service. It can be used to deploy challenges locally or to multiple remote machines at once. After any action is performed, our Slack channel receives a notification from Beast about the deployment.

![Beast report on Slack](/images/posts/dockerizing-backdoor/beast.png)

Beast also monitors the resource usage of running containers using [google/cadvisor](https://github.com/google/cadvisor) and raises an alarm if something looks bad. It also exposes an API to check the challenge deployment status.

One important feature of the new architecture is the standardization it brings. Now each challenge specifies a setup file that is used as a deployment guideline by Beast. Let's take a look at a sample challenge `pytest` that is a mixed-type challenge. The setup file for `pytest` is shown below.

<script src="https://gist.github.com/yankee101/58075d100b2658fc7070.js"></script>

The keys used are self-explanatory. Note that the challenge creator can also specify bash scripts for elaborate deployment (like if some challenge requires `composer install`).

Here is a sample of how the tool works:

<div style="text-align: center"><blockquote class="imgur-embed-pub" lang="en" data-id="4jYSvcU"><a href="https://imgur.com/4jYSvcU"></a></blockquote></div><script async src="https://s.imgur.com/min/embed.js" charset="utf-8"></script>

### What's next?

We have some really cool ideas in store for Backdoor in the coming months. Stay tuned for more!

<b>Note: </b> This post is also available at [Dockerizing a CTF](https://ashishchaudhary.in/dockerizing-a-ctf/).
