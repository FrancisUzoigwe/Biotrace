//determine the score of a student
//use the else and elseif to make the time work
//use the newdate item to show time and greetings
//guess the random number

// let score = 70;
// //a - 75 - 100
// let a = 75 <= score && score <=100
// let b = 65 <= score && score <=74
// let c = 50 <= score && score <=64
// let d = 45 <= score && score <=49
// let e = 40 <= score && score <=44
// let f = 0 <= score && score <=39

if(a){
    console.log('Excellent')
}
else if(b){
    console.log('Very Good')
}
else if(c){
    console.log('Credit')
}else if(d){
    console.log('Higher Pass')
}else if(e){
    console.log('Lower Pass')
}
else if(f){
    console.log('Fail')
}
else{
    console.log('Wrong Input')
}

console.log('Time')
time = 30;

if(time > 23){
    time = time % 24
}


// //goodmorning

// if(time >= 0 && time <= 12){
//     console.log('Good morning')
// }
// else if(time >=13 && time <= 16){
//     console.log('Good afternoon')
// }
// else if(time >=17 && time <= 23){
//     console.log('Good Evening')
// }
// else{
//     console.log('Not in range')
// }

//use the newdate item to show time and greetings
//guess the random number
// let date = new Date().toTimeString()
// console.log(date)

// let time = date.split(":")[0]
// console.log(time)

// if(time >= 0 && time <= 12){
//     console.log('Good morning')
// }
// else if(time >=13 && time <= 16){
//     console.log('Good afternoon')
// }
// else if(time >=17 && time <= 23){
//     console.log('Good Evening')
// }
// else{
//     console.log('Not in range')
// }

//random number
console.log(''.length)
let gues = [1, 2, 3, 4, 5, 6, 7]
let rand = Math.floor(Math.random()*gues.length+1)
console.log(rand)

let predict = 3;
console.log('My prediction is: ', predict , 'The random is: ', rand)
if(predict > rand){
    console.log('It is greater')
}
else if(predict < rand){
    console.log('It is lesser')
}
else{
    console.log('It is correct')
}

hun = 'Precious'
console.log(hun.slice(1, 3))