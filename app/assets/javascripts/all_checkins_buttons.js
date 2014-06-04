$(window).load(function(){

	// for persistent active buttons on all_checkins page
	
	var hoverLink = function(link){
		$('.view-options').removeClass('current');
		$(link).addClass('current');	
	};

	$('body').on('click', '#locations_links a', function(){
		hoverLink(this);
	});


});