---
layout: post
title: How SDSLabs works - 2018
excerpt: "An insight into the tools used inside SDSLabs"
---

SDSLabs is roughly run as two cells (programming/design) that collaborate with each other on everything. This blog post will take a look at the various tools, technologies, and applications that we use on a daily basis. It is our hope that some other groups in the campus might be interested in this. We’re open to the inquiry about any of this, and you can reach us anytime at [chat.sdslabs.co](https://chat.sdslabs.co/) or [contact@sdslabs.co.in](mailto:contact@sdslabs.co.in).

**Mailing List**: Our mailing list, like most other groups', runs on Google Groups. This is our primary means of communication. We send out a lot of mails, and email-overload is an actual problem for people who just join. All notifications regarding discussion of projects or general meetings are sent over the mailing list. We didn't want to disturb our alumni over our regular meetings, so we now have a separate groups for current members and the alumni.

![Mailing List](/images/posts/labs-work/list.png)

**Facebook Group**: Like everyone else, we too have a private Facebook group too. Unlike most other groups, we hardly ever use it. We find the Facebook notification system terrible, and the comments system broken for serious discussion. Hence we limit discussion on Facebook to bakar (random chit-chat) and taking jibes at each other. We also keep a document with our internal lingo here.

**Slack**: As a software development team, having around 50 members who work on various projects, need for a central communication platform is a must. Every member is aware of the discussion going on on every project and thus can give inputs which are equally valued. We are completely transparent regarding our working, and encourage everyone to communicate only in public channels. As a student group, it is not feasible for us to pay the hefty monthly fees for Slack premium, but the free version has almost all the features we need, be it the option to add a number of integrations, or infinite members.

**Hubot**: We built ourselves a bot around [hubot](https://hubot.github.com/), written on [CoffeeScript](https://coffeescript.org/) and hosted on [Heroku](https://www.heroku.com/), to serve our daily needs: plus-plus (a positive reinforcement for doing something great, and a primary driver of work in Labs), keeping track of embarrassing aliases, information about any member, knowing which people are in lab at any moment, and much more. Recently, we added a score counter for the number of messages sent by every member in a week to encourage members to interact on a daily basis. The one with the highest gets a plus-plus. The bot is highly customizable, and only a script file needs to be added for a new feature.

![Plus Plus](/images/posts/labs-work/plusplus.png)

![Bot info](/images/posts/labs-work/info.png)

![Most messages](/images/posts/labs-work/most.png)

**Presence**: It is a tool that is primarily aimed at increasing people's presence in Labs. We maintain a competitive board wherein we keep the score as the number of hours spent by a person in the lab. It also helps our bot determine who all are present in the lab at any given moment (we also have a spycam, just in case). It works by identifying users based on the [mac addresses](https://en.wikipedia.org/wiki/MAC_address) of their devices which are requested using a [arp scan](https://linux.die.net/man/1/arp-scan). A script is used which logins on our TP-Link router's portal and fetches the mac addresses and for other router's since they can not provide mac addresses of connected devices natively, we had to patch the router firmware in order to do so. This mac address scans is a [cron](https://en.wikipedia.org/wiki/Cron) which runs every minute. And every five minutes, the leaderboard is updated. As for the spycam, we have another cron job set up which takes pictures of the lab every 15 mins, or whenever requested by the bot at any time.

![Presence](/images/posts/labs-work/presence.png)

**Watchdog**: Managing people's access to servers was one hell of a job. Asking for their public key, copying it over to the server, and deleting it when access needed to be revoked. So, we built ourselves a little (yet powerful) tool to ease the process. Whenever someone tries to log in to a server, Watchdog checks a repository for whether that person has access to that particular user on that particular server, and denies or grants access based on that. Anyone seeking access to a server needs to open a pull request on that repository, and access is granted after it is approved and merged. A simple commit is all we need to grant or revoke access. We also added extra feature of keeping track of who is accessing what and at which level of privilege, and all that information is posted by a bot on a channel on our slack. So, it is out in open for everyone what everyone is up to. The whole idea of watchdog is based on how linux uses [PAM](https://en.wikipedia.org/wiki/Linux_PAM) modules for authentication purposes. We built our custom modules and added them to predefined `sudo`, `su` and `sshd` modules.

![Watchdog](/images/posts/labs-work/watchdog.png)

**Dropbox**: Our designers primarily share their work through Dropbox. All our designs, past and present are stored in Dropbox. We also use it to share documents. A new Facebook feature for Dropbox sharing within Facebook groups was actually a great boon for us as we use both products together.

**Github**: We host all our repositories on Github. We have unlimited private repositories, and though we encourage open source, we prefer to keep some of our applications private. We extensively use Github features, such as issue labeling, milestones, and projects, to keep track of work needed for a project to be shipped on time and with perfection. We go by one rule **master should always be deployable**.

![GitHub](/images/posts/labs-work/github.png)

**Trello**: We use trello boards for keeping track of the current status of a project. Since we started using this we have experienced a great acceleration towards the completion of our projects.

![Trello](/images/posts/labs-work/trello.png)

**Workflowy**: We use a custom account at [Workflowy](https://workflowy.com/) with a shared list to easily manage lots of things. We find that the list system of workflowy is an excellent place to chalk out ideas and hold brainstorming sessions in writing. Workflowy keeps track of most of our administration related stuff, with tenders, management contacts, and events of various subgroups, etc. being stored there. A daily log of our changes on workflowy is forwarded to our google-group so everyone is kept in the loop about any changes made there.

![Workflowy Home Page](/images/posts/workflowy.jpg)
