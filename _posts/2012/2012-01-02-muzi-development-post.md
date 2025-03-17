---
layout: post
title: Muzi Development Blog Post
excerpt: We detail the process of development of Muzi, our online music player application. Please remember to check the application at sdslabs.co.in/muzi.
---
<div>
<style>
/**
  This is for making large images in this post come within the white area.
**/
img{
    max-width:800px;
}
</style>
</div>
[Muzi](https://sdslabs.co.in/muzi/) is an online music player application developed by Team SDSLabs. This blog post will go into the development of the application.

The first ray of light that the application's development saw was in January 2011, with a few mails being exchanged in our Google Group regarding the lack of an online music player that could offer the same experience as a Desktop Player. A few core features were identified, including :

1. Ability to browse albums via any categorization (including Albums, Artists, Genre and Year)
2. Easy searching of songs.
3. Well tagged songs.
4. Use of Album Artists instead of Track Artists
5. Easy and usable interface, which reminds people of a desktop player.

Whenever in doubt, we looked at three different desktop players - [Zune](https://www.zune.net/en-US/products/software/default.htm), [Windows Media Player](https://windows.microsoft.com/en-IN/windows/products/windows-media-player), and [iTunes](https://www.apple.com/itunes/).

A few mockups from early February :

![Muzi Playlist View inspired from Zune](https://sdslabs.co.in/muzi/mockup/Playlist.png)
![Video View](https://sdslabs.co.in/muzi/mockup/video.png)
![Default View](https://sdslabs.co.in/muzi/mockup/muzi.png)
![Another Default View](https://sdslabs.co.in/muzi/mockup/muzi2.png)

The design was iterated several times, leading to the design that you see today.
<!-- Moved the images to the blog itself from minus.com as it was getting blocked for hotlinking-->
![Quite similar Designs](/images/posts/dbt7dM.png)

Several other iterations were discussed, such as this one, which was ultimately ruled out as being too complicated :

![Difficult to use play/pause](/images/posts/db2QU8.png)

A current pic of the application is given below as reference.

![Current Version](https://fbcdn-sphotos-a.akamaihd.net/hphotos-ak-snc7/388548_281184221928070_182484805131346_835810_1854827723_n.jpg)


The application was written using [JQuery](https://jquery.com) for easier Javascript syntax and several plugins, [SoundManager 2](https://www.schillmania.com/projects/soundmanager2/) for music playing capabilities. We also worked on using HTML5 Canvas for visualizations, but ultimately dropped it for the current version, as it was slowing down muzi. We had, from the very beginning tried to keep muzi as fast as possible. In fact, we were adamant about not adding JQuery until later in the project, when it became a necessity.

For future developers, here are a few tips :

1. Don't think that your project will be done in a weekend. Any project of good size and scale takes time to mature, and takes up much more time than you can possibly estimate correctly.
2. JQuery makes Javascript easy. And better.
3. Don't be afraid of using Plugins and 3rd party code. They are far more tested than anything you can cook up in a shorter amount of time.
4. Even though we did not use it (we were not aware at that time), I would highly recommend using [Backbone.js](https://documentcloud.github.com/backbone/), [Underscore](https://documentcloud.github.com/underscore/)
5. Having a simpler experience with fewer features is better than having a feature bloat with confused users.
6. Software Development is an iterative process. Treat it as such. Work at one feature at a time, test it and then move to the next one. For beginners, I would recommend reading [Head First Software Development](https://headfirstlabs.com/books/hfsd/)

A few fun facts about Muzi :

1. Major keyboard controls from VLC work in Muzi as well. Here's a list of the most common ones :

    a. Ctrl+Up/Down to increase/descrease Volume. Works even without the control key.

    b. Left/Right changes the current track.

    c. Shift+Left/Right skips the current playing track

    d. *m* mutes the current track, while *space* pauses/plays it

    e. The *home* key takes you to the default view of muzi

    f. *Ctrl+s* takes your input to the search box immediately

2. Two Developers worked on this application primarily with everyone else open to contributions. Input was regularly recieved from the entire Team and went into deciding major portions of the app.

3. Muzi uses latest web technologies, including HTML5 and CSS3, leading to its inability to work in older browsers. For that, we apologize to users with a smile and ask them to get a better browser.

For any queries regarding muzi, or SDSLabs in general, you can always contact us at <contact@sdslabs.co.in>
