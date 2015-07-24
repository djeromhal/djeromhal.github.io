var pu = $('#popup');
var bgpu = $('#bgpopup');

$(document).ready(function(){
	$("#writeus").click(function(){
		pu.fadeIn("slow");
		bgpu.fadeIn("slow");
		event.stopPropagation();
	});
	$(document).click( function(event){
		if( $(event.target).closest(pu).length ) 
	        return;
	      pu.fadeOut("slow");
	      bgpu.fadeOut("slow");
	      event.stopPropagation();
		});
});