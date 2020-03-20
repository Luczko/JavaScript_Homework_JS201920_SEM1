// 2 Create a function that returns sum of first and last elements of given array.
let numbers = [1, 6, 23, 8, 4, 8, 3, 7];
function firstLast(arr) {
  return arr[0] + arr[arr.length - 1];
}
console.log(firstLast(numbers));
