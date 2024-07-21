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

    LCM.style.top = "54.5%"
    LCM2.style.top = "32.5%"
    RCM.style.top = "54.5%"
    RCM2.style.top = "32.5%"
    CM.style.top = "59%"
    CM2.style.top = "37%"
    DM.style.top = "71%"
    DM2.style.top = "49%"

    twoLCM.style.top = "54.5%"
    twoLCM2.style.top = "32.5%"
    twoRCM.style.top = "54.5%"
    twoRCM2.style.top = "32.5%"
    twoCM.style.top = "59%"
    twoCM2.style.top = "37%"
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
        four_three_three("U Simon", "Carvajal", "Cucurella", "Laporte", "Le Normand", "Rodri", "Yamal", "Pedri", "Morata", "F Ruiz", "N Williams")
        four_three_three2("Donnarumma", "Di Lorenzo", "Dimarco", "Calafiori", "Bastoni", "Jorginho", "Chiesa", "Frattesi", "Scamacca", "Barella", "Pellegrini")
        flag1.src = "/football_img/logos/spain.png"
        flag2.src = "/football_img/logos/italy.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Luis de la Fuente"
        manager2.textContent += "Luciano Spalletti"
        team1.textContent = "SPAIN"
        team2.textContent = "ITALY"
        score.textContent = "1 - 0"
        OT.innerHTML = ""
        goals1.innerHTML = "Calafiori (OG) 55' ⚽"
        goals2.innerHTML = ""
        date.textContent = "20 / 06 / 2024"
    }
    
    if (selectedYear == "16") {
        four_four_two("Oblak", "Karnicnik", "Janza", "Bijol", "Drkusic", "Elsnik", "Stojanovic", "Cerin", "Sporar", "Sesko", "Mlakar")
        three_four_two_one2("Rajkovic", "Zivkovic", "Mladenovic", "Pavlovic", "Milenkovic", "Veljkovic", "Tadic", "Lukic", "Mitrovic", "Ilic", "Vlahovic")
        flag1.src = "/football_img/logos/slovenia.png"
        flag2.src = "/football_img/logos/serbia.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Matjaz Kek"
        manager2.textContent += "Dragan Stojkovic"
        team1.textContent = "SLOVENIA"
        team2.textContent = "SERBIA"
        score.textContent = "1 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = "Karnicnik 69' ⚽"
        goals2.innerHTML = "L Jovic 90+5' ⚽" 
        date.textContent = "20 / 06 / 2024"
    }

    if (selectedYear == "17") {
        three_four_one_two("K Schmeichel", "Maehle", "Kristiansen", "J Andersen", "Christensen", "Vestergaard", "Eriksen", "Hojbjerg", "Hojlund", "Hjulmand", "Wind")
        four_two_three_one2("Pickford", "Walker", "Trippier", "Guehi", "Stones", "D Rice", "Saka", "Alexander-Arnold", "Kane", "Bellingham", "Foden")
        flag1.src = "/football_img/logos/denmark.png"
        flag2.src = "/football_img/logos/england.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Kasper Hjulmand"
        manager2.textContent += "Gareth Southgate"
        team1.textContent = "DENMARK"
        team2.textContent = "ENGLAND"
        score.textContent = "1 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = "Hjulmand 34' ⚽"
        goals2.innerHTML = "Kane 18' ⚽"
        date.textContent = "20 / 06 / 2024"
    }

    if (selectedYear == "18") {
        three_five_two("Szczesny", "Frankowski", "Zalewski", "Kiwior", "Dawidowicz", "J Bednarek", "Slisz", "Zielinski", "Buksa", "Piotrowski", "Piatek")
        four_two_three_one2("Pentz", "Posch", "Mwene", "Lienhart", "Trauner", "Grillitsch", "Baumgartner", "Seiwald", "Arnautovic", "Laimer", "Sabitzer")
        flag1.src = "/football_img/logos/poland.png"
        flag2.src = "/football_img/logos/austria.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Michal Probierz"
        manager2.textContent += "Ralf Rangnick"
        team1.textContent = "POLAND"
        team2.textContent = "AUSTRIA"
        score.textContent = "1 - 3"
        OT.innerHTML = ""
        goals1.innerHTML = "Piatek 30' ⚽"
        goals2.innerHTML = "Trauner 9' ⚽<br>Baumgartner 66' ⚽<br>Arnautovic 78' (P) ⚽"
        date.textContent = "21 / 06 / 2024"
    }

    if (selectedYear == "19") {
        four_two_three_one("Verbruggen", "Dumfries", "N Ake", "van Dijk", "de Vrij", "Reijnders", "Frimpong", "Schouten", "Depay", "X Simons", "Gakpo")
        four_two_three_one2("Maignan", "Kounde", "T Hernandez", "Saliba", "Upamecano", "Tchouameni", "O Dembele", "Kante", "M Thuram", "Griezmann", "Rabiot")
        flag1.src = "/football_img/logos/netherlands.png"
        flag2.src = "/football_img/logos/france.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Ronald Koeman"
        manager2.textContent += "Didier Deschamps"
        team1.textContent = "NETHERLANDS"
        team2.textContent = "FRANCE"
        score.textContent = "0 - 0"
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "21 / 06 / 2024"
    }
    
    if (selectedYear == "20") {
        four_three_three("Dubravka", "Pekarik", "Hancko", "Skriniar", "Vavro", "Lobotka", "Schranz", "Kucka", "Bozenik", "Duda", "Haraslin")
        four_two_three_one2("Trubin", "Tymchyk", "Zinchenko", "Matviyenko", "Zabarnyi", "Brazhko", "Yarmolenko", "Shaparenko", "Dovbyk", "Sudakov", "Mudryk")
        flag1.src = "/football_img/logos/slovakia.png"
        flag2.src = "/football_img/logos/ukraine.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Francesco Calzona"
        manager2.textContent += "Serhiy Rebrov"
        team1.textContent = "SLOVAKIA"
        team2.textContent = "UKRAINE"
        score.textContent = "1 - 2"
        OT.innerHTML = ""
        goals1.innerHTML = "Schranz 17' ⚽"
        goals2.innerHTML = "Shaparenko 54' ⚽<br>Yaremchuk 80' ⚽"
        date.textContent = "21 / 06 / 2024"
    }

    if (selectedYear == "21") {
        four_two_three_one("Casteels", "Castagne", "Theate", "Vertonghen", "Faes", "A Onana", "Lukebakio", "Tielemans", "Lukaku", "De Bruyne", "Doku")
        four_five_one2("Nita", "Ratiu", "Bancu", "Burca", "Dragusin", "M Marin", "D Man", "R Marin", "Dragus", "Stanciu", "Mihaila")
        flag1.src = "/football_img/logos/belgium.png"
        flag2.src = "/football_img/logos/romania.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Domenico Tedesco"
        manager2.textContent += "Edward Iordanescu"
        team1.textContent = "BELGIUM"
        team2.textContent = "ROMANIA"
        score.textContent = "2 - 0"
        OT.innerHTML = ""
        goals1.innerHTML = "Tielemans 2' ⚽<br>De Bruyne 80' ⚽"
        goals2.innerHTML = ""
        date.textContent = "22 / 06 / 2024"
    }

    if (selectedYear == "22") {
        three_four_three("Mamardashvili", "Kakabadze", "Tsitaishvili", "Dvali", "Kashia", "Kvirkvelia", "Davitashvili", "Mekvabishvili", "Mikautadze", "Kochorashvili", "Kvaratskhelia")
        three_four_two_one2("Stanek", "Coufal", "Jurasek", "Krejci", "Hranac", "Holes", "Cerny", "Provod", "Schick", "Soucek", "Hlozek")
        flag1.src = "/football_img/logos/georgia.png"
        flag2.src = "/football_img/logos/czechia.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Willy Sagnol"
        manager2.textContent += "Ivan Hasek"
        team1.textContent = "GEORGIA"
        team2.textContent = "CZECHIA"
        score.textContent = "1 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = "Mikautadze 45+4' (P) ⚽"
        goals2.innerHTML = "Schick 59' ⚽"
        date.textContent = "22 / 06 / 2024"
    }

    if (selectedYear == "23") {
        four_two_three_one("Bayindir", "Celik", "Kadioglu", "Bardakci", "Akaydin", "Ayhan", "Akgun", "Calhanoglu", "B Yilmaz", "Kokcu", "Akturkoglu")
        four_two_three_one2("D Costa", "Cancelo", "N Mendes", "K Pepe", "R Dias", "Palhinha", "B Silva", "Vitinha", "C Ronaldo", "B Fernandes", "R Leao")
        flag1.src = "/football_img/logos/turkey.png"
        flag2.src = "/football_img/logos/portugal.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Vincenzo Montella"
        manager2.textContent += "Roberto Martinez"
        team1.textContent = "TURKIYE"
        team2.textContent = "PORTUGAL"
        score.textContent = "0 - 3"
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = "B Silva 21' ⚽<br>Akaydin 28' (OG) ⚽<br>B Fernandes 56' ⚽"
        date.textContent = "22 / 06 / 2024"
    }
    
    if (selectedYear == "24") {
        three_four_two_one("Sommer", "Widmer", "Aebischer", "R Rodriguez", "Akanji", "Schar", "Rieder", "Xhaka", "Embolo", "Freuler", "Ndoye")
        four_two_three_one2("Neuer", "Kimmich", "Mittelstadt", "J Tah", "Rudiger", "Kroos", "Musiala", "Andrich", "Havertz", "Gundogan", "Wirtz")
        flag1.src = "/football_img/logos/switzerland.png"
        flag2.src = "/football_img/logos/germany.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Murat Yakin"
        manager2.textContent += "Julian Nagelsmann"
        team1.textContent = "SWITZERLAND"
        team2.textContent = "GERMANY"
        score.textContent = "1 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = "Ndoye 28' ⚽"
        goals2.innerHTML = "Fullkrug 90+2' ⚽"
        date.textContent = "23 / 06 / 2024"
    }

    if (selectedYear == "25") {
        three_four_two_one("Gunn", "Ralston", "Robertson", "S McKenna", "Hanley", "Hendry", "McGinn", "Gilmour", "C Adams", "C McGregor", "McTominay")
        three_four_two_one2("Gulacsi", "Bolla", "Kerkez", "Dardai", "Orban", "Botka", "Szoboszlai", "Schafer", "Varga", "Styles", "Sallai")
        flag1.src = "/football_img/logos/scotland.png"
        flag2.src = "/football_img/logos/hungary.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Steve Clarke"
        manager2.textContent += "Marco Rossi"
        team1.textContent = "SCOTLAND"
        team2.textContent = "HUNGARY"
        score.textContent = "0 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = "Csoboth 90+10' ⚽"
        date.textContent = "23 / 06 / 2024"
    }

    if (selectedYear == "26") {
        four_three_three("Livakovic", "Stanisic", "Gvardiol", "Pongracic", "Sutalo", "Brozovic", "Sucic", "Modric", "Kramaric", "Kovacic", "Pasalic")
        three_five_two2("Donnarumma", "Di Lorenzo", "Pellegrini", "Calafiori", "Bastoni", "Darmian", "Jorginho", "Barella", "Retegui", "Dimarco", "Raspadori")
        flag1.src = "/football_img/logos/croatia.png"
        flag2.src = "/football_img/logos/italy.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Zlatko Dalic"
        manager2.textContent += "Luciano Spalletti"
        team1.textContent = "CROATIA"
        team2.textContent = "ITALY"
        score.textContent = "1 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = "Modric 55' ⚽"
        goals2.innerHTML = "Zaccagni 90+8' ⚽"
        date.textContent = "24 / 06 / 2024"
    }

    if (selectedYear == "27") {
        four_three_three("Strakosha", "Balliu", "Mitaj", "Djimsiti", "Ajeti", "Ramadani", "Asani", "Laci", "Manaj", "Asllani", "Bajrami")
        four_three_three2("D Raya", "J Navas", "Grimaldo", "Laporte", "Vivian", "Zubimendi", "F Torres", "Olmo", "Joselu", "Merino", "Oyarzabal")
        flag1.src = "/football_img/logos/albania.png"
        flag2.src = "/football_img/logos/spain.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Sylvinho"
        manager2.textContent += "Luis de la Fuente"
        team1.textContent = "ALBANIA"
        team2.textContent = "SPAIN"
        score.textContent = "0 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = "F Torres 13' ⚽"
        date.textContent = "24 / 06 / 2024"
    }
    
    if (selectedYear == "28") {
        four_three_three("Pickford", "Walker", "Trippier", "Guehi", "Stones", "D Rice", "Saka", "Bellingham", "Kane", "Gallagher", "Foden")
        four_four_two2("Oblak", "Karnicnik", "Janza", "Bijol", "Drkusic", "Elsnik", "Stojanovic", "Cerin", "Sporar", "Sesko", "Mlakar")
        flag1.src = "/football_img/logos/england.png"
        flag2.src = "/football_img/logos/slovenia.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Gareth Southgate"
        manager2.textContent += "Matjaz Kek"
        team1.textContent = "ENGLAND"
        team2.textContent = "SLOVENIA"
        score.textContent = "0 - 0"
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "25 / 06 / 2024"
    }

    if (selectedYear == "29") {
        three_four_one_two("K Schmeichel", "A Bah", "Maehle", "J Andersen", "Christensen", "Vestergaard", "Eriksen", "Hojbjerg", "Hojlund", "Hjulmand", "Wind")
        three_four_two_one2("Rajkovic", "Mijailovic", "Zivkovic", "Pavlovic", "Milenkovic", "Veljkovic", "Samardzic", "N Gudelj", "Mitrovic", "Ilic", "Lukic")
        flag1.src = "/football_img/logos/denmark.png"
        flag2.src = "/football_img/logos/serbia.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Kasper Hjulmand"
        manager2.textContent += "Dragan Stojkovic"
        team1.textContent = "DENMARK"
        team2.textContent = "SERBIA"
        score.textContent = "0 - 0"
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "25 / 06 / 2024"
    }

    if (selectedYear == "30") {
        four_three_three("Verbruggen", "Geertruida", "N Ake", "van Dijk", "de Vrij", "Schouten", "Malen", "Reijnders", "Depay", "Veerman", "Gakpo")
        four_two_three_one2("Pentz", "Posch", "Prass", "Wober", "Lienhart", "Grillitsch", "Schmid", "Seiwald", "Arnautovic", "Sabitzer", "Wimmer")
        flag1.src = "/football_img/logos/netherlands.png"
        flag2.src = "/football_img/logos/austria.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Ronald Koeman"
        manager2.textContent += "Ralf Rangnick"
        team1.textContent = "NETHERLANDS"
        team2.textContent = "AUSTRIA"
        score.textContent = "2 - 3"
        OT.innerHTML = ""
        goals1.innerHTML = "Gakpo 47' ⚽<br>Depay 75' ⚽"
        goals2.innerHTML = "Malen 6' (OG) ⚽<br>Schmid 59' ⚽<br>Sabitzer 80' ⚽"
        date.textContent = "25 / 06 / 2024"
    }

    if (selectedYear == "31") {
        four_three_three("Maignan", "Kounde", "T Hernandez", "Saliba", "Upamecano", "Tchouameni", "O Dembele", "Kante", "Mbappe", "Rabiot", "Barcola")
        five_three_two2("Skorupski", "Frankowski", "Zalewski", "Kiwior", "Dawidowicz", "J Bednarek", "Moder", "Szymanski", "Lewandowski", "Zielinski", "Urbanski")
        flag1.src = "/football_img/logos/france.png"
        flag2.src = "/football_img/logos/poland.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Didier Deschamps"
        manager2.textContent += "Michal Probierz"
        team1.textContent = "FRANCE"
        team2.textContent = "POLAND"
        score.textContent = "1 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = "Mbappe 56' (P) ⚽"
        goals2.innerHTML = "Lewandowski 79' (P) ⚽"
        date.textContent = "25 / 06 / 2024"
    } 
    
    if (selectedYear == "32") {
        four_three_three("Dubravka", "Pekarik", "Hancko", "Skriniar", "Vavro", "Lobotka", "Schranz", "Kucka", "Strelec", "Duda", "Haraslin")
        four_five_one2("Nita", "Ratiu", "Bancu", "Burca", "Dragusin", "M Marin", "I Hagi", "R Marin", "Dragus", "Stanciu", "F Coman")
        flag1.src = "/football_img/logos/slovakia.png"
        flag2.src = "/football_img/logos/romania.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Francesco Calzona"
        manager2.textContent += "Edward Iordanescu"
        team1.textContent = "SLOVAKIA"
        team2.textContent = "ROMANIA"
        score.textContent = "1 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = "Duda 24' ⚽"
        goals2.innerHTML = "Marin 37' (P) ⚽"
        date.textContent = "26 / 06 / 2024"
    }

    if (selectedYear == "33") {
        five_three_two("Trubin", "Tymchyk", "Mykolenko", "Matviyenko", "Svatok", "Zabarnyi", "Brazhko", "Shaparenko", "Yaremchuk", "Sudakov", "Dovbyk")
        four_two_three_one2("Casteels", "Castagne", "Theate", "Vertonghen", "Faes", "A Onana", "Trossard", "Tielemans", "Lukaku", "De Bruyne", "Doku")
        flag1.src = "/football_img/logos/ukraine.png"
        flag2.src = "/football_img/logos/belgium.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Serhiy Rebrov"
        manager2.textContent += "Domenico Tedesco"
        team1.textContent = "UKRAINE"
        team2.textContent = "BELGIUM"
        score.textContent = "0 - 0"
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "26 / 06 / 2024"
    }

    if (selectedYear == "34") {
        three_four_two_one("Stanek", "Coufal", "Jurasek", "Krejci", "Hranac", "Holes", "Barak", "Provod", "Chytil", "Soucek", "Hlozek")
        four_two_three_one2("Gunok", "Muldur", "Kadioglu", "Demiral", "Akaydin", "Yuksek", "Guler", "Ozcan", "B Yilmaz", "Calhanoglu", "Yildiz")
        flag1.src = "/football_img/logos/czechia.png"
        flag2.src = "/football_img/logos/turkey.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Ivan Hasek"
        manager2.textContent += "Vincenzo Montella"
        team1.textContent = "CZECHIA"
        team2.textContent = "TURKIYE"
        score.textContent = "1 - 2"
        OT.innerHTML = ""
        goals1.innerHTML = "Soucek 66' ⚽<br>Barak 20'   🟨🟥<br>Chory 90+8'  🟥"
        goals2.innerHTML = "Calhanoglu 51' ⚽<br>Tosun 90+4' ⚽"
        date.textContent = "26 / 06 / 2024"
    }

    if (selectedYear == "35") {
        five_three_two("Mamardashvili", "Kakabadze", "Lochoshvili", "Dvali", "Kashia", "Gvelesiani", "Kiteishvili", "Chakvetadze", "Kvaratskhelia", "Kochorashvili", "Mikautadze")
        three_four_two_one2("D Costa", "Dalot", "P Neto", "Inacio", "D Pereira", "A Silva", "F Conceicao", "J Neves", "C Ronaldo", "Palhinha", "J Felix")
        flag1.src = "/football_img/logos/georgia.png"
        flag2.src = "/football_img/logos/portugal.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Willy Sagnol"
        manager2.textContent += "Roberto Martinez"
        team1.textContent = "GEORGIA"
        team2.textContent = "PORTUGAL"
        score.textContent = "2 - 0"
        OT.innerHTML = ""
        goals1.innerHTML = "Kvaratskhelia 2' ⚽<br>Mikautadze 57' (P) ⚽"
        goals2.innerHTML = ""
        date.textContent = "26 / 06 /2024"
    }
    
    if (selectedYear == "36") {
        three_four_two_one("Sommer", "Ndoye", "Aebischer", "R Rodriguez", "Akanji", "Schar", "Rieder", "Xhaka", "Embolo", "Freuler", "R Vargas")
        four_three_three2("Donnarumma", "Di Lorenzo", "Darmian", "Bastoni", "G Mancini", "Fagioli", "Chiesa", "Cristante", "Scamacca", "Barella", "El Shaarawy")
        flag1.src = "/football_img/logos/switzerland.png"
        flag2.src = "/football_img/logos/italy.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Murat Yakin"
        manager2.textContent += "Luciano Spalletti"
        team1.textContent = "SWITZERLAND"
        team2.textContent = "ITALY"
        score.textContent = "2 - 0"
        OT.innerHTML = "" 
        goals1.innerHTML = "Freuler 37' ⚽<br>R Vargas 46' ⚽"
        goals2.innerHTML = ""
        date.textContent = "29 / 06 / 2024"
    }

    if (selectedYear == "37") {
        four_two_three_one("Neuer", "Kimmich", "Raum", "Schlotterbeck", "Rudiger", "Kroos", "Sane", "Andrich", "Havertz", "Gundogan", "Musiala")
        three_four_two_one2("K Schmeichel", "A Bah", "Maehle", "J Andersen", "Christensen", "Vestergaard", "Olsen", "Delaney", "Hojlund", "Hojbjerg", "Eriksen")
        flag1.src = "/football_img/logos/germany.png"
        flag2.src = "/football_img/logos/denmark.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Julian Nagelsmann"
        manager2.textContent += "Kasper Hjulmand"
        team1.textContent = "GERMANY"
        team2.textContent = "DENMARK"
        score.textContent = "2 - 0"
        OT.innerHTML = ""
        goals1.innerHTML = "Havertz 53' (P) ⚽<br>Musiala 68' ⚽"
        goals2.innerHTML = ""
        date.textContent = "29 / 06 / 2024"
    }

    if (selectedYear == "38") {
        four_two_three_one("Pickford", "Walker", "Trippier", "Guehi", "Stones", "D Rice", "Saka", "Mainoo", "Kane", "Bellingham", "Foden")
        four_three_three2("Dubravka", "Pekarik", "Hancko", "Skriniar", "Vavro", "Lobotka", "Schranz", "Kucka", "Strelec", "Duda", "Haraslin")
        flag1.src = "/football_img/logos/england.png"
        flag2.src = "/football_img/logos/slovakia.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Gareth Southgate"
        manager2.textContent += "Francesco Calzona"
        team1.textContent = "ENGLAND"
        team2.textContent = "SLOVAKIA"
        score.textContent = "2 - 1"
        OT.innerHTML = "after extra time"
        goals1.innerHTML = "Bellingham 90+5' ⚽<br>Kane 91' ⚽"
        goals2.innerHTML = "Schranz 25' ⚽"
        date.textContent = "30 / 06 / 2024"
    }

    if (selectedYear == "39") {
        four_three_three("U Simon", "Carvajal", "Cucurella", "Laporte", "Le Normand", "Rodri", "Yamal", "Pedri", "Morata", "F Ruiz", "N Williams")
        five_three_two2("Mamardashvili", "Kakabadze", "Lochoshvili", "Dvali", "Kashia", "Gvelesiani", "Kiteishvili", "Chakvetadze", "Kvaratskhelia", "Kochorashvili", "Mikautadze")
        flag1.src = "/football_img/logos/spain.png"
        flag2.src = "/football_img/logos/georgia.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Luis de la Fuente"
        manager2.textContent += "Willy Sagnol"
        team1.textContent = "SPAIN"
        team2.textContent = "GEORGIA"
        score.textContent = "4 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = "Rodri 39' ⚽<br>F Ruiz 51' ⚽<br>N Williams 75' ⚽<br>D Olmo 83' ⚽"
        goals2.innerHTML = "Le Normand 18' (OG) ⚽"
        date.textContent = "30 / 06 / 2024"
    }
    
    if (selectedYear == "40") {
        four_three_three("Maignan", "Kounde", "T Hernandez", "Saliba", "Upamecano", "Tchouameni", "Griezmann", "Kante", "M Thuram", "Rabiot", "Mbappe")
        four_four_two2("Casteels", "Castagne", "Theate", "Vertonghen", "Faes", "De Bruyne", "Carrasco", "Onana", "Lukaku", "Openda", "Doku")
        flag1.src = "/football_img/logos/france.png"
        flag2.src = "/football_img/logos/belgium.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Didier Deschamps"
        manager2.textContent += "Domenico Tedesco"
        team1.textContent = "FRANCE"
        team2.textContent = "BELGIUM"
        score.textContent = "1 - 0"
        OT.innerHTML = ""
        goals1.innerHTML = "Vertonghen 85' (OG) ⚽"
        goals2.innerHTML = ""
        date.textContent = "01 / 07 / 2024"
    }

    if (selectedYear == "41") {
        four_two_three_one("D Costa", "Cancelo", "N Mendes", "K Pepe", "R Dias", "Palhinha", "B Silva", "Vitinha", "C Ronaldo", "B Fernandes", "R Leao")
        four_four_two2("Oblak", "Karnicnik", "Balkovec", "Bijol", "Drkusic", "Elsnik", "Stojanovic", "Cerin", "Sporar", "Sesko", "Mlakar")
        flag1.src = "/football_img/logos/portugal.png"
        flag2.src = "/football_img/logos/slovenia.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Roberto Martinez"
        manager2.textContent += "Matjaz Kek"
        team1.textContent = "PORTUGAL"
        team2.textContent = "SLOVENIA"
        score.textContent = "0 - 0"
        OT.innerHTML = "3-0 on penalties"
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "01 / 07 / 2024"
    }

    if (selectedYear == "42") {
        four_five_one("Nita", "Ratiu", "Mogos", "Burca", "Dragusin", "M Marin", "D Man", "R Marin", "Dragus", "Stanciu", "I Hagi")
        four_two_three_one2("Verbruggen", "Dumfries", "N Ake", "van Dijk", "de Vrij", "Reijnders", "Bergwijn", "Schouten", "Depay", "X Simons", "Gakpo")
        flag1.src = "/football_img/logos/romania.png"
        flag2.src = "/football_img/logos/netherlands.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Edward Iordanescu"
        manager2.textContent += "Ronald Koeman"
        team1.textContent = "ROMANIA"
        team2.textContent = "NETHERLANDS"
        score.textContent = "0 - 3"
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = "Gakpo 20' ⚽<br>Malen 83' ⚽<br>Malen 90+3' ⚽"
        date.textContent = "02 / 07 / 2024"
    }

    if (selectedYear == "43") {
        four_two_three_one("Pentz", "Posch", "Mwene", "Lienhart", "Danso", "Laimer", "Schmid", "Seiwald", "Arnautovic", "Baumgartner", "Sabitzer")
        three_four_three2("Gunok", "Muldur", "Kadioglu", "Bardakci", "Demiral", "Ayhan", "B Yilmaz", "Kokcu", "Guler", "Yuksek", "Yildiz")
        flag1.src = "/football_img/logos/austria.png"
        flag2.src = "/football_img/logos/turkey.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Ralf Rangnick"
        manager2.textContent += "Vincenzo Montella"
        team1.textContent = "AUSTRIA"
        team2.textContent = "TURKIYE"
        score.textContent = "1 - 2"
        OT.innerHTML = ""
        goals1.innerHTML = "Gregoritsch 66' ⚽"
        goals2.innerHTML = "Demiral 1' ⚽<br>Demiral 59' ⚽"
        date.textContent = "02 / 07 / 2024"
    }
    
    if (selectedYear == "44") {
        four_three_three("U Simon", "Carvajal", "Cucurella", "Laporte", "Le Normand", "Rodri", "Yamal", "Pedri", "Morata", "F Ruiz", "N Williams")
        four_two_three_one2("Neuer", "Kimmich", "Raum", "J Tah", "Rudiger", "Kroos", "Sane", "Can", "Havertz", "Gundogan", "Musiala")
        flag1.src = "/football_img/logos/spain.png"
        flag2.src = "/football_img/logos/germany.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Luis de la Fuente"
        manager2.textContent += "Julian Nagelsmann"
        team1.innerHTML = "SPAIN"
        team2.innerHTML = "GERMANY"
        score.textContent = "2 - 1"
        OT.innerHTML = "after extra time"
        goals1.innerHTML = "D Olmo 51' ⚽<br>M Merino 119' ⚽<br>Carvajal 120+6' 🟨🟥"
        goals2.innerHTML = "F Wirtz 89' ⚽"
        date.textContent = "05 / 07 / 2024"
    }

    if (selectedYear == "45") {
        four_two_three_one("D Costa", "Cancelo", "N Mendes", "K Pepe", "R Dias", "Palhinha", "B Silva", "Vitinha", "C Ronaldo", "B Fernandes", "R Leao")
        four_three_one_two2("Maignan", "Kounde", "T Hernandez", "Saliba", "Upamecano", "Tchouameni", "Griezmann", "Kante", "Mbappe", "Camavinga", "K Muani")
        flag1.src = "/football_img/logos/portugal.png"
        flag2.src = "/football_img/logos/france.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Roberto Martinez"
        manager2.textContent += "Didier Deschamps"
        team1.innerHTML = "PORTUGAL"
        team2.innerHTML = "FRANCE"
        score.textContent = "0 - 0"
        OT.innerHTML = "3-5 on penalties"
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "05 / 07 / 2024"
    }

    if (selectedYear == "46") {
        three_four_two_one("Pickford", "Saka", "Trippier", "Konsa", "Stones", "Walker", "Foden", "D Rice", "Kane", "Mainoo", "Bellingham")
        three_four_two_one2("Sommer", "Ndoye", "Aebischer", "R Rodriguez", "Akanji", "Schar", "Rieder", "Xhaka", "Embolo", "Freuler", "R Vargas")
        flag1.src = "/football_img/logos/england.png"
        flag2.src = "/football_img/logos/switzerland.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Gareth Southgate"
        manager2.textContent += "Murat Yakin"
        team1.innerHTML = "ENGLAND"
        team2.innerHTML = "SWITZERLAND"
        score.textContent = "1 - 1"
        OT.innerHTML = "5-3 on penalties"
        goals1.innerHTML = "Saka 80' ⚽"
        goals2.innerHTML = "Embolo 75' ⚽"
        date.textContent = "06 / 07 / 2024"
    }

    if (selectedYear == "47") {
        four_two_three_one("Verbruggen", "Dumfries", "N Ake", "van Dijk", "de Vrij", "Reijnders", "Bergwijn", "Schouten", "Depay", "X Simons", "Gakpo")
        five_four_one2("Gunok", "Muldur", "Kadioglu", "Bardakci", "Akaydin", "Ayhan", "Guler", "Calhanoglu", "B Yilmaz", "Ozcan", "Yildiz")
        flag1.src = "/football_img/logos/netherlands.png"
        flag2.src = "/football_img/logos/turkey.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Ronald Koeman"
        manager2.textContent += "Vincenzo Montella"
        team1.innerHTML = "NETHERLANDS"
        team2.innerHTML = "TURKIYE"
        score.textContent = "2 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = "de Vrij 70' ⚽<br>Muldur 76' (OG) ⚽"
        goals2.innerHTML = "Akaydin 35' ⚽<br>Yildirim 90+6' 🟥"
        date.textContent = "06 / 07 / 2024"
    } 
    
    if (selectedYear == "48") {
        four_two_three_one("U Simon", "J Navas", "Cucurella", "Laporte", "Nacho", "F Ruiz", "Yamal", "Rodri", "Morata", "D Olmo", "N Williams")
        four_three_three2("Maignan", "Kounde", "T Hernandez", "Saliba", "Upamecano", "Tchouameni", "O Dembele", "Kante", "K Muani", "Rabiot", "Mbappe")
        flag1.src = "/football_img/logos/spain.png"
        flag2.src = "/football_img/logos/france.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Luis de la Fuente"
        manager2.textContent += "Didier Deschamps"
        team1.innerHTML = "SPAIN"
        team2.innerHTML = "FRANCE"
        score.textContent = "2 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = "Yamal 21' ⚽<br>D Olmo 25' ⚽"
        goals2.innerHTML = "K Muani 9' ⚽"
        date.textContent = "09 / 07 / 2024"
    }

    if (selectedYear == "49") {
        four_two_three_one("Verbruggen", "Dumfries", "N Ake", "van Dijk", "de Vrij", "Reijnders", "Malen", "Schouten", "Depay", "X Simons", "Gakpo")
        three_four_two_one2("Pickford", "Saka", "Trippier", "Guehi", "Stones", "Walker", "Foden", "D Rice", "Kane", "Mainoo", "Bellingham")
        flag1.src = "/football_img/logos/netherlands.png"
        flag2.src = "/football_img/logos/england.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Ronald Koeman"
        manager2.textContent += "Gareth Southgate"
        team1.innerHTML = "NETHERLANDS"
        team2.innerHTML = "ENGLAND"
        score.textContent = "1 - 2"
        OT.innerHTML = ""
        goals1.innerHTML = "X Simons 7' ⚽"
        goals2.innerHTML = "Kane 18' (P) ⚽<br>O Watkins 90' ⚽"
        date.textContent = "10 / 07 / 2024"
    }

    if (selectedYear == "50") {
        four_two_three_one("U Simon", "Carvajal", "Cucurella", "Laporte", "Le Normand", "F Ruiz", "Yamal", "Rodri", "Morata", "D Olmo", "N Williams")
        four_two_three_one2("Pickford", "Walker", "Shaw", "Guehi", "Stones", "D Rice", "Saka", "Mainoo", "Kane", "Foden", "Bellingham")
        flag1.src = "/football_img/logos/spain.png"
        flag2.src = "/football_img/logos/england.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Luis de la Fuente"
        manager2.textContent += "Gareth Southgate"
        team1.innerHTML = "SPAIN"
        team2.innerHTML = "ENGLAND"
        score.textContent = "2 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = "N Williams 47' ⚽<br>Oyarzabal 86' ⚽"
        goals2.innerHTML = "C Palmer 73' ⚽"
        date.textContent = "14 / 07 / 2024"
    }
}