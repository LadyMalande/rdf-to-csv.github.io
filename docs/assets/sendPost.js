
const form = document.querySelector("#rdfandconfiguration");

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
    const response = await fetch("https://rdf-to-csvw.onrender.com/rdftocsvw", {
      method: "POST",
      mode: "cors",
      //responseType: "blob",
      // enctype: "multipart/form-data",
      // Set the FormData instance as the request body
      body: formData,
    });
    //console.log(await response.json());

    // HttpCall in here
    // On SuccessResponse
    
    const data = await response.blob();
    var file = new Blob([data], {
      type: 'text/csv' 
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
                response.json();

  } catch (e) {
    console.error(e);
  }
}

// Take over form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendData();
});

