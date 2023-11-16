
console.log(document.querySelector("h1"));
const eles = document.querySelectorAll(".output");
const elesClass = document.getElementsByClassName("output");
console.log(eles);
console.log(elesClass);

////////////
const ul = document.getElementById("myul");
ul.setAttribute("class", "list")
ul.style.color = "brown"
ul.style.border = "1px solid pink"
ul.style.backgroundColor = "pink"

/// create a button thru JS and add onclick method on it
const newBtn = document.createElement("button")
newBtn.setAttribute("id", "btn3")
// newBtn.setAttribute("onClick", "showName()")
newBtn.addEventListener("click", showName)
newBtn.textContent = "show my name"
const parent =  document.querySelector("div")
parent.appendChild(newBtn)



function showName() {
    console.log("i am clicked");
    const h1 = document.createElement("h1");
    h1.textContent = "Faiza Aziz Khan"
    const paretnDiv = document.getElementById("container")
    const myul = document.getElementById("myul")
    paretnDiv.insertBefore(h1, myul)
}
function addList() {
    console.log("iam in addlist");
    const todo = document.getElementById("todo")
    const value = todo.value;
    const li = document.createElement("li")
    li.textContent = value
    const ul = document.getElementsByTagName("ul")
    ul[0].appendChild(li)
    todo.value = ""

}