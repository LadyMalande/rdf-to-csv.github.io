---
layout: page
title: Converter
permalink: /converter/
---

This tab will have the RDF to CSVW convertor included once its implemented.

<form id="rdfandconfiguration" action="https://rdf-to-csvw.onrender.com/rdftocsvw" method="post">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <div id="drop-zone">
        Drop file here...<br>
        <label class="label">
            <input type="file" name="file" id="file" required/>
            <span>...or select a file</span>
        </label>
        <!-- <div id="clickHere">
            or click here..
            <input type="file" name="file" id="file" />
        </div>
        -->
    </div>
    <label for="filename">Choose file name for resulting .zip: </label>
    <input type="text" id="filename" name="filename"> <br><br>
    <input type="submit" value="Convert & Download">
</form>
<div id="responsePlace">
<label id="previewLabel"></label>
</div>

<script type="text/javascript" src="https://ladymalande.github.io/{{ base.url }}/{{ 'assets/sendPost.js' | relative_url }}"></script>


