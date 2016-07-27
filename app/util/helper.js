var axios = require('axios');

var id = '73cec9179328b717b974b2a45d8477cc';
var params = '&type=accurate&APPID=' + id;

var helpers = {
  getCurrentWeather: function(city) {
    return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city  + params)
    .then(function(currentWeather) {
      console.log(currentWeather);
    });
  },
  getFiveDayForecast: function(city) {
    return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + params)
    .then(function(forecastObj) {
      return forecastObj.data.list.map(function(forecastData) {
        console.log(forecastData);
        return forecastData;
      });
    })
    .catch(function(err) {
      console.warn('Error in retrieving weather forecast', err);
    });
  }
}
module.exports = helpers;
