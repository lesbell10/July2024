import {
    four_two_three_one,
    four_two_three_one2,
    four_three_three,
    four_three_three2,
    four_three_three_false_nine,
    four_three_three_false_nine2,
    four_four_two,
    four_four_two2,
    four_two_two_two,
    four_two_two_two2,
    four_one_two_one_two,
    four_one_two_one_two2,
    four_three_one_two,
    four_three_one_two2,
    four_three_two_one,
    four_three_two_one2,
    four_one_three_two,
    four_one_three_two2,
    four_one_three_two_att,
    four_one_three_two_att2,
    four_four_one_one,
    four_four_one_one2,
    four_five_one,
    four_five_one2,
    three_four_two_one,
    three_four_two_one2,
    three_four_three,
    three_four_three2,
    three_four_one_two,
    three_four_one_two2,
    three_five_two,
    three_five_two2,
    five_two_two_one,
    five_two_two_one2,
    five_two_three,
    five_two_three2,
    five_two_one_two,
    five_two_one_two2,
    five_three_two,
    five_three_two2,
    five_four_one,
    five_four_one2,

} from '/Formations 2.js'

const LCM = document.querySelector('.one .LCM');
const LCM2 = document.querySelector('.one .LCM2');
const CM = document.querySelector('.one .CM');
const CM2 = document.querySelector('.one .CM2');
const RCM = document.querySelector('.one .RCM');
const RCM2 = document.querySelector('.one .RCM2');
const DM = document.querySelector('.one .DM');
const DM2 = document.querySelector('.one .DM2');

const twoLCM = document.querySelector('.two .LCM');
const twoLCM2 = document.querySelector('.two .LCM2');
const twoCM = document.querySelector('.two .CM');
const twoCM2 = document.querySelector('.two .CM2');
const twoRCM = document.querySelector('.two .RCM');
const twoRCM2 = document.querySelector('.two .RCM2');
const twoDM = document.querySelector('.two .DM');
const twoDM2 = document.querySelector('.two .DM2');

const yearSelector = document.querySelector(".yearSelector");
const sidepic = document.querySelector(".sidepic");
const flag1 = document.querySelector(".flag1")
const flag2 = document.querySelector(".flag2")
const manager1 = document.querySelector(".manager1")
const manager2 = document.querySelector(".manager2")
const substitutes1 = document.querySelector(".substitutes1")
const substitutes2 = document.querySelector(".substitutes2")
const score = document.querySelector(".score");
const OT = document.querySelector(".OT")
const team1 = document.querySelector(".team1")
const team2 = document.querySelector(".team2")
const goals1 = document.querySelector(".goals1")
const goals2 = document.querySelector(".goals2")
const date = document.querySelector(".date")
const label = document.querySelector(".label h3")

yearSelector.addEventListener("change", () => {
    updatePlayerInfo();

    LCM.style.top = "55.5%"
    LCM2.style.top = "33.5%"
    RCM.style.top = "55.5%"
    RCM2.style.top = "33.5%"
    CM.style.top = "58.5%"
    CM2.style.top = "36.5%"
    DM.style.top = "71%"
    DM2.style.top = "49%"

    twoLCM.style.top = "55.5%"
    twoLCM2.style.top = "33.5%"
    twoRCM.style.top = "55.5%"
    twoRCM2.style.top = "33.5%"
    twoCM.style.top = "58.5%"
    twoCM2.style.top = "36.5%"
    twoDM.style.top = "71%"
    twoDM2.style.top = "49%"
});

let selectedYear = 0;

function updatePlayerInfo() {

    selectedYear = yearSelector.value;
    manager1.textContent = "Head Coach: "
    manager2.textContent = "Head Coach: "
    substitutes1.innerHTML = "Substitutes: "
    substitutes2.innerHTML = "Substitutes: "
    OT.style.textAlign = "center"
    flag1.style.borderRadius = "100%"
    flag2.style.borderRadius = "100%"
    flag1.style.left = "23%"
    flag2.style.right = "23%"
    label.textContent = "GROUP STAGE"

    if (selectedYear == "0") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/";
        manager1.textContent += ""
        manager2.textContent += ""
        substitutes1.innerHTML += "lolo,olkooooooooooooo<br>ollol<br>oloolool"
        substitutes2.innerHTML += "<br>"
        substitutes1.innerHTML += "<br>"
        substitutes2.innerHTML += "<br>"
        team1.innerHTML = ""
        team2.innerHTML = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
        label.textContent = "GROUP STAGE"
    }

    if (selectedYear == "1") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/";
        manager1.textContent += ""
        manager2.textContent += ""
        substitutes1.innerHTML += "<br>"
        substitutes2.innerHTML += "<br>"
        team1.innerHTML = ""
        team2.innerHTML = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = ""
        label.textContent = "GROUP STAGE"
    }

    if (selectedYear == "2") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/";
        manager1.textContent += ""
        manager2.textContent += ""
        substitutes1.innerHTML += "<br>"
        substitutes2.innerHTML += "<br>"
        team1.innerHTML = ""
        team2.innerHTML = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = ""
        label.textContent = "ROUND OF 16"
    }

    if (selectedYear == "3") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/";
        manager1.textContent += ""
        manager2.textContent += ""
        substitutes1.innerHTML += "<br>"
        substitutes2.innerHTML += "<br>"
        team1.innerHTML = ""
        team2.innerHTML = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = ""
        label.textContent = "GROUP STAGE"
    }

    if (selectedYear == "4") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/";
        manager1.textContent += ""
        manager2.textContent += ""
        substitutes1.innerHTML += "<br>"
        substitutes2.innerHTML += "<br>"
        team1.innerHTML = ""
        team2.innerHTML = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = ""
        label.textContent = "GROUP STAGE"
    }

    if (selectedYear == "5") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/";
        manager1.textContent += ""
        manager2.textContent += ""
        substitutes1.innerHTML += "<br>"
        substitutes2.innerHTML += "<br>"
        team1.innerHTML = ""
        team2.innerHTML = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = ""
        label.textContent = "GROUP STAGE"
    }

    if (selectedYear == "6") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/";
        manager1.textContent += ""
        manager2.textContent += ""
        substitutes1.innerHTML += "<br>"
        substitutes2.innerHTML += "<br>"
        team1.innerHTML = ""
        team2.innerHTML = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = ""
        label.textContent = "GROUP STAGE"
    }

    if (selectedYear == "7") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/";
        manager1.textContent += ""
        manager2.textContent += ""
        substitutes1.innerHTML += "<br>"
        substitutes2.innerHTML += "<br>"
        team1.innerHTML = ""
        team2.innerHTML = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = ""
        label.textContent = "GROUP STAGE"
    }
    substitutes.innerHTML = substitutes.innerHTML.replace(/,/g, ' •');
}