---
layout: post
title: Muzi is now even faster &amp; better
excerpt: Muzi has been updated to support slow connection networks, and brings a host of new features including last.fm integration, a live tickr, and auto-updating hindi songs
---
We've upgraded muzi to support slow connection networks, added last.fm integration, and a auto-updating Hindi collection. We also have a live tickr that shows you songs as people are listening to them.

##Slow Connection Mode

Ever since we launched muzi, our aim was to make it _The Music Player of the campus_. Due to the way our network infrastructure is designed at IIT Roorkee, we have an effective split of the visitors muzi recieves. One comes from the faster lan bhawans (Radhakrishnan, Rajeev, Kasturba) while most of the rest comes from the wifi bhawans.

Most of the songs in muzi are encoded at 320kbps, with the Hindi average being 128-160kbps. Since the songs are buffered while being played, bandwidth requirements are scant, but can often be a cause for slow-down in wifi equipped bhawans. To combat this issue, we have introduced a slow connection mode in muzi. 

The slow connection mode allows people with low bandwidth to enjoy muzi. Behind the scenes, muzi works hard to encode the tracks on-the-fly to a lower bitrate to make the file-size smaller, effectively reducing bandwidth.

If you are listening to muzi from a wifi-hostel, please enable the slow connection mode in settings. 

![Screenshot of enabling wifi mode](/images/posts/muzi-slow.jpg)

After you enable the slow connection mode, all songs you listen to are encoded on-the-fly to a lower bitrate with slight reduction in quality.

##Last.FM Integration

Last.FM is a popular music service that helps people keep track of what you've listened to. Its "scrobbler service" is cross-platform and available as a plugin for various music players and services. We've now integrated muzi with last.fm, so if you are listening to music on muzi, it will automatically be added to your last.fm library.

To, get started, you'd need to create an account on [last.fm](https://www.last.fm/join). After you get an account, you can go to muzi, and click on the "Connect to last.fm" option:

![Screenshot of last.fm connecter](/images/posts/muzi-lastfm.jpg)

A click on that link would take you to last.fm authentication screen, where you'd be asked to give permissions to muzi to access your account. 

![Last.FM Auth Screen](/images/posts/muzi-lastm-auth.png)

Once you grant the permissions, you will be redirected to muzi, where a notification should notify you about your successfull last.fm integration. 
![Last.FM Notification on Muzi](/images/posts/muzi-lastfm-notification.png)

After this, every song you listen on muzi will be scrobbled back to last.fm and added to your library.

![Last.FM Recent Tracks](/images/posts/muzi-lastfm-recent.png)

##Live Tickr

We've always wanted to take muzi to the next level for music listeners and make it more social. Today, we're taking the first step in this direction by launching our live tickr. The live-tickr is a continous stream of music that people are listening to right now. Just click on the tickr button in the top bar, and see who's listening to what on muzi.

![Muzi Live Tickr Screenshot](/images/posts/muzi-tickr.png)

##Bug Fixes &amp; New Songs
This update also brings lots of bug fixes, and an improved drag-drop experience. We've also updated hindi songs, so you can listen to all the latest hits from 2012 as well. We've also worked hard on keeping the songs permanently updated, so **new Hindi Releases are automatically added to muzi within a day**. If you feel muzi to be lacking in its music collection, please let us know of your choice using the request feature in muzi.

We are continously improving our services, and are always open to feedback. As always, you can reach us for feedback via [Facebook](https://facebook.com/SDSLabs), [email](mailto:contact@sdslabs.co.in), or our [Feedback](https://sdslabs.co.in/feedback/?from=muzi) page.

##Technical Notes

###Slow Connection Mode
For the technically inclined, we are converting the music on-the-fly using [lame](http://lame.sourceforge.net/) using the following configuration:

    --vbr-new (Use the new vbr algorithm, which is much faster)
    -V 7 (convert at quality 7 on a scale of 0-9)
    -f (fast mode conversion)
    -B 96 (maximum bit-rate of 96 kbps)

So as to avoid audio degradation, only files larger than 3MB are converted, since they are  (usually) already at a low enough bit-rate. M4A files are converted using [faad](http://www.audiocoding.com/faad2.html) to wav, which is processed by lame. Additionally, the audio file is stripped of all id3 tags causing a large size reduction in some cases (such as where the file includes 2 large cover arts).

We are aware that this on-the-fly conversion causes audio quality to go down substantially, but this is a trade-off we are leaving to the users. You can enable/disable this feature any time you want, and muzi will remember you choice for the next time.

###Live Tickr
We are using a new HTML5 API called [Event Source](http://www.w3.org/TR/eventsource/)/Server-Sent Events. This allows us to recieve events from the server on a large number of devices without resorting to other alternatives like long-polling or websockets. This also means that users of some browsers(for instance Opera<12) will be left out of this feature. We gracefully degrade in that case and remove the tickr button if that happens. 