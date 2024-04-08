document.addEventListener('DOMContentLoaded', init);

function init() {
    chosenColor = localStorage.getItem("chosenColorApp") || "blue";

    const submitButton = document.getElementById('submit-button');

    if (submitButton) {
        submitButton.addEventListener('click', function (event) {
            event.preventDefault(); // prevent form submission in all cases

            timeGetter();

            const datum = document.getElementById('datum');
            const tijd = document.getElementById('tijd');

            if (datum.value !== "" && tijd.value !== "") {
                window.location.href = 'routeoverzicht.html'; // manually redirect when inputs are not empty
            } else {
                const main = document.querySelector('main');
                const existingErrorP = document.querySelector('main p.error-message');
                if (!existingErrorP) {
                    const errorP = document.createElement('p');
                    errorP.className = 'error-message';
                    errorP.innerHTML = 'Vul de gegevens in!';
                    main.appendChild(errorP);
                }
            }
        });
    } else {
        console.error('Submit button not found');
    }

    let selectToggle = document.getElementsByClassName("departure-arrival-toggle-blue")

    Array.from(selectToggle).forEach(function (element) {
        console.log(chosenColor);
        element.classList.remove("departure-arrival-toggle-blue");
        element.classList.add(`departure-arrival-toggle-${chosenColor}`);
    });
}