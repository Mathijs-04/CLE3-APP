document.addEventListener('DOMContentLoaded', (event) => {
    init();
});

let reisdata = [];
let main;

function init() {
    main = document.querySelector('main');
    if(main) {
        getFromLocalStorage();
    } else {
        console.error('Main element not found');
    }
}

function getFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('reisdata'));
    reisdata = data || [];
    createDivs();
}

function createDivs() {
    for (let i = 0; i < reisdata.length; i++) {
        const div = document.createElement('div');
        main.appendChild(div);
        fillDivs(div, reisdata[i]);
    }
}

function fillDivs(div, data) {
    const p = document.createElement('p');
    div.appendChild(p);
    p.innerHTML = `Van: ${data.van}, Naar: ${data.naar}`;
}