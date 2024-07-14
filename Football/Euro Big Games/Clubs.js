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
const label = document.querySelector(".label h3")

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
    substitutes1.innerHTML = "Substitutes: "
    substitutes2.innerHTML = "Substitutes: "
    OT.style.textAlign = "center"
    flag1.style.borderRadius = "100%"
    flag2.style.borderRadius = "100%"
    flag1.style.left = "23%"
    flag2.style.right = "23%"

    if (selectedYear == "0") {
        four_three_three("U Simon", "Carvajal", "Cucurella", "Laporte", "Le Normand", "Rodri", "Yamal", "Pedri", "Morata", "F Ruiz", "N Williams")
        four_three_three2("Donnarumma", "Di Lorenzo", "Dimarco", "Calafiori", "Bastoni", "Jorginho", "Chiesa", "Frattesi", "Scamacca", "Barella", "Pellegrini")
        flag1.src = "/football_img/logos/spain.webp"
        flag2.src = "/football_img/logos/italy.webp"
        sidepic.src = "/img/logos/euro 2024.png";
        manager1.textContent += "Luis de la Fuente"
        manager2.textContent += "Luciano Spalletti"
        substitutes1.innerHTML += "M Merino, F Torres, A Baena<br> M Oyarzabal, A Perez, D Raya, Nacho, D Vivian, Joselu<br> D Olmo, A Grimaldo, A Remiro, M Zubimendi, J Navas, F Lopez"
        substitutes2.innerHTML += "G Raspadori, B Cristante, M Retegui<br> M Zaccagni, A Cambiaso, A Buongiorno, F Gatti, G Vicario, M Darmian<br> R Bellanova, G Mancini, N Fagioli, S El Shaarawy, M Folorunsho"
        team1.textContent = "SPAIN"
        team2.textContent = "ITALY"
        score.textContent = "1 - 0"
        OT.innerHTML = ""
        goals1.innerHTML = "Calafiori (OG) 55' ⚽"
        goals2.innerHTML = "⚽"
        date.textContent = "20 / 06 / 2024"
    }

    if (selectedYear == "1") {
        four_two_three_one("Verbruggen", "Dumfries", "N Ake", "van Dijk", "de Vrij", "Reijnders", "Frimpong", "Schouten", "Depay", "X Simons", "Gakpo")
        four_two_three_one2("Maignan", "Kounde", "T Hernandez", "Saliba", "Upamecano", "Tchouameni", "O Dembele", "Kante", "M Thuram", "Griezmann", "Rabiot")
        flag1.src = "/football_img/logos/netherlands.png"
        flag2.src = "/football_img/logos/france.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Ronald Koeman"
        manager2.textContent += "Didier Deschamps"
        substitutes1.innerHTML += "L Geertruida, G Wijnaldum, W Weghorst<br> J Veerman, M de Ligt, J Bijlow,  M van de Ven, D Blind, D Malen<br> B Brobbey, I Maatsen, J Zirkzee, M Flekken, S Bergwijn, R Gravenberch<br>"
        substitutes2.innerHTML += "O Giroud, K Coman, B Samba<br> Pavard, F Mendy, E Camavinga, Mbappe, K Muani<br> Zaire-Emery, Y Fofana, Clauss, Areola, I Konate, Barcola"
        team1.textContent = "NETHERLANDS"
        team2.textContent = "FRANCE"
        score.textContent = "0 - 0"
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "21 / 06 / 2024"
    }

    if (selectedYear == "2") {
        four_three_three("Maignan", "Kounde", "T Hernandez", "Saliba", "Upamecano", "Tchouameni", "Griezmann", "Kante", "M Thuram", "Rabiot", "Mbappe")
        four_four_two2("Casteels", "Castagne", "Theate", "Vertonghen", "Faes", "De Bruyne", "Carrasco", "Onana", "Lukaku", "Openda", "Doku")
        flag1.src = "/football_img/logos/france.png"
        flag2.src = "/football_img/logos/belgium.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Didier Deschamps"
        manager2.textContent += "Domenico Tedesco"
        substitutes1.innerHTML += "K Muani, B Samba, Pavard<br> F Mendy, Camavinga, O Giroud, O Dembélé, Zaire-Emery<br> Y Fofana, Coman, Clauss, Areola, I Konaté, B Barcola"
        substitutes2.innerHTML += "D Lukebakio, De Ketelaere, O Mangala<br> Debast, Witsel, Tielemans, Trossard, T Kaminski<br> M Sels, Vranckx, J Bakayoko, Vermeeren, De Cuyper"
        team1.textContent = "FRANCE"
        team2.textContent = "BELGIUM"
        score.textContent = "1 - 0"
        OT.innerHTML = ""
        goals1.innerHTML = "Vertonghen 85' (OG) ⚽"
        goals2.innerHTML = ""
        date.textContent = "01 / 07 / 2024"
    }

    if (selectedYear == "3") {
        four_three_three("U Simon", "Carvajal", "Cucurella", "Laporte", "Le Normand", "Rodri", "Yamal", "Pedri", "Morata", "F Ruiz", "N Williams")
        four_two_three_one2("Neuer", "Kimmich", "Raum", "J Tah", "Rudiger", "Kroos", "Sane", "Can", "Havertz", "Gundogan", "Musiala")
        flag1.src = "/football_img/logos/spain.png"
        flag2.src = "/football_img/logos/germany.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Luis de la Fuente"
        manager2.textContent += "Julian Nagelsmann"
        substitutes1.innerHTML += "Nacho, M Merino, Joselu<br>D Olmo, F Torres, Oyarzabal, D Raya, Vivian, Grimaldo<br> Á Remiro, Á Baena, M Zubimendi, J Navas, F López, A Pérez"
        substitutes2.innerHTML += "N Füllkrug, T Müller, W Anton<br> F Wirtz, M Mittelstädt, R Andrich, P Groß, C Führich O Baumann<br> M Beier, Schlotterbeck, B Henrichs, M ter Stegen, R Koch, De Undav"
        team1.innerHTML = "SPAIN"
        team2.innerHTML = "GERMANY"
        score.textContent = "2 - 1"
        OT.innerHTML = "after extra time"
        goals1.innerHTML = "D Olmo 51' ⚽<br>M Merino 119' ⚽<br>Carvajal 120+6' 🟨🟥"
        goals2.innerHTML = "F Wirtz 89' ⚽"
        date.textContent = "05 / 07 / 2024"
    }

    if (selectedYear == "4") {
        four_two_three_one("D Costa", "Cancelo", "N Mendes", "K Pepe", "R Dias", "Palhinha", "B Silva", "Vitinha", "C Ronaldo", "B Fernandes", "R Leao")
        four_three_one_two2("Maignan", "Kounde", "T Hernandez", "Saliba", "Upamecano", "Tchouameni", "Griezmann", "Kante", "Mbappe", "Camavinga", "K Muani")
        flag1.src = "/football_img/logos/portugal.png"
        flag2.src = "/football_img/logos/france.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Roberto Martinez"
        manager2.textContent += "Didier Deschamps"
        substitutes1.innerHTML += "<br>"
        substitutes2.innerHTML += "<br>"
        team1.innerHTML = "PORTUGAL"
        team2.innerHTML = "FRANCE"
        score.textContent = "0 - 0"
        OT.innerHTML = "3-5 on penalties"
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "05 / 07 / 2024"
    }

    if (selectedYear == "5") {
        four_two_three_one("U Simon", "J Navas", "Cucurella", "Laporte", "Nacho", "F Ruiz", "Yamal", "Rodri", "Morata", "D Olmo", "N Williams")
        four_three_three2("Maignan", "Kounde", "T Hernandez", "Saliba", "Upamecano", "Tchouameni", "O Dembele", "Kante", "K Muani", "Rabiot", "Mbappe")
        flag1.src = "/football_img/logos/spain.png"
        flag2.src = "/football_img/logos/france.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Luis de la Fuente"
        manager2.textContent += "Didier Deschamps"
        substitutes1.innerHTML += "D Vivian, M Merino, F Torres<br> M Zubimendi, Oyarzabal, D Raya, Joselu<br> Grimaldo, Á Remiro, Á Baena, F López, A Pérez"
        substitutes2.innerHTML += "Camavinga, Griezmann, O Giroud<br> B Barcola, B Samba, Pavard, F Mendy, M Thuram<br> Zaïre-Emery, Y Fofana, K Coman, Clauss, A Areola, I Konaté"
        team1.innerHTML = "SPAIN"
        team2.innerHTML = "FRANCE"
        score.textContent = "2 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = "Yamal 21' ⚽<br>D Olmo 25' ⚽"
        goals2.innerHTML = "K Muani 9'⚽"
        date.textContent = "09 / 07 / 2024"
    }

    if (selectedYear == "6") {
        four_two_three_one("Verbruggen", "Dumfries", "N Ake", "van Dijk", "de Vrij", "Reijnders", "Malen", "Schouten", "Depay", "X Simons", "Gakpo")
        three_four_two_one2("Pickford", "Saka", "Trippier", "Guehi", "Stones", "Walker", "Foden", "D Rice", "Kane", "Mainoo", "Bellingham")
        flag1.src = "/football_img/logos/netherlands.png"
        flag2.src = "/football_img/logos/england.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Ronald Koeman"
        manager2.textContent += "Gareth Southgate"
        substitutes1.innerHTML += "Weghorst, Veerman, Brobbey<br> Zirkzee, Geertruida, M de Ligt, Wijnaldum, J Frimpong<br> Bijlow, M van de Ven, D Blind, I Maatsen, Flekken, Bergwijn, Gravenberch"
        substitutes2.innerHTML += "L Shaw, E Konsa, C Gallagher<br> O Watkins, C Palmer, Alexander-Arnold, Ramsdale,L Dunk, Toney<br> Gordon, Bowen, E Eze, J Gomez, D Henderson, A Wharton"
        team1.innerHTML = "NETHERLANDS"
        team2.innerHTML = "ENGLAND"
        score.textContent = "1 - 2"
        OT.innerHTML = ""
        goals1.innerHTML = "X Simons 7' ⚽"
        goals2.innerHTML = "Kane 18' (P) ⚽<br>O Watkins 90' ⚽"
        date.textContent = "10 / 07 / 2024"
    }

    if (selectedYear == "7") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/spain.png"
        flag2.src = "/football_img/logos/england.png"
        sidepic.src = "/football_img/logos/euro 2024.png";
        manager1.textContent += "Luis de la Fuente"
        manager2.textContent += "Gareth Southgate"
        substitutes1.innerHTML += ""
        substitutes2.innerHTML += ""
        team1.innerHTML = "SPAIN"
        team2.innerHTML = "ENGLAND"
        score.textContent = "0 - 0"
        OT.innerHTML = ""
        goals1.innerHTML = "⚽"
        goals2.innerHTML = "⚽"
        date.textContent = "14 / 07 / 2024"
    }
    substitutes1.innerHTML = substitutes1.innerHTML.replace(/,/g, ' •');
    substitutes2.innerHTML = substitutes2.innerHTML.replace(/,/g, ' •');
}