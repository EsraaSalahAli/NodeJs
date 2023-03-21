console.log("Question 1")
var MathOperators = require('./Module1');

MathOperators.AddNums("s",6);
MathOperators.AddNums(12,6);
MathOperators.SubNums(5,12);
MathOperators.SubNums(5,2);
MathOperators.MultiNums(2,5);

console.log("---------------------------------------------")
console.log("Question 2")

var MyData = require('./Module2');
MyData.Data("Esraa",new Date("1990-03-25"))