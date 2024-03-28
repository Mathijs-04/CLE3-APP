document.addEventListener('DOMContentLoaded', (event) => {
    init();
});

let favoriteRoutesData = [];
let main;

function init() {
    main = document.querySelector('main');
    if (main) {
        getFromLocalStorage();
    } else {
        console.error('Main element not found');
    }
}

function getFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('reisdata'));
    favoriteRoutesData = data || [];
    createDivs();
}

function createDivs() {
    for (let i = 0; i < favoriteRoutesData.length; i++) {
        const div = document.createElement('div');
        main.appendChild(div);
        fillDivs(div, favoriteRoutesData[i]);
    }
}

function fillDivs(div, data) {
    const p = document.createElement('p');
    div.appendChild(p);
    p.innerHTML = `${data.van}, ${data.naar}`;
}