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



		// adds the json to the map layer from route
	map.featureLayer.setGeoJSON(geoJson_features);

	map.featureLayer.eachLayer(function(layer){

		// debugger
		if (layer.feature.properties.title != undefined ) {  
			var popupContent = '<h1>'+ layer.feature.properties.title + '</h1>' +
												 '<form>' +
												 'Name: ' +
												 '<input type="text" name="name" id="name"><br>' +
												 'Comment: 	' +
												 '<textarea rows="4" cols="55	" name="comment" id="comment" form="usrform" placeholder="Enter your comment..."></textarea>' +
												 '<input type="hidden" id="location_id" name="location_id" value="' + layer.feature.properties.location_id + '">' +
												 '<input type="submit" id="submit_button">' +
												 '</form>'; 

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
		// the .done says -- once the ajax call is completed append 'info' with its data 
		$.get("/checkins/" + e.layer.feature.properties.location_id, e.layer.feature.properties.location_id)
			.done(function(checkins){

	    var feature = e.layer.feature;

	    var info = '<h2>' + feature.properties.title + '</h2>' +
	               '<p>' + feature.properties.description + '</p>'
	      
			if (feature.properties.title != undefined ) { 

	    	document.getElementById('site-1').innerHTML = info;

	    	// iterate thru the checkins object, grab the i element of checkins.name and append to site-1
	    	for (var i = 0; i < checkins.length; i++) {
	        $('#site-1').append('<p>' + checkins[i].name + '<p>');
	        $('#site-1').append('<p>' + checkins[i].comment + '<p>');
	      } // ends for loop

			} // ends append to site-1
		}) // ends ajax 
	});

	// Clear the tooltip when map is clicked
	map.on('click',function(e){
	    document.getElementById('site-1').innerHTML = '';
	});

};


