window.addEventListener("load",init)

// Globals
let chosenColor;


function init(){
    let colorForm = document.getElementById("form");
    colorForm.addEventListener("input", colorSelector)
    console.log(colorForm)

    setChosenColorFromLocalStorage();

}
function colorSelector(e) {
    console.log(e.target.value)

    chosenColor = e.target.value;

    // Sla de geselecteerde kleur op in de local storage
    localStorage.setItem("gekozenKleur", chosenColor);
    kleurMaker()
}

function setChosenColorFromLocalStorage() {
    chosenColor = localStorage.getItem("gekozenKleur");

    if (chosenColor) {
        // Voeg de juiste class toe aan de elementen die een kleur nodig hebben
        console.log(chosenColor);
        kleurMaker()
    }
}


function kleurMaker() {
    let selectHeader = document.querySelector("header")
    selectHeader.className = '';
    selectHeader.classList.add(`header-${chosenColor}`)

    if (chosenColor === "paars") {
        console.log("De kleur is paars")
    } else if (chosenColor === "groen") {
        console.log("De kleur is Groen")
    } else if (chosenColor === "roze") {
        console.log("De kleur is Roze")
    } else if (chosenColor === "blauw") {
        console.log("De kleur is Blauw")
    }
}