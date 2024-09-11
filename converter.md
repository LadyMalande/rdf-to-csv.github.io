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
- 2) Choose how many tables you want to convert the RDF data into.
- 3) [CURRENTLY UNAVAILABLE][OPTIONAL] Click on "More parameters..." button if you want to customize the conversion more.
- 4) Click "Convert & Download" button.
You are set! Please be informed that the conversion might take some time. Smaller files are returned in approximately 20 seconds, larger ones can take up to a few minutes.

<form id="rdfandconfiguration" action="https://rdf-to-csvw.onrender.com/rdftocsvw" method="post">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <div id="drop-zone">
        Drop file here...<br>
                <div id="holderForFileInputAndBin">
            <label class="label" id="labelForFileInput" for="file">
                <input type="file" name="file" id="file" required/>
                <span id="spanForFileInput">...or select a file</span>
                <p id="fileName"></p>
            </label>
            <button class="clear-button" id="clearButton">
                <i class="fa-regular fa-trash-can"></i>
            </button>
        </div>
    </div>
    <div>
        <label for="fileURL">RDF file URL <sup class="comment-marker" data-index="1">[1]</sup></label>
        <input type="text" id="fileURL" name="fileURL" required> 
    </div>    
    <br>
    <div>
        <label>Choose how many CSV tables you wish to get:</label>
            <label>
            <input type="radio" name="choice" value="basicQuery" checked="checked" >
                One table
            </label>
            <label>
            <input type="radio" name="choice" value="splitQuery">
                Multiple tables
            </label>
    </div>    
        <br>
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

<div id="errorMessage" style="color: red; display: none;"></div>

<div id="comments">
    <h3>Comments</h3>
    <div class="comment" id="comment-1">
        <strong>[1]</strong> If you load a file and fill in URL, the conversion will use the URL as the original RDF file.
    </div>
</div>

<script type="text/javascript" src="https://ladymalande.github.io/{{ base.url }}/{{ 'assets/sendPost.js' | relative_url }}"></script>