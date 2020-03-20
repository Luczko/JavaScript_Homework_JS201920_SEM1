// 4 Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.
// 1, 98
let numbers = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let max = 0;
let min = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
    if (i === 0) {
      min = numbers[i];
    }
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
}
console.log(max, min);
