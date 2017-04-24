/*-------------------------
    fixed top Header Menu
 -----------------*/
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 70) {
            $('header').addClass('navbar-fixed-top');
        } else {
            $('header').removeClass('navbar-fixed-top');
        }
    });