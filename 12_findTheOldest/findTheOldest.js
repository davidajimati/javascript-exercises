const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();
  let age = 0;
  let target = '';
  let targetAge = 0;
  people.forEach(item => {
    if (item.yearOfDeath) {
      age = item.yearOfDeath - item.yearOfBirth;
    } else {
      age = currentYear - item.yearOfBirth;
    }
    if (age > targetAge) {
      target = item;
      targetAge = age;
    }
  });
  return target;
};

// Do not edit below this line
module.exports = findTheOldest;
