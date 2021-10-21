function add(n1, n2) {
  return n1 + n2;
}

const WORKING_HOURS_WEEK = 40; // 45;

let counter = 0;

function inc(amount = 1) {
  counter += amount;
  return counter;
}

function dec(amount = 1) {
  counter -= amount;
  return counter;
}

// WHW add -> sum
let localCounter = 5;

const moduleName = 'this is module 1';

export default moduleName;
// export default "this is module 1";

/* 
export default function greet(name) {
  console.log(`hello ${name}`);
} */

export {
  WORKING_HOURS_WEEK,
  WORKING_HOURS_WEEK as WHW,
  add as sum,
  counter,
  dec,
  inc,
};

console.log('module1 is loaded!');
