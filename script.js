function toggleFuelRequestMenu () {
    const yes = document.getElementById("fuel-request-yes");
    const no = document.getElementById("fuel-request-no");
    let menu = document.getElementById("fuel-type-menu");

    if (yes.checked) {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}
function toggleOverWingQuestion () {
    const jetOverwing = document.getElementById("fuel-type-jet");
    let question = document.getElementById("overwing-fueling-question");

    if (jetOverwing.checked) {
        question.style.display = 'flex';
    } else {
        question.style.display = 'none';
    }
}