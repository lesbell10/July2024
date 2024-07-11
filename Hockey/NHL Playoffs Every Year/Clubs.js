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
    sidepic.style.width = "400px"
    sidepic.style.height = "400px"
    sidepic.style.top = "43%"
    sidepic.style.left = "40.5%"

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
        FL.textContent = "Landeskog";
        FC.textContent = "MacKinnon";
        FR.textContent = "Rantanen";
        DL.textContent = "Makar";
        DR.textContent = "D Toews";
        G.textContent = "Kuemper";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "Palat";
        twoFC.textContent = "Stamkos";
        twoFR.textContent = "Kucherov";
        twoDL.textContent = "Hedman";
        twoDR.textContent = "Sergachev";
        twoG.textContent = "Vasilevskiy";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/colorado.gif"
        flag2.src = "/hockey_img/logos/tampa bay.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup22.png";
        manager1.textContent += "Jared Bednar"
        manager2.textContent += "Jon Cooper"
        team1.innerHTML = "COLORADO<br>AVALANCHE"
        team2.innerHTML = "TAMPA BAY<br>LIGHTNING"
        result.innerHTML = "COLORADO WINS SERIES"
        OT.textContent = "4 - 2"
    }

    if (selectedYear == "3") {
        FL.textContent = "Point";
        FC.textContent = "Stamkos";
        FR.textContent = "Kucherov";
        DL.textContent = "Hedman";
        DR.textContent = "Cernak";
        G.textContent = "Vasilevskiy";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "Toffoli";
        twoFC.textContent = "Suzuki";
        twoFR.textContent = "Caufield";
        twoDL.textContent = "Petry";
        twoDR.textContent = "Edmundson";
        twoG.textContent = "Price";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/tampa bay.gif"
        flag2.src = "/hockey_img/logos/montreal.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup21.png";
        manager1.textContent += "Jon Cooper"
        manager2.textContent += "Dominique Ducharme"
        team1.innerHTML = "TAMPA BAY<br>LIGHTNING"
        team2.innerHTML = "MONTREAL<br>CANADIENS"
        result.innerHTML = "TAMPA BAY WINS SERIES"
        OT.textContent = "4 - 1"
    }

    if (selectedYear == "4") {
        FL.textContent = "Palat";
        FC.textContent = "Point";
        FR.textContent = "Kucherov";
        DL.textContent = "Hedman";
        DR.textContent = "Shattenkirk";
        G.textContent = "Vasilevskiy";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "Benn";
        twoFC.textContent = "Pavelski";
        twoFR.textContent = "Radulov";
        twoDL.textContent = "Heiskanen";
        twoDR.textContent = "Klingberg";
        twoG.textContent = "Khudobin";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/tampa bay.gif"
        flag2.src = "/hockey_img/logos/dallas.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup20.png";
        manager1.textContent += "Jon Cooper"
        manager2.textContent += "Rick Bowness"
        team1.innerHTML = "TAMPA BAY<br>LIGHTNING"
        team2.innerHTML = "DALLAS<br>STARS"
        result.innerHTML = "TAMPA BAY WINS SERIES"
        OT.textContent = "4 - 2"
    }

    if (selectedYear == "5") {
        FL.textContent = "Marchand";
        FC.textContent = "Bergeron";
        FR.textContent = "Pastrnak";
        DL.textContent = "Krug";
        DR.textContent = "McAvoy";
        G.textContent = "Rask";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "Schwartz";
        twoFC.textContent = "O'Reilly";
        twoFR.textContent = "Tarasenko";
        twoDL.textContent = "Pietrangelo";
        twoDR.textContent = "Parayko";
        twoG.textContent = "Binnington";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/boston.gif"
        flag2.src = "/hockey_img/logos/st. louis.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup19.png";
        manager1.textContent += "Bruce Cassidy"
        manager2.textContent += "Craig Berube"
        team1.innerHTML = "BOSTON<br>BRUINS"
        team2.innerHTML = "ST LOUIS<br>BLUES"
        result.innerHTML = "ST LOUIS WINS SERIES"
        OT.textContent = "3 - 4"
    }

    if (selectedYear == "6") {
        FL.textContent = "Marchessault";
        FC.textContent = "W Karlsson";
        FR.textContent = "R Smith";
        DL.textContent = "S Theodore";
        DR.textContent = "Schmidt";
        G.textContent = "Fleury";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "Ovechkin";
        twoFC.textContent = "Backstrom";
        twoFR.textContent = "Kuznetsov";
        twoDL.textContent = "Carlson";
        twoDR.textContent = "Niskanen";
        twoG.textContent = "Holtby";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/vegas.gif"
        flag2.src = "/hockey_img/logos/washington.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup18.png";
        manager1.textContent += "Gerard Gallant"
        manager2.textContent += "Barry Trotz"
        team1.innerHTML = "VEGAS<br>GOLDEN<br>KNIGHTS"
        team2.innerHTML = "WASHINGTON<br>CAPITALS"
        result.innerHTML = "WASHINGTON WINS SERIES"
        OT.textContent = "1 - 4"
    }

    if (selectedYear == "7") {
        FL.textContent = "Malkin";
        FC.textContent = "Crosby";
        FR.textContent = "Kessel";
        DL.textContent = "Schultz";
        DR.textContent = "I Cole";
        G.textContent = "Fleury";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "F Forsberg";
        twoFC.textContent = "Johansen";
        twoFR.textContent = "Arvidsson";
        twoDL.textContent = "Josi";
        twoDR.textContent = "R Ellis";
        twoG.textContent = "Rinne";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/pittsburgh.gif"
        flag2.src = "/hockey_img/logos/nashville.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup17.png";
        manager1.textContent += "Mike Sullivan"
        manager2.textContent += "Peter Laviolette"
        team1.innerHTML = "PITTSBURGH<br>PENGUINS"
        team2.innerHTML = "NASHVILLE<br>PREDATORS"
        result.innerHTML = "PITTSBURGH WINS SERIES"
        OT.textContent = "4 - 2"
    }

    if (selectedYear == "8") {
        FL.textContent = "Malkin";
        FC.textContent = "Crosby";
        FR.textContent = "Kessel";
        DL.textContent = "Letang";
        DR.textContent = "Dumoulin";
        G.textContent = "M Murray";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "Pavelski";
        twoFC.textContent = "Couture";
        twoFR.textContent = "Thornton";
        twoDL.textContent = "Burns";
        twoDR.textContent = "Vlasic";
        twoG.textContent = "M Jones";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/pittsburgh.gif"
        flag2.src = "/hockey_img/logos/san jose.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup16.png";
        manager1.textContent += "Mike Sullivan"
        manager2.textContent += "Peter DeBoer"
        team1.innerHTML = "PITTSBURGH<br>PENGUINS"
        team2.innerHTML = "SAN JOSE<br>SHARKS"
        result.innerHTML = "PITTSBURGH WINS SERIES"
        OT.textContent = "4 - 2"
    }

    if (selectedYear == "9") {
        FL.textContent = "Stamkos";
        FC.textContent = "T Johnson";
        FR.textContent = "Kucherov";
        DL.textContent = "Hedman";
        DR.textContent = "Stralman";
        G.textContent = "Bishop";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "Hossa";
        twoFC.textContent = "J Toews";
        twoFR.textContent = "P Kane";
        twoDL.textContent = "Keith";
        twoDR.textContent = "Seabrook";
        twoG.textContent = "Crawford";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/tampa bay.gif"
        flag2.src = "/hockey_img/logos/chicago.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup15.png";
        manager1.textContent += "Jon Cooper"
        manager2.textContent += "Joel Quenneville"
        team1.innerHTML = "TAMPA BAY<br>LIGHTNING"
        team2.innerHTML = "CHICAGO<br>BLACKHAWKS"
        result.innerHTML = "CHICAGO WINS SERIES"
        OT.textContent = "2 - 4"
    }

    if (selectedYear == "10") {
        FL.textContent = "J Carter";
        FC.textContent = "Kopitar";
        FR.textContent = "J Williams";
        DL.textContent = "Doughty";
        DR.textContent = "Muzzin";
        G.textContent = "Quick";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "Kreider";
        twoFC.textContent = "Stepan";
        twoFR.textContent = "St Louis";
        twoDL.textContent = "McDonagh";
        twoDR.textContent = "Girardi";
        twoG.textContent = "Lundqvist";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/los angeles.gif"
        flag2.src = "/hockey_img/logos/ny rangers.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup14.png";
        manager1.textContent += "Darryl Sutter"
        manager2.textContent += "Alain Vigneault"
        team1.innerHTML = "LOS ANGELES<br>KINGS"
        team2.innerHTML = "NEW YORK<br>RANGERS"
        result.innerHTML = "LOS ANGELES WINS SERIES"
        OT.textContent = "4 - 1"
    }

    if (selectedYear == "11") {
        FL.textContent = "Bickell";
        FC.textContent = "Hossa";
        FR.textContent = "P Kane";
        DL.textContent = "Keith";
        DR.textContent = "Oduya";
        G.textContent = "Crawford";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "Lucic";
        twoFC.textContent = "Krejci";
        twoFR.textContent = "N Horton";
        twoDL.textContent = "Chara";
        twoDR.textContent = "Boychuk";
        twoG.textContent = "Rask";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/chicago.gif"
        flag2.src = "/hockey_img/logos/boston.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup13.png";
        manager1.textContent += "Joel Quenneville"
        manager2.textContent += "Peter Laviolette"
        team1.innerHTML = "CHICAGO<br>BLACKHAWKS"
        team2.innerHTML = "BOSTON<br>BRUINS"
        result.innerHTML = "CHICAGO WINS SERIES"
        OT.textContent = "4 - 2"
    }

    if (selectedYear == "12") {
        FL.textContent = "Kovalchuk";
        FC.textContent = "Zajac";
        FR.textContent = "Parise";
        DL.textContent = "Salvador";
        DR.textContent = "Zidlicky";
        G.textContent = "Brodeur";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "M Richards";
        twoFC.textContent = "Kopitar";
        twoFR.textContent = "D Brown";
        twoDL.textContent = "Doughty";
        twoDR.textContent = "M Greene";
        twoG.textContent = "Quick";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/new jersey.gif"
        flag2.src = "/hockey_img/logos/los angeles.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup12.gif";
        manager1.textContent += "Peter DeBoer"
        manager2.textContent += "Darryl Sutter"
        team1.innerHTML = "NEW JERSEY<br>DEVILS"
        team2.innerHTML = "LOS ANGELES<br>KINGS"
        result.innerHTML = "LOS ANGELES WINS SERIES"
        OT.textContent = "2 - 4"
    }

    if (selectedYear == "13") {
        FL.textContent = "D Sedin";
        FC.textContent = "H Sedin";
        FR.textContent = "Kesler";
        DL.textContent = "Ehrhoff";
        DR.textContent = "Edler";
        G.textContent = "Luongo";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "Marchand";
        twoFC.textContent = "Bergeron";
        twoFR.textContent = "Krejci";
        twoDL.textContent = "Seidenberg";
        twoDR.textContent = "T Kaberle";
        twoG.textContent = "T Thomas";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/vancouver.gif"
        flag2.src = "/hockey_img/logos/boston.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup11.png";
        manager1.textContent += "Alain Vigneault"
        manager2.textContent += "Claude Julien"
        team1.innerHTML = "VANCOUVER<br>CANUCKS"
        team2.innerHTML = "BOSTON<br>BRUINS"
        result.innerHTML = "BOSTON WINS SERIES"
        OT.textContent = "3 - 4"
    }

    if (selectedYear == "14") {
        FL.textContent = "Sharp";
        FC.textContent = "J Toews";
        FR.textContent = "P Kane";
        DL.textContent = "Keith";
        DR.textContent = "Byfuglien";
        G.textContent = "Niemi";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "Leino";
        twoFC.textContent = "Briere";
        twoFR.textContent = "M Richards";
        twoDL.textContent = "Pronger";
        twoDR.textContent = "Carle";
        twoG.textContent = "Leighton";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/chicago.gif"
        flag2.src = "/hockey_img/logos/philadelphia.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup10.png";
        manager1.textContent += "Joel Quenneville"
        manager2.textContent += "Peter Laviolette"
        team1.innerHTML = "CHICAGO<br>BLACKHAWKS"
        team2.innerHTML = "PHILADELPHIA<br>FLYERS"
        result.innerHTML = "CHICAGO WINS SERIES"
        OT.textContent = "4 - 2"
    }

    if (selectedYear == "15") {
        FL.textContent = "Filppula";
        FC.textContent = "Zetterberg";
        FR.textContent = "Franzen";
        DL.textContent = "Lidstrom";
        DR.textContent = "Rafalski";
        G.textContent = "Osgood";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "Malkin";
        twoFC.textContent = "Crosby";
        twoFR.textContent = "Guerin";
        twoDL.textContent = "Gonchar";
        twoDR.textContent = "Letang";
        twoG.textContent = "Fleury";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/detroit.gif"
        flag2.src = "/hockey_img/logos/pittsburgh.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup09.png";
        manager1.textContent += "Mike Babcock"
        manager2.textContent += "Dan Bylsma"
        team1.innerHTML = "DETROIT<br>RED WINGS"
        team2.innerHTML = "PITTSBURGH<br>PENGUINS"
        result.innerHTML = "PITTSBURGH WINS SERIES"
        OT.textContent = "3 - 4"
    }

    if (selectedYear == "16") {
        FL.textContent = "Datsyuk";
        FC.textContent = "Zetterberg";
        FR.textContent = "Franzen";
        DL.textContent = "Kronwall";
        DR.textContent = "Rafalski";
        G.textContent = "Osgood";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "Malkin";
        twoFC.textContent = "Crosby";
        twoFR.textContent = "Hossa";
        twoDL.textContent = "Gonchar";
        twoDR.textContent = "R Whitney";
        twoG.textContent = "Fleury";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/detroit.gif"
        flag2.src = "/hockey_img/logos/pittsburgh.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup08.png";
        manager1.textContent += "Mike Babcock"
        manager2.textContent += "Michel Therrien"
        team1.innerHTML = "DETROIT<br>RED WINGS"
        team2.innerHTML = "PITTSBURGH<br>PENGUINS"
        result.innerHTML = "DETROIT WINS SERIES"
        OT.textContent = "4 - 2"
    }

    if (selectedYear == "17") {
        FL.textContent = "Selanne";
        FC.textContent = "Getzlaf";
        FR.textContent = "Perry";
        DL.textContent = "Pronger";
        DR.textContent = "S Niedermayer";
        G.textContent = "Giguere";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "Heatley";
        twoFC.textContent = "Spezza";
        twoFR.textContent = "Alfredsson";
        twoDL.textContent = "Redden";
        twoDR.textContent = "Corvo";
        twoG.textContent = "Emery";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/anaheim.gif"
        flag2.src = "/hockey_img/logos/ottawa.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup07.png";
        manager1.textContent += "Randy Carlyle"
        manager2.textContent += "Bryan Murray"
        team1.innerHTML = "ANAHEIM<br>DUCKS"
        team2.innerHTML = "OTTAWA<br>SENATORS"
        result.innerHTML = "ANAHEIM WINS SERIES"
        OT.textContent = "4 - 1"
    }

    if (selectedYear == "18") {
        FL.textContent = "Hemsky";
        FC.textContent = "Horcoff";
        FR.textContent = "Pisani";
        DL.textContent = "Pronger";
        DR.textContent = "Spacek";
        G.textContent = "R Miller";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "C Stillman";
        twoFC.textContent = "E Staal";
        twoFR.textContent = "J Williams";
        twoDL.textContent = "T Kaberle";
        twoDR.textContent = "Hedican";
        twoG.textContent = "C Ward";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/edmonton.gif"
        flag2.src = "/hockey_img/logos/carolina.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup06.png";
        manager1.textContent += "Craig MacTavish"
        manager2.textContent += "Peter Laviolette"
        team1.innerHTML = "EDMONTON<br>OILERS"
        team2.innerHTML = "CAROLINA<br>HURRICANES"
        result.innerHTML = "CAROLINA WINS SERIES"
        OT.textContent = "3 - 4"
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
        sidepic.style.width = "800px"
        sidepic.style.height = "800px"
        sidepic.style.top = "200px"
        sidepic.style.left = "650px"
    }

    if (selectedYear == "20") {
        FL.textContent = "Gelinas";
        FC.textContent = "Conroy";
        FR.textContent = "Iginla";
        DL.textContent = "Leopold";
        DR.textContent = "Regehr";
        G.textContent = "KIprusoff";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "Modin";
        twoFC.textContent = "M Richards";
        twoFR.textContent = "St Louis";
        twoDL.textContent = "Boyle";
        twoDR.textContent = "Sydor";
        twoG.textContent = "Khabibulin";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/calgary.gif"
        flag2.src = "/hockey_img/logos/tampa bay.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup04.png";
        manager1.textContent += "Darryl Sutter"
        manager2.textContent += "John Tortorella"
        team1.innerHTML = "CALGARY<br>FLAMES"
        team2.innerHTML = "TAMPA BAY<br>LIGHTNING"
        result.innerHTML = "TAMPA BAY WINS SERIES"
        OT.textContent = "3 - 4"
    }

    if (selectedYear == "21") {
        FL.textContent = "Kariya";
        FC.textContent = "Oates";
        FR.textContent = "Sykora";
        DL.textContent = "Ozolinsh";
        DR.textContent = "Salei";
        G.textContent = "Giguere";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "Friesen";
        twoFC.textContent = "Madden";
        twoFR.textContent = "Langenbrunner";
        twoDL.textContent = "S Niedermayer";
        twoDR.textContent = "Rafalski";
        twoG.textContent = "Brodeur";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/anaheim.gif"
        flag2.src = "/hockey_img/logos/new jersey.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup03.png";
        manager1.textContent += "Mike Babcock"
        manager2.textContent += "Pat Burns"
        team1.innerHTML = "ANAHEIM<br>MIGHTY DUCKS"
        team2.innerHTML = "NEW JERSEY<br>DEVILS"
        result.innerHTML = "NEW JERSEY WINS SERIES"
        OT.textContent = "3 - 4"
    }

    if (selectedYear == "22") {
        FL.textContent = "Battaglia";
        FC.textContent = "R Francis";
        FR.textContent = "O'Neill";
        DL.textContent = "S Hill";
        DR.textContent = "Hedican";
        G.textContent = "Irbe";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "Shanahan";
        twoFC.textContent = "Yzerman";
        twoFR.textContent = "Fedorov";
        twoDL.textContent = "Lidstrom";
        twoDR.textContent = "Chelios";
        twoG.textContent = "Hasek";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/carolina.gif"
        flag2.src = "/hockey_img/logos/detroit.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup02.png";
        manager1.textContent += "Paul Maurice"
        manager2.textContent += "Scotty Bowman"
        team1.innerHTML = "CAROLINA<br>HURRICANES"
        team2.innerHTML = "DETROIT<br>RED WINGS"
        result.innerHTML = "DETROIT WINS SERIES"
        OT.textContent = "1 - 4"
    }

    if (selectedYear == "23") {
        FL.textContent = "Mogilny";
        FC.textContent = "Elias";
        FR.textContent = "Sykora";
        DL.textContent = "Rafalski";
        DR.textContent = "Stevens";
        G.textContent = "Brodeur";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "Hejduk";
        twoFC.textContent = "Sakic";
        twoFR.textContent = "Tanguay";
        twoDL.textContent = "Blake";
        twoDR.textContent = "Bourque";
        twoG.textContent = "P Roy";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/new jersey.gif"
        flag2.src = "/hockey_img/logos/colorado.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup01.png";
        manager1.textContent += "Larry Robinson"
        manager2.textContent += "Bob Hartley"
        team1.innerHTML = "NEW JERSEY<br>DEVILS"
        team2.innerHTML = "COLORADO<br>AVALANCHE"
        result.innerHTML = "COLORADO WINS SERIES"
        OT.textContent = "3 - 4"
    }

    if (selectedYear == "24") {
        FL.textContent = "Nieuwendyk";
        FC.textContent = "Modano";
        FR.textContent = "B Hull";
        DL.textContent = "Zubov";
        DR.textContent = "Matvichuk";
        G.textContent = "Belfour";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "Arnott";
        twoFC.textContent = "Elias";
        twoFR.textContent = "Sykora";
        twoDL.textContent = "Stevens";
        twoDR.textContent = "Rafalski";
        twoG.textContent = "Brodeur";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/dallas.gif"
        flag2.src = "/hockey_img/logos/new jersey.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup00.png";
        manager1.textContent += "Ken Hitchcock"
        manager2.textContent += "Larry Robinson"
        team1.innerHTML = "DALLAS<br>STARS"
        team2.innerHTML = "NEW JERSEY<br>DEVILS"
        result.innerHTML = "NEW JERSEY WINS SERIES"
        OT.textContent = "2 - 4"
    }

    if (selectedYear == "25") {
        FL.textContent = "D Ward";
        FC.textContent = "Peca";
        FR.textContent = "C Brown";
        DL.textContent = "Zhitnik";
        DR.textContent = "Woolley";
        G.textContent = "Hasek";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "Nieuwendyk";
        twoFC.textContent = "Modano";
        twoFR.textContent = "Langenbrunner";
        twoDL.textContent = "Zubov";
        twoDR.textContent = "Sydor";
        twoG.textContent = "Belfour";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/buffalo.gif"
        flag2.src = "/hockey_img/logos/dallas.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup99.png";
        manager1.textContent += "Lindy Ruff"
        manager2.textContent += "Ken Hitchcock"
        team1.innerHTML = "BUFFALO<br>SABRES"
        team2.innerHTML = "DALLAS<br>STARS"
        result.innerHTML = "DALLAS WINS SERIES"
        OT.textContent = "2 - 4"
    }

    if (selectedYear == "26") {
        FL.textContent = "Juneau";
        FC.textContent = "Oates";
        FR.textContent = "Nikolishin";
        DL.textContent = "Gonchar";
        DR.textContent = "C Johansson";
        G.textContent = "Kolzig";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        twoFL.textContent = "T Holmstrom";
        twoFC.textContent = "Yzerman";
        twoFR.textContent = "Fedorov";
        twoDL.textContent = "Lidstrom";
        twoDR.textContent = "L Murphy";
        twoG.textContent = "Osgood";

        twoFL2.src = "/hockey_img/players/" + twoFL.textContent + ".jpg";
        twoFC2.src = "/hockey_img/players/" + twoFC.textContent + ".jpg";
        twoFR2.src = "/hockey_img/players/" + twoFR.textContent + ".jpg";
        twoDL2.src = "/hockey_img/players/" + twoDL.textContent + ".jpg";
        twoDR2.src = "/hockey_img/players/" + twoDR.textContent + ".jpg";
        twoG2.src = "/hockey_img/players/" + twoG.textContent + ".jpg";

        flag1.src = "/hockey_img/logos/washington.gif"
        flag2.src = "/hockey_img/logos/detroit.gif"
        sidepic.src = "/hockey_img/logos/stanley cup/cup98.png";
        manager1.textContent += "Ron Wilson"
        manager2.textContent += "Scotty Bowman"
        team1.innerHTML = "WASHINGTON<br>CAPITALS"
        team2.innerHTML = "DETROIT<br>RED WINGS"
        result.innerHTML = "DETROIT WINS SERIES"
        OT.textContent = "0 - 4"
    }
}