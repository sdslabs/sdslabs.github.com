---
layout: post
title: Launching Study Portal and Echo v2
excerpt: SDSLabs is proud to announce a new application, Study Portal, and revamped version of Echo.
---

Following on the heels of [Erdős and CodeBot](http://blog.sdslabs.co.in/2013/10/erdos-codebot/), SDSLabs is proud to announce [Study Portal](http://study.sdslabs.co.in), and a revamped version of [Echo](http://echo.sdslabs.co.in)


##Study Portal

For a long time education in IITR has been a uni-directional flow: Professors upload files to LecTut and students download them. But the handouts provided by the professors are not the only reference material needed for a course. A lot of students come across OCW/NPTEL courses which have more informative slides. Students also use files that have been handed down by their senior batch who were given those files by their senior batch and so on. Normally, such sharing involves Dropbox/Google Drive for sharing files and FB/Google groups for posting links etc. This process takes place every single year. 

IITs are supposed to be hubs of excellence and not boring repitition. So we decided to fix the situation.

![Study Portal Home Page](/images/posts/sp-echo/sp1.png)

[Study Portal](http://study.sdslabs.co.in) allows anyone to [upload](http://study.sdslabs.co.in/upload) files to courses that are taught in IITR. These files can be professor's handouts, practical manuals, tutorial solutions, class notes etc. And these files are going to outlast your tenure in the lands of IITR.

![Study Portal Department Page](/images/posts/sp-echo/sp2.png)

If a course is not listed in the uploads page, you can [request](http://study.sdslabs.co.in/request) its addition. You can upload files to a course that you have requested as well as share the permalink to the course even before it is approved. Once it is approved by Team SDSLabs, it will be listed in the left bar.

![Study Portal Course Page](/images/posts/sp-echo/sp3.png)

While we have uploaded over 600 files to a multitude of courses for launch, the sole purpose of this app is to enable sharing. We hope that with user contribution, the app will soon be the knowledge base of IIT Roorkee.

Check out the application at [Study Portal](http://study.sdslabs.co.in)


##Echo

There are very few amongst us who do not enjoy the pleasure of sinking into the depths of a book. Searching for books, however, has always been a real pain. We seek to fix this problem, therefore we are launching Echo, a fast and powerful ebook search engine which is designed to help you find the books you want instantaneously.

[Echo](https://echo.sdslabs.co.in) has been completely revamped, with an all-new look, and significant improvements in search relevance and user experience. New features, like the option to read books in the browser itself without the need for downloading them, have been added too. You can also search for books by any [favourite author](https://echo.sdslabs.co.in/author/George-R.-R.-Martin) of yours.

![Echo Home Page](/images/posts/sp-echo/echo1.png)

Echo boasts of a collection of over 35,000 novels, academic journals and other books. A whole myriad of options exists for you, with wide-ranging categories like [economics](https://echo.sdslabs.co.in/search/economics/1), [algorithms](https://echo.sdslabs.co.in/search/algorithms/1) and [fantasy](https://echo.sdslabs.co.in/category/Fantasy/1). Spend a weekend reading classics like [The Great Gatsby](https://echo.sdslabs.co.in/book/41995/the-great-gatsby), and another [brushing up your programming skills](https://echo.sdslabs.co.in/book/14939/introduction-to-algorithms) for an upcoming interview.

The collection of books is being updated regularly.

![Echo Author Page](/images/posts/sp-echo/echo2.png)

We'd also appreciate [contributions](https://echo.sdslabs.co.in/contribute) from the community. If you'd like to upload your own collection of books, or if you have suggestions for books you think should be available on Echo, please [contact us](mailto:contact@sdslabs.co.in).

We hope you have a great reading experience with Echo!

Check out the application at [Echo](http://echo.sdslabs.co.in)


##Technical details

###Echo
* [Apache Solr](http://lucene.apache.org/solr/) is used to maintain our index of books, and perform search queries.
* This app uses [Limonade](http://limonade-php.github.io/) PHP framework

###Study Portal
* This app uses [Toro](http://toroweb.org/) PHP microframework.
* The ajax layouts are generated using [Handlebars.js](http://handlebarsjs.com)
