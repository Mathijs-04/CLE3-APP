document.addEventListener('DOMContentLoaded', init);

let dateData = localStorage.getItem('dateData') || 'Geen datum ingevoerd';
let timeData = localStorage.getItem('timeData') || 'Geen tijd ingevoerd';
let routeData = localStorage.getItem('routeData') || 'Geen route ingevoerd';

function init() {
    let dateDiv = document.getElementById('date');
    let timeDiv = document.getElementById('time');
    let routeDiv = document.getElementById('route');

    if (dateDiv && timeDiv && routeDiv) {
        console.log(dateDiv.textContent);
        console.log(timeDiv.textContent);
        console.log(routeDiv.textContent);
    } else {
        console.log('One or more elements not found');
    }
}