$(function(e){
	// $('.ruler-slider').on( "swipe", function( e, ui ) {
	// 	console.log(e,ui)
	// });
	// $('.ruler-slider').on( "swiperight", function( e, ui ) {
	// 	console.log(e,ui)
	// });
	// $('.owl-carousel').owlCarousel({
	//     // margin:0,
	//     nav: false,
	//     dots: false,
	//     loop: true,
	//     center: true, 
	//     responsiveClass:true,
	//     // autoWidth: true,
	//     // items: 8
	//     // responsive:{
	//     //     0:{
	//     //         items:8
	//     //     }
	//     // }
	// })
	$('.slick').slick({
		dots: false,
		navs: false,
		infinite: true,
		speed: 100,
		slidesToShow: 9,
		adaptiveHeight: false,
  		variableWidth: true,
  		centerMode: true,
  		// cssEase: 'linear'
  		// rtl: true	
	});

})
// $(document).ready(function() {
// 	var sync1 = $(".sync1");
// 	var sync2 = $(".sync2");

// 	var slidesPerPage = 9; //globaly define number of elements per page
// 	var syncedSecondary = true;

//   	sync1.owlCarousel({
//   		margin: 0,
// 	    autoWidth: true,
// 	    items : 1,
// 	    slideSpeed : 100,
// 	    nav: false,
// 	    autoplay: false,
// 	    dots: false,
// 	    loop: true,
// 	    responsiveRefreshRate : 200
// 	}).on('changed.owl.carousel', syncPosition);

//   	sync2.on('initialized.owl.carousel', function () {
//       sync2.find(".owl-item").eq(0).addClass("current");
//     })
//     .owlCarousel({
// 	margin: 0,
// 	autoWidth: true,
// 	loop: true,
//     items : slidesPerPage,
//     dots: false,
//     nav: false,
//     smartSpeed: 200,
//     slideSpeed : 500,
//     slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
//     responsiveRefreshRate : 100
//   }).on('changed.owl.carousel', syncPosition2);

//   function syncPosition(el) {
//     //if you set loop to false, you have to restore this next line
//     //var current = el.item.index;
    
//     //if you disable loop you have to comment this block
//     var count = el.item.count-1;
//     var current = Math.round(el.item.index - (el.item.count/2) - .5);
    
//     if(current < 0) {
//       current = count;
//     }
//     if(current > count) {
//       current = 0;
//     }
    
//     //end block

//     sync2
//       .find(".owl-item")
//       .removeClass("current")
//       .eq(current)
//       .addClass("current");
//     var onscreen = sync2.find('.owl-item.active').length - 1;
//     var start = sync2.find('.owl-item.active').first().index();
//     var end = sync2.find('.owl-item.active').last().index();
    
//     if (current > end) {
//       sync2.data('owl.carousel').to(current, 100, true);
//     }
//     if (current < start) {
//       sync2.data('owl.carousel').to(current - onscreen, 100, true);
//     }
//   }
  
//   function syncPosition2(el) {
//     if(syncedSecondary) {
//       var number = el.item.index;
//       sync1.data('owl.carousel').to(number, 100, true);
//     }
//   }
  
// });