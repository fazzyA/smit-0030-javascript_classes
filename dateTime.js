// // // Date
// // var date = new Date(); // object 
// // console.log("🚀 ~ file: dateTime.js:3 ~ date:", date)
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// // console.log("day name= ", dayNames[date.getDay()]);
// // console.log(date.getDay());
// // // format 12-10-2023
// // var date2 = Date.now();
// // console.log("🚀 ~ file: dateTime.js:7 ~ date2:", date2)
// // set Date
// var myBirthDay = new Date("October 4, 2023");
// // myBirthDay.setMonth(10)
// // myBirthDay.setFullYear(2024);
// console.log("🚀 ~ file: dateTime.js:12 ~ myBirthDay:", myBirthDay, dayNames[myBirthDay.getDay()])
// // new Date(year, monthIndex, day)
// var myBirthDay2 = new Date(2023, 9, 4);
// console.log("🚀 ~ file: dateTime.js:14 ~ myBirthDay2:", myBirthDay2)

//2 write a function to check how many days
//are left to ur next bday
// e.g 360 days left


function daysLeft(date){
    var today = new Date()
    var diff = (date.getTime() - today.getTime()) / (1000*60*60*24)
    console.log("🚀 ~ file: function.js:145 ~ daysLeft ~ diff:", Math.round(diff))
    }

// daysLeft(new Date("October 4, 2024"))
// daysLeft(new Date("jan 29, 2024"))
// display real clock
function showConsole(str) { console.log(str) }
// setTimeout(daysLeft(new Date("jan 29, 2024")), 5000) // run 1 time after 5 sec
// setTimeout(() => showConsole("first"), 2000)
// setInterval(() => showConsole("second"), 1000) // run after every 1 sec again and again
var format;
function displayClock(){
    var date = new Date();
    var hour = date.getHours()
    var min =  date.getMinutes()
    var sec = date.getSeconds()
    format = `${hour} : ${min} : ${sec}`
    document.getElementById('clock').innerHTML = format;
    // return format;
}
displayClock()
setInterval(displayClock, 1000)


    
