SDSLabs is roughly run as two cells
 (programming/design) that collaborate with each
 other on everything. This blog post will take a
 look at the various tools, technologies, and
 applications that we use on a daily basis. It is
 our hope that some other groups in the campus
 might be interested in this. We're open to
 inquiry about any of this, and you can reach us
 anytime at contact@sdslabs.co.in.

**Mailing List** : Our mailing list, like most other groups runs on Google Groups. 
This is our primary means of communication. We send out a heavy amount of email 
each day and email-overload is an actual problem for people who just join.

**Facebook Group** : Like everyone else, we too have our own facebook private group.
Unlike most other groups, we hardly use it. We find the facebook notification 
system terrible, and the comments system broken for serious discussion. Hence we 
limit discussion on facebook to bakar, and taking jibes at each other. 
We also keep a document with our internal lingo here.

**Partychat** : We have a partychat account that we use as our personal chatroom
. We would have used Campfire, but its cost raises some barriers. 
Partychat, on the other hand creates a chatroom within gtalk chat for free.
 Partychat helps us remain in continous communication with everyone, while
 moving non-serious stuff away from email. We all hang around at partychat, 
and most of our bakar sessions have shifted from facebook to chat. 
Partychat is a special kind of group-chat, which allows everyone to 
see logs, and it works without having to invite everyone again & again (like _gmail group chat_)

**Hubot** : Our partychat server includes hubot, our own personal robot. 
He announces cricket scores, keeps track of who is working on what, 
announces if anyone makes a commit, and helps us out with lots of stuff.
 We prank around lots of things with bot. 
We use it to answer commonly asked questions, like who is in lab, and
 someone's mobile number, or to urgently call out someone. It is 
integrated with most of our other internal services, and we plan to use it
for even more stuff.

**Dropbox** : Our designers primarily share all their work through dropbox.
 It is all continously synced with dropbox, and available on Redmine 
for offline access. All our designs, past and present have a place in
 dropbox. We also use it to share documents, and work on some side 
projects till we can shift to github/redmine for code hosting. 
A new Facebook feature for dropbox sharing
within facebook groups was actually a real
good helper for us as we use both products together.

**Redmine** : Redmine is a project management system running on rails.
 We use redmine extensively for code hosting(integrated with gitolite), 
issue tracking, and wikis. (add screenshots and more). Our git server is 
running gitolite and all our code is version controlled in git. We shifted to git
from ftp based systems about a year ago, and it has been working out awesome
for us.

**WorkFlowy** : We use a custom account at workflowy.com with a shared list
 to easily manage lots of things. It is an easy-going tool which we find 
useful for quick edits, lookups and at times when creating a google-doc or
 an issue in redmine would be an overkill. We find that the list system of 
workflowy is an excellent place to chalk out ideas and hold brainstorming
 sessions in writing easily. Workflowy keeps track of most of our 
administration related stuff, with tenders,
 management contacts etc stored there. A daily log of our changes on
 workflowy is forwarded to our google-group so everyone is kept in 
 the loop about any changes made there.

**Presence** : Presence is our automated presence detection system.
 A very common question we found on chat was asking "who all is in lab?".
 It became so common to ask this, that we turned to using technology to
 solve our problem. Presence answers this question for us. As mentioned
 earlier, our work culture is focussed on using personal laptops instead
 of workstations. Presence detects the presence of any device that you
 might own, and logs it down. We turn to presence anytime we want to check
 up on who all is present in lab. It uses lan, wifi, and bluetooth scans 
to sniff around people in general. It even takes a photo that refreshes 
every one minute to let us see what state the lab is in. We are looking 
to open-source presence in the near future in hopes it will be useful 
to others as well.

**Llama** : Llama is our in-house
 deployment/management system that helps us run
 services and deploy them easily. We have very
 loose access rules in place. Every lab member has access to the
 source code for every project, which leads to higher transparency in whatever we do.
Llama allows anyone to deploy anything whenever they want. It takes out the pain of
 uploading/moving stuff manually to the server and
 restarting processes and so on. With just a single command to llama,
 it will automate the deployment process for us.

**StatusBoard** : We try our best to keep as good of an uptime
 as possible, but there are lots of
 issues that we just cannot handle. As such, we're
 working on status-board, our own status server,
 that helps us keep track of all our services and
 their health at a glance. It keeps a continous
 track of which services are up/down and for how
 long. You can check the public version at <https://status.sdslabs.co.in>.

**Play** :  We have our music player internally for lab, which plays our songs on the 
lab speakers. We have open sourced it and it is available on [github](https://github.com/sdslabs/play).
Play takes care of the problem we had in playing music over the speakers in lab.
Anyone can send play a request, which may even be a youtube video link and play will play it faithfully.
As for the people who get distracted by music during work, we have our own "Silent Room", which
anyone in lab can use, any time (We encourage using it for studies as well).

We also run our own internal server for cdnjs, use piwik for statistics, 
and continue working on more amazing stuff. We do not limit ourselves
 to any technologies, and have work in php, js, node.js, ruby, scala,
 cpp and some other technologies as well. Our servers run on Ubuntu
 10.04 LTS and we're upgrading them to 12.04 already.

We will be recruiting for designers and programmers from first year in January.
 Any interested second yearites can send a mail to contact@sdslabs.co.in
 mentioning *prior work done*.
