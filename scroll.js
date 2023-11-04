
    // When the user scrolls down 50px from the top of the document, resize the header's font size
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 1) {
        var header = $(".nav-bar");
        var an1 = $(".main-container");
        var an2 = $(".text-one-alt");
        var an3 = $(".menu-two-alt");
        var an4 = $(".menu");
        var an5 = $(".menu-one");
        var ann6 = $(".spiral-image")
;
        document.getElementById("header").style.fontSize = "1.5vh";
        header.removeClass('nav-bar') .addClass("nav-bar-txt");
        an1.removeClass('main-container') .addClass("main-container-alt");
        an2.removeClass('text-one-alt') .addClass("text-one");
        an3.removeClass("menu-two-alt").addClass("menu-two");
        an4.removeClass("menu").addClass("menu-alt")
        an5.removeClass("menu-one").addClass("menu-one-alt")
        an6.removeClass("spiral-image").addClass("spiral-image-alt")

    } else {
        var header = $(".nav-bar-txt"); 
        var an1 = $(".main-container-alt1");
        var an2 = $(".textone");
        var an3 = $(".menu-two");
        var an4 = $(".menu-alt");
        
        document.getElementById("header").style.fontSize = "2.0vh";
        header.removeClass("nav-bar-txt") .addClass('nav-bar'); 
        an1.removeClass('main-container-alt') .addClass("main-container");
        an2.removeClass('text-one') .addClass("text-one-alt");
        an3.removeClass("menu-two").addClass("menu-two-alt")
        an4.removeClass("menu-alt").addClass("menu")
    }
    }


    function scollAnimation2(){
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 100){
            var jackImage = $("jack")
            window.alert("Ti")
        }

    }

