$(function(){
	$('.change-pass-visibility').on('click',function(e){
		var _this = $(this);
		var p = _this.closest('.intro-form-input-with-icon');
		var input = p.find('input');

		if(_this.hasClass('eye-close')){
			$(this).removeClass('eye-close');
			$(this).addClass('eye-open');
			input.prop('type', 'text');
		}else{
			$(this).removeClass('eye-open');
			$(this).addClass('eye-close');
			input.prop('type', 'password');
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

	$('.main-page-option').on('click',function(e){
		var _this = $(this);
		$(this).addClass('active');
		setTimeout(function(){
			_this.removeClass('active');
		},500)
	})
})