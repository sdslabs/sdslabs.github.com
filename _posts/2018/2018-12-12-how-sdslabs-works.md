---
layout: post
title: How SDSLabs works
excerpt: "An insight into the tools used inside SDSLabs"
---

SDSLabs is roughly run as two cells (programming/design) that collaborate with each other on everything. This blog post will take a look at the various tools, technologies, and applications that we use on a daily basis. It is our hope that some other groups in the campus might be interested in this. We’re open to the inquiry about any of this, and you can reach us anytime at contact@sdslabs.co.in.

**Mailing List**: Our mailing list, like most other groups, runs on Google Groups. This is our primary means of communication. We send out a heavy amount of email each day and email-overload is an actual problem for people who just join. All the notifications regarding discussion of projects or general meetings are sent over the mailing list. We didn't want to disturb our alumni over our regular meetings so we made a separate list for them and now we have two categories in our mailing list: current members and one with alumni.

**Facebook Group**: Like everyone else, we too have our own facebook private group. Unlike most other groups, we hardly use it. We find the facebook notification system terrible, and the comments system broken for serious discussion. Hence we limit discussion on Facebook to bakar and taking jibes at each other. We also keep a document with our internal lingo here.

**Slack**: As a software development team, having around 50 members who work on various projects, need for a central chatting platform is a must. Every member is aware of the discussion going on, on every project and thus give inputs which are equally valued. We are completely transparent within. As a student group, it is just not feasible for us to pay the hefty monthly fees for Slack premium but the free version has got almost all the features we need, be it a number of integrations or infinite members.

**Hubot**: We built ourselves a bot around [hubot](https://hubot.github.com/) to serve our daily needs including our most basic requirement and the thing that drives us: plus-plus, keeping track of embarrassing aliases, information about every member, knowing which people are in lab at any moment, and recently we added a score counter for most message in a week to encourage members to interact on a daily basis.

**Presence**: It is a tool that is primarily aimed at increasing people presence in labs. We maintain a competitive board wherein we keep the score as the number of hours spent by a person in the lab based on the device person has registered with the app. It also helps our bot to determine who all people are there in the lab at any given moment (we also have a spycam just in case).

**Watchdog**: Giving people access to servers was one hell of a job, asking person's public key, then copying it over to the server, so we built ourselves a little (yet powerful) tool to ease the process and moreover strengthen our servers. With this tool, a person seeking access to a user on a server needs to create a pull request on a specific repository and after being approved and merged, our tool would authenticate the person using. So, in a nutshell, access to servers is maintained in a repository and if access is to be granted or snatched away from a member a simple commit is all we need. We also added a little extra utility, of keeping track of who is accessing what and at what level of privilege, and we get all that on a channel on slack #watchdog. So, it is out in open for everyone what everyone is up to.

**Dropbox**: Our designers primarily share all their work through Dropbox. It is all continuously synced with Dropbox. All our designs, past and present have a place in dropbox. We also use it to share documents. A new Facebook feature for Dropbox sharing within Facebook groups was actually a really good helper for us as we use both products together.

**Github**: We host all our repositories on Github. We have unlimited private repositories and though we encourage open source, we prefer to keep some of our applications private. We extensively use Github features, such as issue labeling, milestones, and projects, to keep track of work needed for a project to be shipped on time and with perfection. We go by one rule **master should be always deployable**.

**Trello**: We use trello boards for keeping track of the current status of a project. Since we started using this we have experienced a great acceleration towards the completion of our projects.

**Workflowy**: We use a custom account at workflowy.com with a shared list to easily manage lots of things. It is an easy-going tool which we find useful for quick edits, lookups and at times when creating a google-doc. We find that the list system of workflowy is an excellent place to chalk out ideas and hold brainstorming sessions in writing easily. Workflowy keeps track of most of our administration related stuff, with tenders, management contacts, also events of various subgroups etc stored there. A daily log of our changes on workflowy is forwarded to our google-group so everyone is kept in the loop about any changes made there.

![Workflowy Home Page](/images/posts/workflowy.jpg)
