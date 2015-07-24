	$(function(){
		var speed = 500;
		$('#p1').hover(function() {
			if($('#p1').height()==400){
				$('#p1').animate({height: '500px', 'font-size': '18px'},speed);
				$('#p2').animate({height: '400px', 'font-size': '16px'},speed);
				$('#p3').animate({height: '400px', 'font-size': '16px'},speed);
			}
		});
		$('#p2').hover(function() {
			if($('#p2').height()==400){
				$('#p1').animate({height: '400px', 'font-size': '16px'},speed);
				$('#p2').animate({height: '500px', 'font-size': '18px'},speed);
				$('#p3').animate({height: '400px', 'font-size': '16px'},speed);
			}
		});
		$('#p3').hover(function() {
			if($('#p3').height()==400){
				$('#p1').animate({height: '400px', 'font-size': '16px'},speed);
				$('#p2').animate({height: '400px', 'font-size': '16px'},speed);
				$('#p3').animate({height: '500px', 'font-size': '18px'},speed);
			}
		});
	// 	var heightNav = 70;
	// 	$('#navhome').on('click', function(e){
	// 		$('html,body').stop().animate({ scrollTop: $('header').offset().top + 'px'}, 1000);
	// 		e.preventDefault();
	// 	});
	// 	$('#navworks').on('click', function(e){
	// 		$('html,body').stop().animate({ scrollTop: $('#s2').offset().top + 'px' }, 1000);
	// 		e.preventDefault();
	// 	});
	// 	$('#navprices').on('click', function(e){
	// 		$('html,body').stop().animate({ scrollTop: $('.sec3').offset().top + 'px' }, 1000);
	// 		e.preventDefault();
	// 	});
	// 	$('#navcontacts').on('click', function(e){
	// 		$('html,body').stop().animate({ scrollTop: $('#s4').offset().top + 'px' }, 1000);
	// 		e.preventDefault();
	// 	});
	});