// 7 Create a function the return one random element from given array. // use random function
let numbers = [1, 6, 23, 8, 4, 8, 3, 7];
function random(arr) {
  return arr[Math.floor(Math.random() * numbers.length)];
}
console.log(random(numbers));
