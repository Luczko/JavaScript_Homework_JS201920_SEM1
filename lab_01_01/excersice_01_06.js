// Exc 6 Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98].
// 5, 9, 11
let numbers = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let max = 0;
let maxIndex = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === max) {
    maxIndex = i;
    console.log(maxIndex);
  }
}
