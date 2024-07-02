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
}