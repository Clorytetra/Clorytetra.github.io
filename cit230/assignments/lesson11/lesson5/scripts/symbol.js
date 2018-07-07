$(function () {
    // This function calculates and returns the distance value
    function calculateDistance(x, y) {
        var symbolPositionX = 97;
        var symbolPositionY = 106;
        return Math.sqrt(((x - symbolPositionX) * (x - symbolPositionX)) + ((y - symbolPositionY) * (y - symbolPositionY)));
    }

    var statusDisplay = $('.status')

    // Your jQuery Code goes here


    $(".container").on({
        mousemove: function (evt) {
            $('.coordinates').html(evt.offsetX + "," + evt.offsetY);
            var distance = calculateDistance(evt.offsetX, evt.offsetY)

            if (distance > 30) {
                statusDisplay.html("You're too far off!!");
            } else if (distance > 20 && distance < 30) {
                statusDisplay.html("You're close!");
            } else if (distance > 10 && distance < 20) {
                statusDisplay.html("You're very close!");
            } else if (distance > 8 && distance < 10) {
                statusDisplay.html("Almost there!1");
            } else if (distance >= 0 && distance < 8) {
                statusDisplay.html("You found it, now click");
            }

        },
        click: function(evt){
            if(calculateDistance(evt.offsetX, evt.offsetY) < 8){
                statusDisplay.html("you won");
            }else {
                statusDisplay.html("you lose");
            }
            $(this).off();
        },
        mouseleave: function (){
            statusDisplay.html("find the hand");
            $(".coordinates").html('0,0');
        }
    })



})
