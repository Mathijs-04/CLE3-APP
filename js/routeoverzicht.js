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

    if (dateDiv && timeDiv && routeDiv) {
        let formattedDate = dateData ? new Date(dateData).toLocaleDateString('en-GB') : 'Geen datum ingevoerd';
        dateDiv.textContent = formattedDate;
        timeDiv.textContent = timeDataValue || 'Geen tijd ingevoerd';
        routeDiv.textContent = routeData ? `${routeData.van} > ${routeData.naar}` : 'Geen route ingevoerd';
    } else {
        console.log('One or more elements not found');
    }
}