let tallInput = document.getElementById("Tall");
let sjekkButton = document.getElementById("Sjekk");
let flaksButton = document.getElementById("Flaks");
let svar = Math.floor(Math.random() * 101);
let attempts = 0; 

sjekkButton.addEventListener("click", function() {
  attempts++; 
  let tall = parseInt(tallInput.value);

  if (tall === svar) {
    alert ("Riktig svar." + " Du brukte " + attempts + " forsøk.");
    location.reload();
    window.close();
  } else if (tall < svar) {
    alert("Skriv et tall større enn " + tall);
  } else {
    alert("Skriv et tall større enn " + tall);
  }
  console.log("Antall forsøk: " + attempts); 
});

flaksButton.addEventListener("click", function() {
  let flaks = Math.floor(Math.random() * 101);

  if (flaks === svar) {
    alert("Du fikk" + flaks + "\n" + " Du var heldig"  + " Du brukte " + attempts + " forsøk.");
    location.reload();
    window.close();
  } else {
    alert("Du fikk " + flaks + "\n" + " Du var ikke heldig");
  }
  attempts++; 
  console.log("Antall forsøk: " + attempts); 
});

console.log("Svaret er: " + svar);