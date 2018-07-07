$(function () {


/*$(".boxHolder").on("click", "li", function(){

    $(this).addClass("greenBox");
})

$(".boxHolder").on("dblclick", "li", function(){

    $(this).addClass("orangeBox");

})*/

$('.boxHolder').on({
    click: function () {

        $(this).addClass("greenBox").html($(this).index());
    },
    dblclick: function () {

        $(this).addClass("orangeBox").html($(this).index());
    },
    mouseenter: function(){
        $(this).css("opacity", "0.3");
    },
    mouseleave: function(){
        $(this).css("opacity", "1.0");
    }


}, "li")





})
