window.addEventListener('load', init);

function init() {
    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', sendBack);
    const submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', dataGetter);

}



function sendBack (){
    console.log('clicked on back button');
    window.history.back();
}

function dataGetter () {
    const info = document.getElementsByTagName('input');
    console.log(info);
}


//Input value in forms,
    //Store value in variable,
        //Variable in  array.

//Haal