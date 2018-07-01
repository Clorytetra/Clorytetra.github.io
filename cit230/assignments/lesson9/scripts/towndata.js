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



    if (document.getElementById("pageID").innerHTML == "Franklin Weather") {

        document.getElementById(motto[0]).innerHTML = townData.towns[0].motto;
        document.getElementById(year[0]).innerHTML = townData.towns[0].yearFounded;
        document.getElementById(population[0]).innerHTML = townData.towns[0].currentPopulation;
        document.getElementById(rain[0]).innerHTML = townData.towns[0].averageRainfall;
    }

    else {


        for (i = 0; i < 4; i++) {

            if (i == 2) {
                continue;
            }


            document.getElementById(motto[i]).innerHTML = townData.towns[i].motto;
            document.getElementById(year[i]).innerHTML = townData.towns[i].yearFounded;
            document.getElementById(population[i]).innerHTML = townData.towns[i].currentPopulation;
            document.getElementById(rain[i]).innerHTML = townData.towns[i].averageRainfall;

        }
    }


}
