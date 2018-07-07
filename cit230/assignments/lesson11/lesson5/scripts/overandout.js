$(function(){

    // This function returns a random colour from the given array everytime that it is invoked.
    function randomize(){
        var colors = ['Red','Green','Yellow','Blue','Purple']
        return colors[parseInt(Math.random()*colors.length)];
    }

    // Your jQuery Code goes here

    $('.outerOne').on("mouseover", function(){
        $(this).css("background-color", randomize);
    })
    $('.innerOne').on("mouseover", function(){
        $(this).css('background-color', randomize)
    })

    $('.outerTwo').on("mouseenter", function(){
        $(this).css("background-color", randomize);
    })
    $('.innerTwo').on("mouseenter", function(){
        $(this).css('background-color', randomize)
    })
})
