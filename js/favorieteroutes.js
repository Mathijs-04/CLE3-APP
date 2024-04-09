document.addEventListener('DOMContentLoaded', init);

let favoriteRoutesData = [];
let main;

function init() {
    main = document.querySelector('main');
    if (main) {
        setChosenColorFromLocalStorage();
        getFromLocalStorage();
        createDivs();
    } else {
        console.error('Main element not found');
    }
}

function getFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('favoritedata'));
    favoriteRoutesData = data || [];
}

function createDivs() {
    main.innerHTML = '';
    favoriteRoutesData.forEach(routeData => {
        const div = document.createElement('div');
        div.classList.add(`route-${chosenColor}`);
        main.appendChild(div);
        fillDivs(div, routeData);
    });
}

function fillDivs(div, data) {
    const deleteButton = document.createElement('p');
    deleteButton.classList.add('delete', 'blue-text');
    deleteButton.innerHTML = '<img src="./img/Xbutton.png" alt="X">';
    deleteButton.addEventListener('click', function(event) {
        event.stopPropagation(); // stop the click event from propagating to the parent div
        removeFromLocalStorage(event, div);
    });
    div.appendChild(deleteButton);

    const fromTo = document.createElement('p');
    fromTo.innerHTML = `${data.van} > ${data.naar}`;
    fromTo.classList.add('blue-text');
    div.appendChild(fromTo);

    fromTo.addEventListener('click', function () {
        let existingData = JSON.parse(localStorage.getItem('reisdata')) || [];
        existingData.push(data);
        localStorage.setItem('reisdata', JSON.stringify(existingData));
        window.location.href = 'tijdsplanner.html';
    });
}

function removeFromLocalStorage(event, div) {
    const index = Array.from(main.children).indexOf(div);
    favoriteRoutesData.splice(index, 1);
    localStorage.setItem('reisdata', JSON.stringify(favoriteRoutesData));
    createDivs();
}