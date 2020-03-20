// 4 Create a function that returns given array in reverse order. // no build in functions
let numbers = [1, 6, 23, 8, 4, 8, 3, 7];
function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
console.log(reverseArray(numbers));
