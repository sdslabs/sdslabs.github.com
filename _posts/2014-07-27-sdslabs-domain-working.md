---
layout:     post
title:      "How does the sdslabs.co.in domain name work?"
excerpt:    "People have asked us many times how our domain name works and here is the answer"
author:
  name: Abhay Rana
  twitter: "capt_n3m0"
  bio: Developer, SDSLabs
  image: nemo.jpg
---
A very common asked question is about our domain name and how does it work locally. When we launched [filepanda, and our preliminary homepage](http://blog.sdslabs.co.in/2010/11/hello-world) a long time ago, we had been using the easy to remember IP address [http://192.168.208.208](http://192.168.208.208).

Now, however we are using the domain name sdslabs.co.in for all our services, including [DC](http://dc.sdslabs.co.in). To understand how this works, you will have to understand how the name resolution of a domain name takes place.


>The Domain Name System (DNS) is a hierarchical distributed naming system for computers, services, or any resource connected to the Internet
>or a private network. It associates various information with domain names assigned to each of the participating entities.

[Wikipedia](http://en.wikipedia.org/wiki/Domain_Name_System)

DNS is basically a service which resolves domain names to IP addresses. If you own a domain name, you can point it to wherever you want. This is usually done in the administration panel of your hosting services. We have setup multiple domains on our nameserver ([mitsu.in](http://mitsu.in) as of the moment) to point to the IP address 192.168.208.x.

For instance [sdslabs.co.in](http://sdslabs.co.in) points to <code>192.168.208.208</code>, [echo.sdslabs.co.in](http://echo.sdslabs.co.in) points to <code>192.168.208.204</code> and so on. This is done via updating something called <code>A records</code> (this is the part of resolution which transaltes to IPv4 addresses).

The benifits of having such a system in place are enormous:

* Users don't have to remember IP addresses, and can easily remember the site address.

* We can move around services, applications over different machines, and it will only take a single update to change the name resolutions

* We could add alternative fallback servers easily (by having multiple A record entries) for a domain. We could even use this to point       sdslabs.co.in domain to something that is hosted online, for instance.

* We can have catchy, and simple to remember urls for eg [https://sdslabs.co.in/login](https://sdslabs.co.in/login), and [https://sdslabs.co.in/logout](https://sdslabs.co.in/logout) 

Also, we are running all our services on https, which is *not dependent upon the visibility of the website*. Even though the site is hosted locally, the process of certificate signing remains exactly the same as any other site. Once we aquire a SSL certificate and attach it to our web-server, the visibility of the domain does not matter to the browser at all.

Note: For the benifit of those not in IIT Roorkee, we are running multiple web-service on the domain sdslabs.co.in, which is only served locally, as it resolves to a local IP address (192.168.208.208)
