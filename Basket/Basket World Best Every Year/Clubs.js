const yearSelector = document.querySelector(".yearSelector")
const SG = document.getElementById("SG");
const SG2 = document.getElementById("SG2");
const PG = document.getElementById("PG");
const PG2 = document.getElementById("PG2");
const SF = document.getElementById("SF");
const SF2 = document.getElementById("SF2");
const PF = document.getElementById("PF");
const PF2 = document.getElementById("PF2");
const C = document.getElementById("C");
const C2 = document.getElementById("C2");
const sidepic = document.querySelector(".sidepic");
const manager = document.querySelector(".manager")

yearSelector.addEventListener("change", () => {
    updatePlayerInfo();
});

let selectedYear = 0;

function updatePlayerInfo() {

    selectedYear = yearSelector.value;
    manager.textContent = "Best Head Coach: "

    if (selectedYear === "0") {

        PG.textContent = "L Doncic";
        SG.textContent = "S Gilgeous-Alexander";
        SF.textContent = "G Antetokounmpo";
        PF.textContent = "N Jokic";
        C.textContent = "J Embiid";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/wallpapers/gilgeous-alexander.jpeg";
        manager.textContent += "Mark Daigneault"
    }

    if (selectedYear === "1") {

        PG.textContent = "S Curry";
        SG.textContent = "L James";
        SF.textContent = "G Antetokounmpo";
        PF.textContent = "N Jokic";
        C.textContent = "J Embiid";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/wallpapers/embiid.jpg";
        manager.textContent += "Mike Brown"
    }
    
    if (selectedYear === "2") {

        PG.textContent = "S Curry";
        SG.textContent = "L James";
        SF.textContent = "K Durant";
        PF.textContent = "G Antetokounmpo";
        C.textContent = "N Jokic";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/wallpapers/jokic.webp";
        manager.textContent += "Monty Williams"
    }
    
    if (selectedYear === "3") {

        PG.textContent = "S Curry";
        SG.textContent = "J Harden";
        SF.textContent = "L James";
        PF.textContent = "G Antetokounmpo";
        C.textContent = "A Davis";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/wallpapers/antetokounmpo.jpg";
        manager.textContent += "Tom Thibodeau"
    }

    if (selectedYear === "4") {

        PG.textContent = "J Harden";
        SG.textContent = "L James";
        SF.textContent = "K Leonard";
        PF.textContent = "K Durant";
        C.textContent = "G Antetokounmpo";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/wallpapers/leonard.jpg";
        manager.textContent += "Nick Nurse"
    }

    if (selectedYear === "5") {

        PG.textContent = "S Curry";
        SG.textContent = "J Harden";
        SF.textContent = "L James";
        PF.textContent = "K Durant";
        C.textContent = "G Antetokounmpo";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/wallpapers/harden.jpg";
        manager.textContent += "Mike Budenholzer"
    }

    if (selectedYear === "6") {
        
        PG.textContent = "S Curry";
        SG.textContent = "J Harden";
        SF.textContent = "K Leonard";
        PF.textContent = "L James";
        C.textContent = "K Durant";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/wallpapers/curry.jpg";
        manager.textContent += "Dwane Casey"
    }
    if (selectedYear === "7") {

        PG.textContent = "S Curry";
        SG.textContent = "R Westbrook";
        SF.textContent = "K Leonard";
        PF.textContent = "L James";
        C.textContent = "K Durant";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/wallpapers/westbrook.jpg";
        manager.textContent += "Mike D'Antoni"
    }

    if (selectedYear === "8") {

        PG.textContent = "S Curry";
        SG.textContent = "J Harden";
        SF.textContent = "L James";
        PF.textContent = "K Durant";
        C.textContent = "A Davis";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/wallpapers/james 2.jpg";
        manager.textContent += "Steve Kerr"
    }

    if (selectedYear === "9") {

        PG.textContent = "C Paul";
        SG.textContent = "J Harden";
        SF.textContent = "L James";
        PF.textContent = "C Anthony";
        C.textContent = "K Durant";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/wallpapers/c anthony.jpg";
        manager.textContent += "Mike Budenholzer"
    }

    if (selectedYear === "10") {

        PG.textContent = "C Paul";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "K Durant";
        C.textContent = "T Duncan";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/wallpapers/c paul.jpg";
        manager.textContent += "Gregg Popovich"
    }

    if (selectedYear === "11") {

        PG.textContent = "C Paul";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "K Durant";
        C.textContent = "D Howard";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/wallpapers/d howard.jpg";
        manager.textContent += "George Karl"
    }

    if (selectedYear === "12") {

        PG.textContent = "D Wade";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "K Durant";
        C.textContent = "D Howard";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/wallpapers/wade 2.jpg";
        manager.textContent += "Gregg Popovich"
    }

    if (selectedYear === "13") {

        PG.textContent = "A Iverson";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "T Duncan";
        C.textContent = "S O'Neal";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/wallpapers/iverson 2.jpg";
        manager.textContent += "Tom Thibodeau"
    }

    if (selectedYear === "14") {

        PG.textContent = "D Wade";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "K Durant";
        C.textContent = "D Howard";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/wallpapers/durant.jpg";
        manager.textContent += "Scott Brooks"
    }

    if (selectedYear === "15") {

        PG.textContent = "C Paul";
        SG.textContent = "D Wade";
        SF.textContent = "K Bryant";
        PF.textContent = "L James";
        C.textContent = "D Howard";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/wallpapers/james 2.jpg";
        manager.textContent += "Mike Brown"
    }

    if (selectedYear === "16") {

        PG.textContent = "C Paul";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "K Garnett";
        C.textContent = "T Duncan";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/wallpapers/garnett.webp";
        manager.textContent += "Byron Scott"
    }
    if (selectedYear === "17") {

        PG.textContent = "S Nash";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "T Duncan";
        C.textContent = "D Nowitzki";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/wallpapers/nowitzki.webp";
        manager.textContent += "Sam Mitchel"
    }

    if (selectedYear === "18") {

        PG.textContent = "S Nash";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "D Nowitzki";
        C.textContent = "T Duncan";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/wallpapers/nash.jpg";
        manager.textContent += "Avery Johnson"
    }

    if (selectedYear === "19") {

        PG.textContent = "A Iverson";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "T Duncan";
        C.textContent = "S O'Neal";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/wallpapers/duncan.jpg";
        manager.textContent += "Mike D'Antoni"
    }

    if (selectedYear === "20") {

        PG.textContent = "A Iverson";
        SG.textContent = "K Bryant";
        SF.textContent = "T McGrady";
        PF.textContent = "K Garnett";
        C.textContent = "S O'Neal";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/wallpapers/mcgrady.jpg";
        manager.textContent += "Hubie Brown"
    }

    if (selectedYear === "21") {

        PG.textContent = "A Iverson";
        SG.textContent = "K Bryant";
        SF.textContent = "T McGrady";
        PF.textContent = "T Duncan";
        C.textContent = "S O'Neal";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/wallpapers/bryant.jpg";
        manager.textContent += "Gregg Popovich"
    }

    if (selectedYear === "22") {

        PG.textContent = "A Iverson";
        SG.textContent = "T McGrady";
        SF.textContent = "K Bryant";
        PF.textContent = "T Duncan";
        C.textContent = "S O'Neal";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/wallpapers/shaquille.jpg";
        manager.textContent += "Rick Carlisle"
    }

    if (selectedYear === "23") {

        PG.textContent = "A Iverson";
        SG.textContent = "V Carter";
        SF.textContent = "K Bryant";
        PF.textContent = "T Duncan";
        C.textContent = "S O'Neal";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/wallpapers/v carter.jpg";
        manager.textContent += "Larry Brown"
    }

    if (selectedYear === "24") {

        PG.textContent = "J Kidd";
        SG.textContent = "A Iverson";
        SF.textContent = "K Bryant";
        PF.textContent = "T Duncan";
        C.textContent = "S O'Neal";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/wallpapers/kidd.jpg";
        manager.textContent += "Doc Rivers"
    }

    if (selectedYear === "25") {

        PG.textContent = "J Kidd";
        SG.textContent = "A Iverson";
        SF.textContent = "G Hill";
        PF.textContent = "T Duncan";
        C.textContent = "S O'Neal";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/wallpapers/hill.jpg";
        manager.textContent += "Mike Dunleavy"
    }
    
    if (selectedYear === "26") {

        PG.textContent = "G Payton";
        SG.textContent = "M Jordan";
        SF.textContent = "S Pippen";
        PF.textContent = "K Malone";
        C.textContent = "S O'Neal";

        PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/basket_img/wallpapers/jordan 2.jpg";
        manager.textContent += "Larry Bird"
    }
}