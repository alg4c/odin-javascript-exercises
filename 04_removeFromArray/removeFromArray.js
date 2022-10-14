const removeFromArray = function (arr, ...valsToRemove) {
  return arr.filter((x) => !valsToRemove.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
