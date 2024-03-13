---
layout: page
title: Converter
permalink: /converter/
---

This tab will have the RDF to CSVW convertor included once its implemented.

<form action="https://rdf-to-csvw.onrender.com/rdftocsvw"  method="post" enctype="multipart/form-data">
    <label for="file">Select an RDF file:</label>
    <input type="file" id="file" name="file"> <br><br>
    <label for="configuration">Type in configuration: </label>
    <input type="text" id="configuration" name="configuration"> <br><br>
    <input type="submit" value="Convert">
</form>

