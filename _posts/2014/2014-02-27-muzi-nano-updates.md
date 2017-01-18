---
layout:     post
title:      "Nano. Playlists. Recommendations. And more of Muzi."
excerpt:    "We launch Muzi Nano, and lots of other features on Muzi; including shared playlists, random "
author:
  name: Abhay Rana
  twitter: "capt_n3m0"
  bio: Developer, SDSLabs
  image: nemo.jpg
---
Muzi has consistently been our most popular application, and we've worked on it continously over time to make it even better. Today, we announce a slew of new features that we've brought to muzi. We hope these features will help you use Muzi more extensively. As always, we are [open to feedback][feedback] regarding these new features or any bugs you may face.

## Nano

For those of you who have created lots of playlists on Muzi, we bring you [Nano][nano], a specially crafted light version of Muzi. It was designed from the ground up to be lightweight, minimal, and above all easily usable. It does not boast of all the features that Muzi has, but it more than makes up for it with its beautiful interface. Just hit <https://sdslabs.co.in/nano/> (you must be logged in), choose a playlist, and you're all set. Repeat is enabled by default in Nano, and you can turn on shuffle at will. The share link is available directly in Nano for you to use as well. The controls (including keyboard shortcuts) for Nano are same as that of Muzi

![Muzi Nano Screenshot](/images/posts/muzi/nano.jpg)

## Shared Playlists

Muzi now includes support for shared playlists. You can share any of your playlists by just right-clicking on it and clicking on "Share". Shared playlists are accessible to all muzi users by the "playlist" button in the top bar.

## Music Recommendation

This is one feature we've been working on for a long while, and are proudly announcing today. Whenever you're listening to a song, our recommendation engine will crunch the numbers and provide you with a  "Similar" button (in bottom bar). Click on it to get a list of songs similar to the one you are currently playing. Our recommendation engine currently only supports English tracks due to technical reasons, but rest assured, we are working on removing this limitation. Alternatively, you can also right-click on any track in the middle or right pane and choose "Similar" to see similar tracks of any song.

## History Playlist

Even though Muzi logs every song you listen to and shows it to you in tickr, there wasn't any way for a user to get access to that data. Until now, that is. Starting today, if you are logged in, you will see a special "History" playlist in your list of playlists. Click on that to get a playlist of all songs you've ever listened to in Muzi. This playlist is sorted chronologically, unlike the rest of the playlists, so that you can find that one elusive song you listened to a while ago.

## Animated Background

As a tiny improvement in how we make our awesome background even more engaging, artist backgrounds are now animated. This gives a mesmerizing effect to the viewer, and it looks totally awesome!

![Muzi Background Gif](http://drp.io/files/530ef73549bad.gif)

## Collection Play

We've made all track collections in the middle pane playable or addable by adding two new buttons on top of the middle pane. They will be visible whenever you are seeing a track collection. This includes things like "Tickr", "Top Tracks", "Similar tracks", or top tracks by a particular artist.

## Random Play

We've added a new button in Muzi's bottom bar called Random. Its a simple feature that helps you discover new music, randomly. Just click on it, and feast as a random song is added to your playlist.

## Bug Fixes

This release also fixes some minor bugs such as an issue with the download button, and a certain double play bug. We've also removed some old unused code & updated to [using a minified version of all javascript][grunt-blog] in main Muzi. Clicks on the left button now first seeks the song to start, and then plays the previous track on a second click. This behaviour makes muzi more consistent with most other music players.

## Technical Details

- We are using [k-means clustering](https://en.wikipedia.org/wiki/K-means_clustering) and [cosine similarity](http://shagunsodhani.in/recommendation-systems-i/) as the base for our recommendation engine, which is written in Python.
- We handle History playlists similar to the root user in linux. A special playlist id of 0 is used for the history playlist.
- Our background animations are powered by css3-transforms and are functional in both Firefox and Chrome.
- The minification process is based on grunt, which is an excellent tool for these kind of tasks.
- Nano uses [howler.js][howler] as the library for playing songs. We prefer the HTML5 Audio mode, which allows us to stream audio directly.
- Nano is a #nobackend application, which has zero lines of backend code. It uses the existing Muzi backend to perform all of its tasks.

[feedback]: https://sdslabs.co.in/feedback/
[nano]: https://sdslabs.co.in/nano/
[grunt-blog]: /2013/11/automating-with-grunt/
[howler]: https://github.com/goldfire/howler.js/
