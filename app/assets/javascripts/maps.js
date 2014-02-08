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
	var geoJson_point = [
	    {
	        type: 'Feature',
	        geometry: {
	            type: 'Point',
	            coordinates: [-122.453, 37.771]
	        },
	        properties: {
	            title: 'Marker one',
	            description: 'The content of marker one.',
	            'marker-color': '#548cba'
	        }
	    },
	    {
	        type: 'Feature',
	        geometry: {
	            type: 'Point',
	            coordinates: [  -122.46032953262329, 37.76966311138133]
	        },
	        properties: {
	            title: 'Marker two',
	            description: 'The content of marker two, with <a href="http://mapbox.com">a link</a>.',
	            'marker-color': '#548cba'
	        }
	    },
	    {
			  type: "Feature",
			  properties: {},
			  geometry: {
			    type: "LineString",
			    coordinates: [
			      [
			        -122.46695995330812,
			        37.76805171823878
			      ],
			      [
			        -122.46455669403076,
			        37.76966311138133
			      ],
			      [
			        -122.46161699295044,
			        37.770358543890254
			      ],
			      [
			        -122.46024370193481,
			        37.770358543890254
			      ],
			      [
			        -122.45947122573853,
			        37.77079954648267
			      ],
			      [
			        -122.45923519134521,
			        37.77129143088672
			      ],
			      [
			        -122.4558663368225,
			        37.77088435437199
			      ],
			      [
			        -122.45535135269164,
			        37.77078258489315
			      ],
			      [
			        -122.45537281036377,
			        37.770443352285376
			      ]
			    ]
			  }
			}
	];
	// adds the json to the map layer
	map.featureLayer.setGeoJSON(geoJson_point);


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




	map.featureLayer.on('layeradd', function(e) { 
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

// map.featureLayer.setGeoJSON(geoJson);

	// myMarkers.loadURL('data.json');


};


