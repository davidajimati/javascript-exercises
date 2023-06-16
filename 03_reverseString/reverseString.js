const reverseString = function (word) {
  new_string = "";
  // if (!word) return "";
  for (let i = word.length - 1; i >= 0; i--) {
    new_string += word[i];
  }
  return new_string;
};

// Do not edit below this line
module.exports = reverseString;
