
const form = document.querySelector("#rdfandconfiguration");

const toggleButton = document.querySelector("#toggleButton");

const previewLabel = document.querySelector("#previewLabel");

const divForResponse = document.querySelector("#responsePlace");

const csvData = `"podmět";"předmět"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu";",,"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu";"http://www.w3.org/2004/02/skos/core#ConceptScheme"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu";"Days of the week"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/pondělí";",,,,,"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/pondělí";"http://www.w3.org/2004/02/skos/core#Concept"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/pondělí";"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/pondělí";"Monday,Pondělí"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/pondělí";"pondělí"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu";","
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu";"Dny v týdnu"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/úterý";",,,,,"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/úterý";"http://www.w3.org/2004/02/skos/core#Concept"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/úterý";"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/úterý";"Tuesday,Úterý"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/úterý";"úterý"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/středa";",,,,,"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/středa";"http://www.w3.org/2004/02/skos/core#Concept"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/středa";"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/středa";"Wednesday,Středa"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/středa";"středa"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/čtvrtek";",,,,,"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/čtvrtek";"http://www.w3.org/2004/02/skos/core#Concept"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/čtvrtek";"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/čtvrtek";"Thursday,Čtvrtek"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/čtvrtek";"čtvrtek"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/pátek";",,,,,"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/pátek";"http://www.w3.org/2004/02/skos/core#Concept"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/pátek";"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/pátek";"Friday,Pátek"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/pátek";"pátek"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/sobota";",,,,,"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/sobota";"http://www.w3.org/2004/02/skos/core#Concept"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/sobota";"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/sobota";"Saturday,Sobota"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/sobota";"sobota"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/neděle";",,,,,"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/neděle";"http://www.w3.org/2004/02/skos/core#Concept"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/neděle";"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/neděle";"Neděle,Sunday"
"https://data.mvcr.gov.cz/zdroj/číselníky/dny-v-týdnu/položky/neděle";"neděle"`;

async function sendData() {
  // Associate the FormData object with the form element
  const formData = new FormData(form);

  try {
    console.log("sending request..." + form.getAttributeNames());
    form.getAttributeNames();
    const response = await fetch("https://rdf-to-csvw.onrender.com/getcsvstring", {
      method: "POST",
      mode: "cors",
      // enctype: "multipart/form-data",
      // Set the FormData instance as the request body
      body: formData,
    });
    //console.log(await response.json());

    // HttpCall in here
    // On SuccessResponse
    
    const data = await response.blob();
    var file = new Blob([data], {
      type: 'application/zip' 
      });
    var fileURL = URL.createObjectURL(file);
    // create an anchor and click on it.
    var anchorTag = document.createElement('a');
    anchorTag.href = fileURL;
    anchorTag.target = '_blank';
    
    anchorTag.download = formData.get("filename");
    document.body.appendChild(anchorTag);
    anchorTag.click();
    document.body.removeChild(anchorTag);
    


    previewLabel.innerHTML = "";
    previewLabel.innerHTML = await
                response.text;

  } catch (e) {
    console.error(e);
  }
}

// Take over form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendData();
});

toggleButton.addEventListener('click', function() {
  var content = document.getElementById('toggleContent');
  if (toggleButton.style.display === 'none') {
    content.style.display = 'block';
    this.textContent = 'Less parameters...';
  } else {
      content.style.display = 'none';
      this.textContent = 'More parameters...';
  }
});


$(function () {
  var dropZoneId = "drop-zone";
  //var buttonId = "clickHere";
  var buttonId = "spanForFileInput";
  var mouseOverClass = "mouse-over";
  var fileInputId = "file"; 

  var dropZone = $("#" + dropZoneId);
  var ooleft = dropZone.offset().left;
  var ooright = dropZone.outerWidth() + ooleft;
  var ootop = dropZone.offset().top;
  var oobottom = dropZone.outerHeight() + ootop;
  var inputFile = dropZone.find("input");
  document.getElementById(dropZoneId).addEventListener("dragover", function (e) {
      e.preventDefault();
      e.stopPropagation();
      dropZone.addClass(mouseOverClass);
      var x = e.pageX;
      var y = e.pageY;

      if (!(x < ooleft || x > ooright || y < ootop || y > oobottom)) {
          inputFile.offset({ top: y - 15, left: x - 100 });
      } else {
          inputFile.offset({ top: -400, left: -400 });
      }

  }, true);
/*
  if (buttonId != "") {
      var clickZone = $("#" + buttonId);

      var oleft = clickZone.offset().left;
      var oright = clickZone.outerWidth() + oleft;
      var otop = clickZone.offset().top;
      var obottom = clickZone.outerHeight() + otop;

      $("#" + buttonId).mousemove(function (e) {
          var x = e.pageX;
          var y = e.pageY;
          if (!(x < oleft || x > oright || y < otop || y > obottom)) {
              inputFile.offset({ top: y - 15, left: x - 160 });
          } else {
              inputFile.offset({ top: -400, left: -400 });
          }
      });
  }
  */

  console.log("Inside general function");

  document.getElementById(dropZoneId).addEventListener("drop", function (e) {
      $("#" + dropZoneId).removeClass(mouseOverClass);
  }, true);

  document.getElementById(dropZoneId).addEventListener("drop", function (e){
    console.log("Drag listener called and before if path");
    if($("#" + fileInputId).val().length != 0){
      console.log("Drag listener called and in if path");
      replaceInputWithLabel();
    } 
  }, true);

  document.getElementById(buttonId).addEventListener("click", function (e){
    console.log("Drag listener called and before if path");
    if($("#" + fileInputId).val().length != 0){
      console.log("Drag listener called and in if path");
      replaceInputWithLabel();
    } 
  }, true);
})

async function replaceInputWithLabel(){
  // CHANGE UI to show loaded file and remove input stuff for loading file
  const divForLabel = document.createElement("div");
  const labelFileName = document.createElement("label");
  const xButton = document.createElement("button");

  console.log("Replacing file Input with info");

  divForLabel.appendChild(labelFileName, xButton);
  labelFileName.innerText = $("#" + fileInputId).val();
  xButton.innerText = "X";
  xButton.addEventListener("click", returnInputFile);

  document.getElementById("labelForFileInput").replaceWith(divForLabel);
}

async function returnInputFile() {

}

// Require at least one of the two required inputs
document.addEventListener('DOMContentLoaded', function() {
  const inputs = Array.from(
    document.querySelectorAll('input[name=file], input[name=fileURL]')
  );

  const inputListener = e => {
    inputs
      .filter(i => i !== e.target)
      .forEach(i => (i.required = !e.target.value.length));
  };

  inputs.forEach(i => i.addEventListener('input', inputListener));
});