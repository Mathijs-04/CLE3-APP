document.addEventListener('DOMContentLoaded', init);

let reisdata = JSON.parse(localStorage.getItem('pairs')) || [];

function init() {
    getFromLocalStorage();
    const backButton = document.getElementById('back-button');
    const submitButton = document.getElementById('submit-button');

    if(backButton) {
        backButton.addEventListener('click', sendBack);
    } else {
        console.error('Back button not found');
    }

    if(submitButton) {
        submitButton.addEventListener('click', dataGetter);
    } else {
        console.error('Submit button not found');
    }
}

function sendBack (){
    console.log('clicked on back button');
    window.history.back();
}

function dataGetter (event) {
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
    const dataAdd = { van: infoVanValue, naar: infoNaarValue };

    // Append the new route to the existing routes data
    existingData.push(dataAdd);

    // Store the updated routes data back to local storage
    localStorage.setItem('reisdata', JSON.stringify(existingData));
}


function getFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('reisdata'));
    favoriteRoutesData = data || [];
}
