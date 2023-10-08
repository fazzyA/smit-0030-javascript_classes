// string methods, slice , splice, charAt, indexOf, lastIndexOf
// var str = "i am in smit";
// // ['a', 'b']
// var firstChar = str.slice(0, 1) //i
// console.log("str[2] = ", str[2]);
// console.log("🚀 ~ file: strings.js:5 ~ firstChar:", firstChar)
// var lastChar = str.slice(-1);
// console.log("🚀 ~ file: strings.js:7 ~ lastChar:", lastChar)
var city = "karachi";
var firstChar = city.slice(0, 1);
var capitalFirst = firstChar.toUpperCase();
console.log("🚀 ~ file: strings.js:11 ~ firstChar:", firstChar)
var newCity = capitalFirst + city.slice(1)
console.log("🚀 ~ file: strings.js:14 ~ newCity:", newCity)
var name1 = "rafiyasultan" // Rafiya Sultan
var firstNameFirst = name1.slice(0, 1);
var space = 5;
var secNameFirst = name1.slice(6, 7);
var newName =  firstNameFirst.toUpperCase() + name1.slice(1, 6) + " "
+ secNameFirst.toUpperCase() + name1.slice(7);
console.log("🚀 ~ file: strings.js:20 ~ newName:", newName)
var ins = "smit"
console.log(ins.toUpperCase())
console.log("faiza".toUpperCase());
//index charAt
console.log(ins.charAt(0)) // s
console.log(ins.charAt(4)) // 
console.log(ins.charAt(ins.length - 1)) //t
//using slice method 1
// to search n replace word or group of words
// var text = "iam happy. There is world war ii. hello world war ii"
// var search = "world war ii"
// var len = search.length //12
// for (let i = 0; i < text.length; i++) {
//     if(text.slice(i, i + len) === search){
//     text = text.slice(0, i) + "second world war" + text.slice(i+len)
//     }
// }
// console.log(text)


// using indexof
// var text = "iam happy. 0 There is world war ii. hello world war ii"
// var search = "world war ii"
// var len = search.length //12
// var searchIndex = text.indexOf(search) // address -1
// console.log('asdsa',searchIndex,text.slice(searchIndex, searchIndex + len))
// if(searchIndex !== -1){ // if found
//     text = text.slice(0, searchIndex) + "second world war" + text.slice(searchIndex+len)
//     }
// console.log(text)

// var searchIndex1 = text.indexOf('i', 2) // address 0
// console.log("🚀 ~ file: strings.js:54 ~ searchIndex1:", searchIndex1)

// var searchTxt = "tob be or not to be. lets see"
// document.write(searchTxt.indexOf("b"))

var text = "iam happy. There is world war ii. hello world war ii"
text = text.replaceAll("world war ii", "second world war")
console.log("🚀 ~ file: strings.js:61 ~ text:", text)
