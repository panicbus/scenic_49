$(document).ready(function(){

	$('.drop1').on('click',function(e) {
		$.get("/checkins/1"); 
		// $('.content_div').css({height:"100%"});
		$('.content_div').addClass('enbiggen');
		$('.navbar-toggle').click();
	});

	$('.drop2').on('click',function(e) {
		$.get("/checkins/2");
		$('.content_div').addClass('enbiggen');
		$('.navbar-toggle').click();
	});

	$('.drop3').on('click',function(e) {
		$.get("/checkins/3");
		$('.content_div').addClass('enbiggen');
		$('.navbar-toggle').click();
	});

	$('.drop4').on('click',function(e) {
		$.get("/checkins/4");
		$('.content_div').addClass('enbiggen');
		$('.navbar-toggle').click();
	});

	$('.drop5').on('click',function(e) {
		$.get("/checkins/5");
		$('.content_div').addClass('enbiggen');
		$('.navbar-toggle').click();
	});

	$('.drop6').on('click',function(e) {
		$.get("/checkins/6");
		$('.content_div').addClass('enbiggen');
		$('.navbar-toggle').click();
	});

	$('.drop7').on('click',function(e) {
		$.get("/checkins/7");
		$('.content_div').addClass('enbiggen');
		$('.navbar-toggle').click();
	});

	$('.drop8').on('click',function(e) {
		$.get("/checkins/8");
		$('.content_div').addClass('enbiggen');
		$('.navbar-toggle').click();
	});

	$('.drop9').on('click',function(e) {
		$.get("/checkins/9");
		$('.content_div').addClass('enbiggen');
		$('.navbar-toggle').click();
	});

})