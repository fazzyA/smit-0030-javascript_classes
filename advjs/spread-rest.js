// page 151 js to professional book
var one = [1, 2, 3]
var two = [4, 5, 6]
// var three = one + two
// console.log("🚀 ~ file: spread.js:4 ~ three:", typeof(three), three)
// question whats wrong in above array declaration one and two
// var combineArray = 
// console.log([...one, ...two])
//web mdn excersize


function display(param) {
    document.write(param)
}

display('Hi i need you to print me')


/// rest 

// solution
// function display(param, ...param2) {
//     document.write(param, ...param2)
// }

// display('Hi i need you to print me', ' also me', ' and me too')

function displayArr(arr, ...b){
    console.log(arr, b)
}
displayArr(1, 2, 3)

function sum(...params) { // [1, 2, 3]
    console.log(params)
    let res = 0
    params.forEach(el => {
        res += el
        // res = res + el
    });
    return res;
}
console.log(sum(1, 2))
console.log(sum(1, 2, 3))

const fruits = ["kiwi", "orange", "apple"]
const sastefruits = ["banana"]
const allFruits = [...fruits, ...sastefruits] //spreadop
fruits.forEach(el => {
    let exp = " bht mehnga hai <br/>"
    document.write(el + exp)
})
fruits.forEach(el => document.write(el + " bht mehnga hai <br/>"))
// for is general loop and foreach is for array
for (let i = 0; i < 10; i++) {
 console.log(i)
}
for( el in {name: "dfadf", fname: "sada"}){
console.log(el)
}