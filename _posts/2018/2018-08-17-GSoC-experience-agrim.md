---
layout: post
title: GSoC 2018 experience
excerpt:
author:
  name: Agrim Mittal
  link: https://agrim123.github.io
  bio: Developer, SDSLabs
  image: agrim.jpg
---

This blog is a summary of my journey throughout GSoC 2018 with Bundler.

Past four months have been exciting. I think I can safely say I have learned a lot about bundler and about ruby overall. Now is the time to wrap up all the work but this is not the end. The community has been more than helping and mentors have been very cooperating (I seldom ask stupid doubts :P).

All the work was thoroughly reviewed and regularly iterated upon until perfection.

## Major tasks

My major task was to integrate functionality from [bun](https://github.com/shime/bun) into bundler. In simpler words, make editing of Gemfile from command line easier. To achieve this goal, a couple of new commands have been introduced:

1. `bundle remove`

> Removes a gem from Gemfile.

Implementing this feature was the toughest because special care has to be taken when removing something from a user's Gemfile.

The one major hurdle was that Gemfile can contain **any arbitrary ruby code**. This opened a huge possibilities of how a Gemfile might look. Since we could not consider all possible cases, so we went ahead with it being able to properly handle a basic Gemfile.

Internally, this command looks for regex matching the gem to be removed and then removes that line.

Using regex was a fair choice but we soon realized we have bigger problems. This caused some other gems to be removed in some cases, like

```ruby
# Gemfile
...

gem "rack"; gem "rails";
...
```
On running,
```bash
$ bundle remove rack
```
This whole line got removed. This was not desirable, so we came up with a solution to check which gems were removed after this operation and then cross-check whether the removed ones were requested or not. If not, then the Gemfile was reverted back to original gemfile (stored in [memory](https://github.com/bundler/bundler/blob/5dcfc318f2f58d81875880533a65c8b58cda5622/lib/bundler/injector.rb#L129)). This gave us a fail-safe for edge cases.

A few other cases, including `eval_gemfile`, multiple gemfiles etc were also handled. The implementation can be found [here](https://github.com/bundler/bundler/blob/5dcfc318f2f58d81875880533a65c8b58cda5622/lib/bundler/injector.rb).

2. `bundle change`

> Change properties of a gem.

Next big thing was to build a way to be able to change properties of a gem (including group, version etc.) from the command line.

We came up with a solution to not inline edit the gem but first remove it from gemfile and then a new update gem to the Gemfile.

At a very abstract level, this command is a combined effort of `add` and `remove` commands. This decision highly relied on proper working of both of these commands. `add` was already rigorously tested but `remove` was a new member so it was a tough journey.

The initial draft was a piece of cake but things became hard when properties other than group, version, and source came into the picture including env, git, platforms etc. As `add` commands did not support these so we were bound to throw an exception for these options and possibly we would add support for these inherently to `add` command.

Apart from these two commands, I worked on some problems faced and some features requested by users. *No doubt an open source is a happy place :)*.

## Overall Work

Following pull requests summarize my five month work:

- [Add config variable and check for platform warnings](https://github.com/bundler/bundler/pull/6309)
- [Update error message on bundle add in case of duplication](https://github.com/bundler/bundler/pull/6447)
- [Add `bundle remove`](https://github.com/bundler/bundler/pull/6513)
- [Add --skip-install flag to bundle add](https://github.com/bundler/bundler/pull/6517)
- [Add mutiple gems by names](https://github.com/bundler/bundler/pull/6547)
- [[bundle add] Add version prefix flexibility](https://github.com/bundler/bundler/pull/6556)
- [[bundle list] add `--without-group` and `--only-group`](https://github.com/bundler/bundler/pull/6572)
- [Fix singular groups on injecting gem](https://github.com/bundler/bundler/pull/6627)
- [[Feature] bundle change](https://github.com/bundler/bundler/pull/6597)
- [[Feature] bundle canonical](https://github.com/bundler/bundler/pull/6623)


This list of PRs includes the work directly related to GSoC project and some supplement work that was required to fulfill the main goal. These also include some user requested features and problem fixes.

Related issues can be found [here](https://github.com/bundler/bundler/issues/created_by/agrim123)

The official submitted link can be found [here](https://gist.github.com/agrim123/cfc1e1aadbe8b46f6e2b6e9b090ed2f3).

**Into new waters, mate.** See you soon user.
