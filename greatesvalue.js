var read = require("readline-sync")
var num1  = read.question("enter a number")
var num2 = read.question("enter the second number")
if(num1 > num2 ){
console.log("num1 is greatest")

}
else if(num2>num1){
    console.log("num2 is the greatest")
}
else if(num1===num2){
}