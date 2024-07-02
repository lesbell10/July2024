const STL = document.querySelector('.STL');
const STL2 = document.querySelector('.STL2');
const STC = document.querySelector('.STC');
const STC2 = document.querySelector('.STC2');
const STR = document.querySelector('.STR');
const STR2 = document.querySelector('.STR2');
const LW = document.querySelector('.LW');
const LW2 = document.querySelector('.LW2');
const LF = document.querySelector('.LF');
const LF2 = document.querySelector('.LF2');
const AMLC = document.querySelector('.AMLC');
const AMLC2 = document.querySelector('.AMLC2');
const AMC = document.querySelector('.AMC');
const AMC2 = document.querySelector('.AMC2');
const AMRC = document.querySelector('.AMRC');
const AMRC2 = document.querySelector('.AMRC2');
const RF = document.querySelector('.RF');
const RF2 = document.querySelector('.RF2');
const RW = document.querySelector('.RW');
const RW2 = document.querySelector('.RW2');
const WL = document.querySelector('.WL');
const WL2 = document.querySelector('.WL2');
const LCM = document.querySelector('.LCM');
const LCM2 = document.querySelector('.LCM2');
const CM = document.querySelector('.CM');
const CM2 = document.querySelector('.CM2');
const RCM = document.querySelector('.RCM');
const RCM2 = document.querySelector('.RCM2');
const WR = document.querySelector('.WR');
const WR2 = document.querySelector('.WR2');
const DM = document.querySelector('.DM');
const DM2 = document.querySelector('.DM2');
const LB = document.querySelector('.LB');
const LB2 = document.querySelector('.LB2');
const LCB = document.querySelector('.LCB');
const LCB2 = document.querySelector('.LCB2');
const CB = document.querySelector('.CB');
const CB2 = document.querySelector('.CB2');
const RCB = document.querySelector('.RCB');
const RCB2 = document.querySelector('.RCB2');
const RB = document.querySelector('.RB');
const RB2 = document.querySelector('.RB2');
const GK = document.querySelector('.GK');
const GK2 = document.querySelector('.GK2');

function Shorter() {
    const divs = document.querySelectorAll('.rectangle > div');

    divs.forEach(div => {

        if (div.textContent === "" || div.textContent === "") {
            div.style.marginLeft = '-10px'
        } else if (div.textContent === "" || div.textContent === "") {
            div.style.marginLeft = '-25px';
        } else if (div.textContent === "" || div.textContent === "") {
            div.style.marginLeft = '-40px';
        } else {
            div.style.marginLeft = '0';
        }

    });
}

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
    LCB.textContent = n5;
    LCB2.src = "/football_img/players/" + LCB.textContent + ".webp";
    RCB.textContent = n4;
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
    LCB.textContent = n5;
    LCB2.src = "/football_img/players/" + LCB.textContent + ".webp";
    RCB.textContent = n4;
    RCB2.src = "/football_img/players/" + RCB.textContent + ".webp";
    RB.textContent = n2;
    RB2.src = "/football_img/players/" + RB.textContent + ".webp";
    GK.textContent = n1;
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
    LF.textContent = n11
    LF2.src = "/football_img/players/" + LF.textContent + ".webp";
    AMC.textContent = n8
    AMC2.src = "/football_img/players/" + AMC.textContent + ".webp";
    RF.textContent = n7
    RF2.src = "/football_img/players/" + RF.textContent + ".webp";
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
    LCB.textContent = n4
    LCB2.src = "/football_img/players/" + LCB.textContent + ".webp";
    RCB.textContent = n5
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