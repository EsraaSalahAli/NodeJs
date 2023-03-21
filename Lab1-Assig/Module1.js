// var Num1 = 5;
// var Num2 = 3;

function Add(Num1, Num2) {
    if (!Number.isInteger(Num1) || !Number.isInteger(Num2)) {
        console.log("Number Is not valid!!");
    }
    else {
        console.log(Num1 + Num2);
    }
}

function Sub(Num1, Num2) {
    if (!Number.isInteger(Num1) || !Number.isInteger(Num2) || Num1 < Num2) {
        console.log("Number Is not valid!! or Num1 must be larger than Num2");
    }
    else {
        console.log(Num1 - Num2);
    }
}

function Multi(Num1, Num2) {
    if (!Number.isInteger(Num1) || !Number.isInteger(Num2)) {
        console.log("Number Is not valid!!");
    }
    else {
        console.log(Num1 * Num2);
    }
}

module.exports = {
    AddNums: Add,
    SubNums: Sub,
    MultiNums: Multi
}