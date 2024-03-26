const backButton = document.getElementById('back-button');
backButton.addEventListener('click', sendBack);
function sendBack (){
    console.log('clicked on back button');
    window.history.back();
}