const yearSelector = document.querySelector(".yearSelector")
const FL = document.getElementById("FL");
const FL2 = document.getElementById("FL2");
const FC = document.getElementById("FC");
const FC2 = document.getElementById("FC2");
const FR = document.getElementById("FR");
const FR2 = document.getElementById("FR2");
const DL = document.getElementById("DL");
const DL2 = document.getElementById("DL2");
const DR = document.getElementById("DR");
const DR2 = document.getElementById("DR2");
const G = document.getElementById("G");
const G2 = document.getElementById("G2");
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

        FL.textContent = "Matthews";
        FC.textContent = "McDavid";
        FR.textContent = "Draisaitl";
        DL.textContent = "Makar";
        DR.textContent = "Hedman";
        G.textContent = "Shesterkin";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";
        
        sidepic.src = "/hockey_img/wallpapers/matthews.jpg";
        manager.textContent += "Rich Tocchet"
    }

    if (selectedYear === "1") {

        FL.textContent = "Draisaitl";
        FC.textContent = "McDavid";
        FR.textContent = "MacKinnon";
        DL.textContent = "Makar";
        DR.textContent = "Josi";
        G.textContent = "Shesterkin";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/wallpapers/draisaitl.jpg";
        manager.textContent += "Jim Montgomery"
    }

    if (selectedYear === "2") {

        FL.textContent = "Draisaitl";
        FC.textContent = "McDavid";
        FR.textContent = "MacKinnon";
        DL.textContent = "Josi";
        DR.textContent = "Makar";
        G.textContent = "Shesterkin";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/wallpapers/makar.jpg";
        manager.textContent += "Darryl Sutter "
    }

    if (selectedYear === "3") {

        FL.textContent = "Draisaitl";
        FC.textContent = "McDavid";
        FR.textContent = "MacKinnon";
        DL.textContent = "Hedman";
        DR.textContent = "Josi";
        G.textContent = "Vasilevskiy";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/wallpapers/mackinnon.jpg";
        manager.textContent += "Rod Brind'Amour"
    }

    if (selectedYear === "4") {

        FL.textContent = "Crosby";
        FC.textContent = "McDavid";
        FR.textContent = "Kucherov";
        DL.textContent = "Hedman";
        DR.textContent = "Doughty";
        G.textContent = "Vasilevskiy";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/wallpapers/kucherov.jpg";
        manager.textContent += "Bruce Cassidy"
    }

    if (selectedYear === "5") {

        FL.textContent = "Ovechkin";
        FC.textContent = "McDavid";
        FR.textContent = "Crosby";
        DL.textContent = "Doughty";
        DR.textContent = "Hedman";
        G.textContent = "Price";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/wallpapers/price.jpg";
        manager.textContent += "Barry Trotz"
    }

    if (selectedYear === "6") {

        FL.textContent = "Crosby";
        FC.textContent = "McDavid";
        FR.textContent = "P Kane";
        DL.textContent = "E Karlsson";
        DR.textContent = "Doughty";
        G.textContent = "Price";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/wallpapers/kane.jpg";
        manager.textContent += "Gerard Gallant"
    }

    if (selectedYear === "7") {

        FL.textContent = "Benn";
        FC.textContent = "Crosby";
        FR.textContent = "P Kane";
        DL.textContent = "Doughty";
        DR.textContent = "E Karlsson";
        G.textContent = "Price";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/wallpapers/e karlsson.jpg";
        manager.textContent += "John Tortorella"
    }

    if (selectedYear === "8") {

        FL.textContent = "Ovechkin";
        FC.textContent = "Crosby";
        FR.textContent = "J Toews";
        DL.textContent = "Weber";
        DR.textContent = "Doughty";
        G.textContent = "Price";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/wallpapers/ovechkin.png";
        manager.textContent += "Barry Trotz"
    }

    if (selectedYear === "9") {

        FL.textContent = "Ovechkin";
        FC.textContent = "Crosby";
        FR.textContent = "J Toews";
        DL.textContent = "Doughty";
        DR.textContent = "Weber";
        G.textContent = "Price";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/wallpapers/toews.jpg";
        manager.textContent += "Bob Hartley"
    }

    if (selectedYear === "10") {

        FL.textContent = "Ovechkin";
        FC.textContent = "Crosby";
        FR.textContent = "Datsyuk";
        DL.textContent = "Weber";
        DR.textContent = "Chara";
        G.textContent = "Lundqvist";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/wallpapers/weber.jpg";
        manager.textContent += "Patrick Roy"
    }

    if (selectedYear === "11") {

        FL.textContent = "Ovechkin";
        FC.textContent = "Datsyuk";
        FR.textContent = "Crosby";
        DL.textContent = "Weber";
        DR.textContent = "Chara";
        G.textContent = "Lundqvist";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/wallpapers/datsyuk.jpg";
        manager.textContent += "Paul MacLean"
    }

    if (selectedYear === "12") {

        FL.textContent = "Ovechkin";
        FC.textContent = "Crosby";
        FR.textContent = "Datsyuk";
        DL.textContent = "Weber";
        DR.textContent = "Chara";
        G.textContent = "Lundqvist";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/wallpapers/lundqvist.png";
        manager.textContent += "Ken Hitchcock"
    }

    if (selectedYear === "13") {
        FL.textContent = "Ovechkin";
        FC.textContent = "Crosby";
        FR.textContent = "Malkin";
        DL.textContent = "Chara";
        DR.textContent = "Lidstrom";
        G.textContent = "Lundqvist";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/wallpapers/malkin.jpg";
        manager.textContent += "Dan Bylsma"
    }

    if (selectedYear === "14") {

        FL.textContent = "Ovechkin";
        FC.textContent = "Crosby";
        FR.textContent = "P Kane";
        DL.textContent = "Lidstrom";
        DR.textContent = "Keith";
        G.textContent = "R Miller";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/wallpapers/lidstrom.jpg";
        manager.textContent += "Dave Tippett"
    }

    if (selectedYear === "15") {

        FL.textContent = "Ovechkin";
        FC.textContent = "Crosby";
        FR.textContent = "Malkin";
        DL.textContent = "Chara";
        DR.textContent = "Lidstrom";
        G.textContent = "Lundqvist";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/wallpapers/chara.jpg";
        manager.textContent += "Claude Julien"
    }

    if (selectedYear === "16") {

        FL.textContent = "Ovechkin";
        FC.textContent = "Crosby";
        FR.textContent = "Malkin";
        DL.textContent = "Lidstrom";
        DR.textContent = "Chara";
        G.textContent = "Lundqvist";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/wallpapers/crosby.jpg";
        manager.textContent += "Bruce Boudreau"
    }

    if (selectedYear === "17") {

        FL.textContent = "Ovechkin";
        FC.textContent = "Crosby";
        FR.textContent = "Thornton";
        DL.textContent = "Lidstrom";
        DR.textContent = "S Niedermayer";
        G.textContent = "Luongo";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/wallpapers/thornton 2.jpg";
        manager.textContent += "Alain Vigneault"
    }

    if (selectedYear === "18") {

        FL.textContent = "Ovechkin";
        FC.textContent = "Crosby";
        FR.textContent = "Jagr";
        DL.textContent = "Lidstrom";
        DR.textContent = "Chara";
        G.textContent = "Luongo";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/wallpapers/jagr.webp";
        manager.textContent += "Lindy Ruff"
    }

    if (selectedYear === "19") {

        FL.textContent = "";
        FC.textContent = "LOCKOUT";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "";
        FC2.src = "";
        FR2.src = "";
        DL2.src = "";
        DR2.src = "";
        G2.src = "";

        sidepic.src = "";
        manager.textContent = ""
    }

    if (selectedYear === "20") {

        FL.textContent = "Jagr";
        FC.textContent = "Thornton";
        FR.textContent = "Iginla";
        DL.textContent = "Lidstrom";
        DR.textContent = "Chara";
        G.textContent = "Brodeur";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/wallpapers/brodeur.png";
        manager.textContent += "John Tortorella"
    }

    if (selectedYear === "21") {

        FL.textContent = "Jagr";
        FC.textContent = "Thornton";
        FR.textContent = "Iginla";
        DL.textContent = "Lidstrom";
        DR.textContent = "S Niedermayer";
        G.textContent = "Brodeur";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/wallpapers/s niedermayer.jpg";
        manager.textContent += "Jacques Lemaire"
    }

    if (selectedYear === "22") {

        FL.textContent = "Jagr";
        FC.textContent = "Sakic";
        FR.textContent = "Iginla";
        DL.textContent = "Lidstrom";
        DR.textContent = "Pronger";
        G.textContent = "P Roy";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/wallpapers/pronger.jpg";
        manager.textContent += "Bob Francis"
    }

    if (selectedYear === "23") {

        FL.textContent = "Lemieux";
        FC.textContent = "Sakic";
        FR.textContent = "Jagr";
        DL.textContent = "Lidstrom";
        DR.textContent = "Pronger";
        G.textContent = "P Roy";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/wallpapers/lemieux.jpg";
        manager.textContent += "Bill Barber"
    }

    if (selectedYear === "24") {

        FL.textContent = "Lemieux";
        FC.textContent = "Sakic";
        FR.textContent = "Jagr";
        DL.textContent = "Pronger";
        DR.textContent = "Lidstrom";
        G.textContent = "P Roy";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/wallpapers/sakic 2.png";
        manager.textContent += "Joel Quenneville"
    }

    if (selectedYear === "25") {

        FL.textContent = "Lemieux";
        FC.textContent = "Sakic";
        FR.textContent = "Jagr";
        DL.textContent = "Lidstrom";
        DR.textContent = "Pronger";
        G.textContent = "P Roy";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/wallpapers/p roy.jpg";
        manager.textContent += "Jacques Martin"
    }

    if (selectedYear === "26") {

        FL.textContent = "Lemieux";
        FC.textContent = "Sakic";
        FR.textContent = "Jagr";
        DL.textContent = "Pronger";
        DR.textContent = "Lidstrom";
        G.textContent = "P Roy";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/hockey_img/wallpapers/lidstrom 2.jpg";
        manager.textContent += "Pat Burns"
    }
}