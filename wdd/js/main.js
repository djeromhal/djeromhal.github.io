$(function(){
	var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
                   navigator.userAgent &&
                   navigator.userAgent.indexOf('CriOS') == -1 &&
                   navigator.userAgent.indexOf('FxiOS') == -1;
    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;


	if($('.option-anim').length){
		// $('.option-anim').each(function(i,v){
		// 	$(this).append('<audio id="beep-' + i + '" controls preload="auto"><source src="audio/beep.mp3" controls><source src="audio/beep.ogg" controls>Your browser is not invited for super fun time.</audio>');
		// 	$(this).find('audio')[0].load();
		// })
		// $('.option-anim').attr('onmouseover','new Audio("audio/beep.mp3").play();')
		$('body').append('<audio id="hover-audio"><source src="audio/Cursor.mp3">Your browser is not invited for super fun time.</audio>')
		$('body').append('<audio id="click-audio"><source src="audio/Click.mp3">Your browser is not invited for super fun time.</audio>')
		$('body').append('<audio id="burger-off-audio"><source src="audio/Choose_Click_OFF.mp3">Your browser is not invited for super fun time.</audio>')
		$('body').append('<audio id="burger-on-audio"><source src="audio/Choose_Click_ON.mp3">Your browser is not invited for super fun time.</audio>')
		$('#hover-audio')[0].load()
		$('#click-audio')[0].load()
		$('#burger-off-audio')[0].load()
		$('#burger-on-audio')[0].load()
		$('body').append('<div id="audio-hack"></div>')
		// setTimeout(function(){
		// 	$('body')[0].click()
		// },1000)
		// $('body').on('mousemove',function(){
		// 	// alert()
		// })
	}
	$('.option-anim, .top-nav-links-a').on('click',function(e){
		setTimeout(function(){
			$('audio').trigger('pause');
			$('audio').prop("currentTime",0);
			$('#click-audio').trigger('play');
		},0)
	})
	$('.option-anim').on('click',function(e){
		var _this = $(this);
		if(_this.prop('href') !== undefined){
			e.preventDefault();
		}
		$(this).addClass('active');

		// var media = $(this).find('audio')[0];
		// media.load();
		// const playPromise = media.play();
		// if (playPromise !== null){
		//     playPromise.catch(() => { media.play(); })
		// }
		setTimeout(function(){
			_this.removeClass('active');
			if(_this.prop('href') !== undefined){
				window.location = _this.prop('href')
			}
		},500)
	})
	$('.option-anim').on('mouseenter', function(e){
		// var media = $(this).find('audio')[0];
		// media.load();
		// const playPromise = media.play();
		// if (playPromise !== null){
		//     playPromise.catch(() => { media.play(); })
		// }
		setTimeout(function(){
			$('audio').trigger('pause');
			$('audio').prop("currentTime",0);
			$('#hover-audio').trigger('play');
		},0)

	})
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
		        // $('#outer').css({transformMethod: ''});
	        	$('#outer').attr({'style':''});
		        $('#wrap').css({ width: '', height: '' });
		        return;
		    }
		    console.log(width)
		    scale = Math.min(width/maxWidth, height/maxHeight);
			$('#wrap').css({ width: maxWidth * scale, height: maxHeight * scale });
		    if(transformMethod === 'zoom'){
			    // $('#outer').css({'zoom': scale});
			    if(!isFirefox){
					$('#outer').attr('style','zoom:' + scale + ';');
			    }else{
					$('#outer').attr('style','-moz-transform: scale(' + scale + ');');
			    }
		    }else{
			    // $('#outer').css({'transform': 'scale(' + scale + ')'});
			    $('#outer').attr('style','transform:scale('+scale+');-moz-transform:scale('+scale+');-webkit-transform:scale('+scale+');-ms-transform:scale('+scale+');');
		    }

			// nav scaling ===============================
		    widthNav = $windowNav.outerWidth();
		    heightNav = $windowNav.outerHeight();

		    if(widthNav >= maxWidthNav && heightNav >= maxHeightNav) {
		        $('#nav-outer').attr('style', '');
		        $('#nav-wrap').css({ width: '', height: '' });
		        return;
		    }

		    scaleNav = Math.min(widthNav/maxWidthNav, heightNav/maxHeightNav);
			$('#nav-wrap').css({ width: maxWidthNav * scaleNav, height: maxHeightNav * scaleNav });
		    if(!isFirefox){
				$('#nav-outer').attr('style','zoom:' + scaleNav + ';');
		    }else{
				$('#nav-outer').attr('style','-moz-transform: scale(' + scaleNav + ');');
		    }
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
		    // $('#outer').css({'zoom': scale});
		    if(!isFirefox){
				$('#outer').attr('style','zoom:' + scale + ';');
		    }else{
				$('#outer').attr('style','-moz-transform: scale(' + scale + ');');
		    }
	    }else{
		    // $('#outer').css({'transform': 'scale(' + scale + ')'});
		   	$('#outer').attr('style','transform:scale('+scale+');-moz-transform:scale('+scale+');-webkit-transform:scale('+scale+');-ms-transform:scale('+scale+');');

	    }
		$('#wrap').css({ width: maxWidth * scale, height: maxHeight * scale });

		// nav scaling ===============================
	    scaleNav = Math.min(widthNav/maxWidthNav, heightNav/maxHeightNav);
		// $('#nav-outer').css({'zoom': scaleNav});
	    if(!isFirefox){
			$('#nav-outer').attr('style','zoom:' + scaleNav + ';');
	    }else{
			$('#nav-outer').attr('style','-moz-transform: scale(' + scaleNav + ');');
	    }
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

	if($('#intro-name.auto').length){
		setTimeout(function(){
			$('#intro-name').focus().typetype("Program").delay(1500).backspace(7).typetype('Robot').delay(1000).backspace(5).typetype('Human', {
				callback: function() {
					$('#intro-pass.auto').focus().typetype("robot-pussy").delay(500).backspace(5).typetype('buddy-777', {
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

	$('.top-nav-burger').on('click',function(e){
		$(this).toggleClass('open');
		$('.main-menu').toggleClass('active');
		if(isSafari || isFirefox){
			$('.top-nav-logo').toggleClass('menu-open-safari');
		}else{
			// $('.main-menu-bg').toggleClass('safari');
			$('.top-nav-logo').toggleClass('menu-open');
		}
		$('.top-nav-settings').toggleClass('hidden');
		$('.top-nav-links').toggleClass('hidden');
		$('.top-nav-title').toggleClass('hidden');
		$('.top-nav.bg-black').toggleClass('hidden');

		if($('.main-menu-options').hasClass('shown')){
			$('.main-menu-options').removeClass('shown delay');
		}else{
			$('.main-menu-options').addClass('shown delay');
			setTimeout(function(){
				$('.main-menu-options').removeClass('delay');
			},1500)
		}

		if($(this).hasClass('open')){
			setTimeout(function(){
				$('audio').trigger('pause');
				$('audio').prop("currentTime",0);
				$('#burger-on-audio').trigger('play');
			},0)
		}else{
			setTimeout(function(){
				$('audio').trigger('pause');
				$('audio').prop("currentTime",0);
				$('#burger-off-audio').trigger('play');
			},0)
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

			if(!input.hasClass('disabled')){
				input.prop('disabled','');
			}
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
	// $('#form-register-3').submit(function(e){
	// 	e.preventDefault();
	// 	var form = $(this);
	// 	var url = form.attr('action');
	// 	var price = form.find('#input-1');
	// 	var data = '';
	// 	var IS_VALID = true;
		
	// 	if(price.val().trim() === ''){
	// 		price.addClass('error');
	// 		IS_VALID = false;
	// 	}else{
	// 		price.removeClass('error');
	// 		data += price.attr('name') + '=' + price.val();
	// 	}

	// 	if(IS_VALID){
	// 		console.log(data)
	// 		$.ajax({
	// 			type: "POST",
	// 			url: url,
	// 			data: data,
	// 			cache: false,
	// 			success: function(data){
	// 				console.log(data)
	// 			}
	// 		});
	// 	}
	// })
	$('#form-support').submit(function(e){
		e.preventDefault();
		var form = $(this);
		var url = form.attr('action');
		var mail = form.find('#input-1');
		var subj = form.find('#input-2');
		var mess = form.find('#input-3');
		var data = '';
		var IS_VALID = true;
		
		if(!validateEmail(mail.val())){
			mail.addClass('error');
			IS_VALID = false;
		}else{
			mail.removeClass('error');
			data += mail.attr('name') + '=' + mail.val()
		}
		if(subj.val().trim() === ''){
			subj.addClass('error');
			IS_VALID = false;
		}else{
			subj.removeClass('error');
			data += subj.attr('name') + '=' + subj.val() + '&'
		}
		if(mess.val().trim() === ''){
			mess.addClass('error');
			IS_VALID = false;
		}else{
			mess.removeClass('error');
			data += mess.attr('name') + '=' + mess.val()
		}

		if(IS_VALID){
			$.ajax({
				type: "POST",
				url: url,
				dataType: 'JSON',
				data: data,
				cache: false,
				success: function(data){
					console.log(data)
				}
			});
		}
	})
	$('#form-register-1').submit(function(e){
		e.preventDefault();
		var form = $(this);
		var url = form.attr('action');
		var name = form.find('#input-1');
		var phone = form.find('#input-2');
		var mail = form.find('#input-3');
		var newpass = form.find('#input-4');
		var reppass = form.find('#input-5');
		var checkbox1 = form.find('#checkbox-1');
		var checkbox2 = form.find('#checkbox-2');
		var checkbox3 = form.find('#checkbox-3');
		var data = '';
		var IS_VALID = true;
		
		if(!checkbox1.is(':checked')){
			checkbox1.addClass('error');
			IS_VALID = false;
		}else{
			checkbox1.removeClass('error');
		}
		if(!checkbox2.is(':checked')){
			checkbox2.addClass('error');
			IS_VALID = false;
		}else{
			checkbox2.removeClass('error');
		}
		if(!checkbox3.is(':checked')){
			checkbox3.addClass('error');
			IS_VALID = false;
		}else{
			checkbox3.removeClass('error');
		}
		if(name.val().trim() === ''){
		}else{
			name.removeClass('error');
			data += name.attr('name') + '=' + encodeURIComponent(name.val()) + '&'
		}
		if(phone.val().length != 16){
		}else{
			phone.removeClass('error');
			data += phone.attr('name') + '=' + phone.val() + '&'
		}
		if(!validateEmail(mail.val())){
			mail.addClass('error');
			IS_VALID = false;
		}else{
			mail.removeClass('error');
			data += mail.attr('name') + '=' + mail.val() + '&'
		}
		if(newpass.val().trim() === ''){
			newpass.addClass('error');
			IS_VALID = false;
		}else{
			newpass.removeClass('error');
			data += newpass.attr('name') + '=' + encodeURIComponent(newpass.val()) + '&'
		}
		if(reppass.val() === ''){
			reppass.addClass('error');
			IS_VALID = false;
		}else{
			reppass.removeClass('error');
			data += reppass.attr('name') + '=' + encodeURIComponent(reppass.val())
		}
		if(newpass.val().trim() !== reppass.val().trim()){
			newpass.addClass('error');
			reppass.addClass('error');
			IS_VALID = false;
		}else{
			newpass.removeClass('error');
			reppass.removeClass('error');
		}
		if(IS_VALID){
			console.log(data)
			$.ajax({
				type: "POST",
				dataType: 'JSON',
				url: url,
				data: data,
				cache: false,
				success: function(data){
					console.log(data)
					console.log(data.redir)
					if(data.redir !== undefined){
						document.location.href = data.redir;
					}
				}
			});
		}
	})
	$('#form-recovery-1').submit(function(e){
		e.preventDefault();
		var form = $(this);
		var url = form.attr('action');
		var mail = form.find('#input-1');
		var data = '';
		var IS_VALID = true;
		
		if(!validateEmail(mail.val())){
			mail.addClass('error');
			IS_VALID = false;
		}else{
			mail.removeClass('error');
			data += mail.attr('name') + '=' + mail.val()
		}

		if(IS_VALID){
			$.ajax({
				type: "POST",
				dataType: 'JSON',
				url: url,
				data: data,
				cache: false,
				success: function(data){
					if(data.response == "USER_NOT_FOUND"){
						$('.error-text').show();
					}else if(data.response == "MESS_SENT"){
						$('.success-text').show();
						$('.error-text').hide();
					}
					console.log(data)
				}
			});
		}
	})
	$('#form-recovery-2').submit(function(e){
		e.preventDefault();
		var form = $(this);
		var error = form.find('.error-text');
		var url = form.attr('action');
		var mail = form.find('#input-1');
		var newpass = form.find('#input-2');
		var reppass = form.find('#input-3');
		var data = '';
		var IS_VALID = true;
		
		if(!validateEmail(mail.val())){
			mail.addClass('error');
			IS_VALID = false;
		}else{
			mail.removeClass('error');
			data += mail.attr('name') + '=' + mail.val() + '&'
		}
		if(newpass.val().trim() === ''){
			newpass.addClass('error');
			IS_VALID = false;
		}else{
			newpass.removeClass('error');
			data += newpass.attr('name') + '=' + newpass.val() + '&'
		}
		if(reppass.val() === ''){
			reppass.addClass('error');
			IS_VALID = false;
		}else{
			reppass.removeClass('error');
			data += reppass.attr('name') + '=' + reppass.val()
		}

		if(newpass.val().trim() !== reppass.val().trim()){
			newpass.addClass('error');
			reppass.addClass('error');
			error.show();
			IS_VALID = false;
		}else{
			newpass.removeClass('error');
			reppass.removeClass('error');
			error.hide();
		}

		if(IS_VALID){
			$.ajax({
				type: "POST",
				dataType: 'JSON',
				url: url,
				data: data,
				cache: false,
				success: function(data){
					if(data.response == "PASSWORDS_NOT_MATCHES"){
						$('.error-text').show();
					}else if(data.response == "MESS_SENT"){
						$('.success-text').show();
						$('.error-text').hide();
					}
					console.log(data)
				}
			});
		}
	})
	$('#form-auth').submit(function(e){
		e.preventDefault();
		var form = $(this);
		var url = form.attr('action');
		var mail = form.find('#input-1');
		var pass = form.find('#input-2');
		var data = '';
		var IS_VALID = true;
		
		if(pass.val().trim() == ''){
			pass.addClass('error');
			IS_VALID = false;
		}else{
			pass.removeClass('error');
			data += pass.attr('name') + '=' + pass.val() + '&'
		}
		if(!validateEmail(mail.val())){
			mail.addClass('error');
			IS_VALID = false;
		}else{
			mail.removeClass('error');
			data += mail.attr('name') + '=' + mail.val()
		}

		if(IS_VALID){
			$.ajax({
				type: "POST",
				dataType: 'JSON',
				url: url,
				data: data,
				cache: false,
				success: function(data){
					console.log(data)
					if(data.redir !== undefined){
						document.location.href = data.redir;
					}
				}
			});
		}
	})
	$('#form-authors').submit(function(e){
		e.preventDefault();
		var form = $(this);
		var url = form.attr('action');
		var mail = form.find('#input-1');
		var subj = form.find('#input-2');
		var mess = form.find('#input-3');
		var data = '';
		var IS_VALID = true;
		if(subj.val().trim() == ''){
			subj.addClass('error');
			IS_VALID = false;
		}else{
			subj.removeClass('error');
			data += subj.attr('name') + '=' + subj.val() + '&'
		}
		if(mess.val().trim() == ''){
			mess.addClass('error');
			IS_VALID = false;
		}else{
			mess.removeClass('error');
			data += mess.attr('name') + '=' + mess.val() + '&'
		}
		if(!validateEmail(mail.val())){
			mail.addClass('error');
			IS_VALID = false;
		}else{
			mail.removeClass('error');
			data += mail.attr('name') + '=' + mail.val()
		}

		if(IS_VALID){
			$.ajax({
				type: "POST",
				dataType: 'JSON',
				url: url,
				data: data,
				cache: false,
				success: function(data){
					console.log(data)
				}
			});
		}
	})
	$('#form-intro').submit(function(e){
		e.preventDefault();
		var form = $(this);
		var url = form.attr('action');
		var name = form.find('#intro-name');
		var pass = form.find('#intro-pass');
		var data = '';
		var IS_VALID = true;
		if(name.val().trim() == ''){
			name.addClass('error');
			IS_VALID = false;
		}else{
			name.removeClass('error');
			data += name.attr('name') + '=' + name.val() + '&'
		}
		if(pass.val().trim() == ''){
			pass.addClass('error');
			IS_VALID = false;
		}else{
			pass.removeClass('error');
			data += pass.attr('name') + '=' + pass.val()
		}

		if(IS_VALID){
			$.ajax({
				type: "POST",
				dataType: 'JSON',
				url: url,
				data: data,
				cache: false,
				success: function(data){
					console.log(data)
				}
			});
		}
	})
	$('#form-account').submit(function(e){
		e.preventDefault();
		var form = $(this);
		var url = form.attr('action');

		var input = form.find('.settings-input.on');
		var newMail = form.find('[name="new-mail"]');
		var curPass = form.find('[name="cur-pass"]');
		var newPass = form.find('[name="new-pass"]');
		var repNewPass = form.find('[name="rep-new-pass"]');
		var parent = input.closest('.settings-input-wrapper');
		var IS_VALID = true;
		var key = '';
		var val = '';
		var data = '';

		if(input.attr('name') == 'name'){
			if(input.val().trim() == ''){
				validFalse(input);
			}else{
				data = input.attr('name') + '=' + input.val()
			}
		}
		if(input.attr('name') == 'phone'){
			if(input.val().length != 16){
				validFalse(input);
			}else{
				data = input.attr('name') + '=' + input.val()
			}
		}

		if(input.attr('name') == 'mail'){
			if(!validateEmail(input.val())){
				validFalse(input);
			}else{
				if(!validateEmail(newMail.val())){
					validFalse(newMail);
				}else{
					newMail.removeClass('error');
					data = newMail.attr('name') + '=' + newMail.val() + '&'
				}
				if(curPass.val().trim() === ''){
					validFalse(curPass);
				}else{
					curPass.removeClass('error');
					data += curPass.attr('name') + '=' + curPass.val()
				}
			}
		}
		if(input.attr('name') == 'password'){
			if(input.val().trim() == '' || input.val().trim().length < 6){
				validFalse(input);
			}else{
				if(newPass.val().trim() === '' || newPass.val().trim().length < 6){
					validFalse(newPass);
				}else{
					newPass.removeClass('error');
					data = newPass.attr('name') + '=' + newPass.val() + '&'
				}
				if(repNewPass.val().trim() === '' || repNewPass.val().trim().length < 6){
					validFalse(repNewPass);
				}else{
					repNewPass.removeClass('error');
					data += repNewPass.attr('name') + '=' + repNewPass.val()
				}
			}
		}

		function validTrue(selector){
			// key = input.attr('name');
			// val = input.val();

			input.attr('data-value', input.val())
			
			input.removeClass('error')
			input.prop('disabled','disabled');
			input.removeClass('on');
			parent.find('.settings-input-edit').removeClass('on');
			parent.find('.settings-row-change').removeClass('opened');
		}
		function validFalse(input){
			input.addClass('error');
			input.focus();
			IS_VALID = false;
		}

		if(IS_VALID){
			validTrue();
			if(input.attr('name') == 'mail'){
				input.val(newMail.val());
				newMail.val('');
				curPass.val('');
			}
			if(input.attr('name') == 'password'){
				input.val(newPass.val());
				newPass.val('');
				repNewPass.val('');
			}
			console.log(data)
			$.ajax({
				type: "POST",
				dataType: 'JSON',
				url: url,
				data: data,
				cache: false,
				success: function(data){
					console.log(data)
				}
			});
		}
	})
	$('.settings-cancell').on('click',function(e){
		e.preventDefault();
		var _this = $(this);

		var parent = _this.closest('.settings-input-wrapper');
		var input = parent.find('.settings-input.on');

		parent.find('input:not(.on)').val('')

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
			// if(e.find('.owl-item'))
		    console.log(e.item)
		    if(e.item.index != 0){
		    	$('.comics-carousel .owl-prev').show();
		    }else{
		    	$('.comics-carousel .owl-prev').hide();
		    }
		    if(e.item.index != e.item.count-4){
		    	$('.comics-carousel .owl-next').show();
		    }else{
		    	$('.comics-carousel .owl-next').hide();
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

		var textId = _this.data('text-id');

		$('.icon-text.active').removeClass('active');
		$(textId).addClass('active');
	})
	$('.copy-link').on('click', function(e){
		e.preventDefault();
		copyToClipboard($(this).attr('href'));
		$('.copy-link-wrapper').addClass('show');

		return false;
	})
	$('.copy-link-ok').on('click', function(e){
		e.preventDefault();
		$('.copy-link-wrapper').removeClass('show');
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