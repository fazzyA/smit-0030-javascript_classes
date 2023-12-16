// this refers to window object
// in browser this is window
//on events this is the element
// in function this is window
console.log(this)
// function check(){
//     console.log(this)
// }
check();
var obj = {
    name: "Haroon",
    displayName: function(){
        console.log(this.name)
    }
}
// var obj = {
//     name : 123,
//     foo : function () {
//       console.log(this.name);
  
//     setTimeout(function() {
//     console.log(window);
//     }, 100);
//     }
//     }
// obj.foo()