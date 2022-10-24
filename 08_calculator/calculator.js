const add = function (...args) {
  return args.reduce((a, b) => a + b, 0);
};

const subtract = function (...args) {
  return args.reduce((a, b) => a - b);
};

const sum = function (array) {
  return array.reduce((a, b) => a + b, 0);
};

const multiply = function (arr) {
  return arr.reduce((a, b) => a * b);
};

//Do power function without Math.pow()
const power = function (base, exp) {
  return Array(exp)
    .fill(base)
    .reduce((a, b) => a * b);
};

const factorial = function (n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
