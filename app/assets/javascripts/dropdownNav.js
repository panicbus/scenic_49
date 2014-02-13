$(document).ready(function(){

	$('.drop1').on('click',function(e) {
		$.get("/checkins/1").done(function(checkins){

	    var info = '<h2>Station 1</h2>' +
	               '<p>AIDS Memorial, Golden Gate Park</p>'
	      
	    	document.getElementById('site-1').innerHTML = ' ';
	    	$('#site-title').empty();
	    	$('#site-title').append(info);

	    	for (var i = 0; i < checkins.length; i++) {
	        $('#site-1').append('<p><b>' + checkins[i].name + '<b><p>');
	        $('#site-1').append('<p>' + checkins[i].comment + '<p>');
	      }
			}) 
	});

	$('.drop2').on('click',function(e) {
		$.get("/checkins/2").done(function(checkins){

	    var info = '<h2>Station 2</h2>' +
	               '<p>Embarcadero and the Ferry Building</p>'
	      
	    	document.getElementById('site-1').innerHTML = ' ';
	    	$('#site-title').empty();
	    	$('#site-title').append(info);

	    	for (var i = 0; i < checkins.length; i++) {
	        $('#site-1').append('<p><b>' + checkins[i].name + '<b><p>');
	        $('#site-1').append('<p>' + checkins[i].comment + '<p>');
	      } 
			}) 
		});

	$('.drop3').on('click',function(e) {
		$.get("/checkins/3").done(function(checkins){
		
	    var info = '<h2>Station 3</h2>' +
	               '<p>Laguna Honda and Dewey, Twin Peaks</p>'
	      
		  	document.getElementById('site-1').innerHTML = ' ';
	    	$('#site-title').empty();
	    	$('#site-title').append(info);

	    // iterate thru checkins object in the DB, grab the i element of checkins.name & append to site-1
	    	for (var i = 0; i < checkins.length; i++) {
	        $('#site-1').append('<p><b>' + checkins[i].name + '<b><p>');
	        $('#site-1').append('<p>' + checkins[i].comment + '<p>');
	      }
			}) 
		});

	$('.drop4').on('click',function(e) {
		$.get("/checkins/4").done(function(checkins){
		
	    var info = '<h2>Station 4</h2>' +
	               '<p>Cesar Chavez and Delores, Mission</p>'
	  
	    	document.getElementById('site-1').innerHTML = ' ';
	    	$('#site-title').empty();
	    	$('#site-title').append(info);

	    	for (var i = 0; i < checkins.length; i++) {
	        $('#site-1').append('<p><b>' + checkins[i].name + '<b><p>');
	        $('#site-1').append('<p>' + checkins[i].comment + '<p>');
	      }
			}) 
		});

	$('.drop5').on('click',function(e) {
		$.get("/checkins/5").done(function(checkins){
		
	    var info = '<h2>Station 5</h2>' +
	               '<p>Lincoln Ave and The Great Highway</p>'
	  
	    	document.getElementById('site-1').innerHTML = ' ';
	    	$('#site-title').empty();
	    	$('#site-title').append(info);

	    	for (var i = 0; i < checkins.length; i++) {
	        $('#site-1').append('<p><b>' + checkins[i].name + '<b><p>');
	        $('#site-1').append('<p>' + checkins[i].comment + '<p>');
	      }
			}) 
		});

	$('.drop6').on('click',function(e) {
		$.get("/checkins/6").done(function(checkins){
		
	    var info = '<h2>Station 6</h2>' +
	               '<p>Entrance to the Presidio on Lombard</p>'
	      
		  	document.getElementById('site-1').innerHTML = ' ';
	    	$('#site-title').empty();
	    	$('#site-title').append(info);

	    	for (var i = 0; i < checkins.length; i++) {
	        $('#site-1').append('<p><b>' + checkins[i].name + '<b><p>');
	        $('#site-1').append('<p>' + checkins[i].comment + '<p>');
	      } 
			}) 
		});

	$('.drop7').on('click',function(e) {
		$.get("/checkins/7").done(function(checkins){

	    var info = '<h2>Station 7</h2>' +
	               '<p>Chinatown Gate</p>'

	    	document.getElementById('site-1').innerHTML = ' ';
	    	$('#site-title').empty();
	    	$('#site-title').append(info);

	    	for (var i = 0; i < checkins.length; i++) {
	        $('#site-1').append('<p><b>' + checkins[i].name + '<b><p>');
	        $('#site-1').append('<p>' + checkins[i].comment + '<p>');
	      }
			}) 
		});

	$('.drop8').on('click',function(e) {
		$.get("/checkins/8").done(function(checkins){
		
	    var info = '<h2>Station 8</h2>' +
	               '<p>Civic Center Plaza</p>'
	  
	    	document.getElementById('site-1').innerHTML = ' ';
	    	$('#site-title').empty();
	    	$('#site-title').append(info);

	    	for (var i = 0; i < checkins.length; i++) {
	        $('#site-1').append('<p><b>' + checkins[i].name + '<b><p>');
	        $('#site-1').append('<p>' + checkins[i].comment + '<p>');
	      }
			}) 
		});

	$('.drop9').on('click',function(e) {
		$.get("/checkins/9").done(function(checkins){
		
	    var info = '<h2>Station 9</h2>' +
	               '<p>Finanacial District</p>'
	  
	    	document.getElementById('site-1').innerHTML = ' ';
	    	$('#site-title').empty();
	    	$('#site-title').append(info);

	    	for (var i = 0; i < checkins.length; i++) {
	        $('#site-1').append('<p><b>' + checkins[i].name + '<b><p>');
	        $('#site-1').append('<p>' + checkins[i].comment + '<p>');
	      } 
			}) 
	});

})