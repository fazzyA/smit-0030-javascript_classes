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