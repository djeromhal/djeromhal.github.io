;(function ($) {
    var oAddClass = $.fn.addClass;
    $.fn.addClass = function () {
        for (var i in arguments) {
            var arg = arguments[i];
            if ( !! (arg && arg.constructor && arg.call && arg.apply)) {
                setTimeout(arg.bind(this));
                delete arguments[i];
            }
        }
        return oAddClass.apply(this, arguments);
    }

})(jQuery);
$(function(){
	var sideToMoveX;
	var originalPosition,
		deltaX,
		deltaY,
		newDrag,
		xMax,
		newPosition,
		activeWidth;
	var OFFSETTOBLOCKCHANGE = 200,
		NOBLOCKONSIDESPEED = 10;
	var nextItem = $('.next_item'),
		prevItem = $('.prev_item');
	var nextAjaxItem = $('.next_inner_item');
	var prevAjaxItem = $('.prev_inner_item');
	var leftActive;

	var thisInnerItem,
		nextInnerItem = $('.next_inner_item'),
		prevInnerItem = $('.prev_inner_item'),
		speedOfActive = 0;
	var attr;

	// animation of items
	var calcNextItem = function(i, a, reverse){
		var dragProcent = (activeWidth - leftActive) * 100 / activeWidth;
		var css = reverse ? 1 - (i * dragProcent / 100) : i * dragProcent / 100;
		console.log('activeWidth: ' + activeWidth)
		console.log('leftActive: ' + leftActive)
		return css;
	}
	var calcPrevItem = function(){
		var left = -activeWidth + leftActive;
		return left;
	}
	var updateNavs = function(item) {
		// update Tov Nav
		$('.top_nav').find('.active').removeClass('active');
		var href = $('.active_drag').attr('id');
		var liToActive = $('.top_nav').find('a[href=#'+href+']').parent();
		liToActive.addClass('active');

		// update V Nav
		if($('.block:first-child').hasClass('active_drag')){
			$('.v_nav').show();
			$('.top_gallery').removeClass('no_v_nav');
		}else{
			$('.v_nav').hide();
			$('.top_gallery').addClass('no_v_nav');
		}
	}
	var updateVNav = function(item) {
		$('.v_nav').find('.active').removeClass('active');
		var href = $('.active_drag .active_inner').attr('id');
		var liToActive = $('.v_nav').find('a[href=#'+href+']').parent();
		liToActive.addClass('active');

		if(!$('.v_nav .active').length){
			$('.top_nav ul li').first().addClass('main_page');
		}else{
			if($('.top_nav ul li.main_page').length){
				$('.top_nav ul li.main_page').removeClass('main_page');
			}
		}
		// update H Nav
		if($('.active_drag .inner_block:first-child').hasClass('active_inner')){
			$('.h_nav_dot').fadeIn();
			$('.top_gallery_arrows').fadeIn();
		}else{
			$('.h_nav_dot').fadeOut();
			$('.top_gallery_arrows').fadeOut();
		}

	}
	var updateGalleryClasses = function(item){
		checkItemOnContinue(item);
		if(item.hasClass('prev_item')){
			item.find('.active_inner').attr('style','');
			item.removeClass('prev_item toActive').addClass('active_drag').bind('mousewheel', mouseWheelFunc).draggable(draggableOptions).prev().addClass('prev_item');
			item.next().attr('style','').removeClass('active_drag animForward').unbind('mousewheel').draggable("destroy").addClass('next_item').next().attr('style','').removeClass('next_item');
		}else if(item.hasClass('next_item')){
			item.find('.active_inner').attr('style','');
			item.removeClass('next_item toActive').addClass('active_drag').bind('mousewheel', mouseWheelFunc).draggable(draggableOptions).next().addClass('next_item');
			item.prev().attr('style','').removeClass('active_drag').unbind('mousewheel').draggable("destroy").addClass('prev_item').prev().attr('style','').removeClass('prev_item');
		}
		updateNavs();
	}
	var updateGalleryClassesByTopNav = function(item) {
		checkItemOnContinue(item);
		var aPos = $('.active_drag').index();
		var nPos = item.index();

		if(nPos > aPos){
			$('.block.active_drag').next().removeClass('next_item');
			$('.block.active_drag').prev().removeClass('prev_item');
			$('.block.active_drag').unbind('mousewheel').draggable("destroy").addClass('toActive').delay(500).queue(function(next){
				$(this).attr('style','').removeClass('active_drag toActive');
				next();
			})
			item.show().addClass('next_item',function(){
				$(this).find('.active_inner').show();
				$(this).addClass('toActive').delay(500).queue(function(next){
					$(this).draggable(draggableOptions).addClass('active_drag').bind('mousewheel', mouseWheelFunc).removeClass('next_item toActive');
					$(this).next().addClass('next_item');
					$(this).prev().addClass('prev_item');
					$(this).attr('style','').find('.active_inner').attr('style','');
					updateNavs();
					// update H Nav
					if($(this).find('.top_block').hasClass('active_inner')){
						// $('.h_nav_dot').fadeIn();
						$('.top_gallery_arrows').fadeIn();
					}else{
						// $('.h_nav_dot').fadeOut();
						$('.top_gallery_arrows').fadeOut();
					}
					next();
				});
			})
		}
		if(nPos < aPos){
			$('.block.active_drag').next().removeClass('next_item');
			$('.block.active_drag').prev().removeClass('prev_item');
			$('.block.active_drag').unbind('mousewheel').draggable("destroy").addClass('animForward').delay(500).queue(function(next){
				$(this).attr('style','').removeClass('active_drag animForward');
				next();
			})
			item.show().addClass('prev_item',function(){
				$(this).find('.active_inner').show();
				$(this).addClass('toActive').delay(500).queue(function(next){
					$(this).draggable(draggableOptions).addClass('active_drag').bind('mousewheel', mouseWheelFunc).removeClass('prev_item toActive');
					$(this).next().addClass('next_item');
					$(this).prev().addClass('prev_item');
					$(this).attr('style','').find('.active_inner').attr('style','');
					updateNavs();
					// update H Nav
					if($(this).find('.top_block').hasClass('active_inner')){
						// $('.h_nav_dot').fadeIn();
						$('.top_gallery_arrows').fadeIn();
					}else{
						// $('.h_nav_dot').fadeOut();
						$('.top_gallery_arrows').fadeOut();
					}
					next();
				});
			})
		}
	}
	var updateAxisYGalleryByVNav = function(item){
		var nexti = item.next();
		var previ = item.prev();
		var aPos = $('#main_page .active_inner').index();
		var nPos = item.index();
			
		var lastAI = $('#main_page .active_inner');
		lastAI.next().removeClass('next_inner_item');
		lastAI.prev().removeClass('prev_inner_item');

		if(nPos > aPos){
			item.show().addClass('next_inner_item', function(){
				$(this).addClass('innerToActive').delay(500).queue(function(next){
					$(this).addClass('active_inner').removeClass('innerToActive next_inner_item').attr('style','');
					previ.addClass('prev_inner_item');
					nexti.addClass('next_inner_item');
					updateVNav();	
					next();
				})
			});
			lastAI.addClass('toTop').delay(500).queue(function(next){
				lastAI.scrollTop(0).removeClass('active_inner').removeClass('toTop');
				next();
			});
			// item.addClass('active_inner').prev().addClass('prev_inner_item');
			attr = item.attr('data-to-load');
			if(typeof attr !== typeof undefined && attr !== false){
				$('#ajaxloader').css({'bottom':'0', 'top':'auto'}).addClass('fullHeight');
				item.load('ajax/' + attr, function(){
					$('#ajaxloader').fadeOut(function(){
						$('#ajaxloader').removeClass('fullHeight').attr('style','');
					});
					$(this).removeAttr('data-to-load');
				});
			}
		}
		if(nPos < aPos){
			item.show().addClass('prev_inner_item', function(){
				$(this).addClass('innerToActive').delay(500).queue(function(next){
					$(this).addClass('active_inner').removeClass('innerToActive prev_inner_item').attr('style','');
					previ.addClass('prev_inner_item');
					nexti.addClass('next_inner_item');
					updateVNav();	
					next();
				})
			});
			lastAI.addClass('toBottom').delay(500).queue(function(next){
				lastAI.scrollTop(0).removeClass('active_inner').removeClass('toBottom');
				next();
			});
			// item.addClass('active_inner').prev().addClass('prev_inner_item');
			attr = item.attr('data-to-load');
			if(typeof attr !== typeof undefined && attr !== false){
				$('#ajaxloader').css({'top':'0'}).addClass('fullHeight');
				item.load('ajax/' + attr, function(){
					$('#ajaxloader').fadeOut(function(){
						$('#ajaxloader').removeClass('fullHeight').attr('style','');
					});
					$(this).removeAttr('data-to-load');
				});
			}
		}
	}
	var checkItemOnContinue = function(item){
		if(!item.prev().length){
			$('.top_gallery_arrow_left').fadeOut(100);
		}else{
			$('.top_gallery_arrow_left').fadeIn(100);	
		}
		if(!item.next().length){
			$('.top_gallery_arrow_right').fadeOut(100);
		}else{
			$('.top_gallery_arrow_right').fadeIn(100);	
		}
	}
	checkItemOnContinue($('.active_drag'));
	var updateAxisYGallery = function(item){
		if(item.hasClass('prev_inner_item')){
			var parent = item.parents('.block');
			parent.animate({top: '100%'},500, 'easeOutCubic', function(){
				thisInnerItem.scrollTop(0).removeClass('active_inner').addClass('next_inner_item').next().removeClass('next_inner_item');
				prevInnerItem.removeClass('prev_inner_item').addClass('active_inner').prev().addClass('prev_inner_item');
				// parent.draggable( "option", "revert", true);
				parent.attr('style','');
				// thisInnerItem.attr('style','');
				prevInnerItem.attr('style','');
				updateVNav();
			});
		}else if(item.hasClass('next_inner_item')){
			var parent = item.parents('.block');
			parent.animate({top: '-100%'},500, 'easeOutCubic', function(){
				thisInnerItem.scrollTop(0).removeClass('active_inner').addClass('prev_inner_item').prev().removeClass('prev_inner_item');
				nextInnerItem.removeClass('next_inner_item').addClass('active_inner').next().addClass('next_inner_item');
				// parent.draggable( "option", "revert", true);
				parent.attr('style','');
				// thisInnerItem.attr('style','');
				nextInnerItem.attr('style','');
				updateVNav();				
			});
		}
		$('.popup').removeClass('active');
	}
	var draggableOptions = { 
		revert: false, 
		delay: 0, 
		distance: 0,
		dynamic: false,
		queue: false,
		start: function (event, ui) {
			ui.helper.data('draggableXY.originalPosition', ui.position || {top: 0, left: 0});
			ui.helper.data('draggableXY.newDrag', true);
		},
		drag: function (event, ui) {
			//set only two axis
			{
				originalPosition = ui.helper.data('draggableXY.originalPosition');
				deltaX = Math.abs(originalPosition.left - ui.position.left);
				deltaY = Math.abs(originalPosition.top - ui.position.top);

				newDrag = false || ui.helper.data('draggableXY.newDrag');
				ui.helper.data('draggableXY.newDrag', false);

				xMax = newDrag ? Math.max(deltaX, deltaY) === deltaX : ui.helper.data('draggableXY.xMax');
				ui.helper.data('draggableXY.xMax', xMax);

				newPosition = ui.position;
				if(xMax) {
				  newPosition.top = originalPosition.top;
				}
				if(!xMax){
				  newPosition.left = originalPosition.left;
				}
			}
			// =======set axis end================================================================

			// if >300px to both direction - revert false
			if(Math.abs(newPosition.left) > OFFSETTOBLOCKCHANGE){
				// $(this).draggable( "option", "revert", false);
			}
			if(Math.abs(newPosition.top) > OFFSETTOBLOCKCHANGE){
				// $(this).draggable( "option", "revert", false);
			}

			// ANIMATE WHILE DRAGGING
			nextItem = $('.next_item');
			prevItem = $('.prev_item');
			// leftActive = Math.abs(parseInt($(this).css('left')));
			leftActive = Math.abs(parseInt(ui.position.left));
			activeWidth = $(this).outerWidth();
			sideToMoveX = (newPosition.left > 0) ? 'right' : (newPosition.left < 0) ? 'left' : false;
			switch(sideToMoveX){
				// IF MOVE BLOCK TO RIGHT SIDE
				case 'right':
					if(!prevItem.length){
						ui.position.left /= NOBLOCKONSIDESPEED;
					}else{

						$(this).addClass('rightForbidden').bind('drag', function(event, ui) {
                			prevItem.css({display: 'block', zIndex: '5', left: ui.offset.left - activeWidth }).find('.active_inner').css({display:'block'});
                		})
						// prevItem.attr('style', 'display:block; left: ' + calcPrevItem() + 'px').find('.active_inner').css('display','block');
						// $(this).attr('style','display:block; transform: perspective(500px) translateX(' + calcNextItem(0, -2) + '%) scale(' + calcNextItem(1, 0.1, true) + ') rotateY(' + calcNextItem(2, -2) + 'deg); opacity: ' + calcNextItem(3, 0.33, true)).find('.active_inner').css('display','block');;
						$(this).attr('style','transform-origin: 100% 50%; transform: perspective(500px) translateX(' + (-2 + calcNextItem(2)) + '%) scale(' + (1 + 0.9 - calcNextItem(0.1, 1, true)) + ') rotateY(' + (-10 + calcNextItem(10)) + 'deg); opacity: ' + (1 + 0.66 - calcNextItem(0.33, 3, true)));
						// console.log(calcNextItem(0, -2))
					}
					break;
				// IF MOVE BLOCK TO left SIDE
				case 'left':
					if(!nextItem.length){
						ui.position.left /= NOBLOCKONSIDESPEED;
					}else{
						nextItem.attr('style','display:block; visibility:visible; transform: perspective(500px) translateX(' + calcNextItem(-2, 0) + '%) scale(' + calcNextItem(0.1, 1, true) + ') rotateY(' + calcNextItem(-10, 2) + 'deg); opacity: ' + calcNextItem(0.33, 3, true)).find('.active_inner').css('display','block');
						console.log(-2 + calcNextItem(2))
					}
					break;
			}
			sideToMoveY = (newPosition.top > 0) ? 'bottom' : (newPosition.top < 0) ? 'top' : false;
			switch(sideToMoveY){
				// IF MOVE BLOCK TO BOTTOM SIDE
				case 'bottom':
					thisInnerItem = $(this).find('.active_inner');
					prevInnerItem = thisInnerItem.prev('.prev_inner_item');
					attr = prevInnerItem.attr('data-to-load');
					var	speedOfOther = ui.position.top - thisInnerItem.height();
						// speedOfActive = ui.position.top / 2 * -1;
					if(!prevInnerItem.length){
						ui.position.top /= NOBLOCKONSIDESPEED;
					}else if(typeof attr !== typeof undefined && attr !== false){
						// thisInnerItem.css({top: speedOfActive});
						// prevInnerItem.css({top: speedOfOther});
						var ajaxloader = $('#ajaxloader');
						// var offsetAjaxloader =  $('.top_nav').height();
						// var heightAjaxloader = ui.position.top*2;
						var offsetAjaxloader =  $('.top_nav').height();
						var heightAjaxloader = ui.position.top;
						ajaxloader.css({visibility: 'visible', opacity: '1', top: offsetAjaxloader, height: heightAjaxloader})
						prevInnerItem.css({zIndex: '5'}).show();
					}else{
						// thisInnerItem.css({top: speedOfActive});
						// prevInnerItem.css({top: speedOfOther});
						prevInnerItem.css({zIndex: '5'}).show();
					}
					break;
				// IF MOVE BLOCK TO TOP SIDE
				case 'top':
					thisInnerItem = $(this).find('.active_inner');
					nextInnerItem = thisInnerItem.next('.next_inner_item');
					attr = nextInnerItem.attr('data-to-load');
					var	speedOfOther = ui.position.top + thisInnerItem.height();
						// speedOfActive = ui.position.top / 2 * -1;
					if(!nextInnerItem.length){
						ui.position.top /= NOBLOCKONSIDESPEED;
					}else if(typeof attr !== typeof undefined && attr !== false){
						// nextInnerItem.css({top: speedOfOther});
						var ajaxloader = $('#ajaxloader');
						// var offsetAjaxloader = speedOfOther + ui.position.top + $('.top_nav').height();
						// var heightAjaxloader = thisInnerItem.height() - offsetAjaxloader + $('.top_nav').height();
						var offsetAjaxloader = speedOfOther + $('.top_nav').height();
						var heightAjaxloader = thisInnerItem.height() - offsetAjaxloader + $('.top_nav').height();
						ajaxloader.css({visibility: 'visible', opacity: '1', top: offsetAjaxloader, height: heightAjaxloader})
						nextInnerItem.css({zIndex: '5'}).show();
					}else{
						// nextInnerItem.css({top: speedOfOther});
						nextInnerItem.css({zIndex: '5'}).show();
					}
					break;
			}
		},
		stop: function(event, ui){
			// Continue animate ACTIVE if drag and drop on > 300px
			nextItem = $('.next_item');
			prevItem = $('.prev_item');
			$(this).unbind('drag');
			if(Math.abs(ui.position.left) > OFFSETTOBLOCKCHANGE){
				console.log('1');
				switch(sideToMoveX){
					case 'right':
						var p = $(this);
						prevItem.addClass('toActive').delay(500).queue(function(next){
							$(this).attr('style','');
							updateGalleryClasses(prevItem);
							next();
						});
						p.addClass('animForward').delay(500).queue(function(next){
							$(this).attr('style','').removeClass('animForward rightForbidden');
							next();
						})
						break;
					case 'left':
						nextItem.addClass('toActive').delay(500).queue(function(next){
							$(this).attr('style','');
							updateGalleryClasses(nextItem);
							next();
						});
						$(this).animate({left: '-' + $(this).outerWidth() + 'px'},500, function(){
						});
						break;
				}
				// $(this).draggable( "option", "revert", true);
			}else if(Math.abs(ui.position.top) > OFFSETTOBLOCKCHANGE){
				console.log('2');
				switch(sideToMoveY){
					// IF MOVE BLOCK TO BOTTOM SIDE
					case 'bottom':
						if(typeof attr !== typeof undefined && attr !== false){
							prevInnerItem.load('ajax/' + attr, function(){
								$('#ajaxloader').fadeOut(function(){
									$('#ajaxloader').attr('style','');
								});
								$(this).removeAttr('data-to-load');
							});
						}
						updateAxisYGallery(prevInnerItem);
						break;
					// IF MOVE BLOCK TO TOP SIDE
					case 'top':
						if(typeof attr !== typeof undefined && attr !== false){
							nextInnerItem.load('ajax/' + attr, function(){
								$('#ajaxloader').fadeOut(function(){
									$('#ajaxloader').attr('style','');
								});
								$(this).removeAttr('data-to-load');
							});
						}
						updateAxisYGallery(nextInnerItem);
						break;
				}
			}else if(Math.abs(ui.position.left) <= OFFSETTOBLOCKCHANGE && Math.abs(ui.position.left) !== 0){
				var p = $(this);
				switch(sideToMoveX){
					case 'right':
						if(!prevItem.length){
							$(this).animate({left: '0'},500, function(){
								$(this).attr('style','');
								nextItem.attr('style','').find('.active_inner').attr('style','');
								prevItem.attr('style','').find('.active_inner').attr('style','');
							});
							break;
						}
						prevItem.animate({left: '-100%'},500, function(){
							nextItem.attr('style','').find('.active_inner').attr('style','');
							prevItem.attr('style','').find('.active_inner').attr('style','');
						});
						p.addClass('animBack').delay(500).queue(function(next){
							$(this).attr('style','').removeClass('animBack rightForbidden');
							next();
						})
						break;
					case 'left':
						$(this).animate({left: '0px'},500, function(){
							$(this).attr('style','');
							nextItem.attr('style','').find('.active_inner').attr('style','');
							prevItem.attr('style','').find('.active_inner').attr('style','');
						});
						break;
				}
			}else if(Math.abs(ui.position.top) <= OFFSETTOBLOCKCHANGE && Math.abs(ui.position.top) !== 0){
				switch(sideToMoveY){
					// IF MOVE BLOCK TO BOTTOM SIDE
					case 'bottom':
						if(typeof attr !== typeof undefined && attr !== false){
							prevInnerItem.load('ajax/' + attr, function(){
								$('#ajaxloader').animate({height: '0'},function(){
									$('#ajaxloader').attr('style','');
								});
								$(this).removeAttr('data-to-load');
							});
						}
						// prevInnerItem.animate({top: '-100%'},{duration: 500, queue: false, 
						// 	complete: function(){
						// 		$(this).attr('style','');
						// 	}
						// });
						break;
					// IF MOVE BLOCK TO TOP SIDE
					case 'top':
						if(typeof attr !== typeof undefined && attr !== false){
							nextInnerItem.load('ajax/' + attr, function(){
								$('#ajaxloader').animate({top: '100%'},function(){
									$('#ajaxloader').attr('style','');
								});
								$(this).removeAttr('data-to-load');
							});
						}
						// nextInnerItem.animate({top: '100%'},{duration: 500, queue: false, 
						// 	complete: function(){
						// 		$(this).attr('style','');
						// 	}
						// });
						break;
				}
				$(this).animate({top: '0'},500, 'easeOutCubic', function(){
					$(this).attr('style','');
					nextInnerItem.attr('style','');
					prevInnerItem.attr('style','');
				});
				// thisInnerItem = $(this).find('.active_inner');
				// $(this).animate({top: '0px'},500, function(){
				// 	$(this).attr('style','');
				// });
				// $(this).draggable( "option", "revert", true);
			}else{
				$(this).attr('style','');
			}
		}
	}
	$('.active_drag').draggable(draggableOptions);

	// GALLERY ARROWS CONTROLL
	$('.top_gallery_arrow_right').click(function(){
		// $('.block.next_item .active_inner').show();
		// $('.block.next_item').show().addClass('toActive');
		// $('.block.active_drag').animate({left: '-' + $('.block.active_drag').outerWidth() + 'px'},500 ,function(){
		// 	updateGalleryClasses($('.block.next_item'));
		// })

		updateGalleryClassesByTopNav($('.block.next_item'));
	})
	$('.top_gallery_arrow_left').click(function(){
		// $('.block.prev_item .active_inner').show();
		// $('.block.prev_item').show().addClass('toActive');
		// $('.block.active_drag').addClass('animForward').delay(500).queue(function(){
		// 	updateGalleryClasses($('.block.prev_item'));
		// })		

		updateGalleryClassesByTopNav($('.block.prev_item'));
	})

	// TOP NAV AVIMATION
	$('.top_nav ul a').click(function(e){
		e.preventDefault();
		var href = $(this).attr('href');
		var block = $(href);
		if('#' + $('.active_drag').attr('id') != href){
			updateGalleryClassesByTopNav($(href));
		}
	})
	$('#main_page_link').click(function(e){
		e.preventDefault();
		var href = $(this).attr('href');
		var block = $(href);
		if($('.v_nav ul li').hasClass('active')){
			updateAxisYGalleryByVNav($('#main_page_top'));
			// $('#main_page .active_inner').removeClass('active_inner');
			// $('#main_page .next_inner_item').next().removeClass('next_inner_item');
			// $('#main_page .prev_inner_item').prev().removeClass('prev_inner_item');
			// $('#main_page_top').addClass('active_inner');
			// $('#main_page_top').next().addClass('next_inner_item');
			// $('#main_page_top').prev().addClass('prev_inner_item');
			// updateVNav();	
		}
	})
	// V NAV AVIMATION
	$('.v_nav ul li').click(function(e){
		e.preventDefault();
		var href = $(this).find('a').attr('href');
		if('#' + $('.active_drag .active_inner').attr('id') != href){
			updateAxisYGalleryByVNav($(href));
		}
	})

	var isAttr = function(item) {
		attr = item.attr('data-to-load');
		if(typeof attr !== typeof undefined && attr !== false){
			return true;
		}else{
			return false;
		}
	}

	var ajaxloader_flag = true;
	var scrollConst = 3;
	var scrollSesitivity = scrollConst;
	var offsetActiveDrag;
	var i = 0;
	var speedOfActive = 0;
	// var mouseWheelFunc = function(e, d) {
	// 	var active_drag = $(this);
	// 	thisInnerItem = $(this).find('.active_inner');
	// 	var scrollSide = e.originalEvent.deltaY;
	    
	// 	var matrix = thisInnerItem.css('transform').replace(/[^0-9\-.,]/g, '').split(',');
	//     var scrollHeight = thisInnerItem.height();
	// 	var scrollPosition = thisInnerItem.children('div').height() + thisInnerItem.children('div').scrollTop();
	// 	// if (thisInnerItem.scrollTop() === 0 && d > 0 || (scrollHeight - scrollPosition) / scrollHeight === 0 && d < 0){
	// 	if(thisInnerItem.hasClass('top_block') || thisInnerItem.scrollTop() == 0 && scrollSide < 0 || thisInnerItem.scrollTop() + thisInnerItem.outerHeight() >= thisInnerItem.children('div').outerHeight()  && scrollSide > 0 ){
	// 		var hasnext = thisInnerItem.next('.next_inner_item').length;
	// 		var hasprev = thisInnerItem.prev('.prev_inner_item').length;
	// 		nextInnerItem = thisInnerItem.next('.next_inner_item');
	// 		prevInnerItem = thisInnerItem.prev('.prev_inner_item');
	// 		var x = matrix[12] || matrix[4];
	// 		var y = matrix[13] || matrix[5];
	// 		var borderToscroll = thisInnerItem.outerHeight()/2;
	// 			offsetActiveDrag = Math.abs(y);
	// 		var showBlock = false;
	// 	    if(offsetActiveDrag>borderToscroll){
	// 	    	showBlock = true;
	// 	    }else{
	// 	    	showBlock = false;
	// 	    }
	// 	 //    console.log(scrollSide)
	// 	 //    console.log(d)
	// 		// if(!hasnext && d < 0 && y <= 0 || !hasprev && d > 0 && y >= 0 ){
	// 		// 	return false;
	// 		// }
	// 		// // var element = document.getElementById(thisInnerItem.attr('id'));
	// 	 //    var scrollHeight = thisInnerItem.height();
	// 		// var scrollPosition = thisInnerItem.children('div').height() + thisInnerItem.children('div').scrollTop();

	// 		// if (thisInnerItem.scrollTop() === 0 && d > 0 || (scrollHeight - scrollPosition) / scrollHeight === 0 && d < 0){
			    
	// 		//     speedOfActive += d;

	// 		// 	thisInnerItem.css({transform: 'translateY(' + speedOfActive + 'px)'});
	// 		// 	if(hasnext)
	// 		// 		nextInnerItem.css({transform: 'translateY(' + speedOfActive + 'px)', display:'block', overflow: 'hidden'});
	// 		// 	if(hasprev)
	// 		// 		prevInnerItem.css({transform: 'translateY(' + speedOfActive + 'px)', display:'block', overflow: 'hidden'});
	// 		// 	$.data(this, 'scrollTimer', setTimeout(function() {
	// 		// 		if (showBlock) {
	// 		// 			if(isAttr(nextInnerItem)){
	// 		// 				nextInnerItem.load('ajax/' + attr, function(){
	// 		// 			    	thisInnerItem.addClass('tyt').delay(500).queue(function(next){
	// 		// 		    			$(this).removeClass('tyt').attr('style','');
	// 		// 						next();
	// 		// 		    		});
	// 		//     				nextInnerItem.addClass('tyt').delay(500).queue(function(next){
	// 		// 		    			$(this).removeClass('tyt').attr('style','');
	// 		// 						next();
	// 		// 		    		});
	// 		// 					$(this).removeAttr('data-to-load');
	// 		// 				});
	// 		// 			}else{
	// 		// 	    		active_drag.unbind('mousewheel');
	// 		// 		    	thisInnerItem.addClass('tyt').delay(500).queue(function(next){
	// 		// 	    			$(this).removeClass('tyt').attr('style','');
	// 		// 					active_drag.bind('mousewheel', mouseWheelFunc);
	// 		// 					next();
	// 		// 	    		});
	// 	 //    				nextInnerItem.addClass('tyt').delay(500).queue(function(next){
	// 		// 	    			$(this).removeClass('tyt not_scrollable').attr('style','');
	// 		// 					next();
	// 		// 	    		});
	// 		// 			}
	// 		// 	    }
	// 		//     	i=0;
	// 		//     	scrollSesitivity = scrollConst; speedOfActive = 0;
	// 		//     	ajaxloader_flag = true;
	// 		//     }, 1000));
	// 		// }

	// 		if(hasnext && d < 0 && !prevInnerItem.hasClass('not_scrollable')){
	// 			clearTimeout($.data(this, 'scrollTimer'));
	// 		    $.data(this, 'scrollTimer', setTimeout(function() {
	// 				if (!showBlock) {
	// 					if(isAttr(nextInnerItem)){
	// 						nextInnerItem.load('ajax/' + attr, function(){
	// 					    	thisInnerItem.addClass('ty0').delay(500).queue(function(next){
	// 				    			$(this).removeClass('ty0').attr('style','');
	// 								next();
	// 				    		});
	// 		    				nextInnerItem.addClass('ty0').delay(500).queue(function(next){
	// 				    			$(this).removeClass('ty0').attr('style','');
	// 								next();
	// 				    		});
	// 							$(this).removeAttr('data-to-load');
	// 						});
	// 					}else{
	// 			    		active_drag.unbind('mousewheel');
	// 				    	thisInnerItem.addClass('ty0').delay(500).queue(function(next){
	// 			    			$(this).removeClass('ty0').attr('style','');
	// 							active_drag.bind('mousewheel', mouseWheelFunc);
	// 							next();
	// 			    		});
	// 	    				nextInnerItem.addClass('ty0').delay(500).queue(function(next){
	// 			    			$(this).removeClass('ty0 not_scrollable').attr('style','');
	// 							next();
	// 			    		});
	// 					}
	// 			    }
	// 		    	i=0;
	// 		    	scrollSesitivity = scrollConst; speedOfActive = 0;
	// 		    	ajaxloader_flag = true;
	// 		    }, 500));
	// 		    if(showBlock && !isAttr(nextInnerItem)){
	// 				active_drag.unbind('mousewheel');
	// 		    	thisInnerItem.addClass('tyt').delay(500).queue(function(next){
	// 					thisInnerItem.scrollTop(0).removeClass('active_inner tyt').attr('style','').addClass('prev_inner_item').prev().removeClass('prev_inner_item');
	// 					active_drag.bind('mousewheel', mouseWheelFunc);
	// 					next();
	// 	    		});
 //    				nextInnerItem.addClass('tyt').delay(500).queue(function(next){
	// 	    			$(this).removeClass('tyt not_scrollable').attr('style','');
	// 	    			nextInnerItem.removeClass('next_inner_item').addClass('active_inner').next().addClass('next_inner_item');
	// 	    			updateVNav();
	// 					next();
	// 	    		});

	// 		    	i=0;
	// 		    	scrollSesitivity = scrollConst; speedOfActive = 0;
	// 		    	ajaxloader_flag = true;
	// 		    }
	// 		    if(showBlock && isAttr(nextInnerItem)){
	// 		    	active_drag.unbind('mousewheel');
	// 				nextInnerItem.load('ajax/' + attr, function(){
	// 			    	thisInnerItem.addClass('tyt').delay(500).queue(function(next){
	// 						thisInnerItem.scrollTop(0).removeClass('active_inner tyt').attr('style','').addClass('prev_inner_item').prev().removeClass('prev_inner_item');
	// 						active_drag.bind('mousewheel', mouseWheelFunc);
	// 						next();
	// 		    		});
	//     				nextInnerItem.addClass('tyt').delay(500).queue(function(next){
	// 		    			$(this).removeClass('tyt not_scrollable').attr('style','');
	// 		    			nextInnerItem.removeClass('next_inner_item').addClass('active_inner').next().addClass('next_inner_item');
	// 						updateVNav();
	// 						next();
	// 		    		});
	// 					$(this).removeAttr('data-to-load');

	// 				});
	// 		    	i=0;
	// 		    	scrollSesitivity = scrollConst; speedOfActive = 0;
	// 		    	ajaxloader_flag = true;
	// 			}
	// 			speedOfActive += d*10;
	// 			var	speedOfOther = speedOfActive + thisInnerItem.height();
	// 			if(isAttr(nextInnerItem) && !showBlock){
	// 				var ajaxloader;
	// 				if(ajaxloader_flag){
	// 					ajaxloader = nextInnerItem.html('<div class="ajaxloader_bg"></div>');
	// 					ajaxloader_flag = false;
	// 				}
	// 				ajaxloader = nextInnerItem.find('.ajaxloader_bg');
	// 				var heightAjaxloader = Math.abs(y) + $('.top_nav').height();
	// 				ajaxloader.css({height: heightAjaxloader});
	// 				thisInnerItem.css({transform: 'translateY(' + speedOfActive + 'px)'});
	// 				nextInnerItem.css({transform: 'translateY(' + speedOfActive + 'px)', display:'block', overflow: 'hidden'});
	// 			}else if(!isAttr(nextInnerItem) && !showBlock){
	// 				if(!nextInnerItem.hasClass('not_scrollable')){
	// 					nextInnerItem.addClass('not_scrollable');
	// 				}
	// 				thisInnerItem.css({transform: 'translateY(' + speedOfActive + 'px)'});
	// 				nextInnerItem.css({transform: 'translateY(' + speedOfActive + 'px)', display:'block', overflow: 'hidden'});
	// 			}
	// 		}
	// 		if(hasprev && d > 0 && !nextInnerItem.hasClass('not_scrollable')){
	// 			clearTimeout($.data(this, 'scrollTimer2'));
	// 		    $.data(this, 'scrollTimer2', setTimeout(function() {
	// 				if (!showBlock) {
	// 					if(isAttr(prevInnerItem)){
	// 						prevInnerItem.load('ajax/' + attr, function(){
	// 					    	thisInnerItem.addClass('ty0').delay(500).queue(function(next){
	// 				    			$(this).removeClass('ty0').attr('style','');
	// 								next();
	// 				    		});
	// 		    				prevInnerItem.addClass('ty0').delay(500).queue(function(next){
	// 				    			$(this).removeClass('ty0').attr('style','');
	// 								next();
	// 				    		});
	// 							$(this).removeAttr('data-to-load');
	// 						});
	// 					}else{
	// 			    		active_drag.unbind('mousewheel');
	// 				    	thisInnerItem.addClass('ty0').delay(500).queue(function(next){
	// 			    			$(this).removeClass('ty0').attr('style','');
	// 							active_drag.bind('mousewheel', mouseWheelFunc);
	// 							next();
	// 			    		});
	// 	    				prevInnerItem.addClass('ty0').delay(500).queue(function(next){
	// 			    			$(this).removeClass('ty0 not_scrollable').attr('style','');
	// 							next();
	// 			    		});
	// 					}
	// 			    }
	// 		    	i=0;
	// 		    	scrollSesitivity = scrollConst; speedOfActive = 0;
	// 		    	ajaxloader_flag = true;
	// 		    }, 500));
	// 		    if(showBlock && isAttr(prevInnerItem)){
	// 		    	active_drag.unbind('mousewheel');
	// 				prevInnerItem.load('ajax/' + attr, function(){
	// 			    	thisInnerItem.addClass('tyb').delay(500).queue(function(next){
	// 						thisInnerItem.scrollTop(0).removeClass('active_inner tyb').attr('style','').addClass('next_inner_item').next().removeClass('next_inner_item');
	// 						active_drag.bind('mousewheel', mouseWheelFunc);
	// 						next();
	// 		    		});
	//     				prevInnerItem.addClass('tyb').delay(500).queue(function(next){
	// 		    			$(this).removeClass('tyb not_scrollable').attr('style','');
	// 		    			prevInnerItem.removeClass('prev_inner_item').addClass('active_inner').prev().addClass('prev_inner_item');
	// 						updateVNav();
	// 						next();
	// 		    		});
	// 					$(this).removeAttr('data-to-load');
	// 				});

	// 		    	i=0;
	// 		    	scrollSesitivity = scrollConst; speedOfActive = 0;
	// 		    	ajaxloader_flag = true;
	// 			}
	// 		    if(showBlock && !isAttr(prevInnerItem)){
	// 				active_drag.unbind('mousewheel');
	// 		    	thisInnerItem.addClass('tyb').delay(500).queue(function(next){
	// 					thisInnerItem.scrollTop(0).removeClass('active_inner tyb').attr('style','').addClass('next_inner_item').next().removeClass('next_inner_item');
	// 					active_drag.bind('mousewheel', mouseWheelFunc);
	// 					next();
	// 	    		});
 //    				prevInnerItem.addClass('tyb').delay(500).queue(function(next){
	// 	    			$(this).removeClass('tyb not_scrollable').attr('style','');
	// 	    			prevInnerItem.removeClass('prev_inner_item').addClass('active_inner').prev().addClass('prev_inner_item');
	// 	    			updateVNav();
	// 					next();
	// 	    		});
	// 				// prevInnerItem.animate({top: '0'},{duration:500, queue:false, complete: function(){
	// 				// 	thisInnerItem.removeClass('active_inner').addClass('next_inner_item').next().removeClass('next_inner_item');
	// 				// 	prevInnerItem.removeClass('prev_inner_item').addClass('active_inner').prev().addClass('prev_inner_item');
	// 				// 	prevInnerItem.attr('style','').removeClass('not_scrollable');
	// 				// 	updateVNav();
	// 				// 	active_drag.bind('mousewheel', mouseWheelFunc);
	// 				// }});
	// 		    	i=0;
	// 		    	scrollSesitivity = scrollConst; speedOfActive = 0;
	// 		    	ajaxloader_flag = true;
	// 		    }
	// 			speedOfActive += d*10;
	// 			var	speedOfOther = speedOfActive - thisInnerItem.height();

	// 			if(isAttr(prevInnerItem) && !showBlock){
	// 				var ajaxloader;
	// 				if(ajaxloader_flag){
	// 					ajaxloader = prevInnerItem.html('<div class="ajaxloader_bg"></div>');
	// 					ajaxloader_flag = false;
	// 				}
	// 				ajaxloader = prevInnerItem.find('.ajaxloader_bg');
	// 				var heightAjaxloader = Math.abs(y) + $('.top_nav').height();
	// 				ajaxloader.css({height: heightAjaxloader})
	// 				thisInnerItem.css({transform: 'translateY(' + speedOfActive + 'px)'});
	// 				prevInnerItem.css({transform: 'translateY(' + speedOfActive + 'px)', display:'block', overflow: 'hidden'});
	// 			}else if(!isAttr(prevInnerItem) && !showBlock){
	// 				if(!prevInnerItem.hasClass('not_scrollable')){
	// 					prevInnerItem.addClass('not_scrollable');
	// 				}
	// 				thisInnerItem.css({transform: 'translateY(' + speedOfActive + 'px)'});
	// 				prevInnerItem.css({transform: 'translateY(' + speedOfActive + 'px)', display:'block', overflow: 'hidden'});
	// 			}
	// 		}

 //  			e.preventDefault();  // Prevent the window from scrolling
	// 	}
	// }

	// $('.active_drag').bind('mousewheel',mouseWheelFunc);

	// $('.active_drag').bind('mousewheel',function(event,delta){

	// 	var actDrag = $(this);
	// 	thisInnerItem = actDrag.find('.active_inner');
	// 	nextInnerItem = thisInnerItem.next('.next_inner_item');
	// 	prevInnerItem = thisInnerItem.prev('.prev_inner_item');
	// 	var hasnext = nextInnerItem.length;
	// 	var hasprev = prevInnerItem.length;

	// 	// if(actDrag.scrollTop() == 0 && delta > 0){
	// 	// 	if(actDrag.hasClass('oa'))
	// 	// 		actDrag.removeClass('oa');
	// 	// 	return false;
	// 	// }
	// 	distance += delta;
	// 	if(hasnext || hasprev){
	// 		actDrag.css({transform: 'translateY(' + distance + 'px)'});
	// 		// if(delta<0){
	// 		// 	if(nextInnerItem.css('display') == 'none' ){
	// 		// 		nextInnerItem.show();
	// 		// 	}
	// 		// }
	// 		// if(delta>0){
	// 		// 	if(prevInnerItem.css('display') == 'none' ){
	// 		// 		prevInnerItem.show();
	// 		// 	}
	// 		// }
	// 	}
	// })
	var lastScrollTop = 0;
	/*$('.active_drag').on('scroll',function(e){
	   var st = $(this).scrollTop();
	   // if (st > lastScrollTop){
	   // 		console.log('scroll bottom')
	   // } else {
	   // 		console.log('scroll top')
	   // }
	   lastScrollTop = st;
	})*/
	// Reasonable defaults
	var PIXEL_STEP  = 10;
	var LINE_HEIGHT = 40;
	var PAGE_HEIGHT = 800;

	function normalizeWheelSpeed(event) {
	    var normalized;
	    if (event.wheelDelta) {
	        normalized = (event.wheelDelta % 120 - 0) == -0 ? event.wheelDelta / 120 : event.wheelDelta / 12;
	    } else {
	        var rawAmmount = event.deltaY ? event.deltaY : event.detail;
	        normalized = -(rawAmmount % 3 ? rawAmmount * 10 : rawAmmount / 3);
	    }
	    return normalized;
	}
	var distance = 0;
	var antidist = 0;
	var neg = 1;
	var down = true;
	var handleScroll = function(event){
		delta = normalizeWheelSpeed(event);
			var actDrag = $(this);
		thisInnerItem = actDrag.find('.active_inner');
		nextInnerItem = thisInnerItem.next('.next_inner_item');
		prevInnerItem = thisInnerItem.prev('.prev_inner_item');
		var hasnext = nextInnerItem.length;
		var hasprev = prevInnerItem.length;
		toNext = true;
		// if(actDrag.scrollTop() == 0 && delta > 0){
		// 	if(actDrag.hasClass('oa'))
		// 		actDrag.removeClass('oa');
		// 	return false;
		// }
		if(!hasprev && delta > 0 && distance >= 0) return false;
		if(!hasnext && delta < 0) return false;

		distance += delta * 30;
		console.log(distance)
		// antidist += delta * 30 * neg;
		thisInnerItem.css({transform: 'translateY(' + distance + 'px)'});
		// if(delta < 0){
			nextInnerItem.css({transform: 'translateY(' + distance + 'px)', display: 'block', overflow: 'hidden'});
			prevInnerItem.css({transform: 'translateY(' + distance + 'px)', display: 'block', overflow: 'hidden'});

			if(delta > 0)
				down = false;
			else
				down = true;

			if(toNext && Math.abs(distance) >= thisInnerItem.height()){
				if(down){
					thisInnerItem.attr('style', '').removeClass('active_inner').addClass('prev_inner_item');
					prevInnerItem.removeClass('prev_inner_item').attr('style', '');
					nextInnerItem.attr('style', '').removeClass('next_inner_item').addClass('active_inner').next().addClass('next_inner_item');
					distance = 0;
					toNext = false;
				}else{
					thisInnerItem.attr('style', '').removeClass('active_inner').addClass('next_inner_item');
					nextInnerItem.removeClass('next_inner_item').attr('style', '');
					prevInnerItem.attr('style', '').removeClass('prev_inner_item').addClass('active_inner').prev().addClass('prev_inner_item');
					distance = 0;
					toNext = false;
				}
			}
		// }
		// if(delta > 0){
		// 	prevInnerItem.css({transform: 'translateY(' + distance + 'px)', display: 'block', overflow: 'hidden'});
		// 	nextInnerItem.css({transform: 'translateY(' + distance + 'px)'});
		// 	if(toNext && antidist > 0){
		// 		thisInnerItem.attr('style', '').removeClass('active_inner').addClass('next_inner_item');
		// 		nextInnerItem.removeClass('next_inner_item').attr('style', '');
		// 		prevInnerItem.attr('style', '').removeClass('prev_inner_item').addClass('active_inner').prev().addClass('prev_inner_item');
		// 		distance = 0;
		// 		antidist = 0;
		// 		neg = -1;
		// 		toNext = false;
		// 	}
		// }
	}
	document.querySelector('.active_drag').addEventListener('DOMMouseScroll',handleScroll,false); // For Firefox
	document.querySelector('.active_drag').addEventListener('mousewheel',handleScroll,false);     // Everyone else
	$('.inner_block').on('click','.popup_activator',function(e){
		e.preventDefault();
		var popupLink = $(this).attr('href');
		$(popupLink).addClass('active');
	});
	$('.inner_block').on('click','.popup .close_p, .popup>.blur',function(e){
		e.preventDefault();
		var p = $(this).parents('.popup');
		p.removeClass('active');
	})
	$('.inner_block').on('click','.answer',function(e){
		e.preventDefault();
		var answerId = '#answers_' + $(this).attr('id').match(/\d+/);
		$(answerId).fadeIn();
	})
	$('.inner_block').on('click','.answers',function(e){
		e.preventDefault();
		$(this).fadeOut();
	})
	$('.inner_block').on('click','.answers > div > div > span',function(e){
		e.preventDefault();
		var p = $(this).parents('.answers');
		var questionId = '#question_' + p.attr('id').match(/\d+/);

		var textToChange = $(this).html();
		$(questionId).html(textToChange);
	})
	var navToPage = function(e){
		e.preventDefault();
		var href = $(this).attr('href');
		var block = $(href);
		if('#' + $('.active_drag').attr('id') != href){
			updateGalleryClassesByTopNav($(href));
		}
	}
	$('.inner_block').on('click','.space_wrapper a.more_space',navToPage);
	$('.inner_block').on('click','.calendar_tab',function(){
		var p = $(this).parent();
		p.find('.active').removeClass('active');
		$(this).addClass('active');
	});
	$('.inner_block').on('click','.coworking_tab_calc_minus, .coworking_tab_calc_plus', function(){
		var p = $(this).parent();
		var num = p.find('.coworking_tab_calc_num');
		var numV = parseInt(num.html());
		// if(numV === 0){
		// 	return false;
		// }
		if($(this).hasClass('coworking_tab_calc_plus')){
			num.html(numV+1);
		}
		if($(this).hasClass('coworking_tab_calc_minus') && numV > 1){
			num.html(numV-1);
		}
	});
})