// 3 Create a function that takes a number and return factorial of that number.
let number = 5;
function factorial(x) {
  let result = 1;
  let i = 1;
  while (i <= x) {
    result = result * i;
    i++;
  }
  return result;
}
console.log(factorial(number));
