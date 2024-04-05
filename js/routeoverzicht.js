document.addEventListener('DOMContentLoaded', init);

function init() {
    let date = document.getElementById('date');
    let time = document.getElementById('time');
    let route = document.getElementById('route');

    if (date && time && route) {
        console.log(date.textContent);
        console.log(time.textContent);
        console.log(route.textContent);
    } else {
        console.log('One or more elements not found');
    }
}