// same work so many times
// iteration [1,2,3]

// for(var i = 1; i <= 10; i++) {
//   console.log("i = ", i)
// }
var cities = 
["dubai", "ny", "chicago", "LA", "mexico", "karachi", "spain", "houstan"];
var cityToCheck = prompt("enter ur city", "karachi")
for(let i = 0; i <= cities.length - 1; i++ ) {
    console.log("i= ", i, cities[i])
    if (cityToCheck === citices[i]) {
        alert("yes your city is in the list")
        
    }
}

// // even number 1- 100
const evenNum = [];
for(let i = 2; i <= 100; i = i+2){
    evenNum.push(i)
}
let num = [];
for(let i = 1; i <= 10; i++){
   num.push(i)
}
console.log(num)