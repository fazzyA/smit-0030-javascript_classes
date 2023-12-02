// js from beginners to professionals pg 155 - 161
///example 1
// let a = 10
// const b = 20
// var c = 30
// console.log(a, b, c)

// ex 2 why not use var as c is accessible outside. 
//c can disturb any other var c out side the boudries
// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30
// }
// console.log(a, b, c)

/////// ex 3///////
//even w/o var c is accessible outside
// if (true) {
//     let a = 10
//     const b = 20
//     c = 30
// }
// console.log(a, b, c)
///////ex 4//////
// let a = 4
// if(true){
//     let a = 5
//     console.log("local", a) // 5
// }
// console.log(a) //4 global
//////ex 5/////////
// what is the result. will i be printed or i is not defined will come
for (var i = 1; i <= 10; i++) {
    console.log("hi")
}
console.log("after loop", i)


// //////ex 6 //////////
// function bare(){
//     const eidi = "yes"
//     function chote(){
//         const toys = "yes"
//         console.log(eidi);
//     }
//     console.log(toys);
//      two()
// }
// one()
///// what is the result //////
// if (true) {
//     const username = "faiza"
//     if (username === "faiza") {
//         const employee = " salylan"
//         console.log(username + employee);
//     }
//     console.log(website);
// }
/////////// delared function can be called before declaration////////
console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}