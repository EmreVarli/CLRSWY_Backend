// // "use strict";
// console.log("this #2:>> ", this);

// const msg = greet("Matthew");

// function greet(user = "User") {
//   console.log("this :>> ", this);
//   return `Welcome ${user}`;
// }

// function execute() {
//   "use strict";

//   function concat(str1, str2) {
//     // the strict mode is enabled too
//     console.log(this === undefined); // => true
//     return str1 + str2;
//   }

//   // concat() is invoked as a function in strict mode
//   // this in concat() is undefined
//   concat("Hello", " World!"); // => "Hello World!"
// }

// execute();
const numbers = {
  numberA: 5,
  numberB: 10,
  sum: function () {
    console.log(this === numbers); // => true

    const calculate = () => {
      console.log(this === numbers); // => true
      return this.numberA + this.numberB;
    };

    // use .call() method to modify the context
    return calculate(); // .call(this);
  },
};

numbers.sum();

const person = {
  name: "John",
  age: 30,
  greet: function () {
    const surname = "Doe";
    console.log("The name is" + " " + this.name + " " + surname);
  },
  greet2() {
    const surname = "dfddd";
    console.log("The name is" + " " + this.name + " " + surname);
  },
};

person.greet2();
