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
// console.log(car1.color, car1.name, car1.made, car1.model)
// console.log(car1["color"], car1["name"], car1["model"]);
// console.log(car1);
// console.log(Object.keys(car1));
// console.log(Object.values(car1));
// console.log(Object.entries(car1));
car1.year = 2015
// console.log(car1);
// delete car1.owner; // will delete owner key val
// console.log(car1);
function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
    .then(res => console.log(res))
}
// literal object
let student1 = {
    name: "Mahwish",
    roll: 'wma123',
    course: "webdev",
    classes: ['thursday', 'sunday'],
    fees: 500,
    displayName: function(){
        return `AOA ${student1.name}`
    }
}
console.log(student1.displayName());
// constructor
function Student(name, roll, course, classes, fees) {
    this.name = name;
    this.course = course;
    this.classes = classes;
    this.fees = fees;
    this.roll = roll;
    this.displayName = function (){
        return `AOA ${this.name}`
    }
}
// class
class Teacher {
    constructor(name, empNum, salary) {
        this.empNum = empNum
        this.salary = salary
        this.name = name
        this.displayName = function (){
            return `AOA ${this.name}`
        }
    }
}
let t1 = new Teacher("Faiza", "123", 12345)
console.log("🚀 ~ file: objects.js:81 ~ t1:", t1.displayName())
let t2 = new Teacher("Iqra", "1253", 12345)
let t3 = new Teacher("Hina", "1235", 12345)
var studentOne = new Student('Mahwish', '123', 'web', ['thursday', 'sunday'], 500);
console.log("🚀 ~ file: objects.js:73 ~ studentOne:", studentOne.displayName())
var studentTwo = new Student('Binish', '1234', 'web', ['thursday', 'sunday'], 500);
var studentThree = new Student('Atrooba', '1235', 'web', ['thursday', 'sunday'], 500);
let price = 100

var plan1 = {
    name: "Gold",
    price: 800,
    calcDiscount : function(discount) {
        let disc =  plan1.price - (plan1.price * discount / 100)
        return disc
    }
}
console.log(plan1.name, plan1.calcDiscount(20));
