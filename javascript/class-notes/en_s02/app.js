'use strict';
// let x = 5;
// let y = 7;
// y = x;
// // console.log('x = ', x);
// // console.log('y = ', y);

// let color1_$;
// let $test;
// let _test;

// // invalid names for vars
// // let 1color;
// // let my color;
// // let test+case;
// // let if;

// // camelCase
// var firstNameLastName;

// // descriptive
// let myFirstJob = 'Programmer';
// let myCurrentJob = 'Teacher';

// let job1 = 'Programmer';
// let job2 = 'teacher';

// // var, let const
// var a = 10;
// a = 15;
// console.log('a = ', a);

// let b = 1;
// b = 2;
// console.log('b = ', b);

// // do I need to assign intial value
// let c;
// c = 5;

// // multiple definition of vars
// var a = 25;
// console.log('a = ', a);
// // let b = 10;

// // constants
// const PI = 3.14;
// // PI = 22 / 7;
// // const myConst;

// Scoping

// var varGlobal = 'Defined with VAR at Global Scope';
// let letGlobal = 'Defined with LET at Global Scope';
// console.log('varGlobal = ', varGlobal);
// console.log('letGlobal = ', letGlobal);

// {
//   let letInBlock = 'Defined with LET in a block';
//   var varInBlock = 'Defined with VAR in a block';
//   console.log('letInBlock = ', letInBlock);
//   console.log('varInBlock = ', varInBlock);

//   // define new vars with same at global scope
//   var varGlobal = 'Redefined with VAR at Block Scope';
//   let letGlobal = 'Redefined with LET at Block Scope';
//   console.log('inside block varGlobal = ', varGlobal);
//   console.log('inside block letGlobal = ', letGlobal);
// }

// console.log('outside of block varInBlock = ', varInBlock);
// // console.log('letInBlock = ', letInBlock);

// console.log('After block varGlobal = ', varGlobal);
// console.log('After letGlobal = ', letGlobal);

// function hello(name, age) {
//   let checkAge;
//   if (age >= 18) {
//     checkAge = true;
//     let test = 'Barry';
//   } else {
//     checkAge = false;
//   }
//   // console.log(test);
//   console.log('Hello! ', name);
//   if (checkAge) {
//     console.log('You are wellcomed');
//   } else {
//     console.log('You are not allowed');
//   }
// }

// hello('Barry', 44);

// accesing vars before initilization
// a = 5;
// var a;

// let b;
// b = 10;

// what happens if not use let or var

// varWithoutKeyword = 'Not used keyword to define';

// be careful for typos
// let myVariable = 10;
// myVAriable = 1;

// ---------------------
// DATA TYPES

// let number1 = 7;
// let number2 = 3.14;

// console.log(number1, typeof number1);
// console.log(number2, typeof number2);

// let myName = 'barry';
// let age = '44';
// console.log(age, typeof age);

// let text1 = 'Barry said: "You will all become talented developers"';
// let text2 = "Barry's Car";

// let bool1 = true;
// let bool2 = false;

// let bool3 = 5 > 8;
// bool3 = 5 == 6;
// console.log(bool3, typeof bool3);

// // truthy and falsy values
// console.log(Boolean('Barry'));
// console.log(Boolean(3));

// console.log('empty str', Boolean(''));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(0));

// dynamic type
let hasDrivingLicence = true;
console.log(hasDrivingLicence, typeof hasDrivingLicence);

hasDrivingLicence = 'Yes';
console.log(hasDrivingLicence, typeof hasDrivingLicence);

// undefined
let year;
console.log(year, typeof year);

// null
let myObj = null;
console.log(myObj, typeof myObj);

console.log(undefined == null);
console.log(undefined === null);
console.log(1 === '1');

let myFunction = function (name) {
  console.log('Hi', name);
};

console.log(typeof myFunction);

myFunction('Barry');

let person = {
  name: 'Barry',
  age: 44,
  skills: ['Js', 'Python'],
};
