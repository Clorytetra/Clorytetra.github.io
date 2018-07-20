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

        $(".accordion").append('<div class="accordion-section"><a class="accordion-section-title" href="#accordion-'+ [i+1]+ '">'+ bikeData.bikes[i].brand + '</a><div id="accordion-' +[i+1] + '" class="accordion-section-content">' + '<p>Model: ' + bikeData.bikes[i].model + '</p><picture><source srcset="images/' + bikeData.bikes[i].img + '-small.jpg" media="(max-width: 599px)"><source srcset="images/' + bikeData.bikes[i].img + '-medium.jpg" media="(max-width: 1023px)"><img src="images/' + bikeData.bikes[i].img + '-medium.jpg" alt="bike picture"></picture>' + '<br><p>Price: $' + bikeData.bikes[i].price + '</p><p>Frame: ' + bikeData.bikes[i].frame + '</p><p>Fork: ' + bikeData.bikes[i].fork + '</p><p>Rims: ' + bikeData.bikes[i].rims + '</p></div></div>')

    }


}








