---
layout: page
title: Converter
permalink: /converter
language: cs
---
Jak použít RDFtoCSV konvertor:
- 1) Nahrajte RDF soubor z lokálního uložiště nebo zapiště jeho URL.
- 2) [VOLITELNÉ] Vyberte, kolik chcete vytvořit tabulek v CSV formátu.
- 3) [VOLITELNÉ] Klikněte na "Více parametrů...", pokud chcete konverzi ještě dále pozměnit.
- 4) Klikněte na tlačítko "Konvertovat a uložit výsledný .zip".
Je hotovo! Prosím, vezměte na vědomí, že konverze formátu může nějakou dobu trvat. Pro menší soubory jde o jednotky sekund, pro velké soubory se může jednat až o několik minut.

<form id="rdfandconfiguration" action="https://rdf-to-csvw.onrender.com/rdftocsvw" method="post">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <div id="drop-zone">
        Přesuňte soubor sem...<br>
        <label class="label" id="labelForFileInput">
            <input type="file" name="file" id="file" required/>
            <span id="spanForFileInput">...nebo vyberte soubor</span>
        </label>
    </div>
    <label for="fileURL">URL RDF souboru</label>
    <input type="text" id="fileURL" name="fileURL" required> 
    <br>
    <label>Kolik chcete vytvořit CSV tabulek:</label>
    <label>
        <input type="radio" name="choice" value="option1" checked="checked" >
            Jedna tabulka
        </label>
        <label>
        <input type="radio" name="choice" value="option2">
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