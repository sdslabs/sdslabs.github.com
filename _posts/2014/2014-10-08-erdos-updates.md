---
layout:     post
title:      "Erdős: Search, Activity, πrates, etc."
excerpt:    "We're launching lots of big improvements to Erdős"
author:
  name: Abhishek Das
  twitter: abhshkdz
  bio: Developer, SDSLabs
  image: abhishek.jpg
  gplus: +AbhishekDasZ
---

[Erdős][erdos] is now an year old and has come a long way from when it was launched back in October 2013. As it continues to [gain popularity](https://news.ycombinator.com/item?id=8313702) among math geeks the world over, we have been silently working super hard to make it even better. Today, we're unveiling lots of big improvements to Erdős!

## Search

Tucked away neatly in the topbar, the search bar is accessible from everywhere and helps you discover users, problems, tags easily. This includes full-text search within problem statements as well as searching for a particular tag using square brackets, like [this](https://erdos.sdslabs.co/search?q=%5Bnumber%20theory%5D).

![search](/images/posts/erdos-updates/search.png)

Searching for a user by name or username would return links to relevant user profiles as well as problems created by that user.

![search_users](/images/posts/erdos-updates/search_users.png)
![search_problems_2](/images/posts/erdos-updates/search_problems_2.png)

Searching for a tag would list all problems with that tag. For example, here we search for [combinatorics](https://erdos.sdslabs.co/search?q=combinatorics).

![search_tags](/images/posts/erdos-updates/search_tags.png)

It works just like you'd expect it to. Go give it a try.

## Activity

![activity](/images/posts/erdos-updates/activity.png)

In addition to [activity](https://erdos.sdslabs.co/activity) across all problems on Erdős, you can also view recent submissions by a particular [user](https://erdos.sdslabs.co/activity/users/Min) or for a particular [problem](https://erdos.sdslabs.co/activity/problems/2).

## User Profiles

![solved_problems](/images/posts/erdos-updates/solved_problems.png)

Lists were taking up too much space. [Green highlights](https://erdos.sdslabs.co/users/Nihal) save space and look delicious.

![profile](/images/posts/erdos-updates/profile.png)

Public profile information is now editable in [profile settings](https://erdos.sdslabs.co/settings/profile).

## Newsletter

We're starting a newsletter service for Erdős. This will have upcoming competition details, new problems, feature additions and more. No spam of course. You can subscribe to it [here](https://tinyletter.com/erdos).

## Logo

![phex](/images/posts/erdos-updates/phex.png)

Yes, we have a shiny new logo as well.

## πrates

![πrates](/images/posts/erdos-updates/pi-rates-cover.png)

We are hosting [πrates](https://erdos.sdslabs.co/competitions/pi-rates) this weekend. It's a 24-hour online contest with problems set by [PAG](https://pag.sdslabs.co) and ₹7000 hard cash up for grabs, sponsored by [Thomso](https://thomso.in)!

## Technical Details

- We've shifted to a custom [Opauth](https://opauth.org/)-based multi authentication framework which enables us to support Single Sign-On across all our internet applications.
- Our newsletter service is powered by [TinyLetter](https://tinyletter.com/).
- We're using [Monolog](https://github.com/Seldaek/monolog) to log all actions made through our robust admin panel.

That's all for now. Head over to [Erdős][erdos] and give it a try if you haven't already. More updates soon. Cheers!

[erdos]: https://erdos.sdslabs.co