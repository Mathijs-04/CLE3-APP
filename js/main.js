document.addEventListener('DOMContentLoaded', init);

let reisdata = JSON.parse(localStorage.getItem('reisdata')) || [];

function init() {
    const backButton = document.getElementById('back-button');
    const submitButton = document.getElementById('submit');
    const opslaanCheckbox = document.getElementById('opslaan');

    if (backButton) {
        backButton.addEventListener('click', sendBack);
    }

    if (submitButton) {
        submitButton.addEventListener('click', function (event) {
            if (opslaanCheckbox && opslaanCheckbox.checked) {
                event.preventDefault();
                dataGetter();
                localStorage.setItem('opslaan', 'true');
            } else {
                localStorage.setItem('opslaan', 'false');
            }
        });
    }
}

function sendBack() {
    window.history.back();
}

function dataGetter() {
    const infoVan = document.getElementById('van');
    const infoNaar = document.getElementById('naar');
    const infoVanValue = infoVan.value;
    const infoNaarValue = infoNaar.value;

    dataStorer(infoVanValue, infoNaarValue);
}

function dataStorer(infoVanValue, infoNaarValue) {
    const dataAdd = {van: infoVanValue, naar: infoNaarValue};

    reisdata.push(dataAdd);
    localStorage.setItem('reisdata', JSON.stringify(reisdata));
}