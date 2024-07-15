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
// const substitutes1 = document.querySelector(".substitutes1")
// const substitutes2 = document.querySelector(".substitutes2")
const score = document.querySelector(".score");
const OT = document.querySelector(".OT")
const team1 = document.querySelector(".team1")
const team2 = document.querySelector(".team2")
const goals1 = document.querySelector(".goals1")
const goals2 = document.querySelector(".goals2")
const date = document.querySelector(".date")

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
    // substitutes1.innerHTML = "Substitutes: "
    // substitutes2.innerHTML = "Substitutes: "
    OT.style.textAlign = "center"
    flag1.style.borderRadius = "100%"
    flag2.style.borderRadius = "100%"
    flag1.style.left = "23%"
    flag2.style.right = "23%"

    if (selectedYear == "0") {
        four_four_two("E Martinez", "N Molina", "Acuna", "Li Martinez", "C Romero", "L Paredes", "Di Maria", "R De Paul", "L Messi", "Alvarez", "Mac Allister")
        four_four_two2("Crepeau", "Johnston", "A Davies", "Cornelius", "Bombito", "Eustaquio", "Buchanan", "I Kone", "J David", "Larin", "Millar")
        flag1.src = "/football_img/logos/argentina.webp"
        flag2.src = "/football_img/logos/canada.webp"
        sidepic.src = "/football_img/logos/copa america 2024.png";
        manager1.textContent += "Lionel Scaloni"
        manager2.textContent += "Jesse Marsch"
        // substitutes1.innerHTML += "F Armani, G Rulli, L Quarta<br> Otamendi, Pezzella, Tagliafico, G Montiel, G Rodríguez, E Fernández<br> E Palacios, V Carboni, G Lo Celso, A Garnacho, N González, La Martínez"
        // substitutes2.innerHTML += "T McGill, D St. Clair, L De Fougerolles<br> K Hiebert, K Miller, J Waterman, R Laryea, S Piette, A Ahmed<br> M Choinière, J Osorio, J Shaffelburg, T Bair, T Oluwaseyi, J Russell-Rowe"
        team1.innerHTML = "ARGENTINA"
        team2.innerHTML = "CANADA"
        score.textContent = "2 - 0"
        OT.innerHTML = ""
        goals1.innerHTML = "Alvarez 49' ⚽<br>La Martinez 88'⚽"
        goals2.innerHTML = ""
        date.textContent = "20 / 06 / 2024"
    }

    if (selectedYear == "1") {
        four_two_three_one("C Bravo", "M Isla", "G Suazo", "P Diaz", "I Lichnovsky", "Echeverria", "D Osorio", "Pulgar", "E Vargas", "A Sanchez", "Davila")
        four_four_two2("E Martinez", "N Molina", "Tagliafico", "Li Martinez", "C Romero", "E Fernandez", "De Paul", "Mac Allister", "Messi", "Alvarez", "N Gonzalez")
        flag1.src = "/football_img/logos/chile.png"
        flag2.src = "/football_img/logos/argentina.webp"
        sidepic.src = "/football_img/logos/copa america 2024.png";
        manager1.textContent += "Ricardo Gareca"
        manager2.textContent += "Lionel Scaloni"
        // substitutes1.innerHTML += "Arias, B Cortés, M Catalán<br> B Kuscevic, G Maripán, T Galdames, N Fernández, E Pavez<br> M Núñez, C Pérez, B Díaz, M Bolados, M Guerrero, C  Zavala"
        // substitutes2.innerHTML += "F Armani, G Rulli, L Quarta<br> Otamendi, Pezzella, Acuña, G Montiel, L Paredes, G Rodríguez<br> E Palacios, V Carboni, G Lo Celso, A Garnacho, Di María, La Martínez"
        team1.innerHTML = "CHILE"
        team2.innerHTML = "ARGENTINA"
        score.textContent = "0 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = "La Martinez 88' ⚽"
        date.textContent = "25 / 06 / 2024"
    }

    if (selectedYear == "2") {
        four_two_three_one("Crepeau", "Johnston", "A Davies", "Cornelius", "Bombito", "Eustaquio", "Laryea", "Osorio", "Larin", "J David", "Shaffelburg")
        four_two_three_one2("G Arias", "M Isla", "G Suazo", "Maripan", "I Lichnovsky", "Echeverria", "D Osorio", "M Nunez", "E Vargas", "A Sanchez", "Davila")
        flag1.src = "/football_img/logos/canada.png"
        flag2.src = "/football_img/logos/chile.png"
        sidepic.src = "/football_img/logos/copa america 2024.png";
        manager1.textContent += "Jesse Marsch"
        manager2.textContent += "Sergio Santín"
        // substitutes1.innerHTML += "T McGill, D St. Clair, Waterman<br> K Hiebert, K Miller, L De Fougerolles, S Piette, A Ahmed, M Choinière<br> I Koné, Buchanan, L Millar, T Bair, T Oluwaseyi, J Russell-Rowe"
        // substitutes2.innerHTML += "B Cortés, M Catalán, P Díaz, B Kuscevic<br> T Galdames, N Fernández, E Pavez, Pulgar, C Pérez<br> B Díaz, C Zavala, M Bolados, M Guerrero"
        team1.innerHTML = "CANADA"
        team2.innerHTML = "CHILE"
        score.textContent = "0 - 0"
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = "G Suazo 27' 🟨🟥"
        date.textContent = "29 / 06 / 2024"
    }

    if (selectedYear == "3") {
        four_three_three("Turner", "J Scally", "A Robinson", "Ream", "C Richards", "T Adams", "Pulisic", "McKennie", "Balogun", "Y Musah", "G Reyna")
        four_two_three_one2("Rochet", "Nandez", "Vina", "M Olivera", "R Araujo", "Valverde", "Pellistri", "Ugarte", "D Nunez", "N de la Cruz", "M Araujo")
        flag1.src = "/football_img/logos/usa.png"
        flag2.src = "/football_img/logos/uruguay.png"
        sidepic.src = "/football_img/logos/copa america 2024.png";
        manager1.textContent += "Gregg Berhalter"
        manager2.textContent += "Marcelo Bielsa"
        // substitutes1.innerHTML += "R Pepi, J Sargent, H Wright<br> M Tillman, J Cardoso, E Horvath, S Moore, C Carter-Vickers<br> K Lund, B Aaronson, M Robinson, S Johnson, M McKenzie, L de la Torre"
        // substitutes2.innerHTML += "C Olivera, J Giménez, Bentancur<br> S Cáceres, L Suárez, B Rodríguez, F Israel, G de Arrascaeta<br> B Ocampo, S Mele, G Varela, E Martínez, L Olaza, N Marichal, A Canobbio"
        team1.innerHTML = "UNITED STATES"
        team2.innerHTML = "URUGUAY"
        score.textContent = "0 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = "M Olivera 66' ⚽<br>"
        date.textContent = "01 / 07 / 2024"
    }

    if (selectedYear == "4") {
        four_two_three_one("Alisson", "Danilo", "Wendell", "Marquinhos", "Militao", "J Gomes", "Raphinha", "B Guimaraes", "Rodrygo", "Paqueta", "Vini Jr")
        four_three_three2("C Vargas", "D Munoz", "D Machado", "C Cuesta", "D Sanchez", "J Lerma", "J Rodriguez", "R Rios", "J Cordoba", "J Arias", "L Diaz")
        flag1.src = "/football_img/logos/brazil.png"
        flag2.src = "/football_img/logos/colombia.png"
        sidepic.src = "/football_img/logos/copa america 2024.png";
        manager1.textContent += "Dorival Junior"
        manager2.textContent += "Néstor Lorenzo"
        // substitutes1.innerHTML += "A Pereira, Éderson, Savinho<br> Endrick, D Luiz, Beraldo, G Arana, Bento<br> Bremer, Rafael, Evanilson, G Martinelli, Y Couto, Gabriel M, Pepê"
        // substitutes2.innerHTML += "J Mojica, M Uribe, R Borré<br> J Carrascal, L Sinisterra, J Durán, S Arias, Y Mina<br> Á Montero, Y Asprilla, D Ospina, K Castaño, J Quintero, M Borja"
        team1.innerHTML = "BRAZIL"
        team2.innerHTML = "COLOMBIA"
        score.textContent = "1 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = "Raphinha 12' ⚽"
        goals2.innerHTML = "D Munoz 45+2' ⚽"
        date.textContent = "02 / 07 / 2024"
    }

    if (selectedYear == "5") {
        four_two_three_one("S Rochet", "N Nandez", "Vina", "M Olivera", "R Araujo", "Valverde", "Pellistri", "Ugarte", "D Nunez", "N de la Cruz", "M Araujo")
        four_two_three_one2("Alisson", "Danilo", "G Arana", "Marquinhos", "Militao", "J Gomes", "Raphinha", "B Guimaraes", "Endrick", "Paqueta", "Rodrygo")
        flag1.src = "/football_img/logos/uruguay.png"
        flag2.src = "/football_img/logos/brazil.png"
        sidepic.src = "/football_img/logos/copa america 2024.png";
        manager1.textContent += "Marcelo Bielsa"
        manager2.textContent += "Dorival Junior"
        // substitutes1.innerHTML += "J Giménez, S Cáceres, Bentancur<br> G de Arrascaeta, G Varela, L Suárez, B Rodríguez, L Olaza<br> B Ocampo, E Martínez, C Olivera, S Mele, A Canobbio, N Marichal, F Israel"
        // substitutes2.innerHTML += "A Pereira, D Luiz, Savinho<br> Martinelli, Evanilson, Y Couto, Gabriel M, Pepê<br> Éderson, Rafael, Bento, Wendell, Bremer, Beraldo"
        team1.innerHTML = "URUGUAY"
        team2.innerHTML = "BRAZIL"
        score.textContent = "0 - 0"
        OT.innerHTML = "4 - 2 on penalties"
        goals1.innerHTML = "N Nandez 74' 🟥"
        goals2.innerHTML = ""
        date.textContent = "06 / 07 / 2024"
    }

    if (selectedYear == "6") {
        four_four_two("E Martinez", "Montiel", "Tagliafico", "Li Martinez", "C Romero", "E Fernandez", "Di Maria", "R De Paul", "L Messi", "Alvarez", "Mac Allister")
        four_four_two2("Crepeau", "Johnston", "A Davies", "Cornelius", "Bombito", "Eustaquio", "Laryea", "I Kone", "J David", "Larin", "Shaffelburg")
        flag1.src = "/football_img/logos/argentina.png"
        flag2.src = "/football_img/logos/canada.png"
        sidepic.src = "/football_img/logos/copa america 2024.png";
        manager1.textContent += "Lionel Scaloni"
        manager2.textContent += "Jesse Marsch"
        // substitutes1.innerHTML += "N Otamendi, N Molina, N González<br> E Palacios, La Martínez, V Carboni, L Quarta, M Acuña<br> A Garnacho, G Rulli, G Rodríguez, G Pezzella, L Paredes, F Armani, G Lo Celso"
        // substitutes2.innerHTML += "A Ahmed, L Millar, T Oluwaseyi<br> J Osorio, M Choinière, T Bair, J Waterman, J Russell-Rowe<br> L De Fougerolles, D St Clair, K Miller, T McGill, K Hiebert, S Piette"
        team1.innerHTML = "ARGENTINA"
        team2.innerHTML = "CANADA"
        score.textContent = "2 - 0"
        OT.innerHTML = ""
        goals1.innerHTML = "Alvarez 22' ⚽<br>L Messi 51' ⚽"
        goals2.innerHTML = ""
        date.textContent = "09 / 07 / 2024"
    }

    if (selectedYear == "7") {
        three_four_two_one("S Rochet", "Pellistri", "M Araujo", "M Olivera", "J Gimenez", "S Caceres", "Bentancur", "Ugarte", "D Nunez", "Valverde", "N de la Cruz")
        four_two_three_one2("C Vargas", "D Munoz", "J Mojica", "C Cuesta", "D Sanchez", "J Lerma", "J Arias", "R Rios", "J Cordoba", "J Rodriguez", "L Diaz")
        flag1.src = "/football_img/logos/uruguay.png"
        flag2.src = "/football_img/logos/colombia.png"
        sidepic.src = "/football_img/logos/copa america 2024.png";
        manager1.textContent += "Marcelo Bielsa"
        manager2.textContent += "Nestor Lorenzo"
        // substitutes1.innerHTML += "G Varela, C Olivera, G de Arrascaeta<br> L Suárez, A Canobbio, M Viña, B Rodríguez, B Ocampoé<br> N Marichal, R Araujo, F Israel, S Mele, L Olaza, E Martínez"
        // substitutes2.innerHTML += "S Arias, M Uribe, K Castaño<br> Y Mina, L Sinisterra, Y Asprilla, J Lucumí, Á Montero<br> J Quintero, J Durán, R Borré, D Machado, J Carrascal, D Ospina, M Borja"
        team1.innerHTML = "URUGUAY"
        team2.innerHTML = "COLOMBIA"
        score.textContent = "0 - 1"
        OT.innerHTML = ""
        goals1.innerHTML = ""
        goals2.innerHTML = "J Lerma 39' ⚽<br>D Munoz 45+1' 🟨🟥"
        date.textContent = "10 / 07 / 2024"
    }

    if (selectedYear == "8") {
        four_two_three_one("D St Clair", "Johnston", "Laryea", "Bombito", "L De Fougerolles", "M Choiniere", "A Ahmed", "I Kone", "Oluwaseyi", "J Osorio", "Shaffelburg")
        four_three_three2("S Rochet", "N Nandez", "Vina", "S Caceres", "J Gimenez", "Ugarte", "Pellistri", "Valverde", "D Nunez", "R Bentancur", "M Araujo")
        flag1.src = "/football_img/logos/canada.png"
        flag2.src = "/football_img/logos/uruguay.png"
        sidepic.src = "/football_img/logos/copa america 2024.png";
        manager1.textContent += "Jesse Marsch"
        manager2.textContent += "Marcelo Bielsa"
        // substitutes1.innerHTML += "A Davies, J David, D Cornelius<br> L Millar, T Bair, S Eustaquio, J Russell-Rowe, T McGill<br> K Hiebert, J Waterman, S Piette, M Crépeau, K Miller, C Larin"
        // substitutes2.innerHTML += "L Suárez, G de Arrascaeta, B Rodríguez<br> C Olivera, L Olaza, R Araujo, N Marichal, A Canobbio<br> E Martínez, M Olivera, S Mele, F Israel, B Ocampo"
        team1.innerHTML = "CANADA"
        team2.innerHTML = "URUGUAY"
        score.textContent = "2 - 2"
        OT.innerHTML = ""
        goals1.innerHTML = "I Kone 22' ⚽<br>J David 80' ⚽"
        goals2.innerHTML = "Bentancur 8' ⚽<br>L Suarez 90+2' ⚽"
        date.textContent = "13 / 07 / 2024"
    }

    if (selectedYear == "9") {
        four_four_two("E Martinez", "Montiel", "Tagliafico", "Li Martinez", "C Romero", "E Fernandez", "Di Maria", "R De Paul", "L Messi", "Alvarez", "Mac Allister")
        four_three_three2("C Vargas", "S Arias", "J Mojica", "C Cuesta", "D Sanchez", "J Lerma", "J Rodriguez", "R Rios", "J Cordoba", "J Arias", "L Diaz")
        flag1.src = "/football_img/logos/argentina.png"
        flag2.src = "/football_img/logos/colombia.png"
        sidepic.src = "/football_img/logos/copa america 2024.png";
        manager1.textContent += "Lionel Scaloni"
        manager2.textContent += "Nestor Lorenzo"
        // substitutes1.innerHTML += "N González, N Molina, La Martínez<br> G Lo Celso, L Paredes, Otamendi, M Acuña, G Rulli<br> G Pezzella, V Carboni, E Palacios, L Quarta, A Garnacho, G Rodríguez, F Armani"
        // substitutes2.innerHTML += "R Borré, K Castaño, J Quintero<br> J Carrascal, M Borja, M Uribe, Y Asprilla, J Durán<br> D Machado, Y Mina, L Sinisterra, Á Montero, D Ospina, J Lucumí"
        team1.innerHTML = "ARGENTINA"
        team2.innerHTML = "COLOMBIA"
        score.textContent = "1 - 0"
        OT.innerHTML = "after extra time"
        goals1.innerHTML = "La Martinez 112' ⚽"
        goals2.innerHTML = ""
        date.textContent = "14 / 07 / 2024"
    }
    substitutes1.innerHTML = substitutes1.innerHTML.replace(/,/g, ' •');
    substitutes2.innerHTML = substitutes2.innerHTML.replace(/,/g, ' •');
}