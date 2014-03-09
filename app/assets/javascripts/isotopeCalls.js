$(window).load(function(){ isotope() });


	function isotope(){
		var $container = $('.allCheckins');

		$container.isotope({
			filter: '.all',
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});

		$('.allCheckins_filter a').click(function(){
	     $('.allCheckins_filter .current').removeClass('current');
	     $(this).addClass('current');

	      var selector = $(this).attr('data-filter');
	     	$container.isotope({
	         filter: selector,
	         animationOptions: {
	             duration: 750,
	             easing: 'linear',
	             queue: false
	         }
	      });
	      return false;
	   });

	};
