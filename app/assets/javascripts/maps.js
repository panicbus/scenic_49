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

		var popupContent = '<p>This is the content</p>' +
											 '<form>' +
											 'First name: <input type="text" name="firstname"><br>' +
											 'Last name: <input type="text" name="lastname">' +
											 '</form>'; 

		layer.bindPopup(popupContent,{ 
			closeButton: true, 
			minWidth: 320 
		}); 

	})


	// this is the marker click listener 
	map.featureLayer.on('click',function(e) {
    var feature = e.layer.feature;
    var info = '<h2>' + feature.properties.title + '</h2>' +
               '<p>' + feature.properties.description + '</p>';

    document.getElementById('site-1').innerHTML = info;
	});

	// Clear the tooltip when map is clicked
	map.on('click',function(e){
	    document.getElementById('site-1').innerHTML = '';
	});

};


