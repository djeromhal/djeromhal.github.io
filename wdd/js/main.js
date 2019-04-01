$(function(){
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
		if($('.main-menu-options').hasClass('shown')){
			$('.main-menu-options').removeClass('shown delay');
		}else{
			$('.main-menu-options').addClass('shown delay');
			setTimeout(function(){
				$('.main-menu-options').removeClass('delay');
			},1500)
		}
	})

	$('.settings-input-edit').on('click', function(e){
		e.preventDefault();
		_this = $(this);
		var p = _this.closest('.settings-input-wrapper');
		var input = p.find('input');

		if(input.is(':disabled')){
			input.prop('disabled','')
			input.addClass('on')
			input.focus()
		}else{
			input.prop('disabled','disabled')
			input.removeClass('on')
		}
	})
})