$(function(){
	ajax();
}) 

function ajax(){
	$('body').on('click', '#submit_button', function(event){	
		event.preventDefault();
		
		// creates a hash called 'checkin' with name, comment and location_id 
		// for the ajax call that the controller can parse
		var checkin = {
			checkin:
			{
				name: $('#name').val(),
				comment: $('#comment').val(),
				location_id: $('#location_id').val()
			}
		};

		// appends guestbook immediately on submit button click 
		// and also posts to the appropriate location's DB table via above AJAX call 
		$.post("/checkins", checkin).done(function(checkin){
			$('#site-1').append('<p><b>' + checkin.name + '<b><p>')
			$('#site-1').append('<p>' + checkin.comment + '<p>')
		})

	}) // ends submit button on click
} // ends ajax function
