
const form = document.querySelector("#rdfandconfiguration");

const toggleButton = document.querySelector("#toggleButton");

const previewLabel = document.querySelector("#previewLabel");

const divForResponse = document.querySelector("#responsePlace");

document.getElementById('rdfandconfiguration').addEventListener('submit', async function(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  // Clear any previous error message
  const errorMessageElement = document.getElementById('errorMessage');
  errorMessageElement.style.display = 'none'; // Hide any previous message
  errorMessageElement.innerText = ''; // Clear previous content

  try {
      const response = await fetch("https://rdf-to-csvw.onrender.com/rdftocsvw", {
          method: "POST",
          body: formData // Let the browser set the content-type
      });

      if (!response.ok) {
        // If the response is not ok, throw an error
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

      const data = await response.blob();
      const file = new Blob([data], { type: 'application/zip' });
      const fileURL = URL.createObjectURL(file);

      const anchorTag = document.createElement('a');
      anchorTag.href = fileURL;
      anchorTag.target = '_blank';
      anchorTag.download = 'result.zip'; // Change this if necessary
      document.body.appendChild(anchorTag);
      anchorTag.click();
      document.body.removeChild(anchorTag);

  } catch (e) {
            // If an error occurs, display the error message
            errorMessageElement.style.display = 'block';
            errorMessageElement.innerText = `There was a problem with your request: ${e.message}`;
            console.error(e);
  }
});

document.getElementById('file').addEventListener('change', function(event) {
  const file = event.target.files[0];  // Get the first file selected
  if (file) {
      document.getElementById('fileName').textContent = file.name;  // Display the file name
  } else {
    const pageLang = document.documentElement.lang;
    if(pageLang == "cs"){
      document.getElementById('fileName').textContent = "Nebyl vybrán žádný soubor";
    } else {
      document.getElementById('fileName').textContent = "No file chosen";
    }
  }
});

function clearFileInput() {
    document.getElementById('file').value = '';
    document.getElementById('fileName').value = '';
}
/*
async function sendData() {
  // Associate the FormData object with the form element
  const formData = new FormData(form);

  try {
    console.log("sending request..." + form.getAttributeNames());
    form.getAttributeNames();
    // const response = await fetch("https://rdf-to-csvw.onrender.com/getcsvstring", {
    const response = await fetch("https://rdf-to-csvw.onrender.com/rdftocsvw", {
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
*/

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

// Add event listener to the clear button
document.getElementById('clearButton').addEventListener('click', clearFileInput);


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