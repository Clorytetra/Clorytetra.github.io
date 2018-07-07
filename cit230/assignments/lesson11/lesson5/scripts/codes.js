$(function(){
    // jQuery Code goes here


    $(document).on({

        keydown:function(evt){
                $('.keyCode').html(evt.keyCode);
        },
        keypress:function(evt){
            $(".charCode").html( evt.charCode);
        }

    })










})
