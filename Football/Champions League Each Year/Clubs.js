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
        goals2.innerHTML = "Carvajal 74'<br>Vini Jr 83'"
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
        goals1.innerHTML = "Rodri 68'"
        goals2.innerHTML = ""
        date.textContent = "Istanbul, Turkey"
    }

    if (selectedYear == "2") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.textContent = ""
        team2.textContent = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "Paris, France"
    }

    if (selectedYear == "3") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.textContent = ""
        team2.textContent = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "Porto, Portugal"
    }

    if (selectedYear == "4") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.textContent = ""
        team2.textContent = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "Lisbon, Portugal"
    }

    if (selectedYear == "5") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.textContent = ""
        team2.textContent = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "Madrid, Spain"
    }

    if (selectedYear == "6") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.textContent = ""
        team2.textContent = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "Kyiv, Ukraine"
    }

    if (selectedYear == "7") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.textContent = ""
        team2.textContent = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "Cardiff, Wales"
    }

    if (selectedYear == "8") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.textContent = ""
        team2.textContent = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "Milan, Italy"
    }

    if (selectedYear == "9") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.textContent = ""
        team2.textContent = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "Berlin, Germany"
    }

    if (selectedYear == "10") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.textContent = ""
        team2.textContent = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "Lisbon, Portugal"
    }

    if (selectedYear == "11") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.textContent = ""
        team2.textContent = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "London, England"
    }

    if (selectedYear == "12") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.textContent = ""
        team2.textContent = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "Munich, Germany"
    }

    if (selectedYear == "13") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.textContent = ""
        team2.textContent = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "London, England"
    }

    if (selectedYear == "14") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.textContent = ""
        team2.textContent = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "Madrid, Spain"
    }

    if (selectedYear == "15") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.textContent = ""
        team2.textContent = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "Rome, Italy"
    }
    if (selectedYear == "16") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.textContent = ""
        team2.textContent = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "Moscow, Russia"
    }
    if (selectedYear == "17") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.textContent = ""
        team2.textContent = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "Athens, Greece"
    }
    if (selectedYear == "18") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.textContent = ""
        team2.textContent = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "Paris, France"
    }
    if (selectedYear == "19") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.textContent = ""
        team2.textContent = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "Istanbul, Turkey"
    }
    if (selectedYear == "20") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.textContent = ""
        team2.textContent = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "Gelsenkirchen, Germany"
    }
    if (selectedYear == "21") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.textContent = ""
        team2.textContent = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "Manchester, England"
    }
    if (selectedYear == "22") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.textContent = ""
        team2.textContent = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "Glasgow, Scotland"
    }
    if (selectedYear == "23") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.textContent = ""
        team2.textContent = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "Milan, Italy"
    }
    if (selectedYear == "24") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.textContent = ""
        team2.textContent = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "Saint-Denis (Paris), France"
    }
    if (selectedYear == "25") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.textContent = ""
        team2.textContent = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "Barcelona, Spain"
    }
    if (selectedYear == "26") {
        four_two_three_one("", "", "", "", "", "", "", "", "", "", "")
        four_two_three_one2("", "", "", "", "", "", "", "", "", "", "")
        flag1.src = "/football_img/logos/"
        flag2.src = "/football_img/logos/"
        sidepic.src = "/football_img/logos/champions league.png";
        manager1.textContent += ""
        manager2.textContent += ""
        team1.textContent = ""
        team2.textContent = ""
        score.textContent = ""
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = ""
        date.textContent = "Amsterdam, Netherlands"
    }
}