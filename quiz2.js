// string methods charAt, replace, lastIndexOf, slice, splice(not applicable), toLowerCase, toUpperCase length
var str = "My Journey In Journey"
var str2 = "Javascript"
var str3 = `Faiza`
var str4 = 'random str'
var emptyStr = "";
console.log(str[0])// M
// console.log(str.slice(3, 10));
// console.log(str.slice(3));
// console.log(str.slice(-13));
// console.log(str.charAt(0)); //M
// console.log(str.lastIndexOf('Journey'));
// console.log(str.indexOf('y')); // -1, address
// //"My Journey In Journey"
// console.log(str.replace(/Journey/g, "dutyfull"));
// var newStr = str.replace(/Journey/g, "dutyfull");
// console.log(newStr.toUpperCase())
// var name = "miss faiza aziz khan";
// var newName = name[0].toUpperCase() + name.slice(1, 6)
// + name[6].toUpperCase() + name.slice(7, 11) + name[11].toUpperCase()
//  + name.slice(12)
// console.log(newName);
// console.log(name.indexOf(' ')); //4
// var name = "miss faiza aziz khan";
// console.log(name.split(" "))
// var arrName = name.split(" ");
// var titlecase =[]
// for(let i = 0; i < arrName.length; i++) { // miss faiza
// var cap = arrName[i].charAt(0).toUpperCase() //M F
// var fullname = cap + arrName[i].slice(1)
// titlecase.push(fullname)
// }
// console.log("🚀 ~ file: quiz2.js:32 ~ titlecase:", titlecase)
// var newName = titlecase.join(' ')
// console.log("🚀 ~ file: quiz2.js:35 ~ newName:", newName)

var date =  new Date();
console.log(date);
console.log(Date.now()); // ms
console.log(date.getTime()); //ms
console.log(date.setDate(1));
console.log(date);