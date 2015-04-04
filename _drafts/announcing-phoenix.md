---
layout: post
title: Announcing phoenix
excerpt: phoenix is a taskrunner for phantomjs tasks that uses redis as the job queue. We made it for use in BackdoorCTF and are open sourcing it today.
author:
  name: Abhay Rana
  twitter: "capt_n3m0"
  bio: Developer, SDSLabs
  image: nemo.jpg
---

As part of the recently conducted [BackdoorCTF '15][bd15], we developed a redis based queue taskrunner for phantomjs tasks called [phoenix][phoenix] that we are open-sourcing today. This blog post is about the problem we faced and the solution we developed and how it can help you.

##problem

As part of two challenges in the CTF ([MEDUSA][medusa], [JSHUNT][jshunt]), we wanted a browser solution that could automatically open the webpages for the challenge in a safe environment after each submission. These challenges are web challenges and require techniques such as XSS, which means that they can only be exploited in a real browser.

Unfortunately, running a full browser such as Chrome/Firefox is not feasible in such sitations. Instead, we decided to use the most popular headless browser [phantomjs][phantom] for our task. Using phantom is hard, though. It has its own API, which uses JS, but is completely different in its own manner (too many synchronous methods, for one).

As part of the CTF, we had to build a queue system as well, which would do the following:

- Setup a new webpage
- Start a new phantomjs instance that visits _that particular_ page
- Store the result of the run (log id) somewhere and report it back

Since a lot of this is common to both the tasks, we decided to create a small tool that helps us run these jobs.

##phoenix

phoenix handles the following for you:

- setup a common configuration for a task
- start multiple jobs on that task, each with a slight variation
- jobs are run on phantomjs
- store logs of each run
- report back log id to the task queue

This is all done via a mix of redis, phantomjs and nodejs.


##configuration

phoenix is configured via a `config.yml` file, which is expected to be present wherever phoenix is run. You can see [the sample config file](https://github.com/sdslabs/phoenix/blob/master/config.sample.yml) for a list of configuration options that phoenix supports. These include things like user agent support, custom headers, request body (in json or post format), basic authentication support.

Another thing we support is the ability to run custom javascript before the page visit starts. This allows you to set default variables (such as tokens and secrets) that will be available in the JS context once the page visit is made.


##page visit
We have a lot of sensible defaults for phantom, which include a maximum timeout of 10 seconds, and extended timeouts for whenever a web request (such as image/script/ajax) is made.

##logging
All jobs that start get their own id, and create their own directory with three files: `config.json`, `page.log`, and `browser.log`. The first holds the complete configuration object that is passed to phantom. The second is the console log of the web page (which means any console.log statements made in the web page context). The third is a higher level log containing browser events such as redirects, web requests and timeout extensions.

We plan to make the logging format configurable, but for now it is file system based.

##job config
It is assumed that (generally) each job will have its own url, slightly differing from the task's standard url. This is handled in two ways:

- You can pass a query parameter, which is sent along with the url specified in the config
- You can pass a valid http/s url that will be visited as it is

##queueing

To push a job to a queue, you do the following:

- Generate a queue id by RPUSH to a channel:queue list in redis
- Publish the queue id on the channel in redis

##log in redis

For each job, the job id (generated randomly) is stored in the `channel:log:id` key in redis. This can be polled to check whether the job has finished or not.

---

As you can see, phoenix is a very robust mechanism to handle a variety of job queues. It is available on npm today as the [`phantom-phoenix`][npm] package, which sets up a binary called `phoenix`. Further instructions on usage etc can be found on the [repository][phoenix].

We hope it will be useful to people looking to setup a queue system based around phantomjs instances. Since it uses redis as the queue mechanism, it can be easily scaled to multiple machines as well.

[bd15]: https://backdoor.sdslabs.co/competitions/backdoorctf15/ "Backdoor CTF 2015"
[medusa]: https://backdoor.sdslabs.co/challenges/MEDUSA
[jshunt]: https://backdoor.sdslabs.co/challenges/JSHUNT
[phantom]: http://phantomjs.org
[npm]: https://www.npmjs.com/package/phantom-phoenix "Package on npm"
[phoenix]: https://github.com/sdslabs/phoenix