// 2) Create four function definitions. One for every basic math operations and taking two input parameters. Create one more function. This function is to return calculation object. This object is to have parameters object field that holds two operation parameters inside (x and y) and a function field that points to a function with math operation (defined at the beginning). A function setOperation() that sets the field from previous sentence and a calculate() function that makes calculation and returns its value.
let sum = function(x, y) {
  return x + y;
};
let sub = function(x, y) {
  return x - y;
};
let mul = function(x, y) {
  return x * y;
};
let div = function(x, y) {
  return x / y;
};
let iife = (function() {
  let x, y, operation;
  let setOperation = function(a, b, ops) {
    if (a) x = a;
    if (b) y = b;
    if (ops) operation = ops;
  };
  let calculate = function() {
    return operation(x, y);
  };
  return {
    set: setOperation,
    calc: calculate
  };
})();
iife.set(5, 2, mul);
console.log(iife.calc());
