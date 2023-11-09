function showName() {
    console.log("i am clicked");
    const h1 = document.createElement("h1");
    h1.textContent = "Faiza Aziz Khan"
    const paretnDiv = document.getElementById("container")
    paretnDiv.appendChild(h1)
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