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

} from '/Formations 2.js'

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
const score = document.querySelector(".score");
const OT = document.querySelector(".OT")
const team1 = document.querySelector(".team1")
const team2 = document.querySelector(".team2")
const goals1 = document.querySelector(".goals1")
const goals2 = document.querySelector(".goals2")
const date = document.querySelector(".date")

yearSelector.addEventListener("change", () => {

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
        four_three_three("Kobel", "Ryerson", "Maatsen", "Schlotterbeck", "Hummels", "Can", "Sancho", "Sabitzer", "Fullkrug", "Brandt", "Adeyemi")
        four_three_one_two2("Courtois", "Carvajal", "F Mendy", "Nacho", "Rudiger", "Kroos", "Bellingham", "Valverde", "Vini Jr", "Camavinga", "Rodrygo")
        flag1.src = "/football_img/logos/dortmund.webp"
        flag2.src = "/football_img/logos/real madrid.webp"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += "Edin Terzic"
        manager2.textContent += "Carlo Ancelotti"
        team1.innerHTML = "BORUSSIA<br>DORTMUND"
        team2.textContent = "REAL MADRID"
        score.textContent = "0 - 2"
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = "Carvajal 74' ⚽<br>Vini Jr 83' ⚽"
        date.textContent = "Wembley, England"
    }

    if (selectedYear == "1") {
        three_four_two_one("Ederson", "B Silva", "Grealish", "N Ake", "R Dias", "Akanji", "De Bruyne", "Rodri", "Haaland", "Stones", "Gundogan")
        three_five_two2("Onana", "Dumfries", "Dimarco", "Bastoni", "Acerbi", "Darmian", "Brozovic", "Barella", "La Martinez", "Calhanoglu", "Dzeko")
        flag1.src = "/football_img/logos/man city.webp"
        flag2.src = "/football_img/logos/inter milan.webp"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += "Pep Guardiola"
        manager2.textContent += "Simone Inzaghi"
        team1.innerHTML = "MANCHESTER<br>CITY"
        team2.textContent = "INTER MILAN"
        score.textContent = "1 - 0"
        OT.innerHTML = ""
        goals1.innerHTML = "Rodri 68' ⚽"
        goals2.innerHTML = ""
        date.textContent = "Istanbul, Turkey"
    }

    if (selectedYear == "2") {
        four_three_three("Alisson", "Alexander-Arnold", "Robertson", "van Dijk", "Konate", "Fabinho", "Salah", "J Henderson", "Mane", "Thiago", "L Diaz")
        four_three_three2("Courtois", "Carvajal", "F Mendy", "Alaba", "Militao", "Casemiro", "Valverde", "Modric", "Benzema", "Kroos", "Vini Jr")
        flag1.src = "/football_img/logos/liverpool.webp"
        flag2.src = "/football_img/logos/real madrid.webp"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += "Jurgen Klopp"
        manager2.textContent += "Carlo Ancelotti"
        team1.textContent = "LIVERPOOL"
        team2.textContent = "REAL MADRID"
        score.textContent = "0 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = "Vini Jr 59' ⚽"
        date.textContent = "Paris, France"
    }

    if (selectedYear == "3") {
        four_three_three("Ederson", "Walker", "Zinchenko", "R Dias", "Stones", "Gundogan", "Mahrez", "B Silva", "De Bruyne", "Foden", "Sterling")
        three_four_two_one2("E Mendy", "R James", "Chilwell", "Rudiger", "T Silva", "Azpilicueta", "Havertz", "Jorginho", "Werner", "Kante", "Mount")
        flag1.src = "/football_img/logos/man city.webp"
        flag2.src = "/football_img/logos/chelsea.webp"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += "Pep Guardiola"
        manager2.textContent += "Thomas Tuchel"
        team1.innerHTML = "MANCHESTER<br>CITY"
        team2.textContent = "CHELSEA"
        score.textContent = "0 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = "Havertz 42' ⚽"
        date.textContent = "Porto, Portugal"
    }

    if (selectedYear == "4") {
        four_three_three("K Navas", "Kehrer", "Bernat", "Kimpembe", "T Silva", "Marquinhos", "Di Maria", "A Herrera", "Mbappe", "L Paredes", "Neymar")
        four_two_three_one2("Neuer", "Kimmich", "A Davies", "Alaba", "Boateng", "Thiago", "Gnabry", "Goretzka", "Lewandowski", "Muller", "Coman")
        flag1.src = "/football_img/logos/psg.webp"
        flag2.src = "/football_img/logos/bayern munich.webp"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += "Thomas Tuchel"
        manager2.textContent += "Hansi Flick"
        team1.innerHTML = "PARIS<br>SAINT-GERMAIN"
        team2.innerHTML = "BAYERN<br>MUNICH"
        score.textContent = "0 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = "Coman 59' ⚽"
        date.textContent = "Lisbon, Portugal"
    }

    if (selectedYear == "5") {
        four_two_three_one("Lloris", "Trippier", "D Rose", "Vertonghen", "Alderweireld", "Winks", "Alli", "M Sissoko", "Kane", "Eriksen", "H Son")
        four_three_three2("Alisson", "Alexander-Arnold", "Robertson", "van Dijk", "Matip", "Fabinho", "Salah", "J Henderson", "R Firmino", "Wijnaldum", "Mane")
        flag1.src = "/football_img/logos/tottenham.webp"
        flag2.src = "/football_img/logos/liverpool.webp"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += "Mauricio Pochettino"
        manager2.textContent += "Jurgen Klopp"
        team1.innerHTML = "TOTTENHAM"
        team2.innerHTML = "LIVERPOOL"
        score.textContent = "0 - 2"
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = "Salah 2' (P) ⚽<br>Origi 87' ⚽"
        date.textContent = "Madrid, Spain"
    }

    if (selectedYear == "6") {
        four_three_one_two("K Navas", "Carvajal", "Marcelo", "S Ramos", "Varane", "Casemiro", "Isco", "Modric", "C Ronaldo", "Kroos", "Benzema")
        four_three_three2("Karius", "Alexander-Arnold", "Robertson", "van Dijk", "Lovren", "Henderson", "Salah", "Wijnaldum", "R Firmino", "Milner", "Mane")
        flag1.src = "/football_img/logos/real madrid.webp"
        flag2.src = "/football_img/logos/liverpool.webp"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += "Zinedine Zidane"
        manager2.textContent += "Jurgen Klopp"
        team1.innerHTML = "REAL MADRID"
        team2.innerHTML = "LIVERPOOL"
        score.textContent = "3 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = "Benzema 51' ⚽<br>Bale 64' ⚽<br>Bale 83' ⚽"
        goals2.innerHTML = "Mane 55' ⚽"
        date.textContent = "Kyiv, Ukraine"
    }

    if (selectedYear == "7") {
        three_four_one_two("Buffon", "D Alves", "A Sandro", "Chiellini", "Bonucci", "Barzagli", "Dybala", "Pjanic", "Mandzukic", "Khedira", "Higuain")
        four_three_one_two2("K Navas", "Carvajal", "Marcelo", "S Ramos", "Varane", "Casemiro", "Isco", "Kroos", "C Ronaldo", "Modric", "Benzema")
        flag1.src = "/football_img/logos/juventus.webp"
        flag2.src = "/football_img/logos/real madrid.webp"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += "Massimiliano Allegri"
        manager2.textContent += "Zinedine Zidane"
        team1.innerHTML = "JUVENTUS"
        team2.innerHTML = "REAL MADRID"
        score.textContent = "1 - 4"
        OT.innerHTML = ""
        goals1.innerHTML = "Mandzukic 27' ⚽<br>Cuadrado 83' 🟨🟥"
        goals2.innerHTML = "C Ronaldo 20' ⚽<br>Casemiro 61' ⚽<br>C Ronaldo 64' ⚽<br>Asensio 90' ⚽"
        date.textContent = "Cardiff, Wales"
    }

    if (selectedYear == "8") {
        four_three_three("K Navas", "Carvajal", "Marcelo", "S Ramos", "K Pepe", "Casemiro", "Bale", "Modric", "Benzema", "Kroos", "C Ronaldo")
        four_four_two2("Oblak", "Juanfran", "F Luis", "D Godin", "Savic", "A Fernandez", "Saul", "Gabi", "Torres", "Griezmann", "Koke")
        flag1.src = "/football_img/logos/real madrid.webp"
        flag2.src = "/football_img/logos/atletico madrid.webp"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += "Zinedine Zidane"
        manager2.textContent += "Diego Simeone"
        team1.innerHTML = "REAL MADRID"
        team2.innerHTML = "ATLETICO MADRID"
        score.textContent = "1 - 1"
        OT.innerHTML = "5-3 on penalties"
        goals1.innerHTML = "S Ramos 15' ⚽"
        goals2.innerHTML = "Carrasco 79' ⚽"
        date.textContent = "Milan, Italy"
        flag2.style.right = "24%"
    }

    if (selectedYear == "9") {
        four_three_one_two("Buffon", "Lichtsteiner", "Evra", "Bonucci", "Barzagli", "Pirlo", "Vidal", "Marchisio", "Morata", "Pogba", "Tevez")
        four_three_three2("ter Stegen", "D Alves", "Alba", "Mascherano", "Pique", "Busquets", "Messi", "Rakitic", "L Suarez", "Iniesta", "Neymar")
        flag1.src = "/football_img/logos/juventus.webp"
        flag2.src = "/football_img/logos/barcelona.webp"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += "Massimiliano Allegri"
        manager2.textContent += "Luis Enrique"
        team1.innerHTML = "JUVENTUS"
        team2.innerHTML = "BARCELONA"
        score.textContent = "1 - 3"
        OT.innerHTML = ""
        goals1.innerHTML = "Morata 55' ⚽"
        goals2.innerHTML = "Rakitic 4' ⚽<br>L Suarez 68' ⚽<br>Neymar 90+7' ⚽"
        date.textContent = "Berlin, Germany"
    }

    if (selectedYear == "10") {
        four_three_three("Casillas", "Carvajal", "Coentrao", "Varane", "S Ramos", "Khedira", "Bale", "Modric", "Benzema", "Di Maria", "C Ronaldo")
        four_four_two2("Courtois", "Juanfran", "F Luis", "D Godin", "Miranda", "Gabi", "R Garcia", "Tiago", "Di Costa", "D Villa", "Koke")
        flag1.src = "/football_img/logos/real madrid.webp"
        flag2.src = "/football_img/logos/atletico madrid.webp"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += "Carlo Ancelotti"
        manager2.textContent += "Diego Simeone"
        team1.innerHTML = "REAL MADRID"
        team2.innerHTML = "ATLETICO MADRID"
        score.textContent = "4 - 1"
        OT.innerHTML = "after extra-time"
        goals1.innerHTML = "S Ramos 90+3' ⚽<br>Bale 110' ⚽<br>Marcelo 118' ⚽<br>C Ronaldo 120' (P) ⚽"
        goals2.innerHTML = "D Godin 36' ⚽"
        date.textContent = "Lisbon, Portugal"
        flag2.style.right = "24%"
    }

    if (selectedYear == "11") {
        four_two_three_one("Weidenfeller", "Piszczek", "Schmelzer", "Hummels", "Subotic", "Gundogan", "Blaszczykowski", "S Bender", "Lewandowski", "Reus", "Großkreutz")
        four_two_three_one2("Neuer", "Lahm", "Alaba", "Dante", "Boateng", "Schweinsteiger", "Robben", "Ja Martinez", "Mandzukic", "Muller", "Ribery")
        flag1.src = "/football_img/logos/dortmund.webp"
        flag2.src = "/football_img/logos/bayern munich.webp"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += "Jurgen Klopp"
        manager2.textContent += "Jupp Heynckes"
        team1.innerHTML = "BORUSSIA<br>DORTMUND"
        team2.innerHTML = "BAYERN MUNICH"
        score.textContent = "1 - 2"
        OT.innerHTML = ""
        goals1.innerHTML = "Gundogan 68' (P) ⚽"
        goals2.innerHTML = "Mandzukic 60' ⚽<br>Robben 89' ⚽"
        date.textContent = "London, England"
    }

    if (selectedYear == "12") {
        four_two_three_one("Neuer", "Lahm", "Contento", "Tymoshchuk", "Boateng", "Kroos", "Robben", "Schweinsteiger", "M Gomez", "Muller", "Ribery")
        four_two_three_one2("Cech", "Bosingwa", "A Cole", "G Cahill", "Da Luiz", "J Mikel", "S Kalou", "Lampard", "Drogba", "Mata", "R Bertrand")
        flag1.src = "/football_img/logos/bayern munich.webp"
        flag2.src = "/football_img/logos/chelsea.webp"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += "Jupp Heynckes"
        manager2.textContent += "Roberto Di Matteo"
        team1.innerHTML = "BAYERN MUNICH"
        team2.innerHTML = "CHELSEA"
        score.textContent = "1 - 1"
        OT.innerHTML = "3-4 on penalties"
        goals1.innerHTML = "Muller 83' ⚽"
        goals2.innerHTML = "Drogba 88' ⚽"
        date.textContent = "Munich, Germany"
    }

    if (selectedYear == "13") {
        four_three_three("Valdes", "D Alves", "Abidal", "Pique", "Mascherano", "Busquets", "Messi", "Xavi", "D Villa", "Iniesta", "Pedro")
        four_four_one_one2("van der Sar", "F da Silva", "Evra", "Vidic", "Ferdinand", "Giggs", "Valencia", "Carrick", "Chicharito", "Rooney", "Park")
        flag1.src = "/football_img/logos/barcelona.webp"
        flag2.src = "/football_img/logos/man utd.webp"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += "Pep Guardiola"
        manager2.textContent += "Alex Ferguson"
        team1.innerHTML = "BARCELONA"
        team2.innerHTML = "MANCHESTER<br>UNITED"
        score.textContent = "3 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = "Pedro 27' ⚽<br>Messi 54' ⚽<br>D Villa 69' ⚽"
        goals2.innerHTML = "Rooney 34' ⚽"
        date.textContent = "London, England"
    }

    if (selectedYear == "14") {
        four_four_two("HJ Butt", "Lahm", "Badstuber", "Demichelis", "Van Buyten", "Schweinsteiger", "Robben", "Van Bommel", "Muller", "Olic", "Altintop")
        four_two_three_one2("J Cesar", "Maicon", "Chivu", "Samuel", "Lucio", "Cambiasso", "Eto'o", "Zanetti", "D Milito", "Sneijder", "Pandev")
        flag1.src = "/football_img/logos/bayern munich.webp"
        flag2.src = "/football_img/logos/inter milan.webp"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += "Louis van Gaal"
        manager2.textContent += "Jose Mourinho"
        team1.innerHTML = "BAYERN MUNICH"
        team2.innerHTML = "INTER MILAN"
        score.textContent = "0 - 2"
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = "D Milito 35' ⚽<br>D Milito 70' ⚽"
        date.textContent = "Madrid, Spain"
    }

    if (selectedYear == "15") {
        four_three_three("Valdes", "Puyol", "Sylvinho", "Pique", "Y Toure", "Busquets", "Messi", "Xavi", "Eto'o", "Iniesta", "Henry")
        four_three_three2("van der Sar", "O'Shea", "Evra", "Vidic", "Ferdinand", "Carrick", "Park", "Anderson", "Rooney", "Giggs", "C Ronaldo")
        flag1.src = "/football_img/logos/barcelona.webp"
        flag2.src = "/football_img/logos/man utd.webp"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += "Pep Guardiola"
        manager2.textContent += "Alex Ferguson"
        team1.innerHTML = "BARCELONA"
        team2.innerHTML = "MANCHESTER<br>UNITED"
        score.textContent = "2 - 0"
        OT.innerHTML = ""
        goals1.innerHTML = "Eto'o 10' ⚽<br>Messi 70' ⚽"
        goals2.innerHTML = ""
        date.textContent = "Rome, Italy"
    }
    if (selectedYear == "16") {
        four_four_two("van der Sar", "W Brown", "Evra", "Vidic", "Ferdinand", "Carrick", "Hargreaves", "Scholes", "Rooney", "Tevez", "C Ronaldo")
        four_three_three2("Cech", "Essien", "A Cole", "Terry", "Carvalho", "Makelele", "J Cole", "Ballack", "Drogba", "Lampard", "Malouda")
        flag1.src = "/football_img/logos/man utd.webp"
        flag2.src = "/football_img/logos/chelsea.webp"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += "Alex Ferguson"
        manager2.textContent += "Avram Grant"
        team1.innerHTML = "MANCHESTER<br>UNITED"
        team2.innerHTML = "CHELSEA"
        score.textContent = "1 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = "C Ronaldo 26' ⚽"
        goals2.innerHTML = "Lampard 45' ⚽"
        date.textContent = "Moscow, Russia"
    }

    if (selectedYear == "17") {
        four_four_one_one("Dida", "Oddo", "Jankulovski", "Maldini", "Nesta", "Ambrosini", "Gattuso", "Pirlo", "F Inzaghi", "Kaka", "Seedorf")
        four_two_three_one2("P Reina", "Finnan", "Riise", "Agger", "Carragher", "Mascherano", "Pennant", "X Alonso", "Kuyt", "Gerrard", "Zenden")
        flag1.src = "/football_img/logos/ac milan.webp"
        flag2.src = "/football_img/logos/liverpool.webp"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += "Carlo Ancelotti"
        manager2.textContent += "Rafael Benitez"
        team1.innerHTML = "AC MILAN"
        team2.innerHTML = "LIVERPOOL"
        score.textContent = "2 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = "Inzaghi 45' ⚽<br>Inzaghi 82' ⚽"
        goals2.innerHTML = "Kuyt 89' ⚽"
        date.textContent = "Athens, Greece"
    }

    if (selectedYear == "18") {
        four_three_three("Valdes", "Oleguer", "van Bronckhorst", "Puyol", "R Marquez", "Edmilson", "Giuly", "Deco", "Eto'o", "van Bommel", "Ronaldinho")
        four_four_one_one2("Lehmann", "Eboue", "A Cole", "Campbell", "K Toure", "G Silva", "Pires", "Fabregas", "Henry", "Ljungberg", "Hleb")
        flag1.src = "/football_img/logos/barcelona.webp"
        flag2.src = "/football_img/logos/arsenal.webp"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += "Frank Rijkaard"
        manager2.textContent += "Arsene Wenger"
        team1.innerHTML = "BARCELONA"
        team2.innerHTML = "ARSENAL"
        score.textContent = "2 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = "Eto'o 76' ⚽<br>Belletti 80' ⚽"
        goals2.innerHTML = "Campbell 37' ⚽"
        date.textContent = "Paris, France"
    }

    if (selectedYear == "19") {
        four_three_one_two("Dida", "Cafu", "Maldini", "Nesta", "Stam", "Pirlo", "Kaka", "Gattuso", "Crespo", "Seedorf", "Shevchenko")
        four_four_one_one2("Dudek", "Finnan", "D Traore", "Hyypia", "Carragher", "X Alonso", "L Garcia", "Gerrard", "Baros", "Kewell", "Riise")
        flag1.src = "/football_img/logos/ac milan.webp"
        flag2.src = "/football_img/logos/liverpool.webp"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += "Carlo Ancelotti"
        manager2.textContent += "Rafael Benitez"
        team1.innerHTML = "AC MILAN"
        team2.innerHTML = "LIVERPOOL"
        score.textContent = "3 - 3"
        OT.innerHTML = "2-3 on penalties"
        goals1.innerHTML = "Maldini 1' ⚽<br>Crespo 39' ⚽<br>Crespo 44' ⚽"
        goals2.innerHTML = "Gerrard 54' ⚽<br>Smicer 56' ⚽<br>X Alonso 61' ⚽"
        date.textContent = "Istanbul, Turkey"
    }
    if (selectedYear == "20") {
        four_three_three("F Roma", "H Ibarra", "Evra", "Givet", "Ju Rodriguez", "Bernardi", "Giuly", "E Cisse", "Morientes", "Zikos", "Rothen")
        four_three_one_two2("V Baia", "P Ferreira", "N Valente", "Carvalho", "J Costa", "Costinha", "Deco", "P Mendes", "Derlei", "Maniche", "C Alberto")
        flag1.src = "/football_img/logos/monaco.webp"
        flag2.src = "/football_img/logos/porto.webp"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += "Didier Deschamps"
        manager2.textContent += "Jose Mourinho"
        team1.innerHTML = "MONACO"
        team2.innerHTML = "PORTO"
        score.textContent = "0 - 3"
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = "C Alberto 39' ⚽<br>Deco 71' ⚽<br>Alenichev 75' ⚽'"
        date.textContent = "Gelsenkirchen, Germany"
    }
    if (selectedYear == "21") {
        four_four_two("Buffon", "Thuram", "Montero", "Tudor", "Ferrara", "Davids", "Camoranesi", "Tacchinardi", "Trezeguet", "Del Piero", "Zambrotta")
        four_three_one_two2("Dida", "Costacurta", "Kaladze", "Maldini", "Nesta", "Pirlo", "Rui Costa", "Gattuso", "F Inzaghi", "Seedorf", "Shevchenko")
        flag1.src = "/football_img/logos/juventus.webp"
        flag2.src = "/football_img/logos/ac milan.webp"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += "Marcello Lippi"
        manager2.textContent += "Carlo Ancelotti"
        team1.innerHTML = "JUVENTUS"
        team2.innerHTML = "AC MILAN"
        score.textContent = "0 - 0"
        OT.innerHTML = "2-3 on penalties"
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "Manchester, England"
    }
    if (selectedYear == "22") {
        four_one_three_two("HJ Butt", "Sebescen", "Placente", "Lucio", "Zivkovic", "Ramelow", "Schneider", "Ballack", "Neuville", "Basturk", "Brdaric")
        four_one_two_one_two2("C Sanchez", "Salgado", "R Carlos", "Helguera", "Hierro", "Makelele", "Zidane", "Figo", "Morientes", "Solari", "Raul")
        flag1.src = "/football_img/logos/leverkusen.webp"
        flag2.src = "/football_img/logos/real madrid.webp"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += "Klaus Toppmoller"
        manager2.textContent += "Vicente Del Bosque"
        team1.innerHTML = "BAYER<br>LEVERKUSEN"
        team2.innerHTML = "REAL MADRID"
        score.textContent = "1 - 2"
        OT.innerHTML = ""
        goals1.innerHTML = "Lucio 14' ⚽"
        goals2.innerHTML = "Raul 8' ⚽<br>Zidane 45' ⚽"
        date.textContent = "Glasgow, Scotland"
    }
    if (selectedYear == "23") {
        three_four_two_one("Kahn", "Sagnol", "Lizarazu", "Linke", "Andersson", "Kuffour", "Scholl", "Effenberg", "Elber", "Hargreaves", "Salihamidzic")
        four_one_two_one_two2("Canizares", "Angloma", "Carboni", "Pellegrino", "Ayala", "Baraja", "Aimar", "Mendieta", "Carew", "K Gonzalez", "J Sanchez")
        flag1.src = "/football_img/logos/bayern munich.webp"
        flag2.src = "/football_img/logos/valencia.webp"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += "Bernd Dreher"
        manager2.textContent += "Hector Cuper"
        team1.innerHTML = "BAYERN MUNICH"
        team2.innerHTML = "VALENCIA"
        score.textContent = "1 - 1"
        OT.innerHTML = "5-4 on penalties"
        goals1.innerHTML = "Effenberg 50' (P) ⚽"
        goals2.innerHTML = "Mendieta 3' (P) ⚽"
        date.textContent = "Milan, Italy"
    }
    if (selectedYear == "24") {
        three_five_two("Casillas", "Salgado", "R Carlos", "I Campo", "Helguera", "Karanka", "Redondo", "McManaman", "Anelka", "Raul", "Morientes")
        four_one_two_one_two2("Canizares", "Angloma", "Gerardo", "Pellegrino", "Djukic", "Farinos", "Gerard", "Mendieta", "C Lopez", "K Gonzalez", "Angulo")
        flag1.src = "/football_img/logos/real madrid.webp"
        flag2.src = "/football_img/logos/valencia.webp"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += "Vicente del Bosque"
        manager2.textContent += "Hector Cuper"
        team1.innerHTML = "REAL MADRID"
        team2.innerHTML = "VALENCIA"
        score.textContent = "3 - 0"
        OT.innerHTML = ""
        goals1.innerHTML = "Morientes 39' ⚽<br>McManaman 67' ⚽<br>Raul 75' ⚽"
        goals2.innerHTML = ""
        date.textContent = "Paris, France"
    }
    if (selectedYear == "25") {
        four_four_two("Schmeichel", "G Neville", "Irwin", "Stam", "R Johnsen", "N Butt", "Giggs", "Beckham", "Yorke", "An Cole", "Blomqvist")
        five_two_three2("Kahn", "Babbel", "Tarnat", "Kuffour", "Matthaus", "Linke", "Basler", "Jeremies", "Jancker", "Effenberg", "Zickler")
        flag1.src = "/football_img/logos/man utd.webp"
        flag2.src = "/football_img/logos/bayern munich.webp"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += "Alex Ferguson"
        manager2.textContent += "Ottmar Hitzfeld"
        team1.innerHTML = "MANCHESTER<br>UNITED"
        team2.innerHTML = "BAYERN MUNICH"
        score.textContent = "2 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = "Sheringham 90+1' ⚽<br>Solskjaer 90+3' ⚽"
        goals2.innerHTML = "Basler 6' ⚽"
        date.textContent = "Barcelona, Spain"
    }
    if (selectedYear == "26") {
        three_four_one_two("Peruzzi", "Di Livio", "Pessotto", "Montero", "Iuliano", "Torricelli", "Zidane", "Davids", "Del Piero", "Deschamps", "F Inzaghi")
        four_three_one_two2("Illgner", "Panucci", "R Carlos", "Hierro", "Sanchis", "Redondo", "Raul", "Karembeu", "Mijatovic", "Seedorf", "Morientes")
        flag1.src = "/football_img/logos/real madrid.webp"
        flag2.src = "/football_img/logos/juventus.webp"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += "Marcello Lippi"
        manager2.textContent += "Jupp Heynckes"
        team1.innerHTML = "JUVENTUS"
        team2.innerHTML = "REAL MADRID"
        score.textContent = "0 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = "Mijatovic 66' ⚽"
        date.textContent = "Amsterdam, Netherlands"
    }
}