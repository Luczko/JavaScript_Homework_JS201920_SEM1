// 10 Create a function that on given array will perform operation of adding or subtracting elements. Operation is to be chosen at random. And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d)
let numbers = [1, 6, 23, 8, 4, 8, 3, 7];
function randomOps(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let factor = Math.random();
    if (factor < 0.5) {
      result = result + arr[i];
    } else {
      result = result - arr[i];
    }
  }
  return result;
}
console.log(randomOps(numbers));
