// the json data for marker locations and lines
  var geoJson_features = [
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
              description: 'The content of the marker two, with <a href="#">a link</a>.',
              'marker-color': '#548cba'
          }
      },
      {
        type: "Feature",
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
        },
        properties: {}
      }
  ];
