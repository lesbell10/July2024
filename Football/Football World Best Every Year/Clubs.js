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
} from '../../Formations.js'

const yearSelector = document.querySelector(".yearSelector");
const sidepic = document.querySelector(".sidepic");
const manager = document.querySelector(".manager")

yearSelector.addEventListener("change", () => {
    updatePlayerInfo();
});

let selectedYear = 0;

function updatePlayerInfo() {

    selectedYear = yearSelector.value;
    manager.textContent = "Best Head Coach: "

    if (selectedYear == "0") {
        four_two_three_one("Courtois", "Kimmich", "Robertson", "van Dijk", "R Dias", "Rodri", "Mbappe", "De Bruyne", "Haaland", "Messi", "Vini Jr");
        sidepic.src = "/football_img/wallpapers/haaland.jpg";
        manager.textContent += "Carlo Ancelotti"
    }

    if (selectedYear == "1") {
        four_two_three_one("Courtois", "Alexander-Arnold", "Cancelo", "Marquinhos", "van Dijk", "Kimmich", "Messi", "Kroos", "Benzema", "De Bruyne", "Mbappe");
        sidepic.src = "/football_img/wallpapers/mbappe.jpg";
        manager.textContent += "Pep Guardiola"
    }

    if (selectedYear == "2") {
        four_two_three_one("Oblak", "Alexander-Arnold", "Robertson", "R Dias", "van Dijk", "Kante", "C Ronaldo", "De Bruyne", "Lewandowski", "Messi", "Neymar");
        sidepic.src = "/football_img/wallpapers/de bruyne.jpg";
        manager.textContent += "Carlo Ancelotti"
    }

    if (selectedYear == "3") {
        four_two_three_one("Oblak", "Kimmich", "Robertson", "S Ramos", "van Dijk", "Casemiro", "Salah", "De Bruyne", "Lewandowski", "Messi", "C Ronaldo");
        sidepic.src = "/football_img/wallpapers/salah.jpg";
        manager.textContent += "Thomas Tuchel";
    }

    if (selectedYear == "4") {
        four_two_three_one("Oblak", "Alexander-Arnold", "Chiellini", "S Ramos", "van Dijk", "Kante", "Messi", "De Bruyne", "C Ronaldo", "E Hazard", "Neymar");
        sidepic.src = "/football_img/wallpapers/neymar.jpg";
        manager.textContent += "Hans-Dieter Flick";
    }

    if (selectedYear == "5") {
        four_two_three_one("Oblak", "Kimmich", "Chiellini", "van Dijk", "S Ramos", "Kante", "Messi", "Modric", "C Ronaldo", "E Hazard", "Neymar");
        sidepic.src = "/football_img/wallpapers/hazard.jpg";
        manager.textContent += "Jurgen Klopp";
    }

    if (selectedYear == "6") {
        four_two_three_one("De Gea", "S Ramos", "Chiellini", "Hummels", "Pique", "Kroos", "Messi", "Modric", "C Ronaldo", "E Hazard", "Neymar");
        sidepic.src = "/football_img/wallpapers/c ronaldo.jpg";
        manager.textContent += "Didier Deschamps";
    }

    if (selectedYear == "7") {
        four_two_three_one("Neuer", "S Ramos", "Marcelo", "Boateng", "T Silva", "Pogba", "C Ronaldo", "Modric", "L Suarez", "Messi", "Neymar");
        sidepic.src = "/football_img/wallpapers/modric.jpg";
        manager.textContent += "Zinedine Zidane";
    }

    if (selectedYear == "8") {
        four_two_three_one("Neuer", "S Ramos", "Marcelo", "T Silva", "Boateng", "Pogba", "Bale", "Modric", "L Suarez", "Messi", "C Ronaldo");
        sidepic.src = "/football_img/wallpapers/pogba.jpg";
        manager.textContent += "Zinedine Zidane";
    }

    if (selectedYear == "9") {
        four_two_three_one("Neuer", "D Alves", "Lahm", "S Ramos", "T Silva", "Pogba", "C Ronaldo", "Iniesta", "L Suarez", "Messi", "Neymar");
        sidepic.src = "/football_img/wallpapers/suarez.jpg";
        manager.textContent += "Luis Enrique";
    }

    if (selectedYear == "10") {
        four_two_three_one("Buffon", "D Alves", "Lahm", "S Ramos", "T Silva", "Schweinsteiger", "C Ronaldo", "Iniesta", "Ibrahimovic", "Messi", "Neymar");
        sidepic.src = "/football_img/wallpapers/d alves.jpg";
        manager.textContent += "Joachim Low";
    }

    if (selectedYear == "11") {
        four_two_three_one("Casillas", "D Alves", "Lahm", "S Ramos", "T Silva", "Schweinsteiger", "C Ronaldo", "Iniesta", "Ibrahimovic", "Messi", "Ribery");
        sidepic.src = "/football_img/wallpapers/iniesta.jpg";
        manager.textContent += "Jupp Heynckes";
    }

    if (selectedYear == "12") {
        four_two_three_one("Casillas", "D Alves", "Lahm", "S Ramos", "T Silva", "Schweinsteiger", "Messi", "Xavi", "Rooney", "Iniesta", "C Ronaldo");
        sidepic.src = "/football_img/wallpapers/rooney.jpg";
        manager.textContent += "Roberto Di Matteo";
    }

    if (selectedYear == "13") {
        four_two_three_one("Casillas", "D Alves", "Lahm", "S Ramos", "T Silva", "Schweinsteiger", "Messi", "Xavi", "Rooney", "Iniesta", "C Ronaldo");
        sidepic.src = "/football_img/wallpapers/xavi.jpg";
        manager.textContent += "Pep Guardiola"
    }

    if (selectedYear == "14") {
        four_two_three_one("Casillas", "Maicon", "Marcelo", "Vidic", "T Silva", "Gerrard", "Messi", "Xavi", "Rooney", "Iniesta", "C Ronaldo");
        sidepic.src = "/football_img/wallpapers/casillas.jpg";
        manager.textContent += "Jose Mourinho"
    }

    if (selectedYear == "15") {
        four_two_three_one("Casillas", "D Alves", "Lahm", "Vidic", "Puyol", "Gerrard", "Messi", "Xavi", "Ibrahimovic", "Kaka", "C Ronaldo");
        sidepic.src = "/football_img/wallpapers/kaka.jpg";
        manager.textContent += "Pep Guardiola"
    }

    if (selectedYear == "16") {
        four_two_three_one("Casillas", "D Alves", "Marcelo", "Ferdinand", "Puyol", "Gerrard", "Messi", "Iniesta", "Ibrahimovic", "Kaka", "C Ronaldo");
        sidepic.src = "/football_img/wallpapers/ibrahimovic.jpg";
        manager.textContent += "Sir Alex Ferguson"
    }

    if (selectedYear == "17") {
        four_two_three_one("Buffon", "D Alves", "Marcelo", "Vidic", "Ferdinand", "Pirlo", "Messi", "Gerrard", "Henry", "Ronaldinho", "C Ronaldo");
        sidepic.src = "/football_img/wallpapers/henry.jpg";
        manager.textContent += "Carlo Ancelotti"
    }

    if (selectedYear == "18") {
        four_two_three_one("Buffon", "Cafu", "R Carlos", "Terry", "Nesta", "Gerrard", "Messi", "Zidane", "Henry", "Ronaldinho", "C Ronaldo");
        sidepic.src = "/football_img/wallpapers/gerrard.jpg";
        manager.textContent += "Fabio Capello"
    }

    if (selectedYear == "19") {
        four_two_three_one("Buffon", "Cafu", "Maldini", "Puyol", "Ferdinand", "Gerrard", "Totti", "Zidane", "Henry", "Kaka", "Ronaldinho");
        sidepic.src = "/football_img/wallpapers/maldini 2.jpg";
        manager.textContent += "Rafael Benítez"
    }

    if (selectedYear == "20") {
        four_two_three_one("Buffon", "Thuram", "R Carlos", "Maldini", "Nesta", "Vieira", "Beckham", "Zidane", "Ronaldo", "Ronaldinho", "Henry");
        sidepic.src = "/football_img/wallpapers/beckham.jpg";
        manager.textContent += "Jose Mourinho"
    }

    if (selectedYear == "21") {
        four_two_three_one("Buffon", "Cafu", "R Carlos", "Maldini", "Cannavaro", "Gerrard", "Beckham", "Zidane", "Ronaldo", "Ronaldinho", "Henry");
        sidepic.src = "/football_img/wallpapers/buffon.jpg";
        manager.textContent += "Carlo Ancelotti"
        manager.textContent += "";
    }

    if (selectedYear == "22") {
        four_two_three_one("Kahn", "Cafu", "R Carlos", "Maldini", "Nesta", "Davids", "Figo", "Ballack", "Ronaldo", "Zidane", "Henry");
        sidepic.src = "/football_img/wallpapers/r carlos.jpg";
        manager.textContent += "Vicente del Bosque"
    }

    if (selectedYear == "23") {
        four_two_three_one("Barthez", "Cafu", "R Carlos", "Maldini", "Hierro", "Davids", "Figo", "Nedved", "Ronaldo", "Zidane", "Henry");
        sidepic.src = "/football_img/wallpapers/davids.jpg";
        manager.textContent += "Ottmar Hitzfeld"
    }

    if (selectedYear == "24") {
        four_two_three_one("Kahn", "Cafu", "R Carlos", "Maldini", "Hierro", "Davids", "Figo", "Zidane", "Ronaldo", "Rui Costa", "Henry");
        sidepic.src = "/football_img/wallpapers/figo.jpg";
        manager.textContent += "Vicente del Bosque"
    }

    if (selectedYear == "25") {
        four_two_three_one("Kahn", "Cafu", "R Carlos", "Maldini", "Nesta", "Davids", "Beckham", "Ballack", "Ronaldo", "Zidane", "Figo");
        sidepic.src = "/football_img/wallpapers/ballack.jpg";
        manager.textContent += "Sir Alex Ferguson"
    }

    if (selectedYear == "26") {
        four_two_three_one("Kahn", "Thuram", "R Carlos", "Maldini", "Hierro", "Davids", "Rivaldo", "Ballack", "Ronaldo", "Zidane", "Figo");
        sidepic.src = "/football_img/wallpapers/rivaldo.jpg";
        manager.textContent += "Arsene Wenger"
    }
}