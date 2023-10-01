// // const arr = [1,2,34,4,5,5]
// // let count = 0;
// // for(let i = 0; i < arr.length; i++){
// //     count++;
// // }
// // console.log('checking')
// // alert("the elements in arrays are total "+count)
// // solution #2
// const calculateA = ["a", 2, ,4, 'b', "a", 'A', "a"]
// let count = 0
// for (let i = 0; i < calculateA.length; i++) {
//     if(calculateA[i] === 'a'){
//         count++;
//     }    
// }
// console.log("a appeared ", count, " times")
// // solution # 3
// const checkNum = ["a", 2 ,4, 'b', "a", 'A', "a"]
// let count1 = 0
// for (let i = 0; i < checkNum.length; i++) {
//    if(typeof checkNum[i] === "number"){
//     count1++
//    }
// }
// if(count1 > 0) console.log("the given array has number")
// else console.log("no number in array")


// // #solution 4
// var names = ["binish", "ayesha", "alsihba"];
// // var greet = ["good morning", "greet"]
// for (let i = 0; i < names.length; i++) {
//     console.log("good morning " + names[i])
//     console.log("greet " + names[i])
// }


var price = [500 , 50, 200];

console.log('original price' , price)

for(let i = 0; i < price.length; i++){
    var percent = price[i]*10/100
    price[i] = percent + price[i]
    
}
console.log('price after 10% increament' , price)

