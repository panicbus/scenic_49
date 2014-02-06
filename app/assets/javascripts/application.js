// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .




// var map = L.mapbox.map('map', 'panicbus.h4on0f5b')
//     .setView([0, 0], 1);

// // Generate a GeoJSON line: you can load GeoJSON via AJAX, or
// // generate it some other way
// var geojson = { type: 'LineString', coordinates: [] },
//     start = [10, 20],
//     momentum = [3, 3];
// for (var i = 0; i < 300; i++) {
//     start[0] += momentum[0];
//     start[1] += momentum[1];
//     if (start[1] > 60 || start[1] < -60) momentum[1] *= -1;
//     if (start[0] > 170 || start[0] < -170) momentum[0] *= -1;
//     geojson.coordinates.push(start.slice());
// }

// var geojsonLayer = L.geoJson(geojson).addTo(map),
//     marker = L.marker([0, 0], {
//         icon: L.mapbox.marker.icon()
//     }).addTo(map),
//     j = 0;

// tick();
// function tick() {
//     // set the marker to be at the same point as one of the segments
//     // of the line
//     marker.setLatLng(L.latLng(
//         geojson.coordinates[j][1],
//         geojson.coordinates[j][0]));

//     // move to the next point in the line or loop to the first point if
//     // j runs off the end of the array
//     if (++j < geojson.coordinates.length) setTimeout(tick, 100);
// }
