const yearSelector = document.querySelector(".yearSelector")
const SG = document.getElementById("SG");
const SG2 = document.getElementById("SG2");
const PG = document.getElementById("PG");
const PG2 = document.getElementById("PG2");
const SF = document.getElementById("SF");
const SF2 = document.getElementById("SF2");
const PF = document.getElementById("PF");
const PF2 = document.getElementById("PF2");
const C = document.getElementById("C");
const C2 = document.getElementById("C2");
const sidepic = document.querySelector(".sidepic");
const manager = document.querySelector(".manager")

yearSelector.addEventListener("change", () => {
    updatePlayerInfo();
});

let selectedYear = 0;

function updatePlayerInfo() {

    selectedYear = yearSelector.value;
    manager.textContent = "Head Coach: "

    if (selectedYear === "0") {

        PG.textContent = "T Young";
        SG.textContent = "D Murray";
        SF.textContent = "J Johnson";
        PF.textContent = "O Okongwu";
        C.textContent = "C Capela";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/logos/atlanta.gif";
        manager.textContent += "Quin Snyder"
    }

    if (selectedYear === "1") {

        PG.textContent = "J Holiday";
        SG.textContent = "D White";
        SF.textContent = "J Brown";
        PF.textContent = "J Tatum";
        C.textContent = "K Porzingis";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/logos/boston.gif";
        manager.textContent += "Joe Mazzulla"
    }

    if (selectedYear === "2") {

        PG.textContent = "D Schroder";
        SG.textContent = "Mik Bridges";
        SF.textContent = "C Thomas";
        PF.textContent = "C Johnson";
        C.textContent = "N Claxton";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/logos/brooklyn.gif";
        manager.textContent += "Jordi Fernandez"
    }

    if (selectedYear === "3") {

        PG.textContent = "La Ball";
        SG.textContent = "B Miller";
        SF.textContent = "Mil Bridges";
        PF.textContent = "M Williams";
        C.textContent = "N Richards";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/logos/charlotte.gif";
        manager.textContent += "Charles Lee"
    }

    if (selectedYear === "4") {

        PG.textContent = "Lo Ball";
        SG.textContent = "C White";
        SF.textContent = "Z LaVine";
        PF.textContent = "D DeRozan";
        C.textContent = "N Vucevic";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/logos/chicago.gif";
        manager.textContent += "Billy Donovan"
    }

    if (selectedYear === "5") {

        PG.textContent = "D Garland";
        SG.textContent = "D Mitchell";
        SF.textContent = "C LeVert";
        PF.textContent = "E Mobley";
        C.textContent = "J Allen";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/logos/cleveland.gif";
        manager.textContent += "Kenny Atkinson"
    }

    if (selectedYear === "6") {

        PG.textContent = "L Doncic";
        SG.textContent = "K Irving";
        SF.textContent = "D Exum";
        PF.textContent = "D Lively II";
        C.textContent = "D Gafford";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/logos/dallas.gif";
        manager.textContent += "Jason Kidd"
    }
    if (selectedYear === "7") {

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

        sidepic.src = "/basket_img/logos/denver.gif";
        manager.textContent += "Michael Malone"
    }

    if (selectedYear === "8") {

        PG.textContent = "C Cunningham";
        SG.textContent = "J Ivey";
        SF.textContent = "A Thompson";
        PF.textContent = "S Fontecchio";
        C.textContent = "J Duren";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/logos/detroit.gif";
        manager.textContent += "JB Bickerstaff"
    }

    if (selectedYear === "9") {

        PG.textContent = "C Paul";
        SG.textContent = "S Curry";
        SF.textContent = "K Thompson";
        PF.textContent = "J Kuminga";
        C.textContent = "D Green";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/logos/golden state.gif";
        manager.textContent += "Steve Kerr"
    }

    if (selectedYear === "10") {

        PG.textContent = "F VanVleet";
        SG.textContent = "J Green";
        SF.textContent = "T Eason";
        PF.textContent = "Ja Smith Jr";
        C.textContent = "A Sengun";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/logos/houston.gif";
        manager.textContent += "Ime Udoka"
    }

    if (selectedYear === "11") {

        PG.textContent = "TJ McConnell";
        SG.textContent = "T Haliburton";
        SF.textContent = "B Mathurin";
        PF.textContent = "P Siakam";
        C.textContent = "M Turner";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/logos/indiana.gif";
        manager.textContent += "Rick Carlisle"
    }

    if (selectedYear === "12") {

        PG.textContent = "J Harden";
        SG.textContent = "P George";
        SF.textContent = "N Powell";
        PF.textContent = "K Leonard";
        C.textContent = "I Zubac";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/logos/la clippers.gif";
        manager.textContent += "Tyronn Lue"
    }

    if (selectedYear === "13") {

        PG.textContent = "D Russell";
        SG.textContent = "A Reaves";
        SF.textContent = "L James";
        PF.textContent = "R Hachimura";
        C.textContent = "A Davis";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/logos/la lakers.gif";
        manager.textContent += "JJ Redick"
    }

    if (selectedYear === "14") {

        PG.textContent = "J Morant";
        SG.textContent = "M Smart";
        SF.textContent = "D Bane";
        PF.textContent = "J Jackson Jr";
        C.textContent = "GG Jackson II";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/logos/memphis.gif";
        manager.textContent += "Taylor Jenkins"
    }

    if (selectedYear === "15") {

        PG.textContent = "T Herro";
        SG.textContent = "T Rozier III";
        SF.textContent = "J Butler";
        PF.textContent = "J Jaquez Jr";
        C.textContent = "B Adebayo";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/logos/miami.gif";
        manager.textContent += "Erik Spoelstra"
    }

    if (selectedYear === "16") {

        PG.textContent = "D Lillard";
        SG.textContent = "K Middleton";
        SF.textContent = "G Antetokounmpo";
        PF.textContent = "B Portis";
        C.textContent = "B Lopez";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/logos/milwaukee.gif";
        manager.textContent += "Doc Rivers"
    }

    if (selectedYear === "17") {

        PG.textContent = "M Conley";
        SG.textContent = "A Edwards";
        SF.textContent = "J McDaniels";
        PF.textContent = "KA Towns";
        C.textContent = "R Gobert";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/logos/minnesota.gif";
        manager.textContent += "Chris Finch"
    }

    if (selectedYear === "18") {

        PG.textContent = "CJ McCollum";
        SG.textContent = "H Jones";
        SF.textContent = "B Ingram";
        PF.textContent = "Z Williamson";
        C.textContent = "J Valanciunas";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/logos/new orleans.gif";
        manager.textContent += "Willie Green"
    }

    if (selectedYear === "19") {

        PG.textContent = "J Brunson";
        SG.textContent = "OG Anunoby";
        SF.textContent = "J Hart";
        PF.textContent = "J Randle";
        C.textContent = "M Robinson";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/logos/new york.gif";
        manager.textContent += "Tom Thibodeau"
    }

    if (selectedYear === "20") {

        PG.textContent = "S Gilgeous-Alexander";
        SG.textContent = "J Giddey";
        SF.textContent = "Jal Williams";
        PF.textContent = "L Dort";
        C.textContent = "C Holmgren";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/logos/oklahoma city.gif";
        manager.textContent += "Mark Daigneault"
    }

    if (selectedYear === "21") {

        PG.textContent = "Co Anthony";
        SG.textContent = "J Suggs";
        SF.textContent = "F Wagner";
        PF.textContent = "P Banchero";
        C.textContent = "W Carter Jr";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/logos/orlando.gif";
        manager.textContent += "Jamahl Mosley"
    }

    if (selectedYear === "22") {

        PG.textContent = "T Maxey";
        SG.textContent = "K Oubre Jr";
        SF.textContent = "B Hield";
        PF.textContent = "T Harris";
        C.textContent = "J Embiid";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/logos/philadelphia.gif";
        manager.textContent += "Nick Nurse"
    }
    if (selectedYear === "23") {

        PG.textContent = "D Booker";
        SG.textContent = "B Beal";
        SF.textContent = "G Allen";
        PF.textContent = "K Durant";
        C.textContent = "J Nurkic";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/logos/phoenix.gif";
        manager.textContent += "Mike Budenholzer"
    }

    if (selectedYear === "24") {

        PG.textContent = "M Brogdon";
        SG.textContent = "A Simons";
        SF.textContent = "S Sharpe";
        PF.textContent = "J Grant";
        C.textContent = "D Ayton";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/logos/portland.gif";
        manager.textContent += "Chauncey Billups"
    }

    if (selectedYear === "25") {

        PG.textContent = "D Fox";
        SG.textContent = "M Monk";
        SF.textContent = "H Barnes";
        PF.textContent = "K Murray";
        C.textContent = "D Sabonis";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/logos/sacramento.gif";
        manager.textContent += "Mike Brown"
    }

    if (selectedYear === "26") {

        PG.textContent = "Tre Jones";
        SG.textContent = "D Vassell";
        SF.textContent = "K Johnson";
        PF.textContent = "Z Collins";
        C.textContent = "V Wembanyama";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/logos/san antonio.gif";
        manager.textContent += "Gregg Popovich"
    }

    if (selectedYear === "27") {

        PG.textContent = "I Quickley";
        SG.textContent = "RJ Barrett";
        SF.textContent = "S Barnes";
        PF.textContent = "K Olynyk";
        C.textContent = "J Poeltl";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/logos/toronto.gif";
        manager.textContent += "Darko Rajakovic"
    }

    if (selectedYear === "28") {

        PG.textContent = "Ty Jones";
        SG.textContent = "J Poole";
        SF.textContent = "C Kispert";
        PF.textContent = "K Kuzma";
        C.textContent = "D Avdija";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/logos/washington.gif";
        manager.textContent += "Brian Keefe"
    }

    if (selectedYear === "29") {

        PG.textContent = "C Sexton";
        SG.textContent = "K George";
        SF.textContent = "L Markkanen";
        PF.textContent = "J Collins";
        C.textContent = "W Kessler";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/logos/utah.gif";
        manager.textContent += "Will Hardy"
    }
}