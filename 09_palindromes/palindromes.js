const palindromes = function (string) {
  const strArr = string
    .toLowerCase()
    .split("")
    .filter((x) => x.match(/[a-zA-z]/g));
  const midPointIndex = Math.floor(strArr.length / 2);

  for (let i = 0; i < midPointIndex; i++) {
    if (strArr[i] != strArr[strArr.length - i - 1]) return false;
  }
  return true;
};

palindromes("racecar!");
// Do not edit below this line
module.exports = palindromes;
