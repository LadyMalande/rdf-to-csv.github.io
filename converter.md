---
layout: page
title: Converter
permalink: /converter
language: en
handle: /converter
sitemap: false
---
How to use the RDFtoCSV Converter:
- 1) Upload the RDF file from your local storage OR provide a URL.
- 2) [OPTIONAL] Choose how many tables you want to convert the RDF data into.
- 3) [OPTIONAL] Click on "More parameters..." button if you want to customize the conversion more.
- 4) Click "Convert & Donwload" button.
You are set! Please be informed that the conversion might take some time. Smaller files are returned in seconds, larger ones can take up to minutes.

<form id="rdfandconfiguration" action="https://rdf-to-csvw.onrender.com/rdftocsvw" method="post">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <div id="drop-zone">
        Drop file here...<br>
        <label class="label" id="labelForFileInput">
            <input type="file" name="file" id="file" required/>
            <span id="spanForFileInput">...or select a file</span>
            <p id="fileName"></p>
        </label>
    </div>
    <label for="fileURL">RDF file URL:</label>
    <input type="text" id="fileURL" name="fileURL" required> 
    <br>
    <label>Choose how many CSV tables you wish to get:</label>
    <label>
        <input type="radio" name="choice" value="option1" checked="checked" >
            One table
        </label>
        <label>
        <input type="radio" name="choice" value="option2">
            Multiple tables
        </label><br>
            <button id="toggleButton">More parameters...</button>
        <div id="toggleContent">
            <label>Choose a different parameter 1:</label>
    <label>
        <input type="radio" name="choice2" value="opt1" >
            Option 1
        </label>
        <label>
        <input type="radio" name="choice2" value="opt2">
            Option 2
        </label><br>
        </div>
    <br><br>
    <input type="submit" value="Convert & Download" id="submitButton">
</form>
<div id="responsePlace">
<label id="previewLabel"></label>
</div>

<script type="text/javascript" src="https://ladymalande.github.io/{{ base.url }}/{{ 'assets/sendPost.js' | relative_url }}"></script>