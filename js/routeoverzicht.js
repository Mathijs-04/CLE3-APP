document.addEventListener('DOMContentLoaded', init);

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