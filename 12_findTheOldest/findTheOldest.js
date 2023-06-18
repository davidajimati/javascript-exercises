const findTheOldest = function (people) {
  target = ""
  targetAge = 0
  people.forEach(item => {
    let age = item.yearOfDeath - item.yearOfBirth;
    if (age > targetAge) {
      target = item.name;
      targetAge = age;
    }
  });
  return target;
};

// Do not edit below this line
module.exports = findTheOldest;


const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

console.log(findTheOldest(people));
