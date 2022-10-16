const sumAll = function (...args) {
  if (args.some((x) => x < 0)) return "ERROR";
  if (args.some((x) => typeof x !== "number")) return "ERROR";
  const [n1, n2] = args.sort((a, b) => a - b);
  return ((n2 - n1 + 1) * (n2 - n1 + 2)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
