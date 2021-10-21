console.log('**********\nSession 5 - Conditionals\n**********');
/*
// ! if statement examples
console.log('----------\nif statements\n----------');
// ! example-1 single if
// check if the number is positive
const number1 = prompt('Enter a number: ');
// enter either positive or negative number to check the output
// check if number is greater than 0
if (number1 > 0) {
  // the body of the if statement
  console.log('The number is positive');
}
console.log('The if statement is easy');
console.log('**********');
// ! example-2 if .. else
// check is the number is positive or negative/zero
const number2 = prompt('Enter a number: ');
// check if number is greater than 0
if (number2 > 0) {
  console.log('The number is positive');
} else {
  // if number is not greater than 0
  console.log('The number is either a negative number or 0');
}
console.log('The if...else statement is easy');
console.log('**********');
// ! example-3 if .. else if else
// check if the number if positive, negative or zero
const number3 = prompt('Enter a number: ');
// check if number is greater than 0
if (number3 > 0) {
  console.log('The number is positive');
} else if (number3 == 0) {
  // check if number is 0
  console.log('The number is 0');
} else {
  // if number is neither greater than 0, nor zero
  console.log('The number is negative');
}
console.log('The if...else if...else statement is easy');
console.log('**********');
// ! example-4 nested if
// check if the number is positive, negative or zero
const number4 = prompt('Enter a number: ');

if (number4 >= 0) {
  if (number4 == 0) {
    console.log('You entered number 0');
  } else {
    console.log('You entered a positive number');
  }
} else {
  console.log('You entered a negative number');
}
console.log('The nested if statement is a little bit confusing');
console.log('**********');
// ! example-5 separate if statement behavior
// check if the number if positive, negative or zero
const number5 = prompt('Enter a number: ');

// check if number is greater than 0
if (number5 > 0) {
  console.log('The number is positive');
}
if (number5 == 0) {
  // check if number is 0
  console.log('The number is 0');
} else {
  // if number is neither greater than 0, nor zero
  console.log('The number is negative');
}
console.log('The if... if...else statement end');
console.log('**********');
 */
/*
// ! ternary examples
console.log('----------\nternary if statements\n----------');
// ! example-1 basic ternary
// program to check pass or fail
let grade = prompt('Enter your score :');
// check the condition
let result = grade >= 50 ? 'pass' : 'fail';
console.log(`You ${result} the exam.`);
console.log('Ternary if statement example-1 end\n');
console.log('**********');
// ! example-2
// at first with if statement
// check the age to determine the eligibility to vote
let age = 15;
let result;

if (age >= 18) {
  result = 'You are eligible to vote.';
} else {
  result = 'You are not eligible to vote yet.';
}
console.log(result);

console.log('Same operation with ternary now\n');
// ternary operator to check the eligibility to vote
let age = 15;
let result =
  age >= 18 ? 'You are eligible to vote.' : 'You are not eligible to vote yet';
console.log(result);
console.log('Ternary if statement example-2 end\n');
console.log('**********');
// ! nested ternary ❗ avoid using
// program to check if number is positive, negative or zero
let a = 3;
let result = a >= 0 ? (a == 0 ? 'zero' : 'positive') : 'negative';
console.log(`The number is ${result}.`);
console.log('Nested ternary if statement end\n');
console.log('**********');
 */
// ! switch case examples
console.log('----------\nswitch case statements\n----------');
// ! example-1 basic switch
// program using switch statement
let a = 2;

switch (a) {
  case 1:
    a = 'one';
    break;
  case 2:
    a = 'two';
    break;
  default:
    a = 'not found';
    break;
}
console.log(`The value is ${a}`);
