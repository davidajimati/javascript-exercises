const palindromes = function (string) {
  string = string.replace(/[^a-zA-Z0-9]/g, "");
  string = string.toLowerCase()

  let reverseStr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverseStr += string[i];
  }
  return reverseStr === string;
};

// Do not edit below this line
module.exports = palindromes;
