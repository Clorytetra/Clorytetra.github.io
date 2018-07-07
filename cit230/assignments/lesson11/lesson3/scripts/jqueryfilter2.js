$(function(){

    $('li:first-of-type').css('background-color', 'red');

    $('li:only-of-type').css('background-color', 'blue');

    $('li:contains("Crush")').css('color', 'green');

    $('li:empty').css('background-color', 'black');

    $('li:has("h4")').css('color', 'lightblue');

    $('li:nth-child(3)').css('background-color', "skyblue");
})
