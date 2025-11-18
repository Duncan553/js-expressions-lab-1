const temperaturesInCelsius = [12, 14, 9, 20, 18, 16, 11];

function cToF(c) {
  return (c * 9 / 5) + 32;
}

const temperaturesInFahrenheit = temperaturesInCelsius.map(cToF);

const tot_temperature_in_celsius = temperaturesInCelsius.reduce((sum, v) => sum + v, 0);
const tot_temperature_in_fahrenheit = temperaturesInFahrenheit.reduce((sum, v) => sum + v, 0);

const n = temperaturesInCelsius.length;

const avg_temperature_in_celsius = Number((tot_temperature_in_celsius / n).toFixed(2));
const avg_temperature_in_fahrenheit = Number((tot_temperature_in_fahrenheit / n).toFixed(2));

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};

