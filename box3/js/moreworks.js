
	$(function(){
		$('#moreworks').click(function(){
			// for (var i = 1; i <= 5; i++) {
			// 	if($('#mw1').attr("src") === "img/works/w"+i+".jpg"){
			// 		$('#mw1').attr('src','img/works/w'+i+'.jpg');
			// 		$('#mw2').attr('src','img/works/w'+i+'.jpg');
			// 		$('#a1').empty();
			// 		$('#a2').empty();
			// 	}
			// 		if(i==1){
			// 			$('#a1').append("<h2 class='bold darkyellow'>Turbo Prelude - проект 'задешман'</h2><p class='medium white' style='font-size:14px'>Не гильзованный закрытый<br>Степень 8.5:1<br>Турба ниссан скайлайн<br>Форсы Эво8<br>Пайпинг универсальный 2.5<br>Кулер универсальный<br>Резинки Atomic sport<br>Hondata s300<br>Мап<br>Запиленый впуск<br>Термолента Summit<br></p>");
			// 			$('#a2').append("<h2 class='bold darkyellow'>Prelude 5</h2><br><p class='medium white'>j32a typeS 260 сил акпп.</p>");
			// 			break;
			// 		}
			// 		if(i==3){
			// 			$('#a1').append("<h2 class='bold darkyellow'>Prelude 5 и Accord 7</h2><br><p class='medium white'>C двигателями J32A и 5ти ступенчатыми автоматами<br>Аккорд первый в России с данным мотором.</p>");
			// 			$('#a2').append("<h2 class='bold darkyellow'>Prelude 5</h2><br><p class='medium white'>свап на 6ст механическую кпп с блокировкой от Acura TL</p>");
			// 			break;
			// 		}
			// 		if(i==5){
			// 			$('#a1').append("<h2 class='bold darkyellow'>Prelude 4</h2><br><p class='medium white'><br>Первый в мире Свап в Prelude 4gen на J32A<br><span class='thin'>Мотор</span> - 3.2 литра Втек V6 от<br>Honda Saber TypeS 260 л.сил<br><span class='thin'>Трансмиссия</span> - Honda odyssey j30a 4wd</p>");
			// 			$('#a2').append("<h2 class='bold darkyellow'>Honda Civic</h2><br><p class='medium white'>Свап с d15b на B16Avtec<br>Розовое подкапотное - выбор хозяина<br>Свап на H22A</p>");
			// 			break;
			// 		}
			// }

			if($('#mw1').attr("src") === "img/works/w1.jpg"){
				$('#mw1').attr('src','img/works/w3.jpg');
				$('#mw2').attr('src','img/works/w4.jpg');
				$('#a1').empty();
				$('#a1').append("<h2 class='bold darkyellow'>Turbo Prelude - проект 'задешман'</h2><p class='medium white' style='font-size:14px'>Не гильзованный закрытый<br>Степень 8.5:1<br>Турба ниссан скайлайн<br>Форсы Эво8<br>Пайпинг универсальный 2.5<br>Кулер универсальный<br>Резинки Atomic sport<br>Hondata s300<br>Мап<br>Запиленый впуск<br>Термолента Summit<br></p>");
				$('#a2').empty();
				$('#a2').append("<h2 class='bold darkyellow'>Prelude 5</h2><br><p class='medium white'>j32a typeS 260 сил акпп.</p>");
			}
			if($('#mw1').attr("src") === "img/works/w5.jpg"){
				$('#mw1').attr('src','img/works/w1.jpg');
				$('#mw2').attr('src','img/works/w2.jpg');
				$('#a1').empty();
				$('#a1').append("<h2 class='bold darkyellow'>Prelude 4</h2><br><p class='medium white'><br>Первый в мире Свап в Prelude 4gen на J32A<br><span class='thin'>Мотор</span> - 3.2 литра Втек V6 от<br>Honda Saber TypeS 260 л.сил<br><span class='thin'>Трансмиссия</span> - Honda odyssey j30a 4wd</p>");
				$('#a2').empty();
				$('#a2').append("<h2 class='bold darkyellow'>Honda Civic</h2><br><p class='medium white'>Свап с d15b на B16Avtec<br>Розовое подкапотное - выбор хозяина<br>Свап на H22A</p>");
			}
			if($('#mw1').attr("src") === "img/works/w3.jpg"){
				$('#mw1').attr('src','img/works/w5.jpg');
				$('#mw2').attr('src','img/works/w6.jpg');
				$('#a1').empty();
				$('#a1').append("<h2 class='bold darkyellow'>Prelude 5 и Accord 7</h2><br><p class='medium white'>C двигателями J32A и 5ти ступенчатыми автоматами<br>Аккорд первый в России с данным мотором.</p>");
				$('#a2').empty();
				$('#a2').append("<h2 class='bold darkyellow'>Prelude 5</h2><br><p class='medium white'>свап на 6ст механическую кпп с блокировкой от Acura TL</p>");
			}

			// var src = ($('#mw1').attr("src") === "img/works/w1.jpg")
   //                  ? "img/works/w3.jpg"
   //                  : "img/works/w1.jpg";
   //    		$('#mw1').attr("src", src);
   //    		src = ($('#mw2').attr("src") === "img/works/w2.jpg")
   //                  ? "img/works/w4.jpg" 
   //                  : "img/works/w2.jpg";
   //    		$('#mw2').attr("src", src);
		});
	});