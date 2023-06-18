const convertToCelsius = function (Fahrenheit) {
  let result = (Fahrenheit - 32) * 5 / 9;
  return Number(result.toFixed(1));
};

const convertToFahrenheit = function (Celsius) {
  let result = (Celsius * 9 / 5) + 32;
  return Number(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
