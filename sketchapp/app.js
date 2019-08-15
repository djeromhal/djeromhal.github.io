$(function(){
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


	$(document).longpress(function(e){
		e.preventDefault();
	});

	var speed = 300;
    var touchMove_mainSwiper = false;
    var mainSwiper = new Swiper('#main-swiper', {
      speed: speed,
      slidesPerView: 'auto',
      spaceBetween: 0,
      direction: 'vertical',
      loop: true,
      on:{
      	touchMove: function(e){
      		touchMove_mainSwiper = true;
      	},
      	touchStart: function(e){
      		console.log(e)
      		$(e.target).closest('.main-slider-ruler').find('.swiper-top').addClass('touch');
		    mainSwiper.controller.control = mainSliderRulerBottom;
		    mainSliderRulerBottom.controller.control = mainSliderRulerTop;
      	},
      	touchEnd: function(e){
      		if(!touchMove_mainSwiper){
			    mainSwiper.controller.control = undefined;
			    mainSliderRulerBottom.controller.control = undefined;
      		}
      		touchMove_mainSwiper = false;
      	},
      }
    });
    mainSwiper.on('slideChangeTransitionEnd',function(e){
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
      	touchMove: function(e){
      		$(e.target).closest('.main-slider-ruler').find('.swiper-top').addClass('move');
      		touchMove_mainSliderRulerTop = true;
      	},
      	touchStart: function(e){
      		console.log(e)
      		$(e.target).closest('.main-slider-ruler').addClass('show').find('.swiper-top').addClass('touch');
		    mainSliderRulerTop.controller.control = mainSwiper;
		    mainSwiper.controller.control = mainSliderRulerBottom;
      	},
      	touchEnd: function(e){
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
      	touchMove: function(e){
      		$(e.target).closest('.main-slider-ruler').find('.swiper-top').addClass('move');
      		touchMove_mainSliderRulerBottom = true;
      	},
      	touchStart: function(e){
      		$(e.target).closest('.main-slider-ruler').addClass('show').find('.swiper-top').addClass('touch');
		    mainSliderRulerBottom.controller.control = mainSliderRulerTop;
		    mainSliderRulerTop.controller.control = mainSwiper;
      	},
      	touchEnd: function(e){
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
	      		$(e.target).closest('.popup-form-ruler.right').find('.swiper-top').addClass('move');
	      	},
	      	touchStart: function(e){
	      		console.log(e)
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
    $('#basket-call-popup').click(function(e){
	    var basketSwiper = new Swiper('#basket-swiper', {
	      speed: speed,
	      slidesPerView: 1,
	      spaceBetween: 0,
	      loop: false,
	      centeredSlides: true,
	      // allowTouchMove: false,
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
    $('.basket-item-delete').click(function(e){
    	$(this).closest('.basket-item').remove();
    })
    /////
    

    var swiper1 = new Swiper('.swiper1', {
      speed: speed,
      slidesPerView: 'auto',
      spaceBetween: 0,
      // freeMode: true,
      // freeModeSticky: true,
      // freeModeMomentumRatio: 1,
      // freeModeMomentumVelocityRatio: 0.3,
      // freeModeMomentumBounce: false,
      loop: true,
      centeredSlides: true,
      on:{
      	touchMove: function(e){
      		$(e.target).closest('.ruler-slider').find('.swiper-top').addClass('move');
      	},
      	touchStart: function(e){
      		console.log(e)
      		$(e.target).closest('.ruler-slider').find('.swiper-top').addClass('touch');
      	},
      	touchEnd: function(e){
      		$(e.target).closest('.ruler-slider').find('.swiper-top').removeClass('touch move');
      	},
      }
    });
    var swiper2 = new Swiper('.swiper2', {
      speed: speed,
      slidesPerView: 'auto',
      spaceBetween: 0,
      // freeMode: true,
      // freeModeSticky: true,
      // freeModeMomentumRatio: 1,
      // freeModeMomentumVelocityRatio: 0.3,
      // freeModeMomentumBounce: false,
      loop: true,
      centeredSlides: true,
      // effect: 'coverflow',
      on:{
      	touchMove: function(e){
      		$(e.target).closest('.ruler-slider').find('.swiper-top').addClass('move');
      	},
      	touchStart: function(e){
      		$(e.target).closest('.ruler-slider').find('.swiper-top').addClass('touch');
      	},
      	touchEnd: function(e){
      		$(e.target).closest('.ruler-slider').find('.swiper-top').removeClass('touch move');
      	},
      }
    });
    if(swiper1.$el !== undefined){
	    swiper1.controller.control = swiper2;
	    swiper2.controller.control = swiper1;
    }


    var swiper3 = new Swiper('.swiper3', {
      speed: speed,
      slidesPerView: 'auto',
      spaceBetween: 0,
      // freeMode: true,
      // freeModeSticky: true,
      // freeModeMomentumRatio: 1,
      // freeModeMomentumVelocityRatio: 0.3,
      // freeModeMomentumBounce: false,
      // freeModeMinimumVelocity: 1,
      // effect: 'fade',
      loop: true,
      centeredSlides: true,
      // allowTouchMove: false,
      // slideClass: 'swiper-slide slide-hidden',
      // slideActiveClass: 'swiper-slide swiper-slide-active slide-visible',
      // slideNextClass: 'swiper-slide swiper-slide-next slide-visible',
      // slidePrevClass: 'swiper-slide swiper-slide-prev slide-visible',
      // on:{
      // 	touchMove: function(e){
      // 		$(e.target).closest('.ruler-slider').find('.swiper-top').addClass('move');
      // 	},
      // 	touchStart: function(e){
      // 		$(e.target).closest('.ruler-slider').find('.swiper-top').addClass('touch');
      // 	},
      // 	touchEnd: function(e){
      // 		$(e.target).closest('.ruler-slider').find('.swiper-top').removeClass('touch move');
      // 	},
      // 	slideChange: function(e, i){
			// swiper3.slideTo(swiper4.realIndex,speed,false );
      // 	}
      // }
    });
    var swiper4 = new Swiper('.swiper4', {
      speed: speed,
      slidesPerView: 'auto',
      spaceBetween: 0,
      // freeMode: true,
      // freeModeSticky: true,
      // freeModeMomentumRatio: 1,
      // freeModeMomentumVelocityRatio: 0.3,
      // freeModeMomentumBounce: false,
      loop: true,
      centeredSlides: true,
      // effect: 'coverflow',
      on:{
      	touchMove: function(e){
      		$(e.target).closest('.ruler-slider').find('.swiper-top').addClass('move');
      	},
      	touchStart: function(e){
      		$(e.target).closest('.ruler-slider').find('.swiper-top').addClass('touch');
      	},
      	touchEnd: function(e){
      		// console.log(e)
      		$(e.target).closest('.ruler-slider').find('.swiper-top').removeClass('touch move');
      	},
      	slideNextTransitionStart: function(e, i){
      		console.log(e, i)
			// swiper3.slideToLoop(this.realIndex,speed,false );
      	}
      }
    });
    if(swiper3.$el !== undefined){
	    swiper3.controller.control = swiper4;
	    swiper4.controller.control = swiper3;
	}


    var swiper5 = new Swiper('.swiper5', {
      speed: speed,
      slidesPerView: 'auto',
      spaceBetween: 0,
      // freeMode: true,
      // freeModeSticky: true,
      // freeModeMomentumRatio: 1,
      // freeModeMomentumVelocityRatio: 0.3,
      // freeModeMomentumBounce: false,
      loop: true,
      centeredSlides: true,
      on:{
      	touchMove: function(e){
      		$(e.target).closest('.ruler-slider').find('.swiper-top').addClass('move');
      	},
      	touchStart: function(e){
      		$(e.target).closest('.ruler-slider').find('.swiper-top').addClass('touch');
      	},
      	touchEnd: function(e){
      		$(e.target).closest('.ruler-slider').find('.swiper-top').removeClass('touch move');
      	},
      }
    });
    var swiper6 = new Swiper('.swiper6', {
      speed: speed,
      slidesPerView: 'auto',
      spaceBetween: 0,
      // freeMode: true,
      // freeModeSticky: true,
      // freeModeMomentumRatio: 1,
      // freeModeMomentumVelocityRatio: 0.3,
      // freeModeMomentumBounce: false,
      loop: true,
      centeredSlides: true,
      // effect: 'coverflow',
      on:{
      	touchMove: function(e){
      		$(e.target).closest('.ruler-slider').find('.swiper-top').addClass('move');
      	},
      	touchStart: function(e){
      		$(e.target).closest('.ruler-slider').find('.swiper-top').addClass('touch');
      	},
      	touchEnd: function(e){
      		$(e.target).closest('.ruler-slider').find('.swiper-top').removeClass('touch move');
      	},
      }
    });
    if(swiper5.$el !== undefined){
	    swiper5.controller.control = swiper6;
	    swiper6.controller.control = swiper5;
	}
})