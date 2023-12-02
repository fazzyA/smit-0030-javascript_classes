// main synatx

() => {}
// implicit return
const addOne = (num1) => num1 + 1  // OR
const addOne2 = (num1) => (num1 + 1) // OR
const addOne3 = (num1) => (
    num1 
    + 
    1) // () allow multi lines
    // const addOne2 = (num1) => num1 
    // + 1 // not allowed
  
console.log(addOne3(3))