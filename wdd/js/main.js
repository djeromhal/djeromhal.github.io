$(function(){
	// Content scaling
	var maxWidth  = 1920;
	var maxHeight = 1080;
	var $window = $(window);
    var scale;
    var width = $window.width();
    var height = $window.height();
    var transformMethod = $('#wrap').hasClass('zoom') ? 'zoom' : 'transform';

	// Nav scaling
	var maxWidthNav  = 1920;
	var maxHeightNav = 100;
	var $windowNav = $(window);
    var scaleNav;
    var widthNav = $windowNav.width();
    var heightNav = $windowNav.height();

	$(window).resize(function(evt) {
		// content scaling ===============================
	    width = $window.outerWidth();
	    height = $window.outerHeight();

		    console.log(width)
	    if(width < 768){
	        $('#outer').attr({'style':''});
	        $('#wrap').attr({'style':''});
	        $('#nav-outer').attr({'style':''});
	        $('#nav-wrap').attr({'style':''});
	    }else{
		    if(width >= maxWidth && height >= maxHeight) {
		        $('#outer').css({transformMethod: ''});
		        $('#wrap').css({ width: '', height: '' });
		        return;
		    }
		    console.log(width)
		    scale = Math.min(width/maxWidth, height/maxHeight);
			$('#wrap').css({ width: maxWidth * scale, height: maxHeight * scale });
		    if(transformMethod === 'zoom'){
			    $('#outer').css({'zoom': scale});
		    }else{
			    $('#outer').css({'transform': 'scale(' + scale + ')'});
		    }

			// nav scaling ===============================
		    widthNav = $windowNav.outerWidth();
		    heightNav = $windowNav.outerHeight();

		    if(widthNav >= maxWidthNav && heightNav >= maxHeightNav) {
		        $('#nav-outer').css({'zoom': ''});
		        $('#nav-wrap').css({ width: '', height: '' });
		        return;
		    }

		    scaleNav = Math.min(widthNav/maxWidthNav, heightNav/maxHeightNav);
			$('#nav-wrap').css({ width: maxWidthNav * scaleNav, height: maxHeightNav * scaleNav });
			$('#nav-outer').css({'zoom': scaleNav});
	    }
	});


	if(width < 768){
        $('#outer').attr({'style':''});
        $('#wrap').attr({'style':''});
        $('#nav-outer').attr({'style':''});
        $('#nav-wrap').attr({'style':''});
	}else{
		// content scaling ===============================
	    scale = Math.min(width/maxWidth, height/maxHeight);
	    if(transformMethod === 'zoom'){
		    $('#outer').css({'zoom': scale});
	    }else{
		    $('#outer').css({'transform': 'scale(' + scale + ')'});
	    }
		$('#wrap').css({ width: maxWidth * scale, height: maxHeight * scale });

		// nav scaling ===============================
	    scaleNav = Math.min(widthNav/maxWidthNav, heightNav/maxHeightNav);
		$('#nav-outer').css({'zoom': scaleNav});
		$('#nav-wrap').css({ width: maxWidthNav * scaleNav, height: maxHeightNav * scaleNav });
	}


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
					$('#intro-pass').focus().typetype("robot-pussy").delay(500).backspace(5).typetype('buddy-777', {
						callback: function(){
							$('.intro-form-submit')[0].click();
						}
					});
					setTimeout(function(){
						$('.change-pass-visibility').click();
					},500)
				}
	    	});
		},1000);
	}

	$('.option-anim').on('click',function(e){
		// e.preventDefault();
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
		var input = p.find('.settings-input.dis');
		var rowChange = p.find('.settings-row-change');

		// $('.settings-input.on').removeClass('on');
		// $(".settings-input-edit.on").removeClass('on');

		// if(input.is(':disabled')){
			$('.settings-input:not(.change)').prop('disabled','disabled');
			$('.settings-input').removeClass('on');
			$('.settings-input-edit').removeClass('on');
			$('.settings-row-change').removeClass('opened');

			input.prop('disabled','');
			input.addClass('on');
			input.focus();
			$(this).addClass('on');
			rowChange.addClass('opened');
			// prev_settings_value = input.val();
		// }else{

			// if(input.prop('name') == 'name'){
			// 	if(input.val() == ''){
			// 		input.addClass('error');
			// 		input.focus();
			// 		return false;
			// 	}
			// }else if(input.prop('name') == 'phone'){
			// 	if(input.val().length != 16){
			// 		input.addClass('error');
			// 		input.focus();
			// 		return false;
			// 	}
				
			// }else if(input.prop('name') == 'mail'){
			// 	if(!validateEmail(input.val())){
			// 		input.addClass('error');
			// 		input.focus();
			// 		return false;
			// 	}
				
			// }else if(input.prop('name') == 'password'){
			// 	if(input.val() == ''){
			// 		input.addClass('error');
			// 		input.focus();
			// 		return false;
			// 	}
			// }
			// $('.settings-input').removeClass('error');
	  //   	disableInput(input,$(this));
			// SETTINGS_CHANGE_FLAG = checkToShowSubmit(input, SETTINGS_CHANGE_FLAG, prev_settings_value);

			// function checkToShowSubmit(input, set_change_flag, prev_set_val){
			// 	var cur_settings_value = input.val();
			// 	if(!set_change_flag && cur_settings_value !== prev_set_val){
			// 		$('.show-on-change').addClass('on');
			// 		return true;
			// 	}else{
			// 		return false;
			// 	}
			// }

		// }
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
	$('#form-authors').submit(function(e){
		e.preventDefault();
		var form = $(this);
		var url = form.attr('action');
		var mail = form.find('#input-1');
		var subj = form.find('#input-2');
		var mess = form.find('#input-3');
		var IS_VALID = true;
		if(subj.val().trim() == ''){
			subj.addClass('error');
			IS_VALID = false;
		}else{
			subj.removeClass('error');
		}
		if(mess.val().trim() == ''){
			mess.addClass('error');
			IS_VALID = false;
		}else{
			mess.removeClass('error');
		}
		if(!validateEmail(mail.val())){
			mail.addClass('error');
			IS_VALID = false;
		}else{
			mail.removeClass('error');
		}

		if(IS_VALID){
			$.ajax({
				type: "POST",
				url: url,
				data: 'hello=buy',
				cache: false,
				success: function(data){
					alert('never');
				}
			});
		}
	})
	$('#form-account').submit(function(e){
		e.preventDefault();
		var form = $(this);
		var url = form.attr('action');

		var input = form.find('.settings-input.on');
		var parent = input.closest('.settings-input-wrapper');
		var IS_VALID = true;

		if(input.attr('name') == 'name'){
			if(input.val().trim() == ''){
				validFalse();
			}else{
				validTrue();
			}
		}
		if(input.attr('name') == 'phone'){
			if(input.val().length != 16){
				validFalse();
			}else{
				validTrue();
			}
		}

		if(input.attr('name') == 'mail'){
			if(!validateEmail(input.val())){
				validFalse();
			}else{
				validTrue();
			}
		}
		if(input.attr('name') == 'password'){
			if(input.val().trim() == '' || input.val().trim().length < 6){
				validFalse();
			}else{
				validTrue();
			}
		}

		function validTrue(){
			input.attr('data-value', input.val())
			
			input.removeClass('error')
			input.prop('disabled','disabled');
			input.removeClass('on');
			parent.find('.settings-input-edit').removeClass('on');
			parent.find('.settings-row-change').removeClass('opened');
		}
		function validFalse(){
			input.addClass('error');
			input.focus();
			IS_VALID = false;
		}

		if(IS_VALID){
			$.ajax({
				type: "POST",
				url: url,
				data: 'hello=buy',
				cache: false,
				success: function(data){
					alert('never');
				}
			});
		}
	})
	$('.settings-cancell').on('click',function(e){
		e.preventDefault();
		var _this = $(this);

		var parent = _this.closest('.settings-input-wrapper');
		var input = parent.find('.settings-input.on');

		input.val(input.attr('data-value'));
		input.removeClass('error');
		input.prop('disabled','disabled');
		input.removeClass('on');
		parent.find('.settings-input-edit').removeClass('on');
		parent.find('.settings-row-change').removeClass('opened');
	})

	if($('.owl-carousel').length){
		$('.serial-carousel').owlCarousel({
		    loop:true,
		    margin:60,
		    nav:false,
		    responsiveClass:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        400:{
		            items:2
		        },
		        768:{
		            items:4
		        }
		    }
		})
		owlComics = $('.comics-carousel')
		owlComics.owlCarousel({
		    loop:false,
		    margin:60,
		    dots: false,
			nav: true,
		    responsiveClass:true,
			navText: ["<img src='img/nav-left.png'>","<img src='img/nav-right.png'>"],
		    responsive:{
		        0:{
		            items:1
		        },
		        400:{
		            items:2
		        },
		        768:{
		            items:4
		        }
		    }
		})
		owlComics.on('changed.owl.carousel', function(e) {
		    if(e.item.index != 0){
		    	$('.comics-carousel .owl-prev').show();
		    }else{
		    	$('.comics-carousel .owl-prev').hide();
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
	if($('.top-nav').length){
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
	$('.copy-link').on('click', function(e){
		e.preventDefault();
		copyToClipboard($(this).attr('href'));
		alert("Вы скопировали " + $(this).attr('href') + '. Делитесь где хотите!')
	})
})
function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text); 

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}
function disableInput(input,pencil){
	input.prop('disabled','disabled')
	input.removeClass('on')
	pencil.removeClass('on')
}
function validateEmail(val) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(val).toLowerCase());
}
function validatePhone(val) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(val).toLowerCase());
}