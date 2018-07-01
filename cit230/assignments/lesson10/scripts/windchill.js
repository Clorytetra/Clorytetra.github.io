var highTemp = document.getElementById("high").innerHTML;
var lowTemp = document.getElementById("low").innerHTML;
var windSpeed = document.getElementById("windSpeed").innerHTML;
var averageTemp = (parseInt(highTemp) + parseInt(lowTemp)) /2;
var windChill = 35.74 + (0.6215 * averageTemp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * averageTemp * Math.pow(windSpeed, .16));
document.getElementById("windChill").innerHTML = Math.round(windChill);
