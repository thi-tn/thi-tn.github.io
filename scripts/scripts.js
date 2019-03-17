$(function() {
	$('#works .img-11').click(function() {
		var id = $('#works .img-11').index($(this));
		$('#works .carousel-item.active').removeClass('active');
		$('#works .carousel-item').eq(id).addClass('active');
		console.log("id", id);
		// var carouselSrc = $(this).attr('src');
		// var carouselAlt = $(this).attr('alt');
		// $('#works .carousel-item img').attr('src', carouselSrc).attr('alt', carouselAlt);
		// $('#works .carousel-item img').eq(id - 1).attr('src', prev.attr('src')).attr('alt', prev.attr('alt'));
		// $('#works .carousel-item img').eq(id + 1).attr('src', next.attr('src')).attr('alt', next.attr('alt'));
	});
	$('nav .navbar-toggler').click(function() {
		$('nav').toggleClass('activeButton');
	});
});