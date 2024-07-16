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

} from './Formations 3.js'

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
// const substitutes1 = document.querySelector(".substitutes1")
// const substitutes2 = document.querySelector(".substitutes2")
const score = document.querySelector(".score");
const OT = document.querySelector(".OT")
const team1 = document.querySelector(".team1")
const team2 = document.querySelector(".team2")
const goals1 = document.querySelector(".goals1")
const goals2 = document.querySelector(".goals2")
const date = document.querySelector(".date")

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
    // substitutes1.innerHTML = "Substitutes: "
    // substitutes2.innerHTML = "Substitutes: "
    OT.style.textAlign = "center"
    flag1.style.borderRadius = "100%"
    flag2.style.borderRadius = "100%"
    flag1.style.left = "23%"
    flag2.style.right = "23%"

    if (selectedYear == "0") {
        four_two_three_one("Neuer", "Kimmich", "Mittelstadt", "J Tah", "Rudiger", "Kroos", "Musiala", "Andrich", "Havertz", "Gundogan", "Wirtz")
        five_four_one2("Gunn", "Ralston", "Robertson", "Tierney", "Hendry", "Porteus", "McGinn", "McGregor", "C Adams", "McTominay", "Christie")
        flag1.src = "/football_img/logos/germany.png"
        flag2.src = "/football_img/logos/scotland.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Julian Nagelsmann"
        manager2.textContent += "Steve Clarke"
        team1.textContent = "GERMANY"
        team2.textContent = "SCOTLAND"
        score.textContent = "5 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = "Wirtz 10' ⚽<br>Musiala 19' ⚽<br>Havertz 45+1' (P) ⚽<br>Fullkrug 68' ⚽<br>E Can 90+3' ⚽"
        goals2.innerHTML = "Rudiger 87' (OG) ⚽"
        date.textContent = "14 / 06 / 2024"
    }

    if (selectedYear == "1") {
        three_four_two_one("Gulacsi", "Fiola", "Kerkez", "Szalai", "Orban", "A Lang", "Sallai", "Schafer", "Varga", "Nagy", "Szoboszlai")
        three_four_two_one2("Sommer", "Widmer", "Aebischer", "R Rodriguez", "Akanji", "Schar", "Ndoye", "Xhaka", "Duah", "Freuler", "R Vargas")
        flag1.src = "/football_img/logos/hungary.png"
        flag2.src = "/football_img/logos/switzerland.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Marco Rossi"
        manager2.textContent += "Murat Yakin"
        team1.innerHTML = "HUNGARY"
        team2.innerHTML = "SWITZERLAND"
        score.textContent = "1 - 3"
        OT.innerHTML = ""
        goals1.innerHTML = "Varga 66' ⚽"
        goals2.innerHTML = "Duah 12' ⚽<br>Aebischer 45' ⚽<br>Embolo 90+3' ⚽" 
        date.textContent = "15 / 06 / 2024"
    }

    if (selectedYear == "2") {
        four_three_three("U Simon", "Carvajal", "Cucurella", "Nacho", "Le Normand", "Rodri", "Yamal", "Pedri", "Morata", "F Ruiz", "N Williams")
        four_three_three2("Livakovic", "Stanisic", "Gvardiol", "Pongracic", "Sutalo", "Brozovic", "Majer", "Modric", "Budimir", "Kovacic", "Kramaric")
        flag1.src = "/football_img/logos/spain.png"
        flag2.src = "/football_img/logos/croatia.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Luis de la Fuente"
        manager2.textContent += "Zlatko Dalic"
        team1.textContent = "SPAIN"
        team2.textContent = "CROATIA"
        score.textContent = "3 - 0"
        OT.innerHTML = ""
        goals1.innerHTML = "Morata 29' ⚽<br>F Ruiz 32' ⚽<br>Carvajal 45+2' ⚽"
        goals2.innerHTML = ""
        date.textContent = "15 / 06 / 2024"
    }

    if (selectedYear == "3") {
        four_three_three("Donnarumma", "Di Lorenzo", "Dimarco", "Calafiori", "Bastoni", "Jorginho", "Chiesa", "Frattesi", "Scamacca", "Barella", "Pellegrini")
        four_two_three_one2("Strakosha", "Hysaj", "Mitaj", "Djimsiti", "Ajeti", "Asllani", "Asani", "Ramadani", "Broja", "Bajrami", "Seferi")
        flag1.src = "/football_img/logos/italy.png"
        flag2.src = "/football_img/logos/albania.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Luciano Spalletti"
        manager2.textContent += "Sylvinho"
        team1.textContent = "ITALY"
        team2.textContent = "ALBANIA"
        score.textContent = "2 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = "Bastoni 11' ⚽<br>Barella 16' ⚽"
        goals2.innerHTML = "Bajrami 1' ⚽"
        date.textContent = "15 / 06 / 2024"
    }

    if (selectedYear == "4") {
        four_four_two("Oblak", "Karnicnik", "Janza", "Bijol", "Drkusic", "Elsnik", "Stojanovic", "Cerin", "Sporar", "Sesko", "Mlakar")
        three_four_one_two2("K Schmeichel", "Bah", "Kristiansen", "J Andersen", "Christensen", "Vestergaard", "Eriksen", "Hojbjerg", "Hojlund", "Hjulmand", "Wind")
        flag1.src = "/football_img/logos/slovenia.png"
        flag2.src = "/football_img/logos/denmark.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Matjaz Kek"
        manager2.textContent += "Kasper Hjulmand"
        team1.textContent = "SLOVENIA"
        team2.textContent = "DENMARK"
        score.textContent = "1 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = "Janza 77' ⚽"
        goals2.innerHTML = "Eriksen 17' ⚽"
        date.textContent = "16 / 06 /2024"
    }

    if (selectedYear == "5") {
        three_four_two_one("Rajkovic", "Zivkovic", "Kostic", "Pavlovic", "Milenkovic", "Veljkovic", "Vlahovic", "Gudelj", "Mitrovic", "Lukic", "Milinkovic-Savic")
        four_two_three_one2("Pickford", "Walker", "Trippier", "Guehi", "Stones", "D Rice", "Saka", "Alexander-Arnold", "Kane", "Bellingham", "Foden")
        flag1.src = "/football_img/logos/serbia.png"
        flag2.src = "/football_img/logos/england.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Dragan Stojkovic"
        manager2.textContent += "Gareth Southgate"
        team1.textContent = "SERBIA"
        team2.textContent = "ENGLAND"
        score.textContent = "0 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = "Bellingham 13' ⚽"
        date.textContent = "16 / 06 / 2024"
    }

    if (selectedYear == "6") {
        three_five_two("Szczesny", "Frankowski", "Zalewski", "Kiwior", "Salamon", "Bednarek", "Romanczuk", "Szymanski", "Urbanski", "Zielinski", "Buksa")
        four_two_three_one2("Verbruggen", "Dumfries", "N Ake", "van Dijk", "de Vrij", "Veerman", "X Simons", "Schouten", "Depay", "Reijnders", "Gakpo")
        flag1.src = "/football_img/logos/poland.png"
        flag2.src = "/football_img/logos/netherlands.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Michal Probierz"
        manager2.textContent += "Ronald Koeman"
        team1.textContent = "POLAND"
        team2.textContent = "NETHERLANDS"
        score.textContent = "1 - 2"
        OT.innerHTML = ""
        goals1.innerHTML = "Buksa 16' ⚽"
        goals2.innerHTML = "Gakpo 29' ⚽<br>Weghorst 83' ⚽"
        date.textContent = "16 / 06 / 2024"
    }

    if (selectedYear == "7") {
        four_two_three_one("Pentz", "Posch", "Mwene", "Wober", "Danso", "Grillitsch", "Laimer", "Seiwald", "Gregoritsch", "Baumgartner", "Sabitzer")
        four_two_three_one2("Maignan", "Kounde", "T Hernandez", "Saliba", "Upamecano", "Rabiot", "O Dembele", "Kante", "Mbappe", "Griezmann", "M Thuram")
        flag1.src = "/football_img/logos/austria.png"
        flag2.src = "/football_img/logos/france.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Ralf Rangnick"
        manager2.textContent += "Didier Deschamps"
        team1.textContent = "AUSTRIA"
        team2.textContent = "FRANCE"
        score.textContent = "0 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = "Wober 38' (OG) ⚽"
        date.textContent = "17 / 06 / 2024"
    }

    if (selectedYear == "8") {
        four_five_one("Nita", "Ratiu", "Bancu", "Burca", "Dragusin", "M Marin", "D Man", "R Marin", "Dragus", "Stanciu", "F Coman")
        four_two_three_one2("Lunin", "Konoplya", "Zinchenko", "Matviyenko", "Zabarnyi", "Stepanenko", "Tsygankov", "Shaparenko", "Dovbyk", "Sudakov", "Mudryk")
        flag1.src = "/football_img/logos/romania.png"
        flag2.src = "/football_img/logos/ukraine.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Edward Iordanescu"
        manager2.textContent += "Serhiy Rebrov"
        team1.textContent = "ROMANIA"
        team2.textContent = "UKRAINE"
        score.textContent = "3 - 0"
        OT.innerHTML = ""
        goals1.innerHTML = "Stanciu 29' ⚽<br>R Marin 53' ⚽<br>Dragus 57' ⚽"
        goals2.innerHTML = ""
        date.textContent = "17 / 06 / 2024"
    }

    if (selectedYear == "9") {
        four_two_three_one("Casteels", "Castagne", "Carrasco", "Debast", "Faes", "A Onana", "Doku", "O Mangala", "Lukaku", "De Bruyne", "Trossard")
        four_three_three2("Dubravka", "Pekarik", "Hancko", "Skriniar", "Vavro", "Lobotka", "Schranz", "Kucka", "Bozenik", "Duda", "Haraslin")
        flag1.src = "/football_img/logos/belgium.png"
        flag2.src = "/football_img/logos/slovakia.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Domenico Tedesco"
        manager2.textContent += "Francesco Calzona"
        team1.textContent = "BELGIUM"
        team2.textContent = "SLOVAKIA"
        score.textContent = "0 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = "Schranz 7' ⚽"
        date.textContent = "17 / 06 / 2024"
    }

    if (selectedYear == "10") {
        four_two_three_one("Gunok", "Muldur", "Kadioglu", "Bardakci", "Akaydin", "Ayhan", "Guler", "Calhanoglu", "B Yilmaz", "Kokcu", "Yildiz")
        three_five_two2("Mamardashvili", "Kakabadze", "Tsitaishvili", "Dvali", "Kashia", "Kvirkvelia", "Mekvabishvili", "Chakvetadze", "Kvaratskhelia", "Kochorashvili", "Miakutadze")
        flag1.src = "/football_img/logos/turkey.png"
        flag2.src = "/football_img/logos/georgia.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Vincenzo Montella"
        manager2.textContent += "Willy Sagnol"
        team1.textContent = "TURKIYE"
        team2.textContent = "GEORGIA"
        score.textContent = "3 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = "Muldur 25' ⚽<br>Guler 65' ⚽<br> Arturkoglu 90+7' ⚽"
        goals2.innerHTML = "Mikautadze 32' ⚽"
        date.textContent = "18 / 06 / 2024"
    }

    if (selectedYear == "11") {
        three_four_three("D Costa", "Dalot", "Cancelo", "N Mendes", "K Pepe", "R Dias", "B Silva", "B Fernandes", "C Ronaldo", "Vitinha", "R Leao")
        three_five_two2("Stanek", "Coufal", "Sulc", "Krejci", "Hranac", "Holes", "Soucek", "Doudera", "Kuchta", "Provod", "Schick")
        flag1.src = "/football_img/logos/portugal.png"
        flag2.src = "/football_img/logos/czechia.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Roberto Martínez"
        manager2.textContent += "Ivan Hasek"
        team1.textContent = "PORTUGAL"
        team2.textContent = "CZECHIA"
        score.textContent = "2 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = "Hranac 69' (OG) ⚽<br>F Conceicao 90+2' ⚽"
        goals2.innerHTML = "Provod 62' ⚽"
        date.textContent = "18 / 06 / 2024"
    }

    if (selectedYear == "12") {
        four_two_three_one("Neuer", "Kimmich", "Mittelstadt", "J Tah", "Rudiger", "Kroos", "Musiala", "Andrich", "Havertz", "Gundogan", "Wirtz")
        three_four_two_one2("Gulacsi", "Bolla", "Kerkez", "Dardai", "Orban", "Fiola", "Szoboszlai", "Schafer", "Varga", "Nagy", "Sallai")
        flag1.src = "/football_img/logos/germany.png"
        flag2.src = "/football_img/logos/hungary.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Julian Nagelsmann"
        manager2.textContent += "Marco Rossi"
        team1.textContent = "GERMANY"
        team2.textContent = "HUNGARY"
        score.textContent = "2 - 0"
        OT.innerHTML = ""
        goals1.innerHTML = "Musiala 22' ⚽<br>Gundogan 67' ⚽"
        goals2.innerHTML = ""
        date.textContent = "19 / 06 / 2024"
    }

    if (selectedYear == "13") {
        three_four_one_two("Gunn", "Ralston", "Robertson", "Tierney", "Hanley", "Hendry", "McTominay", "C McGregor", "McGinn", "Gilmour", "C Adams")
        three_four_one_two2("Sommer", "Widmer", "Aebischer", "R Rodriguez", "Akanji", "Schar", "Shaqiri", "Xhaka", "R Vargas", "Freuler", "Ndoye")
        flag1.src = "/football_img/logos/scotland.png"
        flag2.src = "/football_img/logos/switzerland.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Steve Clarke"
        manager2.textContent += "Murat Yakin"
        team1.textContent = "SCOTLAND"
        team2.textContent = "SWITZERLAND"
        score.textContent = "1 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = "McTominay 13' ⚽"
        goals2.innerHTML = "Shaqiri 26' ⚽"
        date.textContent = "19 / 06 / 2024"
    }

    if (selectedYear == "14") {
        four_three_three("Livakovic", "Juranovic", "Perisic", "Gvardiol", "Sutalo", "Brozovic", "Majer", "Modric", "Petkovic", "Kovacic", "Kramaric")
        four_two_three_one2("Strakosha", "Hysaj", "Mitaj", "Djimsiti", "Ajeti", "Asllani", "Asani", "Ramadani", "Manaj", "Laci", "Bajrami")
        flag1.src = "/football_img/logos/croatia.png"
        flag2.src = "/football_img/logos/albania.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Zlatko Dalic"
        manager2.textContent += "Sylvinho"
        team1.textContent = "CROATIA"
        team2.textContent = "ALBANIA"
        score.textContent = "2 - 2"
        OT.innerHTML = ""
        goals1.innerHTML = "Kramaric 74' ⚽<br>Gjasula 76' (OG) ⚽"
        goals2.innerHTML = "Laci 11' ⚽<br>Gjasula 90' ⚽"
        date.textContent = "19 / 06 / 2024"
    }

    if (selectedYear == "15") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "SPAIN"
        team2.innerHTML = "ITALY"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }
    
    if (selectedYear == "16") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "SLOVENIA"
        team2.innerHTML = "SERBIA"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }

    if (selectedYear == "17") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "DENMARK"
        team2.innerHTML = "ENGLAND"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }

    if (selectedYear == "18") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "POLAND"
        team2.innerHTML = "AUSTRIA"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }

    if (selectedYear == "19") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "NETHERLANDS"
        team2.innerHTML = "FRANCE"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }
    
    if (selectedYear == "20") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "SLOVAKIA"
        team2.innerHTML = "UKRAINE"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }

    if (selectedYear == "21") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "BELGIUM"
        team2.innerHTML = "ROMANIA"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }

    if (selectedYear == "22") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "GEORGIA"
        team2.innerHTML = "CZECHIA"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }

    if (selectedYear == "23") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "TURKIYE"
        team2.innerHTML = "PORTUGAL"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }
    
    if (selectedYear == "24") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "SWITZERLAND"
        team2.innerHTML = "GERMANY"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }

    if (selectedYear == "25") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "SCOTLAND"
        team2.innerHTML = "HUNGARY"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }

    if (selectedYear == "26") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "CROATIA"
        team2.innerHTML = "ITALY"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }

    if (selectedYear == "27") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "ALBANIA"
        team2.innerHTML = "SPAIN"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }
    
    if (selectedYear == "28") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "ENGLAND"
        team2.innerHTML = "SLOVENIA"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }

    if (selectedYear == "29") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "DENMARK"
        team2.innerHTML = "SERBIA"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }

    if (selectedYear == "30") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "NETHERLANDS"
        team2.innerHTML = "AUSTRIA"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }

    if (selectedYear == "31") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "FRANCE"
        team2.innerHTML = "POLAND"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    } 
    
    if (selectedYear == "32") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "SLOVAKIA"
        team2.innerHTML = "ROMANIA"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }

    if (selectedYear == "33") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "UKRAINE"
        team2.innerHTML = "BELGIUM"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }

    if (selectedYear == "34") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "CZECHIA"
        team2.innerHTML = "TURKIYE"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }

    if (selectedYear == "35") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "GEORGIA"
        team2.innerHTML = "PORTUGAL"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }
    
    if (selectedYear == "36") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "SWITZERLAND"
        team2.innerHTML = "ITALY"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }

    if (selectedYear == "37") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "GERMANY"
        team2.innerHTML = "DENMARK"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }

    if (selectedYear == "38") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "ENGLAND"
        team2.innerHTML = "SLOVAKIA"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }

    if (selectedYear == "39") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "SPAIN"
        team2.innerHTML = "GEORGIA"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    } if (selectedYear == "40") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "FRANCE"
        team2.innerHTML = "BELGIUM"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }

    if (selectedYear == "41") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "PORTUGAL"
        team2.innerHTML = "SLOVENIA"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }

    if (selectedYear == "42") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "ROMANIA"
        team2.innerHTML = "NETHERLANDS"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }

    if (selectedYear == "43") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "AUSTRIA"
        team2.innerHTML = "TURKIYE"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }
    
    if (selectedYear == "44") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "SPAIN"
        team2.innerHTML = "GERMANY"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }

    if (selectedYear == "45") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "PORTUGAL"
        team2.innerHTML = "FRANCE"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }

    if (selectedYear == "46") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "ENGLAND"
        team2.innerHTML = "SWITZERLAND"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }

    if (selectedYear == "47") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "NETHERLANDS"
        team2.innerHTML = "TURKIYE"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    } 
    
    if (selectedYear == "48") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "SPAIN"
        team2.innerHTML = "FRANCE"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }

    if (selectedYear == "49") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "NETHERLANDS"
        team2.innerHTML = "ENGLAND"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }

    if (selectedYear == "50") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/.png"
        flag2.src = "/football_img/logos/.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.innerHTML = "SPAIN"
        team2.innerHTML = "ENGLAND"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = ""
    }
    substitutes1.innerHTML = substitutes1.innerHTML.replace(/,/g, ' •');
    substitutes2.innerHTML = substitutes2.innerHTML.replace(/,/g, ' •');
}