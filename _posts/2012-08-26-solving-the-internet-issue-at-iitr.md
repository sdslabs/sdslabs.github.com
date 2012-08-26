---
layout: default
published: false
---

The issue with the ultra slow speeds of IITR internet, more specifically in the wifi bhawans, is something troubling the IITR ocupants since a lot of years. Over the years a lot of solutions have been proposed to this issue from router replacement to server replacement but so far there has been no change in the speed.

**Current Situation:**  
The network structure of IITR is somewhat like the one shown below (only for wifi hostels).
![Current Network](http://getfile8.posterous.com/getfile/files.posterous.com/temp-2012-08-25/isufdIIperHJhJttCvydjIArCBlJbkIAtkbedFnDJkAvurxyuzyJCcdyljJk/1.png.scaled1000.png)
As seen from the above figure, there are two primary bottlenecks in the network that reduce the speed.

*   Bhawan Server/gateway: Its an old P4 computer in most bhawans. It is the main culprit since all the traffic load passes through this. But is replacing it the only solution?
 
*   Access Points: Secondary Bottleneck. Replacement is the only solution in this case but the effect will be limited unless changes are also made at the higher level.
 

**Solution to the Gateway Problem:**

The first solution that everyone thinks of is replacing the bhawan server with a costly, bigger server but the simplest and better solution is often overlooked. There is a lot easier, better and long term solution with Rs 0/- cost for this problem. And the solution is not adding in anything but in removing what is already present. Surprised? Lets see..   
The server performs three functions:

*   NATing: This seperates the bhawan network from the institute central network.
 
*   DHCP: Gives Ip address to all the users.
 
*   Security and Authentication: Secures the network so that unauthorized person may not enter it.
 

**The solution:**

1.  Instead of NAT, create a VLAN for the bhawan in the central switch which essentially performs the first function of gateway. (a similar thing already exists for the LAN bhawans).
 
2.  Remove the server from the middle of the connection between bhawan and central switch.
 
3.  Attach the same server/switch to the internal bhawan network anywhere.
 
4.  Continue perform DHCP and authentication using the same server.
 

In short, **remove the server** from the connection between user & internet.

**New Network:**
![Current Network](http://getfile2.posterous.com/getfile/files.posterous.com/temp-2012-08-25/JwuvxuzxGbBrdtfBmGvpcmbjdIccDArmguhsEdGrudfCjjBuGhaDmBnjmsnt/2.png.scaled1000.png)
**Why this Network is better?**

*   The first bottleneck i.e. the bhawan server is now out of main network between clients and internet.
 
*   It is only connected to once just for getting IP (DHCP), and for authentication. that takes approx. 2 minutes and only once for a new connection.
 
*   Since both of these are meager tasks, no processing is required and hence no need to purchase or replace the existing box.
 
*   It is actually better than buying a new box, because a new server no matter how fast it is will be slower than a simple wire between two points so removing it from network will increase the speed by maximum value.
 
*   Also, any server is bound to get old with time, and will need replacement causing further cost to institute while this is a permanent solution.
 
*   Interbhawan services like DC%2B%2B will start working which will sharply reduce the load on the institute internet and further increase the network speed.
 

**The Second Bottleneck:**

The Wifi routers/access points are the second bottleneck. The problem here is that they are very old (2005 model) and this era of technology things go old with 2-3 years, this is 8 years old. The solution to it is only replacement with latest access points which can be carried out one bhawan at a time.

**Further Improvement:**

Further a lot more additional things are required, which will improve the network even further (again no additional costs required) like VLANing and proper configuration of internal switches to reduce the broadcasting of packets, collisions and improve the speed and security. This is also required in the LAN bhawans to improve the speed further.

**Conclusion:**

The solution of the primary bottleneck which just requires some effort from the side of administration will solve a lot of problems. It is the easiest, cheapest and quickest solution. After that the purchase of new access points can be carried out which may take time because of the official procedures but till that the students will be able to get at least some improvement. I have personally submitted this method to the director (with help from SAC), as well as to the ISC and had a long heated discusssion with the network manager at ISC on the benefits of this structure. Though they were convinced that they should adopt this, I still don't get the reason for its non adoption. Well, I had done my part in preparing and submitting the solution, I can even help the ISC people in implementng this and anyways implementation would take a day at max because no new equipment is needed. 

--Harshil Mathur