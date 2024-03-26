

const opgeslagenRoutes = document.getElementById('button1');
opgeslagenRoutes.addEventListener('click', sendRouteplanner);


const nieuweRoutes = document.getElementById('button2');
nieuweRoutes.addEventListener('click', sendFavorieteroutes);


function controlFunction() {
    console.log('clicked on button');
}
function sendRouteplanner () {
    console.log('Clicked on nieuwe route');
    window.location.replace('routeplanner.html');
}

function sendFavorieteroutes () {
    console.log('Clicked on FAVORITES');
    window.location.replace('favorieteroutes.html')
}



