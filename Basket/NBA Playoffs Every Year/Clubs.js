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

        flag1.src = "/basket_img/logos/golden state.gif"
        flag2.src = "/basket_img/logos/boston.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/cup22.png";
        manager1.textContent += "Steve Kerr"
        manager2.textContent += "Ime Udoka"
        team1.innerHTML = "GOLDEN STATE<br>WARRIORS"
        team2.innerHTML = "BOSTON<br>CELTICS"
        result.innerHTML = "GOLDEN STATE WINS SERIES"
        OT.textContent = "4 - 2"
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

        flag1.src = "/basket_img/logos/milwaukee.gif"
        flag2.src = "/basket_img/logos/phoenix.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/cup21.png";
        manager1.textContent += "Mike Budenholzer"
        manager2.textContent += "Monty Williams"
        team1.innerHTML = "MILWAUKEE<br>BUCKS"
        team2.innerHTML = "PHOENIX<br>SUNS"
        result.innerHTML = "MILWAUKEE WINS SERIES"
        OT.textContent = "4 - 2"
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

        flag1.src = "/basket_img/logos/la lakers.gif"
        flag2.src = "/basket_img/logos/miami.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/cup20.png";
        manager1.textContent += "Frank Vogel"
        manager2.textContent += "Erik Spoelstra"
        team1.innerHTML = "LOS ANGELES<br>LAKERS"
        team2.innerHTML = "MIAMI<br>HEAT"
        result.innerHTML = "LA LAKERS WINS SERIES"
        OT.textContent = "4 - 2"
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

        flag1.src = "/basket_img/logos/toronto.gif"
        flag2.src = "/basket_img/logos/golden state.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/cup19.png";
        manager1.textContent += "Nick Nurse"
        manager2.textContent += "Steve Kerr"
        team1.innerHTML = "TORONTO<br>RAPTORS"
        team2.innerHTML = "GOLDEN STATE<br>WARRIORS"
        result.innerHTML = "TORONTO WINS SERIES"
        OT.textContent = "4 - 2"
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

        flag1.src = "/basket_img/logos/golden state.gif"
        flag2.src = "/basket_img/logos/cleveland.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/cup18.png";
        manager1.textContent += "Steve Kerr"
        manager2.textContent += "Tyronn Lue"
        team1.innerHTML = "GOLDEN STATE<br>WARRIORS"
        team2.innerHTML = "CLEVELAND<br>CAVALIERS"
        result.innerHTML = "GOLDEN STATE WINS SERIES"
        OT.textContent = "4 - 0"
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

        flag1.src = "/basket_img/logos/golden state.gif"
        flag2.src = "/basket_img/logos/cleveland.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/cup17.png";
        manager1.textContent += "Steve Kerr"
        manager2.textContent += "Tyronn Lue"
        team1.innerHTML = "GOLDEN STATE<br>WARRIORS"
        team2.innerHTML = "CLEVELAND<br>CAVALIERS"
        result.innerHTML = "GOLDEN STATE WINS SERIES"
        OT.textContent = "4 - 1"

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

        flag1.src = "/basket_img/logos/cleveland.gif"
        flag2.src = "/basket_img/logos/golden state.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/cup16.png";
        manager1.textContent += "Tyronn Lue"
        manager2.textContent += "Steve Kerr"
        team1.innerHTML = "CLEVELAND<br>CAVALIERS"
        team2.innerHTML = "GOLDEN STATE<br>WARRIORS"
        result.innerHTML = "CLEVELAND WINS SERIES"
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

        flag1.src = "/basket_img/logos/golden state.gif"
        flag2.src = "/basket_img/logos/cleveland.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/cup15.png";
        manager1.textContent += "Steve Kerr"
        manager2.textContent += "David Blatt"
        team1.innerHTML = "GOLDEN STATE<br>WARRIORS"
        team2.innerHTML = "CLEVELAND<br>CAVALIERS"
        result.innerHTML = "GOLDEN STATE WINS SERIES"
        OT.textContent = "4 - 2"
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

        flag1.src = "/basket_img/logos/san antonio.gif"
        flag2.src = "/basket_img/logos/miami.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/cup14.png";
        manager1.textContent += "Gregg Popovich"
        manager2.textContent += "Erik Spoelstra"
        team1.innerHTML = "SAN ANTONIO<br>SPURS"
        team2.innerHTML = "MIAMI<br>HEAT"
        result.innerHTML = "SAN ANTONIO WINS SERIES"
        OT.textContent = "4 - 1"
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

        flag1.src = "/basket_img/logos/miami.gif"
        flag2.src = "/basket_img/logos/san antonio.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/cup13.jpg";
        manager1.textContent += "Erik Spoelstra"
        manager2.textContent += "Gregg Popovich"
        team1.innerHTML = "MIAMI<br>HEAT"
        team2.innerHTML = "SAN ANTONIO<br>SPURS"
        result.innerHTML = "MIAMI WINS SERIES"
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

        flag1.src = "/basket_img/logos/miami.gif"
        flag2.src = "/basket_img/logos/oklahoma city.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/cup12.jpg";
        manager1.textContent += "Erik Spoesltra"
        manager2.textContent += "Scott Brooks"
        team1.innerHTML = "MIAMI<br>HEAT"
        team2.innerHTML = "OKLAHOMA CITY<br>THUNDER"
        result.innerHTML = "MIAMI WINS SERIES"
        OT.textContent = "4 - 1"
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

        flag1.src = "/basket_img/logos/dallas.gif"
        flag2.src = "/basket_img/logos/miami.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/cup11.jpg";
        manager1.textContent += "Rick Carlisle"
        manager2.textContent += "Erik Spoesltra"
        team1.innerHTML = "DALLAS<br>MAVERICKS"
        team2.innerHTML = "MIAMI<br>HEAT"
        result.innerHTML = "DALLAS WINS SERIES"
        OT.textContent = "4 - 2"
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

        flag1.src = "/basket_img/logos/la lakres.gif"
        flag2.src = "/basket_img/logos/boston.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/cup10.png";
        manager1.textContent += "Phil Jackson"
        manager2.textContent += "Doc Rivers"
        team1.innerHTML = "LOS ANGELES<br>LAKERS"
        team2.innerHTML = "BOSTON<br>CELTICS"
        result.innerHTML = "LA LAKERS WINS SERIES"
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

        flag1.src = "/basket_img/logos/la lakers.gif"
        flag2.src = "/basket_img/logos/orlando.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/cup09.png";
        manager1.textContent += "Phil Jackson"
        manager2.textContent += "Stan Van Gundy"
        team1.innerHTML = "LOS ANGELES<br>LAKERS"
        team2.innerHTML = "ORLANDO<br>MAGIC"
        result.innerHTML = "LOA ANGELES WINS SERIES"
        OT.textContent = "4 - 1"
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

        flag1.src = "/basket_img/logos/boston.gif"
        flag2.src = "/basket_img/logos/la lakers.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/cup08.png";
        manager1.textContent += "Doc Rivers"
        manager2.textContent += "Phil Jackson"
        team1.innerHTML = "BOSTON<br>CELTICS"
        team2.innerHTML = "LOS ANGELES<br>LAKERS"
        result.innerHTML = "BOSTON WINS SERIES"
        OT.textContent = "4 - 2"
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

        flag1.src = "/basket_img/logos/san antonio.gif"
        flag2.src = "/basket_img/logos/cleveland.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/cup07.png";
        manager1.textContent += "Gregg Popovich"
        manager2.textContent += "Mike Brown"
        team1.innerHTML = "SAN ANTONIO<br>SPURS"
        team2.innerHTML = "CLEVELAND<br>CAVALIERS"
        result.innerHTML = "SAN ANTONIO WINS SERIES"
        OT.textContent = "4 - 0"
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

        flag1.src = "/basket_img/logos/miami.gif"
        flag2.src = "/basket_img/logos/dallas.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/cup06.png";
        manager1.textContent += "Pat Riley"
        manager2.textContent += "Avery Johnson"
        team1.innerHTML = "MIAMI<br>HEAT"
        team2.innerHTML = "DALLAS<br>MAVERICKS"
        result.innerHTML = "DALLAS WINS SERIES"
        OT.textContent = "4 - 2"
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

        flag1.src = "/basket_img/logos/san antonio.gif"
        flag2.src = "/basket_img/logos/detroit.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/cup05.png";
        manager1.textContent += "Gregg Popovich"
        manager2.textContent += "Larry Brown"
        team1.innerHTML = "SAN ANTONIO<br>SPURS"
        team2.innerHTML = "DETROIT<br>PISTONS"
        result.innerHTML = "SAN ANTNIO WINS SERIES"
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

        flag1.src = "/basket_img/logos/detroit.gif"
        flag2.src = "/basket_img/logos/la lakers.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/cup04.png";
        manager1.textContent += "Larry Brown"
        manager2.textContent += "Phil Jackson"
        team1.innerHTML = "DETROIT<br>PISTONS"
        team2.innerHTML = "LOS ANGELES<br>LAKERS"
        result.innerHTML = "DETROIT WINS SERIES"
        OT.textContent = "4 - 1"
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

        flag1.src = "/basket_img/logos/san antonio.gif"
        flag2.src = "/basket_img/logos/new jersey.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/cup03.png";
        manager1.textContent += "Gregg Popovich"
        manager2.textContent += "Byron Scott"
        team1.innerHTML = "SAN ANTONIO<br>SPURS"
        team2.innerHTML = "NEW JERSEY<br>NETS"
        result.innerHTML = "SAN ANTONIO WINS SERIES"
        OT.textContent = "4 - 2"
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

        flag1.src = "/basket_img/logos/la lakers.gif"
        flag2.src = "/basket_img/logos/new jersey.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/cup02.png";
        manager1.textContent += "Phil Jackson"
        manager2.textContent += "Byron Scott"
        team1.innerHTML = "LOS ANGELES<br>LAKERS"
        team2.innerHTML = "NEW JERSEY<br>NETS"
        result.innerHTML = "LA LAKERS WINS SERIES"
        OT.textContent = "4 - 0"
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

        flag1.src = "/basket_img/logos/la lakers.gif"
        flag2.src = "/basket_img/logos/philadelphia.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/cup01.png";
        manager1.textContent += "Phil Jackson"
        manager2.textContent += "Larry Brown"
        team1.innerHTML = "LOS ANGELES<br>LAKERS"
        team2.innerHTML = "PHILADELPHIA<br>76ERS"
        result.innerHTML = "LA LAKAERS WINS SERIES"
        OT.textContent = "4 - 1"
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

        flag1.src = "/basket_img/logos/la lakers.gif"
        flag2.src = "/basket_img/logos/indiana.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/cup00.png";
        manager1.textContent += "Phil Jackson"
        manager2.textContent += "Larry Bird"
        team1.innerHTML = "LOS ANGELES<br>LAKERS"
        team2.innerHTML = "INDIANA<br>PACERS"
        result.innerHTML = "LA LAKERS WINS SERIES"
        OT.textContent = "4 - 2"
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

        flag1.src = "/basket_img/logos/san antonio.gif"
        flag2.src = "/basket_img/logos/new york.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/cup99.png";
        manager1.textContent += "Gregg Popovich"
        manager2.textContent += "Jeff Van Gundy"
        team1.innerHTML = "SAN ANTONIO<br>SPURS"
        team2.innerHTML = "NEW YORK<br>KNICKS"
        result.innerHTML = "SAN ANTONIO WINS SERIES"
        OT.textContent = "4 - 1"
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

        flag1.src = "/basket_img/logos/chicago.gif"
        flag2.src = "/basket_img/logos/utah.gif"
        sidepic.src = "/basket_img/logos/NBA Trophy/cup98.jpg";
        manager1.textContent += "Phil Jackson"
        manager2.textContent += "Jerry Sloan"
        team1.innerHTML = "CHICAGO<br>BULLS"
        team2.innerHTML = "UTAH<br>JAZZ"
        result.innerHTML = "WINS SERIES"
        OT.textContent = "4 - 2"
    }
}