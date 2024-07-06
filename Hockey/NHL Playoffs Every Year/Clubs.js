const FL = document.querySelector(".one .FL");
const FL2 = document.querySelector(".one .FL2");
const FC = document.querySelector(".one .FC");
const FC2 = document.querySelector(".one .FC2");
const FR = document.querySelector(".one .FR");
const FR2 = document.querySelector(".one .FR2");
const DL = document.querySelector(".one .DL");
const DL2 = document.querySelector(".one .DL2");
const DR = document.querySelector(".one .DR");
const DR2 = document.querySelector(".one .DR2");
const G = document.querySelector(".one .G");
const G2 = document.querySelector(".one .G2");

const twoFL = document.querySelector(".two .FL");
const twoFL2 = document.querySelector(".two .FL2");
const twoFC = document.querySelector(".two .FC");
const twoFC2 = document.querySelector(".two .FC2");
const twoFR = document.querySelector(".two .FR");
const twoFR2 = document.querySelector(".two .FR2");
const twoDL = document.querySelector(".two .DL");
const twoDL2 = document.querySelector(".two .DL2");
const twoDR = document.querySelector(".two .DR");
const twoDR2 = document.querySelector(".two .DR2");
const twoG = document.querySelector(".two .G");
const twoG2 = document.querySelector(".two .G2");

const yearSelector = document.querySelector(".yearSelector");
const sidepic = document.querySelector(".sidepic");
const flag1 = document.querySelector(".flag1")
const flag2 = document.querySelector(".flag2")
const manager1 = document.querySelector(".manager1")
const manager2 = document.querySelector(".manager2")
const OT = document.querySelector(".OT");
const result = document.querySelector(".result");
const team1 = document.querySelector(".team1")
const team2 = document.querySelector(".team2")

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
    sidepic.style.marginTop = "0"

    if (selectedYear == "0") {
        FL.textContent = "M Tkachuk";
        FC.textContent = "Barkov";
        FR.textContent = "Verhaeghe";
        DL.textContent = "Forsling";
        DR.textContent = "Montour";
        G.textContent = "Bobrovsky";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "Hyman";
        twoFC.textContent = "McDavid";
        twoFR.textContent = "Draisaitl";
        twoDL.textContent = "E Bouchard";
        twoDR.textContent = "Ekholm";
        twoG.textContent = "S Skinner";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/florida.gif"
        flag2.src = "/hockey_img/logos/edmonton.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup24.png";
        manager1.textContent += "Paul Maurice"
        manager2.textContent += "Kris Knoblauch"
        team1.innerHTML = "FLORIDA<br>PANTHERS"
        team2.innerHTML = "EDMONTON<br>OILERS"
        result.innerHTML = "FLORIDA WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "1") {
        FL.textContent = "Stone";
        FC.textContent = "Eichel";
        FR.textContent = "Marchessault";
        DL.textContent = "S Theodore";
        DR.textContent = "Pietrangelo";
        G.textContent = "A Hill";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "M Tkachuk";
        twoFC.textContent = "Verhaeghe";
        twoFR.textContent = "Barkov";
        twoDL.textContent = "Montour";
        twoDR.textContent = "Forsling";
        twoG.textContent = "Bobrovsky";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/vegas.gif"
        flag2.src = "/hockey_img/logos/florida.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup23.png";
        manager1.textContent += "Bruce Cassidy"
        manager2.textContent += "Paul Maurice"
        team1.innerHTML = "VEGAS<br>GOLDEN<br>KNIGHTS"
        team2.innerHTML = "FLORIDA<br>PANTHERS"
        result.innerHTML = "VEGAS WINS SERIES"
        OT.textContent = "4 - 1"
    }

    if (selectedYear == "2") {
        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "";
        twoFC.textContent = "";
        twoFR.textContent = "";
        twoDL.textContent = "";
        twoDR.textContent = "";
        twoG.textContent = "";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/.gif"
        flag2.src = "/hockey_img/logos/.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup24.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "COLORADO<br>AVALANCHE"
        team2.innerHTML = "TAMPA BAY<br>LIGHTNING"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "3") {
        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "";
        twoFC.textContent = "";
        twoFR.textContent = "";
        twoDL.textContent = "";
        twoDR.textContent = "";
        twoG.textContent = "";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/.gif"
        flag2.src = "/hockey_img/logos/.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup24.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "TAMPA BAY<br>LIGHTNING"
        team2.innerHTML = "MONTRÉAL<br>CANADIENS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "4") {
        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "";
        twoFC.textContent = "";
        twoFR.textContent = "";
        twoDL.textContent = "";
        twoDR.textContent = "";
        twoG.textContent = "";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/.gif"
        flag2.src = "/hockey_img/logos/.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup24.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "TAMPA BAY<br>LIGHTNING"
        team2.innerHTML = "DALLAS<br>STARS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "5") {
        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "";
        twoFC.textContent = "";
        twoFR.textContent = "";
        twoDL.textContent = "";
        twoDR.textContent = "";
        twoG.textContent = "";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/.gif"
        flag2.src = "/hockey_img/logos/.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup24.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "BOSTON<br>BRUINS"
        team2.innerHTML = "ST LOUIS<br>BLUES"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "6") {
        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "";
        twoFC.textContent = "";
        twoFR.textContent = "";
        twoDL.textContent = "";
        twoDR.textContent = "";
        twoG.textContent = "";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/.gif"
        flag2.src = "/hockey_img/logos/.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup24.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "VEGAS<br>GOLDEN<br>KNIGHTS"
        team2.innerHTML = "WASHINGTON<br>CAPITALS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "7") {
        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "";
        twoFC.textContent = "";
        twoFR.textContent = "";
        twoDL.textContent = "";
        twoDR.textContent = "";
        twoG.textContent = "";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/.gif"
        flag2.src = "/hockey_img/logos/.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup24.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "PITTSBURGH<br>PENGUINS"
        team2.innerHTML = "NASHVILLE<br>PREDATORS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "8") {
        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "";
        twoFC.textContent = "";
        twoFR.textContent = "";
        twoDL.textContent = "";
        twoDR.textContent = "";
        twoG.textContent = "";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/.gif"
        flag2.src = "/hockey_img/logos/.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup24.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "PITTSBURGH<br>PENGUINS"
        team2.innerHTML = "SAN JOSE<br>SHARKS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "9") {
        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "";
        twoFC.textContent = "";
        twoFR.textContent = "";
        twoDL.textContent = "";
        twoDR.textContent = "";
        twoG.textContent = "";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/.gif"
        flag2.src = "/hockey_img/logos/.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup24.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "TAMPA BAY<br>LIGHTNING"
        team2.innerHTML = "CHICAGO<br>BLACKHAWKS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "10") {
        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "";
        twoFC.textContent = "";
        twoFR.textContent = "";
        twoDL.textContent = "";
        twoDR.textContent = "";
        twoG.textContent = "";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/.gif"
        flag2.src = "/hockey_img/logos/.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup24.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "LOS ANGELES<br>KINGS"
        team2.innerHTML = "NEW YORK<br>RANGERS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "11") {
        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "";
        twoFC.textContent = "";
        twoFR.textContent = "";
        twoDL.textContent = "";
        twoDR.textContent = "";
        twoG.textContent = "";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/.gif"
        flag2.src = "/hockey_img/logos/.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup24.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "CHICAGO<br>BLACKHAWKS"
        team2.innerHTML = "BOSTON<br>BRUINS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "12") {
        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "";
        twoFC.textContent = "";
        twoFR.textContent = "";
        twoDL.textContent = "";
        twoDR.textContent = "";
        twoG.textContent = "";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/.gif"
        flag2.src = "/hockey_img/logos/.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup24.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "NEW JERSEY<br>DEVILS"
        team2.innerHTML = "LOS ANGELES<br>KINGS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "13") {
        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "";
        twoFC.textContent = "";
        twoFR.textContent = "";
        twoDL.textContent = "";
        twoDR.textContent = "";
        twoG.textContent = "";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/.gif"
        flag2.src = "/hockey_img/logos/.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup24.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "VANCOUVER<br>CANUCKS"
        team2.innerHTML = "BOSTON<br>BRUINS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "14") {
        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "";
        twoFC.textContent = "";
        twoFR.textContent = "";
        twoDL.textContent = "";
        twoDR.textContent = "";
        twoG.textContent = "";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/.gif"
        flag2.src = "/hockey_img/logos/.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup24.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "CHICAGO<br>BLACKHAWKS"
        team2.innerHTML = "PHILADELPHIA<br>FLYERS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "15") {
        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "";
        twoFC.textContent = "";
        twoFR.textContent = "";
        twoDL.textContent = "";
        twoDR.textContent = "";
        twoG.textContent = "";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/.gif"
        flag2.src = "/hockey_img/logos/.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup24.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "DETROIT<br>RED WINGS"
        team2.innerHTML = "PITTSBURGH<br>PENGUINS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "16") {
        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "";
        twoFC.textContent = "";
        twoFR.textContent = "";
        twoDL.textContent = "";
        twoDR.textContent = "";
        twoG.textContent = "";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/.gif"
        flag2.src = "/hockey_img/logos/.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup24.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "DETROIT<br>RED WINGS"
        team2.innerHTML = "PITTSBURGH<br>PENGUINS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "17") {
        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "";
        twoFC.textContent = "";
        twoFR.textContent = "";
        twoDL.textContent = "";
        twoDR.textContent = "";
        twoG.textContent = "";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/.gif"
        flag2.src = "/hockey_img/logos/.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup24.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "ANAHEIM<br>DUCKS"
        team2.innerHTML = "OTTAWA<br>SENATORS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "18") {
        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "";
        twoFC.textContent = "";
        twoFR.textContent = "";
        twoDL.textContent = "";
        twoDR.textContent = "";
        twoG.textContent = "";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/.gif"
        flag2.src = "/hockey_img/logos/.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup24.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "EDMONTON<br>OILERS"
        team2.innerHTML = "CAROLINA<br>HURRICANES"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "19") {
        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "";
        FC2.src = "";
        FR2.src = "";
        DL2.src = "";
        DR2.src = "";
        G2.src = "";

        twoFL.textContent = "";
        twoFC.textContent = "";
        twoFR.textContent = "";
        twoDL.textContent = "";
        twoDR.textContent = "";
        twoG.textContent = "";

        twoFL2.src = "";
        twoFC2.src = "";
        twoFR2.src = "";
        twoDL2.src = "";
        twoDR2.src = "";
        twoG2.src = "";

        flag1.src = "/hockey_img/logos/.gif"
        flag2.src = "/hockey_img/logos/.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/lockout.jpg";
        manager1.textContent = ""
        manager2.textContent = ""
        team1.innerHTML = "<br>"
        team2.innerHTML = "<br>"
        result.innerHTML = ""
        OT.textContent = ""
        sidepic.style.marginTop = "-200px"

    }

    if (selectedYear == "20") {
        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "";
        twoFC.textContent = "";
        twoFR.textContent = "";
        twoDL.textContent = "";
        twoDR.textContent = "";
        twoG.textContent = "";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/.gif"
        flag2.src = "/hockey_img/logos/.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup24.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "CALGARY<br>FLAMES"
        team2.innerHTML = "TAMPA BAY<br>LIGHTNING"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "21") {
        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "";
        twoFC.textContent = "";
        twoFR.textContent = "";
        twoDL.textContent = "";
        twoDR.textContent = "";
        twoG.textContent = "";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/.gif"
        flag2.src = "/hockey_img/logos/.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup24.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "ANAHEIM<br>MIGHTY<>DUCKS"
        team2.innerHTML = "NEW JERSEY<br>DEVILS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "22") {
        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "";
        twoFC.textContent = "";
        twoFR.textContent = "";
        twoDL.textContent = "";
        twoDR.textContent = "";
        twoG.textContent = "";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/.gif"
        flag2.src = "/hockey_img/logos/.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup24.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "CAROLINA<br>HURRICANES"
        team2.innerHTML = "DETROIT<br>RED WINGS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "23") {
        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "";
        twoFC.textContent = "";
        twoFR.textContent = "";
        twoDL.textContent = "";
        twoDR.textContent = "";
        twoG.textContent = "";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/.gif"
        flag2.src = "/hockey_img/logos/.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup24.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "NEW JERSEY<br>DEVILS"
        team2.innerHTML = "COLORADO<br>AVALANCHE"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "24") {
        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "";
        twoFC.textContent = "";
        twoFR.textContent = "";
        twoDL.textContent = "";
        twoDR.textContent = "";
        twoG.textContent = "";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/.gif"
        flag2.src = "/hockey_img/logos/.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup24.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "DALLAS<br>STARS"
        team2.innerHTML = "NEW JERSEY<br>DEVILS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "25") {
        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "";
        twoFC.textContent = "";
        twoFR.textContent = "";
        twoDL.textContent = "";
        twoDR.textContent = "";
        twoG.textContent = "";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/.gif"
        flag2.src = "/hockey_img/logos/.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup24.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "BUFFALO<br>SABRES"
        team2.innerHTML = "DALLAS<br>STARS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }

    if (selectedYear == "26") {
        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "";
        twoFC.textContent = "";
        twoFR.textContent = "";
        twoDL.textContent = "";
        twoDR.textContent = "";
        twoG.textContent = "";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/.gif"
        flag2.src = "/hockey_img/logos/.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup24.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "WASHINGTON<br>CAPITALS"
        team2.innerHTML = "DETROIT<br>RED WINGS"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 3"
    }
}