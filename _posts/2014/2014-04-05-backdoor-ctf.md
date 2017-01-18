---
layout: post
title: BackdoorCTF '14
excerpt: "A jeopardy style capture the flag competition organized by SDSLabs"
author:
  name: Abhishek Kandoi
  twitter: kandoiabhi
  bio: 2nd year, Computer Science & Engineering
  image: kandoi.jpg
---

After all our work on software development, testing and security analysis, the time prompts us to showcase what we have learnt. Over the years we have found that the best way to teach people how to build secure systems is by giving them practical experience with problems that are rare to encounter otherwise. Backdoor is our public facing computer security competition. Leveraging Backdoor as a platform for the same is in itself an interesting task. This is the second time SDSLabs has organized such a competition over the internet. We must say that the knowledge we gained while organizing it is immense.

![BackdoorCTF](/images/posts/backdoor-ctf/logo.jpg)

For those who missed out, Backdoor is a jeopardy style capture the flag competition organized by SDSLabs. That is, it involves multiple categories of problems, each of which contains a variety of challenges of different point values. Corresponding to each problem is a hidden flag (basically a string) which must be submitted to us as a proof of having solved the problem. Keeping the interests of both beginners as well as advanced users in mind, we designed a series of interesting challenges to get hands-on practical experience.

An active participation of teams from over 68 countries made Backdoor a huge event. It witnessed an overwhelming participation of over 460 teams, with more than 330 teams submitting atleast one flag. The competition took place over a period of 36 hours during Cognizance 2014, the annual technical fest of IIT Roorkee. We faced a few glitches during the contest (teams being awarded twice the actual points for a flag), but overall the contest went smooth.

While designing the challenges we picked some of the problems that we actually faced while working on our applications whether it be related to SQL Injection, network analysis or cryptography. We tried to frame the challenges around these concepts, simulating real world applications. Solving the challenges required deep understanding of a wide array of topics such as reverse-engineering, network sniffing, protocol analysis, web security, system administration, and cryptanalysis. For instance, one of the challenges was based on the RSA encryption algorithm, and it was really essential to know the working of the algorithm to be able to solve the challenge.

As an aside, BackdoorCTF reflects a lot of what we've learned while building applications at SDSLabs. If you're interested in this kind of a thing, have a look at [how to join SDSLabs](https://blog.sdslabs.co.in/2014/01/how-to-join-sdslabs/ "How to join SDSLabs"), drop us an email at <contact@sdslabs.co.in> and we’ll make sure you aren’t disappointed.

We will be coming up with a bigger, better and more challenging one next year.

## Technical Details

* For SQL injection based problems we created a new MySQL user with only **SELECT** privilege (on a separate database) so as to prevent any possible security leak

* A custom script was written in Python to generate the two random 110bit (~10^33) prime numbers (**p** and **q**) for the RSA encryption challenge. The primality was tested using a modified miller-rabin test.

* aircrack-ng was used to design the WPA PSK password cracking challenge.

* Some of the challenges were hosted on Heroku to ease the load on our server, as well as to run the challenges in isolation for security reasons.

* One of the challenge involved github webhooks to add users to a common github organization and ping the server with commit details.
