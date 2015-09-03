---
layout: post
title: Launching Hubble
excerpt: SDSLabs launches Hubble
author:
  name: Asutosh Palai
  link: http://asutoshpalai.in
  bio: Developer, SDSLabs
  twitter: asupalai
  image: palai.jpg
---

_Today, we launched a new application called [Hubble](https://hubble.sdslabs.co)._

## Well first, what _is_ Hubble?

Simple answer, **Hubble** is a **_link sharing platform_** for IITR junta where they can share resourceful links. 

Whenever you come across something catchy online and feel that it's pretty interesting, what do you do? I guess, you share it on Facebook or Google+. But, as you might have noticed, these resources get buried under the pictures and status updates of your friends. Hardly does anybody open Facebook when in a mood to read about something insightful.

So, we decided to create a platform where you can easily share links to articles and videos that you think will help others, being sure that it is read by right minded people.

Whenever you read a trendy/mind-blowing post, a pathbreaking scientific research article or an interesting UI/UX article and want to share it not only among your friends, but also to a larger audience having similar interests, Hubble is your place to go. It is not only about sharing links but you can also start a discussion around something through comments.

## Ask Hubble: Do you want to ask the users’ opinion on certain topics?

Yes, you guessed it right. You can also **post questions** (without links) where the users can answer or give their opinions. All you have to do is go to the [Add page](https://hubble.sdslabs.co/submit) and start asking your question with `Ask Hubble: ` as the prefix, or you can click on the link in the suggestion text above the input field, and it will insert this prefix for you.

## Sign up is restricted to invites only

Ensuring that the resources shared by people do not end up being spam, we are restricting to an _**invite based Sign up system**_. This is to ensure that the links posted are worth your time and do not link to adult or religiously inclined content. Also, you might not want to read insensible or irrelevant comments. Not that we are trying to enforce anything. Only that at present it lacks moderation, so we had to restrict the sign up in some way.

**_You are still free to use Hubble without Signing in. The Signin restriction is only for engagements like voting, posting and commenting._**


We will also be distributing invites to users based on their activity. They can then invite their friends. 

## Now lets talk about some technical aspects of Hubble.

The technologies used while building and in running Hubble are:

- The backend is on PHP using Slim (a microframework)
- The backend follows the MVC code architecture pattern.
- We are using Twig as the html templating engine.
- We are using [SCSS](http://sass-lang.com/) and hence made our CSS life a bit easier
- We also delegate boring tasks to our faithful CLI tool [Grunt](http://gruntjs.com/).
- We are using [Mailgun](http://www.mailgun.com/) for mailing.
