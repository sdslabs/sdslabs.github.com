---
layout: post
title: HackInOut 5.0
excerpt: Winning experience at HackInOut 5.0
author:
  name: Anish Mukherjee
  link: https://github.com/alphadose
  bio: Developer, SDSLabs
  image: alphadose.jpeg
---

Hackathons are an integral part of a developer’s journey. They help us experiment, grow and meet a beautiful mixture of talented people. We present a recollection of our winning experience at India’s biggest community hackathon, [InOut](https://hackinout.co/).

It all started on September 1, 2018 when word got around the campus of IIT Roorkee that InOut was going to hold its 5th edition. InOut is the largest community driven hackathon in India comprising of 150 participants chosen from approximately 4500+ applicants, both students and professionals, all over India. SDSLabs being a forerunner in technology, decided to participate in this glorious event. 4 teams from SDSLabs got selected for InOut 5.0. My team *TrojanHash* comprised of Anish Mukherjee(me), Nikhil Kaushik and Harsh Jain.

Fast forward 1 month, and we found ourselves in Bangalore on October 12, 2018 at CoWrks for HackInOut 5.0. InOut was conducted at the best workspace we’d ever seen. The venue, CoWrks, was a co-working space as the name suggests. It had a large hall with rows of desks for most of the area. There were couches towards the front where you could relax. The environment really brings out the hacking spirit lying dormant within one’s soul. I remember sleeping for only 2 hours for the entire duration of the hackathon (36 Hours).


### CoWrks, New Indiranagar, Bangalore

![CoWrks](/images/posts/hackinout/CoWrks.jpg)


### Members of SDSLabs on the verge of unveiling the mysteries of the universe

![Team](/images/posts/hackinout/SDSLabs.jpg)


The hackathon kicked off with talks by various companies that were part of the sponsorship roster for the event. These are not usually very interesting talks. But we decided to sit through, and guess what? We enjoyed them. One of the speakers suggested that we aim to optimise our time spent in brainstorming. A little too less could result in a slouchy end product, and a little too much would leave less time for implementation. Unlike previous hackathons we didn’t arrive on the scene with an idea discussed beforehand which we could bend to fit the event theme. Thus, the new aim for us was to have a pure hackathon experience and brainstorm from scratch using insights we got from the talks.

> "The creation of something new is not accomplished by the intellect, but by the play instinct arising from inner necessity. The creative mind plays with the object it loves." - Carl Jung

One of our crucial goals was to try to get our hands on technology, language or domain which we were unfamiliar with or which sounded really cool. Blockchain was the one! [Matic](https://matic.network/), a blockchain startup, also one of the sponsors of InOut 5.0 had announced a special prize for a Bill Splitting application based on blockchain at the beginning of the hackathon. We almost instantaneously decided to contest for the special prize.

We had to make a bill splitting application on blockchain using **Dai Stable Coin** as the cryptocurrency. We did what every professional developer does at the beginning……Google !!! 

We got to know that **Dai** was a cryptocurrency quite different from the conventional bitcoin and ether. Unlike bitcoin or ether, Dai was backed by collaterals. Like how someone registers his land or house as collateral when applying for a loan, and failing to repay the loan within the stipulated period of time, he/she must repay the balance amount with the registered collateral, Dai operated on similar principles. Dai is backed by collaterals such as ether. If a user fails to repay another with Dai, the balance amount will be paid with ether(ETH) which was registered by the original user when purchasing the Dai stable coin. The ether is registered as collateral when purchasing Dai through a concept called **CDP**(Collateralized Debt Position).

Collateralized Debt Position (CDP) allows you to lock your crypto assets (only ETH, for the time being) into a CDP vault and gives you a loan of 66% of DAI (1 DAI = 1 USD) against the deposited amount. If you want to get back access to your locked crypto, you will just simply repay your borrowed debt in Dai. Hence, if someone fails to return the borrowed Dai on time, it will be paid to the lender from the CDP Vault.

![Dai](/images/posts/hackinout/Dai.png)


The conventional bill splitting applications such as Splitwise only kept records of transactions amongst peers. It didn’t give any assurance for the balance amount to be settled among the peers in the future. We finally understood what Matic really expected from participants. It was not a **Bill Splitting Application** in essence, but a **Currency Borrowing and Lending Application**. 

Enough chit-chat, time to code. We read the principles of Dai and implemented the **smart contracts** which is the logic pertaining to the transactions in Solidity. Solidity is the primary language for building apps on blockchain and is one of the worst languages in terms of how easy it is to debug. After that we used **Truffle.js** to compile those smart contracts and deploy them to **Ganache**, a blockchain platform that can be hosted locally. After that, the contracts can be called with the help of **Web3.js**, a javascript client-side library for interacting with the blockchain.

We had just started building the web-interface when a flash of inspiration ran through our minds. Building a blockchain application is cool and all, but won’t it be cooler to build an entire ecosystem, something which can blow off their minds?

![Meme](/images/posts/hackinout/meme.jpg)


## Two questions arise:- 

### Why?

We decided to build something better than what was asked of us. Using **Web3.js**, the transaction logic had to handled in the frontend itself. If we built the UI using **Web3.js** for web and **Web3j** for Android( we were also going for a mobile version ), it would have been too much work and we could not have completed it in the given time. Also why not build it in such a manner that even other developers could build something from a part of it? Moreover, at that time, there was no medium which implemented Dai smart contracts and provided an easy-to-use interface that could be integrated across all devices. Hence, we went for an ecosystem instead of an application.


### How?

Long live **REST APIs**. If we shifted the entire logic regarding transactions to the backend, and exposed endpoints pertaining to specific operations, then we could have made the entire ecosystem highly extensible. 

Endpoint Examples:-

```
Operation - Get your current Ethereum Balance
Request Type - GET
Endpoint - /getEthBalance
Request Params - address(The address of the user account on the blockchain)
```

```
Operation - Convert Ether to DAI tokens
Request Type - PUT
Endpoint - /convertEthToDai
Request Body :- 
address( The address of the user account on the blockchain )
privateKey ( The Private Key of the user )
```


Now, we don’t have to write the business logic twice ( one for web and another for android ). Just use the API and get your work done easily. And now the application could be extended very easily to even iOS, smart watches, etc. This was one of the major factors which led to our victory.

By now, you must be wondering by using a REST API as the communication medium we have essentially destroyed the “decentralised” nature of blockchain. This is a valid argument considering the fact that the API becomes a single point of failure in the entire ecosystem and blockchain boasts of “no single point of failure”. We already considered this and hence we designed the API to be “stateless”. No user information is being stored in any of the API hosting servers. So even if one server fails, another one can easily take its place. Hence, in this the entire system has no single point of failure. The current architecture looks like this:-

![Architecture](/images/posts/hackinout/flowchart.jpg)
 

I started building the REST API while Harsh started building the UI for Web with **React.js** and Nikhil, UI for **Android**. As soon as I completed a portion of the business logic, I would test the API endpoint with **Postman** and if everything went according to the plan(which it never did),I would share the API endpoint with my teammates via **Postman Collections** who in turn used that endpoint route and designed the portion of the UI pertaining to that accordingly. This process continued, we skipped meals, some cool sub-events during the hackathon and slept for only 2 hours during the entire 36 hours timespan. In fact we were so tired that we slept like a log on our return train journey and we missed our station (but that is a story for another time).

Finally after overcoming lots of hurdles, our ~~application~~ ecosystem was completed.

Then came the presentation phase. We were a nervous wreck. We felt that the time was too less to be able to present our idea in its full glory. But somehow, our presentation proceeded quite smoothly. The judges were delighted with our approach and implementation. We went along with the flow and even showed them the source code of our pride, The REST API. ProTip:- Never waste time by showing the source code during a hackathon presentation because only the end product matters. We were lucky that our presentation had already left an impact before we reached that point, so yeah, a narrow escape.

Conventionally, the prize ceremony would have followed, but sadly, not for us. We had our flights, so we left the venue before the prize ceremony took place. We were later informed by the HackInOut team that we had bagged the Matic First Prize and that they would be contacting us soon. Going by tradition, a commemorative photo is in order, so here you go


### Left to Right : Nikhil Kaushik, Anish Mukherjee(me), Harsh Jain

![TrojanHash](/images/posts/hackinout/TrojanHash.png)


The source code is available at GitHub https://github.com/harsh-98/splitDai.
If you are intrigued then go have a look :)
