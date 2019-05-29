
$(function(){
	$('.main-gallery-carousel').owlCarousel({
	    loop:true,
	    margin:120,
	    dots: false,
	    nav: true,
  		center: true,
  		autoWidth: false,
	    navText: [
	    			'<div class="main-gallery-arrow main-gallery-arrow-left"><img src="images/arrow-left.png"></div>', 
	    			'<div class="main-gallery-arrow main-gallery-arrow-right"><img src="images/arrow-right.png"></div>'
	    		],
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:3
	        }
	    }
	})
	$('.main-products-carousel').owlCarousel({
	    loop:false,
	    margin:10,
	    dots: false,
	    nav: false,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:4
	        }
	    }
	})
	var $feedbackCarousel = $('.main-feedback-carousel');
	$feedbackCarousel.on('initialize.owl.carousel', function(e){
		$feedbackCarousel.find('.item').each(function(index) {
		    if (index % 2 == 0) { // wrap by 2 items
		    	$(this).add($(this).next('.item')).wrapAll('<div class="item__col" />');
		    }
		});
	})

	$feedbackCarousel.owlCarousel({
	    loop:false,
	    margin:10,
	    dots: false,
	    nav: true,
	    navText: [
	    			'<div class="main-feedback-arrow main-feedback-arrow-left"><img src="images/arrow-left.png"></div>', 
	    			'<div class="main-feedback-arrow main-feedback-arrow-right"><img src="images/arrow-right.png"></div>'
	    		],
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:2
	        }
	    }
	})

	var $productsCarousel2Rows = $('.products-carousel-2-rows');
	$productsCarousel2Rows.on('initialize.owl.carousel', function(e){
		$productsCarousel2Rows.find('.products-item').each(function(index) {
		    if (index % 2 == 0) { // wrap by 2 items
		    	$(this).add($(this).next('.products-item')).wrapAll('<div class="item__col" />');
		    }
		});
	})

	$productsCarousel2Rows.owlCarousel({
	    loop:false,
	    margin:10,
	    dots: false,
	    nav: true,
	    navText: [
	    			'<div class="main-feedback-arrow main-feedback-arrow-left"><img src="images/arrow-left.png"></div>', 
	    			'<div class="main-feedback-arrow main-feedback-arrow-right"><img src="images/arrow-right.png"></div>'
	    		],
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:4
	        }
	    }
	})


	$('.products-carousel').owlCarousel({
	    loop:false,
	    margin:10,
	    dots: false,
	    nav: false,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:4
	        }
	    }
	})

	$('.navs-item-link').on('click', function(e){
		e.preventDefault();

		var id = $(this).attr('href');

		$('.navs-item-link.active').removeClass('active');
		$('.navs-content-item.active').removeClass('active');

		$(this).addClass('active');
		$(id).addClass('active');
	})

  var bigimage = $("#product-big-img");
  var thumbs = $("#product-thumbs");
  //var totalslides = 10;
  var syncedSecondary = true;

  bigimage
    .owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: false,
    autoplay: false,
    dots: false,
    loop: true,
    responsiveRefreshRate: 200,
  })
    .on("changed.owl.carousel", syncPosition);

  thumbs
    .on("initialized.owl.carousel", function() {
    thumbs
      .find(".owl-item")
      .eq(0)
      .addClass("current");
  })
    .owlCarousel({
    items: 4,
    dots: false,
    margin: 10,
    nav: true,
    navText: [
		'<div class="product-arrow product-arrow-left"><img src="images/arrow-left.png"></div>', 
		'<div class="product-arrow product-arrow-right"><img src="images/arrow-right.png"></div>'
    ],
    slideBy: 4,
    responsiveRefreshRate: 100
  })
    .on("change.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    //var current = el.item.index;

    //to disable loop, comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    //to this
    thumbs
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs
    .find(".owl-item.active")
    .first()
    .index();
    var end = thumbs
    .find(".owl-item.active")
    .last()
    .index();

    if (current > end) {
      thumbs.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage.data("owl.carousel").to(number, 100, true);
    }
  }

  thumbs.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
  });

});