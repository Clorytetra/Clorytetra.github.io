var servicesData;
var servicesDataURL = "data/services.json";

var servicesRequest = new XMLHttpRequest();
servicesRequest.open('GET', servicesDataURL);
servicesRequest.responseType = 'json';
servicesRequest.send();

servicesRequest.onload = function () {
    servicesData = servicesRequest.response;
    console.log(servicesData);
    servicesFiller();

}


function servicesFiller() {

    for (i = 0; i < 5; i++) {
        $("#serviceInformation").append("<tr><td>" +             servicesData.services[i].name + "</td><td>" + servicesData.services[i].price + "</td><td>" + servicesData.services[i].details + "</td></tr>")



    }




}
