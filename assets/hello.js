
const form = document.querySelector("#rdfandconfiguration");
const formData = new FormData(form);
$("submit").click(function(){
    $.post("https://rdf-to-csvw.onrender.com/rdftocsvw",
    formData,
    function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
    });
  }); 