!function ($) {
    'use strict';

    // write code here
    $(document).ready(function(){
    	
	    $('.carousel-Slider').slick({
	        dots: true,
	        infinite: true,
	        speed: 300,
	        slidesToShow: 1,
	        arrows: false,
	        autoplay: true,
	        slidesToScroll: 1,
	        autoplaySpeed: 2000
	    });
	    
	});

}.call(window, window.jQuery);