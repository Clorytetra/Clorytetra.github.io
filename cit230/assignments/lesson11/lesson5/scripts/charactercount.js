$(function(){
    // jQuery Code goes here


    $(".textbox").on({
        keydown: function(){
            var countDown= 150 - $(this).val().length;
            $('.countDisplay').html(countDown +"/150 Remaining");
            if(countDown < 0){
                $(this).addClass('redWarning');
            }else {
                $(this).removeClass("redWarning");
            }
        },
        keyup: function(evt){
            if(evt.keyCode === 13){
                $(".submitted").slideDown(500);
            }
        }

    })











})
