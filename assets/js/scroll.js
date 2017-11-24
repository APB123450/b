$(document).ready(function(){
// sacar altura del menú
// saber donde está el scroll

	// var logo = $('.logo');
	
	$(window).on('scroll', function(){
		if ($(window).scrollTop() > 30){
			$('.header').addClass('fixed');
			$('.logo').addClass('logo-fixed');
		} else {
			$('.header').removeClass('fixed');
			$('.logo').removeClass('logo-fixed');
		}
	});
 
// window.onscroll = function() {
// 	if (window.scrollY > total) {
// 		menu.classList.add('fixed');
// 		logo.classList.add('logo-fixed');
// 	} else {
// 		menu.classList.remove('fixed');
// 		logo.classList.remove('logo-fixed');
// 	}
// }


});