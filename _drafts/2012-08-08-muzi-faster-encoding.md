---
layout: post
title: Muzi is now even faster
excerpt: Muzi has been updated to support slow connection networks.
---

Ever since we launched muzi, our aim was to make it _The Music Player of the campus_. Due to the way our network infrastructure is designed at IIT Roorkee, we have an effective split of the visitors muzi recieves. One comes from the faster wifi bhawans (Rajendra, Rajeev, Kasturba) while most of the rest comes from the wifi bhawans.

Most of the songs in muzi are encoded at 320kbps, with the Hindi average being 128-160kbps. Since the songs are buffered while being played, bandwidth requirements are scant, but can often be a cause for slow-down in wifi equipped bhawans. To combat this issue, we have introduced a slow connection mode in muzi. 

The slow connection mode allows people with low bandwidth to enjoy muzi. Behind the scenes, muzi works hard to encode the tracks on-the-fly to a lower bitrate to make the file-size smaller, effectively reducing bandwidth.

If you are connecting from a wifi-bhawan, Muzi will automatically make the switch for you and enable "Slow Connection Mode" for you. You can disable it if you wish. Similarly, you can enable slow connection mode on any connection, even LAN.

##Technical Notes
For the technically inclined, we are converting the music on-the-fly using [lame](http://lame.sourceforge.net/) using the following configuration:

    --vbr-new (Use the new vbr algorithm, which is much faster)
    -V 7 (convert at quality 7 on a scale of 0-9)
    -f (fast mode conversion)
    -B 96 (maximum bit-rate of 96 kbps)

So as to avoid audio degradation, only files larger than 3MB are converted, since they are  (usually) already at a low enough bit-rate. M4A files are converted using [faad](http://www.audiocoding.com/faad2.html) to wav, which is processed by lame. Additionally, the audio file is stripped of all id3 tags causing a large size reduction in some cases (such as where the file includes 2 large cover arts).

We are aware that this on-the-fly conversion causes audio quality to go down substantially, but this is a trade-off we are leaving to the users. You can enable/disable this feature any time you want, and muzi will remember you choice for the next time.