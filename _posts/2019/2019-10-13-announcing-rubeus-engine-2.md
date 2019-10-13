---
 layout: post
 title: Announcing Rubeus Engine 2.0
 excerpt: Announcing Rubeus, SDSLabs' game engine version 2.0 with lots of exciting new features and bug fixes
 author:
   name: Twarit Waikar
   link: https://github.com/IronicallySerious
   bio: Developer, SDSLabs
   image: serious.jpg
---
We are excited to announce that the Rubeus Engine that [debuted on the 22nd December 2018](https://blog.sdslabs.co/2018/12/making-a-game-engine-from-scratch) has had major improvements since the last edition and we have reached our goal for Rubeus Engine v2.0!

![Rubeus Logo](/images/posts/rubeus/rubeus_light.png)

# What's new?
All the changes are listed in order of coolness.

## New Project Manager
With Rubeus v2.0, we are introducing a brand new project manager GUI for Rubeus projects. We have implemented the functionality to manage multiple projects using the Rubeus Engine at the same time and be able to choose which project should be worked on. A much-needed feature is finally here.

## Messaging System for User Code
We have an exciting new message system ready and integrated into the engine with some default commands already implemented into the engine, but still provides great scope for powerful message transfers between the different subsystems of the engine for more complex workflows.

Users are now able to expose their own functions as callbacks to user-defined commands and the engine is now able to call them asynchronously on the user's demand; allowing for much greater gameplay interactions amongst game objects.

## Application Layer for Controlled Execution
We have introduced a new Application layer to the Rubeus game making procedure. Now all user-defined systems get to live in their own namespaces and have user-defined lifetimes. This allows the user to handle their own resources as and when required and encapsulate the code that talks to the Rubeus Engine from the code that works for their custom systems.

## Z-Index for 2D colliders
Colliders can now be separated in different planes to allow for objects in the background to not collide with objects in the foreground. Assigning Z-index values is as simple as providing as a single integer value to every collider as an identifier of its Z-indexed layer.

## Logging System for Debugging
Our new logging system allows the user to either log to the screen with varying degrees of severity levels, namely `ERROR`, `ASSERT`, and `SUCCESS`. Users can add more severity levels to their liking. What is a bit more exciting is that we now support colored error logging to the console that works on all supported platforms.

Users also can now log to files in a separate logging directory on their file systems. These logs can be used to allow for effective bug fixing after the game has been distributed to the players, where they can see the logs actively on their screens with a little digging. This helps post-distribution tech-support and in house development.

## Game Object API Cleanup
The game object creation API has been made simpler by allowing more flexible ways to provide the game objects with their data. There is also a lot of code cleanup done at the user side of things to allow for a much less overwhelming interface to the engine.

## Lesser Dependencies = Lesser Build Times
We have dropped our dependency on Vcpkg, the C++ package manager that we were using in v1.0. All dependencies are now distributed with the engine, except for some system libraries that have been mentioned in our [setup procedure](https://github.com/sdslabs/Rubeus/blob/v2/SETUP.md). You might see that our build process got reduced tenfold and we are glad about it.

With all these new additions we have done a lot of bug fixes under the hood that help optimize the performance of Rubeus games and allow less open ground for bugs to creep up.

All the information regarding how to use these systems have been covered in our Wiki page available [here](https://github.com/sdslabs/Rubeus/wiki) under related Wiki entries.

Lastly, we would like to thank our team for bringing all the new changes and allow for a fast release cycle after v1.0.