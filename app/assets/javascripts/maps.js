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
			var popupContent = '<p>'+ layer.feature.properties.title + '</p>' +
												 '<form>' +
												 'Name: ' +
												 '<input type="text" name="name"><br>' +
												 'Comment: 	' +
												 '<textarea rows="4" cols="55	" name="comment" form="usrform">Enter text here...</textarea>' +
												 '<input type="submit">' +
												 '</form>'; 

			layer.bindPopup(popupContent,{ 
				closeButton: true, 
				minWidth: 320 
			}); 
		}
	})


	// this is the marker click listener 
	map.featureLayer.on('click',function(e) {

    var feature = e.layer.feature;
    var info = '<h2>' + feature.properties.title + '</h2>' +
               '<p>' + feature.properties.description + '</p>';


		if (feature.properties.title != undefined ) { 
    	document.getElementById('site-1').innerHTML = info;
		}
	});

	// Clear the tooltip when map is clicked
	map.on('click',function(e){
	    document.getElementById('site-1').innerHTML = '';
	});

};


