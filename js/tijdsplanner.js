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

    let selectToggle = document.getElementsByClassName("departure-arrival-toggle-blue")
    console.log(selectToggle)

    Array.from(selectToggle).forEach(function(element) {
        element.classList.remove("departure-arrival-toggle-blue");
        element.classList.add(`departure-arrival-toggle-${chosenColor}`);
    });
}