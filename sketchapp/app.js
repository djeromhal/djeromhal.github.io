$(function(){
	alert()
	// A Player built from a new DIV:
	const myNewPlayer = LivePhotosKit.Player();
	document.body.appendChild(myNewPlayer);
	// A Player built from a pre-existing element:
	LivePhotosKit.Player(document.querySelector('.livephoto'));

	$('.popup').swipe( {
	    swipeStatus:function(event, phase, direction, distance, duration, fingerCount, fingerData, currentDirection){
	        if (phase=="start"){
	            // сработает в начале swipe
	        } 
	        if (phase=="end"){ 
	            //сработает через 20 пикселей то число которое выбрали в threshold
	            if (direction == 'left') {
	                //сработает при движении влево
					var popup = $(this).closest('.popup');

					$('.flip-card-inner').removeClass('popup-active');
					popup.find('.popup-inner.active').removeClass('active');
	            }
	            if (direction == 'right') {
	                //сработает при движении вправо
	                console.log('right')
	            }
	            if (direction == 'up') {
	                //сработает при движении вверх
	                console.log('up')
	            }
	            if (direction == 'down') {
	                //сработает при движении вниз
	                console.log('down')
	            }
	 		}
	 	},
		triggerOnTouchEnd:false,
		threshold:20 // сработает через 20 пикселей
	
	});
	$('.call-form').click(function(e){
		$('.profile-form.active').removeClass('active');

		var id = $(this).data('href');
		$(id).addClass('active');
	})

	function getTimer(){
		return setTimeout(function(){
			$('.sidebar-main').addClass('hide');
		},3000);
	}

	document._timer = getTimer();
	
	document._mainRulerSliderTimer = setTimeout(function(){
		$('.main-slider-ruler').removeClass('show');
	},3000);

	$('.main-slider-wrapper').click(function(e){
		$('.sidebar-main').removeClass('hide');

		clearInterval(document._timer);
		document._timer = getTimer();

	})

	var tapped = false;
	$('.main-slider-item').on('touchstart',function(e){
		var _this = $(this);

	    if(!tapped){ //if tap is not set, set up single tap
	      	tapped=setTimeout(function(){
	          	tapped = null;
	          	//insert things you want to do when single tapped
	      	},300);   //wait 300ms then run single click code
	    } else {    //tapped within 300ms of last tap. double tap
			clearTimeout(tapped); //stop single tap callback
			tapped = null;
			//insert things you want to do when double tapped

			_this.find('.heart').remove();
			if(document._heartTimer){
				clearInterval(document._heartTimer);
			}
			_this.append('<div class="heart"></div>');

			document._heartTimer = setTimeout(function(){
				_this.find('.heart').remove();
			},1000);
			
	    }
	    e.preventDefault()
	})

	$('.brands-item').click(function(e){
		$(this).toggleClass('active');
	})
	$('.call-popup').click(function(e){
		var id = $(this).data('href');

		$(id).addClass('active');
		$('.flip-card-inner').addClass('popup-active');
	});

	$('.popup-close').click(function(e){
		var popup = $(this).closest('.popup');

		$('.flip-card-inner').removeClass('popup-active');
		popup.find('.popup-inner.active').removeClass('active');
	});


	// $(document).longpress(function(e){
	// 	e.preventDefault();
	// });
	document._mainSwiperSlideChangeCount = -1;
	var speed = 300;
    var touchMove_mainSwiper = false;
    var mainSwiper = new Swiper('#main-swiper', {
      speed: speed,
      slidesPerView: 'auto',
      spaceBetween: 0,
      direction: 'vertical',
      loop: true,
      on:{
      	slideChange: function(){
      		document._mainSwiperSlideChangeCount++;
      		clearInterval(document._mainSwiperSlideChangeTimer);
      		document._mainSwiperSlideChangeTimer = setTimeout(function(){
      			document._mainSwiperSlideChangeCount = -1;
				$('.main-slider-ruler').removeClass('show');
      		},3000)

      		if(document._mainSwiperSlideChangeCount >= 3){
				$('.main-slider-ruler').addClass('show');
      		}


      		console.log(document._mainSwiperSlideChangeCount)
      	},
      	sliderMove: function(e){
      		touchMove_mainSwiper = true;
      		// console.log('mainSwiper::touchMove',e)
      	},
      	touchStart: function(e){
      		// console.log('mainSwiper::touchStart',e)
      		$(e.target).closest('.main-slider-ruler').find('.swiper-top').addClass('touch');
		    mainSwiper.controller.control = mainSliderRulerBottom;
		    mainSliderRulerBottom.controller.control = mainSliderRulerTop;
      	},
      	touchEnd: function(e){
      		// console.log('mainSwiper::touchEnd',e)
      		if(!touchMove_mainSwiper){
			    mainSwiper.controller.control = undefined;
			    mainSliderRulerBottom.controller.control = undefined;
      		}
      		touchMove_mainSwiper = false;
      	},
      }
    });
    mainSwiper.on('slideChangeTransitionEnd',function(e){
      	console.log('mainSwiper::slideChangeTransitionEnd',e)
	    mainSwiper.controller.control = undefined;
	    mainSliderRulerBottom.controller.control = undefined;
    })

    var productSwiper = new Swiper('.product-swiper', {
      speed: speed,
      slidesPerView: 'auto',
      spaceBetween: 0,
      loop: true
    });

    var touchMove_mainSliderRulerTop = false;
    var mainSliderRulerTop = new Swiper('#main-slider-ruler-top', {
      speed: speed,
      slidesPerView: 'auto',
      direction: 'vertical',
      spaceBetween: 0,
      loop: true,
      centeredSlides: true,
      // allowTouchMove: false,
      on:{
      	sliderMove: function(e){
	      	touchMoveTimer(e, '.main-slider-ruler');
      		console.log('mainSliderRulerTop::touchMove',e)
      		$(e.target).closest('.main-slider-ruler').find('.swiper-top').addClass('move');
      		touchMove_mainSliderRulerTop = true;
      	},
      	touchStart: function(e){
      		console.log('mainSliderRulerTop::touchStart',e)
      		clearInterval(document._mainRulerSliderTimer);
      		$(e.target).closest('.main-slider-ruler').addClass('show').find('.swiper-top').addClass('touch');
		    mainSliderRulerTop.controller.control = mainSwiper;
		    mainSwiper.controller.control = mainSliderRulerBottom;
      	},
      	touchEnd: function(e){
      		console.log('mainSliderRulerTop::touchEnd',e)
      		$(e.target).closest('.main-slider-ruler').removeClass('show').find('.swiper-top').removeClass('touch move');

      		if(!touchMove_mainSliderRulerTop){
			    mainSliderRulerTop.controller.control = undefined;
			    mainSwiper.controller.control = undefined;
      		}
      		touchMove_mainSliderRulerTop = false;
      	},
      }
    });
    mainSliderRulerTop.on('slideChangeTransitionEnd',function(e){
      	console.log('mainSliderRulerTop::slideChangeTransitionEnd',e)
	    mainSliderRulerTop.controller.control = undefined;
	    mainSwiper.controller.control = undefined;
    })

    var touchMove_mainSliderRulerBottom = false;
    var mainSliderRulerBottom = new Swiper('#main-slider-ruler-bottom', {
      speed: speed,
      slidesPerView: 'auto',
      direction: 'vertical',
      spaceBetween: 0,
      loop: true,
      centeredSlides: true,
      on:{
      	sliderMove: function(e){
	      	touchMoveTimer(e, '.main-slider-ruler');
      		console.log('mainSliderRulerBottom::touchMove',e)
      		$(e.target).closest('.main-slider-ruler').find('.swiper-top').addClass('move');
      		touchMove_mainSliderRulerBottom = true;
      	},
      	touchStart: function(e){
      		console.log('mainSliderRulerBottom::touchStart',e)
      		clearInterval(document._mainRulerSliderTimer);
      		$(e.target).closest('.main-slider-ruler').addClass('show').find('.swiper-top').addClass('touch');
		    mainSliderRulerBottom.controller.control = mainSliderRulerTop;
		    mainSliderRulerTop.controller.control = mainSwiper;
      	},
      	touchEnd: function(e){
      		console.log('mainSliderRulerBottom::touchEnd',e)
      		$(e.target).closest('.main-slider-ruler').removeClass('show').find('.swiper-top').removeClass('touch move');

      		if(!touchMove_mainSliderRulerBottom){
			    mainSliderRulerBottom.controller.control = undefined;
			    mainSliderRulerTop.controller.control = undefined;
      		}
      		touchMove_mainSliderRulerBottom = false;
      	},
      }
    });
    mainSliderRulerBottom.on('slideChangeTransitionEnd',function(e){
      	console.log('mainSliderRulerBottom::slideChangeTransitionEnd',e)
	    mainSliderRulerBottom.controller.control = undefined;
	    mainSliderRulerTop.controller.control = undefined;
    })

    ///////
    $('.category-filter-call-popup').click(function(e){
	    var categoryRulerRightTop = new Swiper('#category-ruler-right-top', {
	      speed: speed,
	      slidesPerView: 'auto',
	      direction: 'vertical',
	      spaceBetween: 0,
	      loop: true,
	      centeredSlides: true,
	      // allowTouchMove: false,
	      on:{
	      	touchMove: function(e){
	      		touchMoveTimer(e, '.popup-form-ruler.right');
	      		$(e.target).closest('.popup-form-ruler.right').find('.swiper-top').addClass('move');
	      	},
	      	touchStart: function(e){
	      		$(e.target).closest('.popup-form-ruler.right').addClass('show').find('.swiper-top').addClass('touch');
	      	},
	      	touchEnd: function(e){
	      		$(e.target).closest('.popup-form-ruler.right').removeClass('show').find('.swiper-top').removeClass('touch move');
	      	},
	      }
	    });

	    var categoryRulerRightBottom = new Swiper('#category-ruler-right-bottom', {
	      speed: speed,
	      slidesPerView: 'auto',
	      direction: 'vertical',
	      spaceBetween: 0,
	      loop: true,
	      centeredSlides: true,
	      on:{
	      	touchMove: function(e){
	      		touchMoveTimer(e, '.popup-form-ruler.right');

	      		$(e.target).closest('.popup-form-ruler.right').find('.swiper-top').addClass('move');
	      	},
	      	touchStart: function(e){
	      		$(e.target).closest('.popup-form-ruler.right').addClass('show').find('.swiper-top').addClass('touch');
	      	},
	      	touchEnd: function(e){
	      		$(e.target).closest('.popup-form-ruler.right').removeClass('show').find('.swiper-top').removeClass('touch move');
	      	}
	      }
	    });
	    categoryRulerRightBottom.controller.control = categoryRulerRightTop;
	    categoryRulerRightTop.controller.control = categoryRulerRightBottom;

	    var categoryRulerLeftTop = new Swiper('#category-ruler-left-top', {
	      speed: speed,
	      slidesPerView: 'auto',
	      direction: 'vertical',
	      spaceBetween: 0,
	      loop: true,
	      centeredSlides: true,
	      // allowTouchMove: false,
	      on:{
	      	touchMove: function(e){
	      		touchMoveTimer(e, '.popup-form-ruler.left');
	      		$(e.target).closest('.popup-form-ruler.left').find('.swiper-top').addClass('move');
	      	},
	      	touchStart: function(e){
	      		console.log(e)
	      		$(e.target).closest('.popup-form-ruler.left').addClass('show').find('.swiper-top').addClass('touch');
	      	},
	      	touchEnd: function(e){
	      		$(e.target).closest('.popup-form-ruler.left').removeClass('show').find('.swiper-top').removeClass('touch move');
	      	},
	      }
	    });

	    var categoryRulerLeftBottom = new Swiper('#category-ruler-left-bottom', {
	      speed: speed,
	      slidesPerView: 'auto',
	      direction: 'vertical',
	      spaceBetween: 0,
	      loop: true,
	      centeredSlides: true,
	      on:{
	      	touchMove: function(e){
	      		touchMoveTimer(e, '.popup-form-ruler.left');
	      		$(e.target).closest('.popup-form-ruler.left').find('.swiper-top').addClass('move');
	      	},
	      	touchStart: function(e){
	      		$(e.target).closest('.popup-form-ruler.left').addClass('show').find('.swiper-top').addClass('touch');
	      	},
	      	touchEnd: function(e){
	      		$(e.target).closest('.popup-form-ruler.left').removeClass('show').find('.swiper-top').removeClass('touch move');
	      	}
	      }
	    });
	    categoryRulerLeftBottom.controller.control = categoryRulerLeftTop;
	    categoryRulerLeftTop.controller.control = categoryRulerLeftBottom;

    })
    /////
    ///////
    $('#card-call-popup').click(function(e){
	    var cardRulerSizeTop = new Swiper('#card-ruler-size-top', {
	      speed: speed,
	      slidesPerView: 'auto',
	      spaceBetween: 0,
	      loop: true,
	      centeredSlides: true,
	      // allowTouchMove: false,
	      on:{
	      	touchMove: function(e){
	      		touchMoveTimer(e, '.card-ruler');
	      		$(e.target).closest('.card-ruler').find('.swiper-top').addClass('move');
	      	},
	      	touchStart: function(e){
	      		console.log(e)
	      		$(e.target).closest('.card-ruler').addClass('show').find('.swiper-top').addClass('touch');
	      	},
	      	touchEnd: function(e){
	      		$(e.target).closest('.card-ruler').removeClass('show').find('.swiper-top').removeClass('touch move');
	      	},
	      }
	    });

	    var cardRulerSizeBottom = new Swiper('#card-ruler-size-bottom', {
	      speed: speed,
	      slidesPerView: 'auto',
	      spaceBetween: 0,
	      loop: true,
	      centeredSlides: true,
	      on:{
	      	touchMove: function(e){
	      		touchMoveTimer(e, '.card-ruler');
	      		$(e.target).closest('.card-ruler').find('.swiper-top').addClass('move');
	      	},
	      	touchStart: function(e){
	      		$(e.target).closest('.card-ruler').addClass('show').find('.swiper-top').addClass('touch');
	      	},
	      	touchEnd: function(e){
	      		$(e.target).closest('.card-ruler').removeClass('show').find('.swiper-top').removeClass('touch move');
	      	}
	      }
	    });
	    cardRulerSizeBottom.controller.control = cardRulerSizeTop;
	    cardRulerSizeTop.controller.control = cardRulerSizeBottom;

	    var cardRulerColorTop = new Swiper('#card-ruler-color-top', {
	      speed: speed,
	      slidesPerView: 'auto',
	      spaceBetween: 0,
	      loop: true,
	      centeredSlides: true,
	      // allowTouchMove: false,
	      on:{
	      	touchMove: function(e){
	      		touchMoveTimer(e, '.card-ruler');
	      		$(e.target).closest('.card-ruler').find('.swiper-top').addClass('move');
	      	},
	      	touchStart: function(e){
	      		console.log(e)
	      		$(e.target).closest('.card-ruler').addClass('show').find('.swiper-top').addClass('touch');
	      	},
	      	touchEnd: function(e){
	      		$(e.target).closest('.card-ruler').removeClass('show').find('.swiper-top').removeClass('touch move');
	      	},
	      }
	    });

	    var cardRulerColorBottom = new Swiper('#card-ruler-color-bottom', {
	      speed: speed,
	      slidesPerView: 'auto',
	      spaceBetween: 0,
	      loop: true,
	      centeredSlides: true,
	      on:{
	      	touchMove: function(e){
	      		touchMoveTimer(e, '.card-ruler');
	      		$(e.target).closest('.card-ruler').find('.swiper-top').addClass('move');
	      	},
	      	touchStart: function(e){
	      		$(e.target).closest('.card-ruler').addClass('show').find('.swiper-top').addClass('touch');
	      	},
	      	touchEnd: function(e){
	      		$(e.target).closest('.card-ruler').removeClass('show').find('.swiper-top').removeClass('touch move');
	      	}
	      }
	    });
	    cardRulerColorBottom.controller.control = cardRulerColorTop;
	    cardRulerColorTop.controller.control = cardRulerColorBottom;

    })
    /////
    ///////
    $('#filtr-call-popup').click(function(e){
	    var filtrRulerSizeTop = new Swiper('#filtr-ruler-size-top', {
	      speed: speed,
	      slidesPerView: 'auto',
	      spaceBetween: 0,
	      loop: true,
	      centeredSlides: true,
	      // allowTouchMove: false,
	      on:{
	      	touchMove: function(e){
	      		touchMoveTimer(e, '.filtr-ruler');
	      		$(e.target).closest('.filtr-ruler').find('.swiper-top').addClass('move');
	      	},
	      	touchStart: function(e){
	      		console.log(e)
	      		$(e.target).closest('.filtr-ruler').addClass('show').find('.swiper-top').addClass('touch');
	      	},
	      	touchEnd: function(e){
	      		$(e.target).closest('.filtr-ruler').removeClass('show').find('.swiper-top').removeClass('touch move');
	      	},
	      }
	    });

	    var filtrRulerSizeBottom = new Swiper('#filtr-ruler-size-bottom', {
	      speed: speed,
	      slidesPerView: 'auto',
	      spaceBetween: 0,
	      loop: true,
	      centeredSlides: true,
	      on:{
	      	touchMove: function(e){
	      		touchMoveTimer(e, '.filtr-ruler');
	      		$(e.target).closest('.filtr-ruler').find('.swiper-top').addClass('move');
	      	},
	      	touchStart: function(e){
	      		$(e.target).closest('.filtr-ruler').addClass('show').find('.swiper-top').addClass('touch');
	      	},
	      	touchEnd: function(e){
	      		$(e.target).closest('.filtr-ruler').removeClass('show').find('.swiper-top').removeClass('touch move');
	      	}
	      }
	    });
	    filtrRulerSizeBottom.controller.control = filtrRulerSizeTop;
	    filtrRulerSizeTop.controller.control = filtrRulerSizeBottom;

	    var filtrRulerColorTop = new Swiper('#filtr-ruler-color-top', {
	      speed: speed,
	      slidesPerView: 'auto',
	      spaceBetween: 0,
	      loop: true,
	      centeredSlides: true,
	      // allowTouchMove: false,
	      on:{
	      	touchMove: function(e){
	      		touchMoveTimer(e, '.filtr-ruler');
	      		$(e.target).closest('.filtr-ruler').find('.swiper-top').addClass('move');
	      	},
	      	touchStart: function(e){
	      		console.log(e)
	      		$(e.target).closest('.filtr-ruler').addClass('show').find('.swiper-top').addClass('touch');
	      	},
	      	touchEnd: function(e){
	      		$(e.target).closest('.filtr-ruler').removeClass('show').find('.swiper-top').removeClass('touch move');
	      	},
	      }
	    });

	    var filtrRulerColorBottom = new Swiper('#filtr-ruler-color-bottom', {
	      speed: speed,
	      slidesPerView: 'auto',
	      spaceBetween: 0,
	      loop: true,
	      centeredSlides: true,
	      on:{
	      	touchMove: function(e){
	      		touchMoveTimer(e, '.filtr-ruler');
	      		$(e.target).closest('.filtr-ruler').find('.swiper-top').addClass('move');
	      	},
	      	touchStart: function(e){
	      		$(e.target).closest('.filtr-ruler').addClass('show').find('.swiper-top').addClass('touch');
	      	},
	      	touchEnd: function(e){
	      		$(e.target).closest('.filtr-ruler').removeClass('show').find('.swiper-top').removeClass('touch move');
	      	}
	      }
	    });
	    filtrRulerColorBottom.controller.control = filtrRulerColorTop;
	    filtrRulerColorTop.controller.control = filtrRulerColorBottom;

	    var filtrRulerCatTop = new Swiper('#filtr-ruler-cat-top', {
	      speed: speed,
	      slidesPerView: 'auto',
	      spaceBetween: 0,
	      loop: true,
	      centeredSlides: true,
	      // allowTouchMove: false,
	      on:{
	      	touchMove: function(e){
	      		touchMoveTimer(e, '.filtr-ruler');
	      		$(e.target).closest('.filtr-ruler').find('.swiper-top').addClass('move');
	      	},
	      	touchStart: function(e){
	      		console.log(e)
	      		$(e.target).closest('.filtr-ruler').addClass('show').find('.swiper-top').addClass('touch');
	      	},
	      	touchEnd: function(e){
	      		$(e.target).closest('.filtr-ruler').removeClass('show').find('.swiper-top').removeClass('touch move');
	      	},
	      }
	    });

	    var filtrRulerCatBottom = new Swiper('#filtr-ruler-cat-bottom', {
	      speed: speed,
	      slidesPerView: 'auto',
	      spaceBetween: 0,
	      loop: true,
	      centeredSlides: true,
	      on:{
	      	touchMove: function(e){
	      		touchMoveTimer(e, '.filtr-ruler');
	      		$(e.target).closest('.filtr-ruler').find('.swiper-top').addClass('move');
	      	},
	      	touchStart: function(e){
	      		$(e.target).closest('.filtr-ruler').addClass('show').find('.swiper-top').addClass('touch');
	      	},
	      	touchEnd: function(e){
	      		$(e.target).closest('.filtr-ruler').removeClass('show').find('.swiper-top').removeClass('touch move');
	      	}
	      }
	    });
	    filtrRulerCatBottom.controller.control = filtrRulerCatTop;
	    filtrRulerCatTop.controller.control = filtrRulerCatBottom;

    })
    /////
    ///////
    var basketSwiper;
    $('#basket-call-popup').click(function(e){
	    basketSwiper = new Swiper('#basket-swiper', {
	      speed: speed,
	      slidesPerView: 1,
	      spaceBetween: 0,
	      loop: false,
	      centeredSlides: true,
	      allowTouchMove: false,
	    });
	    var basketItemSwiper = new Swiper('.basket-item-swiper', {
	      speed: speed,
	      slidesPerView: 'auto',
	      spaceBetween: 0,
	      loop: false,
	      centeredSlides: false,
	      // allowTouchMove: false,
	    });
    })
    $('#call-form-favorites-form').click(function(e){
	    var basketItemSwiper = new Swiper('.fav-item-swiper', {
	      speed: speed,
	      slidesPerView: 'auto',
	      spaceBetween: 0,
	      loop: false,
	      centeredSlides: false,
	      // allowTouchMove: false,
	    });
    })

    $('.basket-item-delete').click(function(e){
    	$(this).closest('.basket-item').remove();
    })
    $('.basket-next-step').click(function(e){
    	e.preventDefault();
    	basketSwiper.slideNext(speed);
    })
    /////
    ///////
    var ordersSwiper;
    $('#call-form-orders-form').click(function(e){
	    ordersSwiper = new Swiper('#orders-swiper', {
	      speed: speed,
	      slidesPerView: 1,
	      spaceBetween: 0,
	      loop: false,
	      centeredSlides: true,
	      allowTouchMove: false,
	    });
    })

    $('.orders-item').click(function(e){
    	e.preventDefault();
    	ordersSwiper.slideNext(speed);

    	$('.orders-prev-step').removeClass('hide');
    })
    $('.orders-prev-step').click(function(e){
    	e.preventDefault();
    	$(this).addClass('hide');
    	ordersSwiper.slidePrev(speed);
    })
    /////
    
})

var touchMoveTimer = function(e, className){
	clearInterval(document._touchMoveTimer);
	var touchMoveTimer = setTimeout(function(){
		$(e.target).closest(className).find('.swiper-top').removeClass('move');
	},50);
	document._touchMoveTimer = touchMoveTimer;
}