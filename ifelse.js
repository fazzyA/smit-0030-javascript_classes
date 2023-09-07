//ifelse statement
// var num = +prompt("enter any number");

// if (condition => yes/no === true/false) {

// }
// if(num == 10) {
// // do work here
// console.log("I am in if block");
// } else {
// console.log("I am in else block");
// }

// even odd
    // var evenOdd = +prompt(); //'3' => 3
    // // 2 4
    // if(evenOdd % 2 == 0){
    //     console.log("you entered even numb")
    // } else {
    //     console.log("you entered odd num")
    // }


// write a program to check age > or eq to 18
    // var age = prompt();
    // if(age >= 18){
    // console.log("u r allowed")
    // } else {
    //     console.log("not allowed")
    // }
    // console.log("after if else block")
// var age = prompt('enter age');
// var gender = prompt('enter g');
// if (age > 16 && gender.toLowerCase() === 'female') {
//    console.log("YES")
// } else{
//     console.log('no')
// }
// var flower = prompt('enter ur flower', 'rose');
// if(flower.toLowerCase() !== 'rose') {
//     console.log('I will accept', flower)
// } else {
//     console.log('will not accept', flower)
// }
var num1 = 10;
var num2 = 4;
var num3 = 2;
// age 10 or above,  9 waiting, not allowed
var age = +prompt("enter ur age")
if (age >= 10) {
    console.log('allowed')
} else if (age === 9) {
    console.log('waiting')
} else {
    console.log('not allowed');
}

console.log('after if');