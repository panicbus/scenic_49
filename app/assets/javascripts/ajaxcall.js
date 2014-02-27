// $(function(){
// 	ajax();
// }) 

// function ajax(){
// 	$('body').on('submit', '#checkin_form', function(event){	
// 		event.preventDefault();

// 		// to keep line breaks in comments (.replace == gsub)	
// 		var comment_content = $('#comment').val()
// 		comment = comment_content.replace('\n', '<br>');
// 		comment = comment_content.replace('\n\n', '<br><br>');

// 		// creates a hash called 'checkin' with name, comment and location_id 
// 		// for the ajax call that the controller can parse
// 		var checkin = {
// 			checkin:
// 			{
// 				name: $('#name').val(),
// 				comment: comment, // see above for variable content
// 				photo: $('#photo').val(),
// 				location_id: $('#location_id').val()
// 			}
// 		};

// 		// appends guestbook immediately on submit button click 
// 		// and also posts to the appropriate location's DB table via above AJAX call 
		
// 		$.post("/checkins", checkin).done(function(checkin){
// 			$('#name').val(''); // empties the form fields
// 			$('#comment').val('');
// 			if (checkin.name != undefined){  // keeps from posting to Guestbook if name is not entered
// 				$('#site-1').prepend('<p>' + checkin.comment + '<p><br>');
// 				$('#site-1').prepend('<p><b>' + checkin.name + '<b><p>');
// 			}
// 		})


// 	}) // ends submit button on click
// } // ends ajax function
