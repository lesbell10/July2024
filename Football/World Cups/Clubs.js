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

} from '../../Formations 2.js'

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
        four_three_three("E Martinez", "Molina", "Tagliafico", "Otamendi", "C Romero", "E Fernandez", "Messi", "De Paul", "Alvarez", "Mac Allister", "Di Maria")
        four_two_three_one2("Lloris", "Kounde", "T Hernandez", "Upamecano", "Varane", "Rabiot", "O Dembele", "Tchouameni", "Giroud", "Griezmann", "Mbappe")
        flag1.src = "/football_img/logos/argentina.png"
        flag2.src = "/football_img/logos/france.png"
        sidepic.src = "/football_img/logos/worldcup2022.png";
        manager1.textContent += "Lionel Scaloni"
        manager2.textContent += "Didier Deschamps"
        team1.textContent = "ARGENTINA"
        team2.textContent = "FRANCE"
        score.textContent = "3 - 3"
        OT.innerHTML = "4:2 <br> on penalties"
        goals1.innerHTML = "Messi 23' (P)<br>Di Maria 36'<br>Messi 108'"
        goals2.innerHTML = "Mbappe 80' (P)<br>Mbappe 81'<br>Mbappe 118' (P)"
        date.textContent = "18 / 12 / 2022"
    }

    if (selectedYear == "1") {
        four_two_three_one("Lloris", "Pavard", "L Hernandez", "Umtiti", "Varane", "Kante", "Mbappe", "Pogba", "Giroud", "Griezmann", "Matuidi")
        four_three_three2("Subasic", "Vrsaljko", "Strinic", "Vida", "Lovren", "Brozovic", "Rebic", "Modric", "Mandzukic", "Rakitic", "Perisic")
        flag1.src = "/football_img/logos/france.png"
        flag2.src = "/football_img/logos/croatia.png"
        sidepic.src = "/football_img/logos/worldcup2018.png";
        manager1.textContent += "Didier Deschamps"
        manager2.textContent += "Zlatko Dalic"
        team1.textContent = "FRANCE"
        team2.textContent = "CROATIA"
        score.textContent = "4 - 2"
        OT.innerHTML = ""
        goals1.innerHTML = "Mandzukic 18' (OG)<br>Griezmann 38' (P)<br>Pogba 59'<br>Mbappe 65'"
        goals2.innerHTML = "Perisic 28'<br>Mandzukic 69'"
        date.textContent = "15 / 07 / 2018"
    }

    if (selectedYear == "2") {
        four_three_three("Neuer", "Lahm", "Howedes", "Boateng", "Hummels", "Schweinsteiger", "Muller", "Kramer", "Klose", "Kroos", "Ozil")
        four_two_three_one2("S Romero", "Zabaleta", "Rojo", "Demichelis", "Garay", "Biglia", "Lavezzi", "Mascherano", "Higuain", "Messi", "E Perez")
        flag1.src = "/football_img/logos/germany.png"
        flag2.src = "/football_img/logos/argentina.png"
        sidepic.src = "/football_img/logos/worldcup2014.png";
        manager1.textContent += "Joaquim Low"
        manager2.textContent += "Alejandro Sabella"
        team1.textContent = "GERMANY"
        team2.textContent = "ARGENTINA"
        score.textContent = "1 - 0"
        OT.innerHTML = "after extra time"
        goals1.innerHTML = "Gotze 113'"
        goals2.innerHTML = ""
        date.textContent = "13 / 07 / 2014"
    }

    if (selectedYear == "3") {
        four_two_three_one("Stekelenburg", "van der Wiel", "van Bronckhorst", "Mathijsen", "Heitinga", "van Bommel", "Robben", "N de Jong", "van Persie", "Sneijder", "Kuyt")
        four_three_three2("Casillas", "S Ramos", "Capdevila", "Pique", "Puyol", "Busquets", "Pedro", "X Alonso", "D Villa", "Xavi", "Iniesta")
        flag1.src = "/football_img/logos/netherlands.png"
        flag2.src = "/football_img/logos/spain.png"
        sidepic.src = "/football_img/logos/worldcup2010.png";
        manager1.textContent += "Bert van Marwijk"
        manager2.textContent += "Vicente del Bosque"
        team1.textContent = "NETHERLANDS"
        team2.textContent = "SPAIN"
        score.textContent = "0 - 1" 
        OT.innerHTML = "after extra time"
        goals1.innerHTML = "Heitinga 109' Red Card"
        goals2.innerHTML = "Iniesta 116'"
        date.textContent = "11 / 07 / 2010"
    }

    if (selectedYear == "4") {
        four_two_two_two("Buffon", "Zambrotta", "Grosso", "Materazzi", "Cannavaro", "Gattuso", "Camoranesi", "Pirlo", "Totti", "Toni", "Perrotta")
        four_two_three_one2("Barthez", "Sagnol", "Abidal", "Gallas", "Thuram", "Makelele", "Ribery", "Vieira", "Henry", "Zidane", "Malouda")
        flag1.src = "/football_img/logos/italy.png"
        flag2.src = "/football_img/logos/france.png"
        sidepic.src = "/football_img/logos/worldcup2006.png";
        manager1.textContent += "Marcello Lippi"
        manager2.textContent += "Raymond Domenech"
        team1.textContent = "ITALY"
        team2.textContent = "FRANCE"
        score.textContent = "1 - 1"
        OT.innerHTML = "5-3<br>on penalties"
        goals1.innerHTML = "Materazzi 19'"
        goals2.innerHTML = "Zidane 7' (P)<br>Zidane 110' Red Card"
        date.textContent = "09 / 07 / 2006"
    }

    if (selectedYear == "5") {
        three_five_two("Kahn", "Schneider", "Bode", "Linke", "Ramelow", "Metzelder", "Hamann", "Frings", "Neuville", "Jeremies", "Klose")
        three_four_two_one2("Marcos", "Cafu", "R Carlos", "Lucio", "Edmilson", "R Junior", "Rivaldo", "Kleberson", "Ronaldo", "Gilberto", "Ronaldinho")
        flag1.src = "/football_img/logos/germany.png"
        flag2.src = "/football_img/logos/brazil.png"
        sidepic.src = "/football_img/logos/worldcup2002.png";
        manager1.textContent += "Rudi Voller"
        manager2.textContent += "Luiz Felipe Scolari"
        team1.textContent = "GERMANY"
        team2.textContent = "BRAZIL"
        score.textContent = "0 - 2"
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = "Ronaldo 67'<br>Ronaldo 79'"
        date.textContent = "30 / 06 / 2002"
    }

    if (selectedYear == "6") {
        four_two_two_two("Taffarel", "Cafu", "R Carlos", "J Baiano", "Aldair", "Dunga", "Leonardo", "Sampaio", "Bebeto", "Ronaldo", "Rivaldo")
        four_three_two_one2("Barthez", "Thuram", "Lizarazu", "Desailly", "Leboeuf", "Deschamps", "Zidane", "Karembeu", "Guivarch", "Petit", "Djorkaeff")
        flag1.src = "/football_img/logos/brazil.png"
        flag2.src = "/football_img/logos/france.png"
        sidepic.src = "/football_img/logos/worldcup1998.png";
        manager1.textContent += "Mario Zagallo"
        manager2.textContent += "Aime Jacquet"
        team1.textContent = "BRAZIL"
        team2.textContent = "FRANCE"
        score.textContent = "0 - 3"
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = "Zidane 27'<br>Zidane 45'<br>Petit 90'<br>Desailly 68' Red Card"
        date.textContent = "12 / 07 / 1998"
    }
}