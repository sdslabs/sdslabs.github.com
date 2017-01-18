---
layout: post
title: Muzi Widget, Facebook Chat &amp; Team page
excerpt: "We launch 3 new features: New Muzi widget on homepage; Facebook integration in our native chat application; Shiny new team page"
---
Today we are rolling out a couple of shiny new updates:

## [Muzi Widget](https://sdslabs.co.in/home/)

If you go over to our homepage, you'd see a small searchbox that appears at the bottom of the Muzi tile. Not just search, it is a full-fledged Muzi add-on which works without actually opening Muzi in a separate window, right from the homepage. Really easy to use, just search for a song/album and start listening, or hit that tiny arrow on the left to see a list of the top tracks and albums. You can even play songs from the list of top tracks in the right pane. Just click on a song, and it plays without a fuss in the widget. Pretty neat eh? You bet it is! Go on, give it a shot!  
  [![Muzi Widget screenshot](/images/posts/widget-1.png)
  ![Muzi Widget screenshot](/images/posts/widget-2.png)  
  ![Muzi Widget screenshot](/images/posts/widget-3.png)
  ![Muzi Widget screenshot](/images/posts/widget-4.png)  
  ![Muzi Widget screenshot](/images/posts/widget-5.png)](https://sdslabs.co.in/home/)

## [Facebook Integration in Chat](https://sdslabs.co.in/home) 

Facebook chat is now accessible from our native chat application. Listen to your favourite music alongside chatting with your cool dude on Facebook at the same place or enjoy the night accessing Facebook chat exclusively even after 2AM!  
  ![Fb Integrated screenshot](/images/posts/chat-integration-1.png)
  ![Fb Integrated screenshot](/images/posts/chat-integration-2.png) 

## [Team](https://sdslabs.co.in/team)

And we finally have our team page ready. The design is simple and every member's social links are available when you hover. Don't worry if someone is right at the bottom, refreshing the page might get him on top!  
[ ![Team page screenshot](/images/posts/team-1.png)](https://sdslabs.co.in/team/)
[ ![Team page screenshot](/images/posts/team-2.png)](https://sdslabs.co.in/home/)

## Technical Notes

### Muzi Widget

All the animations are done using jQuery and CSS3 Transforms, and [SoundManager](http://www.schillmania.com/projects/soundmanager2/) is used to play audio, just like Muzi. It is a JavaScript API that uses HTML5 audio and falls back to Flash wherever needed, hence delivering reliable cross-platform audio.

### Facebook Integration in Chat

We have used [Websockets](https://developer.mozilla.org/en-US/docs/WebSockets) and [Node.JS](http://nodejs.org/) for chat. Websockets is a considerably new method which we have chosen over PHP long polling to make the process quick, uninterrupting and care-free.
