// 'use strict';

// var Shuffle = window.Shuffle;



$(function() {

		// import Zoomist styles
//import '../node_modules/zoomist/css'
// import Zoomist
//import Zoomist from '../node_modules/zoomist'

	$('#works .img-slide').click(function() {
		var id = $('#works .img-slide').index($(this));
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


	// Works Filters

	//show UIUX by default
	var defaultTag = "uiux";
	//$("#tab-content .thumb-wrapper").toggle($(this).attr("tag").includes("defaultTag"));
	$("#tab-content .thumb-wrapper").filter(function(){
		$(this).toggle($(this).attr("tag").includes(defaultTag));
	});
	$("#works .nav-item a").filter(function(){
		if ($(this).attr("tag").includes(defaultTag)) {
			
		}
	});

	//filter on clicking tags
	$("#works .nav-item a").on("click", function() {
		var value = $(this).attr("tag");
		console.log(value);
		if (value == "all") {
			$("#tab-content .thumb-wrapper").hide();
			$("#tab-content .thumb-wrapper").fadeIn('slow');
		} else {
			$("#tab-content .thumb-wrapper").filter(function(){
				if ($(this).attr("tag").includes(value)) {
					$(this).hide();
					$(this).fadeIn('slow');
				}
				else {
					$(this).fadeOut('slow');
				}
				//$(this).toggle($(this).attr("tag") == value);
				console.log($(this).attr("tag") == value);
			});
		}
	});

	//update year for copyright
	var d = new Date();
	$('#year').html(d.getFullYear());

	//new Zoomist('#zoomist');
});