//  0 - 100
//  0-39 => F
//  40-44 => E
//  45-49 => D
//  50-59 => C
//  60-74 => B
//  75-100 => A
//  let score= 35;
// if ( score>=39 &&  score<=0) {
//   console.log("F");
// }
// else if (score>= 40 && score>= 49) {
//   console.log("E");
// }
// else if ( score>= 50 &&score >=59) {
//   console.log("D");
// }
// else if (score>=60 && score <=69) {
//   console.log("C");
// }
// else if ( score>=70 && score <=74) {
//   console.log("B");
// }
let score= 50
if (score>= 75 && score <=100) {
  console.log("A");
}else if ( score>=70 && score <=74) {
  console.log("B");
}else if (score>=60 && score <=69) {
  console.log("C");
}else if ( score>= 50 &&score <=59) {
  console.log("D");
}else if (score>= 40 && score<= 49) {
  console.log("E");
} ( score>=39 &&  score<=0) {
  console.log("F");
} else{
    console.log("F");
     }
    

// console.log("Codelab");

// let startTime = 0
// let endTime = 48
// let checkTime = 25



// if (checkTime < 12 ) {
//     console.log("Good Morning");
// }
//  else if (checkTime < 18) {
//   console.log("Good Afternoon");
//  }else if (checkTime < 24) {
//     console.log("Good Evening");
// }else if (checkTime <36 ){
//   console.log("Good Morning");
// }else if (checkTime <39 ){
//   console.log("Good Afternoon");
// }else if (checkTime <48 ){
//   console.log("Good Evening");
// }
//  else {
//   console.log("Good Evening");
// }
// 00:00 - 11:59
// 12:00 - 15:59
// 16:00 - 23:59
// let xx = 13;
// console.log(12 > xx > 0);

// let time = 35;

// if (time >= 0 && time <= 12) {
//   console.log("Good Morning");
// } else if (time >= 13 && time <= 16) {
//   console.log("Good Afternoon");
// } else {
//   console.log("Good Evening");
// }
/**
 * while
 * doWhile
 * for
 * forIn
 * forOf
 * forEach
 */

// while (condition) {
//   execute
// }

// let count = 0;
// while (count < 10) {
//   count++;
//   console.log("Print out Count: ", count);
// }

// do {
//   count++;
//   console.log("Print out Count: ", count);
// } while (count < 10);

// let myName = "Peter Petx";
// let newLetter = myName[0];

// console.log(newLetter);

// for (let i = 0; i < myName.length; i++) {
//   console.log(myName[i], i);
// }
// let i = 0;
// while (i <= myName.length-1) {
//   console.log(myName[i], i);
//   i++;

// }

// console.log(
  //   dc.map((props) => {
  //     return props;
  //   }),
  // );
  // Assignment
// Describe two array methods and their functions using your own use case
//Some method
// The Sort Method

// 1. Some method: The some method iterates through an array to know if the stated value is in the array. That means if yes it returns
// true but if no it returns false. The return type of the some method is a Boolean(True or False)
// 2. The Sort method is used to arrange an array in ascending order i.e from the lowest to the highest.
// The return type for the sort method is an array or the array.
// let i =[100, 20, 45, 50, 30, 200, "This is my country", "I am the Son of the Living God", " This man is good"]
// console.log(i.sort((a,b)=> {return a-b;}),)