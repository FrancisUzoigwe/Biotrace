// Object Oriented Programming is a programming model that organizes software design around data, or objects, rather than functions and Logic.
// "use strict"

// let name;
// name= 'Francis';
// console.log(name)



// const name ="Francis";
// name = "Uzoigwe";
// console.log(name)



// // Preventing app from crashing using the try and catch error
// try{
//     const name ='Tunde'
//     name= 'Peter'
//     console.log("Send an error message")
// }
// catch(error) {
//     console.log('Displaying the Error', error);

// }

// We have the TypeError, The SyntaxError
// The Try keyword cannot catch SyntaxError but it can catch the TypeError

const prompt =require('prompt-sync')();
let ourEntry =prompt('Enter your value: ')

if(ourEntry ==='Q' || ourEntry ==='q'){
    console.log("Oriepe");
}else{
    console.log("Orieope")
}

