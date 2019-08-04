$(function(){
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