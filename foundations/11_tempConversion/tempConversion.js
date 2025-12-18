const convertToCelsius = function(fahrenheitTemperature) {
  return Math.round((fahrenheitTemperature-32) * 50 / 9) / 10;
};

const convertToFahrenheit = function(celciusTemperature) {
  return Math.round((celciusTemperature * 1.8 + 32)*10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
