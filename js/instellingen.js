window.addEventListener("load",init)

// Globals
let chosenColor;


function init(){
    let colorForm = document.getElementById("form");
    colorForm.addEventListener("input", colorSelector)

    setChosenColorFromLocalStorage();

}
function colorSelector(e) {
    chosenColor = e.target.value;

    // Sla de geselecteerde kleur op in de local storage
    localStorage.setItem("gekozenKleur", chosenColor);
    kleurMaker()
}

function setChosenColorFromLocalStorage() {
    chosenColor = localStorage.getItem("gekozenKleur");

    if (chosenColor) {
        // Voeg de juiste class toe aan de elementen die een kleur nodig hebben
        kleurMaker()
    }
}


function kleurMaker() {
    let selectHeader = document.querySelector("header")
    selectHeader.className = '';
    selectHeader.classList.add(`header-${chosenColor}`)
}