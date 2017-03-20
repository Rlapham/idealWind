
// BaseMap
   var layer = L.tileLayer('https://api.mapbox.com/styles/v1/rlapham/cj0h22dvq003o2sulnc9tugcn/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmxhcGhhbSIsImEiOiJjaXo0anM2YnMwNjV2MnFwZ2h5YjlkcnR3In0.oj0KCWbMh5IlahZLgYzkhw');
    var map = L.map('map').setView([40.206643, -96.599400], 4);
    map.addLayer(layer);



    var border1Layer = L.geoJson(null, {
    filter: function(feature) {
        console.log(feature.properties.res_dmwh);
        

        // console.log(border1Layer.length);
        // my custom filter function
        //return feature.coordinates;
        // console.log(feature.geometry.coordinates);
        return feature.geometry.coordinates;
        //}
    },
    style: function(feature){
        return{
            color: getColor(feature.properties.res_dmwh),
            weight: .1,
            fillOpacity: .3
        }
    }
});






////////legend
function getColor(d) {
    return d > 200 ? '#FF0000' :
           d > 150  ? '#FF5900' :
           d > 100  ? '#FF9d10' :
           d > 75  ? '#FFD200' :
           d > 50   ? '#FFF763' :
           d > 0   ? '#FFFFFF' :
                      '#FFFFFF';
}


var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 50, 75, 100, 150, 200],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(map);



//////////

    var dataLayer = omnivore.geojson("data/electricityCost.json", null, border1Layer).addTo(map);
    // var dataLayer = omnivore.geojson("data/border2.geojson", null, border2Layer).addTo(map);
    // var dataLayer = omnivore.geojson("data/border3.geojson", null, border3Layer).addTo(map); 
    // var dataLayer = omnivore.geojson("data/border4.geojson", null, border4Layer).addTo(map);
    // var dataLayer = omnivore.geojson("data/border5.geojson", null, border5Layer).addTo(map);
    // var dataLayer = omnivore.geojson("data/border6.geojson", null, border6Layer).addTo(map);
    // //var dataLayer = omnivore.geojson("data/bordertest.geojson", null, circlesLayer).addTo(map);
    // //var dataLayer = omnivore.geojson("data/bordertest.geojson", null, testLayer).addTo(map);
    // var dataLayer = omnivore.geojson("data/immdata.geojson", null, immLayer).addTo(map);
    //var dataLayer = omnivore.geojson("data/places.geojson", null, placesLayer).addTo(map);
    //var dataLayer = omnivore.geojson("data/places.geojson", null, getPlace).addTo(map);