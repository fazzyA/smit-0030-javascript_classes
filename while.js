// var i = 0
// while(i<=3) {
// console.log("im in while")
// i++;
// }

// let j = 0;
// while (j < 10) {
//  console.log(j);
//  j++;
// }
// find luiza by removing elemnets in array
let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky", "Angella"];
// length 6  2
// let notFound = true;
// while (notFound && someArray.length > 0) {
//  if (someArray[0] === "Louiza") {
//  console.log("Found her!");
//  notFound = false;
//  } else {
//     console.log(someArray)
//  someArray.shift(); // remove first one
//  }
// }
// search any element in array using while
let anyArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky", "Angella"];
let i = 0;
while(i < anyArray.length) {
    console.log(anyArray[i])
    if(anyArray[i] == "Louiza"){
        console.log("found her");
        break;
    }
    i++;
}
// print the table
var k = 1
while(k <= 10) {
    console.log(2 * k);
    k++;
}
// guess a num. give user chance to enter the num.
// if num is wrong then let him input again until 
// his guess is right
// method 1
var luckyNum = 5;
let notFound = true
while(notFound) {
    var guess = +prompt("enter ur guess 1 - 5")
    if(guess === luckyNum){
        document.write(" you guessed the number!")
        notFound = false
    }
}
// method 2
const luckyNum = 3;
let guess = +prompt("Enter lucky number 1 - 10");

while(guess !== luckyNum){
    guess = +prompt("Enter lucky number 1 - 10");
    if(guess !== luckyNum)  alert("try again")
}
if (guess === luckyNum){
    document.write("Your guess is right")
}