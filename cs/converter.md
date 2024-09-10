---
layout: page
title: Konvertor
permalink: /cs/converter
language: cs
handle: /converter
sitemap: false
---
Jak použít RDFtoCSV konvertor:
- 1) Nahrajte RDF soubor z lokálního uložiště nebo zapiště jeho URL.
- 2) [VOLITELNÉ] Vyberte, kolik chcete vytvořit tabulek v CSV formátu.
- 3) [VOLITELNÉ] Klikněte na "Více parametrů...", pokud chcete konverzi ještě dále pozměnit.
- 4) Klikněte na tlačítko "Konvertovat a uložit výsledný .zip".
Je hotovo! Prosím, vezměte na vědomí, že konverze formátu může nějakou dobu trvat. Pro menší soubory jde o jednotky sekund, pro velké soubory se může jednat až o několik minut.

<form id="rdfandconfiguration" action="https://rdf-to-csvw.onrender.com/rdftocsvw" method="post" enctype="multipart/form-data">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <div id="drop-zone">
        Přesuňte soubor sem...<br>
        <label class="label" id="labelForFileInput">
            <input type="file" name="file" id="file" required/>
            <span id="spanForFileInput">...nebo vyberte soubor</span>
            <p id="fileName"></p>
        </label>
        <button class="clear-button" id="clearButton">
            <i class="fa-regular fa-trash-can"></i>
        </button>
    </div>
    <label for="fileURL">URL RDF souboru</label>
    <input type="text" id="fileURL" name="fileURL" required> 
    <br>
    <label>Kolik chcete vytvořit CSV tabulek:</label>
    <label>
        <input type="radio" name="choice" value="basicQuery" checked="checked" >
            Jedna tabulka
        </label>
        <label>
        <input type="radio" name="choice" value="splitQuery">
            Více tabulek
        </label><br>
            <button id="toggleButton">Více parametrů...</button>
        <div id="toggleContent">
            <label>Vyberte parametr číslo 1:</label>
    <label>
        <input type="radio" name="choice2" value="opt1" >
            Možnost 1
        </label>
        <label>
        <input type="radio" name="choice2" value="opt2">
            Možnost 2
        </label><br>
        </div>
    <br><br>
    <input type="submit" value="Konvertovat a uložit výsledný .zip" id="submitButton">
</form>
<div id="responsePlace">
<label id="previewLabel"></label>
</div>

<script type="text/javascript" src="https://ladymalande.github.io/{{ base.url }}/{{ 'assets/sendPost.js' | relative_url }}"></script>

<div id="errorMessage" style="color: red; display: none;"></div>
<!-- 
<h1>Calculate SHA-256 Checksum</h1>
<input type="file" id="fileInput" />
<p>Checksum: <span id="checksumOutput"></span></p>

<script>
// Function to convert ArrayBuffer to Hexadecimal String
function arrayBufferToHex(buffer) {
    return [...new Uint8Array(buffer)]
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

// Function to calculate SHA-256 checksum of the file
async function calculateChecksum(file) {
    const arrayBuffer = await file.arrayBuffer();  // Read file as ArrayBuffer
    const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);  // Hash it
    const hexHash = arrayBufferToHex(hashBuffer);  // Convert ArrayBuffer to hex string
    return hexHash;
}

document.getElementById('fileInput').addEventListener('change', async (event) => {
    const file = event.target.files[0];
    if (file) {
        const checksum = await calculateChecksum(file);
        document.getElementById('checksumOutput').innerText = checksum;  // Display checksum
    }
});
</script>
-->