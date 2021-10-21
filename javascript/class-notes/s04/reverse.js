function reverse(arrayOfChars) {
  let leftIndex = 0;
  let rightIndex = arrayOfChars.length - 1;

  while (leftIndex < rightIndex) {
    // Swap characters
    const temp = arrayOfChars[leftIndex];
    arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
    arrayOfChars[rightIndex] = temp;
    // Move towards middle
    leftIndex++;
    rightIndex--;
  }
}
reverse();
var msg = (msg2 = 'Clarusway'.split(''));
console.log(msg);
reverse(msg2);
console.log(msg2);
