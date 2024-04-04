document.addEventListener('DOMContentLoaded', init);

let reisdata = JSON.parse(localStorage.getItem('pairs')) || [];
let chosenColor;

function init() {
    getFromLocalStorage();
    const backButton = document.getElementById('back-button');
    const submitButton = document.getElementById('submit-button');

    if (backButton) {
        backButton.addEventListener('click', sendBack);
    }

    if (submitButton) {
        submitButton.addEventListener('click', dataGetter);
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
    const infoNaar = document.getElementById('naar');
    const infoNaarValue = infoNaar.value;

    const datum = document.getElementById('datum');
    const datumValue = datum.value;
    const tijd = document.getElementById('tijd');
    const tijdValue = tijd.value;

    dataStorer(infoVanValue, infoNaarValue, datumValue, tijdValue);

    window.location.href = 'tijdsplanner.html';
}

function dataStorer(infoVanValue, infoNaarValue, datumValue, tijdValue) {
    let existingData = JSON.parse(localStorage.getItem('reisdata')) || [];
    let favoriteData = JSON.parse(localStorage.getItem('favoritedata')) || [];

    const dataAdd = {van: infoVanValue, naar: infoNaarValue, datum: datumValue, tijd: tijdValue};

    existingData.push(dataAdd);

    const opslaanCheckbox = document.getElementById('opslaan');
    if (opslaanCheckbox && opslaanCheckbox.checked) {
        favoriteData.push(dataAdd);
    }

    localStorage.setItem('reisdata', JSON.stringify(existingData));
    localStorage.setItem('favoritedata', JSON.stringify(favoriteData));
}

function getFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('reisdata'));
    favoriteRoutesData = data || [];
}

function setChosenColorFromLocalStorage() {
    chosenColor = localStorage.getItem("chosenColorApp");

    if (chosenColor) {
        kleurMaker()
    }
}

function kleurMaker() {
    let selectHeader = document.querySelector("header")
    selectHeader.className = '';
    selectHeader.classList.add(`header-${chosenColor}`)

    let backbutton = document.getElementById('back-button');
    let backbuttonimage = backbutton.querySelector("img")

    if (backbuttonimage && chosenColor) {
        backbuttonimage.src = `./img/arrow-${chosenColor}.png`;
    }

    let headerLogo = document.getElementById('reis-rust');
    let headerLogoImage = headerLogo.querySelector("img")

    if (headerLogoImage && chosenColor) {
        headerLogoImage.src = `./img/logo-${chosenColor}.png`;
    }

    let submitbutton = document.querySelector('button');

    submitbutton.classList.add(`submit-button-${chosenColor}`)

    let inputFields = document.querySelectorAll('input');

    inputFields.forEach(function (inputField) {
        inputField.classList.add(`input-${chosenColor}`);
    });

    let selectText = document.getElementsByClassName("blue-text")

    for (let i = 0; i < selectText.length; i++) {
        selectText[i].classList.add(`${chosenColor}-text`);
    }
}