---
layout: post
title: SDSLabs Blog
---

<h2>Our last 5 blog posts</h2>

{% for post in site.posts limit: 5 %}
<div id="post">
<h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
<p>{{ post.excerpt }}</p>
<blockquote>Posted on {{ post.date | date:"%d-%B-%Y" }}</blockquote>
</div>
{% endfor %}



