// 5 Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f]    [1,3,4,1,0,3] => [4,5,3] function(array)=>array
let numbers = [1, 3, 4, 1, 0, 3];
function createNewTable(arr) {
  let newNumbers = [];
  for (let i = 0; i < arr.length; i += 2) {
    newNumbers.push(arr[i] + arr[i + 1]);
  }
  return newNumbers;
}
console.log(createNewTable(numbers));
