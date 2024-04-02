document.addEventListener('DOMContentLoaded', init);

let reisdata = JSON.parse(localStorage.getItem('pairs')) || [];

function init() {
    const backButton = document.getElementById('back-button');
    const submitButton = document.getElementById('submit-button');
    const opslaanCheckbox = document.getElementById('opslaan');

    if (backButton) {
        backButton.addEventListener('click', sendBack);
    }

    if (submitButton) {
        submitButton.addEventListener('click', function (event) {
            if (opslaanCheckbox && opslaanCheckbox.checked) {
                event.preventDefault();
                dataGetter();
            }
        });
    }
}

function sendBack() {
    window.history.back();
}

function dataGetter() {
    const infoVan = document.getElementById('van');
    const infoVanValue = infoVan.value;
    const infoNaar = document.getElementById('naar');
    const infoNaarValue = infoNaar.value;

    dataStorer(infoVanValue, infoNaarValue);
    window.location.href = 'favorieteroutes.html';
}

function dataStorer(infoVanValue, infoNaarValue) {
    const dataAdd = {van: infoVanValue, naar: infoNaarValue};

    reisdata.push(dataAdd);

    localStorage.setItem('reisdata', JSON.stringify(reisdata));
}