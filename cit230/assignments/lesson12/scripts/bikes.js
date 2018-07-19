var bikeData;
var bikeDataURL = "data/sales.json";

var bikeRequest = new XMLHttpRequest();
bikeRequest.open('GET', bikeDataURL);
bikeRequest.responseType = 'json';
bikeRequest.send();

bikeRequest.onload = function () {
    bikeData = bikeRequest.response;
    console.log(bikeData);
    bikeFiller();

}


function bikeFiller() {




    for (i = 0; i < 4; i++) {

        $(".accordian").append('<div class="accordion-section"><a class="accordion-section-title" href="#accordion-'+ [i+1]+ '">'+ bikeData.bikes[i].brand + '</a><div id="accordion-' +[i+1] + '" class="accordion-section-content">' + '<p>Model: ' + bikeData.bikes[i].model + '</p><img src="images/' + bikeData.bikes[i].img + '" alt="Picture of the bike"' + '<br><p>Price: $' + bikeData.bikes[i].price + '</p></div></div>')

    }


}







