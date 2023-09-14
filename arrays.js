//arrays

// var cities = ['Karachi', 'islamabad', 'multan'];
// cities length = 2 karachi = 0, isla-1
// var arr = new Array(1,2,3);
// console.log(cities);
// var mixedArray = [1, true, "faiza", 0.2];
// () // paranthesis
// [] square
// {}

// var ten = new Array("faiza");
// var ten1 = [10];
// console.log('ten ', ten) // 10, 0, 
// console.log('ten1 ', ten1.length) // 1
var cities = ['Karachi', 'islamabad', 'multan'];
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

var shopping = ['makeup1','makeup2','makeup3','makeup4',
'makeup5','makeup6', 'watch', 'bags', 'jewellery',
'shoes', 'shoes','shoes','shoes','shoes','last'];
var lastElement = shopping[shopping.length - 1]
var someOtherElement = shopping[shopping.length - 2]
var someElement = shopping[1+1]; // makeup3
console.log(shopping[30]); //undefined as 30 index not found
console.log(shopping.length - 1);
console.log(shopping);
shopping[3] = 'purse'; //update/modify
// shopping[5] = 'eyeliner'; // add
shopping[6] = 'laptop'
shopping[-1] = 'lipstick'
console.log(shopping);
var empty = [];
empty[0] = 1
console.log(empty.length); //0



