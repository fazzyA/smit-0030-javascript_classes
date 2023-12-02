// this
let obj = {
    id: "1",
    userName: "Faiza",
    greetName: function() {
        console.log(`Hi ${this.userName}`)
    }
}
obj.greetName() // Hi faiza
obj.userName = "Aziz"
obj.greetName() // Hi Aziz


function noThis() {
    console.log(this) // undefined
}
noThis()

const noThis2 = function () {
    console.log(this) // undefined
}
noThis2()  // undefined

