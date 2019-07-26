$(function(){
	// alert()
	var mainCarousel = $('.main-carousel');
	mainCarousel.owlCarousel({
	    loop:true,
	    margin:20,
	    dots: true,
	    // nav: true,
	    // navContainer: '.container',
	    // navText: [
	    // 			'<div class="main-carousel-arrow main-carousel-arrow-left"></div>', 
	    // 			'<div class="main-carousel-arrow main-carousel-arrow-right"></div>'
	    // 		],
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1
	        }
	    }
	});

	$('.main-carousel-arrow-left').on('click',function(e){
		mainCarousel.trigger('prev.owl.carousel');
	});
	$('.main-carousel-arrow-right').on('click',function(e){
		mainCarousel.trigger('next.owl.carousel');
	});
})
