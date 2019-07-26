$(function(e){
	$('.ruler-slider').on( "swipe", function( e, ui ) {
		console.log(e,ui)
	});
	// $('.ruler-slider').on( "swiperight", function( e, ui ) {
	// 	console.log(e,ui)
	// });
	$('.owl-carousel').owlCarousel({
	    margin:0,
	    nav: false,
	    dots: false,
	    loop: true,
	    // center: true, 
	    responsiveClass:true,
	    autoWidth: true,
	    responsive:{
	        0:{
	            items:9
	        }
	    }
	})
})