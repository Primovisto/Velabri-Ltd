/*-----------------
    Loader
    -----------------*/

$(document).ready(function() {

    setTimeout(function() {
        $('body').addClass('loaded');
    }, 3000);

});

/*-----------------
    fixed top
    -----------------*/
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 70) {
            $('header').addClass('navbar-fixed-top');
        } else {
            $('header').removeClass('navbar-fixed-top');
        }
    });
