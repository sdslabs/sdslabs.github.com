The Rubeus Game Engine was released by SDSLabs on 22nd December 2018 with the vision to introduce the programmers of IIT Roorkee to game development and design. We received a ton of support with this release even from game development communities outside of R-land. 

We saw multiple release threads pop up on [HN](https://news.ycombinator.com) and [r/Gamedev](https://www.reddit.com/r/gamedev/) which attracted people from the industry to review the codebase and constructively critic on the project. We are very happy with the general reception and in this blog, we want to discuss where we are trying to take Rubeus in the future.

It has been around 6 months since we released Rubeus, an in-house implementation of a beginner friendly game engine in C++. We have talked about our process in [another blog entry](https://blog.sdslabs.co/2018/12/making-a-game-engine-from-scratch). Check it out if you are interested in something like that.

# The Motivation behind making Rubeus

We made Rubeus with an objective to help a beginner learn how games are made. Every 90s child who has been exposed to games at an early age has a dream to make video games someday or they at least have wanted to make a game at some point of time in the future.

We believe that one cannot understand something properly until they are able to explain it to a three-year-old. Brightly said by Einstein, it motivated us to have a try at making a game engine for satisfying the curiosity of not only us but also the beginner game developers out in the programming world.

# What one should do with a game engine?

Obviously: Make games.

We made some small clones of some very basic games on Rubeus like Ping-Pong and Breaker. The Rubeus workflow we had developed was perfect for such prototypes. But we didn’t want to stop there.

We started to implement some advanced features in Rubeus like a multithreaded console, message-based communication between its sub-systems, a GUI for debugging and project management, an application layer that allows more control over the startup of the application, fixed countless bugs in Awerere which is the physics engine that we implemented by hand for Rubeus and other systems in the engine. However, very soon we realised that what we were trying to achieve with Rubeus was unrealistic indeed and we needed major changes in the current architecture.

# The Future of Rubeus

We are still going to maintain Rubeus and it will still remain our solution to introducing beginners to game development. We plan to keep introducing new features to the engine and make them as accessible as possible to people who are still at the learning stage.

For the version 2.0 release, we have a [Github Project tracking all progress here](https://github.com/sdslabs/Rubeus/projects/1). We have listed all the upcoming features and bug fixes as issues.

Join the [Rubeus Engine Discord server](https://discord.gg/Cva2VFQ) if you’d like to discuss Rubeus’ development/usage with us.

# The Shortcomings of Rubeus

As much as we are proud of Rubeus, we accept that it has some architectural and enhancement issues due to partial oversimplification of concepts for making them accessible to our beginner audience.

## What we are proud of in Rubeus

* Cross-platform nature of Rubeus
* High performance of in-built physics and rendering engines
* Non-intrusive design
* Use of custom tools like ImGUIs for debugging and [broCLI](https://github.com/sdslabs/broCLI) for project management
* [Complete documentation](https://blog.sdslabs.co/Rubeus-Docs) and [public user guides](https://github.com/sdslabs/Rubeus/wiki)

## What we are not proud of in Rubeus

* High amounts of mechanical exposure to the user to facilitate learning
* Closely bounded architecture with a lot of coupling with similar systems
* 2D only physics and rendering engine
* Inflexibility in terms of customizability (for example, custom shaders are not allowed)

# Introducing a newer, more advanced interactive simulation engine

We are very excited to kickstart a new publicly developing project, code-named as the ‘Rootex’ project.

We aim Rootex to be an interactive 3D simulation engine which will power an upcoming project yet to be announced. We are not calling it a game engine anymore, instead, we are targeting it to cater to a specific kind of simulation development with user interaction built into the application. It is currently in active development and a release date will be announced soon.

## Why is making a custom engine still a viable choice?

Customized engines are better suited for cases when either your idea is too wild for any generic game engine to handle, or you want to just learn engine development by the hardest way possible. We lie in the middle of that spectrum.

We are actively looking for collaborating with other groups operating in IIT Roorkee that might want to join in this project with designing the game mechanics and game design aspects of this project.

## Why not use Rubeus instead?

As mentioned above, we want the newer framework to be more robust, more flexible in terms of customizability and functionality and just cater to the specific project instead of a wide range of genres. We believe it makes the engine more focused to solving a problem and gives us more performance to work with. Our argument can be compared to when you require a Swiss knife instead of a butter knife made for children.

