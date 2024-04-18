---
layout: page
title: Converter
permalink: /converter/
permalink: /
redirect_from:
  - /converter
---

This tab will have the RDF to CSVW convertor included once its implemented.

<form id="rdfandconfiguration" action="https://rdf-to-csvw.onrender.com/rdftocsvw" method="post">
    <label for="file">Select an RDF file:</label>
    <input type="file" id="file" name="file"> <br><br>
    <label for="filename">Choose file name for resulting .zip: </label>
    <input type="text" id="filename" name="filename"> <br><br>
    <input type="submit" value="Convert & Download">
</form>
<div id="responsePlace">
<label id="previewLabel"></label>
</div>

<script type="text/javascript" src="https://ladymalande.github.io/{{ base.url }}/{{ 'assets/sendPost.js' | relative_url }}"></script>


