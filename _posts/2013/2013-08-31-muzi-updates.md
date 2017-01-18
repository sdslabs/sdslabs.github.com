---
layout: post
title: Muzi updates
excerpt: "Muzi now brings new features including downloads and sharing of tracks."
---

Back when we launched Muzi on 11/11/11, we had no idea that it would get _this_ popular. Ok, we did have some idea! Since then, we have been working on it continuously and have even rewritten it a few times to give you a better experience. We have added several new features to Muzi that have just been deployed to the live version:

## Downloads

We are pretty sure you like listening to your favorite tracks on the go. Muzi now allows you to download the current playing track via the newly-minted Download button.

![The new Download &amp; Share buttons ](/images/posts/muzi/download.jpg)

## Sharing

Music is social, or say the plethora of startups in the music business. Sharing was a highly requested feature and many people wanted to share the current track they are listening to. Now it's possible. Click on the "share" button while playing any track and it will take you to the share-box where you can copy the Share links from. The "track" link in particular will start playing that track automatically. Genius, right? So make sure to share those links high and wide via whatever medium you want.

![The new share box](/images/posts/muzi/share.jpg)

## New artist look (Top Tracks)

With daily listens averaging around [2,000 per day](http://qr.ae/IEj4U), we have a *lot* of data for every artist. Being data nerds ourselves, we think it is so much better if you get to see the top tracks by an artist rather that their entire discography. Now, browsing to an artist via the left pane takes you to a brand new list of "Top Tracks" by that artist, showing the Play Count and Album to which those tracks belong. Now stop wasting your time and listen to good music!

![The new Top Tracks Look](/images/posts/muzi/toptracks.jpg)

## Auto-saving Playlists

The save-playlist flow has not been that good, but now we've gone ahead and completely re-done it to bring you auto-saving playlists. Each time you add or remove a track from a playlist, we'll make sure to save it to the backend so all your precious songs can sleep safe and sound when you are not around.

## Router

The Sherlock wannabes might have noticed that Muzi now changes the URL in the address bar based on its interaction with you. We've shifted the JS observer pattern from event-triggers to URL routing. So now, most browsing events in Muzi take place using the onhashchange event. How does this help you? Well, you can now share link to ticker directly or maybe bookmark a link like <https://sdslabs.co.in/muzi/#/band/7111/30-seconds-to-mars> to quickly return to a particular band.

## Technical Details

- The downloads button is powered using the [HTML5 Download Attribute](http://davidwalsh.name/download-attribute) which allows us to rename the file being downloaded.
- We are using JavaScript side routing for creating the shareable links and giving you a better browsing experience. The routing library we are using is called [Director](https://github.com/flatiron/director)
- We run a Beta Version of muzi up at <https://beta.sdslabs.co.in/muzi/> where you can checkout the latest (possibly buggy) version with cool new features. Features appear on the beta version 1-2 weeks before we launch it on the production version.

--  
Team SDSLabs

PS: Carefully curated an amazing playlist? We may have something for you soon. ;)