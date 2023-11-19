// alto civic city 
//declare object, update value, delete key, check prop
let car1Name = "Alto"
let car1Color = "White"
let car1Model = 2015
let car1Company = "Suzuki"

let car2Name = "Corolla"
let car2Color = "Grey"
let car2Model = 2015
let car2Company = "Toyota"

let car3Name = "City"
let car3Color = "Black"
let car3Model = 2023
let car3Company = "Honda"
// wrong approach
// let car1 = ['Alto', "white", 2015, "Suzuki"]
// let car2 = ['Alto', "white", 2015, "Suzuki"]
let car1 = {
    name: "alto",
    color: "white",
    year: 2016,
    made: "suzuki",
    owner: "self"
}
let car2 = {
    name: "corolla",
    color: "grey",
    year: 2016,
    made: "toyota"
    
}
let car3 = {
    name: "civic",
    color: "grey",
    year: 2016,
    made: "toyota"
    
}
console.log(car1.color, car1.name, car1.made)
console.log(car1);
// console.log(Object.keys(car1));
// console.log(Object.values(car1));
// console.log(Object.entries(car1));
car1.year = 2015
console.log(car1);
delete car1.owner; // will delete owner key val
console.log(car1);
function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
    .then(res => console.log(res))
}