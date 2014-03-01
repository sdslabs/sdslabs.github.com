---
layout: post
title: Code.Fun.Do '14
excerpt: "A team of 4 from SDSLabs participated and won in the code.fun.do hackathon organized by Microsoft"
author:
  name: Divij Bindlish
  twitter: DivijBindlish
  bio: 2nd year, Electrical Engineering
  image: divij.jpg
---

The best and the most creative ideas lie somewhere in the minds of sleep deprived, college students, locked in a small and dark corner of their minds. A _Hackathon_ provides a platform to these people to code unique solutions to general problems and allows them to transform their ideas to websites, mobile applications or in some rare cases, cool robots. Code.fun.do is a series of hackathons organized by Microsoft to foster creativity and promote innovation in the best institutes across the country.

![Opening Ceremony](/images/posts/code-fun-do/opening.jpg)

The first ever Code.fun.do hackathon took place at IIT Kharagpur in November 2012. A large number of hackathons have since been conducted in the top institutes all across the country. This was the first time that the hackathon was organized in IIT Roorkee and the response was more than stellar. A total of 228 people participated in the event which was almost 1.5 times the number of participants in other institutions. Building on top of that, a record breaking 45 apps were submitted bringing the submission rate to an amazing 70% compared to only 50% for other institutions.

The event started on 7th February, 2014 with workshops and hands-on sessions for students on how to build software applications for a range of devices such as Windows 8 tablets / PCs, Windows Phones and Kinect, connected and integrated across platforms and network boundaries through Windows Azure. Another session was conducted the next day about design and UX and it’s importance in the rapidly changing application development market.

SDSLabs, being at the forefront of software development in the campus took part in the event and one of our teams (yes, we had multiple teams) won by making Air Maps, an application to navigate google earth using gestures and voice commands. The winning team included Abhishek Das, Ravi Kishore Rachuri, Durgesh Suthar and Divij Bindlish, all members of SDSLabs, studying Electrical Engineering in the campus.

The Air Maps application creates a flying simulation over any city across the globe and the view is controlled using gestures. The application also shows educational places like museums, parks and national monuments on the city. You can pause at any location and see corresponding history and information about it. Relevant tweets are also displayed for that location. It also supports voice commands which allows a user to directly fly to a different city by saying “Fly to New York”. The application also supports street view to create a simulation of standing at a particular point inside a city. The view changes on when the user turns or moves in space.

![Airmaps](/images/posts/code-fun-do/application.jpg)

All the four members of the top two teams won a Nokia Lumia 520 each. Apart from this, the 5 shortlisted teams get to be a part of the Finalists Forum, run by Microsoft where they are mentored by technology experts, both from within and outside Microsoft, to build impactful apps, over a period of approximately three months. These teams get to compete on a national level where the competition is much better and more fierce.

![Closing Ceremony](/images/posts/code-fun-do/closing.jpg)

With an amazing response by the students and the professors of IITR, the crew from Microsoft was more than happy. Thus, we can expect them to show up next year as well with a bigger event with more workshops and better prizes. This is just a starting step which in the long run, will help the campus become more technology oriented.

##Technical Details

The winning application, AirMaps was a web based application with a server and client. A Kinect device was connected to the server. Data was crunched in C# and the corresponding result was sent to the front end using a custom modified Alchemy C# websocket server. User’s gestures and voice was recognized using robust SDKs provided by Microsoft and appropriate actions were defined for certain gestures and voice commands. This was built on top of the Kinect WPFViewers framework for faster development. The front-end utilized Google’s Earth, Maps, and Street View APIs to render the 3D landscape of a city and viewing street images. Apart from this, Twitter API was also used to display relevant popular tweets about any city or location.