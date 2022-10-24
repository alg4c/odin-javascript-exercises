const fibonacci = function (targetMember) {
  if (targetMember < 0) return "OOPS";
  const fib = [1, 1];
  for (let i = 1; i < targetMember; i++) {
    fib.push(fib[i] + fib[i - 1]);
  }
  return fib[targetMember - 1];
};

// Do not edit below this line
module.exports = fibonacci;
