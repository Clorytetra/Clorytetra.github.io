$(function () {



    var toggleStyle = function () {

        var e = $('input[type="text"]');

        if (e.css('background-color') === 'rgb(255, 0, 0)') {

            e.css('background-color', 'rgb(255, 255, 255)');

        } else {
            e.css('background-color', 'rgb(255, 0, 0)');

        }


    }


    $('#ReqAQuoteBtn').click(toggleStyle);



    $('.coreValues').append("<li><strong>This is brand new!!</strong></li>");

    $('.coreValues').prepend("<li><strong>This is also brand new!!</strong></li>");


    var nameVal = $('input[name="nameVal"]');
    function fillEmpty(){

        if( nameVal.val() == ""){
            nameVal.val("John Doe");
        }

    }

    $('#ReqAQuoteBtn').click(fillEmpty);



})
