document.addEventListener('DOMContentLoaded', init);

function init() {
    chosenColor = localStorage.getItem("chosenColorApp");

    const submitButton = document.getElementById('submit-button');

    if (submitButton) {
        submitButton.addEventListener('click', function (event) {
            event.preventDefault();
            timeGetter();
            window.location.href = 'routeoverzicht.html';
        });
    } else {
        console.error('Submit button not found');
    }

    let selectToggle = document.getElementsByClassName("departure-arrival-toggle-blue")

    Array.from(selectToggle).forEach(function(element) {
    console.log(chosenColor);
        element.classList.remove("departure-arrival-toggle-blue");
        element.classList.add(`departure-arrival-toggle-${chosenColor}`);
    });
}