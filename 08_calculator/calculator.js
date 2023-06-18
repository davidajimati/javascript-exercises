const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let ans = 0;
  array.forEach(item => {
    ans += item;
  });
  return ans;
};

const multiply = function (...args) {
  let ans = 1;
  args.forEach(item => {
    ans *= item;
  })
  return ans;
};

const power = function (a, b) {
  let ans = 1;
  while (b > 0) {
    ans *= a;
    b--;
  }
  return ans;
};

// NORMAL SIMPLE
// const factorial = function (num) {
//   if (num == 0) return 1;
//   let ans = 1;
//   while (num > 0) {
//     ans *= num;
//     num--;
//   }
//   return ans;
// };

 // RECURSIVE METHOD
const factorial = function (num) {
  if (num == 0 || num == 1) return 1;
  return (num * factorial(num - 1));
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
