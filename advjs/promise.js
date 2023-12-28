// promise is made and consumed
// console.log("first")
// setTimeout(() => console.log("second"), 2000);
// console.log("third")
// setTimeout(() => console.log("fourth"), 1000);

//declare 
let a = 1223
const myPromise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("success"), 2000);
})
// new Promise((resolve, reject) => {
//  resolve()
// })
// myPromise
// .then((res) => console.log("im fulfilled", res))
// .then((res) => console.log("im fulfilled again"))
// .catch((res) => console.log("im in failure", res))

let gender = "female"
const myPrime = new Promise((resolve, reject) => {
  if(gender === "female"){
    resolve("sucess")
  } else if(gender === "male"){
    reject("failure")
  }
})

try {
    console.log("first")
    myPrime
    .then((data) => console.log(data, 1))
    .catch((data) => console.log(data, 3)) 
 } catch(err) {
    console.log(err)
} finally {
    console.log("finally")
}


// // fetch('https://jsonplaceholder.typicode.com/todos/1')
// // .then(data => data.json())
// // .then(data => console.log(data))
// // .catch(data => console.log("not running"))
// let ab =10
// if(gender === "female") {
//     var username = "abc"
//     console.log(ab)
// }
// console.log(username)
// console.log(ab)

// let name = "faiza"
// let emp = "saylani"
// let age = "no"
// const obj = {
//     name,
//     emp,
//     age
// }
// console.log("🚀 ~ file: promise.js:55 ~ obj:", obj)
