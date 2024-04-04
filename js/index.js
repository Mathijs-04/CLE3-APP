window.addEventListener('load', init);

// Globals
let settings;
let detailsModal;
let detailsModalContent;
let detailsModalCloseButton;
// let chosenColor;

function init () {

    // Event listeners toevoegen
    const opgeslagenRoutesButton = document.getElementById('nieuwe-route-button');
    opgeslagenRoutesButton.addEventListener('click', sendRouteplanner);

    const nieuweRoutesButton = document.getElementById('opgeslagen-route-button');
    nieuweRoutesButton.addEventListener('click', sendFavorieteroutes);

    settings = document.getElementById('setting-modal');
    settings.addEventListener('click', detailsModalInfo);

    chosenColor = localStorage.getItem("chosenColorApp");

// Kleuren van de website body
    let selectBody = document.querySelector("body")
    selectBody.className = '';
    selectBody.classList.add(`${chosenColor}`)
}

function controlFunction() {
    console.log('clicked on button');
}
function sendRouteplanner () {
    console.log('Clicked on nieuwe route');
    window.location.href = 'routeplanner.html';
}

function sendFavorieteroutes () {
    console.log('Clicked on FAVORITES');
    window.location.href = 'favorieteroutes.html';
}

function sendSettings(){
    window.location.href = 'instellingen.html';
}

// Dirk zn stuk
// Event handler voor het modale venster sluiten
function detailsModalClickHandler(e) {
    const clickedElement = e.target;
    if (clickedElement.tagName === "DIALOG") {
        detailsModal.close();
    }
}

// Functie om modale vensterinformatie weer te geven
function detailsModalInfo() {
    detailsModalContent.innerHTML = "";

    const settingsLink = document.createElement('p');
    settingsLink.innerHTML = "Settings";
    settingsLink.addEventListener('click', sendSettings)
    detailsModalContent.appendChild(settingsLink);

    detailsModal.showModal();
}
