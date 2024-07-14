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
const substitutes1 = document.querySelector(".substitutes1")
const substitutes2 = document.querySelector(".substitutes2")
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
    twoDM2.style.top = "49%";
        
    updatePlayerInfo();

});

let selectedYear = 0;

function updatePlayerInfo() {

    selectedYear = yearSelector.value;
    manager1.textContent = "Head Coach: "
    manager2.textContent = "Head Coach: "
    substitutes1.innerHTML = "Substitutes: "
    substitutes2.innerHTML = "Substitutes: "
    OT.style.textAlign = "center"

    if (selectedYear == "0") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/spain.gif"
        flag2.src = "/football_img/logos/england.gif"
        sidepic.src = "/football_img/logos/euro2024.png";
        manager1.textContent += "Luis de la Fuente"
        manager2.textContent += "Gareth Southgate"
        substitutes1.innerHTML += ""
        substitutes2.innerHTML += ""
        team1.innerHTML = "SPAIN"
        team2.innerHTML = "ENGLAND"
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = "14 / 07 / 2024"
    }

    if (selectedYear == "1") {
        four_three_three("Donnarumma", "Di Lorenzo", "Emerson P", "Chiellini", "Bonucci", "Jorginho", "Chiesa", "Verratti", "Immobile", "Barella", "Insigne")
        three_four_two_one2("Pickford", "Trippier", "Shaw", "Stones", "Maguire", "Walker", "Sterling", "K Phillips", "Kane", "D Rice", "Mount")
        flag1.src = "/football_img/logos/italy.gif"
        flag2.src = "/football_img/logos/england.gif"
        sidepic.src = "/football_img/logos/euro2020.png";
        manager1.textContent += "Roberto Mancini"
        manager2.textContent += "Gareth Southgate"
        substitutes1.innerHTML += "A Meret, Sirigu, R Tolói, F Acerbi, Bastoni<br> Florenzi, Cristante, Locatelli, M Pessina, Berardi, Bernardeschi, Belotti"
        substitutes2.innerHTML += "S Johnstone, Ramsdale, T Mings, C Coady, R James<br> J Henderson, J Bellingham, J Sancho, Rashford, Grealish, Saka, Calvert-Lewin"
        team1.innerHTML = "ITALY"
        team2.innerHTML = "ENGLAND"
        score.textContent = "1 - 1"
        OT.innerHTML = "4-3 on penalties"
        goals1.innerHTML = "Bonucci 67' ⚽"
        goals2.innerHTML = "Shaw 2' ⚽"
        date.textContent = "11 / 07 / 2021"
    }

    if (selectedYear == "2") {
        four_one_three_two("R Patricio", "C Soares", "Guerreiro", "Fonte", "K Pepe", "W Carvalho", "Sanches", "Ad Silva", "Nani", "C Ronaldo", "Jo Mario")
        four_two_three_one2("Lloris", "Sagna", "Evra", "Umtiti", "Koscielny", "Matuidi", "M Sissoko", "Pogba", "Giroud", "Griezmann", "Payet")
        flag1.src = "/football_img/logos/portugal.gif"
        flag2.src = "/football_img/logos/france.gif"
        sidepic.src = "/football_img/logos/euro2016.png";
        manager1.textContent += "Fernando Santos"
        manager2.textContent += "Didier Deschamps"
        substitutes1.innerHTML += "Eduardo, A Lopes, B Alves, R Carvalho, Eliseu<br> Vieirinha, D Pereira, An Gomes, J Moutinho, Quaresma, Rafa, Éder"
        substitutes2.innerHTML += "Costil, Mandanda, E Mangala, A Rami, Digne<br> Jallet, Kanté, Schneiderlin, Cabaye, Coman, Gignac, Martial"
        team1.innerHTML = "PORTUGAL"
        team2.innerHTML = "FRANCE"
        score.textContent = "1 - 0"
        OT.innerHTML = "after extra time"
        goals1.innerHTML = "Eder 109' ⚽"
        goals2.innerHTML = ""
        date.textContent = "10 / 07 / 2016"
    }

    if (selectedYear == "3") {
        four_three_three("Casillas", "Arbeloa", "Alba", "Pique", "S Ramos", "Busquets", "D Silva", "X Alonso", "Fabregas", "Xavi", "Iniesta")
        four_three_one_two2("Buffon", "Abate", "Chiellini", "Barzagli", "Bonucci", "Pirlo", "Montolivo", "Marchisio", "Balotelli", "De Rossi", "Cassano")
        flag1.src = "/football_img/logos/spain.gif"
        flag2.src = "/football_img/logos/italy.gif"
        sidepic.src = "/football_img/logos/euro2012.png";
        manager1.textContent += "Vicente del Bosque"
        manager2.textContent += "Cesare Prandelli"
        substitutes1.innerHTML += "P Reina, Valdés, R Albiol, Juanfran, J Navas<br> J Martínez, Cazorla, Mata, Pedro, F Llorente, Á Negredo, F Torres"
        substitutes2.innerHTML += "M De Sanctis, Sirigu, A Ogbonna, F Balzaretti, C Maggio<br> T Motta, A Nocerino, E Giaccherini, A Diamanti, F Borini, S Giovinco, A Di Natale"
        team1.innerHTML = "SPAIN"
        team2.innerHTML = "ITALY"
        score.textContent = "4 - 0"
        OT.innerHTML = ""
        goals1.innerHTML = "D Silva 14' ⚽<br>J Alba 41' ⚽<br>Torres 84' ⚽<br>J Mata 89' ⚽"
        goals2.innerHTML = ""
        date.textContent = "01 / 07 / 2012"
    }

    if (selectedYear == "4") {
        four_two_three_one("Lehmann", "Friedrich", "Lahm", "Mertesacker", "Metzelder", "Frings", "Schweinsteiger", "Hitzlsperger", "Klose", "Ballack", "Podolski")
        four_three_three2("Casillas", "S Ramos", "Capdevila", "Puyol", "Marchena", "Senna", "D Silva", "Xavi", "Torres", "Fabregas", "Iniesta")
        flag1.src = "/football_img/logos/germany.gif"
        flag2.src = "/football_img/logos/spain.gif"
        sidepic.src = "/football_img/logos/euro2008.png";
        manager1.textContent += "Joachim Low"
        manager2.textContent += "Luis Aragones"
        substitutes1.innerHTML += "Adler, Enke, Westermann, M Jansen, Fritz<br> Rolfes, Borowski, Trochowski, Odonkor, M Gómez, Kuranyi, Neuville"
        substitutes2.innerHTML += "A Palop, P Reina, Juanito, R Albiol, F Navarro<br> Á Arbeloa, X Alonso, R de la Red, Cazorla, D Güiza, D Villa, S García"
        team1.innerHTML = "GERMANY"
        team2.innerHTML = "SPAIN"
        score.textContent = "0 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = "Torres 32' ⚽"
        date.textContent = "29 / 06 / 2008"
    }

    if (selectedYear == "5") {
        four_three_three("Ricardo", "Miguel", "N Valente", "Carvalho", "J Andrade", "Costinha", "Figo", "Maniche", "Pauleta", "Deco", "C Ronaldo")
        four_three_three2("Nikopolidis", "Seitaridis", "Fyssas", "Dellas", "Kapsis", "Katsouranis", "Charisteas", "Basinas", "Vryzas", "Zagorakis", "Giannakopoulos")
        flag1.src = "/football_img/logos/portugal.gif"
        flag2.src = "/football_img/logos/greece.png"
        sidepic.src = "/football_img/logos/euro2004.png";
        manager1.textContent += "Luiz Felipe Scolari"
        manager2.textContent += "Otto Rehhagel"
        substitutes1.innerHTML += "J Moreira, Quim, Beto, F Couto, R Jorge<br> P Ferreira, Petit, T Mendes, R Costa, Simão, N Gomes, H Postiga"
        substitutes2.innerHTML += "K Chalkias, T Katergiannakis, N Dabizas, G Goumas<br> S Venetidis, P Kafes, V Lakis, V Tsiartas, G Georgiadis, D Papadopoulos"
        team1.innerHTML = "PORTUGAL"
        team2.innerHTML = "GREECE"
        score.textContent = "0 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = "Charisteas 57' ⚽"
        date.textContent = "04 / 07 / 2004"
    }

    if (selectedYear == "6") {
        four_two_three_one("Barthez", "Thuram", "Lizarazu", "Blanc", "Desailly", "Vieira", "Djorkaeff", "Deschamps", "Henry", "Zidane", "Dugarry")
        three_four_one_two2("Toldo", "Pessotto", "Maldini", "Iuliano", "Cannavaro", "Nesta", "Fiore", "Albertini", "Totti", "L Di Baggio", "Delvecchio")
        flag1.src = "/football_img/logos/flags/france.gif"
        flag2.src = "/football_img/logos/flags/italy.gif"
        sidepic.src = "/football_img/logos/euro2000.png";
        manager1.textContent += "Roger Lemerre"
        manager2.textContent += "Dino Zoff"
        substitutes1.innerHTML += "B Lama, U Ramé, F Leboeuf, V Candela<br> C Karembeu, E Petit, R Pirès, J Micoud, S Wiltord, Anelka, Trezeguet"
        substitutes2.innerHTML += "C Abbiati, F Antonioli, C Ferrara, P Negro<br> Ambrosini, A Conte, Di Livio, Del Piero, F Inzaghi, Montella"
        team1.innerHTML = "FRANCE"
        team2.innerHTML = "ITALY"
        score.textContent = "2 - 1"
        OT.innerHTML = "after extra time"
        goals1.innerHTML = "Wiltord 90+3' ⚽<br>Trezeguet 103' ⚽"
        goals2.innerHTML = "Delvecchio 55' ⚽"
        date.textContent = "02 / 07 / 2000"
    }
    substitutes1.innerHTML = substitutes1.innerHTML.replace(/,/g, ' •');
    substitutes2.innerHTML = substitutes2.innerHTML.replace(/,/g, ' •');
}