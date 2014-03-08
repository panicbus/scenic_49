$(document).ready(function(){

var mq = window.matchMedia( "(min-width: 767px)" ); // protects nav from toggling in full screen on item click

	$('.drop1').on('click',function(e) {
		$.get("/checkins/1"); 
		$('.content_div').animate({height:"100%"}, 1000);
		$('#back_button').fadeIn();
		if (!mq.matches){   // if the screen size is > 767 (javascript media query)
			$('.navbar-toggle').click();
		}
	});

	$('.drop2').on('click',function(e) {
		$.get("/checkins/2");
		$('.content_div').animate({height:"100%"}, 1000);
		$('#back_button').fadeIn();
		if (!mq.matches){
			$('.navbar-toggle').click();
		}
	});

	$('.drop3').on('click',function(e) {
		$.get("/checkins/3");
		$('.content_div').animate({height:"100%"}, 1000);
		$('#back_button').fadeIn();
		if (!mq.matches){
			$('.navbar-toggle').click();
		}
	});

	$('.drop4').on('click',function(e) {
		$.get("/checkins/4");
		$('.content_div').animate({height:"100%"}, 1000);
		$('#back_button').fadeIn();
		if (!mq.matches){
			$('.navbar-toggle').click();
		}
	});

	$('.drop5').on('click',function(e) {
		$.get("/checkins/5");
		$('.content_div').animate({height:"100%"}, 1000);
		$('#back_button').fadeIn();
		if (!mq.matches){
			$('.navbar-toggle').click();
		}
	});

	$('.drop6').on('click',function(e) {
		$.get("/checkins/6");
		$('.content_div').animate({height:"100%"}, 1000);
		$('#back_button').fadeIn();
		if (!mq.matches){
			$('.navbar-toggle').click();
		}
	});

	$('.drop7').on('click',function(e) {
		$.get("/checkins/7");
		$('.content_div').animate({height:"100%"}, 1000);
		$('#back_button').fadeIn();
		if (!mq.matches){
			$('.navbar-toggle').click();
		}
	});

	$('.drop8').on('click',function(e) {
		$.get("/checkins/8");
		$('.content_div').animate({height:"100%"}, 1000);
		$('#back_button').fadeIn();
		if (!mq.matches){
			$('.navbar-toggle').click();
		}
	});

	$('.drop9').on('click',function(e) {
		$.get("/checkins/9");
		$('.content_div').animate({height:"100%"}, 1000);
		$('#back_button').fadeIn();
		if (!mq.matches){
			$('.navbar-toggle').click();
		}
	});

})