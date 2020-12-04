!function ($) {
    'use strict';

    this.addEventListener('scroll', function () {
        var winTop = this.document.documentElement.scrollTop || this.document.body.scrollTop,
            $allCont = $('.p_anim'),
            $allFade = $('.p_fade'),
            $allSlide = $('.p_slide'),
            // $wrapper = $('.wrapper'),
            lastScrollTop = 0;

        //below code for continuous come-in fade-in and slide-up animation on scroll

        $allCont.each(function (i, el) {
            var el = $(el);

            if (winTop >= lastScrollTop) {
                if (el.hasClass('c_r')) {
                    if (winTop >= (el.offset().top - window.innerHeight + 250)) {
                        setTimeout(function () {
                            el.removeClass("passive").addClass("come-in");
                        }, 10);
                    }
                } else if (el.hasClass('c_r_mob')) {
                    if (winTop >= (el.offset().top - window.innerHeight + 50)) {
                        setTimeout(function () {
                            el.removeClass("passive").addClass("come-in");
                        }, 10);
                    }
                } else {
                    if (winTop >= (el.offset().top - window.innerHeight - 55)) {
                            el.removeClass("passive").addClass("come-in");
                    }
                    // else {
                    //     el.removeClass("come-in").addClass("passive");
                    // }
                }
            } else {
                if (winTop >= (el.offset().top - window.innerHeight)) {
                    el.removeClass("passive").addClass("come-in");
                }
                // else {
                //     el.removeClass("come-in").addClass("passive");
                // }
            }

            if (
                el.prop('id') === 'process' &&
                el.hasClass('come-in') &&
                !el.hasClass('animated')
            ) {
                el.addClass('animated')
                    .find('.progress_bar_info').each(function (i) {
                        var a = this;

                        setTimeout(function () {
                            $(a).addClass('active');
                        }, i * 1000);
                    });
            }
        });

        $allFade.each(function (i, el) {
            var el = $(el);

            if (winTop >= lastScrollTop) {

                if (winTop >= (el.offset().top - window.innerHeight - 55)) {
                    el.removeClass("passive").addClass("fade-in");
                }
                // else {
                //     el.removeClass("fade-in").addClass("passive");
                // }

            } else {
                if (winTop >= (el.offset().top - window.innerHeight)) {
                    el.removeClass("passive").addClass("fade-in");
                }
                // else {
                //     el.removeClass("fade-in").addClass("passive");
                // }
            }
        });

        $allSlide.each(function (i, el) {
            var el = $(el);

            if (winTop >= lastScrollTop) {

                if (winTop >= (el.offset().top - window.innerHeight - 25)) {
                    el.removeClass("passive").addClass("slide-up");
                }
                // else {
                //     el.removeClass("slide-up").addClass("passive");
                // }

            } else {
                if (winTop >= (el.offset().top - window.innerHeight)) {
                    el.removeClass("passive").addClass("slide-up");
                }
                // else {
                //     el.removeClass("slide-up").addClass("passive");
                // }
            }
        });

        lastScrollTop = winTop;

    }, {
        passive: true
    });


    document.addEventListener('scroll', function () {
        var wTop = document.documentElement.scrollTop || document.body.scrollTop,
            headerHideHeight = 230,
            $header = $('header'),
            oldScroll = 0;

        //up
        if (wTop <= headerHideHeight - 150) {
            $header.removeClass('scrolled').removeClass('hidden');
        } else if (wTop > oldScroll) {
            $header.addClass('scrolled').removeClass('hidden');
            console.log("acrolled");
        } else if (wTop < oldScroll) {
            $header.addClass('hidden').removeClass('scrolled');
        }
        oldScroll = wTop;
    }, { passive: true });

    // write code here
    $(document).ready(function(){


		$("html, body").animate({ scrollTop: 0 }, 600);

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

	    $('.clientsays').slick({
	        dots: false,
	        infinite: true,
	        speed: 300,
	        slidesToShow: 1,
	        arrows: false,
	        autoplay: true,
	        slidesToScroll: 1,
	        autoplaySpeed: 2000
	    });

	});

	function makeTimer() {

	//		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
		var endTime = new Date("05 December 2020 9:56:00 GMT+01:00");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			// $("#days").html(days + "<span>Days</span>");
			$("#hours").html(hours + "<span>Hours</span>");
			$("#minutes").html(minutes + "<span>Minutes</span>");
			$("#seconds").html(seconds + "<span>Seconds</span>");		

	}

	setInterval(function() { makeTimer(); }, 1000);

}.call(window, window.jQuery);