const message = 'Good Evening!';
console.log(message);

/*** */
import {
  WHW,
  WORKING_HOURS_WEEK as hrs,
  counter,
  inc,
  sum,
  /*  default as mmm, */
} from './module1.js';
var a = 5;
// console.log('mmm :>> ', mmm);
console.log('WHW :>> ', WHW);
console.log('hrs :>> ', hrs);
inc(55);
inc();
console.log('counter:>> ', counter);
console.log('sum:>> ', sum(5, 3));

// default import
import mn from './module1.js';
console.log('mn :>> ', mn);
