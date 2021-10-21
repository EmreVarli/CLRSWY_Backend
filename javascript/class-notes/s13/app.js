console.log("Clarusway ¯\\_(ツ)_/¯");

function total1(array, cb) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // show some feedback in the loop
    // alert(array[i]);
    cb(array[i]);
    sum += array[i];
  }
  return sum;
}
const result = total1([2, 3, 5, 7], (val) => {
  console.log(val);
});
console.log(result);

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(
  str
    .split("")
    .map((letter) =>
      UPPER.indexOf(letter) !== -1 ? letter.toLowerCase() : letter.toUpperCase()
    )
    .join("")
);

// filter words longer than 6 letters
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
  "Clarusway",
  "Future",
];

const result = words.filter((word) => word.length > 6);

console.log(result);

const cart = [
  {
    item: "🍫",
    price: 5,
    vat: 8,
  },
  {
    item: "🍌",
    price: 5,
    vat: 8,
  },
  {
    item: "🥐",
    price: 7,
    vat: 18,
  },
  {
    item: "🍰",
    price: 15,
    vat: 18,
  },
  {
    item: "🎂",
    price: 25,
    vat: 1,
  },
  {
    item: "🥧",
    price: 20,
    vat: 1,
  },
];
// 1
let sum = 0;
for (let i = 0; i < cart.length; i++) {
  const element = cart[i];
  sum += element.price;
}
console.log(sum);
// 2
sum = 0;
for (const el of cart) {
  sum += el.price;
}
console.log(sum);
// 3
sum = 0;
cart.forEach((element) => {
  sum += element.price;
});
// 4
const result = cart.map((item) => item.price).reduce((acc, curr) => acc + curr);
console.log("result :>> ", result);

// 5
const re = cart.reduce((sum, curItem) => {
  return sum + curItem.price;
}, 0);
console.log("re :>> ", re);

const vat = cart.reduce((sum, curItem) => {
  return sum + (curItem.price * curItem.vat) / 100;
}, {});
console.log("vat :>> ", vat);

// 2b forof with index
sum = 0;
for (const [index, el] of cart.entries()) {
  console.log(index);
  sum += el.price;
}
console.log(sum);

/*
--------------
for in example
--------------
*/
const parent = {
  firstName: "Mike",
  lastName: "Doe",
  profession: "Barber",
};

function Baby() {
  this.firstName = "unnamed";
  this.weight = 3.4;
}

Baby.prototype = parent;

var sally = new Baby();
sally.firstName = "Sally";

for (const prop in sally) {
  const element = sally[prop];
  console.log(prop, ":>>", element);
  if (Object.hasOwnProperty.call(sally, prop)) {
  }
}
