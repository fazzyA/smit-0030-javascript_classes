// var price = 0;
// var menu = prompt("enter menu name");
// fish 1000, chowmein 400, biryani 300, pasta 500
// if(menu === "fish") {
//     price = 1000
// } else if (menu === "chowmein") {
//     price = 400

// }else if (menu === "biryani") {
//     price = 300
// } else if (menu === "pasta"){
//     price = 500
//     document.write("your bill is ", price)
//  } else {
//     price = 100

// }
// document.write("your bill is ", price)
// var price = 0;
// var menu = prompt("enter menu name");

/// switch
switch (menu) {
  case "lobster":
  case "fish":
    price = 1000;
    break;
  case "biryani" || "pulao":
    price = 300;
    break;
  case "pasta":
    price = 500;
    break;
  default:
    price = 100;
}
// document.write("your bill is ", price);
var a = 12;
switch (
  a > 10 //true
) {
  case 13:
    console.log(">10");
    break;
  case 11:
    console.log("11");
    break;
  case true:
    console.log("true");
    break;
  default:
    console.log("default");
    break;
}

const foo = 0;
switch (
  foo // 0
) {
  case -1:
    console.log("negative 1");
    break;
  case 0: // Value of foo matches this criteria; execution starts from here
    console.log(0);
    break;
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // Break encountered; will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
// Logs 0 and 1

// generate random # 0-5 and use switch to display the num
var rand = Math.round(Math.random() * 5); // 0.1 -0.9
console.log("🚀 ~ file: switch.js:76 ~ rand:", rand);
switch (rand) {
  case 0:
    console.log("u entered 0");
    break;
  case 1:
    console.log("u entered one");
    break;
  case 2:
    console.log("u entered one");
    break;
  case 3:
    console.log("u entered one");
    break;
  case 4:
    console.log("u entered one");
    break;
  case 5:
    console.log("u entered one");
    break;

  default:
    break;
}
