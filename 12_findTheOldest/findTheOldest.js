const findTheOldest = function (personObjArr) {
  let result = personObjArr[0];
  for (let person of personObjArr) {
    person.age =
      person.yearOfDeath !== undefined
        ? person.yearOfDeath - person.yearOfBirth
        : new Date().getFullYear() - person.yearOfBirth;
    if (person.age > result.age) result = person;
  }
  return result;
};

// Do not edit below this line
module.exports = findTheOldest;
