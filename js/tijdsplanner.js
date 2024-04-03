document.addEventListener('DOMContentLoaded', init);

function init() {
    const submitButton = document.getElementById('submit-button');

    if(submitButton) {
        submitButton.addEventListener('click', function() {
            window.location.href = 'routeoverzicht.html';
        });
    } else {
        console.error('Submit button not found');
    }
}