const repeatString = function(string, times) {
  if (times < 0) return "ERROR";
  let new_string = "";
  for (let i = 0; i < times; i++) {
    new_string += string;
  }
  return new_string;
};

// Do not edit below this line
module.exports = repeatString
