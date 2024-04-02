document.addEventListener('DOMContentLoaded', init);

let reisdata = JSON.parse(localStorage.getItem('reisdata')) || [];

function init() {
    const backButton = document.getElementById('back-button');
    const submitButton = document.getElementById('submit-button');
    const opslaanCheckbox = document.getElementById('opslaan');

    if (backButton) {
        backButton.addEventListener('click', sendBack);
    }

    if (submitButton) {
        submitButton.addEventListener('click', function (event) {
            event.preventDefault();
            dataGetter(opslaanCheckbox && opslaanCheckbox.checked);
        });
    }
}

function sendBack() {
    window.history.back();
}

function dataGetter(saveData) {
    const infoVan = document.getElementById('van');
    const infoVanValue = infoVan.value;
    const infoNaar = document.getElementById('naar');
    const infoNaarValue = infoNaar.value;

    dataStorer(infoVanValue, infoNaarValue, saveData);
    window.location.href = 'favorieteroutes.html';
}

function dataStorer(infoVanValue, infoNaarValue, saveData) {
    const dataAdd = {van: infoVanValue, naar: infoNaarValue};

    if (saveData) {
        reisdata.push(dataAdd);
        localStorage.setItem('reisdata', JSON.stringify(reisdata));
    }
}