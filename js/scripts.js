


(function ($) {
    'use strict';

    jQuery(document).ready(function () {

        
       /* Preloader */
		
        $(window).load(function () {
            $('.preloader').delay(800).fadeOut('slow');
        });
		
		
       /* Smooth Scroll */

        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });
		


       
       /* Scroll Naviagation Background Change with Sticky Navigation */
		 
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('.header-top-area').addClass('navigation-background');
            } else {
                $('.header-top-area').removeClass('navigation-background');
            }
        });
		
		
		
		
       /* Mobile Navigation Hide or Collapse on Click */
		
        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        
		 });
		
		
       
       /* Scroll To Top */
		
        $(window).scroll(function(){
        if ($(this).scrollTop() >= 700) {
            $('.scroll-to-top').fadeIn();
         } else {
            $('.scroll-to-top').fadeOut();
         }
	   });
	
	
        $('.scroll-to-top').click(function(){
          $('html, body').animate({scrollTop : 0},800);
          return false;
         });
		
       
	   
     

		
        /* Ajaxchimp for Subscribe Form */
		
        $('#mc-form').ajaxChimp();
		


        /* 3D Hover */
        
        $(".3d-hover").hover3d({
           selector: ".hover-effect-3d",
           sensitivity: 5
        });
		       
		   
        });

   })(jQuery);