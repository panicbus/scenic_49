$(function(){
	initialize_map();
});


function initialize_map(){

	var	map = new L.mapbox.map('map', 'panicbus.h4on0f5b').setView([37.775,-122.419], 13);

	var stamenLayer = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png', {attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'}).addTo(map);


	// adds the GeoJson to the map layer from route.js
	map.featureLayer.setGeoJSON(geoJson_features);


	// this is the marker click listener 
	map.featureLayer.on('click',function(e) {
		$.get("/checkins/" + e.layer.feature.properties.location_id, e.layer.feature.properties.location_id);
			// .done(function(checkins){
 	    
 	      
 	 //      // protects guestbook from 'undefined' if submit is clicked with blank name field
 	 //      // debugger
 		// 	if (feature.properties.title != undefined) { 
 
 	 //    // iterate thru checkins object in the DB, grab the i element of checkins.name & append to site-1
 	 //    	for (var i = 0; i < checkins.length; i++) {
 	 //        $('#created_container').append('<p><b>' + checkins[i].name + '<b><p>');
 	 //        $('#created_container').append('<p>' + checkins[i].comment + '<p><br>');
 	 //      } 
 
 		//   //   $('#entry_form').fadeIn('slow');
 
 	 //   //    // hides the form after submitting
 		//   //   $('#entry_form').on('submit', function(){
 		//   //   	$('#entry_form').fadeOut('slow');
 		// 		// });
 
 		// 	} // ends append to site-1
 		// }) // ends ajax 
	
	});

	// Closes the marker popup when map is clicked
	map.on('click',function(e){ });


};


