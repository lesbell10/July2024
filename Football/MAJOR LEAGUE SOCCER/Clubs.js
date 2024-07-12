import {
    four_two_three_one,
    four_three_three,
    four_three_three_false_nine,
    four_four_two,
    four_two_two_two,
    four_one_two_one_two,
    four_three_one_two,
    four_three_two_one,
    four_one_three_two,
    four_four_one_one,
    four_five_one,
    three_four_two_one,
    three_four_three,
    three_four_one_two,
    three_five_two,
    five_two_two_one,
    five_two_three,
    five_two_one_two,
    five_three_two,
    five_four_one,
} from '/Formations.js'

const LCM = document.querySelector('.LCM');
const LCM2 = document.querySelector('.LCM2');
const CM = document.querySelector('.CM');
const CM2 = document.querySelector('.CM2');
const RCM = document.querySelector('.RCM');
const RCM2 = document.querySelector('.RCM2');
const DM = document.querySelector('.DM');
const DM2 = document.querySelector('.DM2');

const yearSelector = document.querySelector(".yearSelector");
const sidepic = document.querySelector(".sidepic");
const manager = document.querySelector(".manager")

yearSelector.addEventListener("change", () => {

    LCM.style.top = "56.5%"
    LCM2.style.top = "35.5%"
    RCM.style.top = "56.5%"
    RCM2.style.top = "35.5%"
    CM.style.top = "60%"
    CM2.style.top = "39%"
    DM.style.top = "71%"
    DM2.style.top = "49%"

    updatePlayerInfo();
});

let selectedYear = 0;

function updatePlayerInfo() {

    selectedYear = yearSelector.value;
    manager.textContent = "Head Coach: "

    if (selectedYear == "0") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "");
        sidepic.src = "/football_img/logos/";
        manager.textContent += "";
    }

    if (selectedYear == "1") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "");
        sidepic.src = "/football_img/logos/";
        manager.textContent += "";
    }

    if (selectedYear == "2") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "");
        sidepic.src = "/football_img/logos/";
        manager.textContent += "";
    }

    if (selectedYear == "3") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "");
        sidepic.src = "/football_img/logos/";
        manager.textContent += "";
    }

    if (selectedYear == "4") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "");
        sidepic.src = "/football_img/logos/";
        manager.textContent += "";
    }

    if (selectedYear == "5") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "");
        sidepic.src = "/football_img/logos/";
        manager.textContent += "";
    }

    if (selectedYear == "6") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "");
        sidepic.src = "/football_img/logos/";
        manager.textContent += "";
    }

    if (selectedYear == "7") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "");
        sidepic.src = "/football_img/logos/";
        manager.textContent += "";
    }

    if (selectedYear == "8") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "");
        sidepic.src = "/football_img/logos/";
        manager.textContent += "";
    }

    if (selectedYear == "9") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "");
        sidepic.src = "/football_img/logos/";
        manager.textContent += "";
    }

    if (selectedYear == "10") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "");
        sidepic.src = "/football_img/logos/";
        manager.textContent += "";
    }

    if (selectedYear == "11") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "");
        sidepic.src = "/football_img/logos/";
        manager.textContent += "";
    }

    if (selectedYear == "12") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "");
        sidepic.src = "/football_img/logos/";
        manager.textContent += "";
    }

    if (selectedYear == "13") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "");
        sidepic.src = "/football_img/logos/";
        manager.textContent += "";
    }

    if (selectedYear == "14") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "");
        sidepic.src = "/football_img/logos/";
        manager.textContent += "";
    }

    if (selectedYear == "15") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "");
        sidepic.src = "/football_img/logos/";
        manager.textContent += "";
    }
}