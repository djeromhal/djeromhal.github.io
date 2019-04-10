$(function(){
	var maxWidth  = $('#outer').outerWidth();
	var maxHeight = $('#outer').outerHeight();
	var $window = $(window);
    var scale;
    var width = $window.width();
    var height = $window.height();
	$(window).resize(function(evt) {
	    width = $window.outerWidth();
	    height = $window.outerHeight();

	    // early exit
	    if(width >= maxWidth && height >= maxHeight) {
	        $('#outer').css({'-webkit-transform': ''});
	        $('#wrap').css({ width: '', height: '' });
	        return;
	    }

	    scale = Math.min(width/maxWidth, height/maxHeight);

	    $('#outer').css({'-webkit-transform': 'scale(' + scale + ')'});
	    $('#wrap').css({ width: maxWidth * scale, height: maxHeight * scale });
	});

    scale = Math.min(width/maxWidth, height/maxHeight);

    $('#outer').css({'-webkit-transform': 'scale(' + scale + ')'});
    $('#wrap').css({ width: maxWidth * scale, height: maxHeight * scale });

	$('.change-pass-visibility').on('click',function(e){
		var _this = $(this);
		var p = _this.closest('.intro-form-input-with-icon');
		var input = p.find('input');

		if(_this.hasClass('eye-close')){
			$(this).removeClass('eye-close');
			$(this).addClass('eye-open');
			input.prop('type', 'password');
		}else{
			$(this).removeClass('eye-open');
			$(this).addClass('eye-close');
			input.prop('type', 'text');
		}
	})

	if($('#intro-name').length){
		setTimeout(function(){
			$('#intro-name').focus().typetype("Program").delay(1500).backspace(7).typetype('Robot').delay(1000).backspace(5).typetype('Human', {
				callback: function() {
					$('#intro-pass').focus().typetype("robot-pussy").delay(500).backspace(5).typetype('buddy-777');
					setTimeout(function(){
						$('.change-pass-visibility').click();
					},500)
				}
	    	});
		},1000);
	}

	$('.option-anim').on('click',function(e){
		e.preventDefault();
		var _this = $(this);
		$(this).addClass('active');
		setTimeout(function(){
			_this.removeClass('active');
			if(_this.prop('href') !== undefined)
				window.location = _this.prop('href')
		},500)
	})

	$('.top-nav-burger').on('click',function(e){
		$(this).toggleClass('open');
		$('.main-menu').toggleClass('active');
		$('.top-nav-logo').toggleClass('menu-open');
		$('.top-nav-settings').toggleClass('hidden');
		$('.top-nav-links').toggleClass('hidden');
		$('.top-nav-title').toggleClass('hidden');

		if($('.main-menu-options').hasClass('shown')){
			$('.main-menu-options').removeClass('shown delay');
		}else{
			$('.main-menu-options').addClass('shown delay');
			setTimeout(function(){
				$('.main-menu-options').removeClass('delay');
			},1500)
		}
	})

	var SETTINGS_CHANGE_FLAG = false;
	var prev_settings_value = '';
	$('.settings-input-edit').on('click', function(e){
		e.preventDefault();
		_this = $(this);
		var p = _this.closest('.settings-input-wrapper');
		var input = p.find('input');

		$('.settings-input.on').removeClass('on');
		$(".settings-input-edit.on").removeClass('on');

		if(input.is(':disabled')){
			input.prop('disabled','')
			input.addClass('on')
			input.focus()
			$(this).addClass('on');
			prev_settings_value = input.val();
		}else{

			if(input.prop('name') == 'name'){
				if(input.val() == ''){
					input.addClass('error');
					input.focus();
					return false;
				}
			}else if(input.prop('name') == 'phone'){
				if(input.val().length != 16){
					input.addClass('error');
					input.focus();
					return false;
				}
				
			}else if(input.prop('name') == 'mail'){
				if(!validateEmail(input.val())){
					input.addClass('error');
					input.focus();
					return false;
				}
				
			}else if(input.prop('name') == 'password'){
				if(input.val() == ''){
					input.addClass('error');
					input.focus();
					return false;
				}
			}
			$('.settings-input').removeClass('error');
	    	disableInput(input,$(this));
			SETTINGS_CHANGE_FLAG = checkToShowSubmit(input, SETTINGS_CHANGE_FLAG, prev_settings_value);
		}
	})
	if($("[name='phone']").length){
		$("[name='phone']").mask("+7(999)999-99-99");
	}
	// $(document).click(function(e) {
	// 		var input = $('.settings-input.on');
	// 		var pencil = $(".settings-input-edit.on");

	//     if (!pencil.is(e.target) && pencil.has(e.target).length === 0 && !input.is(e.target) && input.has(e.target).length === 0) {
	// 	    if(input.length){
	// 	    	disableInput(input,pencil);
	// 			SETTINGS_CHANGE_FLAG = checkToShowSubmit(input, SETTINGS_CHANGE_FLAG, prev_settings_value);
	// 	    }
	//     }
	// });
	if($('.owl-carousel').length){
		$('.serial-carousel').owlCarousel({
		    loop:true,
		    margin:60,
		    responsiveClass:true,
		    responsive:{
		        0:{
		            items:4,
		            nav:false
		        }
		    }
		})
		$('.buy-page-car').owlCarousel({
		    loop:true,
		    margin:60,
		    nav:false,
		    responsiveClass:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        768:{
		        	items: 2
		        },
		        1024:{
		        	items: 4
		        }
		    }
		})
		$('.feedback-car').owlCarousel({
		    loop:true,
		    margin:0,
		    dots: false,
			nav: true,
			navText: ["<img src='img/nav-left.png'>","<img src='img/nav-right.png'>"],
		    responsiveClass:true,
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        }
		    }
		})
	}
	$(window).on('scroll',function(){
		console.log($('.top-nav').offset().top)
		if($('.top-nav').offset().top > 10){
			$('.top-nav-logo').addClass('scroll');
		}else{
			$('.top-nav-logo').removeClass('scroll');
		}
	})
	if($('.top-nav').offset().top > 10){
		$('.top-nav-logo').addClass('scroll');
	}else{
		$('.top-nav-logo').removeClass('scroll');
	}

	$('.arrow-open').on('click', function(e){
		var _this = $(this);
		var p = _this.closest('.select-wrapper');
		var select = p.find('.select');
		var input = p.find('.select-input');

		input.toggleClass('opened');
		select.toggleClass('opened');
	})
	$('.select-option').on('click', function(e){
		var _this = $(this);
		var p = _this.closest('.select-wrapper');
		var select = p.find('.select');
		var input = p.find('.select-input');

		var text = _this.text();

		input.val(text)
		input.toggleClass('opened');
		select.toggleClass('opened');
	})
	$('.collections-btn').on('click', function(e){
		var _this = $(this);
		var id = _this.attr('href');

		$('.tab-content.active').removeClass('active');
		$(id).addClass('active');
	})
	$('.collections-icon').on('click', function(e){
		var _this = $(this);
		var img = _this.find('img');
		var src = img.attr('data-src');

		$('#collections-main-img').find('img').attr('src', src);
	})
})
function disableInput(input,pencil){
	input.prop('disabled','disabled')
	input.removeClass('on')
	pencil.removeClass('on')
}
function checkToShowSubmit(input, set_change_flag, prev_set_val){
	var cur_settings_value = input.val();
	if(!set_change_flag && cur_settings_value !== prev_set_val){
		$('.show-on-change').addClass('on');
		return true;
	}else{
		return false;
	}
}
function validateEmail(val) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(val).toLowerCase());
}
function validatePhone(val) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(val).toLowerCase());
}