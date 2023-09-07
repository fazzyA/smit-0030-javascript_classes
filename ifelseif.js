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
/// if person <=3 ticket price 100,
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
console.log(' ur ticket price is', ticketPrice)