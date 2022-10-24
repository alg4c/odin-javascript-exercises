const getTheTitles = function (objArr) {
  let result = [];
  for (let obj of objArr) {
    result.push(obj["title"]);
  }
  return result;
};

// Do not edit below this line
module.exports = getTheTitles;
