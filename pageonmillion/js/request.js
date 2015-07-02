var sentBtn = $('#uznatBtn');
var vspl = $('#vsplivashka');
var bgVspl = $('#bgVsplivashka');

$(document).ready(function(){
	sentBtn.click(function(){
		vspl.show();
		bgVspl.show();
	});
	bgVspl.click(function(){
		vspl.hide();
		bgVspl.hide();
	});
});