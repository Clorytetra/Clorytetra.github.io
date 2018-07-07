$(function(){


    var box1 = $(".box1");
    var box2 = $(".box2");

    function leftToRight(){
        if(box2.html() == ""){
            box2.html( box1.html());
            box1.html( "" );

        }

    }

    function rightToLeft(){
        if(box1.html()==""){
            box1.html( box2.html());
            box2.html("");
        }
    }


    $('#LeftToRight').click(leftToRight);
    $('#RightToLeft').click(rightToLeft);




})
