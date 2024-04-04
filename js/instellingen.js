window.addEventListener("load", init)

function init() {
    let colorForm = document.getElementById("form");
    colorForm.addEventListener("input", colorSelector)
}

function colorSelector(e) {
    chosenColor = e.target.value;

    // Sla de geselecteerde kleur op in de local storage
    localStorage.setItem("chosenColorApp", chosenColor);
    kleurMaker()
}
