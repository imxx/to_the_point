$(document).ready(function(){
	
	$('.slider-images').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		centerMode: true,
		slidesToShow: 3,
		sliderPerRow: 3,
		fade: true,
		autoplay: true,
		autoplaySpeed: 3000
	});

});