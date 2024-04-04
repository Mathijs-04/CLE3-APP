window.addEventListener('load', init);
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

function timeGetter() {
    const datum = document.getElementById('datum');
    const tijd = document.getElementById('tijd');

    if (datum && tijd) {
        const datumValue = datum.value;
        const tijdValue = tijd.value;

        const timeData = {datum: datumValue, tijd: tijdValue};

        localStorage.setItem('timeData', JSON.stringify(timeData));
    } else {
        console.error('Date or time input not found');
    }
}

function dataStorer(infoVanValue, infoNaarValue) {
    let existingData = JSON.parse(localStorage.getItem('reisdata')) || [];
    let favoriteData = JSON.parse(localStorage.getItem('favoritedata')) || [];

    const dataAdd = {van: infoVanValue, naar: infoNaarValue};

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
        kleurMaker();
    }
}

function kleurMaker() {
    let selectHeader = document.querySelector("header");
    if (!selectHeader) {
        console.error('Header element not found');
        return;
    }
    selectHeader.className = '';
    selectHeader.classList.add(`header-${chosenColor}`);

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

    let selectText = document.getElementsByClassName("blue-text")

    Array.from(selectText).forEach(function (element) {
        element.classList.add(`${chosenColor}-text`);
        element.classList.remove("blue-text");
    });

    let submitbutton = document.getElementById('submit-button');

    if (submitbutton) {
        submitbutton.classList.add(`submit-button-${chosenColor}`);
    }

    let inputFields = document.querySelectorAll('input');

    inputFields.forEach(function (inputField) {
        inputField.classList.add(`input-${chosenColor}`);
    });
}
