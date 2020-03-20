// 13 Create a function that take two numbers and return the object with 4 fields. Result on 4 basic arithmetic operations.
let a = 1,
  b = 2;
function retObject(x, y) {
  let obj = {
    add: x + y,
    sub: x - y,
    mult: x * y,
    div: x / y
  };
  return obj;
}
console.log(retObject(a, b));
