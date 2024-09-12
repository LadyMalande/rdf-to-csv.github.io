
const form = document.querySelector("#rdfandconfiguration");

const toggleButton = document.querySelector("#toggleButton");

const previewLabel = document.querySelector("#previewLabel");

const divForResponse = document.querySelector("#responsePlace");

const fileInput = document.getElementById('file');

const spanForFileInput = document.getElementById('spanForFileInput');

const dropZone = document.getElementById('drop-zone');

const errorMessageElement = document.getElementById('errorMessage');



document.getElementById('rdfandconfiguration').addEventListener('submit', async function(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  // Clear any previous error message
  errorMessageElement.style.color = 'red';
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
        errorMessageElement.style.color = 'green';
        errorMessageElement.innerText = `Konvertovaný soubor úspěšně dorazil.`;
      } else {
        errorMessageElement.style.color = 'green';
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
  
  // Prevent default behaviors for dragover and drop
  document.getElementById(dropZoneId).addEventListener("dragover", function (e) {
    e.preventDefault(); // Prevent default to stop file from opening
    e.stopPropagation(); // Stop propagation
    dropZone.addClass(mouseOverClass);
}, true);

document.getElementById(dropZoneId).addEventListener("dragleave", function (e) {
    e.preventDefault();
    e.stopPropagation();
    dropZone.removeClass(mouseOverClass);
}, true);

  document.getElementById(dropZoneId).addEventListener("drop", function (e) {
      e.preventDefault(); // Prevent default to stop file from opening
      e.stopPropagation(); // Stop propagation
      dropZone.removeClass(mouseOverClass);

      // Get the dropped files
      const files = e.dataTransfer.files;
      
      if (files.length > 0) {
        console.log("Files dropped:", files);
      // Assign dropped file to the file input element
      fileInput.files = files;  // Access the DOM element using [0] to set files

      // Manually trigger the 'change' and 'input' event
      const event = new Event('change', { bubbles: true });
      fileInput.dispatchEvent(event);  // Trigger the event on the element
      const eventForDeterminingRequired = new Event('input', { bubbles: true });
      fileInput.dispatchEvent(eventForDeterminingRequired);  // Trigger the event on the element

      // Display file name to the user
      if (files.length > 0) {
          //document.getElementById("fileName").textContent = files[0].name;
          console.log("File dropped: " + files[0].name);
      }
      } else {
        console.error("No files were dropped.");
  }
  }, true);

  document.getElementById(buttonId).addEventListener("click", function (e){
    console.log("Drag listener called and before if path");
    if($("#" + fileInputId).val().length != 0){
      console.log("Drag listener called and in if path");
    } 
  }, true);
});


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
  //event.preventDefault();  // Prevent form submission for demo purposes

  let countdown = document.getElementById('countdown');
  let patienceText = document.getElementById('patienceText');
  let timeLeft = 30;

  countdown.style.display = 'block';  // Show the countdown
  patienceText.style.display = 'block';
  countdown.textContent = timeLeft;   // Set initial time

  let countdownInterval = setInterval(function() {
      timeLeft--;
      countdown.textContent = timeLeft;  // Update the countdown

      if (timeLeft <= 0) {
          clearInterval(countdownInterval);  // Stop the countdown at 0
          countdown.style.display = 'none';  // Hide the countdown
          patienceText.style.display = 'none';
      }
  }, 1000);  // Decrease the countdown every second (1000ms)
});

window.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggleButton');
  const pageLang = document.documentElement.lang;  // Get the page language

  if (pageLang === "cs") {
      toggleButton.setAttribute('data-tooltip', 'Zatím nedostupné - vyzkoušejte tuto možnost v příští verzi RDFtoCSV!');
  } else {
      toggleButton.setAttribute('data-tooltip', 'Not yet available - see this feature in next versions of RDFtoCSV!');
  }
});