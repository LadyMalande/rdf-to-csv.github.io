
const form = document.querySelector("#rdfandconfiguration");

const toggleButton = document.querySelector("#toggleButton");

const previewLabel = document.querySelector("#previewLabel");

const divForResponse = document.querySelector("#responsePlace");

const fileInput = document.getElementById('file');

const spanForFileInput = document.getElementById('spanForFileInput');



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

      errorMessageElement.style.display = 'block';
      const pageLang = document.documentElement.lang;
      if(pageLang == "cs"){
        errorMessageElement.innerText = `Konvertovaný soubor úspěšně dorazil.`;
      } else {
        errorMessageElement.innerText = `The converted file has been successfully delivered.`;
      }



  } catch (e) {
            // If an error occurs, display the error message
            errorMessageElement.style.display = 'block';
            if(pageLang == "cs"){
              errorMessageElement.innerText = `Nastal problém s vaším požadavkem: ${e.message}`;
            } else {
              errorMessageElement.innerText = `There was a problem with your request: ${e.message}`;
            }
            
            console.error(e);
  }
});



function fetchWithTimeout(url, options, timeout = 5000) {
    return new Promise((resolve, reject) => {
        // Set up the timeout
        const timer = setTimeout(() => {
            reject(new Error("Request timed out"));
        }, timeout);

        // Perform the fetch
        fetch(url, options)
            .then(response => {
                clearTimeout(timer); // Clear the timeout if response is received
                resolve(response);   // Resolve with the response
            })
            .catch(err => {
                clearTimeout(timer); // Clear the timeout on error
                reject(err);         // Reject with the error
            });
    });
}

/*
async function postDataWithRetry(url, formData, retryCount = 3, timeout = 5000) {
  const errorMessageElement = document.getElementById('errorMessage');
  const options = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
  };

  for (let i = 0; i < retryCount; i++) {
      try {
          const response = await fetchWithTimeout(url, options, timeout);
          if (!response.ok) {
              throw new Error("Request failed with status: " + response.status);
          }
          const result = await response.json();
          return result; // Successfully received response
      } catch (error) {
          console.error(`Attempt ${i + 1} failed: ${error.message}`);
          if (i === retryCount - 1) {
              throw new Error("All attempts failed");
          }
      }
  }
}


document.getElementById('rdfandconfiguration').addEventListener('submit', async function(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  // Clear any previous error message
  const errorMessageElement = document.getElementById('errorMessage');
  errorMessageElement.style.display = 'none'; // Hide any previous message
  errorMessageElement.innerText = ''; // Clear previous content

  postDataWithRetry(url, formData, 3, 5000)
    .then(result => console.log("Success:", result))
    .catch(error => console.error("Error:", error.message));  
}
/*
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
*/

function clearFileInput() {
    document.getElementById('file').value = '';
    // If no file is selected, revert to the original text
    const pageLang = document.documentElement.lang;
    if(pageLang == "cs"){
      spanForFileInput.textContent = "...nebo vyberte soubor";
    } else {
      spanForFileInput.textContent = "...or select a file";
    }
    
}

fileInput.addEventListener('change', function() {
  // Check if a file has been selected
  if (fileInput.files.length > 0) {
      // Get the name of the file
      const fileName = fileInput.files[0].name;
      // Change the span text to the file name
      spanForFileInput.textContent = fileName;
  } else {
      // If no file is selected, revert to the original text
      const pageLang = document.documentElement.lang;
      if(pageLang == "cs"){
        spanForFileInput.textContent = "...nebo vyberte soubor";
      } else {
        spanForFileInput.textContent = "...or select a file";
      }
      
  }
});



errorMessageElement = document.getElementById('errorMessage');
submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', function() {
  errorMessageElement.innerText = ``;
});


toggleButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevents form submission
  console.log('Button clicked without form submission');
});

// Add event listener to the clear button
document.getElementById('clearButton').addEventListener('click', function(event) {
  event.preventDefault(); // Prevents form submission
  clearFileInput();
  console.log('Button clicked without form submission');
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

document.getElementById('submitButton').addEventListener('click', function(event) {
  event.preventDefault();  // Prevent form submission for demo purposes

  let countdown = document.getElementById('countdown');
  let timeLeft = 30;

  countdown.style.display = 'block';  // Show the countdown
  countdown.textContent = timeLeft;   // Set initial time

  let countdownInterval = setInterval(function() {
      timeLeft--;
      countdown.textContent = timeLeft;  // Update the countdown

      if (timeLeft <= 0) {
          clearInterval(countdownInterval);  // Stop the countdown at 0
          countdown.style.display = 'none';  // Hide the countdown
      }
  }, 1000);  // Decrease the countdown every second (1000ms)
});