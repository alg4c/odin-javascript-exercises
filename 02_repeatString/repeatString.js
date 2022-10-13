const repeatString = function (string, num) {
  // repeat a string n times without using String.protoype.repeat()
  if (num < 0) return "Number input error. Input >= 0";
  let result = "";
  for (let i = 0; i < num; i++) {
    result += string;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
