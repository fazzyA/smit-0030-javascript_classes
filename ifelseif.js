// var age =prompt("enter your age");
// if(age >= 21){
//     console.log("ok u are confirm to allow mobile")

// }else if (age >= 19){
//     console.log("you will soon buy")
// }else {
//     console.log("bhago")
// }

// if 1, true, str value "hello"
// else false
var bool = true;
// if(bool){
//     console.log('i am if #1')
// } else {
//     console.log('i am else #1')
// }
// if(!bool){
//     console.log('i am if #2')
// } else {
//     console.log('i am else #2')
// }
// if person <=3 ticket price 100,
// person older than 3 but younger than 12 price = 200
// person age > 12 300
var ticketPrice; //14
var age = +prompt('enter ur age');
if (age <= 3) {
    ticketPrice = 100
} else if (age > 3 && age < 12){
   ticketPrice = 200
} else {
  ticketPrice = 300
}
// console.log(' ur ticket price is', ticketPrice)
// const root1 = document.getElementById('root1');
// console.log("🚀 ~ file: ifelseif.js:38 ~ root:", root1)
// root1.addEventListener('click', function (){
//   console.log('first')
// })

// var city = "Islamabad"
// // karachi na ho then isl
// if (city.toLowerCase() !== 'Karachi') {
//   if (city.toLowerCase() === "islamabad"){
//     console.log('capital')
//   } else{
//     console.log('not capital')
//   }
// }
//  if(city.toLowerCase() !== 'Karachi' && city.toLowerCase() === "islamabad") {
//   console.log('capital')
//  } else {
//   console.log('not capital')
//  }

// guess a number
var guess = +prompt('enter any num to guess');
if(guess === 5) {
  console.log('u won')
} else {
  if (guess > 5) {
    console.log('sorry ur num was > than our guessed')
  }
}

