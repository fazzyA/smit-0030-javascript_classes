const li = document.createElement("li") // <li></li>
li.textContent = "first item"
const li2 = document.createElement("li") // <li></li>
li2.textContent = "sec item"
// const ul = document.getElementById("list")
// ul.appendChild(li)
// ul.appendChild(li2)
const ul = document.getElementsByTagName("ul");
console.log("🚀 ~ file: todo.js:9 ~ ul:", ul[0].childNodes[1])
const secLi = ul[0].childNodes[1];
secLi.textContent = "tyar hojaye"
const newPara = document.createElement("p")
newPara.textContent = "lorem ispums"
newPara.setAttribute("class", "para")
newPara.setAttribute("id", "para1")
const container = document.getElementById("container");
container.appendChild(newPara)

const inp = document.getElementById("todo")
console.log(inp.attributes); 
console.log("🚀 ~ file: todo.js:20 ~ inp:", inp.getAttribute("type"))

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript


// const div1 = document.getElementById("div1");
// console.log("🚀 ~ file: todo.js:2 ~ div1:", div1.nodeType) //1 element 3 text
// console.log("🚀 ~ file: todo.js:3 ~ div1nextSibling:", div1.nextSibling) //1 element 3 text
// console.log("🚀 ~ file: todo.js:3 ~ div1nextSibling:", div1.previousSibling) //1 element 3 text
// console.log("🚀 ~ file: todo.js:2 ~ div1:", div1.nodeName) //1 element 3 text
// // console.log(document.childNodes[0].childNodes[1].childNodes[2].textContent);
// const para = document.getElementsByTagName("p");
// console.log("🚀 ~ file: todo.js:3 ~ para:", para[0].innerText)
// console.log("🚀 ~ file: todo.js:3 ~ para:", para[0].nodeName)
// const body = document.getElementsByTagName("body"); //DIV
// console.log("🚀 ~ file: todo.js:13 ~ body:", body[0])
// calculate paras in dom div2
// const div2 = document.getElementById("div2"); //DIV
// let counter = 0;
// const childs = div2.childNodes;
// console.log("🚀 ~ file: todo.js:14 ~ childs:", childs)
// for (let i = 0; i < childs.length; i++) {
//       if(childs[i].nodeName === "P") {
//         counter++
//         }
// }

// console.log("counter = ", counter);