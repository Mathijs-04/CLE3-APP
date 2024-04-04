document.addEventListener('DOMContentLoaded', init);

let favoriteRoutesData = [];
let main;

function init() {
    main = document.querySelector('main');
    if (main) {
        getFromLocalStorage();
        createDivs();
    } else {
        console.error('Main element not found');
    }
}

function getFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('reisdata'));
    favoriteRoutesData = data || [];
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
    const deleteButton = document.createElement('p');
    deleteButton.classList.add('delete');
    deleteButton.classList.add('blue-text');
    deleteButton.innerHTML = '<img src="path/to/Xbutton.png" alt="X">';
    deleteButton.addEventListener('click', removeFromLocalStorage);
    div.appendChild(deleteButton);

    const fromTo = document.createElement('p');
    fromTo.innerHTML = `${data.van} > ${data.naar}`;
    fromTo.classList.add('blue-text');
    div.appendChild(fromTo);
}

function removeFromLocalStorage(event) {
    const index = Array.from(this.parentNode.parentNode.children).indexOf(this.parentNode);
    favoriteRoutesData.splice(index, 1);
    localStorage.setItem('reisdata', JSON.stringify(favoriteRoutesData));
    createDivs();
}
