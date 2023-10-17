
    // When the user scrolls down 50px from the top of the document, resize the header's font size
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 1) {
        var header = $(".nav-bar");
        var an1 = $(".main-container");
        var an2 = $(".text-one-alt");
        
        
        document.getElementById("header").style.fontSize = "1.75vh";
        header.removeClass('nav-bar') .addClass("nav-bar-txt");
        an1.removeClass('main-container') .addClass("main-container-alt");
        an2.removeClass('text-one-alt') .addClass("text-one");
    } else {
        var header = $(".nav-bar-txt"); 
        var an1 = $(".main-container-alt1");
        var an2 = $(".textone");
        
        document.getElementById("header").style.fontSize = "2.5vh";
        header.removeClass("nav-bar-txt") .addClass('nav-bar'); 
        an1.removeClass('main-container-alt') .addClass("main-container");
        an2.removeClass('text-one') .addClass("text-one-alt");
    }
    }

