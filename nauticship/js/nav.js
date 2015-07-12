	$(function(){
		$(window).scroll(function(){
			if($(window).scrollTop() < $('header').height() - 100)
				$('nav').slideUp('slow');
			else
				$('nav').slideDown('slow');
		});

		var heightNav = 70;
		$('#navig1').on('click', function(e){
			$('html,body').stop().animate({ scrollTop: $('#s1').offset().top - heightNav + 'px'}, 1000);
			e.preventDefault();
		});
		$('#navig2').on('click', function(e){
			$('html,body').stop().animate({ scrollTop: $('#s2').offset().top - heightNav + 'px' }, 1000);
			e.preventDefault();
		});
		$('#navig3').on('click', function(e){
			$('html,body').stop().animate({ scrollTop: $('#s3').offset().top - heightNav + 'px' }, 1000);
			e.preventDefault();
		});
		$('#navig4').on('click', function(e){
			$('html,body').stop().animate({ scrollTop: $('#s4').offset().top - heightNav + 'px' }, 1000);
			e.preventDefault();
		});
		$('#navig5').on('click', function(e){
			$('html,body').stop().animate({ scrollTop: $('#s5').offset().top - heightNav + 'px'  }, 1000);
			e.preventDefault();
		});


		$('#navButton').on('click', function(e){
			var navOn = $('#navig').css('right');
			if(navOn == '-140px'){
				$('#navig').animate({right: '0px'}, 500);
			}
			if(navOn == '0px'){
				$('#navig').animate({right: '-140px'}, 500);
			}
		});
		// var navOn = $('#navig').css('right');
		// if(navOn == '-140px'){
		// 	$('#navButton').on('click', function(e){
		// 		$('#navig').animate({right: '0px'}, 500);
		// 		e.preventDefault();
		// 	});
		// } 
		// if(navOn == '0px'){
		// 	$('#navButton').on('click', function(e){
		// 		$('#navig').animate({right: '-140px'}, 500);
		// 		e.preventDefault();
		// 	});
		// }
	});