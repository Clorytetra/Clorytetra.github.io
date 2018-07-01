var townData;
var townDataURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var townRequest = new XMLHttpRequest();
townRequest.open('GET', townDataURL);
townRequest.responseType = 'json';
townRequest.send();

townRequest.onload = function () {
    townData = townRequest.response;
    townFiller();

}



function townFiller() {

    var motto = ["franklinMotto", "greenvilleMotto", "blah", "springfieldMotto"]
    var year = ["franklinYear", "greenvilleYear", "blah", "springfieldYear"]
    var population = ["franklinPopulation", "greenvillePopulation", "blah", "springfieldPopulation"]
    var rain = ["franklinRain", "greenvilleRain", "blah", "springfieldRain"]

    console.log(townData);


    if (document.getElementById("townCode").innerHTML == "-1") {


        for (i = 0; i < 4; i++) {

            if (i == 2) {
                continue;
            }

            document.getElementById(motto[i]).innerHTML = townData.towns[i].motto;
            document.getElementById(year[i]).innerHTML = townData.towns[i].yearFounded;
            document.getElementById(population[i]).innerHTML = townData.towns[i].currentPopulation;
            document.getElementById(rain[i]).innerHTML = townData.towns[i].averageRainfall;
        }


    } else {

        var events = ["event1", "event2", "event3"]
        var townCode = document.getElementById("townCode").innerHTML

        document.getElementById(motto[townCode]).innerHTML = townData.towns[townCode].motto;
        document.getElementById(year[townCode]).innerHTML = townData.towns[townCode].yearFounded;
        document.getElementById(population[townCode]).innerHTML = townData.towns[townCode].currentPopulation;
        document.getElementById(rain[townCode]).innerHTML = townData.towns[townCode].averageRainfall;

        for(i=0 ; i<3 ; i++){
        document.getElementById(events[i]).innerHTML = townData.towns[townCode].events[i];
        }

    }


}
