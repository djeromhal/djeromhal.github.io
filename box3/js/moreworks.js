	$(function(){
		$('#moreworks').click(function(){
			// $('#mw1').attr('src','img/works/w3.jpg');
			// $('#mw2').attr('src','img/works/w4.jpg');
			var src = ($('#mw1').attr("src") === "img/works/w1.jpg")
                    ? "img/works/w3.jpg" 
                    : "img/works/w1.jpg";
      		$('#mw1').attr("src", src);
      		src = ($('#mw2').attr("src") === "img/works/w2.jpg")
                    ? "img/works/w4.jpg" 
                    : "img/works/w2.jpg";
      		$('#mw2').attr("src", src);
		});
	});