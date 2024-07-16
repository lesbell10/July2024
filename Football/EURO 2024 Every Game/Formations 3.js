// first team
const STL = document.querySelector('.one .STL');
const STL2 = document.querySelector('.one .STL2');
const STC = document.querySelector('.one .STC');
const STC2 = document.querySelector('.one .STC2');
const STR = document.querySelector('.one .STR');
const STR2 = document.querySelector('.one .STR2');
const LW = document.querySelector('.one .LW');
const LW2 = document.querySelector('.one .LW2');
const LF = document.querySelector('.one .LF');
const LF2 = document.querySelector('.one .LF2');
const AMLC = document.querySelector('.one .AMLC');
const AMLC2 = document.querySelector('.one .AMLC2');
const AMC = document.querySelector('.one .AMC');
const AMC2 = document.querySelector('.one .AMC2');
const AMRC = document.querySelector('.one .AMRC');
const AMRC2 = document.querySelector('.one .AMRC2');
const RF = document.querySelector('.one .RF');
const RF2 = document.querySelector('.one .RF2');
const RW = document.querySelector('.one .RW');
const RW2 = document.querySelector('.one .RW2');
const WL = document.querySelector('.one .WL');
const WL2 = document.querySelector('.one .WL2');
const LCM = document.querySelector('.one .LCM');
const LCM2 = document.querySelector('.one .LCM2');
const CM = document.querySelector('.one .CM');
const CM2 = document.querySelector('.one .CM2');
const RCM = document.querySelector('.one .RCM');
const RCM2 = document.querySelector('.one .RCM2');
const WR = document.querySelector('.one .WR');
const WR2 = document.querySelector('.one .WR2');
const DM = document.querySelector('.one .DM');
const DM2 = document.querySelector('.one .DM2');
const LB = document.querySelector('.one .LB');
const LB2 = document.querySelector('.one .LB2');
const LCB = document.querySelector('.one .LCB');
const LCB2 = document.querySelector('.one .LCB2');
const CB = document.querySelector('.one .CB');
const CB2 = document.querySelector('.one .CB2');
const RCB = document.querySelector('.one .RCB');
const RCB2 = document.querySelector('.one .RCB2');
const RB = document.querySelector('.one .RB');
const RB2 = document.querySelector('.one .RB2');
const GK = document.querySelector('.one .GK');
const GK2 = document.querySelector('.one .GK2');

// second team
const twoSTL = document.querySelector('.two .STL');
const twoSTL2 = document.querySelector('.two .STL2');
const twoSTC = document.querySelector('.two .STC');
const twoSTC2 = document.querySelector('.two .STC2');
const twoSTR = document.querySelector('.two .STR');
const twoSTR2 = document.querySelector('.two .STR2');
const twoLW = document.querySelector('.two .LW');
const twoLW2 = document.querySelector('.two .LW2');
const twoLF = document.querySelector('.two .LF');
const twoLF2 = document.querySelector('.two .LF2');
const twoAMLC = document.querySelector('.two .AMLC');
const twoAMLC2 = document.querySelector('.two .AMLC2');
const twoAMC = document.querySelector('.two .AMC');
const twoAMC2 = document.querySelector('.two .AMC2');
const twoAMRC = document.querySelector('.two .AMRC');
const twoAMRC2 = document.querySelector('.two .AMRC2');
const twoRF = document.querySelector('.two .RF');
const twoRF2 = document.querySelector('.two .RF2');
const twoRW = document.querySelector('.two .RW');
const twoRW2 = document.querySelector('.two .RW2');
const twoWL = document.querySelector('.two .WL');
const twoWL2 = document.querySelector('.two .WL2');
const twoLCM = document.querySelector('.two .LCM');
const twoLCM2 = document.querySelector('.two .LCM2');
const twoCM = document.querySelector('.two .CM');
const twoCM2 = document.querySelector('.two .CM2');
const twoRCM = document.querySelector('.two .RCM');
const twoRCM2 = document.querySelector('.two .RCM2');
const twoWR = document.querySelector('.two .WR');
const twoWR2 = document.querySelector('.two .WR2');
const twoDM = document.querySelector('.two .DM');
const twoDM2 = document.querySelector('.two .DM2');
const twoLB = document.querySelector('.two .LB');
const twoLB2 = document.querySelector('.two .LB2');
const twoLCB = document.querySelector('.two .LCB');
const twoLCB2 = document.querySelector('.two .LCB2');
const twoCB = document.querySelector('.two .CB');
const twoCB2 = document.querySelector('.two .CB2');
const twoRCB = document.querySelector('.two .RCB');
const twoRCB2 = document.querySelector('.two .RCB2');
const twoRB = document.querySelector('.two .RB');
const twoRB2 = document.querySelector('.two .RB2');
const twoGK = document.querySelector('.two .GK');
const twoGK2 = document.querySelector('.two .GK2');

function Shorter() {
    const divs = document.querySelectorAll('.rectangle > div');

    divs.forEach(div => {

        if (div.textContent === "" || div.textContent === "" || div.textContent === "" || div.textContent === "" || div.textContent === "") {
            div.style.marginLeft = '-10px'
        } else if (div.textContent === "" || div.textContent === "") {
            div.style.marginLeft = '-15px';
        } else if (div.textContent === "Christensen" || div.textContent === "R Rodriguez") {
            div.style.marginLeft = '-25px';
        } else if (div.textContent === "J Andersen" || div.textContent === "Milinkovic-Savic" || div.textContent === "Kochorashvili" || div.textContent === "") {
            div.style.marginLeft = '-40px';
        } else if (div.textContent === "" || div.textContent === "") {
            div.style.marginLeft = '-50px';
        } else {
            div.style.marginLeft = '0';
        }
    });
}

// function Shorter() {
//     const divs = document.querySelectorAll('.rectangle > div');

//     divs.forEach(div => {

//         if (div.textContent === "L Paredes" || div.textContent === "Marquinhos" || div.textContent === "Henderson" || div.textContent === "Andersson") {
//             div.style.marginLeft = '-10px'
//         } else if (div.textContent === "Vestergaard" || div.textContent === "R Rodriguez" || div.textContent === "Tchouameni" || div.textContent === "Camavinga" || div.textContent === "Calhanoglu" || div.textContent === "Alexander-Arnold" || div.textContent === "Wijnaldum" || div.textContent === "Salihamidzic" || div.textContent === "Cannavaro") {
//             div.style.marginLeft = '-25px';
//         } else if (div.textContent === "Kochorashvili" || div.textContent === "van Bommel") {
//             div.style.marginLeft = '-40px';
//         } else if (div.textContent === "" || div.textContent === "Christensen") {
//             div.style.marginLeft = '-50px';
//         } else {
//             div.style.marginLeft = '0';
//         }
//     });
// }

function clearFields() {
    STL.textContent = "";
    STL2.src = "";
    STC.textContent = "";
    STC2.src = "";
    STR.textContent = "";
    STR2.src = "";
    LW.textContent = "";
    LW2.src = "";
    LF.textContent = "";
    LF2.src = "";
    AMLC.textContent = "";
    AMLC2.src = "";
    AMC.textContent = "";
    AMC2.src = "";
    AMRC.textContent = "";
    AMRC2.src = "";
    RF.textContent = "";
    RF2.src = "";
    RW.textContent = "";
    RW2.src = "";
    WL.textContent = "";
    WL2.src = "";
    LCM.textContent = "";
    LCM2.src = "";
    CM.textContent = "";
    CM2.src = "";
    RCM.textContent = "";
    RCM2.src = "";
    WR.textContent = "";
    WR2.src = "";
    DM.textContent = "";
    DM2.src = "";
    LB.textContent = "";
    LB2.src = "";
    LCB.textContent = "";
    LCB2.src = "";
    CB.textContent = "";
    CB2.src = "";
    RCB.textContent = "";
    RCB2.src = "";
    RB.textContent = "";
    RB2.src = "";
    GK.textContent = "";
    GK2.src = "";
}

function clearFields2() {

    twoSTL.textContent = "";
    twoSTL2.src = "";
    twoSTC.textContent = "";
    twoSTC2.src = "";
    twoSTR.textContent = "";
    twoSTR2.src = "";
    twoLW.textContent = "";
    twoLW2.src = "";
    twoLF.textContent = "";
    twoLF2.src = "";
    twoAMLC.textContent = "";
    twoAMLC2.src = "";
    twoAMC.textContent = "";
    twoAMC2.src = "";
    twoAMRC.textContent = "";
    twoAMRC2.src = "";
    twoRF.textContent = "";
    twoRF2.src = "";
    twoRW.textContent = "";
    twoRW2.src = "";
    twoWL.textContent = "";
    twoWL2.src = "";
    twoLCM.textContent = "";
    twoLCM2.src = "";
    twoCM.textContent = "";
    twoCM2.src = "";
    twoRCM.textContent = "";
    twoRCM2.src = "";
    twoWR.textContent = "";
    twoWR2.src = "";
    twoDM.textContent = "";
    twoDM2.src = "";
    twoLB.textContent = "";
    twoLB2.src = "";
    twoLCB.textContent = "";
    twoLCB2.src = "";
    twoCB.textContent = "";
    twoCB2.src = "";
    twoRCB.textContent = "";
    twoRCB2.src = "";
    twoRB.textContent = "";
    twoRB2.src = "";
    twoGK.textContent = "";
    twoGK2.src = "";

}

// first teams

// 4-2-3-1
export function four_two_three_one(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields();
    STC.textContent = n9
    STC2.src = "/football_img/players/" + STC.textContent + ".webp";
    LW.textContent = n11
    LW2.src = "/football_img/players/" + LW.textContent + ".webp";
    AMC.textContent = n10
    AMC2.src = "/football_img/players/" + AMC.textContent + ".webp";
    RW.textContent = n7
    RW2.src = "/football_img/players/" + RW.textContent + ".webp";
    LCM.textContent = n6
    LCM2.src = "/football_img/players/" + LCM.textContent + ".webp";
    RCM.textContent = n8
    RCM2.src = "/football_img/players/" + RCM.textContent + ".webp";
    LB.textContent = n3
    LB2.src = "/football_img/players/" + LB.textContent + ".webp";
    LCB.textContent = n4
    LCB2.src = "/football_img/players/" + LCB.textContent + ".webp";
    RCB.textContent = n5
    RCB2.src = "/football_img/players/" + RCB.textContent + ".webp";
    RB.textContent = n2
    RB2.src = "/football_img/players/" + RB.textContent + ".webp";
    GK.textContent = n1
    GK2.src = "/football_img/players/" + GK.textContent + ".webp";
    Shorter();
}

// 4-3-3
export function four_three_three(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {

    clearFields();
    STC.textContent = n9
    STC2.src = "/football_img/players/" + STC.textContent + ".webp";
    LW.textContent = n11
    LW2.src = "/football_img/players/" + LW.textContent + ".webp";
    RW.textContent = n7
    RW2.src = "/football_img/players/" + RW.textContent + ".webp";
    LCM.textContent = n10
    LCM2.src = "/football_img/players/" + LCM.textContent + ".webp";
    RCM.textContent = n8
    RCM2.src = "/football_img/players/" + RCM.textContent + ".webp";
    DM.textContent = n6
    DM2.src = "/football_img/players/" + DM.textContent + ".webp";
    LB.textContent = n3
    LB2.src = "/football_img/players/" + LB.textContent + ".webp";
    LCB.textContent = n4
    LCB2.src = "/football_img/players/" + LCB.textContent + ".webp";
    RCB.textContent = n5
    RCB2.src = "/football_img/players/" + RCB.textContent + ".webp";
    RB.textContent = n2
    RB2.src = "/football_img/players/" + RB.textContent + ".webp";
    GK.textContent = n1
    GK2.src = "/football_img/players/" + GK.textContent + ".webp";
    Shorter();
}

// 4-3-3 False 9
export function four_three_three_false_nine(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {

    clearFields();
    LW.textContent = n11
    LW2.src = "/football_img/players/" + LW.textContent + ".webp";
    AMC.textContent = n9
    AMC2.src = "/football_img/players/" + AMC.textContent + ".webp";
    RW.textContent = n7
    RW2.src = "/football_img/players/" + RW.textContent + ".webp";
    LCM.textContent = n10
    LCM2.src = "/football_img/players/" + LCM.textContent + ".webp";
    RCM.textContent = n8
    RCM2.src = "/football_img/players/" + RCM.textContent + ".webp";
    DM.textContent = n6
    DM2.src = "/football_img/players/" + DM.textContent + ".webp";
    LB.textContent = n3
    LB2.src = "/football_img/players/" + LB.textContent + ".webp";
    LCB.textContent = n4
    LCB2.src = "/football_img/players/" + LCB.textContent + ".webp";
    RCB.textContent = n5
    RCB2.src = "/football_img/players/" + RCB.textContent + ".webp";
    RB.textContent = n2
    RB2.src = "/football_img/players/" + RB.textContent + ".webp";
    GK.textContent = n1
    GK2.src = "/football_img/players/" + GK.textContent + ".webp";
    Shorter();
}

// 4-4-2
export function four_four_two(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields();
    STL.textContent = n10;
    STL2.src = "/football_img/players/" + STL.textContent + ".webp";
    STR.textContent = n9;
    STR2.src = "/football_img/players/" + STR.textContent + ".webp";
    WL.textContent = n11;
    WL2.src = "/football_img/players/" + WL.textContent + ".webp";
    WR.textContent = n7;
    WR2.src = "/football_img/players/" + WR.textContent + ".webp";
    LCM.textContent = n6;
    LCM2.src = "/football_img/players/" + LCM.textContent + ".webp";
    RCM.textContent = n8;
    RCM2.src = "/football_img/players/" + RCM.textContent + ".webp";
    LB.textContent = n3;
    LB2.src = "/football_img/players/" + LB.textContent + ".webp";
    LCB.textContent = n4;
    LCB2.src = "/football_img/players/" + LCB.textContent + ".webp";
    RCB.textContent = n5;
    RCB2.src = "/football_img/players/" + RCB.textContent + ".webp";
    RB.textContent = n2;
    RB2.src = "/football_img/players/" + RB.textContent + ".webp";
    GK.textContent = n1;
    GK2.src = "/football_img/players/" + GK.textContent + ".webp";
    Shorter();
}

// 4-2-2-2
export function four_two_two_two(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields();
    STL.textContent = n10;
    STL2.src = "/football_img/players/" + STL.textContent + ".webp";
    STR.textContent = n9;
    STR2.src = "/football_img/players/" + STR.textContent + ".webp";
    LF.textContent = n11;
    LF2.src = "/football_img/players/" + LF.textContent + ".webp";
    RF.textContent = n7;
    RF2.src = "/football_img/players/" + RF.textContent + ".webp";
    LCM.textContent = n6;
    LCM2.src = "/football_img/players/" + LCM.textContent + ".webp";
    RCM.textContent = n8;
    RCM2.src = "/football_img/players/" + RCM.textContent + ".webp";
    LB.textContent = n3;
    LB2.src = "/football_img/players/" + LB.textContent + ".webp";
    LCB.textContent = n4;
    LCB2.src = "/football_img/players/" + LCB.textContent + ".webp";
    RCB.textContent = n5;
    RCB2.src = "/football_img/players/" + RCB.textContent + ".webp";
    RB.textContent = n2;
    RB2.src = "/football_img/players/" + RB.textContent + ".webp";
    GK.textContent = n1;
    GK2.src = "/football_img/players/" + GK.textContent + ".webp";
    Shorter();
}

// 4-1-2-1-2
export function four_one_two_one_two(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields();
    STL.textContent = n9;
    STL2.src = "/football_img/players/" + STL.textContent + ".webp";
    STR.textContent = n11;
    STR2.src = "/football_img/players/" + STR.textContent + ".webp";
    AMC.textContent = n7
    AMC2.src = "/football_img/players/" + AMC.textContent + ".webp";
    WL.textContent = n10
    WL2.src = "/football_img/players/" + WL.textContent + ".webp";
    DM.textContent = n6
    DM2.src = "/football_img/players/" + DM.textContent + ".webp";
    WR.textContent = n8
    WR2.src = "/football_img/players/" + WR.textContent + ".webp";
    LB.textContent = n3
    LB2.src = "/football_img/players/" + LB.textContent + ".webp";
    LCB.textContent = n4
    LCB2.src = "/football_img/players/" + LCB.textContent + ".webp";
    RCB.textContent = n5
    RCB2.src = "/football_img/players/" + RCB.textContent + ".webp";
    RB.textContent = n2
    RB2.src = "/football_img/players/" + RB.textContent + ".webp";
    GK.textContent = n1
    GK2.src = "/football_img/players/" + GK.textContent + ".webp";
    Shorter();
}

// 4-3-1-2
export function four_three_one_two(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields();
    STL.textContent = n9;
    STL2.src = "/football_img/players/" + STL.textContent + ".webp";
    STR.textContent = n11;
    STR2.src = "/football_img/players/" + STR.textContent + ".webp";
    AMC.textContent = n7
    AMC2.src = "/football_img/players/" + AMC.textContent + ".webp";
    LCM.textContent = n10
    LCM2.src = "/football_img/players/" + LCM.textContent + ".webp";
    CM.textContent = n6
    CM2.src = "/football_img/players/" + CM.textContent + ".webp";
    RCM.textContent = n8
    RCM2.src = "/football_img/players/" + RCM.textContent + ".webp";
    LB.textContent = n3
    LB2.src = "/football_img/players/" + LB.textContent + ".webp";
    LCB.textContent = n4
    LCB2.src = "/football_img/players/" + LCB.textContent + ".webp";
    RCB.textContent = n5
    RCB2.src = "/football_img/players/" + RCB.textContent + ".webp";
    RB.textContent = n2
    RB2.src = "/football_img/players/" + RB.textContent + ".webp";
    GK.textContent = n1
    GK2.src = "/football_img/players/" + GK.textContent + ".webp";
    Shorter();
}

// 4-3-2-1
export function four_three_two_one(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields();
    STC.textContent = n9
    STC2.src = "/football_img/players/" + STC.textContent + ".webp";
    AMLC.textContent = n11
    AMLC2.src = "/football_img/players/" + AMLC.textContent + ".webp";
    AMRC.textContent = n7
    AMRC2.src = "/football_img/players/" + AMRC.textContent + ".webp";
    CM.textContent = n6
    CM2.src = "/football_img/players/" + CM.textContent + ".webp";
    LCM.textContent = n10
    LCM2.src = "/football_img/players/" + LCM.textContent + ".webp";
    RCM.textContent = n8
    RCM2.src = "/football_img/players/" + RCM.textContent + ".webp";
    LB.textContent = n3
    LB2.src = "/football_img/players/" + LB.textContent + ".webp";
    LCB.textContent = n4
    LCB2.src = "/football_img/players/" + LCB.textContent + ".webp";
    RCB.textContent = n5
    RCB2.src = "/football_img/players/" + RCB.textContent + ".webp";
    RB.textContent = n2
    RB2.src = "/football_img/players/" + RB.textContent + ".webp";
    GK.textContent = n1
    GK2.src = "/football_img/players/" + GK.textContent + ".webp";
    Shorter();
}

// 4-1-3-2
export function four_one_three_two(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields();
    STL.textContent = n10
    STL2.src = "/football_img/players/" + STL.textContent + ".webp";
    STR.textContent = n9
    STR2.src = "/football_img/players/" + STR.textContent + ".webp";
    LCM.textContent = n11
    LCM2.src = "/football_img/players/" + LCM.textContent + ".webp";
    CM.textContent = n8
    CM2.src = "/football_img/players/" + CM.textContent + ".webp";
    RCM.textContent = n7
    RCM2.src = "/football_img/players/" + RCM.textContent + ".webp";
    DM.textContent = n6
    DM2.src = "/football_img/players/" + DM.textContent + ".webp";
    LB.textContent = n3
    LB2.src = "/football_img/players/" + LB.textContent + ".webp";
    LCB.textContent = n4
    LCB2.src = "/football_img/players/" + LCB.textContent + ".webp";
    RCB.textContent = n5
    RCB2.src = "/football_img/players/" + RCB.textContent + ".webp";
    RB.textContent = n2
    RB2.src = "/football_img/players/" + RB.textContent + ".webp";
    GK.textContent = n1
    GK2.src = "/football_img/players/" + GK.textContent + ".webp";

    Shorter();
    
    LCM.style.top = "50.5%"
    LCM2.style.top = "28.5%"
    RCM.style.top = "50.5%"
    RCM2.style.top = "28.5%"
    CM.style.top = "50.5%"
    CM2.style.top = "28.5%"
    DM.style.top = "79%"
    DM2.style.top = "57%"
}

// 4-1-3-2 att
export function four_one_three_two_att(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields();
    STL.textContent = n10
    STL2.src = "/football_img/players/" + STL.textContent + ".webp";
    STR.textContent = n9
    STR2.src = "/football_img/players/" + STR.textContent + ".webp";
    LF.textContent = n11
    LF2.src = "/football_img/players/" + LF.textContent + ".webp";
    AMC.textContent = n8
    AMC2.src = "/football_img/players/" + AMC.textContent + ".webp";
    RF.textContent = n7
    RF2.src = "/football_img/players/" + RCM.textContent + ".webp";
    CM.textContent = n6
    CM2.src = "/football_img/players/" + CM.textContent + ".webp";
    LB.textContent = n3
    LB2.src = "/football_img/players/" + LB.textContent + ".webp";
    LCB.textContent = n4
    LCB2.src = "/football_img/players/" + LCB.textContent + ".webp";
    RCB.textContent = n5
    RCB2.src = "/football_img/players/" + RCB.textContent + ".webp";
    RB.textContent = n2
    RB2.src = "/football_img/players/" + RB.textContent + ".webp";
    GK.textContent = n1
    GK2.src = "/football_img/players/" + GK.textContent + ".webp";
    Shorter();
}

// 4-1-3-1-1
// export function four_one_three_one_one(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
//     clearFields();
//     STC.textContent = n9
//     STC2.src = "/football_img/players/" + STC.textContent + ".webp";
//     AMC.textContent = n10
//     AMC2.src = "/football_img/players/" + AMC.textContent + ".webp";
//     LCM.textContent = n11
//     LCM2.src = "/football_img/players/" + LCM.textContent + ".webp";
//     CM.textContent = n8
//     CM2.src = "/football_img/players/" + CM.textContent + ".webp";
//     RCM.textContent = n7
//     RCM2.src = "/football_img/players/" + RF.textContent + ".webp";
//     DM.textContent = n6
//     DM2.src = "/football_img/players/" + DM.textContent + ".webp";
//     LB.textContent = n3
//     LB2.src = "/football_img/players/" + LB.textContent + ".webp";
//     LCB.textContent = n4
//     LCB2.src = "/football_img/players/" + LCB.textContent + ".webp";
//     RCB.textContent = n5
//     RCB2.src = "/football_img/players/" + RCB.textContent + ".webp";
//     RB.textContent = n2
//     RB2.src = "/football_img/players/" + RB.textContent + ".webp";
//     GK.textContent = n1
//     GK2.src = "/football_img/players/" + GK.textContent + ".webp";
//     Shorter();
// }

// 4-4-1-1
export function four_four_one_one(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields();
    STC.textContent = n9;
    STC2.src = "/football_img/players/" + STC.textContent + ".webp";
    AMC.textContent = n10;
    AMC2.src = "/football_img/players/" + AMC.textContent + ".webp";
    WL.textContent = n11;
    WL2.src = "/football_img/players/" + WL.textContent + ".webp";
    WR.textContent = n7;
    WR2.src = "/football_img/players/" + WR.textContent + ".webp";
    LCM.textContent = n6;
    LCM2.src = "/football_img/players/" + LCM.textContent + ".webp";
    RCM.textContent = n8;
    RCM2.src = "/football_img/players/" + RCM.textContent + ".webp";
    LB.textContent = n3;
    LB2.src = "/football_img/players/" + LB.textContent + ".webp";
    LCB.textContent = n4;
    LCB2.src = "/football_img/players/" + LCB.textContent + ".webp";
    RCB.textContent = n5;
    RCB2.src = "/football_img/players/" + RCB.textContent + ".webp";
    RB.textContent = n2;
    RB2.src = "/football_img/players/" + RB.textContent + ".webp";
    GK.textContent = n1;
    GK2.src = "/football_img/players/" + GK.textContent + ".webp";
    Shorter();
}

// 4-5-1
export function four_five_one(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {

    clearFields();
    STC.textContent = n9
    STC2.src = "/football_img/players/" + STC.textContent + ".webp";
    WL.textContent = n11
    WL2.src = "/football_img/players/" + WL.textContent + ".webp";
    LCM.textContent = n10
    LCM2.src = "/football_img/players/" + LCM.textContent + ".webp";
    RCM.textContent = n8
    RCM2.src = "/football_img/players/" + RCM.textContent + ".webp";
    WR.textContent = n7
    WR2.src = "/football_img/players/" + WR.textContent + ".webp";
    DM.textContent = n6
    DM2.src = "/football_img/players/" + DM.textContent + ".webp";
    LB.textContent = n3
    LB2.src = "/football_img/players/" + LB.textContent + ".webp";
    LCB.textContent = n4
    LCB2.src = "/football_img/players/" + LCB.textContent + ".webp";
    RCB.textContent = n5
    RCB2.src = "/football_img/players/" + RCB.textContent + ".webp";
    RB.textContent = n2
    RB2.src = "/football_img/players/" + RB.textContent + ".webp";
    GK.textContent = n1
    GK2.src = "/football_img/players/" + GK.textContent + ".webp";
    Shorter();
}

// 3-4-2-1
export function three_four_two_one(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields();
    STC.textContent = n9
    STC2.src = "/football_img/players/" + STC.textContent + ".webp";
    AMLC.textContent = n11
    AMLC2.src = "/football_img/players/" + AMLC.textContent + ".webp";
    AMRC.textContent = n7
    AMRC2.src = "/football_img/players/" + AMRC.textContent + ".webp";
    WL.textContent = n3
    WL2.src = "/football_img/players/" + WL.textContent + ".webp";
    LCM.textContent = n8
    LCM2.src = "/football_img/players/" + LCM.textContent + ".webp";
    RCM.textContent = n10
    RCM2.src = "/football_img/players/" + RCM.textContent + ".webp";
    WR.textContent = n2
    WR2.src = "/football_img/players/" + WR.textContent + ".webp";
    LCB.textContent = n4
    LCB2.src = "/football_img/players/" + LCB.textContent + ".webp";
    CB.textContent = n5
    CB2.src = "/football_img/players/" + CB.textContent + ".webp";
    RCB.textContent = n6
    RCB2.src = "/football_img/players/" + RCB.textContent + ".webp";
    GK.textContent = n1
    GK2.src = "/football_img/players/" + GK.textContent + ".webp";
    Shorter();
}

// 3-4-3
export function three_four_three(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields();
    STC.textContent = n9
    STC2.src = "/football_img/players/" + STC.textContent + ".webp";
    LF.textContent = n11
    LF2.src = "/football_img/players/" + LF.textContent + ".webp";
    RF.textContent = n7
    RF2.src = "/football_img/players/" + RF.textContent + ".webp";
    WL.textContent = n3
    WL2.src = "/football_img/players/" + WL.textContent + ".webp";
    LCM.textContent = n8
    LCM2.src = "/football_img/players/" + LCM.textContent + ".webp";
    RCM.textContent = n10
    RCM2.src = "/football_img/players/" + RCM.textContent + ".webp";
    WR.textContent = n2
    WR2.src = "/football_img/players/" + WR.textContent + ".webp";
    LCB.textContent = n4
    LCB2.src = "/football_img/players/" + LCB.textContent + ".webp";
    CB.textContent = n5
    CB2.src = "/football_img/players/" + CB.textContent + ".webp";
    RCB.textContent = n6
    RCB2.src = "/football_img/players/" + RCB.textContent + ".webp";
    GK.textContent = n1
    GK2.src = "/football_img/players/" + GK.textContent + ".webp";
    Shorter();
}

// 3-4-1-2
export function three_four_one_two(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields();
    STL.textContent = n9
    STL2.src = "/football_img/players/" + STL.textContent + ".webp";
    STR.textContent = n11
    STR2.src = "/football_img/players/" + STR.textContent + ".webp";
    AMC.textContent = n7
    AMC2.src = "/football_img/players/" + AMC.textContent + ".webp";
    WL.textContent = n3
    WL2.src = "/football_img/players/" + WL.textContent + ".webp";
    LCM.textContent = n8
    LCM2.src = "/football_img/players/" + LCM.textContent + ".webp";
    RCM.textContent = n10
    RCM2.src = "/football_img/players/" + RCM.textContent + ".webp";
    WR.textContent = n2
    WR2.src = "/football_img/players/" + WR.textContent + ".webp";
    LCB.textContent = n4
    LCB2.src = "/football_img/players/" + LCB.textContent + ".webp";
    CB.textContent = n5
    CB2.src = "/football_img/players/" + CB.textContent + ".webp";
    RCB.textContent = n6
    RCB2.src = "/football_img/players/" + RCB.textContent + ".webp";
    GK.textContent = n1
    GK2.src = "/football_img/players/" + GK.textContent + ".webp";
    Shorter();
}

// 3-5-2
export function three_five_two(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields();
    STL.textContent = n9
    STL2.src = "/football_img/players/" + STL.textContent + ".webp";
    STR.textContent = n11
    STR2.src = "/football_img/players/" + STR.textContent + ".webp";
    WL.textContent = n3
    WL2.src = "/football_img/players/" + WL.textContent + ".webp";
    LCM.textContent = n10
    LCM2.src = "/football_img/players/" + LCM.textContent + ".webp";
    CM.textContent = n7
    CM2.src = "/football_img/players/" + CM.textContent + ".webp";
    RCM.textContent = n8
    RCM2.src = "/football_img/players/" + RCM.textContent + ".webp";
    WR.textContent = n2
    WR2.src = "/football_img/players/" + WR.textContent + ".webp";
    LCB.textContent = n4
    LCB2.src = "/football_img/players/" + LCB.textContent + ".webp";
    CB.textContent = n5
    CB2.src = "/football_img/players/" + CB.textContent + ".webp";
    RCB.textContent = n6
    RCB2.src = "/football_img/players/" + RCB.textContent + ".webp";
    GK.textContent = n1
    GK2.src = "/football_img/players/" + GK.textContent + ".webp";
    Shorter();
}

// 5-2-2-1
export function five_two_two_one(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields();
    STC.textContent = n9
    STC2.src = "/football_img/players/" + STC.textContent + ".webp";
    AMLC.textContent = n11
    AMLC2.src = "/football_img/players/" + AMLC.textContent + ".webp";
    AMRC.textContent = n7
    AMRC2.src = "/football_img/players/" + AMRC.textContent + ".webp";
    LB.textContent = n3
    LB2.src = "/football_img/players/" + LB.textContent + ".webp";
    LCM.textContent = n8
    LCM2.src = "/football_img/players/" + LCM.textContent + ".webp";
    RCM.textContent = n10
    RCM2.src = "/football_img/players/" + RCM.textContent + ".webp";
    RB.textContent = n2
    RB2.src = "/football_img/players/" + RB.textContent + ".webp";
    LCB.textContent = n4
    LCB2.src = "/football_img/players/" + LCB.textContent + ".webp";
    CB.textContent = n5
    CB2.src = "/football_img/players/" + CB.textContent + ".webp";
    RCB.textContent = n6
    RCB2.src = "/football_img/players/" + RCB.textContent + ".webp";
    GK.textContent = n1
    GK2.src = "/football_img/players/" + GK.textContent + ".webp";
    Shorter();
}

// 5-2-3
export function five_two_three(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields();
    STC.textContent = n9
    STC2.src = "/football_img/players/" + STC.textContent + ".webp";
    LF.textContent = n11
    LF2.src = "/football_img/players/" + LF.textContent + ".webp";
    RF.textContent = n7
    RF2.src = "/football_img/players/" + RF.textContent + ".webp";
    LB.textContent = n3
    LB2.src = "/football_img/players/" + LB.textContent + ".webp";
    LCM.textContent = n8
    LCM2.src = "/football_img/players/" + LCM.textContent + ".webp";
    RCM.textContent = n10
    RCM2.src = "/football_img/players/" + RCM.textContent + ".webp";
    RB.textContent = n2
    RB2.src = "/football_img/players/" + RB.textContent + ".webp";
    LCB.textContent = n4
    LCB2.src = "/football_img/players/" + LCB.textContent + ".webp";
    CB.textContent = n5
    CB2.src = "/football_img/players/" + CB.textContent + ".webp";
    RCB.textContent = n6
    RCB2.src = "/football_img/players/" + RCB.textContent + ".webp";
    GK.textContent = n1
    GK2.src = "/football_img/players/" + GK.textContent + ".webp";
    Shorter();
}

// 5-2-1-2
export function five_two_one_two(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields();
    STL.textContent = n9
    STL2.src = "/football_img/players/" + STL.textContent + ".webp";
    STR.textContent = n11
    STR2.src = "/football_img/players/" + STR.textContent + ".webp";
    AMC.textContent = n7
    AMC2.src = "/football_img/players/" + AMC.textContent + ".webp";
    LB.textContent = n3
    LB2.src = "/football_img/players/" + LB.textContent + ".webp";
    LCM.textContent = n8
    LCM2.src = "/football_img/players/" + LCM.textContent + ".webp";
    RCM.textContent = n10
    RCM2.src = "/football_img/players/" + RCM.textContent + ".webp";
    RB.textContent = n2
    RB2.src = "/football_img/players/" + RB.textContent + ".webp";
    LCB.textContent = n4
    LCB2.src = "/football_img/players/" + LCB.textContent + ".webp";
    CB.textContent = n5
    CB2.src = "/football_img/players/" + CB.textContent + ".webp";
    RCB.textContent = n6
    RCB2.src = "/football_img/players/" + RCB.textContent + ".webp";
    GK.textContent = n1
    GK2.src = "/football_img/players/" + GK.textContent + ".webp";
    Shorter();
}

// 5-3-2
export function five_three_two(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields();
    STL.textContent = n9
    STL2.src = "/football_img/players/" + STL.textContent + ".webp";
    STR.textContent = n11
    STR2.src = "/football_img/players/" + STR.textContent + ".webp";
    LB.textContent = n3
    LB2.src = "/football_img/players/" + LB.textContent + ".webp";
    LCM.textContent = n10
    LCM2.src = "/football_img/players/" + LCM.textContent + ".webp";
    CM.textContent = n7
    CM2.src = "/football_img/players/" + CM.textContent + ".webp";
    RCM.textContent = n8
    RCM2.src = "/football_img/players/" + RCM.textContent + ".webp";
    RB.textContent = n2
    RB2.src = "/football_img/players/" + RB.textContent + ".webp";
    LCB.textContent = n4
    LCB2.src = "/football_img/players/" + LCB.textContent + ".webp";
    CB.textContent = n5
    CB2.src = "/football_img/players/" + CB.textContent + ".webp";
    RCB.textContent = n6
    RCB2.src = "/football_img/players/" + RCB.textContent + ".webp";
    GK.textContent = n1
    GK2.src = "/football_img/players/" + GK.textContent + ".webp";
    Shorter();
}

// 5-4-1
export function five_four_one(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields();
    STC.textContent = n9
    STC2.src = "/football_img/players/" + STC.textContent + ".webp";
    WL.textContent = n11
    WL2.src = "/football_img/players/" + WL.textContent + ".webp";
    WR.textContent = n7
    WR2.src = "/football_img/players/" + WR.textContent + ".webp";
    LB.textContent = n3
    LB2.src = "/football_img/players/" + LB.textContent + ".webp";
    LCM.textContent = n8
    LCM2.src = "/football_img/players/" + LCM.textContent + ".webp";
    RCM.textContent = n10
    RCM2.src = "/football_img/players/" + RCM.textContent + ".webp";
    RB.textContent = n2
    RB2.src = "/football_img/players/" + RB.textContent + ".webp";
    LCB.textContent = n4
    LCB2.src = "/football_img/players/" + LCB.textContent + ".webp";
    CB.textContent = n5
    CB2.src = "/football_img/players/" + CB.textContent + ".webp";
    RCB.textContent = n6
    RCB2.src = "/football_img/players/" + RCB.textContent + ".webp";
    GK.textContent = n1
    GK2.src = "/football_img/players/" + GK.textContent + ".webp";
    Shorter();
}

// second teams

// 4-2-3-1
export function four_two_three_one2(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {

    clearFields2();
    twoSTC.textContent = n9;
    twoSTC2.src = "/football_img/players/" + twoSTC.textContent + ".webp";
    twoLW.textContent = n11;
    twoLW2.src = "/football_img/players/" + twoLW.textContent + ".webp";
    twoAMC.textContent = n10;
    twoAMC2.src = "/football_img/players/" + twoAMC.textContent + ".webp";
    twoRW.textContent = n7;
    twoRW2.src = "/football_img/players/" + twoRW.textContent + ".webp";
    twoLCM.textContent = n6;
    twoLCM2.src = "/football_img/players/" + twoLCM.textContent + ".webp";
    twoRCM.textContent = n8;
    twoRCM2.src = "/football_img/players/" + twoRCM.textContent + ".webp";
    twoLB.textContent = n3;
    twoLB2.src = "/football_img/players/" + twoLB.textContent + ".webp";
    twoLCB.textContent = n4;
    twoLCB2.src = "/football_img/players/" + twoLCB.textContent + ".webp";
    twoRCB.textContent = n5;
    twoRCB2.src = "/football_img/players/" + twoRCB.textContent + ".webp";
    twoRB.textContent = n2;
    twoRB2.src = "/football_img/players/" + twoRB.textContent + ".webp";
    twoGK.textContent = n1;
    twoGK2.src = "/football_img/players/" + twoGK.textContent + ".webp";
    Shorter();
}

// 4-3-3
export function four_three_three2(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {

    clearFields2();
    twoSTC.textContent = n9;
    twoSTC2.src = "/football_img/players/" + twoSTC.textContent + ".webp";
    twoLW.textContent = n11;
    twoLW2.src = "/football_img/players/" + twoLW.textContent + ".webp";
    twoRW.textContent = n7;
    twoRW2.src = "/football_img/players/" + twoRW.textContent + ".webp";
    twoLCM.textContent = n10;
    twoLCM2.src = "/football_img/players/" + twoLCM.textContent + ".webp";
    twoRCM.textContent = n8;
    twoRCM2.src = "/football_img/players/" + twoRCM.textContent + ".webp";
    twoDM.textContent = n6;
    twoDM2.src = "/football_img/players/" + twoDM.textContent + ".webp";
    twoLB.textContent = n3;
    twoLB2.src = "/football_img/players/" + twoLB.textContent + ".webp";
    twoLCB.textContent = n4;
    twoLCB2.src = "/football_img/players/" + twoLCB.textContent + ".webp";
    twoRCB.textContent = n5;
    twoRCB2.src = "/football_img/players/" + twoRCB.textContent + ".webp";
    twoRB.textContent = n2;
    twoRB2.src = "/football_img/players/" + twoRB.textContent + ".webp";
    twoGK.textContent = n1;
    twoGK2.src = "/football_img/players/" + twoGK.textContent + ".webp";
    Shorter();
}

// 4-3-3 False 9
export function four_three_three_false_nine2(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {

    clearFields2();
    twoLW.textContent = n11;
    twoLW2.src = "/football_img/players/" + twoLW.textContent + ".webp";
    twoAMC.textContent = n9;
    twoAMC2.src = "/football_img/players/" + twoAMC.textContent + ".webp";
    twoRW.textContent = n7;
    twoRW2.src = "/football_img/players/" + twoRW.textContent + ".webp";
    twoLCM.textContent = n10;
    twoLCM2.src = "/football_img/players/" + twoLCM.textContent + ".webp";
    twoRCM.textContent = n8;
    twoRCM2.src = "/football_img/players/" + twoRCM.textContent + ".webp";
    twoDM.textContent = n6;
    twoDM2.src = "/football_img/players/" + twoDM.textContent + ".webp";
    twoLB.textContent = n3;
    twoLB2.src = "/football_img/players/" + twoLB.textContent + ".webp";
    twoLCB.textContent = n4;
    twoLCB2.src = "/football_img/players/" + twoLCB.textContent + ".webp";
    twoRCB.textContent = n5;
    twoRCB2.src = "/football_img/players/" + twoRCB.textContent + ".webp";
    twoRB.textContent = n2;
    twoRB2.src = "/football_img/players/" + twoRB.textContent + ".webp";
    twoGK.textContent = n1;
    twoGK2.src = "/football_img/players/" + twoGK.textContent + ".webp";
    Shorter();
}

// 4-4-2
export function four_four_two2(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields2();
    twoSTL.textContent = n10;
    twoSTL2.src = "/football_img/players/" + twoSTL.textContent + ".webp";
    twoSTR.textContent = n9;
    twoSTR2.src = "/football_img/players/" + twoSTR.textContent + ".webp";
    twoWL.textContent = n11;
    twoWL2.src = "/football_img/players/" + twoWL.textContent + ".webp";
    twoWR.textContent = n7;
    twoWR2.src = "/football_img/players/" + twoWR.textContent + ".webp";
    twoLCM.textContent = n6;
    twoLCM2.src = "/football_img/players/" + twoLCM.textContent + ".webp";
    twoRCM.textContent = n8;
    twoRCM2.src = "/football_img/players/" + twoRCM.textContent + ".webp";
    twoLB.textContent = n3;
    twoLB2.src = "/football_img/players/" + twoLB.textContent + ".webp";
    twoLCB.textContent = n4;
    twoLCB2.src = "/football_img/players/" + twoLCB.textContent + ".webp";
    twoRCB.textContent = n5;
    twoRCB2.src = "/football_img/players/" + twoRCB.textContent + ".webp";
    twoRB.textContent = n2;
    twoRB2.src = "/football_img/players/" + twoRB.textContent + ".webp";
    twoGK.textContent = n1;
    twoGK2.src = "/football_img/players/" + twoGK.textContent + ".webp";
    Shorter();
}

// 4-2-2-2
export function four_two_two_two2(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields2();
    twoSTL.textContent = n10;
    twoSTL2.src = "/football_img/players/" + twoSTL.textContent + ".webp";
    twoSTR.textContent = n9;
    twoSTR2.src = "/football_img/players/" + twoSTR.textContent + ".webp";
    twoLF.textContent = n11;
    twoLF2.src = "/football_img/players/" + twoLF.textContent + ".webp";
    twoRF.textContent = n7;
    twoRF2.src = "/football_img/players/" + twoRF.textContent + ".webp";
    twoLCM.textContent = n6;
    twoLCM2.src = "/football_img/players/" + twoLCM.textContent + ".webp";
    twoRCM.textContent = n8;
    twoRCM2.src = "/football_img/players/" + twoRCM.textContent + ".webp";
    twoLB.textContent = n3;
    twoLB2.src = "/football_img/players/" + twoLB.textContent + ".webp";
    twoLCB.textContent = n4;
    twoLCB2.src = "/football_img/players/" + twoLCB.textContent + ".webp";
    twoRCB.textContent = n5;
    twoRCB2.src = "/football_img/players/" + twoRCB.textContent + ".webp";
    twoRB.textContent = n2;
    twoRB2.src = "/football_img/players/" + twoRB.textContent + ".webp";
    twoGK.textContent = n1;
    twoGK2.src = "/football_img/players/" + twoGK.textContent + ".webp";
    Shorter();
}

// 4-1-2-1-2
export function four_one_two_one_two2(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields2();
    twoSTL.textContent = n9;
    twoSTL2.src = "/football_img/players/" + twoSTL.textContent + ".webp";
    twoSTR.textContent = n11;
    twoSTR2.src = "/football_img/players/" + twoSTR.textContent + ".webp";
    twoAMC.textContent = n7;
    twoAMC2.src = "/football_img/players/" + twoAMC.textContent + ".webp";
    twoWL.textContent = n10;
    twoWL2.src = "/football_img/players/" + twoWL.textContent + ".webp";
    twoDM.textContent = n6;
    twoDM2.src = "/football_img/players/" + twoDM.textContent + ".webp";
    twoWR.textContent = n8;
    twoWR2.src = "/football_img/players/" + twoWR.textContent + ".webp";
    twoLB.textContent = n3;
    twoLB2.src = "/football_img/players/" + twoLB.textContent + ".webp";
    twoLCB.textContent = n4;
    twoLCB2.src = "/football_img/players/" + twoLCB.textContent + ".webp";
    twoRCB.textContent = n5;
    twoRCB2.src = "/football_img/players/" + twoRCB.textContent + ".webp";
    twoRB.textContent = n2;
    twoRB2.src = "/football_img/players/" + twoRB.textContent + ".webp";
    twoGK.textContent = n1;
    twoGK2.src = "/football_img/players/" + twoGK.textContent + ".webp";
    Shorter();
}

// 4-3-1-2
export function four_three_one_two2(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields2();
    twoSTL.textContent = n9;
    twoSTL2.src = "/football_img/players/" + twoSTL.textContent + ".webp";
    twoSTR.textContent = n11;
    twoSTR2.src = "/football_img/players/" + twoSTR.textContent + ".webp";
    twoAMC.textContent = n7;
    twoAMC2.src = "/football_img/players/" + twoAMC.textContent + ".webp";
    twoLCM.textContent = n10;
    twoLCM2.src = "/football_img/players/" + twoLCM.textContent + ".webp";
    twoCM.textContent = n6;
    twoCM2.src = "/football_img/players/" + twoCM.textContent + ".webp";
    twoRCM.textContent = n8;
    twoRCM2.src = "/football_img/players/" + twoRCM.textContent + ".webp";
    twoLB.textContent = n3;
    twoLB2.src = "/football_img/players/" + twoLB.textContent + ".webp";
    twoLCB.textContent = n4;
    twoLCB2.src = "/football_img/players/" + twoLCB.textContent + ".webp";
    twoRCB.textContent = n5;
    twoRCB2.src = "/football_img/players/" + twoRCB.textContent + ".webp";
    twoRB.textContent = n2;
    twoRB2.src = "/football_img/players/" + twoRB.textContent + ".webp";
    twoGK.textContent = n1;
    twoGK2.src = "/football_img/players/" + twoGK.textContent + ".webp";
    Shorter();
}

// 4-3-2-1
export function four_three_two_one2(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields2();
    twoSTC.textContent = n9;
    twoSTC2.src = "/football_img/players/" + twoSTC.textContent + ".webp";
    twoAMLC.textContent = n11;
    twoAMLC2.src = "/football_img/players/" + twoAMLC.textContent + ".webp";
    twoAMRC.textContent = n7;
    twoAMRC2.src = "/football_img/players/" + twoAMRC.textContent + ".webp";
    twoCM.textContent = n6;
    twoCM2.src = "/football_img/players/" + twoCM.textContent + ".webp";
    twoLCM.textContent = n10;
    twoLCM2.src = "/football_img/players/" + twoLCM.textContent + ".webp";
    twoRCM.textContent = n8;
    twoRCM2.src = "/football_img/players/" + twoRCM.textContent + ".webp";
    twoLB.textContent = n3;
    twoLB2.src = "/football_img/players/" + twoLB.textContent + ".webp";
    twoLCB.textContent = n4;
    twoLCB2.src = "/football_img/players/" + twoLCB.textContent + ".webp";
    twoRCB.textContent = n5;
    twoRCB2.src = "/football_img/players/" + twoRCB.textContent + ".webp";
    twoRB.textContent = n2;
    twoRB2.src = "/football_img/players/" + twoRB.textContent + ".webp";
    twoGK.textContent = n1;
    twoGK2.src = "/football_img/players/" + twoGK.textContent + ".webp";
    Shorter();
}

// 4-1-3-2
export function four_one_three_two2(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields2();
    twoSTL.textContent = n10;
    twoSTL2.src = "/football_img/players/" + twoSTL.textContent + ".webp";
    twoSTR.textContent = n9;
    twoSTR2.src = "/football_img/players/" + twoSTR.textContent + ".webp";
    twoLCM.textContent = n11;
    twoLCM2.src = "/football_img/players/" + twoLCM.textContent + ".webp";
    twoCM.textContent = n8;
    twoCM2.src = "/football_img/players/" + twoCM.textContent + ".webp";
    twoRCM.textContent = n7;
    twoRCM2.src = "/football_img/players/" + twoRCM.textContent + ".webp";
    twoDM.textContent = n6;
    twoDM2.src = "/football_img/players/" + twoDM.textContent + ".webp";
    twoLB.textContent = n3;
    twoLB2.src = "/football_img/players/" + twoLB.textContent + ".webp";
    twoLCB.textContent = n4;
    twoLCB2.src = "/football_img/players/" + twoLCB.textContent + ".webp";
    twoRCB.textContent = n5;
    twoRCB2.src = "/football_img/players/" + twoRCB.textContent + ".webp";
    twoRB.textContent = n2;
    twoRB2.src = "/football_img/players/" + twoRB.textContent + ".webp";
    twoGK.textContent = n1;
    twoGK2.src = "/football_img/players/" + twoGK.textContent + ".webp";

    Shorter();

    twoLCM.style.top = "50.5%"
    twoLCM2.style.top = "28.5%"
    twoRCM.style.top = "50.5%"
    twoRCM2.style.top = "28.5%"
    twoCM.style.top = "50.5%"
    twoCM2.style.top = "28.5%"
    twoDM.style.top = "79%"
    twoDM2.style.top = "57%"
}

// 4-1-3-2 att
export function four_one_three_two_att2(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields2();
    twoSTL.textContent = n10;
    twoSTL2.src = "/football_img/players/" + twoSTL.textContent + ".webp";
    twoSTR.textContent = n9;
    twoSTR2.src = "/football_img/players/" + twoSTR.textContent + ".webp";
    twoLF.textContent = n11;
    twoLF2.src = "/football_img/players/" + twoLF.textContent + ".webp";
    twoAMC.textContent = n8;
    twoAMC2.src = "/football_img/players/" + twoAMC.textContent + ".webp";
    twoRF.textContent = n7;
    twoRF2.src = "/football_img/players/" + twoRF.textContent + ".webp";
    twoCM.textContent = n6;
    twoCM2.src = "/football_img/players/" + twoCM.textContent + ".webp";
    twoLB.textContent = n3;
    twoLB2.src = "/football_img/players/" + twoLB.textContent + ".webp";
    twoLCB.textContent = n4;
    twoLCB2.src = "/football_img/players/" + twoLCB.textContent + ".webp";
    twoRCB.textContent = n5;
    twoRCB2.src = "/football_img/players/" + twoRCB.textContent + ".webp";
    twoRB.textContent = n2;
    twoRB2.src = "/football_img/players/" + twoRB.textContent + ".webp";
    twoGK.textContent = n1;
    twoGK2.src = "/football_img/players/" + twoGK.textContent + ".webp";
    Shorter();
}

// 4-1-3-1-1
// export function four_one_three_one_one2(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
//     clearFields2();
//     twoSTC.textContent = n9;
//     twoSTC2.src = "/football_img/players/" + twoSTC.textContent + ".webp";
//     twoAMC.textContent = n10;
//     twoAMC2.src = "/football_img/players/" + twoAMC.textContent + ".webp";
//     twoLCM.textContent = n11;
//     twoLCM2.src = "/football_img/players/" + twoLCM.textContent + ".webp";
//     twoCM.textContent = n8;
//     twoCM2.src = "/football_img/players/" + twoCM.textContent + ".webp";
//     twoRCM.textContent = n7;
//     twoRCM2.src = "/football_img/players/" + twoRCM.textContent + ".webp";
//     twoDM.textContent = n6;
//     twoDM2.src = "/football_img/players/" + twoDM.textContent + ".webp";
//     twoLB.textContent = n3;
//     twoLB2.src = "/football_img/players/" + twoLB.textContent + ".webp";
//     twoLCB.textContent = n4;
//     twoLCB2.src = "/football_img/players/" + twoLCB.textContent + ".webp";
//     twoRCB.textContent = n5;
//     twoRCB2.src = "/football_img/players/" + twoRCB.textContent + ".webp";
//     twoRB.textContent = n2;
//     twoRB2.src = "/football_img/players/" + twoRB.textContent + ".webp";
//     twoGK.textContent = n1;
//     twoGK2.src = "/football_img/players/" + twoGK.textContent + ".webp";
//     Shorter();
// }

// 4-4-1-1
export function four_four_one_one2(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields2();
    twoSTC.textContent = n9;
    twoSTC2.src = "/football_img/players/" + twoSTC.textContent + ".webp";
    twoAMC.textContent = n10;
    twoAMC2.src = "/football_img/players/" + twoAMC.textContent + ".webp";
    twoWL.textContent = n11;
    twoWL2.src = "/football_img/players/" + twoWL.textContent + ".webp";
    twoWR.textContent = n7;
    twoWR2.src = "/football_img/players/" + twoWR.textContent + ".webp";
    twoLCM.textContent = n6;
    twoLCM2.src = "/football_img/players/" + twoLCM.textContent + ".webp";
    twoRCM.textContent = n8;
    twoRCM2.src = "/football_img/players/" + twoRCM.textContent + ".webp";
    twoLB.textContent = n3;
    twoLB2.src = "/football_img/players/" + twoLB.textContent + ".webp";
    twoLCB.textContent = n4;
    twoLCB2.src = "/football_img/players/" + twoLCB.textContent + ".webp";
    twoRCB.textContent = n5;
    twoRCB2.src = "/football_img/players/" + twoRCB.textContent + ".webp";
    twoRB.textContent = n2;
    twoRB2.src = "/football_img/players/" + twoRB.textContent + ".webp";
    twoGK.textContent = n1;
    twoGK2.src = "/football_img/players/" + twoGK.textContent + ".webp";
    Shorter();
}

// 4-5-1
export function four_five_one2(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields2();
    twoSTC.textContent = n9;
    twoSTC2.src = "/football_img/players/" + twoSTC.textContent + ".webp";
    twoWL.textContent = n11;
    twoWL2.src = "/football_img/players/" + twoWL.textContent + ".webp";
    twoLCM.textContent = n10;
    twoLCM2.src = "/football_img/players/" + twoLCM.textContent + ".webp";
    twoRCM.textContent = n8;
    twoRCM2.src = "/football_img/players/" + twoRCM.textContent + ".webp";
    twoWR.textContent = n7;
    twoWR2.src = "/football_img/players/" + twoWR.textContent + ".webp";
    twoDM.textContent = n6;
    twoDM2.src = "/football_img/players/" + twoDM.textContent + ".webp";
    twoLB.textContent = n3;
    twoLB2.src = "/football_img/players/" + twoLB.textContent + ".webp";
    twoLCB.textContent = n4;
    twoLCB2.src = "/football_img/players/" + twoLCB.textContent + ".webp";
    twoRCB.textContent = n5;
    twoRCB2.src = "/football_img/players/" + twoRCB.textContent + ".webp";
    twoRB.textContent = n2;
    twoRB2.src = "/football_img/players/" + twoRB.textContent + ".webp";
    twoGK.textContent = n1;
    twoGK2.src = "/football_img/players/" + twoGK.textContent + ".webp";
    Shorter();
}

// 3-4-2-1
export function three_four_two_one2(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields2();
    twoSTC.textContent = n9;
    twoSTC2.src = "/football_img/players/" + twoSTC.textContent + ".webp";
    twoAMLC.textContent = n11;
    twoAMLC2.src = "/football_img/players/" + twoAMLC.textContent + ".webp";
    twoAMRC.textContent = n7;
    twoAMRC2.src = "/football_img/players/" + twoAMRC.textContent + ".webp";
    twoWL.textContent = n3;
    twoWL2.src = "/football_img/players/" + twoWL.textContent + ".webp";
    twoLCM.textContent = n8;
    twoLCM2.src = "/football_img/players/" + twoLCM.textContent + ".webp";
    twoRCM.textContent = n10;
    twoRCM2.src = "/football_img/players/" + twoRCM.textContent + ".webp";
    twoWR.textContent = n2;
    twoWR2.src = "/football_img/players/" + twoWR.textContent + ".webp";
    twoLCB.textContent = n4;
    twoLCB2.src = "/football_img/players/" + twoLCB.textContent + ".webp";
    twoCB.textContent = n5;
    twoCB2.src = "/football_img/players/" + twoCB.textContent + ".webp";
    twoRCB.textContent = n6;
    twoRCB2.src = "/football_img/players/" + twoRCB.textContent + ".webp";
    twoGK.textContent = n1;
    twoGK2.src = "/football_img/players/" + twoGK.textContent + ".webp";
    Shorter();
}

// 3-4-3
export function three_four_three2(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields2();
    twoSTC.textContent = n9;
    twoSTC2.src = "/football_img/players/" + twoSTC.textContent + ".webp";
    twoLF.textContent = n11;
    twoLF2.src = "/football_img/players/" + twoLF.textContent + ".webp";
    twoRF.textContent = n7;
    twoRF2.src = "/football_img/players/" + twoRF.textContent + ".webp";
    twoWL.textContent = n3;
    twoWL2.src = "/football_img/players/" + twoWL.textContent + ".webp";
    twoLCM.textContent = n8;
    twoLCM2.src = "/football_img/players/" + twoLCM.textContent + ".webp";
    twoRCM.textContent = n10;
    twoRCM2.src = "/football_img/players/" + twoRCM.textContent + ".webp";
    twoWR.textContent = n2;
    twoWR2.src = "/football_img/players/" + twoWR.textContent + ".webp";
    twoLCB.textContent = n4;
    twoLCB2.src = "/football_img/players/" + twoLCB.textContent + ".webp";
    twoCB.textContent = n5;
    twoCB2.src = "/football_img/players/" + twoCB.textContent + ".webp";
    twoRCB.textContent = n6;
    twoRCB2.src = "/football_img/players/" + twoRCB.textContent + ".webp";
    twoGK.textContent = n1;
    twoGK2.src = "/football_img/players/" + twoGK.textContent + ".webp";
    Shorter();
}

// 3-4-1-2
export function three_four_one_two2(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields2();
    twoSTL.textContent = n9;
    twoSTL2.src = "/football_img/players/" + twoSTL.textContent + ".webp";
    twoSTR.textContent = n11;
    twoSTR2.src = "/football_img/players/" + twoSTR.textContent + ".webp";
    twoAMC.textContent = n7;
    twoAMC2.src = "/football_img/players/" + twoAMC.textContent + ".webp";
    twoWL.textContent = n3;
    twoWL2.src = "/football_img/players/" + twoWL.textContent + ".webp";
    twoLCM.textContent = n8;
    twoLCM2.src = "/football_img/players/" + twoLCM.textContent + ".webp";
    twoRCM.textContent = n10;
    twoRCM2.src = "/football_img/players/" + twoRCM.textContent + ".webp";
    twoWR.textContent = n2;
    twoWR2.src = "/football_img/players/" + twoWR.textContent + ".webp";
    twoLCB.textContent = n4;
    twoLCB2.src = "/football_img/players/" + twoLCB.textContent + ".webp";
    twoCB.textContent = n5;
    twoCB2.src = "/football_img/players/" + twoCB.textContent + ".webp";
    twoRCB.textContent = n6;
    twoRCB2.src = "/football_img/players/" + twoRCB.textContent + ".webp";
    twoGK.textContent = n1;
    twoGK2.src = "/football_img/players/" + twoGK.textContent + ".webp";
    Shorter();
}

// 3-5-2
export function three_five_two2(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields2();
    twoSTL.textContent = n9;
    twoSTL2.src = "/football_img/players/" + twoSTL.textContent + ".webp";
    twoSTR.textContent = n11;
    twoSTR2.src = "/football_img/players/" + twoSTR.textContent + ".webp";
    twoWL.textContent = n3;
    twoWL2.src = "/football_img/players/" + twoWL.textContent + ".webp";
    twoLCM.textContent = n10;
    twoLCM2.src = "/football_img/players/" + twoLCM.textContent + ".webp";
    twoCM.textContent = n7;
    twoCM2.src = "/football_img/players/" + twoCM.textContent + ".webp";
    twoRCM.textContent = n8;
    twoRCM2.src = "/football_img/players/" + twoRCM.textContent + ".webp";
    twoWR.textContent = n2;
    twoWR2.src = "/football_img/players/" + twoWR.textContent + ".webp";
    twoLCB.textContent = n4;
    twoLCB2.src = "/football_img/players/" + twoLCB.textContent + ".webp";
    twoCB.textContent = n5;
    twoCB2.src = "/football_img/players/" + twoCB.textContent + ".webp";
    twoRCB.textContent = n6;
    twoRCB2.src = "/football_img/players/" + twoRCB.textContent + ".webp";
    twoGK.textContent = n1;
    twoGK2.src = "/football_img/players/" + twoGK.textContent + ".webp";
    Shorter();
}

// 5-2-2-1
export function five_two_two_one2(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields2();
    twoSTC.textContent = n9;
    twoSTC2.src = "/football_img/players/" + twoSTC.textContent + ".webp";
    twoAMLC.textContent = n11;
    twoAMLC2.src = "/football_img/players/" + twoAMLC.textContent + ".webp";
    twoAMRC.textContent = n7;
    twoAMRC2.src = "/football_img/players/" + twoAMRC.textContent + ".webp";
    twoLB.textContent = n3;
    twoLB2.src = "/football_img/players/" + twoLB.textContent + ".webp";
    twoLCM.textContent = n8;
    twoLCM2.src = "/football_img/players/" + twoLCM.textContent + ".webp";
    twoRCM.textContent = n10;
    twoRCM2.src = "/football_img/players/" + twoRCM.textContent + ".webp";
    twoRB.textContent = n2;
    twoRB2.src = "/football_img/players/" + twoRB.textContent + ".webp";
    twoLCB.textContent = n4;
    twoLCB2.src = "/football_img/players/" + twoLCB.textContent + ".webp";
    twoCB.textContent = n5;
    twoCB2.src = "/football_img/players/" + twoCB.textContent + ".webp";
    twoRCB.textContent = n6;
    twoRCB2.src = "/football_img/players/" + twoRCB.textContent + ".webp";
    twoGK.textContent = n1;
    twoGK2.src = "/football_img/players/" + twoGK.textContent + ".webp";
    Shorter();
}

// 5-2-3
export function five_two_three2(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields2();
    twoSTC.textContent = n9;
    twoSTC2.src = "/football_img/players/" + twoSTC.textContent + ".webp";
    twoLF.textContent = n11;
    twoLF2.src = "/football_img/players/" + twoLF.textContent + ".webp";
    twoRF.textContent = n7;
    twoRF2.src = "/football_img/players/" + twoRF.textContent + ".webp";
    twoLB.textContent = n3;
    twoLB2.src = "/football_img/players/" + twoLB.textContent + ".webp";
    twoLCM.textContent = n8;
    twoLCM2.src = "/football_img/players/" + twoLCM.textContent + ".webp";
    twoRCM.textContent = n10;
    twoRCM2.src = "/football_img/players/" + twoRCM.textContent + ".webp";
    twoRB.textContent = n2;
    twoRB2.src = "/football_img/players/" + twoRB.textContent + ".webp";
    twoLCB.textContent = n4;
    twoLCB2.src = "/football_img/players/" + twoLCB.textContent + ".webp";
    twoCB.textContent = n5;
    twoCB2.src = "/football_img/players/" + twoCB.textContent + ".webp";
    twoRCB.textContent = n6;
    twoRCB2.src = "/football_img/players/" + twoRCB.textContent + ".webp";
    twoGK.textContent = n1;
    twoGK2.src = "/football_img/players/" + twoGK.textContent + ".webp";
    Shorter();
}

// 5-2-1-2
export function five_two_one_two2(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields2();
    twoSTL.textContent = n9;
    twoSTL2.src = "/football_img/players/" + twoSTL.textContent + ".webp";
    twoSTR.textContent = n11;
    twoSTR2.src = "/football_img/players/" + twoSTR.textContent + ".webp";
    twoAMC.textContent = n7;
    twoAMC2.src = "/football_img/players/" + twoAMC.textContent + ".webp";
    twoLB.textContent = n3;
    twoLB2.src = "/football_img/players/" + twoLB.textContent + ".webp";
    twoLCM.textContent = n8;
    twoLCM2.src = "/football_img/players/" + twoLCM.textContent + ".webp";
    twoRCM.textContent = n10;
    twoRCM2.src = "/football_img/players/" + twoRCM.textContent + ".webp";
    twoRB.textContent = n2;
    twoRB2.src = "/football_img/players/" + twoRB.textContent + ".webp";
    twoLCB.textContent = n4;
    twoLCB2.src = "/football_img/players/" + twoLCB.textContent + ".webp";
    twoCB.textContent = n5;
    twoCB2.src = "/football_img/players/" + twoCB.textContent + ".webp";
    twoRCB.textContent = n6;
    twoRCB2.src = "/football_img/players/" + twoRCB.textContent + ".webp";
    twoGK.textContent = n1;
    twoGK2.src = "/football_img/players/" + twoGK.textContent + ".webp";
    Shorter();
}

// 5-3-2
export function five_three_two2(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields2();
    twoSTL.textContent = n9;
    twoSTL2.src = "/football_img/players/" + twoSTL.textContent + ".webp";
    twoSTR.textContent = n11;
    twoSTR2.src = "/football_img/players/" + twoSTR.textContent + ".webp";
    twoLB.textContent = n3;
    twoLB2.src = "/football_img/players/" + twoLB.textContent + ".webp";
    twoLCM.textContent = n10;
    twoLCM2.src = "/football_img/players/" + twoLCM.textContent + ".webp";
    twoCM.textContent = n7;
    twoCM2.src = "/football_img/players/" + twoCM.textContent + ".webp";
    twoRCM.textContent = n8;
    twoRCM2.src = "/football_img/players/" + twoRCM.textContent + ".webp";
    twoRB.textContent = n2;
    twoRB2.src = "/football_img/players/" + twoRB.textContent + ".webp";
    twoLCB.textContent = n4;
    twoLCB2.src = "/football_img/players/" + twoLCB.textContent + ".webp";
    twoCB.textContent = n5;
    twoCB2.src = "/football_img/players/" + twoCB.textContent + ".webp";
    twoRCB.textContent = n6;
    twoRCB2.src = "/football_img/players/" + twoRCB.textContent + ".webp";
    twoGK.textContent = n1;
    twoGK2.src = "/football_img/players/" + twoGK.textContent + ".webp";
    Shorter();
}

// 5-4-1
export function five_four_one2(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields2();
    twoSTC.textContent = n9;
    twoSTC2.src = "/football_img/players/" + twoSTC.textContent + ".webp";
    twoWL.textContent = n11;
    twoWL2.src = "/football_img/players/" + twoWL.textContent + ".webp";
    twoWR.textContent = n7;
    twoWR2.src = "/football_img/players/" + twoWR.textContent + ".webp";
    twoLB.textContent = n3;
    twoLB2.src = "/football_img/players/" + twoLB.textContent + ".webp";
    twoLCM.textContent = n8;
    twoLCM2.src = "/football_img/players/" + twoLCM.textContent + ".webp";
    twoRCM.textContent = n10;
    twoRCM2.src = "/football_img/players/" + twoRCM.textContent + ".webp";
    twoRB.textContent = n2;
    twoRB2.src = "/football_img/players/" + twoRB.textContent + ".webp";
    twoLCB.textContent = n4;
    twoLCB2.src = "/football_img/players/" + twoLCB.textContent + ".webp";
    twoCB.textContent = n5;
    twoCB2.src = "/football_img/players/" + twoCB.textContent + ".webp";
    twoRCB.textContent = n6;
    twoRCB2.src = "/football_img/players/" + twoRCB.textContent + ".webp";
    twoGK.textContent = n1;
    twoGK2.src = "/football_img/players/" + twoGK.textContent + ".webp";
    Shorter();
}
