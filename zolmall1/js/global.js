//=include jquery.min.js
//=include ../bower_components/bootstrap/dist/js/bootstrap.min.js
//=include owl.carousel.min.js

$( document ).ready(function() {
	$('.main-slider').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:false,
	    responsive:{
	        0:{
	            items:1
	        }
	    }
	})

	$('.product-slider').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:false,
	    dots:false,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        768:{
	        	items:3
	        },
	        1300:{
	        	items:5
	        }
	    }
	})

	$('.mob-burger').click(function(){
		$('.main-menu-wrapper').toggle();
	})

	$('.show-sub-menu').click(function(e){
		e.preventDefault();

		var _this = $(this);
		var p = _this.closest('.parent');
		p.toggleClass('opened');
		p.find('ul').toggle();
	})
});