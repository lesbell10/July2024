const SG = document.querySelector(".one .SG");
const SG2 = document.querySelector(".one .SG2");
const PG = document.querySelector(".one .PG");
const PG2 = document.querySelector(".one .PG2");
const SF = document.querySelector(".one .SF");
const SF2 = document.querySelector(".one .SF2");
const PF = document.querySelector(".one .PF");
const PF2 = document.querySelector(".one .PF2");
const C = document.querySelector(".one .C");
const C2 = document.querySelector(".one .C2");

const twoSG = document.querySelector(".two .SG");
const twoSG2 = document.querySelector(".two .SG2");
const twoPG = document.querySelector(".two .PG");
const twoPG2 = document.querySelector(".two .PG2");
const twoSF = document.querySelector(".two .SF");
const twoSF2 = document.querySelector(".two .SF2");
const twoPF = document.querySelector(".two .PF");
const twoPF2 = document.querySelector(".two .PF2");
const twoC = document.querySelector(".two .C");
const twoC2 = document.querySelector(".two .C2");

const yearSelector = document.querySelector(".yearSelector");
const sidepic = document.querySelector(".sidepic");
const flag1 = document.querySelector(".flag1")
const flag2 = document.querySelector(".flag2")
const manager1 = document.querySelector(".manager1")
const manager2 = document.querySelector(".manager2")
const result = document.querySelector(".result");
const OT = document.querySelector(".OT")
const team1 = document.querySelector(".team1")
const team2 = document.querySelector(".team2")
const goals1 = document.querySelector(".goals1")
const goals2 = document.querySelector(".goals2")
const date = document.querySelector(".date")

yearSelector.addEventListener("change", () => {
    updatePlayerInfo();
});

let selectedYear = 0;

function updatePlayerInfo() {

    selectedYear = yearSelector.value;
    manager1.textContent = "Head Coach: "
    manager2.textContent = "Head Coach: "
    OT.style.textAlign = "center"
    // flag1.style.left = "20%"
    // flag2.style.right = "20%"

    if (selectedYear == "0") {
        PG.textContent = "J Holiday";
        SG.textContent = "D White";
        SF.textContent = "J Brown";
        PF.textContent = "J Tatum";
        C.textContent = "A Horford";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        twoPG.textContent = "L Doncic";
        twoSG.textContent = "K Irving";
        twoSF.textContent = "D Jones Jr";
        twoPF.textContent = "PJ Washington";
        twoC.textContent = "D Gafford";

        twoPG2.src = "/basket_img/players/" + twoPG.textContent + ".jpg";
        twoSG2.src = "/basket_img/players/" + twoSG.textContent + ".jpg";
        twoSF2.src = "/basket_img/players/" + twoSF.textContent + ".jpg";
        twoPF2.src = "/basket_img/players/" + twoPF.textContent + ".jpg";
        twoC2.src = "/basket_img/players/" + twoC.textContent + ".jpg";

        flag1.src = "/basket_img/logos/boston.gif"
        flag2.src = "/basket_img/logos/dallas.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/cup24.png";
        manager1.textContent += "Joe Mazzulla"
        manager2.textContent += "Jason Kidd"
        team1.innerHTML = "BOSTON<br>CELTICS"
        team2.innerHTML = "DALLAS<br>MAVERICKS"
        result.innerHTML = "BOSTON WINS SERIES"
        OT.textContent = "4 - 1"
    }

    if (selectedYear == "1") {
        PG.textContent = "J Murray";
        SG.textContent = "K Caldwell-Pope";
        SF.textContent = "M Porter Jr";
        PF.textContent = "A Gordon";
        C.textContent = "N Jokic";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        twoPG.textContent = "G Vincent";
        twoSG.textContent = "M Strus";
        twoSF.textContent = "J Butler";
        twoPF.textContent = "K Love";
        twoC.textContent = "B Adebayo";

        twoPG2.src = "/basket_img/players/" + twoPG.textContent + ".jpg";
        twoSG2.src = "/basket_img/players/" + twoSG.textContent + ".jpg";
        twoSF2.src = "/basket_img/players/" + twoSF.textContent + ".jpg";
        twoPF2.src = "/basket_img/players/" + twoPF.textContent + ".jpg";
        twoC2.src = "/basket_img/players/" + twoC.textContent + ".jpg";

        flag1.src = "/basket_img/logos/denver.gif"
        flag2.src = "/basket_img/logos/miami.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/cup23.png";
        manager1.textContent += "Michael Malone"
        manager2.textContent += "Erik Spoelstra"
        team1.innerHTML = "DENVER<br>NUGGETS"
        team2.innerHTML = "MIAMI<br>HEAT"
        result.innerHTML = "DENVER WINS SERIES"
        OT.textContent = "4 - 1"
    }

    if (selectedYear == "2") {
        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        twoPG.textContent = "";
        twoSG.textContent = "";
        twoSF.textContent = "";
        twoPF.textContent = "";
        twoC.textContent = "";

        twoPG2.src = "/basket_img/players/" + twoPG.textContent + ".jpg";
        twoSG2.src = "/basket_img/players/" + twoSG.textContent + ".jpg";
        twoSF2.src = "/basket_img/players/" + twoSF.textContent + ".jpg";
        twoPF2.src = "/basket_img/players/" + twoPF.textContent + ".jpg";
        twoC2.src = "/basket_img/players/" + twoC.textContent + ".jpg";

        flag1.src = "/basket_img/logos/.gif"
        flag2.src = "/basket_img/logos/.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/.gif";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "GOLDEN STATE<br>WARRIORS"
        team2.innerHTML = "BOSTON<br>CELTICS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "3") {
        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        twoPG.textContent = "";
        twoSG.textContent = "";
        twoSF.textContent = "";
        twoPF.textContent = "";
        twoC.textContent = "";

        twoPG2.src = "/basket_img/players/" + twoPG.textContent + ".jpg";
        twoSG2.src = "/basket_img/players/" + twoSG.textContent + ".jpg";
        twoSF2.src = "/basket_img/players/" + twoSF.textContent + ".jpg";
        twoPF2.src = "/basket_img/players/" + twoPF.textContent + ".jpg";
        twoC2.src = "/basket_img/players/" + twoC.textContent + ".jpg";

        flag1.src = "/basket_img/logos/.gif"
        flag2.src = "/basket_img/logos/.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/.gif";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "MILWAUKEE<br>BUCKS"
        team2.innerHTML = "PHOENIX<br>SUNS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "4") {
        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        twoPG.textContent = "";
        twoSG.textContent = "";
        twoSF.textContent = "";
        twoPF.textContent = "";
        twoC.textContent = "";

        twoPG2.src = "/basket_img/players/" + twoPG.textContent + ".jpg";
        twoSG2.src = "/basket_img/players/" + twoSG.textContent + ".jpg";
        twoSF2.src = "/basket_img/players/" + twoSF.textContent + ".jpg";
        twoPF2.src = "/basket_img/players/" + twoPF.textContent + ".jpg";
        twoC2.src = "/basket_img/players/" + twoC.textContent + ".jpg";

        flag1.src = "/basket_img/logos/.gif"
        flag2.src = "/basket_img/logos/.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/.gif";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "LOS ANGELES<br>LAKERS"
        team2.innerHTML = "MIAMI<br>HEAT"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }


    if (selectedYear == "5") {
        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        twoPG.textContent = "";
        twoSG.textContent = "";
        twoSF.textContent = "";
        twoPF.textContent = "";
        twoC.textContent = "";

        twoPG2.src = "/basket_img/players/" + twoPG.textContent + ".jpg";
        twoSG2.src = "/basket_img/players/" + twoSG.textContent + ".jpg";
        twoSF2.src = "/basket_img/players/" + twoSF.textContent + ".jpg";
        twoPF2.src = "/basket_img/players/" + twoPF.textContent + ".jpg";
        twoC2.src = "/basket_img/players/" + twoC.textContent + ".jpg";

        flag1.src = "/basket_img/logos/.gif"
        flag2.src = "/basket_img/logos/.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/.gif";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "TORONTO<br>RAPTORS"
        team2.innerHTML = "GOLDEN STATE<br>WARRIORS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "6") {
        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        twoPG.textContent = "";
        twoSG.textContent = "";
        twoSF.textContent = "";
        twoPF.textContent = "";
        twoC.textContent = "";

        twoPG2.src = "/basket_img/players/" + twoPG.textContent + ".jpg";
        twoSG2.src = "/basket_img/players/" + twoSG.textContent + ".jpg";
        twoSF2.src = "/basket_img/players/" + twoSF.textContent + ".jpg";
        twoPF2.src = "/basket_img/players/" + twoPF.textContent + ".jpg";
        twoC2.src = "/basket_img/players/" + twoC.textContent + ".jpg";

        flag1.src = "/basket_img/logos/.gif"
        flag2.src = "/basket_img/logos/.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/.gif";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "GOLDEN STATE<br>WARRIORS"
        team2.innerHTML = "CLEVELAND<br>CAVALIERS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "7") {
        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        twoPG.textContent = "";
        twoSG.textContent = "";
        twoSF.textContent = "";
        twoPF.textContent = "";
        twoC.textContent = "";

        twoPG2.src = "/basket_img/players/" + twoPG.textContent + ".jpg";
        twoSG2.src = "/basket_img/players/" + twoSG.textContent + ".jpg";
        twoSF2.src = "/basket_img/players/" + twoSF.textContent + ".jpg";
        twoPF2.src = "/basket_img/players/" + twoPF.textContent + ".jpg";
        twoC2.src = "/basket_img/players/" + twoC.textContent + ".jpg";

        flag1.src = "/basket_img/logos/.gif"
        flag2.src = "/basket_img/logos/.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/.gif";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "GOLDEN STATE<br>WARRIORS"
        team2.innerHTML = "CLEVELAND<br>CAVALIERS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "8") {
        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        twoPG.textContent = "";
        twoSG.textContent = "";
        twoSF.textContent = "";
        twoPF.textContent = "";
        twoC.textContent = "";

        twoPG2.src = "/basket_img/players/" + twoPG.textContent + ".jpg";
        twoSG2.src = "/basket_img/players/" + twoSG.textContent + ".jpg";
        twoSF2.src = "/basket_img/players/" + twoSF.textContent + ".jpg";
        twoPF2.src = "/basket_img/players/" + twoPF.textContent + ".jpg";
        twoC2.src = "/basket_img/players/" + twoC.textContent + ".jpg";

        flag1.src = "/basket_img/logos/.gif"
        flag2.src = "/basket_img/logos/.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/.gif";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "CLEVELAND<br>CAVALIERS"
        team2.innerHTML = "GOLDEN STATE<br>WARRIORS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "9") {
        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        twoPG.textContent = "";
        twoSG.textContent = "";
        twoSF.textContent = "";
        twoPF.textContent = "";
        twoC.textContent = "";

        twoPG2.src = "/basket_img/players/" + twoPG.textContent + ".jpg";
        twoSG2.src = "/basket_img/players/" + twoSG.textContent + ".jpg";
        twoSF2.src = "/basket_img/players/" + twoSF.textContent + ".jpg";
        twoPF2.src = "/basket_img/players/" + twoPF.textContent + ".jpg";
        twoC2.src = "/basket_img/players/" + twoC.textContent + ".jpg";

        flag1.src = "/basket_img/logos/.gif"
        flag2.src = "/basket_img/logos/.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/.gif";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "GOLDEN STATE<br>WARRIORS"
        team2.innerHTML = "CLEVELAND<br>CAVALIERS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "10") {
        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        twoPG.textContent = "";
        twoSG.textContent = "";
        twoSF.textContent = "";
        twoPF.textContent = "";
        twoC.textContent = "";

        twoPG2.src = "/basket_img/players/" + twoPG.textContent + ".jpg";
        twoSG2.src = "/basket_img/players/" + twoSG.textContent + ".jpg";
        twoSF2.src = "/basket_img/players/" + twoSF.textContent + ".jpg";
        twoPF2.src = "/basket_img/players/" + twoPF.textContent + ".jpg";
        twoC2.src = "/basket_img/players/" + twoC.textContent + ".jpg";

        flag1.src = "/basket_img/logos/.gif"
        flag2.src = "/basket_img/logos/.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/.gif";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "SAN ANTONIO<br>SPURS"
        team2.innerHTML = "MIAMI<br>HEAT"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "11") {
        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        twoPG.textContent = "";
        twoSG.textContent = "";
        twoSF.textContent = "";
        twoPF.textContent = "";
        twoC.textContent = "";

        twoPG2.src = "/basket_img/players/" + twoPG.textContent + ".jpg";
        twoSG2.src = "/basket_img/players/" + twoSG.textContent + ".jpg";
        twoSF2.src = "/basket_img/players/" + twoSF.textContent + ".jpg";
        twoPF2.src = "/basket_img/players/" + twoPF.textContent + ".jpg";
        twoC2.src = "/basket_img/players/" + twoC.textContent + ".jpg";

        flag1.src = "/basket_img/logos/.gif"
        flag2.src = "/basket_img/logos/.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/.gif";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "MIAMI<br>HEAT"
        team2.innerHTML = "SAN ANTONIO<br>SPURS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "12") {
        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        twoPG.textContent = "";
        twoSG.textContent = "";
        twoSF.textContent = "";
        twoPF.textContent = "";
        twoC.textContent = "";

        twoPG2.src = "/basket_img/players/" + twoPG.textContent + ".jpg";
        twoSG2.src = "/basket_img/players/" + twoSG.textContent + ".jpg";
        twoSF2.src = "/basket_img/players/" + twoSF.textContent + ".jpg";
        twoPF2.src = "/basket_img/players/" + twoPF.textContent + ".jpg";
        twoC2.src = "/basket_img/players/" + twoC.textContent + ".jpg";

        flag1.src = "/basket_img/logos/.gif"
        flag2.src = "/basket_img/logos/.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/.gif";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "MIAMI<br>HEAT"
        team2.innerHTML = "OKLAHOMA CITY<br>THUNDER"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "13") {
        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        twoPG.textContent = "";
        twoSG.textContent = "";
        twoSF.textContent = "";
        twoPF.textContent = "";
        twoC.textContent = "";

        twoPG2.src = "/basket_img/players/" + twoPG.textContent + ".jpg";
        twoSG2.src = "/basket_img/players/" + twoSG.textContent + ".jpg";
        twoSF2.src = "/basket_img/players/" + twoSF.textContent + ".jpg";
        twoPF2.src = "/basket_img/players/" + twoPF.textContent + ".jpg";
        twoC2.src = "/basket_img/players/" + twoC.textContent + ".jpg";

        flag1.src = "/basket_img/logos/.gif"
        flag2.src = "/basket_img/logos/.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/.gif";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "DALLAS<br>MAVERICKS"
        team2.innerHTML = "MIAMI<br>HEAT"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "14") {
        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        twoPG.textContent = "";
        twoSG.textContent = "";
        twoSF.textContent = "";
        twoPF.textContent = "";
        twoC.textContent = "";

        twoPG2.src = "/basket_img/players/" + twoPG.textContent + ".jpg";
        twoSG2.src = "/basket_img/players/" + twoSG.textContent + ".jpg";
        twoSF2.src = "/basket_img/players/" + twoSF.textContent + ".jpg";
        twoPF2.src = "/basket_img/players/" + twoPF.textContent + ".jpg";
        twoC2.src = "/basket_img/players/" + twoC.textContent + ".jpg";

        flag1.src = "/basket_img/logos/.gif"
        flag2.src = "/basket_img/logos/.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/.gif";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "LOS ANGELES<br>LAKERS"
        team2.innerHTML = "BOSTON<br>CELTICS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "15") {
        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        twoPG.textContent = "";
        twoSG.textContent = "";
        twoSF.textContent = "";
        twoPF.textContent = "";
        twoC.textContent = "";

        twoPG2.src = "/basket_img/players/" + twoPG.textContent + ".jpg";
        twoSG2.src = "/basket_img/players/" + twoSG.textContent + ".jpg";
        twoSF2.src = "/basket_img/players/" + twoSF.textContent + ".jpg";
        twoPF2.src = "/basket_img/players/" + twoPF.textContent + ".jpg";
        twoC2.src = "/basket_img/players/" + twoC.textContent + ".jpg";

        flag1.src = "/basket_img/logos/.gif"
        flag2.src = "/basket_img/logos/.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/.gif";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "LOS ANGELES<br>LAKERS"
        team2.innerHTML = "ORLANDO<br>MAGIC"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "16") {
        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        twoPG.textContent = "";
        twoSG.textContent = "";
        twoSF.textContent = "";
        twoPF.textContent = "";
        twoC.textContent = "";

        twoPG2.src = "/basket_img/players/" + twoPG.textContent + ".jpg";
        twoSG2.src = "/basket_img/players/" + twoSG.textContent + ".jpg";
        twoSF2.src = "/basket_img/players/" + twoSF.textContent + ".jpg";
        twoPF2.src = "/basket_img/players/" + twoPF.textContent + ".jpg";
        twoC2.src = "/basket_img/players/" + twoC.textContent + ".jpg";

        flag1.src = "/basket_img/logos/.gif"
        flag2.src = "/basket_img/logos/.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/.gif";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "BOSTON<br>CELTICS"
        team2.innerHTML = "LOS ANGELES<br>LAKERS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "17") {
        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        twoPG.textContent = "";
        twoSG.textContent = "";
        twoSF.textContent = "";
        twoPF.textContent = "";
        twoC.textContent = "";

        twoPG2.src = "/basket_img/players/" + twoPG.textContent + ".jpg";
        twoSG2.src = "/basket_img/players/" + twoSG.textContent + ".jpg";
        twoSF2.src = "/basket_img/players/" + twoSF.textContent + ".jpg";
        twoPF2.src = "/basket_img/players/" + twoPF.textContent + ".jpg";
        twoC2.src = "/basket_img/players/" + twoC.textContent + ".jpg";

        flag1.src = "/basket_img/logos/.gif"
        flag2.src = "/basket_img/logos/.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/.gif";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "SAN ANTONIO<br>SPURS"
        team2.innerHTML = "CLEVELAND<br>CAVALIERS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "18") {
        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        twoPG.textContent = "";
        twoSG.textContent = "";
        twoSF.textContent = "";
        twoPF.textContent = "";
        twoC.textContent = "";

        twoPG2.src = "/basket_img/players/" + twoPG.textContent + ".jpg";
        twoSG2.src = "/basket_img/players/" + twoSG.textContent + ".jpg";
        twoSF2.src = "/basket_img/players/" + twoSF.textContent + ".jpg";
        twoPF2.src = "/basket_img/players/" + twoPF.textContent + ".jpg";
        twoC2.src = "/basket_img/players/" + twoC.textContent + ".jpg";

        flag1.src = "/basket_img/logos/.gif"
        flag2.src = "/basket_img/logos/.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/.gif";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "MIAMI<br>HEAT"
        team2.innerHTML = "DALLAS<br>MAVERICKS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "19") {
        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        twoPG.textContent = "";
        twoSG.textContent = "";
        twoSF.textContent = "";
        twoPF.textContent = "";
        twoC.textContent = "";

        twoPG2.src = "/basket_img/players/" + twoPG.textContent + ".jpg";
        twoSG2.src = "/basket_img/players/" + twoSG.textContent + ".jpg";
        twoSF2.src = "/basket_img/players/" + twoSF.textContent + ".jpg";
        twoPF2.src = "/basket_img/players/" + twoPF.textContent + ".jpg";
        twoC2.src = "/basket_img/players/" + twoC.textContent + ".jpg";

        flag1.src = "/basket_img/logos/.gif"
        flag2.src = "/basket_img/logos/.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/.gif";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "SAN ANTONIO<br>SPURS"
        team2.innerHTML = "DETROIT<br>PISTONS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "20") {
        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        twoPG.textContent = "";
        twoSG.textContent = "";
        twoSF.textContent = "";
        twoPF.textContent = "";
        twoC.textContent = "";

        twoPG2.src = "/basket_img/players/" + twoPG.textContent + ".jpg";
        twoSG2.src = "/basket_img/players/" + twoSG.textContent + ".jpg";
        twoSF2.src = "/basket_img/players/" + twoSF.textContent + ".jpg";
        twoPF2.src = "/basket_img/players/" + twoPF.textContent + ".jpg";
        twoC2.src = "/basket_img/players/" + twoC.textContent + ".jpg";

        flag1.src = "/basket_img/logos/.gif"
        flag2.src = "/basket_img/logos/.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/.gif";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "DETROIT<br>PISTONS"
        team2.innerHTML = "LOS ANGELES<br>LAKERS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "21") {
        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        twoPG.textContent = "";
        twoSG.textContent = "";
        twoSF.textContent = "";
        twoPF.textContent = "";
        twoC.textContent = "";

        twoPG2.src = "/basket_img/players/" + twoPG.textContent + ".jpg";
        twoSG2.src = "/basket_img/players/" + twoSG.textContent + ".jpg";
        twoSF2.src = "/basket_img/players/" + twoSF.textContent + ".jpg";
        twoPF2.src = "/basket_img/players/" + twoPF.textContent + ".jpg";
        twoC2.src = "/basket_img/players/" + twoC.textContent + ".jpg";

        flag1.src = "/basket_img/logos/.gif"
        flag2.src = "/basket_img/logos/.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/.gif";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "SAN ANTONIO<br>SPURS"
        team2.innerHTML = "NEW JERSEY<br>NETS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "22") {
        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        twoPG.textContent = "";
        twoSG.textContent = "";
        twoSF.textContent = "";
        twoPF.textContent = "";
        twoC.textContent = "";

        twoPG2.src = "/basket_img/players/" + twoPG.textContent + ".jpg";
        twoSG2.src = "/basket_img/players/" + twoSG.textContent + ".jpg";
        twoSF2.src = "/basket_img/players/" + twoSF.textContent + ".jpg";
        twoPF2.src = "/basket_img/players/" + twoPF.textContent + ".jpg";
        twoC2.src = "/basket_img/players/" + twoC.textContent + ".jpg";

        flag1.src = "/basket_img/logos/.gif"
        flag2.src = "/basket_img/logos/.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/.gif";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "LOS ANGELES<br>LAKERS"
        team2.innerHTML = "NEW JERSEY<br>NETS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "23") {
        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        twoPG.textContent = "";
        twoSG.textContent = "";
        twoSF.textContent = "";
        twoPF.textContent = "";
        twoC.textContent = "";

        twoPG2.src = "/basket_img/players/" + twoPG.textContent + ".jpg";
        twoSG2.src = "/basket_img/players/" + twoSG.textContent + ".jpg";
        twoSF2.src = "/basket_img/players/" + twoSF.textContent + ".jpg";
        twoPF2.src = "/basket_img/players/" + twoPF.textContent + ".jpg";
        twoC2.src = "/basket_img/players/" + twoC.textContent + ".jpg";

        flag1.src = "/basket_img/logos/.gif"
        flag2.src = "/basket_img/logos/.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/.gif";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "LOS ANGELES<br>LAKERS"
        team2.innerHTML = "PHILADELPHIA<br>76ERS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "24") {
        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        twoPG.textContent = "";
        twoSG.textContent = "";
        twoSF.textContent = "";
        twoPF.textContent = "";
        twoC.textContent = "";

        twoPG2.src = "/basket_img/players/" + twoPG.textContent + ".jpg";
        twoSG2.src = "/basket_img/players/" + twoSG.textContent + ".jpg";
        twoSF2.src = "/basket_img/players/" + twoSF.textContent + ".jpg";
        twoPF2.src = "/basket_img/players/" + twoPF.textContent + ".jpg";
        twoC2.src = "/basket_img/players/" + twoC.textContent + ".jpg";

        flag1.src = "/basket_img/logos/.gif"
        flag2.src = "/basket_img/logos/.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/.gif";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "LOS ANGELES<br>LAKERS"
        team2.innerHTML = "INDIANA<br>PACERS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "25") {
        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        twoPG.textContent = "";
        twoSG.textContent = "";
        twoSF.textContent = "";
        twoPF.textContent = "";
        twoC.textContent = "";

        twoPG2.src = "/basket_img/players/" + twoPG.textContent + ".jpg";
        twoSG2.src = "/basket_img/players/" + twoSG.textContent + ".jpg";
        twoSF2.src = "/basket_img/players/" + twoSF.textContent + ".jpg";
        twoPF2.src = "/basket_img/players/" + twoPF.textContent + ".jpg";
        twoC2.src = "/basket_img/players/" + twoC.textContent + ".jpg";

        flag1.src = "/basket_img/logos/.gif"
        flag2.src = "/basket_img/logos/.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/.gif";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "SAN ANTONIO<br>SPURS"
        team2.innerHTML = "NEW YORK<br>KNICKS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "26") {
        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        twoPG.textContent = "";
        twoSG.textContent = "";
        twoSF.textContent = "";
        twoPF.textContent = "";
        twoC.textContent = "";

        twoPG2.src = "/basket_img/players/" + twoPG.textContent + ".jpg";
        twoSG2.src = "/basket_img/players/" + twoSG.textContent + ".jpg";
        twoSF2.src = "/basket_img/players/" + twoSF.textContent + ".jpg";
        twoPF2.src = "/basket_img/players/" + twoPF.textContent + ".jpg";
        twoC2.src = "/basket_img/players/" + twoC.textContent + ".jpg";

        flag1.src = "/basket_img/logos/.gif"
        flag2.src = "/basket_img/logos/.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/.gif";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "CHICAGO<br>BULLS"
        team2.innerHTML = "UTAH<br>JAZZ"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }
}