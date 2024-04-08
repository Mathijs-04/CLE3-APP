document.addEventListener('DOMContentLoaded', init);

let timeData = JSON.parse(localStorage.getItem('timeData'));
let reisData = JSON.parse(localStorage.getItem('reisdata'));

let dateData, timeDataValue, routeData;
if (timeData) {
    dateData = timeData.datum;
    timeDataValue = timeData.tijd;
}

if (reisData && reisData.length > 0) {
    let lastReisData = reisData[reisData.length - 1];
    routeData = {van: lastReisData.van, naar: lastReisData.naar};
}

function init() {
    let dateDiv = document.getElementById('date');
    let timeDiv = document.getElementById('time');
    let routeDiv = document.getElementById('route');
    let easterEgg = document.getElementById('easter-egg');

    if (dateDiv && timeDiv && routeDiv) {
        let formattedDate = dateData ? new Date(dateData).toLocaleDateString('en-GB') : 'Geen datum ingevoerd';
        let pDate = document.createElement('p');
        pDate.textContent = formattedDate;
        pDate.classList.add('blue-text');
        dateDiv.appendChild(pDate);

        let pTime = document.createElement('p');
        pTime.textContent = timeDataValue || 'Geen tijd ingevoerd';
        pTime.classList.add('blue-text');
        timeDiv.appendChild(pTime);

        let pRoute = document.createElement('p');
        pRoute.textContent = routeData ? `${routeData.van} > ${routeData.naar}` : 'Geen route ingevoerd';
        pRoute.classList.add('blue-text');
        routeDiv.appendChild(pRoute);
    } else {
        console.log('One or more elements not found');
    }

    //Easter Egg van Mathijs voor eigen signatuur
    if (routeData && routeData.naar === 'Malevelon Creek') {
        let img = document.createElement('img');
        img.src = './img/helldivers.gif';
        easterEgg.appendChild(img);
    }
}