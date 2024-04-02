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
        submitButton.addEventListener('click', function () {
            if (opslaanCheckbox && opslaanCheckbox.checked) {
                dataGetter();
            }
        });
    }
}

function sendBack() {
    window.history.back();
}

function dataGetter(event) {
    event.preventDefault(event);
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