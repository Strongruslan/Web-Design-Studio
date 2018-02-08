$(document).ready(function(){

    //owl-carousel-2
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsiveClass: true,
        items: 1,
        autoHeight: true,
        smartSpeed: 500
    });


    //scroll to section about us
    $(".header-arrow").click(function(){
        $("html, body").animate({
            scrollTop: $(".about").position().top
        },1000);
    });


    // Open the menu begin
    var lef = $(".menu").offset().left;
    $(".nav-button-open").click(function() {

        $(".nav-button-open").toggleClass("nav-button-open-active");

        
        console.log(lef + "sxas");

        $(".page-overlay").toggleClass("page-overlay-active");


        $(".menu").toggleClass("is-open");

        $(".menu-navigation a").each(function (el){
            setTimeout ( function () {
                $(".menu-navigation a").eq(el).toggleClass("is-open-link");
            }, 100 * (el +1));
        });

    });
    //Open the menu end

    //Page-scroll-to-id  Plugin
    $("a[rel='m_PageScroll2id']").mPageScroll2id({

        scrollSpeed: 1500,

        highlightClass: "is-active-link",

        onComplete: function(){

            $(".nav-button-open").toggleClass("nav-button-open-active");

            $(".menu").toggleClass("is-open");

            $(".page-overlay").toggleClass("page-overlay-active");

            $(".menu-navigation a").each(function (el){
                setTimeout ( function () {
                    $(".menu-navigation a").eq(el).removeClass("is-open-link");
                }, 100 * (el +1));
            });
        }
    });


    //window.resize function begin
    $(window).resize(function(){

        //.periscope-block function auto-height begin
        if ($(window).width() <= 820) {
            var wdt = $(".periscop-block").width();
            

            $(".periscop-block").css({
                "height" : "" + wdt + "px"
            });
            
        }else{
            $(".periscop-block").css({
                "height" : "800px"
            });
        }
        //.periscope-block function auto-height end


        //resize main-header-text function begin

        if ($(window).width() <= 800 - 17 ) {

            $("#clip2 .clip2text").attr("x","28%").css({
                "font-size" : "40px"
            });

            $("#MyGradient .firstOff").attr("offset", "10%");

            $(".about-story-text").attr("x","18%").css({
                "font-size" : "40px"
            });

            $(".text-header").attr("x","25%").css({
                "font-size" : "40px"
            });

            $(".features-text").attr("x", "30%");
        }else{

            $(".features-text").attr("x", "50%");

            $("#clip2 .clip2text").attr("x","50%").css({
                "font-size" : "85px"
            });

            $("#MyGradient .firstOff").attr("offset", "70%");

            $(".text-header").attr("x","50%").css({
                "font-size" : "85px"
            });

            $(".about-story-text").attr("x","40%").css({
                "font-size" : "85px"
            });
        }
        //resize main-header-text function end   
     
    });
    //window.resize function end

    if ($(window).width() <= 820) {
        var wdt = $(".periscop-block").width();
            

        $(".periscop-block").css({
            "height" : "" + wdt + "px"
        });

        console.log(wdt);
    }else{
        $(".periscop-block").css({
            "height" : "800px"
        });
    }

    /////////////////////////--------------

    if ($(window).width() <= 800 - 17 ) {

        $(".features-text").attr("x", "30%");

        $("#clip2 .clip2text").attr("x","28%").css({
            "font-size" : "40px"
        });

        $(".about-story-text").attr("x","18%").css({
            "font-size" : "40px"
        });

        $("#MyGradient .firstOff").attr("offset", "10%");

        $(".text-header").attr("x","25%").css({
            "font-size" : "40px"
        });

    }else{

        $(".features-text").attr("x", "50%");

        $("#clip2 .clip2text").attr("x","50%").css({
            "font-size" : "85px"
        });

        $(".text-header").attr("x","50%").css({
            "font-size" : "85px"
        });

        $("#MyGradient .firstOff").attr("offset", "70%");

        $(".about-story-text").attr("x","40%").css({
            "font-size" : "85px"
        });
    }

    //////////////////////---------------------


    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        $(".periscop-block").css({
           "background-position" : "center center" 
        });

        $(".parallax-block").css({
            "background-position" : "top right" 
        });

        $(".header-container-parallax").css({
            "top" : "50%",
            "transform" : "translateY(-50%)"
        });

        $(".header-arrow").css({
            "top" : "auto",
            "bottom" : "0"
        });

        $(".about-container").css({
            "display" : "none"
        });

        $(".about-story").css({
            "opacity" : "1"
        });


    }else{

        $(".page-overlay-animate").css({
            "display": "block"
        });


        // Smooth Scroll
        $.scrollSpeed(170, 2000);

        //Parallax Plugin
        $(window).stellar();


        //Window Scroll Function begin
        $(window).scroll(function () {

            var headerOffset = $(this).scrollTop();
            var wnd = $(this).innerHeight();

            if (headerOffset > ($(".periscope").offset().top - 300) ) {
                $(".navigation").css({
                    "transform": "translateY(0px)"
                });
            }else{
                $(".navigation").css({
                    "transform": "translateY(-100px)"
                });
            }

            //FirsrScreen Parralax Effect

            if (headerOffset >= $(".header").innerHeight()) {

            } else {

                $(".parallax-block").css({
                    "background-position-x": " " + headerOffset / 2 + "px"
                });


                $(".header-container-parallax").css({
                    "transform": "translate(" + -headerOffset / 6 + "%, " + -headerOffset / 4 + "%)"
                });

            }


            if (headerOffset >= wnd / 1.5) {
                $(".about-container").fadeOut("slow");

                $(".about-our-studio").css({
                    "opacity": "1",
                    "transform": "translate(0px, 0px)"
                });
            } else {

                $(".about-container").fadeIn("slow");

                $(".about-our-studio").css({
                    "opacity": "0",
                    "transform": "translate(50px, 0px)"

                });
            }

            //about-story block animation

            if (headerOffset >= $(".about-story").offset().top - 500) {

                $(".about-story").css({
                    "transform": "translate(10% , 0px)",
                    "opacity": "1"
                });

            } else {

                $(".about-story").css({
                    "transform": "translate(-5% , 0px)",
                    "opacity": "0"
                });
            }

            //line-horizontal

            if (headerOffset >= $(".about-story").offset().top) {

                $(".header-our-team").css({
                    "opacity": "1",
                    "transform": "translateX(35%)"
                });

                $(".grid-item").each(function (el) {

                    setTimeout(function () {

                        $(".grid-item").eq(el).css({
                            "opacity": "1",
                            "transform": "translateX(0%)"
                        });

                    }, 200 * (el + 1));
                });

            } else {

                $(".header-our-team").css({
                    "opacity": "0",
                    "transform": "translateX(40%)"
                });

                $(".grid-item").each(function (el) {

                    setTimeout(function () {

                        $(".grid-item").eq(el).css({
                            "opacity": "0",
                            "transform": "translateX(10%)"
                        });

                    }, 200 * (el + 1));
                });

            }

            if (headerOffset > $(".periscope").offset().top - $(window).height()) {

                $(".periscop-block").css({
                    "background-position" : "center " + (headerOffset/1.5 - $(".periscope").offset().top)  + "px"
                });

                var opacity = (headerOffset - ($(".periscope").offset().top-800)) / (headerOffset/7);

                $(".periscope-inner").css({
                    "opacity" : opacity
                });
            }

        }); //Window scroll function end


    }//navigator.userAgent end


});//document.ready(function) end