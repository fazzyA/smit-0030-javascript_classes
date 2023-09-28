//arrays
var arr =[] // arr.length
var arr1 = [10]
var arr2 = new Array(10,29)
var arr3 = new Array(10)
var arr4 = [1, 2, 3, 4, 5, true, "binish"] // 7 //6

// // var cities = ['Karachi', 'islamabad', 'multan'];
// // cities length = 2 karachi = 0, isla-1
// // var arr = new Array(1,2,3);
// // console.log(cities);
// // var mixedArray = [1, true, "faiza", 0.2];
// // () // paranthesis
// // [] square
// // {}

// // var ten = new Array("faiza");
// // var ten1 = [10];
// // console.log('ten ', ten) // 10, 0, 
// // console.log('ten1 ', ten1.length) // 1
// var cities = ['Karachi', 'islamabad', 'multan'];
// // console.log(cities[1]); // access, read values
// // // modify values / elements
// // cities[2] = "Faisalabad";

// var ten = new Array("faiza");
// var ten1 = [10];
// console.log('ten ', ten) // 10, 0, 
// console.log('ten1 ', ten1.length) // 1
var cities = ['Karachi', 'islamabad', 'multan']; // 3 //2
// console.log(cities[1]); // access, read values
// // modify values / elements
// cities[2] = "Faisalabad";

// console.log(cities);
// // pop push
// // cities.pop();
// // cities.pop();
// // cities.pop();
// console.log(cities);
// cities.push('lahore')
// console.log(cities);
// shift delete from the start
// maggi.shift()
// // unshift start se add karta
// maggi.unshift('pan')

// var shopping = ['makeup1','makeup2','makeup3','makeup4',
// 'makeup5','makeup6', 'watch', 'bags', 'jewellery',
// 'shoes', 'shoes','shoes','shoes','shoes','last'];
// var myele = shopping[3];
// var lastElement = shopping[shopping.length - 1]
// var someOtherElement = shopping[shopping.length - 2]
// var someElement = shopping[1+1]; // makeup3
// console.log(shopping[30]); //undefined as 30 index not found
// console.log(shopping.length - 1);
// console.log(shopping);
// shopping[3] = 'purse'; //update/modify
// // shopping[5] = 'eyeliner'; // add
// shopping[6] = 'laptop'
// shopping[-1] = 'lipstick'
// console.log(shopping);
// var empty = [];
// empty[0] = 1
// console.log(empty.length); //0
// var tea = ['water', 'elaichi', 'milk'];
// // splice add, remove 

// tea.splice(1, 1, 'tea', 'sugar');
// console.log(tea);
// var maggi = ['water', 'maggi', 'masala']
// console.log("🚀 ~ file: arrays.js:59 ~ maggi:", maggi)
// maggi.splice(1, 2, 'vegatables');
// console.log("🚀 ~ file: arrays.js:59 ~ maggi:", maggi)
// console.log("🚀 ~ file: arrays.js:64 ~ maggi:", maggi)

// var animals = ["dog", "cat", "fly", "bug", "ox"];
// animals.splice(2, 2, "bear", "duck", "emu");
// dog cat bear duck emu ox


// var count = [1,2,3,6,7,8]
// // 4, 5 , 9, 10
// count.splice(3, 0, 4, 5)
// console.log("🚀 ~ file: arrays.js:76 ~ count:", count)
// count.push(9, 10)
// console.log("🚀 ~ file: arrays.js:78 ~ count:", count)
var animals = 
["dog", "cat", "parrot","rabbit", "chicken", "fisher", "bat"]
var halalAnimal = animals.slice(0, 5) // ["rabbit", "chicken"]
// array.splice(2, 2, "da");
console.log("🚀 ~ file: arrays.js:80 ~ halalAnimal:", halalAnimal)
var fruits = ["banana", "kiwi", "cherry", "mango", "apple", "orange", "grapes"]
// var likedFruit = fruits.slice(1, 4) // ["kiwi", "cherry", "mango"]

// fruits.slice(1) // ["kiwi", "cherry", "mango", "apple", "orange", "grapes"]
var likedFruit = fruits.slice(2) // ["kiwi", "cherry", "mango", "apple", "orange", "grapes"]
// (start, one before end) (2, -2)
// (-anynum) last elements
// let array = [1,2,3,4,5,6,7,8,9,10]
// for (let i=0; i<= array.length-1; i++ ){
//     array[i] = array[i]+1 
// }
// console.log(array)

// var table = +prompt('Enter table number :', 2);
// var tableLenght = +prompt('Enter length of table :', 10);
// for (let i = 1; i <= tableLenght; i = i + 2) {
//     var element =table*i;
//     // console.log(`${table} * ${i} = ${element}`)
//     console.log(table + "*" + i + "=", table*i)
// }

// odd number 1- 100

// for(let i = 1; i <= 100; i = i+2){
//     console.log(i)
// }
// // even number 1- 100

// for(let i = 2; i <= 100; i = i+2){
//     console.log(i)
// }
let num = [];
for(let i = 1; i <= 10; i++){
   num.push(i)
}
console.log(num)




// // if person has applied for dubai and he is from karachi he is 
// // eligible for saylani otherwise not
// // var city = prompt("enter your city", 'karachi');
// // var gender = prompt("enter your age", 'male');
// // var appliedFor = prompt("applied for dubai: yes or no", "yes");
// // var allowedCity = "karachi";
// // if(city === allowedCity && gender === "male" && appliedFor === "yes"){
// //     console.log('eligible for dubai job')
// // } else {
// //     console.log('not eligible')
// // }
// console.log("b" >= "a");

var a = 10
if (true) {
    let b = 2
    console.log(a)
}
console.log(b)