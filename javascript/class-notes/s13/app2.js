// console.log("clarusway");

// function total1(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     // show some feedback in the loop
//     alert(array[i]);
//     // console.log(array[i]);
//     sum += array[i];
//   }
//   return sum;
// }
// console.log("total of array1 :>>", total1([2, 4, 6, 8]));
// 👆 klasik yöntem

// function total2(array, callback) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i]);
//     sum += array[i];
//   }
//   return sum;
// }
// total2([2, 4, 6, 8], console.log);
// 👆 callback

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
