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
        div.classList.add('route');
        main.appendChild(div);
        fillDivs(div, routeData);
    });
}

function fillDivs(div, data) {
    const deleteButton = document.createElement('p');
    deleteButton.classList.add('delete');
    deleteButton.innerText = 'X';
    div.appendChild(deleteButton);

    const fromTo = document.createElement('p');
    fromTo.innerText = `${data.van} > ${data.naar}`;
    div.appendChild(fromTo);
}

function removeFromLocalStorage(event) {
    console.log('testCLICKed');
   const index = Array.from(this.parentNode.parentNode.children).indexOf(this.parentNode);
    favoriteRoutesData.splice(index, 1);
    localStorage.setItem('reisdata', JSON.stringify(favoriteRoutesData));
    createDivs();
}

// test