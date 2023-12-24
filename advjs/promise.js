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
myPromise
.then((res) => console.log("im fulfilled", res))
.catch((res) => console.log("im in failure", res))

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(data => data.json())
.then(data => console.log(data))
.catch(data => console.log("not running"))