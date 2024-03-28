window.addEventListener('load', init);

let reisdata = ['Test1', 'Test2'];
let main;

function init() {
    main = document.querySelector('main');
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
    p.innerHTML = data;
}