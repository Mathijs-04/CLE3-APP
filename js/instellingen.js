document.addEventListener('DOMContentLoaded', (event) => {
    init();
});

let favoriteRoutesData = [];
let main;

function init() {
    main = document.querySelector('main');
    if (main) {
        getFromLocalStorage()

    } else {
        console.error('Main element not found');
    }
}

function getFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('reisdata'));
    favoriteRoutesData = data || [];
    createDivs();
    const deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach(button => button.addEventListener('click', removeFromLocalStorage));

}

function createDivs() {
    main.innerHTML = '';
    favoriteRoutesData.forEach(routeData => {
        const div = document.createElement('div');
        div.classList.add('route-blue');
        main.appendChild(div);
        fillDivs(div, routeData);
    });
}

function fillDivs(div, data) {


    const fromTo = document.createElement('p');
    fromTo.innerText = `${data.van} > ${data.naar}`;
    div.appendChild(fromTo);
}