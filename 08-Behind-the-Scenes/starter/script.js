'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `You are ${age}, born in ${birthYear}`
//     console.log(output);

//     if(birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firsName = 'Lara'
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       output = 'NEW OUTPUT'
//     }
//     console.log(millenial);
//     //add(2, 3);
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Andrew';
// calcAge(1991);

console.log(this);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
}
calcAgeArrow(1991);