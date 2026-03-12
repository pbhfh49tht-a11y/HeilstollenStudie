function generatePatientID(){

const id =
"PAT-" +
Math.floor(Math.random()*1000000);

document.getElementById("patientID").value = id;

}

generatePatientID();


const smoking = document.getElementById("smoking");
const infection = document.getElementById("infection");
const warning = document.getElementById("exclusionWarning");
const form = document.getElementById("studyForm");

function checkExclusion(){

if(smoking.value === "Ja" || infection.value === "Ja"){

warning.innerText =
"Leider erfüllen Sie möglicherweise die Teilnahmebedingungen der Studie nicht. Bitte kontaktieren Sie das Studienteam.";

return false;

}

warning.innerText="";
return true;

}

smoking.addEventListener("change", checkExclusion);
infection.addEventListener("change", checkExclusion);

form.addEventListener("submit", function(e){

if(!checkExclusion()){

e.preventDefault();

alert("Teilnahmebedingungen nicht erfüllt.");

}

});
