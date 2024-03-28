window.addEventListener('load', init);

let reisdata = JSON.parse(localStorage.getItem('pairs')) || [];

function init() {
    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', sendBack);
    const submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', dataGetter);

}



function sendBack (){
    console.log('clicked on back button');
    window.history.back();
}

function dataGetter (event) {
    event.preventDefault();
    const infoVan = document.getElementById('van');
    const infoVanValue = infoVan.value;
    console.log(infoVanValue);
    const infoNaar = document.getElementById('naar');
    const infoNaarValue = infoNaar.value;
    console.log(infoNaarValue);

    dataStorer(infoVanValue, infoNaarValue);
}


function dataStorer (infoVanValue, infoNaarValue) {
    const dataAdd = {van: infoVanValue, naar: infoNaarValue};

    reisdata.push(dataAdd);

    localStorage.setItem('reisdata', JSON.stringify(reisdata));
}


//Input value in forms,
    //Store value in variable,
        //Variable in  array.

//Haal