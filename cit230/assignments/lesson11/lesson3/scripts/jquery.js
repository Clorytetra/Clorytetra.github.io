$(function () {
    // All jQuery code goes here

    $('#alcoveLogo').css('opacity', 0.4);

    $('.servicesBtn').css('color', '#FFF');

    $('button').css('border', "1px solid red");

    $("h2").css("border", "1px solid red");

    $("input[name='nameVal']").css('border', '1px solid red');

    $("input[name!='phoneNum']").css('border', '1px solid red');

    $("inpu[name*='Num']").css("border", "1px solid red");

    $("inpu[name$='Val']").css("border", "1px solid red");

    $('#alcoveLogo').next().css('background-color', 'rgba(255,0, 0, 0.2)');

    $('.box1').nextAll().css('background-color', 'rgba(255,0, 0, 0.2)');

    $('.header').children().css('background-color', 'rgba(0,255, 0, 0.2)');

    $('.navigation > li:eq(2)').parent().css('opacity', '0.3');

    $('.servicesBtn').closest('div').css('background-color', 'rgba(0,255, 0, 0.2)');


})






























