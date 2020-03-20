// 8 Create a function that takes two parameters: array and number off attempts. Based on number of attempts choose a random number from table that many times and return lowest one.
let numbers = [1, 6, 23, 8, 4, 8, 3, 7];
let attempts = 5;
function randomLowest(arr, att) {
  let randomArr = [];
  for (let i = 0; i < att; i++) {
    let idx = Math.floor(Math.random() * arr.length);
    randomArr.push(arr[idx]);
  }
  return Math.min(...randomArr);
}
console.log(randomLowest(numbers, attempts));
