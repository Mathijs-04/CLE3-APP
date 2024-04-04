document.addEventListener('DOMContentLoaded', init);

let reisdata = JSON.parse(localStorage.getItem('pairs')) || [];
let chosenColor;

function init() {
    getFromLocalStorage();
    const backButton = document.getElementById('back-button');
    const submitButton = document.getElementById('submit-button');

    if (backButton) {
        backButton.addEventListener('click', sendBack);
    } else {
        console.error('Back button not found');
    }

    if (submitButton) {
        submitButton.addEventListener('click', dataGetter);
    } else {
        console.error('Submit button not found');
    }

    setChosenColorFromLocalStorage();
}

function sendBack() {
    console.log('clicked on back button');
    window.history.back();
}

function dataGetter(event) {
    event.preventDefault(event);
    const infoVan = document.getElementById('van');
    const infoVanValue = infoVan.value;
    console.log(infoVanValue);
    const infoNaar = document.getElementById('naar');
    const infoNaarValue = infoNaar.value;
    console.log(infoNaarValue);

    dataStorer(infoVanValue, infoNaarValue);
    window.location.href = 'tijdsplanner.html';
}

function dataStorer(infoVanValue, infoNaarValue) {
    // Retrieve existing routes data from local storage
    let existingData = JSON.parse(localStorage.getItem('reisdata')) || [];

    // Create the new route object
    const dataAdd = {van: infoVanValue, naar: infoNaarValue};

    // Append the new route to the existing routes data
    existingData.push(dataAdd);

    // Store the updated routes data back to local storage
    localStorage.setItem('reisdata', JSON.stringify(existingData));
}


function getFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('reisdata'));
    favoriteRoutesData = data || [];
}

function setChosenColorFromLocalStorage() {
    chosenColor = localStorage.getItem("chosenColorApp");

    if (chosenColor) {
        // Voeg de juiste class toe aan de elementen die een kleur nodig hebben
        kleurMaker()
    }
}

function kleurMaker() {
    console.log(chosenColor)
    let selectHeader = document.querySelector("header")
    selectHeader.className = '';
    selectHeader.classList.add(`header-${chosenColor}`)

    let backbutton = document.getElementById('back-button');
    let backbuttonimage = backbutton.querySelector("img")

    if (backbuttonimage && chosenColor) {
        // Pas de bron van de afbeelding aan met de nieuwe kleur
        backbuttonimage.src = `./img/arrow-${chosenColor}.png`;
    }

    let headerLogo = document.getElementById('reis-rust');
    let headerLogoImage = headerLogo.querySelector("img")

    if (headerLogoImage && chosenColor) {
        // Pas de bron van de afbeelding aan met de nieuwe kleur
        headerLogoImage.src = `./img/logo-${chosenColor}.png`;
    }

    let submitbutton = document.querySelector('button');

    submitbutton.classList.add(`submit-button-${chosenColor}`)

    let inputFields = document.querySelectorAll('input');

    inputFields.forEach(function (inputField) {
        inputField.classList.add(`input-${chosenColor}`);
    });

    let selectText = document.getElementsByClassName("blue-text")
    console.log(selectText)

    for (let i = 0; i < selectText.length; i++) {
        //selectText[i].classList.remove("blue-text");
        selectText[i].classList.add(`${chosenColor}-text`);
    }

}