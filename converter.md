---
layout: page
title: Converter
permalink: /converter
language: en
handle: /converter
sitemap: false
---
<!-- English version of the converter page -->
How to use the RDFtoCSV Converter:
- 1) Upload the RDF file from your local storage OR provide a URL.
- 2) Choose how many tables you want to convert the RDF data into.
- 3) Click on "More parameters..." button if you want to customize the conversion more.
- 4) Click "Convert & Download" button.
You are set! Please be informed that the conversion might take some time. Smaller files are returned in approximately 20 seconds, larger ones can take up to a few minutes.
<!-- Form for submitting parameters for conversion -->
<form id="rdfandconfiguration" action="https://rdf-to-csvw.onrender.com/rdftocsvw" method="post">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <!-- Div to choose a file or to input file URL -->
    <div id="choose-file-or-url">
    <!-- Choose a file div -->
        <div id="drop-zone">
            Drop file here...<br>
            <div id="holderForFileInputAndBin">
                <label class="label" id="labelForFileInput" for="file">
                    <input type="file" name="file" id="file" accept=".nq, .nt, .jsonl, .jsonld, .n3, .ndjson, .ndjsonld, .owl, .rdf, .rdfs, .rj, .trig, .trigs, .trix, .ttl, .ttls" required/>
                    <span id="spanForFileInput">...or select a file...</span>
                </label>
                <button class="clear-button" id="clearButton">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </div>
        <div class="vertical-line"></div>
        <!-- Input a file URL div -->
        <div class="top-and-bottom-margin" id="rdf-url-div">
            <label for="fileURL">...or fill in the RDF file URL: <a href="#comment-1"><sup class="comment-marker" data-index="1">[1]</sup></a></label>
            <input type="text" id="fileURL" name="fileURL" required> 
        </div>
    </div>   
    <br>
        <!-- How many tables to create parameters -->
    <div class="top-and-bottom-margin">
        <label>Choose how many CSV tables you wish to get:</label>
            <label>
            <input type="radio" name="tables" id="basicQuery" value="ONE" checked="checked" >
                One table
            </label>
            <label>
            <input type="radio" name="tables" id="splitQuery" value="MORE">
                Multiple tables <a href="#comment-2"><sup class="comment-marker" data-index="2">[2]</sup></a>
            </label>
    </div>    
        <br>
            <!-- Button for uncovering more parameters options -->
            <button id="toggleButton" onclick="toggleContent()">More parameters...</button>
        <div id="toggleContent">
            <!-- Conversion method parameters input -->
            <label>Choose a conversion method:</label><br>
            <label>
                <input type="radio" name="choice" value="RDF4J" checked="checked">
                    RDF4J
            </label>
            <label>
                <input type="radio" name="choice" value="BIGFILESTREAMING">
                    Big File Streaming
            </label>
            <label>
                <input type="radio" name="choice" value="STREAMING">
                    Streaming
            </label>
            <br>
            <!-- first normal form parameter input -->
            <label>How to treat lists of values in cells:</label><br>
            <label>
                <input type="radio" name="firstNormalForm" value="true" checked="checked">
                    Each cell contains only 1 value
            </label>
            <label>
                <input type="radio" name="firstNormalForm" value="false">
                    Cells can contain lists of values
            </label>
            <br>
        </div>
    <br><br>
    <!-- Web service status indicator changing pictures and text depending on the responsiveness of connected web service -->
    <div id="statusIndicator">
        <img id="loadingWheel" src="loading.gif" alt="Loading" style="display: none;">
        <img id="greenArrow" src="check.jpg" alt="OK" style="display: none;">
        <span id="healthCheckStatus">The Web Service is loading...</span>
    </div>
    <!-- Form Submit Button, changes style according to service status indicator -->
    <input type="submit" value="Convert & Download" id="submitButton" class="top-and-bottom-margin">
</form>
<!-- Div to inform users to wait for the web service response -->
<div>
    <div id="countdown" style="display: none;">30</div>
    <div id="patienceText" style="display: none;">The web service runs on free plan - please wait 60 seconds for the result. If you are not getting any file transfer until then, click on the convert button again. The response times may wary depending on the size of your RDF file. </div>
</div>
<div id="responsePlace">
<label id="previewLabel"></label>
</div>
<!-- Div for web service  responses error messages -->
<div id="errorMessage" style="color: red; display: none;"></div>
<!-- Div for comments about the form -->
<div id="comments">
    <h3>Comments</h3>
    <div class="comment" id="comment-1">
        <strong>[1]</strong> If you load a file and fill in URL, the conversion will use the URL as the original RDF file.
    </div>
    <div class="comment" id="comment-2">
        <strong>[2]</strong> The converter creates multiple tables only if the data are suitable for dividing into multiple tables. If the data are not suitable for splitting into multiple tables, the converter creates only one table.
    </div>
</div>

<script type="text/javascript" src="{% if jekyll.environment == 'production' %}{{site.production.url}}{{site.production.baseurl}}{% else %}{{site.development.url}}{{site.development.baseurl}}{% endif %}/{{ 'assets/sendPost.js' | relative_url }}"></script>