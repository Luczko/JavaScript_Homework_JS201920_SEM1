// 9 Create a function that takes given array. Then takes a random element, removes it from the array and pushes it to result arrays. This takes place as long as there are elements in source array.
let numbers = [1, 6, 23, 8, 4, 8, 3, 7];
function remove(arr) {
  let newArray = [];
  for (let i = 0; i <= arr.length; i++) {
    let idx = Math.floor(Math.random() * arr.length);
    newArray.push(arr[idx]);
    arr.splice(idx, 1);
    i = 0;
  }
  return newArray;
}
console.log(remove(numbers));
