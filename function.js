// function anonymous, regular, arrow,
// function sayHi(){  //declaring function
//     console.log("Hi");
// }
// sayHi(); //calling
//   named function  regular function
function sayHi(greet){  //declaring function
    console.log(greet);
}
var greet = "AOA"
var greet2 = "Hello"
var greet3 = "Hi"
sayHi(greet); //calling
sayHi(greet2); //calling
sayHi(greet3); //calling
// function pass your name and print my name is .....
function add(a, b) { // parameters
    console.log(a + b)
}
var a = 10;
var b = 11;
// add(3,9)
// add(a, b)// arguments
// anonymous unnamed
var sub = function (a, b){
    var name = "faiza"
    console.log(a + "-" + b + "=", a - b)
    //template literal ${} multi line
    console.log(`${a} - ${b} = ${a - b}`)
    console.log(`my name is ${name}
i am in smit`)
}
// sub(10, 6);

function inputAdd() {
    var a = +prompt()
    var b = +prompt()
    console.log(a + b)

}
// inputAdd()
/// write a funtion which substract two numbers a and b. if a value is less than b then print to user to give larger value
// try your luck: give random number to know what you win value
// from the given array 
function tryYourLuck() {
    var wins = ["car", "house", "gold", "job", "money", "visa", "try next time", "spouse"];
    var len = wins.length;
    var random = Math.ceil(Math.random()*(len -1)) // 0.0 - 0.9
    console.log("🚀 ~ file: function.js:49 ~ tryYourLuck ~ random:", random)
    console.log(`you won ${wins[random]}`)
}
tryYourLuck()

