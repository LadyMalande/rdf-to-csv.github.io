---
layout: page
title: pages.converter
permalink: /converter
---
{% if site.lang == "cs" %}
  {% capture link1 %}{{ site.baseurl_root }}{{ page.url}}{% endcapture %}
  <a href="{{ link1 }}" >{% t global.english %}</a>
{% elsif site.lang == "en" %}
  {% capture link2 %}{{ site.baseurl_root }}/cs{{ page.url  }}{% endcapture %}
  <a href="{{ link2 }}" >{% t global.czech %}</a>
{% endif %}
{% translate_file converter.md %}

