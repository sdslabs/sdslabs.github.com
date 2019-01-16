---
layout: post
title: Battle Factories
excerpt: Winter of Code 2018 Project
author:
  name: Utkarsh
  link: https://github.com/simpukr
---

Battle-Factory is a small game made as a project for Winter-Of-Code conducted by SDSLabs. It is a turn-based strategy game over LAN ( Local Area Network ), built with the help of TCP sockets. In this blog post, I will mention some of the problems that I faced during the making of this game and the solutions I implemented.

## Central Idea

The initial idea of the game was very simple. The player will command its units to move and they will attack each other after each turn thereby destroying themselves (The Unit with zero or lesser health gets destroyed on turn completion). Later on, some strategy elements were sprinkled on it (thanks to the experience gained playing "Rise of Nations" for hours), such as the unit building and resource management concept. Basically, you can create and move units on each turn depending on the amount of fuel left in each turn. The final objective of the game is to destroy others factory or capture the flag.

## The hardest part

The hardest part of any project is the initial phase where we plan about the features to implement and strategies to adapt for development. Sometimes, (during brainstorming an idea), I had to reject many of them either because they were too complex (not possible in a short time period) or not complex enough to feel rewarded on completion. I was following the great advice from the "Extra Credits" ([https://www.youtube.com/watch?v=UvCri1tqIxQ](https://www.youtube.com/watch?v=UvCri1tqIxQ)) about the Minimum Viable Product. Everyone who wants to create something should target the MVP first, and then iterate over and over, adding additional features and bug fixes in each iteration.

For this game, I think the MVP should include the core mechanics of controlling the units and the attack mechanism. I had this idea when I was learning MOBA with my secret friend, and realized that there should be a MOBA where a single player controls all the units (at least in turn-based fashion). I was restricting the units’ count to three because units with different abilities feel better compared to the same kind of unit with a different value for core parameters (health, damage, speed etc)

![Teaser](/images/posts/battle-factories/image1.png)

This is an early phase screenshot of the game. There was only one unit at the time.

## Networking

The next difficulty I faced was regarding the choice of the network library for socket connections (Vanilla sockets were very hard to use). The C# libraries contain some wonderful libraries for this topic, but most of them were designed over UDP. I am not against the use of UDP sockets, but they are more useful in real-time cases where we need low latency.

After scouting a bit more, I chose [Telepathy](https://github.com/vis2k/Telepathy).

Using TCP sockets over UDP sockets actually helped me to complete the game in time (I had allocated an entire week for networking, but the with the reliability of TCP sockets, most bugs got ironed out). Then, I did not need to manage the confirmation of the message transmission, or the order of delivery of messages all thanks to TCP.

## Zig-Zag Paths

The paths used by units to move was generated using the infamous [A* pathfinding algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm).

I ran into another problem because vanilla A* generates diagonal paths with a staircase pattern, like this:

![ZigZag1](/images/posts/battle-factories/image2.png)

Here, green pixel denotes the starting node and the red pixel denotes the end node. Each pixel includes a single node and the blue path shows the interconnected nodes.

Seeing my unit move along this path and changing direction after every move was painful to watch. A* works by assigning a cost to each movement between nodes, so I added an extra cost if the next node changes direction compared to the previous node.

This small modification greatly reduces the staircase pattern in path generation. After this,most of the path looked like this:

![ZigZag2](/images/posts/battle-factories/image3.png)

Notice that the actual movement distance ( measured as the Manhattan or taxicab distance remains the same)

## Alpha Blended Shader

The shader was the only part of Unity I was not familiar with, so some challenges were expected in this part.

Shaders are small programs which run on the GPU and modify the vertex of the model (vertex-shader) or the pixel to be rendered on the screen buffer(fragment-shader; the screen buffer is an array containing the RGB values of each pixel of your window).

I was using a transparent shader to highlight the area covered by a single unit, but since it was possible for many units can be positioned closely, the alpha of the range indicator got blended with each other and becomes somewhat opaque:

![Shader](/images/posts/battle-factories/image4.png)

Notice the color difference between the edges and the center.

The problem can be explained more clearly by having 4 squares. (pairs of two with different colors, see the attached picture)

![Shader2](/images/posts/battle-factories/image5.png)

All squares are transparent, and you can notice the alpha blending (change in color due to overlaps) at position 2, 4 and 6. The problem was to eliminate the blending at position 2 and 6 while keeping the alpha blending at 4 (different colors can blend with each other but the same color should not)

The problem was solved by using a Stencil Buffer (A stencil Buffer is an array containing data for each pixel of the window, we can check and also modify this value with shaders). Now the shader was checking the stencil buffer for specific conditions, and if those conditions met, then the shader paints the color at that pixel and modifies the stencil buffer value for that pixel. So if the pixel was already painted by one triangle (All 3d models are composed of triangles, especially in games), then the next overlapping triangle will not paint that pixel again because the buffer value gets changed for that pixel (Remember, the stencil buffer gets reset after every frame). Here is the slightly better result

![Shader3](/images/posts/battle-factories/image6.png)

Now, the problem was that both blue colored triangles ( those boxes are composed of triangles) and the yellow colored triangle was checking against each other before the color was copied to the screen buffer.

The solution was to apply a read and write mask to the shaders and making separate shaders for both colors.

If the stencil buffer contains 8 bits
    00000000

Then the read and write masks could be
    00001111 for blue and 11110000 for yellow

According to my understanding, the fragment shader reads the value from the buffer and applies a bitwise & with the read mask.

`valueInShaderProgram = actualBufferValue & readMask`

The same thing should happen when we modify the buffer from fragment shader, but this time with a bitwise OR (Remember, the value outside the write mask, the bit positions containing zero, should not be changed) Therefore,

`actualBufferValue = (valueInShaderProgram & writeMask) | (actualBufferValue & ~writeMask)`

Now we have two different shaders with different read and write masks so the rendering of one will not depend on other.

Here is the final result

![Shader4](/images/posts/battle-factories/image7.png)

The colors blend when both colors are different.

## Packaging data to send over the socket

One of the limitations of using sockets for communication was the use of byte array to send and receive data. The network library that was used (Telepathy) doesn't abstract away the byte array. I still have to use it to communicate between sockets. Manually creating an array and assigning data to it at different positions was a tedious task.

So I created a Packet class, taking inspiration from [SFML](https://www.sfml-dev.org/documentation/2.5.1/classsf_1_1Packet.php ) which contains a list of bytes. The class contains implementation for reading and writing for basic types (byte,int & string for now). So when it executes
```
Packet p = new Packet();
p.writeByte(x);
p.writeInteger(y);
p.writeString("Hello");
```

First, the List gets an element x `[x]`

Since integers occupy 32 bits (or 4 bytes), writing an integer adds 4 bytes. So the byte list becomes

`[(y/(256*256*256)) % 256], [(y/(256*256)) % 256], [(y/256)%256],[y%256], [x]`

ASCII characters are 1 byte in length, so adding a character to the packet was easy but adding a string was difficult because the length of the string is not a compile-time constant. This problem was tackled by adding an integer containing the length of the string first  and then adding the individual characters to the packets in a sequence. So the last line will add the following bytes to the Packet.

`[byte('o')], [byte('l')], [byte('l')], [byte('e'], [byte('h')], [0], [0], [0], [5]`

Notice the last 4 bytes. They represent the string length.

Finally, the packet looks like this

`[byte('o')], [byte('l')], [byte('l')], [byte('e'], [byte('h')], [0], [0], [0], [5], [(y/(256*256*256)) % 256], [(y/(256*256)) % 256], [(y/256)%256],[y%256], [x]`

After constructing the byte array, the array was sent through socket over the network to another instance of the game running. Again, the game restores the original values from the packet by

```
Packet p = socket.recieveData(); // Actual implementation of this line is different
byte x = p.readByte();
int y = p.readInt();
string s = p.readString();
```

Notice the sequence of reading data from the received packet. They should be the same, otherwise, we will get weird results.

The first line will read the first byte and pop it out of the list. The second line will read the next 4 bytes and pop it out too. The third line will read an integer( 4 bytes) and depending on the value of that integer it will read further byte by byte (and pop them out too). All those bytes will get converted to their respective data type.

## Spaghetti Code

I realized the importance of writing structured code with a definite design pattern when the codebase of the game grew larger. Fixing a bug was taking more time than writing another feature. I had to refactor 3-4 times during the course of 30 days. So whenever you are writing something big, think and plan ahead before you start typing out the code.

## The Final Product

![Final](/images/posts/battle-factories/main-menu.png)

![Final2](/images/posts/battle-factories/factory.png)

![Final3](/images/posts/battle-factories/truck.png)

![Final4](/images/posts/battle-factories/victory.png)

## At last, its not the hurdles that makes game dev fun

Every development process involves some problem solving, and these were just a few of the many interesting problems that I faced during the development of battle-factory. Don’t get overwhelmed by these problems, because the final reward of game development is always interesting (especially when we can play them with our friends)

So, if you have an idea, what are you waiting for? Grab your favourite tools and start building.

