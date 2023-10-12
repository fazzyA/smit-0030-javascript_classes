// // function anonymous, regular, arrow,
// // function sayHi(){  //declaring function
// //     console.log("Hi");
// // }
// // sayHi(); //calling
// //   named function  regular function
// function sayHi(greet){  //declaring function
//     console.log(greet);
// }
// var greet = "AOA"
// var greet2 = "Hello"
// var greet3 = "Hi"
// sayHi(greet); //calling
// sayHi(greet2); //calling
// sayHi(greet3); //calling
// // function pass your name and print my name is .....
// function add(a, b) { // parameters
//     console.log(a + b)
// }
// var a = 10;
// var b = 11;
// // add(3,9)
// // add(a, b)// arguments
// // anonymous unnamed
// var sub = function (a, b){
//     var name = "faiza"
//     console.log(a + "-" + b + "=", a - b)
//     //template literal ${} multi line
//     console.log(`${a} - ${b} = ${a - b}`)
//     console.log(`my name is ${name}
// i am in smit`)
// }
// // sub(10, 6);

// function inputAdd() {
//     var a = +prompt()
//     var b = +prompt()
//     console.log(a + b)

// }
// // inputAdd()
// /// write a funtion which substract two numbers a and b. if a value is less than b then print to user to give larger value
// // try your luck: give random number to know what you win value
// // from the given array 
// function tryYourLuck() {
//     var wins = ["car", "house", "gold", "job", "money", "visa", "try next time", "spouse"];
//     var len = wins.length;
//     var random = Math.ceil(Math.random()*(len -1)) // 0.0 - 0.9
//     console.log("🚀 ~ file: function.js:49 ~ tryYourLuck ~ random:", random)
//     console.log(`you won ${wins[random]}`)
// }
// tryYourLuck()

// write a function which display date in format 12-10-2023
function displayDate() {
let date = new Date();
var myDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
document.write(myDate)
}
// displayDate();
// function 1. do one thing 2. takes arguments 3. takes args return
function add(a,b) {
var sum = a + b;
console.log(sum)
}
add(1,3);

function sum(a, b) {
    var result = a + b;
    console.log("🚀 ~ file: function.js:70 ~ sum ~ result:", result)
    return result;
}
var res = sum(30, 10); //13
var bonus = 10;
res += bonus;

console.log('my sum = ', sum(3, 2))
// write a function that takes args in fahrenheit and return in celsius
//(°F - 32) * 5/9
function convertToCelsius(far) {
    let celsius = (far - 32) * (5/2)
    return celsius
}
var celsius = convertToCelsius(32)
// document.write(celsius)
// write a function which displays date in the format of 12 oct 2023
function formatDate(){
    var d = new Date();
    var date = d.getDate();
    var year = d.getFullYear();
    let months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    var currentMonth = months[d.getMonth()]; // months[9]
    // return `${date}-${currentMonth}-${year}`
    return `${d.getDate()}-${months[d.getMonth()]}-${d.getFullYear()}`
}

var formatedDate = formatDate();
// document.write(formatedDate)

function tommorreDate() {
    let d = new Date();
    let date = d.getDate() + 1
    return `${date}-${d.getMonth() + 1}-${d.getFullYear()}`
}
var fodate = tommorreDate()
document.write(fodate)

console.log("200" + 15) //  20015
console.log("200" + "15") // 20015
console.log("200" - 10) // 190
console.log("200" * 10) // 2000
console.log("duck" - 100) // NAN
console.log(10 * "duck") // NAN
var num = parseInt("200") // 200
console.log("🚀 ~ file: function.js:115 ~ num:", num)
var num2 = parseInt(200.89) // 200
console.log("🚀 ~ file: function.js:116 ~ num2:", num2)
var floatNum = parseFloat("200.56"); // 200.56
var floatNum1 = parseFloat("200"); // 200.00
console.log("🚀 ~ file: function.js:120 ~ floatNum1:", floatNum1)
var num3 = Number("200.56") //200.56
var num4 = Number("200") //200
var num4 = Number(100) //100
var future = new Date("30 Jan, 2024") // job date future
console.log(future.getDate()) // 30
var curDate = new Date();
var diff = future.getTime() - curDate.getTime();
diff = Math.floor(diff/ (1000 * 60 * 60 *24))
console.log(diff, "days left");
