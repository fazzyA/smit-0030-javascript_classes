// arrays and objects

var arr = [1, 2, 4, 6];
// var a = arr[0] // 1
// var b = arr[1] // 2
// var c = arr[2] // 4
// var d = arr[3] // 6
var arr2 = [1, 2, 4, 6, 8];
var [a, c, d, e, f, b] = arr2;
console.log(a, b, c, d, e, f);
var cities = ["khi", "lhr", "mul", `isl`];
var [city1, city2, city3] = cities;
var [fr1, fr2, fr3] = ["sadaf", "asma", "nusrat"];
// objects destructuring
// obj literal
var teacher = {
  name: "faiza",
  age: 20,
  salary: 30,
};
var {age, salary, name, abc, empno} = teacher;
console.log(name, age, salary);
var h2 = document.createElement("h2")
h2.textContent = name;
var main = document.getElementById('main')
main.appendChild(h2)
var h3 = document.createElement("h3")
h3.textContent = age;
main.appendChild(h3)
