//const apiKey = '&APPID=' + 'd8cc505e32c9d409c08f2adac94cf705';
//const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?';
//let myCity = 'q=' + 'nashville';
//let unitType = 'imperial';
//let units = '&units=' + unitType;
//let apiPath= `${location}`${unitType}${imperial}${&units}``;
//let apiPath = apiUrl + myCity + apiKey;
//let weatherDiv = document.querySelector('div');
//let enteredCity = document.getElementById("myCity");
//console.log(entered.city, 'city');

function fetchWeather(){

const apiKey = '&appid=' + '';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?';
let myCity = 'q=' + 'nashville';
let unitType = 'imperial';
let units = '&units=' + unitType;
//let apiPath= `${location}`${unitType}${imperial}${&units}``;
let apiPath = apiUrl + myCity + apiKey;
let weatherDiv = document.querySelector('div');
let enteredCity = document.getElementById("myCity");
}

console.log("apiPath", apiPath);

fetch(apiPath)
  .then(function(response) {
     return response.json();
}).then(function(json) {
     weatherData = json; {

     console.log('parsed json', weatherData);
    
var sunrise = json.sys.sunrise;
var sunriseDate = new Date(sunrise*1000);
var sunriseHour = sunriseDate.getHours();
var sunriseMinutes = "0" + sunrise.getMinutes();
var formattedSunrise = sunriseHour + ":" + sunriseMinutes.substr(-2) + 'AM';

var sunset = json.sys.sunset;
var sunsetDate = new Date (sunset*1000);
var sunsetHour = sunsetDate.getHours();
var sunsetMinutes = "0" + sunset.getMinutes();
var formattedSunset = sunsetHour + ':' + sunsetMinutes.substr(-2) + 'PM';

function 
var date = new Date(unix_timestamp*1000);
var hours = date.getHours();
var minutes = "0" + date.getMinutes();
var formattedTime = hours + ':' + minutes.substr(-2);

console.log(formattedSunrise, "sunrise time");

    
}).catch(function(ex) {
     console.log('parsing failed', ex);
});

   console.log(weatherDate);

   console.log(json.name, "city name")
   console.log(json.name.temp, "temp");
   console.log(json.weather[0].description, "description");
   console.log(json.weather[0].main, "main weather");

