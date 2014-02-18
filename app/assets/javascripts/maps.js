$(function(){
	initialize_map();
});


function initialize_map(){

// 	var layer = new L.StamenTileLayer("watercolor");
// 	var map = new L.mapbox.map('map');

// // 	  // this adds the layer created above to the map //
// 	  map.addLayer(layer);
// 	  map.setView([40, -74.50], 9);
// 	  map.addControl(L.mapbox.geocoderControl('panicbus.h4on0f5b', {
// 	        keepOpen: true
// 	    }));


	var	map = new L.mapbox.map('map', 'panicbus.h4on0f5b').setView([37.775,-122.419], 13);

		// adds the json to the map layer from route.js
	map.featureLayer.setGeoJSON(geoJson_features);

	map.featureLayer.eachLayer(function(layer){

		if (layer.feature.properties.title != undefined ) { 

			// passes the form to a jst template
			var popupContent = JST['templates/popupForm'](layer);

			layer.bindPopup(popupContent,{ 
				closeButton: true, 
				minWidth: 320 
			}); 
		}
	})

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
	      
	      /// check this conditional for undefined info!!!!
			if (feature.properties.title != undefined) { 

	    	document.getElementById('site-1').innerHTML = ' ';
	    	$('#site-title').empty();
	    	$('#site-title').append(info);

	    // iterate thru checkins object in the DB, grab the i element of checkins.name & append to site-1
	    	for (var i = 0; i < checkins.length; i++) {
	        $('#site-1').append('<p><b>' + checkins[i].name + '<b><p>');
	        $('#site-1').append('<p>' + checkins[i].comment + '<p>');
	      } // ends for loop

			} // ends append to site-1
		}) // ends ajax 
	});

	// Closes the marker popup when map is clicked
	map.on('click',function(e){ });


};


