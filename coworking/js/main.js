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
		speedOfActive;
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
		$('.top_nav, .h_nav_dot').find('.active').removeClass('active');
		var href = $('.active_drag').attr('id');
		var liToActive = $('.top_nav, .h_nav_dot').find('a[href=#'+href+']').parent();
		liToActive.addClass('active');

		// update V Nav
		if($('.block:first-child').hasClass('active_drag')){
			$('.v_nav').fadeIn();
			$('.top_gallery').removeClass('no_v_nav');
		}else{
			$('.v_nav').fadeOut();
			$('.top_gallery').addClass('no_v_nav');
		}
	}
	var updateVNav = function(item) {
		$('.v_nav').find('.active').removeClass('active');
		var href = $('.active_drag .active_inner').attr('id');
		var liToActive = $('.v_nav').find('a[href=#'+href+']').parent();
		liToActive.addClass('active');

		// update Р Nav
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
			item.next().attr('style','').removeClass('active_drag').unbind('mousewheel').draggable("destroy").addClass('next_item').next().attr('style','').removeClass('next_item');
		}else if(item.hasClass('next_item')){
			item.find('.active_inner').attr('style','');
			item.removeClass('next_item toActive').addClass('active_drag').bind('mousewheel', mouseWheelFunc).draggable(draggableOptions).next().addClass('next_item');
			item.prev().attr('style','').removeClass('active_drag').unbind('mousewheel').draggable("destroy").addClass('prev_item').prev().attr('style','').removeClass('prev_item');
		}
		updateNavs();
	}
	var updateGalleryClassesByTopNav = function(item) {
		checkItemOnContinue(item);
		$('.block.active_drag').next().removeClass('next_item');
		$('.block.active_drag').unbind('mousewheel').draggable("destroy").removeClass('active_drag').prev().removeClass('prev_item');
		item.next().addClass('next_item');
		item.draggable(draggableOptions).addClass('active_drag').bind('mousewheel', mouseWheelFunc).prev().addClass('prev_item');
		updateNavs();
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
			parent.animate({top: '0px'},500);
			// thisInnerItem.animate({top: '0px'},500);
			prevInnerItem.animate({top: '0px'},500, function(){
				thisInnerItem.removeClass('active_inner').addClass('next_inner_item').next().removeClass('next_inner_item');
				prevInnerItem.removeClass('prev_inner_item').addClass('active_inner').prev().addClass('prev_inner_item');
				// parent.draggable( "option", "revert", true);
				parent.attr('style','');
				// thisInnerItem.attr('style','');
				prevInnerItem.attr('style','');
				updateVNav();
			});
		}else if(item.hasClass('next_inner_item')){
			var parent = item.parents('.block');
			parent.animate({top: '0px'},500);
			// thisInnerItem.animate({top: '0px'},500);
			nextInnerItem.animate({top: '0px'},500, function(){
				thisInnerItem.removeClass('active_inner').addClass('prev_inner_item').prev().removeClass('prev_inner_item');
				nextInnerItem.removeClass('next_inner_item').addClass('active_inner').next().addClass('next_inner_item');
				// parent.draggable( "option", "revert", true);
				parent.attr('style','');
				// thisInnerItem.attr('style','');
				nextInnerItem.attr('style','');
				updateVNav();
			});
		}
	}
	var updateAxisYGalleryByVNav = function(item){
		$('.active_drag .active_inner').next().removeClass('next_inner_item');
		$('.active_drag .active_inner').removeClass('active_inner').prev().removeClass('prev_inner_item');
		item.next().addClass('next_inner_item');
		item.addClass('active_inner').prev().addClass('prev_inner_item');
		attr = item.attr('data-to-load');
		if(typeof attr !== typeof undefined && attr !== false){
			$('#ajaxloader').css({visibility: 'visible', opacity: '1', height: '100%'})
			item.load('ajax/' + attr, function(){
				$('#ajaxloader').fadeOut(function(){
					$('#ajaxloader').attr('style','');
				});
				$(this).removeAttr('data-to-load');
			});
		}
		updateVNav();	
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
			leftActive = Math.abs(parseInt($(this).css('left')));
			activeWidth = $(this).outerWidth();
			sideToMoveX = (newPosition.left > 0) ? 'right' : (newPosition.left < 0) ? 'left' : false;
			switch(sideToMoveX){
				// IF MOVE BLOCK TO RIGHT SIDE
				case 'right':
					if(!prevItem.length){
						ui.position.left /= NOBLOCKONSIDESPEED;
					}else{
						prevItem.attr('style', 'left: ' + calcPrevItem() + 'px').find('.active_inner').css('display','block');
					}
					break;
				// IF MOVE BLOCK TO left SIDE
				case 'left':
					if(!nextItem.length){
						ui.position.left /= NOBLOCKONSIDESPEED;
					}else{
						nextItem.attr('style','visibility:visible; transform: perspective(500px) translateX(' + calcNextItem(-2, 0) + '%) scale(' + calcNextItem(0.1, 1, true) + ') rotateY(' + calcNextItem(-20, 2) + 'deg); opacity: ' + calcNextItem(0.33, 3, true)).find('.active_inner').css('display','block');;
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
						prevInnerItem.css({top: speedOfOther});
						var ajaxloader = $('#ajaxloader');
						var offsetAjaxloader =  $('.top_nav').height();
						var heightAjaxloader = ui.position.top*2;
						ajaxloader.css({visibility: 'visible', opacity: '1', top: offsetAjaxloader, height: heightAjaxloader})
						prevInnerItem.css({zIndex: '5'});
					}else{
						// thisInnerItem.css({top: speedOfActive});
						prevInnerItem.css({top: speedOfOther});
						prevInnerItem.css({zIndex: '5'});
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
						nextInnerItem.css({top: speedOfOther});
						var ajaxloader = $('#ajaxloader');
						var offsetAjaxloader = speedOfOther + ui.position.top + $('.top_nav').height();
						var heightAjaxloader = thisInnerItem.height() - offsetAjaxloader + $('.top_nav').height();
						ajaxloader.css({visibility: 'visible', opacity: '1', top: offsetAjaxloader, height: heightAjaxloader})
						nextInnerItem.css({zIndex: '5'});
					}else{
						nextInnerItem.css({top: speedOfOther});
						nextInnerItem.css({zIndex: '5'});
					}
					break;
			}
		},
		stop: function(event, ui){
			console.log(ui.position.top);
			// Continue animate ACTIVE if drag and drop on > 300px
			nextItem = $('.next_item');
			prevItem = $('.prev_item');
			if(Math.abs(ui.position.left) > OFFSETTOBLOCKCHANGE){
				console.log('1');
				switch(sideToMoveX){
					case 'right':
						prevItem.addClass('toActive').attr('style','');
						$(this).animate({left: $(this).outerWidth() + 'px'},500, function(){
							// nextItem.attr('style','');
							updateGalleryClasses(prevItem);
							// $(this).attr('style','');
						});
						break;
					case 'left':
						nextItem.addClass('toActive').attr('style','');
						$(this).animate({left: '-' + $(this).outerWidth() + 'px'},500, function(){
							// prevItem.attr('style','');
							updateGalleryClasses(nextItem);
							// $(this).attr('style','');
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
				console.log('3');
				$(this).animate({left: '0px'},500, function(){
					$(this).attr('style','');
					nextItem.attr('style','').find('.active_inner').attr('style','');
					prevItem.attr('style','').find('.active_inner').attr('style','');
				});
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
						prevInnerItem.animate({top: '-100%'},{duration: 500, queue: false, 
							complete: function(){
								$(this).attr('style','');
							}
						});
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
						nextInnerItem.animate({top: '100%'},{duration: 500, queue: false, 
							complete: function(){
								$(this).attr('style','');
							}
						});
						break;
				}
				$(this).animate({top: '0'},{duration: 500, queue: false, 
					complete: function(){
						$(this).attr('style','');
					}
				});
				// thisInnerItem = $(this).find('.active_inner');
				// $(this).animate({top: '0px'},500, function(){
				// 	$(this).attr('style','');
				// });
				// $(this).draggable( "option", "revert", true);
			}
		}
	}
	$('.active_drag').draggable(draggableOptions);

	// GALLERY ARROWS CONTROLL
	$('.top_gallery_arrow_right').click(function(){
		$('.block.next_item .active_inner').show();
		$('.block.next_item').addClass('toActive');
		$('.block.active_drag').animate({left: '-' + $('.block.active_drag').outerWidth() + 'px'},500 ,function(){
			updateGalleryClasses($('.block.next_item'));
		})
	})
	$('.top_gallery_arrow_left').click(function(){
		$('.block.prev_item .active_inner').show();
		$('.block.prev_item').addClass('toActive');
		$('.block.active_drag').animate({left: + $('.block.active_drag').outerWidth() + 'px'},500 ,function(){
			updateGalleryClasses($('.block.prev_item'));
		})
	})

	// TOP NAV AVIMATION
	$('.top_nav ul a, .h_nav_dot ul a').click(function(e){
		e.preventDefault();
		var href = $(this).attr('href');
		// $(href).css({'left':'100%','display':'block'}).addClass('toActiveForce');
		// $('.block.active_drag').animate({left: '-' + $('.block.active_drag').outerWidth() + 'px'},500 ,function(){
			updateGalleryClassesByTopNav($(href));
		// })
	})

	// V NAV AVIMATION
	$('.v_nav ul li').click(function(e){
		e.preventDefault();
		var href = $(this).find('a').attr('href');
		updateAxisYGalleryByVNav($(href));
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
	var scrollSesitivity = 8;
	var offsetActiveDrag;
	var mouseWheelFunc = function(e) {
		var active_drag = $(this);
		thisInnerItem = $(this).find('.active_inner');
		var scrollSide = e.originalEvent.deltaY;
		if(thisInnerItem.hasClass('top_block') || thisInnerItem.scrollTop() == 0 && scrollSide < 0 || thisInnerItem.scrollTop() + thisInnerItem.outerHeight() >= thisInnerItem.children('div').outerHeight()  && scrollSide > 0 ){
			var hasnext = thisInnerItem.next('.next_inner_item').length;
			var hasprev = thisInnerItem.prev('.prev_inner_item').length;
			nextInnerItem = thisInnerItem.next('.next_inner_item');
			prevInnerItem = thisInnerItem.prev('.prev_inner_item');

			var borderToscroll = thisInnerItem.height()/3;
				offsetActiveDrag = Math.abs(parseInt(active_drag.css('top'),10));
			console.log(thisInnerItem.height())
			console.log(thisInnerItem.height()/3)
			var showBlock = false;
			console.log(i)
		    if(offsetActiveDrag>borderToscroll){
		    	showBlock = true;
		    }else{
		    	showBlock = false;
		    }
			if(hasnext && scrollSide > 0 && !prevInnerItem.hasClass('not_scrollable')){
				// if(nextInnerItem.offset().top <= $('.top_nav').height()){
				// 	updateAxisYGallery(nextInnerItem);
				// 	return false;
				// }
				clearTimeout($.data(this, 'scrollTimer'));
			    $.data(this, 'scrollTimer', setTimeout(function() {
					// if (showBlock) {
					// 	if(isAttr(nextInnerItem)){
					// 		nextInnerItem.load('ajax/' + attr, function(){
					// 			$('#ajaxloader').fadeOut(function(){
					// 				$('#ajaxloader').attr('style','');
					// 			});
					// 			updateAxisYGallery(nextInnerItem);
					// 			$(this).removeAttr('data-to-load');
					// 		});
					// 	}
					// }else{
					if (!showBlock) {
						if(isAttr(nextInnerItem)){
							nextInnerItem.load('ajax/' + attr, function(){
								$('#ajaxloader').animate({top: '100%'},{duration:500, queue:false, complete: function(){
									$('#ajaxloader').attr('style','');
					    		}});
						    	active_drag.animate({top:'0'},{duration:500, queue:false, complete: function(){
					    			$(this).attr('style','');
					    		}});
					    		nextInnerItem.animate({top:'100%'},{duration:500, queue:false, complete: function(){
					    			$(this).attr('style','');
					    		}});
								$(this).removeAttr('data-to-load');
							});
						}else{
				    		active_drag.unbind('mousewheel');
					    	active_drag.animate({top:'0'},{duration:500, queue:false, complete: function(){
				    			$(this).attr('style','');
				    		}});
				    		nextInnerItem.animate({top:'100%'},{duration:500, queue:false, complete: function(){
				    			$(this).attr('style','').removeClass('not_scrollable');
								active_drag.bind('mousewheel', mouseWheelFunc);
				    		}});
						}
				    }
			    	i=0;
			    	ajaxloader_flag = true;
			    }, 500));
			    if(showBlock && !isAttr(nextInnerItem)){
			    	active_drag.unbind('mousewheel').animate({top:'0'},{duration:500, queue:false, complete: function(){
		    			$(this).attr('style','');
		    		}});
					nextInnerItem.animate({top: '0'},{duration:500, queue:false, complete: function(){
						thisInnerItem.removeClass('active_inner').addClass('prev_inner_item').prev().removeClass('prev_inner_item');
						nextInnerItem.removeClass('next_inner_item').addClass('active_inner').next().addClass('next_inner_item');
						nextInnerItem.attr('style','').removeClass('not_scrollable');
						updateVNav();
						active_drag.bind('mousewheel', mouseWheelFunc);
					}});
			    	i=0;
			    	ajaxloader_flag = true;
			    }
			    if(showBlock && isAttr(nextInnerItem)){
			    	active_drag.unbind('mousewheel');
					nextInnerItem.load('ajax/' + attr, function(){
				    	active_drag.animate({top:'0'},{duration:500, queue:false, complete: function(){
			    			$(this).attr('style','');
			    		}});
						nextInnerItem.animate({top: '0'},{duration:500, queue:false, complete: function(){
							thisInnerItem.removeClass('active_inner').addClass('prev_inner_item').prev().removeClass('prev_inner_item');
							nextInnerItem.removeClass('next_inner_item').addClass('active_inner').next().addClass('next_inner_item');
							nextInnerItem.attr('style','');
							updateVNav();
							active_drag.bind('mousewheel', mouseWheelFunc);
						}});
						$(this).removeAttr('data-to-load');
					});
			    	i=0;
			    	ajaxloader_flag = true;
				}
				speedOfActive = i++ * -scrollSesitivity;
				var	speedOfOther = speedOfActive + thisInnerItem.height();
				if(isAttr(nextInnerItem) && !showBlock){
					var ajaxloader;
					if(ajaxloader_flag){
						ajaxloader = nextInnerItem.html('<div class="ajaxloader_bg"></div>');
						ajaxloader_flag = false;
					}
					ajaxloader = nextInnerItem.find('.ajaxloader_bg');
					var heightAjaxloader = thisInnerItem.height() + $('.top_nav').height() - parseInt(nextInnerItem.css('top'),10) - parseInt(active_drag.css('top'),10);
					ajaxloader.css({height: heightAjaxloader});
					active_drag.css({top: speedOfActive});
					nextInnerItem.css({zIndex: '5', overflow: 'hidden'});
				}else if(!isAttr(nextInnerItem) && !showBlock){
					if(!nextInnerItem.hasClass('not_scrollable')){
						nextInnerItem.addClass('not_scrollable');
					}
					active_drag.css({top: speedOfActive});
					nextInnerItem.css({zIndex: '5', overflow: 'hidden'});
				}
			}
			if(hasprev && scrollSide < 0 && !nextInnerItem.hasClass('not_scrollable')){
				clearTimeout($.data(this, 'scrollTimer2'));
			    $.data(this, 'scrollTimer2', setTimeout(function() {
					// if (showBlock) {
					// 	if(isAttr(prevInnerItem)){
					// 		prevInnerItem.load('ajax/' + attr, function(){
					// 			$('#ajaxloader').fadeOut(function(){
					// 				$('#ajaxloader').attr('style','');
					// 			});
					// 			updateAxisYGallery(prevInnerItem);
					// 			$(this).removeAttr('data-to-load');
					// 		});
					// 	}
					// }else{
					if (!showBlock) {
						if(isAttr(prevInnerItem)){
							prevInnerItem.load('ajax/' + attr, function(){
								$('#ajaxloader').animate({height: '0'},{duration:500, queue:false, complete: function(){
									$('#ajaxloader').attr('style','');
					    		}});
						    	active_drag.animate({top:'0'},{duration:500, queue:false, complete: function(){
					    			$(this).attr('style','');
					    		}});
					    		prevInnerItem.animate({top:'-100%'},{duration:500, queue:false, complete: function(){
					    			$(this).attr('style','');
					    		}});
								$(this).removeAttr('data-to-load');
							});
						}else{
				    		active_drag.unbind('mousewheel');
					    	active_drag.animate({top:'0'},{duration:500, queue:false, complete: function(){
				    			$(this).attr('style','');
				    		}});
				    		prevInnerItem.animate({top:'-100%'},{duration:500, queue:false, complete: function(){
				    			$(this).attr('style','').removeClass('not_scrollable');
								active_drag.bind('mousewheel', mouseWheelFunc);
				    		}});
						}
				    }
			    	i=0;
			    	ajaxloader_flag = true;
			    }, 500));
			    if(showBlock && !isAttr(prevInnerItem)){
			    	active_drag.unbind('mousewheel').animate({top:'0'},{duration:500, queue:false, complete: function(){
		    			$(this).attr('style','');
		    		}});
					prevInnerItem.animate({top: '0'},{duration:500, queue:false, complete: function(){
						thisInnerItem.removeClass('active_inner').addClass('next_inner_item').next().removeClass('next_inner_item');
						prevInnerItem.removeClass('prev_inner_item').addClass('active_inner').prev().addClass('prev_inner_item');
						prevInnerItem.attr('style','');
						updateVNav();
						active_drag.bind('mousewheel', mouseWheelFunc);
					}});
			    	i=0;
			    	ajaxloader_flag = true;
			    }
			    if(showBlock && isAttr(prevInnerItem)){
			    	active_drag.unbind('mousewheel');
					prevInnerItem.load('ajax/' + attr, function(){
				    	active_drag.animate({top:'0'},{duration:500, queue:false, complete: function(){
			    			$(this).attr('style','');
			    		}});
						prevInnerItem.animate({top: '0'},{duration:500, queue:false, complete: function(){
							thisInnerItem.removeClass('active_inner').addClass('next_inner_item').next().removeClass('next_inner_item');
							prevInnerItem.removeClass('prev_inner_item').addClass('active_inner').prev().addClass('prev_inner_item');
							prevInnerItem.attr('style','');
							updateVNav();
							active_drag.bind('mousewheel', mouseWheelFunc);
						}});
						$(this).removeAttr('data-to-load');
					});
			    	i=0;
			    	ajaxloader_flag = true;
				}
			    if(showBlock && !isAttr(prevInnerItem)){
			    	active_drag.unbind('mousewheel').animate({top:'0'},{duration:500, queue:false, complete: function(){
		    			$(this).attr('style','');
		    		}});
					prevInnerItem.animate({top: '0'},{duration:500, queue:false, complete: function(){
						thisInnerItem.removeClass('active_inner').addClass('next_inner_item').next().removeClass('next_inner_item');
						prevInnerItem.removeClass('prev_inner_item').addClass('active_inner').prev().addClass('prev_inner_item');
						prevInnerItem.attr('style','').removeClass('not_scrollable');
						updateVNav();
						active_drag.bind('mousewheel', mouseWheelFunc);
					}});
			    	i=0;
			    	ajaxloader_flag = true;
			    }
				speedOfActive = i++ * scrollSesitivity;
				var	speedOfOther = speedOfActive - thisInnerItem.height();

				if(isAttr(prevInnerItem) && !showBlock){
					var ajaxloader;
					if(ajaxloader_flag){
						ajaxloader = prevInnerItem.html('<div class="ajaxloader_bg"></div>');
						ajaxloader_flag = false;
					}
					ajaxloader = prevInnerItem.find('.ajaxloader_bg');
					var heightAjaxloader = thisInnerItem.height() + parseInt(prevInnerItem.css('top'),10) + parseInt(active_drag.css('top'),10) + $('.top_nav').height();
					ajaxloader.css({height: heightAjaxloader})
					active_drag.css({top: speedOfActive});
					prevInnerItem.css({zIndex: '5', overflow: 'hidden'});
				}else if(!isAttr(prevInnerItem) && !showBlock){
					if(!prevInnerItem.hasClass('not_scrollable')){
						prevInnerItem.addClass('not_scrollable');
					}
					active_drag.css({top: speedOfActive});
					prevInnerItem.css({zIndex: '5', overflow: 'hidden'});
				}
			}
		}
	}

	var i = 0;
	$('.active_drag').bind('mousewheel', mouseWheelFunc);
})