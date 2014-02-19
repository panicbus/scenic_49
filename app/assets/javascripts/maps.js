$(function(){
	initialize_map();
});


function initialize_map(){

	var	map = new L.mapbox.map('map', 'panicbus.h4on0f5b').setView([37.775,-122.419], 13);

	var stamenLayer = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
}).addTo(map);


		// adds the json to the map layer from route.js
		
	map.featureLayer.setGeoJSON(geoJson_features);

	
	// removed the form on the popup feature from here 
	// map.featureLayer.eachLayer(function(layer){

	// 	if (layer.feature.properties.title != undefined ) { 

	// 		// passes the form to a jst template
	// 		var popupContent = JST['templates/popupForm'](layer);

	// 		layer.bindPopup(popupContent,{ 
	// 			closeButton: true, 
	// 			minWidth: 320 
	// 		}); 
	// 	}
	// })

	// this is the marker click listener 
	map.featureLayer.on('click',function(e) {

		// ajax call to the checkins method. Passes in the marker ID from the clicked marker
		// ajax call returns the location data based on the ID of that location   
		// the .done says: once the ajax call is completed append 'info' with its data 
		$.get("/checkins/" + e.layer.feature.properties.location_id, e.layer.feature.properties.location_id)
			.done(function(checkins){

	    var feature = e.layer.feature;

	    var info = '<p class="site1_title"><b>' + feature.properties.title + '<b></p>' +
	               '<p class="site1_desc">' + feature.properties.description + '</p>'
	      
	    document.getElementById('entry_form').innerHTML='';
	      
	     // add form to sidebar  ---- AFTER HIKE IS OVER REMOVE NEXT TWO LINES --------
	    var formContent = JST['templates/popupForm'](e.layer);
	    $('#entry_form').append(formContent);
	      /// --------------

	      // protects guestbook from 'undefined' if submit is clicked with blank name field
			if (feature.properties.title != undefined) { 

				// when a feature layer is clicked takes site-1 and replaces it with ''
	    	document.getElementById('site-1').innerHTML = ' ';
	    	$('#site-title').empty(); // then empties the site title
	    	$('#site-title').append(info); // and adds info

	    // iterate thru checkins object in the DB, grab the i element of checkins.name & append to site-1
	    	for (var i = 0; i < checkins.length; i++) {
	        $('#site-1').append('<p><b>' + checkins[i].name + '<b><p>');
	        $('#site-1').append('<p>' + checkins[i].comment + '<p>');
	      } 

			} // ends append to site-1
		}) // ends ajax 
	});

	// Closes the marker popup when map is clicked
	map.on('click',function(e){ });


};


