document.addEventListener('DOMContentLoaded', init);

let reisdata = JSON.parse(localStorage.getItem('reisdata')) || [];

function init() {
    const opslaan = localStorage.getItem('opslaan');

    if (opslaan === 'true') {
        displayRoutes();
    }
}

function displayRoutes() {
    const container = document.getElementById('main');

    reisdata.forEach(route => {
        const routeElement = document.createElement('div');
        routeElement.textContent = `Van: ${route.van}, Naar: ${route.naar}`;
        container.appendChild(routeElement);
    });
}