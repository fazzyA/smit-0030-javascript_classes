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

// var date =  new Date();
// console.log(date);
// console.log(Date.now()); // ms
// console.log(date.getTime()); //ms
// console.log(date.setDate(1));
// console.log(date);
// function add() {
//  document.write(2+5);
// }
// var add2 = function (){ // expression function
//  document.write(2+5);
// }
// add2()
var addNum = function (a, b){
  return a + b;
}
var result = addNum(12, 45); //57
console.log(addNum(12, 45))
console.log(square(5)); // 25

function square(n) {
    return n * n;
  }

function addSquare(a, b) { //nested
    return  square(a) + square(b)
}

var res = addSquare(1, 7);
console.log(square(3))
console.log("🚀 ~ file: quiz2.js:66 ~ res:", res)

var age = "acbn"
//   switch(true){
//     case age < 18:
//         console.log("too young");
//         break;
//     case age == 18:
//         console.log("elegible");
//         break;
//     case age > 18:
//         console.log("too old");
//         break;
//     default:
//         break;
//   }
const dayOfWk = "Sun"
switch(dayOfWk) {
   case "Sat" :
   alert("Whoopee");
   case "Sun" :
   alert("Whoopee");
   break
   case "Fri" :
   alert("TGIF!");
   break;
    default :
    alert("Shoot me now!");
    }

    function double(arr) {
        // [1, 2 , 3]
        var doubleArr = []
        for(let i =0; i < arr.length; i++) {
            // double(arr[i] * 2)
            arr[i] = arr[i] * 2
        }
        return arr
    }
    console.log(double([1, 2, 3]))