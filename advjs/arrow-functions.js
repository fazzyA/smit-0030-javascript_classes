// js from beginners to professionals page 149 
// same as function () => {}
const check = () => {
    console.log("my first arrow fucntion");
}
check();
    // function addOne(num) {
    //     return num + 1
    // }
    const addOne = (num) => {
        return num + 1
    }
    const a = addOne(10)
    console.log("🚀 ~ file: arrow-functions.js:13 ~ a:", a)
    
    // const addOne2 = (num) => num + 1 /2 * 3
    const addOne2 = num => num + 1 /2 * 3
    const add = () => console.log("i am add function");
    add()
    // another arrow function
    const add2 = (a) => a + 2;
    add2(3)

    const b = addOne2(10)
    console.log("🚀 ~ file: arrow-functions.js:19 ~ b:", b)

    let num = prompt("enter any num")
    const checkEvenOdd = (a) => a % 2
    const result = checkEvenOdd(num)
    console.log("🚀 ~ file: arrow-functions.js:30 ~ result:", result)
    if(result === 0){
        console.log("num is even");
    } else {
        console.log("num is odd");
    }
    
