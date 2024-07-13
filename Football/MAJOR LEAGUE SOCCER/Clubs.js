import {
    four_two_three_one,
    four_three_three,
    four_three_three_false_nine,
    four_four_two,
    four_two_two_two,
    four_one_two_one_two,
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
} from '/Formations.js'

const LCM = document.querySelector('.LCM');
const LCM2 = document.querySelector('.LCM2');
const CM = document.querySelector('.CM');
const CM2 = document.querySelector('.CM2');
const RCM = document.querySelector('.RCM');
const RCM2 = document.querySelector('.RCM2');
const DM = document.querySelector('.DM');
const DM2 = document.querySelector('.DM2');

const yearSelector = document.querySelector(".yearSelector");
const sidepic = document.querySelector(".sidepic");
const manager = document.querySelector(".manager")

yearSelector.addEventListener("change", () => {

    LCM.style.top = "57%"
    LCM2.style.top = "35.5%"
    RCM.style.top = "57%"
    RCM2.style.top = "35.5%"
    CM.style.top = "60.5%"
    CM2.style.top = "39%"
    DM.style.top = "71%"
    DM2.style.top = "49%"

    updatePlayerInfo();
});

let selectedYear = 0;

function updatePlayerInfo() {

    selectedYear = yearSelector.value;
    manager.textContent = "Head Coach: "

    if (selectedYear == "0") {
        four_two_three_one("B Guzan", "B Lennon", "C Wiley", "D Williams", "N Cobb", "B Slisz", "S Lobjanidze", "T Muyumba", "D Rios", "T Almada", "X Silva");
        sidepic.src = "/football_img/logos/mls/atlanta.png";
        manager.textContent += "	Rob Valentino";
    }

    if (selectedYear == "1") {
        four_two_three_one("B Stuver", "J Gallagher", "G Biro", "J Cascante", "B Hines-Ike", "Da Pereira", "O Wolff", "A Ring", "D Rubio", "S Driussi", "J Obrian");
        sidepic.src = "/football_img/logos/mls/austin.png";
        manager.textContent += "Josh Wolff";
    }

    if (selectedYear == "2") {
        three_five_two("K Kahlina", "N Byrne", "J Uronen", "A Malanda", "A Privett", "Jo Pedro", "D Diani", "B Dejaegere", "P Agyemang", "A Westwood", "K Vargas");
        sidepic.src = "/football_img/logos/mls/charlotte.png";
        manager.textContent += "Dean Smith";
    }

    if (selectedYear == "3") {
        four_two_three_one("C Brady", "A Arigoni", "A Gutman", "C Teran", "R Czichos", "K Acosta", "F Herbers", "B Gutierrez", "H Cuypers", "X Shaqiri", "M Haile-Selassie");
        sidepic.src = "/football_img/logos/mls/chicago.png";
        manager.textContent += "Frank Klopas";
    }

    if (selectedYear == "4") {
        three_four_two_one("J Sirois", "Ruan", "A Lassiter", "G Campbell", "J Waterman", "G Corbo", "D Yankov", "S Piette", "S Ibrahim", "M Choiniere", "B Duke");
        sidepic.src = "/football_img/logos/mls/montreal.png";
        manager.textContent += "Laurent Courtois";
    }

    if (selectedYear == "5") {
        three_five_two("R Celentano", "D Yedlin", "L Orellano", "M Miazga", "I Murphy", "M Robinson", "O Nwobodo", "P Bucha", "L Acosta", "Y Kubo", "C Baird");
        sidepic.src = "/football_img/logos/mls/cincinnati.png";
        manager.textContent += "Pat Noonan";
    }

    if (selectedYear == "6") {
        four_two_three_one("Z Steffen", "K Rosenberry", "S Vines", "M Bombito", "A Maxsø", "O Larraz", "O Fernandez", "C Bassett", "R Navarro", "D Mihailovic", "K Cabral");
        sidepic.src = "/football_img/logos/mls/colorado.png";
        manager.textContent += "Chris Armas";
    }

    if (selectedYear == "7") {
        three_four_two_one("P Schulte", "M Farsi", "M Amundsen", "Y Cheberko", "R Camacho", "S Moreira", "Y Yeboah", "A Morris", "Cucho", "D Nagbe", "D Rossi");
        sidepic.src = "/football_img/logos/mls/columbus.png";
        manager.textContent += "Wilfried Nancy";
    }

    if (selectedYear == "8") {
        three_five_two("A Bono", "J Stroud", "C Dajome", "C McVey", "L Bartlett", "Aa Herrera", "M Peltola", "G Pirani", "T Ku-DiPietro", "M Klich", "C Benteke");
        sidepic.src = "/football_img/logos/mls/dc united.png";
        manager.textContent += "Troy Lesesne";
    }

    if (selectedYear == "9") {
        three_four_two_one("M Paes", "E Twumasi", "M Farfan", "S Junqua", "S Ibeagha", "N Tafari", "P Arriola", "A Illarramendi", "P Musa", "L Fraser", "B Kamungo");
        sidepic.src = "/football_img/logos/mls/dallas.png";
        manager.textContent += "Peter Luccin";
    }

    if (selectedYear == "10") {
        four_two_three_one("S Clark", "G Dorsey", "F Escobar", "E Sviatchenko", "Micael", "Artur", "A Carrasquilla", "H Herrera", "I Aliyu", "S Kowalczyk", "A Bassi");
        sidepic.src = "/football_img/logos/mls/houston.png";
        manager.textContent += "Ben Olsen";
    }

    if (selectedYear == "11") {
        four_three_three("D Callender", "M Weigandt", "J Alba", "S Kryvtsov", "T Aviles", "S Busquets", "L Messi", "J Gressel", "L Suarez", "D Gomez", "R Taylor");
        sidepic.src = "/football_img/logos/mls/miami.png";
        manager.textContent += "Gerardo Martino";
    }

    if (selectedYear == "12") {
        four_three_three("J McCarthy", "M Yamane", "J Aude", "M Caceres", "M Yoshida", "E Cerrillo", "J Paintsil", "M Delgado", "D Joveljic", "R Puig", "G Pec");
        sidepic.src = "/football_img/logos/mls/la galaxy.png";
        manager.textContent += "Greg Vanney";
    }

    if (selectedYear == "13") {
        four_three_three("H Lloris", "J Murillo", "S Palencia", "I Sanchez", "A Long", "E Atuesta", "C Olivera", "M Bogusz", "K Kamara", "T Tillman", "D Bouanga");
        sidepic.src = "/football_img/logos/mls/lafc.png";
        manager.textContent += "Steve Cherundolo";
    }

    if (selectedYear == "14") {
        four_three_three("D St Clair", "DJ Taylor", "D Padelford", "M Tapias", "M Boxall", "W Trapp", "R Lod", "H Dotson", "SB Jeong", "C Clark", "J Rosales");
        sidepic.src = "/football_img/logos/mls/minnesota.png";
        manager.textContent += "Eric Ramsay";
    }

    if (selectedYear == "15") {
        four_two_three_one("J Willis", "S Moore", "D Lovitz", "J Bauer", "J Maher", "S Davis", "A Muyl", "D Yearwood", "S Surridge", "H Mukhtar", "T Boyd");
        sidepic.src = "/football_img/logos/mls/nashville.png";
        manager.textContent += "Rumba Munthali";
    }

    if (selectedYear == "16") {
        four_two_three_one("H Ravas", "N Lima", "D Jones", "H Kessler", "D Romney", "M Polster", "E Bajraktarevic", "I Harkes", "G Vrioni", "C Gil", "T Chancalay");
        sidepic.src = "/football_img/logos/mls/new england.png";
        manager.textContent += "Caleb Porter";
    }

    if (selectedYear == "17") {
        four_two_three_one("M Freese", "M Ilenic", "K O'Toole", "B Risa", "T Martins", "K Parks", "M Ilenic", "J Sands", "M Bakrar", "S Rodriguez", "H Wolf");
        sidepic.src = "/football_img/logos/mls/nyc.png";
        manager.textContent += "Nick Cushing";
    }

    if (selectedYear == "18") {
        four_four_two("C Coronel", "D Nealis", "J Tolkin", "N Eile", "S Nealis", "D Edelman", "L Morgan", "F Amaya", "D Vanzeir", "E Forsberg", "E Manoel");
        sidepic.src = "/football_img/logos/mls/new york.png";
        manager.textContent += "Sandro Schwarz";
    }

    if (selectedYear == "19") {
        four_two_three_one("P Gallese", "D Thorhallsson", "R Santos", "D Brekalo", "R Jansson", "W Cartagena", "Fa Torres", "C Araujo", "L Muriel", "N Lodeiro", "I Angulo");
        sidepic.src = "/football_img/logos/mls/orlando.png";
        manager.textContent += "Óscar Pareja";
    }

    if (selectedYear == "20") {
        four_three_one_two("O Semmle", "N Harriel", "K Wagner", "J Elliott", "J Glesnes", "A Bedoya", "Q Sullivan", "J McGlynn", "M Uhre", "D Gazdag", "J Carranza");
        sidepic.src = "/football_img/logos/mls/philadelphia.png";
        manager.textContent += "Jim Curtin";
    }

    if (selectedYear == "21") {
        four_two_three_one("M Crepeau", "J Mosquera", "Cl Bravo", "K Miller", "D Zuparic", "D Chara", "Antony A", "Evander", "F Mora", "S Moreno", "Jo Rodriguez");
        sidepic.src = "/football_img/logos/mls/portland.png";
        manager.textContent += "Phil Neville";
    }

    if (selectedYear == "22") {
        four_two_three_one("Z MacMath", "B Hidalgo", "A Brody", "J Glad", "B Vera", "E Eneli", "C Gomez", "B Ojeda", "C Arango", "M Crooks", "D Luna");
        sidepic.src = "/football_img/logos/mls/real salt lake.png";
        manager.textContent += "Pablo Mastroeni";
    }

    if (selectedYear == "23") {
        four_three_three("W Yarbrough", "C Akapo", "V Costa", "T Beason", "Rodrigues", "C Gruezo", "C Espinoza", "N Tsakiris", "J Ebobisse", "J Yueill", "A Pellegrino");
        sidepic.src = "/football_img/logos/mls/san jose.png";
        manager.textContent += "Ian Russell";
    }

    if (selectedYear == "24") {
        four_two_three_one("S Frei", "A Roldan", "Nouhou", "Y Andrade", "J Ragen", "O Vargas", "C Roldan", "J Paulo", "R Ruidiaz", "A Rusnak", "J Morris");
        sidepic.src = "/football_img/logos/mls/seattle.png";
        manager.textContent += "Brian Schmetzer";
    }

    if (selectedYear == "25") {
        four_three_three("T Melia", "J Davis", "T Leibold", "A Fontas", "D Rosero", "N Radoja", "J Russell", "E Thommy", "W Agada", "A Pulido", "D Salloi");
        sidepic.src = "/football_img/logos/mls/kansas.png";
        manager.textContent += "Peter Vermes";
    }

    if (selectedYear == "26") {
        four_two_three_one("R Burki", "T Totland", "A Markanich", "J Nilsson", "T Parker", "C Durkin", "I Vassilev", "E Lowen", "J Klauss", "A Jackson", "C Pompeu");
        sidepic.src = "/football_img/logos/mls/st louis.png";
        manager.textContent += "John Hackworth";
    }

    if (selectedYear == "27") {
        three_four_two_one("S Johnson", "Marshall-Rutty", "R Petretta", "K Long", "N Gomis", "S Rosted", "F Bernardeschi", "D Flores", "P Owusu", "M Longstaff", "A Coello");
        sidepic.src = "/football_img/logos/mls/toronto.png";
        manager.textContent += "John Herdman";
    }

    if (selectedYear == "28") {
        three_four_three("Y Takaoka", "J Brown", "R Raposo", "T Blackmon", "M Laborda", "R Veselinovic", "P Vite", "A Cubas", "Br White", "A Schopf", "R Gauld");
        sidepic.src = "/football_img/logos/mls/vancouver.png";
        manager.textContent += "Vanni Sartini";
    }
}