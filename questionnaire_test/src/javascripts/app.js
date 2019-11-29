var select = document.querySelector('.select-choice');

var curYear = new Date().getFullYear();
const MAX_LIFE_LENGTH = 120;

for(var i=0; i < MAX_LIFE_LENGTH; i++){
	var node = document.createElement("LI");
	node.className = 'select-choice-item';
	node.innerHTML = curYear - i;
	select.appendChild(node);
}

$(function(){
	$('.select-wrapper').on('click', function(e){
		var _this = $(this);
		_this.find('.select-choice').slideToggle();
		_this.toggleClass('show');
	})
	$('.select-choice-item').on('click', function(e){
		var _this = $(this);
		var p = _this.closest('.select-wrapper');
		var input = p.find('input');

		input.val(_this.html());
	})

	$('.range-bg-up').width($('#range').val() + '%');

	$('#range').on("change mousemove touchmove", function() {
		var _this = $(this);
		var p = _this.closest('.range-wrapper');
		var bg = p.find('.range-bg-up');
		bg.width(_this.val()+'%');
	});

    $(".header-item").click(function (e){
    	e.preventDefault();

    	var _this = $(this);
    	var id = _this.attr('href');

    	var hh = 30;
    	if($(window).width() >= 768){
    		hh = $('.header').height();
    	}

        $('html, body').animate({
            scrollTop: $(id).offset().top - hh
        }, 
        300,
    	'linear');

    	var header = $('.header');
    	var burger = $('.burger');

    	burger.toggleClass('on');
    	header.toggleClass('show');

    });

    $('.burger').on('click', function(){
    	var _this = $(this);
    	var header = $('.header');

    	_this.toggleClass('on');
    	header.toggleClass('show');
    })
});