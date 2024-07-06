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
    four_three_one_two,
    four_three_one_two2,
    four_three_two_one,
    four_three_two_one2,
    four_one_three_two,
    four_one_three_two2,
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

const yearSelector = document.querySelector(".yearSelector");
const sidepic = document.querySelector(".sidepic");
const flag1 = document.querySelector(".flag1")
const flag2 = document.querySelector(".flag2")
const manager1 = document.querySelector(".manager1")
const manager2 = document.querySelector(".manager2")
const score = document.querySelector(".score");
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
    flag1.style.borderRadius = "100%"
    flag2.style.borderRadius = "100%"
    flag1.style.left = "23%"
    flag2.style.right = "23%"

    if (selectedYear == "0") {
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
        goals1.innerHTML = "Freuler 37'<br>R Vargas 46'"
        goals2.innerHTML = ""
        date.textContent = "29 / 06 / 2024"
    }

    if (selectedYear == "1") {
        four_two_three_one("Neuer", "Kimmich", "Raum", "Schlotterbeck", "Rudiger", "Kroos", "Sane", "Andrich", "Havertz", "Gundogan", "Musiala")
        three_four_two_one2("K Schmeichel", "A Bah", "Maehle", "Christensen", "Vestergaard", "J Andersen", "Olsen", "Delaney", "Hojlund", "Hojbjerg", "Eriksen")
        flag1.src = "/football_img/logos/germany.png"
        flag2.src = "/football_img/logos/denmark.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Julian Nagelsmann"
        manager2.textContent += "Kasper Hjulmand"
        team1.textContent = "GERMANY"
        team2.textContent = "DENMARK"
        score.textContent = "2 - 0"
        OT.innerHTML = ""
        goals1.innerHTML = "Havertz 53' (P)<br>Musiala 68'"
        goals2.innerHTML = ""
        date.textContent = "29 / 06 / 2024"
    }

    if (selectedYear == "2") {
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
        goals1.innerHTML = "Bellingham 90+5'<br>Kane 91'"
        goals2.innerHTML = "Schranz 25'"
        date.textContent = "30 / 06 / 2024"
    }

    if (selectedYear == "3") {
        four_three_three("U Simon", "Carvajal", "Cucurella", "Laporte", "Le Normand", "Rodri", "Yamal", "Pedri", "Morata", "F Ruiz", "N Williams")
        five_three_two2("Mamardashvili", "Kakabadze", "Lochoshvili", "Dvali", "Kashia", "Gvelesiani", "Kiteishvili", "Chakvetadze","Kvaratskhelia", "Kochorashvili", "Mikautadze")
        flag1.src = "/football_img/logos/spain.png"
        flag2.src = "/football_img/logos/georgia.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Luis de la Fuente"
        manager2.textContent += "Willy Sagnol"
        team1.textContent = "SPAIN"
        team2.textContent = "GEORGIA"
        score.textContent = "4 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = "Rodri 39'<br>F Ruiz 51'<br>N Williams 75'<br>D Olmo 83'"
        goals2.innerHTML = "Le Normand 18' (OG)"
        date.textContent = "30 / 06 / 2024"
    }

    if (selectedYear == "4") {
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
        goals1.innerHTML = "Vertonghen 85' (OG)"
        goals2.innerHTML = ""
        date.textContent = "01 / 07 / 2024"
    }

    if (selectedYear == "5") {
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

    if (selectedYear == "6") {
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
        goals2.innerHTML = "Gakpo 20'<br>Malen 83'<br>Malen 90+3'"
        date.textContent = "02 / 07 / 2024"
    }

    if (selectedYear == "7") {
        four_two_three_one("Pentz", "Posch", "Mwene", "Lienhart", "Danso", "Laimer", "Schmid", "Seiwald", "Arnautovic", "Baumgartner", "Sabitzer")
        three_four_three2("Gunok", "Muldur", "Kadioglu", "Bardakci", "Demiral", "Ayhan", "Yilmaz", "Kokcu", "Guler", "Yuksek", "Yildiz")
        flag1.src = "/football_img/logos/austria.png"
        flag2.src = "/football_img/logos/turkey.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Ralf Rangnick"
        manager2.textContent += "Vincenzo Montella"
        team1.textContent = "AUSTRIA"
        team2.textContent = "TURKEY"
        score.textContent = "1 - 2"
        OT.innerHTML = ""
        goals1.innerHTML = "Gregoritsch 66'"
        goals2.innerHTML = "Demiral 1'<br>Demiral 59'"
        date.textContent = "02 / 07 / 2024"
    }
}