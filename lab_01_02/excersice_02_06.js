// 6 For time of this example remove last element from the given array. Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]
// let numbers = [1,3,4,1,0];
// function createNewTable(arr) {
//     let newNumbers = [];
//     for (let i=1; i<arr.length; i+=2) {
//         newNumbers.push(arr[i]+arr[i-1]);
//     }
//     newNumbers.push(arr[arr.length-1]+arr[arr.length-1]);
//     return newNumbers;
// }
// console.log(createNewTable(numbers));
let numbers = [1, 3, 4, 1, 0];
function createNewTable(arr) {
  let newNumbers = [];
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i + 1] === undefined) {
      newNumbers.push(arr[i] + arr[i]);
    } else {
      newNumbers.push(arr[i] + arr[i + 1]);
    }
  }
  return newNumbers;
}
console.log(createNewTable(numbers));
