// write a function which returns array. call the function and destructure array values and print the value
const myArr = () => ['orange', 'pomegranate', 'banana']
const res = myArr();
console.log("🚀 ~ file: solutions.js:4 ~ res:", res)
let [fruit1, fruit2, fruit3] = res
console.log(fruit1)
console.log(fruit2)
console.log(fruit3)

// Make a car object with model, year, color. display all the values by destructuring
let car = {
    model: "alto",
    year: "2022",
    color: "black"
}
let { model ,year, color } = car

// use three variable name, greeting and display value using template literals

let name1 = "Zara";
let name2 = "Ali";
let name3 = "Sara";

console.log(`hello ${name1}, ${name2} and ${name3}`);

// use array [1,2,3,4,5,6,7,8,9,10] assign first three values in seperate variables and all remaining in one element as an array

// if car speed is less than 80 display "car speed is slow", if greater than 80 but less than 120 than display 
// " car speed is moderate" and if greater than 120 display "car speed is fast"
let carspeed1= 80
if (carspeed1 <= 80) {
    console.log('car speed is slow')
} else if(carspeed1 > 80 && carspeed1 <= 120){
    console.log("car speed is moderate");
}else{
    console.log("car speed is fast");
}
let str = (carspeed1 <= 80 ) ? 'slow' : (carspeed1 > 80 && carspeed1 <= 120) ? 'moderate' : 'fast'
console.log("🚀 ~ file: solutions.js:39 ~ str:", str)
// example 2 by ternary operator

//write a function which return true if a number given in a parameter is even and return false if it is odd 
const checkEven = (num) => {
     if(num % 2 === 0) {
        return true
     } else {
        return false
     }
}
console.log(checkEven(4.5))
    
