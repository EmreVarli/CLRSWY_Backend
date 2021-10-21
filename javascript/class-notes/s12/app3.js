const person = {
  firstName: "Matthew",
  lastName: "Dunn",
  birthYear: 1980,
  skills: ["JS", "java"],
  employed: true,
  // later
  2021: "Clarusway",
  true: "is it working?",
  calcAgeBad: function (bYear) {
    return 2021 - bYear;
  },
  calcAge: function () {
    // return 2021 - this.birthYear;
    this.age = 2021 - this.birthYear;
    return this.age;
  },
};

/* console.log(person.calcAgeBad(1977));
console.log(person.age);
console.log(person.calcAge());
console.log(person.age); */

// const calcAge = function (birthYear) {
//   console.log("Regular Function in Global Scope");
//   console.log(this);
//   console.log(2021 - birthYear);
// };

// calcAge(1981);

// const calcAgeArrow = (birthYear) => {
//   console.log("Arrow Function in Global Scope");
//   console.log(this);
//   console.log(2021 - birthYear);
// };

// calcAgeArrow(1984);

const teacher = {
  firstName: "Matthew",
  lastName: "Dunn",
  birthYear: 1980,
  skills: ["JS", "java"],
  employed: true,
  // later
  2021: "Clarusway",
  true: "is it working?",
  calcAge: function () {
    console.log("Regular Function in Object");
    console.log(this);
    console.log(2021 - this.birthYear);
  },
  calcAgeArrow: () => {
    console.log("Arrow Function in Object");
    this.employed = false;
    console.log(this);
    console.log(2021 - this.birthYear);
  },
  calcAgeDelayed: function () {
    setTimeout(function () {
      console.log("Regular Function in setTimeout");
      this.calcAge();
    }, 1000);
  },
  calcAgeDelayedArrow: function () {
    setTimeout(() => {
      console.log("Arrow Function in setTimeout");
      console.log(this);
      this.calcAge();
    }, 1000);
  },
};

// teacher.calcAge();
// teacher.calcAgeArrow();
// teacher.calcAgeDelayed();
teacher.calcAgeDelayedArrow();
