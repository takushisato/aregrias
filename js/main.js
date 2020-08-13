//jquery 
$(function(){
	  $('.top-img-eria').slick({
		accessibility: true,
		autoplay: true,
		autoplaySpeed: 3000,
		dots: true,
		fade: true,
    });

	  $('.balcony-img-eria').slick({
		accessibility: true,
		autoplay: true,
		autoplaySpeed: 3000,
		dots: true,
		fade: true,
    });

		$('a[href^="#"]').click(function() {
		var speed = 400;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top-60;
		$('body, html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
});

//生
function showElementAnimation() {

  var element = document.getElementsByClassName('js-animation');
  if(!element) return; 
  
  var showTiming = window.innerHeight > 768 ? 200 : 40;
  var scrollY = window.pageYOffset;
  var windowH = window.innerHeight;

  for(var i=0;i<element.length;i++) { var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if(scrollY + windowH - showTiming > elemY) {
      element[i].classList.add('is-show');
    } else if(scrollY + windowH < elemY) {
      
      element[i].classList.remove('is-show');
    }
  }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);




