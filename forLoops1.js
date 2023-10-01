// var cities = [] // 1, 2, 3, 4
// for(let i = 1; i < 5; i++){
//     let city = prompt("enter clean city")
//     cities.push(city)
// }

// // cities[0]
// var cityToSearch = "karachi";
// var matchFound = false
// for(let i = 0; i <= cities.length - 1; i++)
// {
//     if(cities[i] === cityToSearch){
//         matchFound = true       
//         break;
//     }
// }
// if(matchFound === true) {
//     alert(cityToSearch + " is found")
// } else {
//     alert(cityToSearch + " is not found")
// }

// var arr = [ 2, 3, 4, 6, 8];
// // does odd num exist in above array

var students = ["Maham","Laiba", "Ayesha", "Atrooba", "binish", "Maria"]
var progress = ["beginner", "intermediate", "advance", "pro"];
//for students => progress
for (let i =0 ; i < students.length; i++){
    
    for(let j = 0; j < progress.length; j++){
        console.log(students[i], " ", progress[j])
    }
}