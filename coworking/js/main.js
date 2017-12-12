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
		if($('.active_drag').attr('id') === 'main_page'){
			$('.v_nav').find('.active').removeClass('active');
			var href;
			if(item !== undefined){
				href = item.attr('id');
			}else{
				href = $('.active_drag .active_inner').attr('id');
			}
			var liToActive = $('.v_nav').find('a[href=#'+href+']').parent();
			liToActive.addClass('active');
			if(!$('.v_nav .active').length){
				$('.top_nav ul li').first().addClass('main_page');
			}else{
				if($('.top_nav ul li.main_page').length){
					$('.top_nav ul li.main_page').removeClass('main_page');
				}
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

			var actDragM = document.querySelector('.active_drag');
				actDragM.removeEventListener('DOMMouseScroll',handleScroll);
				actDragM.removeEventListener('mousewheel',handleScroll);

			$('.active_drag > .inner_block').scrollTop(0);
			item.next().attr('style','').removeClass('active_drag animForward').draggable("destroy").addClass('next_item').next().attr('style','').removeClass('next_item');
			item.removeClass('prev_item toActive').addClass('active_drag').draggable(draggableOptions).prev().addClass('prev_item');
				
				actDragM = document.querySelector('.active_drag');
				actDragM.addEventListener('DOMMouseScroll',handleScroll);
				actDragM.addEventListener('mousewheel',handleScroll);

		}else if(item.hasClass('next_item')){
			item.find('.active_inner').attr('style','');

			var actDragM = document.querySelector('.active_drag');
				actDragM.removeEventListener('DOMMouseScroll',handleScroll);
				actDragM.removeEventListener('mousewheel',handleScroll);

			$('.active_drag > .inner_block').scrollTop(0);
			item.prev().attr('style','').removeClass('active_drag').unbind('mousewheel').draggable("destroy").addClass('prev_item').prev().attr('style','').removeClass('prev_item');
			item.removeClass('next_item toActive').addClass('active_drag').draggable(draggableOptions).next().addClass('next_item');
			
				actDragM = document.querySelector('.active_drag');
				actDragM.addEventListener('DOMMouseScroll',handleScroll);
				actDragM.addEventListener('mousewheel',handleScroll);
		}
		updateNavs();
		checkForContinue();
	}
	var updateGalleryClassesByTopNav = function(item) {
		$('.top_nav ul a').off('click', topNavClick);
		checkItemOnContinue(item);
		var aPos = $('.active_drag').index();
		var nPos = item.index();
		$(document).off('keydown');
		if(nPos > aPos){
			var actDragM = document.querySelector('.active_drag');
				actDragM.removeEventListener('DOMMouseScroll',handleScroll);
				actDragM.removeEventListener('mousewheel',handleScroll);

			$('.block.active_drag').next().removeClass('next_item');
			$('.block.active_drag').prev().removeClass('prev_item');
			$('.block.active_drag').draggable("destroy").addClass('toActive');

			item.show().addClass('next_item',function(){
				$(this).find('.active_inner').show();
				$(this).addClass('toActive').delay(500).queue(function(next){
					$('.active_drag > .inner_block').scrollTop(0);
					$('.active_drag').attr('style','').removeClass('active_drag toActive');

					$(this).draggable(draggableOptions).addClass('active_drag').removeClass('next_item toActive');
					
					actDragM = document.querySelector('.active_drag');
					actDragM.addEventListener('DOMMouseScroll',handleScroll);
					actDragM.addEventListener('mousewheel',handleScroll);
					$(document).keydown(keySwitch);
					$('.top_nav ul a').click(topNavClick);

					$(this).next().addClass('next_item');
					$(this).prev().addClass('prev_item');
					$(this).attr('style','').find('.active_inner').attr('style','');
					updateNavs();
					checkForContinue();
					// update H Nav
					if($(this).find('.inner_block:first-child').hasClass('active_inner')){
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
			var actDragM = document.querySelector('.active_drag');
				actDragM.removeEventListener('DOMMouseScroll',handleScroll);
				actDragM.removeEventListener('mousewheel',handleScroll);
			$('.block.active_drag').next().removeClass('next_item');
			$('.block.active_drag').prev().removeClass('prev_item');
			$('.block.active_drag').draggable("destroy").addClass('animForward');
			item.show().addClass('prev_item',function(){
				$(this).find('.active_inner').show();
				$(this).addClass('toActive').delay(500).queue(function(next){
					$('.active_drag > .inner_block').scrollTop(0);
					$('.active_drag').attr('style','').removeClass('active_drag animForward');
					$(this).draggable(draggableOptions).addClass('active_drag').removeClass('prev_item toActive');
					actDragM = document.querySelector('.active_drag');
					actDragM.addEventListener('DOMMouseScroll',handleScroll);
					actDragM.addEventListener('mousewheel',handleScroll);
					$(document).keydown(keySwitch);
					$('.top_nav ul a').click(topNavClick);

					$(this).next().addClass('next_item');
					$(this).prev().addClass('prev_item');
					$(this).attr('style','').find('.active_inner').attr('style','');
					updateNavs();
					checkForContinue();
					// update H Nav
					if($(this).find('.inner_block:first-child').hasClass('active_inner')){
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
		var aPos;
		var lastAI;
		if(item.attr('id') === 'main_page_top' && $('.active_drag').attr('id') !== 'main_page'){
			aPos = $('#main_page .active_inner').index();
			lastAI = $('#main_page .active_inner');

			lastAI.next().removeClass('next_inner_item');
			lastAI.prev().removeClass('prev_inner_item');

			item.addClass('active_inner').removeClass('prev_inner_item').attr('style','');
			previ.addClass('prev_inner_item');
			nexti.addClass('next_inner_item');
			lastAI.removeClass('active_inner').attr('style','');

			$('.v_nav').find('.active').removeClass('active');
			var href;
			if(item !== undefined){
				href = item.attr('id');
			}else{
				href = $('.active_drag .active_inner').attr('id');
			}
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
			return false;
		}else{
			aPos = $('.active_drag .active_inner').index();
			lastAI = $('.active_drag .active_inner');
		}
		var nPos = item.index();
			
		lastAI.next().removeClass('next_inner_item');
		lastAI.prev().removeClass('prev_inner_item');

		if(nPos > aPos){
			item.show().css({top: '100%'}).animate({top:'0'},500,'easeOutCubic',function(){
				item.addClass('active_inner').removeClass('next_inner_item').attr('style','');
				previ.addClass('prev_inner_item');
				nexti.addClass('next_inner_item');
				updateVNav(item);
			})
			lastAI.animate({top:'-100%'},500,'easeOutCubic',function(){
				lastAI.scrollTop(0).removeClass('active_inner').attr('style','');
				checkForContinue();
			})
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
			item.show().css({top: '-100%'}).animate({top:'0'},500,'easeOutCubic',function(){
				item.addClass('active_inner').removeClass('prev_inner_item').attr('style','');
				previ.addClass('prev_inner_item');
				nexti.addClass('next_inner_item');
				updateVNav(item);
			})
			lastAI.animate({top:'100%'},500,'easeOutCubic',function(){
				lastAI.scrollTop(0).removeClass('active_inner').attr('style','');
				checkForContinue();
			})
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
				parent.draggable(draggableOptions).attr('style','');
				// thisInnerItem.attr('style','');
				prevInnerItem.attr('style','');
				updateVNav();
				checkForContinue();
			});
		}else if(item.hasClass('next_inner_item')){
			var parent = item.parents('.block');
			parent.animate({top: '-100%'},500, 'easeOutCubic', function(){
				thisInnerItem.scrollTop(0).removeClass('active_inner').addClass('prev_inner_item').prev().removeClass('prev_inner_item');
				nextInnerItem.removeClass('next_inner_item').addClass('active_inner').next().addClass('next_inner_item');
				// parent.draggable( "option", "revert", true);
				parent.draggable(draggableOptions).attr('style','');
				// thisInnerItem.attr('style','');
				nextInnerItem.attr('style','');
				updateVNav();
				checkForContinue();				
			});
		}
		$('.popup').removeClass('active');
	}

	var toTransform = true;
	var draggableOptions = { 
		revert: false, 
		delay: 0, 
		distance: 0,
		dynamic: false,
		queue: false,
		// axis: 'y',
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
							if(toTransform){
								prevItem.show().find('.active_inner').show();
							}
                			prevItem.css({transform: 'translateX(' + ui.offset.left + 'px)'});
                			nextItem.attr('style','');
                		})
						// prevItem.attr('style', 'display:block; left: ' + calcPrevItem() + 'px').find('.active_inner').css('display','block');
						// $(this).attr('style','display:block; transform: perspective(500px) translateX(' + calcNextItem(0, -2) + '%) scale(' + calcNextItem(1, 0.1, true) + ') rotateY(' + calcNextItem(2, -2) + 'deg); opacity: ' + calcNextItem(3, 0.33, true)).find('.active_inner').css('display','block');;
						$(this).attr('style','transform-origin: 100% 50%; transform: perspective(500px) translateX(' + (-4 + calcNextItem(4)) + '%) scale(' + (1 + 0.9 - calcNextItem(0.1, 1, true)) + ') rotateY(' + (-4 + calcNextItem(4)) + 'deg); opacity: ' + (1 + 0.66 - calcNextItem(0.33, 3, true)));
						// console.log(calcNextItem(0, -2))
					}
					break;
				// IF MOVE BLOCK TO left SIDE
				case 'left':
					if(!nextItem.length){
						ui.position.left /= NOBLOCKONSIDESPEED;
					}else{
						// ui.position.left = 0;
						// $(this).on('mousemove', mousemoveFunc);
						// ui.position.left = 0;
						// console.log(ui.helper.offset());
						if(toTransform){
							$(this).css({position: 'static'});
							toTransform = true;
                			prevItem.attr('style','');
						}
						$(this).css({transform:'translateX('+ui.position.left+'px)'});
						nextItem.attr('style','display:block; visibility:visible; transform: perspective(500px) translateX(' + calcNextItem(-4, 0) + '%) scale(' + calcNextItem(0.1, 1, true) + ') rotateY(' + calcNextItem(-4, 2) + 'deg); opacity: ' + calcNextItem(0.33, 3, true)).find('.active_inner').css('display','block');
					}
					break;
			}
			sideToMoveY = (newPosition.top > 0) ? 'bottom' : (newPosition.top < 0) ? 'top' : false;
			console.log(newPosition.left);
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
						$(this).addClass('transOut').delay(500).queue(function(next){
							$(this).removeClass('transOut').attr('style','');
							next();
						});
						break;
				}
				toTransform = true;
				// $(this).draggable( "option", "revert", true);
			}else if(Math.abs(ui.position.top) > OFFSETTOBLOCKCHANGE){
				$(this).draggable("destroy");
				console.log('2');
				switch(sideToMoveY){
					// IF MOVE BLOCK TO BOTTOM SIDE
					case 'bottom':
						if(typeof attr !== typeof undefined && attr !== false){
							var allToLoad = $('.active_drag>.inner_block[data-to-load]');
							var attrEach;
							var countAttr = 0;
							var attrLength = allToLoad.length;
							allToLoad.each(function(){
								attrEach = $(this).attr('data-to-load');
								if(typeof attrEach !== typeof undefined && attrEach !== false){
									$(this).load('ajax/' + attrEach, function(){
										countAttr++;
										$(this).removeAttr('data-to-load');
										if(countAttr == attrLength){
											$('#ajaxloader').animate({top: '-100%'},500, 'easeOutCubic', function(){
												$('#ajaxloader').attr('style','');
											});
										}
									});
								}
							})
							// prevInnerItem.load('ajax/' + attr, function(){
							// 	$('#ajaxloader').fadeOut(function(){
							// 		$('#ajaxloader').attr('style','');
							// 	});
							// 	$(this).removeAttr('data-to-load');
							// });
						}
						updateAxisYGallery(prevInnerItem);
						break;
					// IF MOVE BLOCK TO TOP SIDE
					case 'top':
						if(typeof attr !== typeof undefined && attr !== false){
							var allToLoad = $('.active_drag>.inner_block[data-to-load]');
							var attrEach;
							var countAttr = 0;
							var attrLength = allToLoad.length;
							allToLoad.each(function(){
								attrEach = $(this).attr('data-to-load');
								if(typeof attrEach !== typeof undefined && attrEach !== false){
									$(this).load('ajax/' + attrEach, function(){
										countAttr++;
										$(this).removeAttr('data-to-load');
										if(countAttr == attrLength){
											$('#ajaxloader').animate({top: '-100%'},500, 'easeOutCubic', function(){
												$('#ajaxloader').attr('style','');
											});
										}
									});
								}
							})
							// nextInnerItem.load('ajax/' + attr, function(){
							// 	$('#ajaxloader').fadeOut(function(){
							// 		$('#ajaxloader').attr('style','');
							// 	});
							// 	$(this).removeAttr('data-to-load');
							// });
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
						prevItem.addClass('transIn').delay(800).queue(function(next){
							$(this).removeClass('transIn');
							nextItem.attr('style','').find('.active_inner').attr('style','');
							prevItem.attr('style','').find('.active_inner').attr('style','');
							next();
						});
						p.addClass('animBack').delay(500).queue(function(next){
							$(this).attr('style','').removeClass('animBack rightForbidden');
							next();
						})
						break;
					case 'left':
						$(this).addClass('transIn').delay(800).queue(function(next){
							$(this).removeClass('transIn').attr('style','');
							nextItem.attr('style','').find('.active_inner').attr('style','');
							prevItem.attr('style','').find('.active_inner').attr('style','');
							next();
						});
						break;
				}
				toTransform = true;
			}else if(Math.abs(ui.position.top) <= OFFSETTOBLOCKCHANGE && Math.abs(ui.position.top) !== 0){
				$(this).draggable("destroy");
				switch(sideToMoveY){
					// IF MOVE BLOCK TO BOTTOM SIDE
					case 'bottom':
						if(typeof attr !== typeof undefined && attr !== false){
							// prevInnerItem.load('ajax/' + attr, function(){
								$('#ajaxloader').animate({height: '0'},function(){
									$('#ajaxloader').attr('style','');
								});
								// $(this).removeAttr('data-to-load');
							// });
						}
						break;
					// IF MOVE BLOCK TO TOP SIDE
					case 'top':
						if(typeof attr !== typeof undefined && attr !== false){
							// nextInnerItem.load('ajax/' + attr, function(){
								$('#ajaxloader').animate({top: '100%'},function(){
									$('#ajaxloader').attr('style','');
								});
								// $(this).removeAttr('data-to-load');
							// });
						}
						break;
				}
				$(this).animate({top: '0'},500, 'easeOutCubic', function(){
					$(this).draggable(draggableOptions).attr('style','');
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
		updateGalleryClassesByTopNav($('.block.next_item'));
	})
	$('.top_gallery_arrow_left').click(function(){
		updateGalleryClassesByTopNav($('.block.prev_item'));
	})

	// TOP NAV AVIMATION
	function topNavClick(e){
		e.preventDefault();
		var href = $(this).attr('href');
		var block = $(href);
		if('#' + $('.active_drag').attr('id') != href){
			updateGalleryClassesByTopNav($(href));
		}

	}
	$('.top_nav ul a').click(topNavClick);

	function mainPageClick(e){
		e.preventDefault();
		var href = $(this).attr('href');
		var block = $(href);
		if($('.v_nav ul li').hasClass('active')){
			updateAxisYGalleryByVNav($('#main_page_top'));
		}
	}
	$('#main_page_link').click(mainPageClick);
	// V NAV AVIMATION
	function v_nav_anim(e){
		e.preventDefault();
		var href = $(this).find('a').attr('href');
		if('#' + $('.active_drag .active_inner').attr('id') != href){
			updateAxisYGalleryByVNav($(href));
		}
	}
	$('.v_nav ul li').click(v_nav_anim);


	var ajaxloader_flag = true;
	var scrollConst = 3;
	var scrollSesitivity = scrollConst;
	var offsetActiveDrag;
	var i = 0;

	var speedOfActive = 0;
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
	// Reasonable defaults
	var PIXEL_STEP  = 10;
	var LINE_HEIGHT = 40;
	var PAGE_HEIGHT = $(document).height();

	function normalizeWheel(/*object*/ event) /*object*/ {
	  var sX = 0, sY = 0,       // spinX, spinY
	      pX = 0, pY = 0;       // pixelX, pixelY

	  // Legacy
	  if ('detail'      in event) { sY = event.detail; }
	  if ('wheelDelta'  in event) { sY = -event.wheelDelta / 120; }
	  if ('wheelDeltaY' in event) { sY = -event.wheelDeltaY / 120; }
	  if ('wheelDeltaX' in event) { sX = -event.wheelDeltaX / 120; }

	  // side scrolling on FF with DOMMouseScroll
	  if ( 'axis' in event && event.axis === event.HORIZONTAL_AXIS ) {
	    sX = sY;
	    sY = 0;
	  }

	  pX = sX * PIXEL_STEP;
	  pY = sY * PIXEL_STEP;

	  if ('deltaY' in event) { pY = event.deltaY; }
	  if ('deltaX' in event) { pX = event.deltaX; }

	  if ((pX || pY) && event.deltaMode) {
	    if (event.deltaMode == 1) {          // delta in LINE units
	      pX *= LINE_HEIGHT;
	      pY *= LINE_HEIGHT;
	    } else {                             // delta in PAGE units
	      pX *= PAGE_HEIGHT;
	      pY *= PAGE_HEIGHT;
	    }
	  }

	  // Fall-back if spin cannot be determined
	  if (pX && !sX) { sX = (pX < 1) ? -1 : 1; }
	  if (pY && !sY) { sY = (pY < 1) ? -1 : 1; }

	  return { spinX  : sX,
	           spinY  : sY,
	           pixelX : pX,
	           pixelY : pY };
	}

	var isAttr = function(item) {
		attr = item.attr('data-to-load');
		if(typeof attr !== typeof undefined && attr !== false){
			return true;
		}else{
			return false;
		}
	}

	var actDragM = document.querySelector('.active_drag');
	var distance = 0;
	var antidist = 0;
	var neg = 1;
	var down = true;
	var ajaxloader;
	var ajaxloader_flag = true;
	var timer = true;
	var noscroll = false;

	var checkForContinue = function(){
		aH = $('.active_drag').find('.active_inner');
		aCH = aH.children('div');
		if(aH.outerHeight() < aCH.outerHeight()){
			noscroll = true;
			aH.attr('style','');
		}
	}
	var endItemOnScroll = function(delta){
		var aH = $('.active_drag .active_inner');
		var aCH = aH.children('div');
		if(Math.floor(aH.scrollTop()) === 0 && delta > 0 || Math.abs(aH.scrollTop() + aH.outerHeight() - aCH.outerHeight()) <= 3 && delta < 0){
			noscroll = false;
		}
	}
	var handleScroll = function(event){
		delta = -normalizeWheel(event).spinY;
		// delta = normalizeWheelSpeed(event);
		var actDrag = $(this);
		thisInnerItem = actDrag.find('.active_inner');
		nextInnerItem = thisInnerItem.next('.next_inner_item');
		prevInnerItem = thisInnerItem.prev('.prev_inner_item');
		var hasnext = nextInnerItem.length;
		var hasprev = prevInnerItem.length;
		toNext = true;

		if(!hasprev && delta > 0 && distance >= 0) return false;
		if(!hasnext && delta < 0) return false;

		var aH = thisInnerItem;
		var aCH = aH.children('div');
		if(aH.outerHeight() >= aCH.outerHeight()){
			noscroll = false;
		}
		endItemOnScroll(delta);
		console.log(noscroll)
		if(noscroll){
			return false;
		}

		$('.v_nav ul li').off('click');
		$('#main_page_link').off('click', mainPageClick);
		// CHECK FOR SCROLLABILITY
		checkForContinue();
		distance += delta * 40;

		thisInnerItem.css({transform: 'translateY(' + distance + 'px)', overflow: 'hidden'});

		if(distance > 0){
			prevInnerItem.css({transform: 'translateY(' + distance + 'px)', display: 'block', overflow: 'hidden'});
		}else{
			nextInnerItem.css({transform: 'translateY(' + distance + 'px)', display: 'block', overflow: 'hidden'});
		}

		if(delta > 0)
			down = false;
		else
			down = true;

		if(toNext && Math.abs(distance) >= thisInnerItem.height()){
			if(down){
				thisInnerItem.attr('style', '').removeClass('active_inner').addClass('prev_inner_item');
				prevInnerItem.removeClass('prev_inner_item').attr('style', '');
				nextInnerItem.attr('style', '').removeClass('next_inner_item').addClass('active_inner').next().addClass('next_inner_item');
			}else{
				thisInnerItem.attr('style', '').removeClass('active_inner').addClass('next_inner_item');
				nextInnerItem.removeClass('next_inner_item').attr('style', '');
				prevInnerItem.attr('style', '').removeClass('prev_inner_item').addClass('active_inner').prev().addClass('prev_inner_item');
			}
			checkForContinue();
			updateVNav();
			distance = 0;
			toNext = false;
		}

		if(isAttr(nextInnerItem) && delta < 0){
			ajaxloader_flag = true;
		}
		if(isAttr(prevInnerItem) && delta > 0){
			ajaxloader_flag = true;
		}

		clearTimeout($.data(this, 'scrollTimer'));
		$.data(this, 'scrollTimer', setTimeout(function() {
			if(timer){
				if(Math.abs(distance) > thisInnerItem.height() / 2){
					if(distance > 0){
						thisInnerItem.addClass('tyb').delay(400).queue(function(next){
							$(this).attr('style','').removeClass('tyb active_inner').addClass('next_inner_item');
							next();
						})
						prevInnerItem.addClass('tyb').delay(400).queue(function(next){
							$(this).attr('style','').removeClass('tyb prev_inner_item').addClass('active_inner').prev().addClass('prev_inner_item');
							checkForContinue();
							updateVNav();
							$('.v_nav ul li').click(v_nav_anim);
							$('#main_page_link').click(mainPageClick);
							next();
						})
					}else{
						thisInnerItem.addClass('tyt').delay(400).queue(function(next){
							$(this).attr('style','').removeClass('tyt active_inner').addClass('prev_inner_item');
							next();
						})
						nextInnerItem.addClass('tyt').delay(400).queue(function(next){
							$(this).attr('style','').removeClass('tyt next_inner_item').addClass('active_inner').next().addClass('next_inner_item');
							checkForContinue();
							updateVNav();
							$('.v_nav ul li').click(v_nav_anim);
							$('#main_page_link').click(mainPageClick);
							next();
						})
					}
				}else{
					thisInnerItem.addClass('ty0').delay(400).queue(function(next){
						$(this).attr('style','').removeClass('ty0');
						next();
					})
					prevInnerItem.addClass('ty0').delay(400).queue(function(next){
						$(this).attr('style','').removeClass('ty0');
						next();
					})
					nextInnerItem.addClass('ty0').delay(400).queue(function(next){
						$(this).attr('style','').removeClass('ty0');
						delta = delta > 0 ? -Math.abs(delta) : Math.abs(delta);
						checkForContinue();
						$('.v_nav ul li').click(v_nav_anim);
						$('#main_page_link').click(mainPageClick);
						next();
					})
				}
				distance = 0;
			}
		}, 500));
		// ajax load
		if(ajaxloader_flag && isAttr(nextInnerItem) && delta < 0 || ajaxloader_flag && isAttr(prevInnerItem) && delta > 0){
			var nextToAnim;
			var heightAjaxloader;
			var ANIMFORACTIVELOAD;
			var ANIMTY;
			var ADDCLASSCONST1;
			var ADDCLASSCONST2;
			if(isAttr(nextInnerItem) && distance <= 0){
				console.log('next')
				nextToAnim = nextInnerItem;
				ANIMFORACTIVELOAD = 'anim_ajax_top';
				ANIMTY = 'tyt';
				ADDCLASSCONST1 = 'prev_inner_item';
				ADDCLASSCONST2 = 'next_inner_item';
			}else if(isAttr(prevInnerItem) && distance > 0){
				console.log('prev')
				nextToAnim = prevInnerItem;
				ANIMFORACTIVELOAD = 'anim_ajax_bottom';
				ANIMTY = 'tyb';
				ADDCLASSCONST1 = 'next_inner_item';
				ADDCLASSCONST2 = 'prev_inner_item';
			}

			ajaxloader = nextToAnim.html('<div class="ajaxloader_bg"></div>');
			ajaxloader = nextToAnim.find('.ajaxloader_bg');
			heightAjaxloader = Math.abs(distance);
			ajaxloader.css({height: heightAjaxloader});
				console.log('fff222222fffff')

			// if > 100 - freeze document and load next page
			if(Math.abs(distance)>100){
				console.log('fffffffff')
				timer = false;
				actDragM = document.querySelector('.active_drag');
				actDragM.removeEventListener('DOMMouseScroll',handleScroll);
				actDragM.removeEventListener('mousewheel',handleScroll);
				ajaxloader_flag = false;

				thisInnerItem.addClass(ANIMFORACTIVELOAD);
				nextToAnim.addClass('anim_ajax').delay(500).queue(function(next){

					var allToLoad = $('.active_drag>.inner_block[data-to-load]');
					var attrEach;
					var countAttr = 0;
					var attrLength = allToLoad.length;
					allToLoad.each(function(){
						attrEach = $(this).attr('data-to-load');
						if(typeof attrEach !== typeof undefined && attrEach !== false){
							$(this).load('ajax/' + attrEach, function(){
								countAttr++;
								$(this).removeAttr('data-to-load');
								if(countAttr == attrLength){
									thisInnerItem.addClass(ANIMTY).removeClass(ANIMFORACTIVELOAD);
									nextToAnim.removeClass('anim_ajax').addClass(ANIMTY).delay(800).queue(function(nextt){
										thisInnerItem.attr('style', '').removeClass('active_inner').addClass(ADDCLASSCONST1);
										nextToAnim.removeClass(ANIMTY);
										thisInnerItem.removeClass(ANIMTY);

										if(nextToAnim.hasClass('next_inner_item')){
											prevInnerItem.removeClass('prev_inner_item').attr('style', '');
											nextToAnim.attr('style', '').removeClass('next_inner_item').addClass('active_inner').next().addClass('next_inner_item');
										}
										if(nextToAnim.hasClass('prev_inner_item')){
											nextInnerItem.removeClass('next_inner_item').attr('style', '');
											nextToAnim.attr('style', '').removeClass('prev_inner_item').addClass('active_inner').prev().addClass('prev_inner_item');
										}

										actDragM.addEventListener('DOMMouseScroll',handleScroll);
										actDragM.addEventListener('mousewheel',handleScroll);

										distance = 0;
										toNext = false;
										timer = true;
										if(isAttr(actDrag.find('.' + ADDCLASSCONST2))){
											ajaxloader_flag = true;
										}

										checkForContinue();
										updateVNav();
										nextt();
									});
								}
							});
						}
					})
					// $(this).load('ajax/' + attr, function(){
					// 	$(this).removeAttr('data-to-load');
					// 	thisInnerItem.addClass(ANIMTY).removeClass(ANIMFORACTIVELOAD);
					// 	$(this).removeClass('anim_ajax').addClass(ANIMTY).delay(800).queue(function(nextt){
					// 		thisInnerItem.attr('style', '').removeClass('active_inner').addClass(ADDCLASSCONST1);
					// 		$(this).removeClass(ANIMTY);
					// 		thisInnerItem.removeClass(ANIMTY);

					// 		if(nextToAnim.hasClass('next_inner_item')){
					// 			prevInnerItem.removeClass('prev_inner_item').attr('style', '');
					// 			nextToAnim.attr('style', '').removeClass('next_inner_item').addClass('active_inner').next().addClass('next_inner_item');
					// 		}
					// 		if(nextToAnim.hasClass('prev_inner_item')){
					// 			nextInnerItem.removeClass('next_inner_item').attr('style', '');
					// 			nextToAnim.attr('style', '').removeClass('prev_inner_item').addClass('active_inner').prev().addClass('prev_inner_item');
					// 		}

					// 		actDragM.addEventListener('DOMMouseScroll',handleScroll);
					// 		actDragM.addEventListener('mousewheel',handleScroll);

					// 		distance = 0;
					// 		toNext = false;
					// 		timer = true;
					// 		if(isAttr(actDrag.find('.' + ADDCLASSCONST2))){
					// 			ajaxloader_flag = true;
					// 		}

					// 		checkForContinue();
					// 		updateVNav();
					// 		nextt();
					// 	});
					// });
					next();
					return false;
				})
			}
		}
	}
	actDragM.addEventListener('DOMMouseScroll',handleScroll,false); // For Firefox
	actDragM.addEventListener('mousewheel',handleScroll,false);     // Everyone else

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
	$('.inner_block').on('click','.answers > div > div > div',function(e){
		e.stopPropagation();
	})
	$('.inner_block').on('click','.answers',function(e){
		e.preventDefault();

		var inputs = $(this).find('input');
		if(inputs.length){
			var p = $(this);
			var questionId = '#question_' + p.attr('id').match(/\d+/);

			var textToChange = '';
			inputs.each(function(idx){
				if($(this).attr('name') == 'year')
					return false;
				textToChange = $(this).val();
				$(questionId).find('span').eq(idx).html(textToChange);
			})
		}
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
	var keySwitch = function(e){
		switch(e.which){
			case 37:
				if($('.active_drag').prev().hasClass('prev_item'))
					updateGalleryClassesByTopNav($('.block.prev_item'));
				break;
			case 39:
				if($('.active_drag').next().hasClass('next_item'))
					updateGalleryClassesByTopNav($('.block.next_item'));
				break;
			case 38:
				if($('.active_drag .active_inner').prev().hasClass('prev_inner_item'))
					updateAxisYGalleryByVNav($('.active_drag .active_inner').prev());
				break;
			case 40:
				if($('.active_drag .active_inner').next().hasClass('next_inner_item'))
					updateAxisYGalleryByVNav($('.active_drag .active_inner').next());
				break;
		}
	}
	$(document).keydown(keySwitch);
})