const yearSelector = document.querySelector(".yearSelector")
const FL = document.getElementById("FL");
const FL2 = document.getElementById("FL2");
const FC = document.getElementById("FC");
const FC2 = document.getElementById("FC2");
const FR = document.getElementById("FR");
const FR2 = document.getElementById("FR2");
const DL = document.getElementById("DL");
const DL2 = document.getElementById("DL2");
const DR = document.getElementById("DR");
const DR2 = document.getElementById("DR2");
const G = document.getElementById("G");
const G2 = document.getElementById("G2");
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

        FL.textContent = "Zegras";
        FC.textContent = "McTavish";
        FR.textContent = "Terry";
        DL.textContent = "Fowler";
        DR.textContent = "Gudas";
        G.textContent = "Gibson";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/anaheim.gif";
        manager.textContent += "Greg Cronin"
    }

    if (selectedYear === "1") {

        FL.textContent = "Crouse";
        FC.textContent = "Schmaltz";
        FR.textContent = "C Keller";
        DL.textContent = "Durzi";
        DR.textContent = "Moser";
        G.textContent = "Vejmelka";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/arizona.gif";
        manager.textContent += "Andre Tourigny"
    }

    if (selectedYear === "2") {

        FL.textContent = "Marchand";
        FC.textContent = "Coyle";
        FR.textContent = "Pastrnak";
        DL.textContent = "McAvoy";
        DR.textContent = "H Lindholm";
        G.textContent = "Swayman";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/boston.gif";
        manager.textContent += "Jim Montgomery"
    }

    if (selectedYear === "3") {

        FL.textContent = "J Skinner";
        FC.textContent = "Cozens";
        FR.textContent = "T Thompson";
        DL.textContent = "Dahlin";
        DR.textContent = "Byram";
        G.textContent = "Luukkonen";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/buffalo.gif";
        manager.textContent += "Lindy Ruff"
    }

    if (selectedYear === "4") {

        FL.textContent = "Kuzmenko";
        FC.textContent = "Huberdeau";
        FR.textContent = "Coleman";
        DL.textContent = "Weegar";
        DR.textContent = "R Andersson";
        G.textContent = "Markstrom";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/calgary.gif";
        manager.textContent += "Ryan Huska"
    }

    if (selectedYear === "5") {

        FL.textContent = "Guentzel";
        FC.textContent = "S Aho";
        FR.textContent = "Svechnikov";
        DL.textContent = "Slavin";
        DR.textContent = "Burns";
        G.textContent = "F Andersen";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/carolina.gif";
        manager.textContent += "Rod Brind'Amour"
    }

    if (selectedYear === "6") {

        FL.textContent = "T Hall";
        FC.textContent = "Bedard";
        FR.textContent = "Dickinson";
        DL.textContent = "S Jones";
        DR.textContent = "C Murphy";
        G.textContent = "Mrazek";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/chicago.gif";
        manager.textContent += "Luke Richardson"
    }

    if (selectedYear === "7") {

        FL.textContent = "Landeskog";
        FC.textContent = "MacKinnon";
        FR.textContent = "Rantanen";
        DL.textContent = "Makar";
        DR.textContent = "D Toews";
        G.textContent = "Georgiev";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/colorado.gif";
        manager.textContent += "Jared Bednar"
    }

    if (selectedYear === "8") {

        FL.textContent = "J Gaudreau";
        FC.textContent = "Fantilli";
        FR.textContent = "Laine";
        DL.textContent = "Werenski";
        DR.textContent = "Provorov";
        G.textContent = "Merzlikins";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/columbus.gif";
        manager.textContent += "Pascal Vincent"
    }

    if (selectedYear === "9") {

        FL.textContent = "J Robertson";
        FC.textContent = "Hintz";
        FR.textContent = "Pavelski";
        DL.textContent = "Heiskanen";
        DR.textContent = "Lindell";
        G.textContent = "Oettinger";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/dallas.gif";
        manager.textContent += "Pete DeBoer"
    }

    if (selectedYear === "10") {

        FL.textContent = "DeBrincat";
        FC.textContent = "Larkin";
        FR.textContent = "P Kane";
        DL.textContent = "Seider";
        DR.textContent = "Petry";
        G.textContent = "Husso";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/detroit.gif";
        manager.textContent += "Derek Lalonde"
    }

    if (selectedYear === "11") {

        FL.textContent = "Hyman";
        FC.textContent = "McDavid";
        FR.textContent = "Draisaitl";
        DL.textContent = "Nurse";
        DR.textContent = "E Bouchard";
        G.textContent = "S Skinner";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/edmonton.gif";
        manager.textContent += "Kris Knoblauch"
    }

    if (selectedYear === "12") {

        FL.textContent = "M Tkachuk";
        FC.textContent = "Barkov";
        FR.textContent = "Reinhart";
        DL.textContent = "Ekblad";
        DR.textContent = "Montour";
        G.textContent = "Bobrovsky";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/florida.gif";
        manager.textContent += "Paul Maurice"
    }

    if (selectedYear === "13") {

        FL.textContent = "Fiala";
        FC.textContent = "Kopitar";
        FR.textContent = "Kempe";
        DL.textContent = "Doughty";
        DR.textContent = "M Anderson";
        G.textContent = "Talbot";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/los angeles.gif";
        manager.textContent += "Jim Hiller"
    }

    if (selectedYear === "14") {

        FL.textContent = "Kaprizov";
        FC.textContent = "Eriksson Ek";
        FR.textContent = "Zuccarello";
        DL.textContent = "Brodin";
        DR.textContent = "Spurgeon";
        G.textContent = "Gustavsson";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/minnesota.gif";
        manager.textContent += "John Hynes"
    }

    if (selectedYear === "15") {

        FL.textContent = "Dach";
        FC.textContent = "Suzuki";
        FR.textContent = "Caufield";
        DL.textContent = "Matheson";
        DR.textContent = "D Savard";
        G.textContent = "Montembeault";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/montreal.gif";
        manager.textContent += "Martin St Louis"
    }
    
    if (selectedYear === "16") {

        FL.textContent = "F Forsberg";
        FC.textContent = "O'Reilly";
        FR.textContent = "Nyquist";
        DL.textContent = "Josi";
        DR.textContent = "McDonagh";
        G.textContent = "Saros";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/nashville.gif";
        manager.textContent += "Andrew Brunette"
    }

    if (selectedYear === "17") {

        FL.textContent = "Bratt";
        FC.textContent = "J Hughes";
        FR.textContent = "Hischier";
        DL.textContent = "Hamilton";
        DR.textContent = "Marino";
        G.textContent = "J Allen";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/new jersey.gif";
        manager.textContent += "Sheldon Keefe"
    }

    if (selectedYear === "18") {

        FL.textContent = "Horvat";
        FC.textContent = "Barzal";
        FR.textContent = "Nelson";
        DL.textContent = "Dobson";
        DR.textContent = "Pelech";
        G.textContent = "Sorokin";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/ny islanders.gif";
        manager.textContent += "Patrick Roy"
    }

    if (selectedYear === "19") {

        FL.textContent = "Panarin";
        FC.textContent = "Zibanejad";
        FR.textContent = "Kreider";
        DL.textContent = "Fox";
        DR.textContent = "K Miller";
        G.textContent = "Shesterkin";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/ny rangers.gif";
        manager.textContent += "Peter Laviolette"
    }

    if (selectedYear === "20") {

        FL.textContent = "B Tkachuk";
        FC.textContent = "Stutzle";
        FR.textContent = "Giroux";
        DL.textContent = "Chychrun";
        DR.textContent = "Chabot";
        G.textContent = "Korpisalo";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/ottawa.gif";
        manager.textContent += "Travis Green"
    }

    if (selectedYear === "21") {

        FL.textContent = "Farabee";
        FC.textContent = "Couturier";
        FR.textContent = "Atkinson";
        DL.textContent = "Konecny";
        DR.textContent = "Sanheim";
        G.textContent = "C Hart";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/philadelphia.gif";
        manager.textContent += "John Tortorella"
    }

    if (selectedYear === "22") {

        FL.textContent = "Malkin";
        FC.textContent = "Crosby";
        FR.textContent = "Rust";
        DL.textContent = "E Karlsson";
        DR.textContent = "Letang";
        G.textContent = "Jarry";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/pittsburgh.gif";
        manager.textContent += "Mike Sullivan"
    }

    if (selectedYear === "23") {

        FL.textContent = "Barabanov";
        FC.textContent = "Couture";
        FR.textContent = "Granlund";
        DL.textContent = "Addison";
        DR.textContent = "Rutta";
        G.textContent = "Vanecek";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/san jose.gif";
        manager.textContent += "Ryan Warsofsky"
    }

    if (selectedYear === "24") {

        FL.textContent = "McCann";
        FC.textContent = "Schwartz";
        FR.textContent = "Bjorkstrand";
        DL.textContent = "Dunn";
        DR.textContent = "A Larsson";
        G.textContent = "Grubauer";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/seattle.gif";
        manager.textContent += "Dan Bylsma"
    }

    if (selectedYear === "25") {

        FL.textContent = "Buchnevich";
        FC.textContent = "R Thomas";
        FR.textContent = "Kyrou";
        DL.textContent = "Parayko";
        DR.textContent = "Faulk";
        G.textContent = "Binnington";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/st. louis.gif";
        manager.textContent += "Drew Bannister"
    }

    if (selectedYear === "26") {

        FL.textContent = "Stamkos";
        FC.textContent = "Point";
        FR.textContent = "Kucherov";
        DL.textContent = "Hedman";
        DR.textContent = "Sergachev";
        G.textContent = "Vasilevskiy";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/tampa bay.gif";
        manager.textContent += "Jon Cooper"
    }

    if (selectedYear === "27") {

        FL.textContent = "Nylander";
        FC.textContent = "Matthews";
        FR.textContent = "Marner";
        DL.textContent = "Rielly";
        DR.textContent = "McCabe";
        G.textContent = "S Samsonov";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/toronto.gif";
        manager.textContent += "Craig Berube"
    }

    if (selectedYear === "28") {

        FL.textContent = "E Lindholm";
        FC.textContent = "Pettersson";
        FR.textContent = "Boeser";
        DL.textContent = "Q Hughes";
        DR.textContent = "Hronek";
        G.textContent = "Demko";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/vancouver.gif";
        manager.textContent += "Rick Tocchet"
    }

    if (selectedYear === "29") {

        FL.textContent = "Marchessault";
        FC.textContent = "Eichel";
        FR.textContent = "Stone";
        DL.textContent = "Pietrangelo";
        DR.textContent = "S Theodore";
        G.textContent = "A Hill";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/vegas.gif";
        manager.textContent += "Bruce Cassidy"
    }

    if (selectedYear === "30") {

        FL.textContent = "Ovechkin";
        FC.textContent = "D Strome";
        FR.textContent = "Pacioretty";
        DL.textContent = "Carlson";
        DR.textContent = "Fehervary";
        G.textContent = "Kuemper";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/washington.gif";
        manager.textContent += "Spencer Carbery"
    }

    if (selectedYear === "31") {

        FL.textContent = "K Connor";
        FC.textContent = "Scheifele";
        FR.textContent = "Toffoli";
        DL.textContent = "Morrissey";
        DR.textContent = "DeMelo";
        G.textContent = "Hellebuyck";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/logos/winnipeg.gif";
        manager.textContent += "Scott Arniel"
    }
}