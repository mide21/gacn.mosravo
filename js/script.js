"use strict";

// Scroll Progress Bar

window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}




(function ($) {

    /*------------------
        Scroll To Top
    --------------------*/

    $("#scrollToTop").click(function () {

        $("html, body").animate({ scrollTop: 0 }, "slow");

    });

    $(window).on('scroll', function () {

        if ($(window).scrollTop() > 20) {

            $("#scrollToTop").show();

        } else {

            $("#scrollToTop").hide();
        }

    });


    /*---------------------
       Popup Search-bar
    -----------------------*/

    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        callbacks: {
            beforeOpen: function () {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });

    /*---------------------
       Page Loader
    -----------------------*/

    $(window).on('load', function () {

        $(".loader").fadeOut();

        $("#preloder").delay(2000).fadeOut("slow");

    });





    /*---------------------
       Partners Slider
    -----------------------*/

    $('.partners-slider').owlCarousel({
        navText: false,
        margin: 30,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            768: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });


    /*-------------
       Tooltip
    ---------------*/

    $(function () {

        $('[data-toggle="tooltip"]').tooltip();

    });


    /*----------------
       Navitem Toogle
    ----------------*/

    $('.nav-item').on('click', 'li', function () {

        $('.nav-item li.active').removeClass('active');

        $(this).addClass('active');

    });

    /*------------------
        Navbar Toggler
    --------------------*/

    $('.navbar-toggler').click(function () {

        $('.icon').toggleClass('close');

    });


    /*-------------
      Waypoints
      -------------*/

    $('.market-header').waypoint(function () {

        $('.market-header').addClass('fadeInLeft animated');

    }, {

        offset: '50%'

    });

    $('.market-content').waypoint(function () {

        $('.market-content').addClass('fadeInRight animated');

    }, {

        offset: '50%'

    });

    $('.activity-img').waypoint(function () {

        $('.activity-img').addClass('heartBeat animated');

    }, {

        offset: '50%'

    });

    $('.title-section').waypoint(function () {

        $('.title-section').addClass('fadeInUp animated');

    }, {

        offset: '50%'

    });

    $('.news').waypoint(function () {

        $('.news').addClass('fadeInUp animated');

    }, {

        offset: '50%'

    });

    $('.animated-1').waypoint(function () {

        $('.animated-1').addClass('fadeInUp animated');

    }, {

        offset: '35%'

    });

})(jQuery);
