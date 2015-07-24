	$(function(){
		var heightNav = 70;
		$('#navhome').on('click', function(e){
			$('html,body').stop().animate({ scrollTop: $('header').offset().top + 'px'}, 1000);
			e.preventDefault();
		});
		$('#navworks').on('click', function(e){
			$('html,body').stop().animate({ scrollTop: $('#s2').offset().top + 'px' }, 1000);
			e.preventDefault();
		});
		$('#navprices').on('click', function(e){
			$('html,body').stop().animate({ scrollTop: $('.sec3').offset().top + 'px' }, 1000);
			e.preventDefault();
		});
		$('#navcontacts').on('click', function(e){
			$('html,body').stop().animate({ scrollTop: $('#s4').offset().top + 'px' }, 1000);
			e.preventDefault();
		});
	});