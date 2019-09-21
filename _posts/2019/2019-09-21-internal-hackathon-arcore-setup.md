---
 layout: post
 title: Working with ARCore
 excerpt: Playing with Unity and Google’s ARCore
 author:
   name: Shubham Gupta
   link: https://github.com/shubhamgupta2956
   bio: Developer, SDSLabs
   image: shubham.jpg
---

# The Motivation behind this blog

Installing Unity is an easy task. Just download the setup files and after accepting all the agrements and defining the various paths,etc. , it will install automatically and you are good to go. But the main problem comes when you want to do android development using unity.

# What is ARCore?

According to Wikipedia, ARCore is a software development kit developed by Google that allows for augmented reality applications to be built.
ARCore uses three key technologies to integrate virtual content with the real environment:
* Motion Tracking: it allows the phone to understand its position relative to the world.
* Environmental understanding: It allows the phone to detect the size and location of all type of surfaces, vertical, horizontal and angled.
* Light Estimation: it allows the phone to estimate the environment’s current lighting conditions.

# Setting up development environment

## Requirements

*Unity 2017.4.26f1 or later

**Make sure to include Android Build Support during installation

**The Universal Render Pipeline (formerly known as Ligthweight Render Pipeline or LWRP) is not supported by the ARCore SDK for Unity

**When using Unity 2019, the following Unity packages are required:

1. Multiplayer HLAPI
2. XR Legacy Input Helper

*ARCore SDK for Unity 1.12.0 or later

*Android SDK 7.0 (API Level 24) or later, installed using the SDK Manager in Android Studio

## Get the ARCore SDK for Unity
* Download ARCore SDK for Unity 1.12.0 or later.
  The SDK is downloaded as arcore-unity-sdk-1.12.0.unitypackage.

## Create a new project and import the SDK
*Open Unity and create a new 3D project.

*Unity 2019 only: Select Window > Package Manager and install the following packages:

**Multiplayer HLAPI (required by the CloudAnchors sample)
**XR Legacy Input Helpers (required by Instant Preview, which uses the TrackedPoseDriver)
*Import the ARCore SDK for Unity:

**Select Assets > Import Package > Custom Package.

**Select the arcore-unity-sdk-1.12.0.unitypackage that you downloaded.

**In the Importing Package dialog, make sure that all package options are selected and click Import.

# Error! Help!

Unity by default does not contain any SDK, JDK related to andrid development. So you have to install it by your own which is not easy as it seems as sdk manager is not available. For installing SDK, one can do two things:-
1. Install Android Studio
2. Install SDK command line tools

While the first method is quite easy. You just have to install android studio and with it you get SDK manager which will download all the required SDKs. But wait... installing Android Studio... Not every computer has this much capable hardware which can run this heavy beast without any lag.

The second way is the hard way. It includes use of command line. The command line tool can be downloaded from https://developer.android.com/studio. After downloading, extract the zip file. Migrate to tools/bin and open command prompt in that folder. Type the command 

`sdkmanger --list`

It will list all the packages that can be installed. To install any pacakge just type the command `sdkmanager packages [options]`. For example, here's how to install the SDK tools for API level 28:

`sdkmanager "android-28"`

After that the only thing remaining is to add this SDK's path in the path variable. Add it by going in the menu bar, go to Unity > Preferences > External Tools.

Now it's all set. Happy Hacking.