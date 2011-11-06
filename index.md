---
layout: home
title: SDSLabs Blog
---
<div id="posts">
{% for post in site.posts limit: 5 %}
	<div class="post">
		<div class="post_info">
			<a href="{{ post.url }}">{{ post.title }}</a>
			<span>({{ post.date | date:"%Y-%m-%d" }})</span>
		</div>
		<div class="post_snippet">
		{{post.preview_content}}
		</div>
    </div>
  {% endfor %}
</div>
