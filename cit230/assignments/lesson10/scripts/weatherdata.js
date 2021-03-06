var weatherData;
var weatherDataURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + document.getElementById("zip").innerHTML + ",us&appid=57e57ee1ee90b26d04f618ff10e48bfc&units=imperial";

var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', weatherDataURL);
weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function() {
    weatherData = weatherRequest.response;
    weatherFiller();

}

function weatherFiller(){

    var averageTemp = (parseInt(weatherData.main.temp_max) + parseInt(weatherData.main.temp_min)) /2;
    var windChill = 35.74 + (0.6215 * averageTemp) - (35.75 * Math.pow(weatherData.wind.speed, 0.16)) + (0.4275 * averageTemp * Math.pow(weatherData.wind.speed, .16));
    document.getElementById("windChill").innerHTML = Math.round(windChill);


    document.getElementById("current").innerHTML = weatherData.main.temp;
    document.getElementById("high").innerHTML = weatherData.main.temp_max;
    document.getElementById("low").innerHTML = weatherData.main.temp_min;

    document.getElementById("currentCondtions").innerHTML = weatherData.weather[0].main;
    document.getElementById("description").innerHTML = weatherData.weather[0].description;

    document.getElementById("humidity").innerHTML = weatherData.main.humidity;
    document.getElementById("windSpeed").innerHTML = weatherData.wind.speed;


}
