document.addEventListener('DOMContentLoaded', init);

let reisdata = JSON.parse(localStorage.getItem('pairs')) || [];
let chosenColor;
let favoriteRoutesData = [];
let main;

function init() {
    setChosenColorFromLocalStorage();
    getFromLocalStorage(); // Make sure to get data before any operations
    addBlueTextElements(); // Add elements with class 'blue-text'
    kleurMaker(); // Apply styles after adding elements

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
}

// Function to add elements with class 'blue-text'
function addBlueTextElements() {
    // Add code to dynamically add elements with class 'blue-text' here
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
    const data = JSON.parse(localStorage.getItem('favoritedata'));
    favoriteRoutesData = data || [];
}

function setChosenColorFromLocalStorage() {
    chosenColor = localStorage.getItem("chosenColorApp");
}

function kleurMaker() {
    console.log(chosenColor);
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
        // Pas de bron van de afbeelding aan met de nieuwe kleur
        backbuttonimage.src = `./img/arrow-${chosenColor}.png`;
    }

    let headerLogo = document.getElementById('reis-rust');
    let headerLogoImage = headerLogo.querySelector("img")

    if (headerLogoImage && chosenColor) {
        // Pas de bron van de afbeelding aan met de nieuwe kleur
        headerLogoImage.src = `./img/logo-${chosenColor}.png`;
    }

    // Add more styling here
}

// Favorites Routes Section

function createDivs() {
    main = document.querySelector('main');
    if (!main) {
        console.error('Main element not found');
        return;
    }
    main.innerHTML = '';
    favoriteRoutesData.forEach(routeData => {
        const div = document.createElement('div');
        div.classList.add('route-blue');
        main.appendChild(div);
        fillDivs(div, routeData);
    });
}

function fillDivs(div, data) {
    const deleteButton = document.createElement('p');
    deleteButton.classList.add('delete');
    deleteButton.classList.add('blue-text');
    deleteButton.innerText = 'X';
    deleteButton.addEventListener('click', removeFromLocalStorage); // Add event listener here
    div.appendChild(deleteButton);

    const fromTo = document.createElement('p');
    fromTo.innerText = `${data.van} > ${data.naar}`;
    fromTo.classList.add('blue-text');
    div.appendChild(fromTo);
}

function removeFromLocalStorage(event) {
    console.log('testCLICKed');
    const index = Array.from(this.parentNode.parentNode.children).indexOf(this.parentNode);
    favoriteRoutesData.splice(index, 1);
    localStorage.setItem('favoritedata', JSON.stringify(favoriteRoutesData));
    createDivs();
}
