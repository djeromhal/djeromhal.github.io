function calcParallax(tileheight, speedratio, scrollposition) {
  //    by Brett Taylor http://inner.geek.nz/
  //    originally published at http://inner.geek.nz/javascript/parallax/
  //    usable under terms of CC-BY 3.0 licence
  //    http://creativecommons.org/licenses/by/3.0/
  return ((tileheight) - (Math.floor(scrollposition / speedratio) % (tileheight+1)));
}

window.onload = function() {

  window.onscroll = function() {
    var posX = (document.documentElement.scrollLeft) ? document.documentElement.scrollLeft : window.pageXOffset;
    var posY = (document.documentElement.scrollTop) ? document.documentElement.scrollTop : window.pageYOffset;
    
    var ground = document.getElementById('ocean');
    var groundparallax = calcParallax(1125, 8, posY);
    ground.style.backgroundPosition = "0 " + groundparallax + "px"; 
  }
}

$(document).ready(function(){
  var speed = 1000;
  $(".animh").animate({'opacity':'1'},speed);
  $(window).scroll(function(){
    var scrollBottom = $(window).scrollTop() + $(window).height();
    if ( scrollBottom > $("header").height() + $("#s1").height()/3) 
      $("#s1").animate({'opacity':'1'},speed);
    if ( scrollBottom > $("header").height() + $("#s1").height() + $("#s2").height()/3) 
      $(".anims2").animate({'opacity':'1'},speed);
    if ( scrollBottom > $("header").height() + $("#s1").height() + $("#s2").height() + $("#s3").height()/3) 
      $("#s3").animate({'opacity':'1'},speed);
    if ( scrollBottom > $("header").height() + $("#s1").height() + $("#s2").height() + $("#s3").height() + $("#s4").height()/3) 
      $(".anims4").animate({'opacity':'1'},speed);
  });
});