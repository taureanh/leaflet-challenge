//read in json file from USGS

var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

//get request to the url
d3.json(url, function(response) {

    // console.log(response);

    createFeatures(response.features);


    function createFeatures(earthquakeData) {

// Give each feature a popup describing the place and time of the earthquake  
function onEachFeature(feature, layer) {
    layer.bindPopup("<h3>" + feature.properties.place +
      "</h3><hr><p>" + new Date(feature.properties.time) + "</p>" +
      "</h3><hr><p>Magnitude: " + feature.properties.mag + "</p>");

}
}
});