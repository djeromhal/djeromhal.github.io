
$(function(){
	// ГЛАВНАЯ КАРУСЕЛЬ 
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
	            items:1,
	        	center: false,
	        	margin: 5
	        },
	        768:{
	        	items: 2,
	        	center: false,
	        	margin: 5
	        },
	        1200:{
	        	items: 3,
	        	center: true,
	        	margin: 120
	        }
	    }
	})

	// ГАЛВНАЯ КАРУСЕЛЬ ТОВАРОВ
	var $mainProdCar = $('.main-products-carousel');
	var mainProdCarData = {
	    loop:false,
	    margin:10,
	    dots: false,
	    nav: true,
	    navText: [
	    			'<div class="main-products-arrow main-products-arrow-left"><img src="images/arrow-left.png"></div>', 
	    			'<div class="main-products-arrow main-products-arrow-right"><img src="images/arrow-right.png"></div>'
	    		],
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        768:{
	        	items: 2
	        },
	        1200:{
	        	items: 4
	        }
	    }
	}

	// if($(window).width() < 1200 && $(window).width() > 767){
	// 	$mainProdCar.on('initialize.owl.carousel', function(e){
	// 		$mainProdCar.find('.main-products-item').each(function(index) {
	// 		    if (index % 2 == 0) { // wrap by 2 items
	// 		    	$(this).add($(this).next('.main-products-item')).wrapAll('<div class="item__col" />');
	// 		    }
	// 		});
	// 	})
	// }
	$mainProdCar.owlCarousel(mainProdCarData);

	var flagRebuildMainProductCarDown = false;
	var flagRebuildMainProductCarUp = false;

	// $(window).on('resize', function(){
	// 	var w = $(this); //this = window
	// 	if (w.width() < 1200 && w.width() > 767 && !flagRebuildMainProductCarDown) {
	// 		$mainProdCar.owlCarousel('destroy');
	// 		$mainProdCar.on('initialize.owl.carousel', function(e){
	// 			$mainProdCar.find('.main-products-item').each(function(index) {
	// 			    if (index % 2 == 0) { // wrap by 2 items
	// 			    	$(this).add($(this).next('.main-products-item')).wrapAll('<div class="item__col" />');
	// 			    }
	// 			});
	// 		})
	// 		$mainProdCar.owlCarousel(mainProdCarData);

	// 		flagRebuildMainProductCarDown = true;
	// 		flagRebuildMainProductCarUp = false;
	// 	}else if((w.width() >= 1200 || w.width() <= 767) && !flagRebuildMainProductCarUp){
	// 		$mainProdCar.owlCarousel('destroy');
			
	// 		$mainProdCar.on('initialize.owl.carousel', function(e){
	// 			$mainProdCar.find('.item__col').contents().unwrap();
	// 		})
	// 		$mainProdCar.owlCarousel(mainProdCarData);

	// 		flagRebuildMainProductCarUp = true;
	// 		flagRebuildMainProductCarDown = false;

	// 	}
	// });

	// ГЛАВНАЯ КАРУСЕЛЬ ОТЗЫВОВ
	var $feedbackCarousel = $('.main-feedback-carousel');
	if(
		($(window).height() > 810 && $(window).width() > 767)
		){
		$feedbackCarousel.on('initialize.owl.carousel', function(e){
			$feedbackCarousel.find('.item').each(function(index){
			    if (index % 2 == 0) { // wrap by 2 items
			    	$(this).add($(this).next('.item')).wrapAll('<div class="item__col" />');
			    }
			});
		})
	}
	var feedbackCarouselData = {
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
	            items:1
	        },
	        768:{
	        	items:1
	        },
	        1200:{
	        	items:2
	        }
	    }
	}
	$feedbackCarousel.owlCarousel(feedbackCarouselData);

	var flagRebuildDown = false;
	var flagRebuildUp = false;
	$(window).on('resize', function(){
		var w = $(this); //this = window
		if ((w.width() < 768 || w.height() <= 810 && w.width() > 767) && !flagRebuildDown) {
			$feedbackCarousel.owlCarousel('destroy');
			$feedbackCarousel.on('initialize.owl.carousel', function(e){
				$feedbackCarousel.find('.item__col').contents().unwrap();
			})
			$feedbackCarousel.owlCarousel(feedbackCarouselData);

			flagRebuildDown = true;
			flagRebuildUp = false;
		}else if((w.height() > 810 && w.width() > 767) && !flagRebuildUp){
			$feedbackCarousel.owlCarousel('destroy');
			$feedbackCarousel.on('initialize.owl.carousel', function(e){
				$feedbackCarousel.find('.item').each(function(index) {
				    if (index % 2 == 0) { // wrap by 2 items
				    	$(this).add($(this).next('.item')).wrapAll('<div class="item__col" />');
				    }
				});
			})
			$feedbackCarousel.owlCarousel(feedbackCarouselData);

			flagRebuildUp = true;
			flagRebuildDown = false;

		}
	});

	// СТРАНИЦА КАТАЛОГА ТОВАРЫ
	var $productsCarousel2Rows = $('.products-carousel-2-rows');
	if(
		($(window).width() > 767)
		){
		$productsCarousel2Rows.on('initialize.owl.carousel', function(e){
			$productsCarousel2Rows.find('.products-item').each(function(index) {
			    if (index % 2 == 0) { // wrap by 2 items
			    	$(this).add($(this).next('.products-item')).wrapAll('<div class="item__col" />');
			    }
			});
		})
	}
	var productsCarousel2RowsData = {
	    loop:false,
	    margin:10,
	    dots: false,
	    nav: true,
	    navText: [
	    			'<div class="main-products-arrow main-products-arrow-left"><img src="images/arrow-left.png"></div>', 
	    			'<div class="main-products-arrow main-products-arrow-right"><img src="images/arrow-right.png"></div>'
	    		],
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        768:{
	        	items: 2
	        },
	        1200:{
	        	items: 4
	        }
	    }
	}
	$productsCarousel2Rows.owlCarousel(productsCarousel2RowsData);

	var flagCatalogInner2RowsRebuildDown = false;
	var flagCatalogInner2RowsRebuildUp = false;
	$(window).on('resize', function(){
		var w = $(this); //this = window
		if ((w.width() < 768) && !flagCatalogInner2RowsRebuildDown) {
			$productsCarousel2Rows.owlCarousel('destroy');
			$productsCarousel2Rows.on('initialize.owl.carousel', function(e){
				$productsCarousel2Rows.find('.item__col').contents().unwrap();
			})
			$productsCarousel2Rows.owlCarousel(productsCarousel2RowsData);

			flagCatalogInner2RowsRebuildDown = true;
			flagCatalogInner2RowsRebuildUp = false;
		}else if(w.width() > 767 && !flagCatalogInner2RowsRebuildUp){
			$productsCarousel2Rows.owlCarousel('destroy');
			$productsCarousel2Rows.on('initialize.owl.carousel', function(e){
				$productsCarousel2Rows.find('.products-item').each(function(index) {
				    if (index % 2 == 0) { // wrap by 2 items
				    	$(this).add($(this).next('.products-item')).wrapAll('<div class="item__col" />');
				    }
				});
			})
			$productsCarousel2Rows.owlCarousel(productsCarousel2RowsData);

			flagCatalogInner2RowsRebuildUp = true;
			flagCatalogInner2RowsRebuildDown = false;

		}
	});


	// ВНУТРЕННИЕ СТРАНИЦЫ ТОВАРЫ

	var $productsCarousel = $('.products-carousel');
	if(
		($(window).width() > 767 && $(window).width() < 1200)
		){
		$productsCarousel.on('initialize.owl.carousel', function(e){
			$productsCarousel.find('.products-item').each(function(index){
			    if (index % 2 == 0) { // wrap by 2 items
			    	$(this).add($(this).next('.products-item')).wrapAll('<div class="item__col" />');
			    }
			});
		})
	}
	var productsCarouselData = {
	    loop:false,
	    margin:10,
	    dots: false,
	    nav: false,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        767:{
	            items:2
	        },
	        1200:{
	            items:4
	        }
	    }
	}
	$productsCarousel.owlCarousel(productsCarouselData);

	var flagCatalogInnerRebuildDown = false;
	var flagCatalogInnerRebuildUp = false;
	$(window).on('resize', function(){
		var w = $(this); //this = window
		if ((w.width() < 768 || w.width() > 1199) && !flagCatalogInnerRebuildDown) {
			$productsCarousel.owlCarousel('destroy');
			$productsCarousel.on('initialize.owl.carousel', function(e){
				$productsCarousel.find('.item__col').contents().unwrap();
			})
			$productsCarousel.owlCarousel(productsCarouselData);

			flagCatalogInnerRebuildDown = true;
			flagCatalogInnerRebuildUp = false;
		}else if(w.width() > 767 && w.width() < 1200 && !flagCatalogInnerRebuildUp){
			$productsCarousel.owlCarousel('destroy');
			$productsCarousel.on('initialize.owl.carousel', function(e){
				$productsCarousel.find('.products-item').each(function(index) {
				    if (index % 2 == 0) { // wrap by 2 items
				    	$(this).add($(this).next('.products-item')).wrapAll('<div class="item__col" />');
				    }
				});
			})
			$productsCarousel.owlCarousel(productsCarouselData);

			flagCatalogInnerRebuildUp = true;
			flagCatalogInnerRebuildDown = false;

		}
	});





	// ВНУТРЕННИЕ БЛОКИ С ТАБАМИ
	$('.navs-item').on('click', function(e){
		e.preventDefault();

		var id = $(this).find('a').attr('href');

		$('.navs-item.active').removeClass('active');
		$('.navs-content-item.active').removeClass('active');

		$(this).addClass('active');
		$(id).addClass('active');

		$('.navs-inner').removeClass('show');
	})

	$('.navs-burger-mob').on('click', function(e){
		e.preventDefault();

		var p = $(this).closest('.navs');

		p.find('.navs-inner').toggleClass('show');

	})

	// ФИКСИРОВАННИЕ МЕНЮ ПРИ СКРОЛЕ

	var h = $('.header-top-line').outerHeight() + $('.header-top').outerHeight();

	if($(window).scrollTop() > h){
        $('.header-menu-line').addClass('fixed');
        $('.header-top-logo').addClass('fixed');
        // $('body').css({'padding-top':$('.header-menu-line').height()})
	}

	$(window).on('scroll', function(e){
		e.preventDefault();

		h = $('.header-top-line').outerHeight() + $('.header-top').outerHeight();

	    if ($(window).scrollTop() > h){
	        $('.header-menu-line').addClass('fixed');
	        $('.header-top-logo').addClass('fixed');
	        // $('body').css({'padding-top':$('.header-menu-line').height()})
	    } else {
	        $('.header-menu-line').removeClass('fixed');
	        $('.header-top-logo').removeClass('fixed');
	        // $('body').attr('style','');
	    }
	})

	// ЗАГЛУШКА ДЛЯ КНОПКИ

	$('.button').on('click', function(e){
		e.preventDefault();
		$('.modal').addClass('show');
	})
	$('.cross').on('click', function(e){
		e.preventDefault();
		$('.modal').removeClass('show');
	})

	var offset = 80;
	if($(window).width()<1199){
		offset = 40;
	}

	var scrollifyData = {
		section : ".main-section",
		offset: -(offset),
		scrollSpeed: 700,
		setHeights: true,
	    before:function(e) {
	    	console.log('before',e, this)
	    	if(e == 0){
	    		this.offset = 0;
	    	}else{
	    		this.offset = -offset;
	    	}
	    },
	    after:function(e) {
	    	console.log('after',e, this)
	    },
	    afterResize:function(e) {
	    	console.log('afterResize',e, this)
			if($(window).width()<1199){
				this.offset = -40;
			}else{
				this.offset = -80;
			}
	    },
	    afterRender:function(e) {
	    	console.log('afterRender',e, this)
	    }
	}

	if($(window).width()>767){
		$.scrollify(scrollifyData);
	}

	$(window).on('resize', function(){
		if($(this).width() < 768){
			$.scrollify.destroy();
		}else{
			$.scrollify(scrollifyData);
		}
	})
	// СТРАНИЦА ТОВАРА 
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
    responsive:{
    	0:{
    		margin: 2
    	},
    	767:{
    		margin: 5
    	}
    },
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