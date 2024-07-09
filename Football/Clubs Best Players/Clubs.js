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
} from '/Formations.js'

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
        four_two_three_one("Maignan", "Calabria", "T Hernandez", "Kjaer", "Tomori", "Bennacer", "Chukwueze", "Loftus-Cheek", "Giroud", "Pulisic", "R Leao")
        sidepic.src = "/football_img/logos/ac milan.webp";
        manager.textContent += "Paulo Fonseca"
    }

    if (selectedYear == "1") {
        four_two_three_one("Rulli", "Rensch", "Sosa", "Medic", "Sutalo", "J Henderson", "Berghuis", "van den Boomen", "Brobbey", "Akpom", "Bergwijn");
        sidepic.src = "/football_img/logos/ajax.webp";
        manager.textContent += "Francesco Farioli";
    }

    if (selectedYear == "2") {
        four_three_three("Raya", "B White", "Zinchenko", "Gabriel M", "Saliba", "Partey", "Saka", "Rice", "G Jesus", "Odegaard", "Martinelli")
        sidepic.src = "/football_img/logos/arsenal.webp";
        manager.textContent += "Mikel Arteta"
    }

    if (selectedYear == "3") {
        four_three_three("Rui Patricio", "Karsdorp", "Spinazzola", "G Mancini", "Smalling", "Cristante", "Dybala", "R Sanches", "Lukaku", "Pellegrini", "Azmoun")
        sidepic.src = "/football_img/logos/as roma.webp";
        manager.textContent += "Daniele De Rossi"
    }

    if (selectedYear == "4") {
        three_four_two_one("Carnesecchi", "Hateboer", "Zappacosta", "Kolasinac", "Toloi", "Djimsiti", "Lookman", "Koopmeiners", "Scamacca", "Ederson J", "Pasalic");
        sidepic.src = "/football_img/logos/atalanta.webp";
        manager.textContent += "Gian Piero Gasperini";
    }

    if (selectedYear == "5") {
        three_five_two("Oblak", "Molina", "Lino", "Hermoso", "Witsel", "J Gimenez", "Koke", "M Llorente", "Morata", "De Paul", "Griezmann")
        sidepic.src = "/football_img/logos/atletico madrid.webp";
        manager.textContent += "Diego Simeone"
    }

    if (selectedYear == "6") {
        four_three_three("ter Stegen", "Cancelo", "Balde", "Araujo", "Kounde", "F de Jong", "Yamal", "Gundogan", "Lewandowski", "Pedri", "Gavi")
        sidepic.src = "/football_img/logos/barcelona.webp";
        manager.textContent += "Hansi Flick"
    }

    if (selectedYear == "7") {
        three_four_two_one("Hradecky", "Frimpong", "Grimaldo", "Kossounou", "J Tah", "Tapsoda", "Hofmann", "Xhaka", "Schick", "Andrich", "Wirtz");
        sidepic.src = "/football_img/logos/leverkusen.webp";
        manager.textContent += "Xabi Alonso";
    }

    if (selectedYear == "8") {
        four_two_three_one("Neuer", "Laimer", "A Davies", "Min Jae", "de Ligt", "Goretzka", "Sane", "Kimmich", "Kane", "Musiala", "Coman")
        sidepic.src = "/football_img/logos/bayern munich.webp";
        manager.textContent += "Vincent Kompany"
    }

    if (selectedYear == "9") {
        four_two_three_one("Trubin", "A Bah", "Aurnes", "A Silva", "Otamendi", "Kokcu", "Di Maria", "J Neves", "A Cabral", "Rafa", "D Neres");
        sidepic.src = "/football_img/logos/benfica.webp";
        manager.textContent += "Roger Schmidt";
    }

    if (selectedYear == "10") {
        four_three_three("Gunok", "Svensson", "Masuaku", "Worrall", "Colley", "Al-Musrati", "Ghezzal", "G Fernandes", "Aboubakar", "Oxlade-C", "Rashica");
        sidepic.src = "/football_img/logos/besiktas.png";
        manager.textContent += "Giovanni van Bronckhorst";
    }

    if (selectedYear == "11") {
        four_two_three_one("Kobel", "Sule", "Maatsen", "Schlotterbeck", "Hummels", "Can", "Malen", "Sabitzer", "Fullkrug", "Brandt", "Sancho");
        sidepic.src = "/football_img/logos/dortmund.webp";
        manager.textContent += "Nuri Sahin";
    }

    if (selectedYear == "12") {
        four_three_three("Hart", "Johnston", "G Taylor", "Scales", "Carter-Vickers", "C McGregor", "Maeda", "Hatate", "Furuhashi", "O'Riley", "Palma");
        sidepic.src = "/football_img/logos/celtic.png";
        manager.textContent += "Brendan Rodgers";
    }

    if (selectedYear == "13") {
        four_two_three_one("R Sanchez", "R James", "Chilwell", "Disasi", "T Silva", "Caicedo", "Palmer", "E Fernandez", "N Jackson", "Gallagher", "Sterling")
        sidepic.src = "/football_img/logos/chelsea.webp"
        manager.textContent += "Enzo Maresca"
    }

    if (selectedYear == "14") {
        three_four_two_one("Trapp", "Ebimbe", "Nkounkou", "Pacho", "Koch", "Hasebe", "Gotze", "Skhiri", "Kalajdzic", "van de Beek", "Marmoush");
        sidepic.src = "/football_img/logos/frankfurt.webp";
        manager.textContent += "Dino Toppmoller";
    }

    if (selectedYear == "15") {
        four_two_three_one("Livakovic", "Osayi-Samuel", "Oosterwolde", "Becao", "Bonucci", "Fred P", "Kahveci", "Krunic", "Dzeko", "Szymanski", "Tadic");
        sidepic.src = "/football_img/logos/fenerbahce.png";
        manager.textContent += "Jose Mourinho";
    }

    if (selectedYear == "16") {
        four_two_three_one("Terracciano", "Dodo", "Biraghi", "L Ranieri", "Milenkovic", "M Lopez", "Kouame", "Arthur M", "Belotti", "Bonaventura", "N Gonzalez");
        sidepic.src = "/football_img/logos/fiorentina.webp";
        manager.textContent += "Raffaele Palladino";
    }

    if (selectedYear == "17") {
        four_two_three_one("Muslera", "Aurier", "B Yilmaz", "Nelsson", "Bardakci", "Torreira", "Ziyech", "Demirbay", "Icardi", "Mertens", "Zaha");
        sidepic.src = "/football_img/logos/galatasaray.png";
        manager.textContent += "Okan Buruk";
    }

    if (selectedYear == "18") {
        three_five_two("Sommer", "Dumfries", "Dimarco", "Bastoni", "Acerbi", "Pavard", "Calhanoglu", "Barella", "M Thuram", "Mkhitaryan", "La Martinez")
        sidepic.src = "/football_img/logos/inter milan.webp";
        manager.textContent += "Simone Inzaghi"
    }

    if (selectedYear == "19") {
        three_five_two("Szczesny", "Cambiaso", "Kostic", "Gatti", "Bremer", "Danilo", "Locatelli", "McKennie", "Chiesa", "Rabiot", "Vlahovic")
        sidepic.src = "/football_img/logos/juventus.webp";
        manager.textContent += "Thiago Motta"
    }

    if (selectedYear == "20") {
        four_three_three("Provedel", "Lazzari", "Marusic", "Romagnoli", "Casale", "Guendouzi", "F Anderson", "L Alberto", "Immobile", "Kamada", "Zaccagni");
        sidepic.src = "/football_img/logos/lazio.webp";
        manager.textContent += "Marco Baroni";
    }

    if (selectedYear == "21") {
        four_three_three("Alisson", "Alexander-Arnold", "Robertson", "Konate", "van Dijk", "Endo", "Salah", "Mac Allister", "D Nunez", "Szoboszlai", "L Diaz")
        sidepic.src = "/football_img/logos/liverpool.webp";
        manager.textContent += "Arne Slot"
    }

    if (selectedYear == "22") {
        four_three_three("A Lopes", "Maitland-Niles", "Tagliafico", "O'Brien", "Caleta-Car", "Matic", "Cherki", "O Mangala", "Lacazette", "Caqueret", "Benrahma");
        sidepic.src = "/football_img/logos/lyon.webp";
        manager.textContent += "Pierre Sage";
    }

    if (selectedYear == "23") {
        four_two_three_one("Ederson", "Walker", "Gvardiol", "Stones", "R Dias", "Rodri", "Foden", "B Silva", "Haaland", "De Bruyne", "Grealish")
        sidepic.src = "/football_img/logos/man city.webp";
        manager.textContent += "Pep Guardiola"
    }

    if (selectedYear == "24") {
        four_two_three_one("Onana", "Dalot", "Shaw", "Li Martinez", "Varane", "Casemiro", "Garnacho", "Mainoo", "Hojlund", "B Fernandes", "Rashford")
        sidepic.src = "/football_img/logos/man utd.webp";
        manager.textContent += "Erik ten Hag"
    }

    if (selectedYear == "25") {
        four_three_three("P Lopez", "Clauss", "Merlin", "Balerdi", "Mbemba", "Rongier", "I Sarr", "Kondogbia", "Aubameyang", "Veretout", "J Correa");
        sidepic.src = "/football_img/logos/marseille.webp";
        manager.textContent += "Roberto De Zerbi";
    }

    if (selectedYear == "26") {
        three_four_two_one("Kohn", "Vanderson", "C Henrique", "Salisu", "Maripan", "Singo", "Minamino", "Zakaria", "Ben Yedder", "Y Fofana", "Golovin");
        sidepic.src = "/football_img/logos/monaco.webp";
        manager.textContent += "Adi Hutter";
    }

    if (selectedYear == "27") {
        four_three_three("Meret", "Di Lorenzo", "M Rui", "Natan", "Rrahmani", "Z Anguissa", "Raspadori", "Lobotka", "Osimhen", "Zielinski", "Kvaratskhelia")
        sidepic.src = "/football_img/logos/napoli.webp";
        manager.textContent += "Antonio Conte"
    }

    if (selectedYear == "28") {
        four_three_three("Donnarumma", "Hakimi", "L Hernandez", "Skriniar", "Marquinhos", "Vitinha", "O Dembele", "Zaire-Emery", "K Muani", "Asensio", "Mbappe")
        sidepic.src = "/football_img/logos/psg.webp";
        manager.textContent += "Luis Enrique"
    }

    if (selectedYear == "29") {
        four_two_three_one("D Costa", "J Mario", "Wendell", "Marcano", "K Pepe", "Eustaquio", "F Conceicao", "Varela", "Taremi", "E Pepe", "Galeno");
        sidepic.src = "/football_img/logos/porto.webp";
        manager.textContent += "Vítor Bruno";
    }

    if (selectedYear == "30") {
        four_three_three("W Benitez", "Dest", "M Junior", "Boscagli", "Teze", "Schouten", "Lozano", "Veerman", "L de Jong", "Tillman", "N Lang");
        sidepic.src = "/football_img/logos/psv.webp";
        manager.textContent += "Peter Bosz";
    }

    if (selectedYear == "31") {
        four_four_two("Gulacsi", "Simakan", "Raum", "Orban", "Lukeba", "Schlager", "Baumgartner", "Haidara", "Openda", "D Olmo", "X Simons");
        sidepic.src = "/football_img/logos/leipzig.png";
        manager.textContent += "Marco Rose";
    }

    if (selectedYear == "32") {
        four_three_one_two("Courtois", "Militao", "F Mendy", "Alaba", "Rudiger", "Tchouameni", "Bellingham", "Valverde", "Vini Jr", "Kroos", "Rodrygo")
        sidepic.src = "/football_img/logos/real madrid.webp";
        manager.textContent += "Carlo Ancelotti"
    }

    if (selectedYear == "33") {
        four_three_three("A Remiro", "H Traore", "Tierney", "Zubeldia", "Le Normand", "Zubimendi", "Kubo", "B Mendez", "Oyarzabal", "M Merino", "Zakharyan");
        sidepic.src = "/football_img/logos/sociedad.png";
        manager.textContent += "Imanol Alguacil";
    }

    // if (selectedYear == "34") {
    //     four_three_one_two("A Schlager", "Daniliuc", "Dedic", "Pavlovic", "Solet", "Bidstrup", "Gloukh", "Gourna-Douath", "K Konate", "Sucic", "Fernando D");
    //     sidepic.src = "/football_img/logos/salzburg.png";
    //     manager.textContent += "";
    // }

    if (selectedYear == "34") {
        four_two_three_one("Butland", "Tavernier", "R Yilmaz", "Souttar", "Goldson", "Lundstram", "Cantwell", "Raskin", "Danilo P", "M Diomande", "F Silva");
        sidepic.src = "/football_img/logos/rangers.png";
        manager.textContent += "Philippe Clement";
    }

    if (selectedYear == "35") {
        four_two_three_one("Dmitrovic", "J Navas", "Acuna", "Bade", "S Ramos", "Gudelj", "Lamela", "O Torres", "En-Nesyri", "Suso", "Ocampos");
        sidepic.src = "/football_img/logos/sevilla.webp";
        manager.textContent += "Garcia Pimienta";
    }

    // if (selectedYear == "37") {
    //     four_three_three("", "", "", "", "", "", "", "", "", "", "");
    //     sidepic.src = "/football_img/logos/shakhtar.png";
    //     manager.textContent += "";
    // }

    if (selectedYear == "36") {
        three_four_two_one("Adan", "St Juste", "N Santos", "Inacio", "Coates", "O Diomande", "M Edwards", "Morita", "Gyokeres", "Hjulmand", "P Goncalves");
        sidepic.src = "/football_img/logos/sporting.webp";
        manager.textContent += "Ruben Amorim";
    }

    if (selectedYear == "37") {
        four_two_three_one("Vicario", "P Porro", "Udogie", "van de Ven", "C Romero", "Bissouma", "Kulusevski", "Bentancur", "H Son", "Maddison", "Werner")
        sidepic.src = "/football_img/logos/tottenham.webp";
        manager.textContent += "Ange Postecoglou"
    }
}