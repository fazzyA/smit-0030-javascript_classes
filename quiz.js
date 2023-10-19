// if(true){
//     console.log("My birthday is near");
// } else {
//     console.log("students forgot")
// }
// var matchFound = true
// if(matchFound) {
//  console.log("im in if")
// } else {
//     console.log("im in else")
// }
// Given an array of firstname and an array of last name. 
// First check both array size is equal or not, 
// if equal then make third array which is 1 dimensional array like

var firstname = ["binish", "shazme", "atrooba"];
var lastname = ["farhan", "kalam", "iqbal"];
var fullname = []
if (firstname.length === lastname.length){
    for (let i = 0; i < firstname.length; i++) {
        fullname.push(firstname[i]+lastname[i])
    }
}
console.log("🚀 ~ file: quiz.js:22 ~ fullname:", fullname)
// 
const arr = ["a", "b", "c"]
// for (let i = 0; i < arr.length; i++) {
//     document.write(arr[i])
// }
// const cleanestCities = ["fsl", "lhr", "mul"]
// var cityToCheck = "fsl"
// var len = cleanestCities.length;
// var matchFound = false;
// for (var i = 0; i < len; i++){
//     if (cityToCheck === cleanestCities[i]) {
//     matchFound = true;
//     alert("It's one of the cleanest cities");
//     break;
//     } 
// }
//  if (matchFound === false) {
//  alert("It's not on the list");
//  }

var nArr = [[1, 2, 3, 5], [6, 7], [8, 9]] // 2 dimension array
// console.log(nArr[1][1]); //4
for (let i = 0; i < nArr.length; i++) {
    for (let j = 0; j < nArr[i].length; j++) {
        console.log(nArr[i][j]);       
    }
    }
console.log("object " + "is our " + "" + "next" + " topic");
// object is our next topic
