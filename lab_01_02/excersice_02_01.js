// 1 Create a function that returns the sum of all elements passed in array as parameter. Function (array)=>number
let numbers = [1, 6, 23, 8, 4, 8, 3, 7];
function summary(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }
  return result;
}
console.log(summary(numbers));
