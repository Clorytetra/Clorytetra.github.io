$(function(){

    $('input').on({
        focus:function(){
            $(this).addClass("focus");
        },
        blur:function(){
            $(this).removeClass("focus").removeClass('select');
        },
        select:function(){
            $(this).addClass("select");
        }
    })


    $('#accountType').change(function(){

        alert("you selected the " + $(this).val() +" Package !")


    })



})
