$(function(){
	$('.main-feedback-carousel').owlCarousel({
		navText: ['<div class="main-feedback-carousel-arrow left"></div>','<div class="main-feedback-carousel-arrow right"></div>'],
		
		loop:true,
	    margin:0,
		items:1,
	    responsiveClass:true,
	    responsive:{
	        0:{
	        	dots: true,
				nav: false
	        },
	        992:{
	        	dots: false,
				nav: true
	        }
	    }
	})

	$('.show-mob-menu').on('click', function(e){
		$('.header-menu').toggleClass('shown');
		$('.menu-overlay').toggleClass('shown');
	})

	$('.scroll-to-bottom').on('click', function(e){
		e.preventDefault();
		var id = $(this).attr('href');
		
	    $('html,body').animate({
	        scrollTop: $(id).offset().top
	    }, 500);
	})
})