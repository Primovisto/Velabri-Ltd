/*-----------------
    Loader
 -----------------*/

$(document).ready(function() {

    setTimeout(function() {
        $('body').addClass('loaded');
    }, 3000);

});

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

/*-----------------------------
    jQuery on Homepage
 ----------------------------*/
        

/*-----------------------------
    jQuery on Services Page
 ----------------------------*/
   
      $(document).ready(function(){

        $("#par1").hide();

        $("#icon").click(function(){
          $('#par1').slideToggle('1000');

        });

        $("#par2").hide();

        $("#icon2").click(function(){
          $('#par2').slideToggle('1000');

        });

        $("#par3").hide();

        $("#icon3").click(function(){
          $('#par3').slideToggle('1000');

        });

        $("#par4").hide();

        $("#icon4").click(function(){
          $('#par4').slideToggle('1000');

        });

        $("#par5").hide();

        $("#icon5").click(function(){
          $('#par5').slideToggle('1000');

        });

        $("#par6").hide();

        $("#icon6").click(function(){
          $('#par6').slideToggle('1000');

        });

        $("#par7").hide();

        $("#icon7").click(function(){
          $('#par7').slideToggle('1000');

        });

        $("#par8").hide();

        $("#icon8").click(function(){
          $('#par8').slideToggle('1000');

        });

        $("#par9").hide();

        $("#icon9").click(function(){
          $('#par9').slideToggle('1000');

        });

  
});
   