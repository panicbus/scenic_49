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

	// the json data for marker locations
	var geoJson = [
	    {
	        type: 'Feature',
	        geometry: {
	            type: 'Point',
	            coordinates: [-122.453, 37.771]
	        },
	        properties: {
	            title: 'Marker one',
	            description: '<strong>Wow</strong>, this tooltip is breaking all the rules.',
	            'marker-color': '#548cba'
	        }
	    },
	    {
	        type: 'Feature',
	        geometry: {
	            type: 'Point',
	            coordinates: [-122.413, 37.774]
	        },
	        properties: {
	            title: 'Marker two',
	            description: 'Another marker, including <a href="http://mapbox.com">a link</a>.',
	            'marker-color': '#548cba'
	        }
	    }
	];
	// adds the json to the map layer
	map.markerLayer.setGeoJSON(geoJson);

	// this is the marker click listener 
	map.markerLayer.on('click',function(e) {
    var feature = e.layer.feature;
    var info = '<h2>' + feature.properties.title + '</h2>' +
               '<p>' + feature.properties.description + '</p>';

    document.getElementById('site-1').innerHTML = info;
});

// Clear the tooltip when map is clicked
map.on('click',function(e){
    document.getElementById('site-1').innerHTML = '';
});




	map.markerLayer.on('layeradd', function(e) { 
    var marker = e.layer, 
        feature = marker.feature; 

		var popupContent = '<p>This is the content</p>' +
											 '<form>' +
											 'First name: <input type="text" name="firstname"><br>' +
											 'Last name: <input type="text" name="lastname">' +
											 '</form>'; 

		marker.bindPopup(popupContent,{ 
			closeButton: true, 
			minWidth: 320 
		}); 

	});

// map.markerLayer.setGeoJSON(geoJson);

	myMarkers.loadURL('data.json');


};


