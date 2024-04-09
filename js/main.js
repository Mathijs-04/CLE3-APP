window.addEventListener('load', init);
let reisdata = JSON.parse(localStorage.getItem('pairs')) || [];
let chosenColor;

function init() {
    try {
        console.log('DOM loaded');
        setChosenColorFromLocalStorage();
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

    } catch (error) {
        console.error('Error in init function', error);
    }
}

function sendBack() {
    console.log('clicked on back button');
    window.history.back();
}

function dataGetter(event) {
    event.preventDefault(); // prevent form submission in all cases

    const infoVan = document.getElementById('van');
    const infoVanValue = infoVan.value;
    const infoNaar = document.getElementById('naar');
    const infoNaarValue = infoNaar.value;

    dataStorer(infoVanValue, infoNaarValue);

    if (infoVanValue !== "" && infoNaarValue !== "") {
        window.location.href = 'tijdsplanner.html'; // manually redirect when inputs are not empty
    } else {
        const main = document.querySelector('main');
        const existingErrorP = document.querySelector('main p.error-message');
        if (!existingErrorP) {
            const errorP = document.createElement('p');
            errorP.className = 'error-message';
            errorP.innerHTML = 'Vul de gegevens in!';
            main.appendChild(errorP);
        }
    }
}

function timeGetter() {
    const datum = document.getElementById('datum');
    const tijd = document.getElementById('tijd');

    if (datum && tijd) {
        const datumValue = datum.value;
        const tijdValue = tijd.value;

        if (datumValue !== "" && tijdValue !== "") {
            const timeData = {datum: datumValue, tijd: tijdValue};
            localStorage.setItem('timeData', JSON.stringify(timeData));
        } else {
            const main = document.querySelector('main');
            const existingErrorP = document.querySelector('main p.error-message');
            if (!existingErrorP) {
                const errorP = document.createElement('p');
                errorP.className = 'error-message';
                errorP.innerHTML = 'Vul de gegevens in!';
                main.appendChild(errorP);
            }
        }
    } else {
        console.error('Date or time input not found');
    }
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
    console.log('Setting chosen color from local storage')
    chosenColor = localStorage.getItem("chosenColorApp") || "blue";
    console.log(chosenColor);

    if (chosenColor) {
        kleurMaker();
    }
}

function kleurMaker() {
    console.log('Setting color');
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
        element.classList.remove("blue-text");
        element.classList.add(`${chosenColor}-text`);
    });

    let submitbutton = document.getElementById('submit-button');

    if (submitbutton) {
        submitbutton.classList.add(`submit-button-${chosenColor}`);
    }
    // voegd kleur toe aan input velden LLMAO
    let inputFields = document.getElementsByClassName("input-blue")
    console.log(inputFields)
    Array.from(inputFields).forEach(function (inputField) {
        inputField.classList.remove("input-blue");
        inputField.classList.add(`input-${chosenColor}`);
    });
}
