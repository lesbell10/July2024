import {
    four_two_three_one,
    four_three_three,
    four_three_three_false_nine,
    four_four_two,
    four_two_two_two,
    four_three_one_two,
    four_three_two_one,
    four_one_three_two,
    four_four_one_one,
    four_five_one,
    three_four_two_one,
    three_four_three,
    three_four_one_two,
    three_five_two,
    five_two_two_one,
    five_two_three,
    five_two_one_two,
    five_three_two,
    five_four_one,
} from '../Formations.js'

const yearSelector = document.querySelector(".yearSelector");
const sidepic = document.querySelector(".sidepic");
const manager = document.querySelector(".manager")

yearSelector.addEventListener("change", () => {
    updatePlayerInfo();
});

let selectedYear = 0;

function updatePlayerInfo() {

    selectedYear = yearSelector.value;
    manager.textContent = "Head Coach: "

    if (selectedYear == "0") {
        four_three_three("Strakosha", "Hysaj", "Mitaj", "Djimsiti", "Ajeti", "Ramadani", "Asani", "Laci", "Broja", "Asllani", "Bajrami");
        sidepic.src = "/football_img/logos/albania.png";
        manager.textContent += "Sylvinho";
    }

    if (selectedYear == "1") {
        four_two_three_one("Pentz", "Posch", "Prass", "Wober", "Lienhart", "Grillitsch", "Schmid", "Seiwald", "Arnautovic", "Baumgartner", "Sabitzer");
        sidepic.src = "/football_img/logos/austria.png";
        manager.textContent += "Ralf Rangnick";
    }

    if (selectedYear == "2") {
        four_two_three_one("Casteels", "Castagne", "Theate", "Vertonghen", "Faes", "A Onana", "Doku", "Tielemans", "Lukaku", "De Bruyne", "Trossard");
        sidepic.src = "/football_img/logos/belgium.png";
        manager.textContent += "Domenico Tedesco";
    }

    if (selectedYear == "3") {
        four_three_three("Livakovic", "Stanisic", "Gvardiol", "Pongracic", "Sutalo", "Brozovic", "Majer", "Modric", "Budimir", "Kovacic", "Kramaric");
        sidepic.src = "/football_img/logos/croatia.png";
        manager.textContent += "Zlatko Dalic";
    }

    if (selectedYear == "4") {
        three_four_two_one("Stanek", "Coufal", "Sulc", "Krejci", "Hranac", "Holes", "Barak", "Soucek", "Schick", "Provod", "Hlozek");
        sidepic.src = "/football_img/logos/czechia.png";
        manager.textContent += "Ivan Hasek";
    }

    if (selectedYear == "5") {
        three_four_one_two("K Schmeichel", "A Bah", "Kristiansen", "Vestergaard", "Christensen", "J Andersen", "Eriksen", "Hojbjerg", "Hojlund", "Hjulmand", "Wind");
        sidepic.src = "/football_img/logos/denmark.png";
        manager.textContent += "Kasper Hjulmand";
    }

    if (selectedYear == "6") {
        four_two_three_one("Pickford", "Walker", "Trippier", "Guehi", "Stones", "D Rice", "Saka", "Alexander-Arnold", "Kane", "Bellingham", "Foden");
        sidepic.src = "/football_img/logos/england.png";
        manager.textContent += "Gareth Southgate";
    }

    if (selectedYear == "7") {
        four_two_three_one("Maignan", "Kounde", "T Hernandez", "Saliba", "Upamecano", "Rabiot", "O Dembele", "Kante", "Mbappe", "Griezmann", "M Thuram");
        sidepic.src = "/football_img/logos/france.png";
        manager.textContent += "Didier Deschamps";
    }

    if (selectedYear == "8") {
        three_five_two("Mamardashvili", "Kakabadze", "Tsitaishvili", "Dvali", "Kashia", "Kvirkvelia", "Mekvabishvili", "Chakvetadze", "Kvaratskhelia", "Kochorashvili", "Mikautadze");
        sidepic.src = "/football_img/logos/georgia.png";
        manager.textContent += "Willy Sagnol";
    }

    if (selectedYear == "9") {
        four_two_three_one("Neuer", "Kimmich", "Mittelstadt", "J Tah", "Rudiger", "Kroos", "Musiala", "Andrich", "Havertz", "Gundogan", "Wirtz");
        sidepic.src = "/football_img/logos/germany.png";
        manager.textContent += "Julian Nagelsmann";
    }

    if (selectedYear == "10") {
        three_four_two_one("Gulacsi", "Fiola", "Kerkez", "Szalai", "Orban", "A Lang", "Sallai", "Schafer", "Varga", "A Nagy", "Szoboszlai");
        sidepic.src = "/football_img/logos/hungary.png";
        manager.textContent += "Marco Rossi";
    }

    if (selectedYear == "11") {
        four_three_three("Donnarumma", "Di Lorenzo", "Dimarco", "Calafiori", "Bastoni", "Jorginho", "Chiesa", "Frattesi", "Scamacca", "Barella", "Pellegrini");
        sidepic.src = "/football_img/logos/italy.png";
        manager.textContent += "Luciano Spalletti";
    }

    if (selectedYear == "12") {
        four_two_three_one("Verbruggen", "Dumfries", "N Ake", "van Dijk", "de Vrij", "Veerman", "X Simons", "Schouten", "Depay", "Reijnders", "Gakpo");
        sidepic.src = "/football_img/logos/netherlands.png";
        manager.textContent += "Ronald Koeman";
    }

    if (selectedYear == "13") {
        three_five_two("Szczesny", "Frankowski", "Zalewski", "Kiwior", "Dawidowicz", "J Bednarek", "Romanczuk", "S Szymanski", "Buksa", "Zielinski", "Lewandowski");
        sidepic.src = "/football_img/logos/poland.png";
        manager.textContent += "Michal Probierz";
    }

    if (selectedYear == "14") {
        three_four_two_one("D Costa", "Dalot", "Cancelo", "N Mendes", "K Pepe", "R Dias", "B Silva", "B Fernandes", "C Ronaldo", "Vitinha", "R Leao");
        sidepic.src = "/football_img/logos/portugal.png";
        manager.textContent += "Roberto Martinez";
    }

    if (selectedYear == "15") {
        four_five_one("Nita", "Ratiu", "Bancu", "Burca", "Dragusin", "M Marin", "D Man", "R Marin", "Dragus", "Stanciu", "I Hagi");
        sidepic.src = "/football_img/logos/romania.png";
        manager.textContent += "Edward Iordanescu";
    }

    if (selectedYear == "16") {
        three_four_two_one("Gunn", "Ralston", "Robertson", "Tierney", "Hendry", "Porteus", "McGinn", "C McGregor", "C Adams", "McTominay", "Christie");
        sidepic.src = "/football_img/logos/scotland.png";
        manager.textContent += "Steve Clarke";
    }

    if (selectedYear == "17") {
        three_four_two_one("Rajkovic", "Zivkovic", "Kostic", "Pavlovic", "Milenkovic", "Veljkovic", "Milinkovic-Savic", "N Gudelj", "Mitrovic", "Lukic", "Vlahovic");
        sidepic.src = "/football_img/logos/serbia.png";
        manager.textContent += "Dragan Stojkovic";
    }

    if (selectedYear == "18") {
        four_three_three("Dubravka", "Pekarik", "Hancko", "Skriniar", "Vavro", "Lobotka", "Schranz", "Kucka", "Bozenik", "Duda", "Haraslin");
        sidepic.src = "/football_img/logos/slovakia.png";
        manager.textContent += "Francesco Calzona";
    }

    if (selectedYear == "19") {
        four_four_two("Oblak", "Karnicnik", "Janza", "Bijol", "Drkusic", "Elsnik", "Stojanovic", "Cerin", "Sporar", "Sesko", "Mlakar");
        sidepic.src = "/football_img/logos/slovenia.png";
        manager.textContent += "Matjaz Kek";
    }

    if (selectedYear == "20") {
        four_three_three("U Simon", "Carvajal", "Cucurella", "Laporte", "Le Normand", "Rodri", "Yamal", "Pedri", "Morata", "F Ruiz", "N Williams");
        sidepic.src = "/football_img/logos/spain.png";
        manager.textContent += "Luis de la Fuente";
    }

    if (selectedYear == "21") {
        three_four_two_one("Sommer", "Widmer", "Aebischer", "R Rodriguez", "Akanji", "Schar", "Shaqiri", "Xhaka", "Embolo", "Freuler", "Ndoye");
        sidepic.src = "/football_img/logos/switzerland.png";
        manager.textContent += "Murat Yakin";
    }

    if (selectedYear == "22") {
        four_two_three_one("Gunok", "Muldur", "Kadioglu", "Bardakci", "Akaydin", "Ayhan", "Guler", "Calhanoglu", "Yilmaz", "Kokcu", "Yildiz");
        sidepic.src = "/football_img/logos/turkey.png";
        manager.textContent += "Vincenzo Montella";
    }

    if (selectedYear == "23") {
        four_two_three_one("Lunin", "Konoplya", "Zinchenko", "Matviyenko", "Zabarnyi", "Stepanenko", "Tsygankov", "Shaparenko", "Dovbyk", "Sudakov", "Mudryk");
        sidepic.src = "/football_img/logos/ukraine.png";
        manager.textContent += "Serhiy Rebrov";
    }
}