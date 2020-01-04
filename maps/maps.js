var map;

//Default to Google Event Venue
var googleIOLocation = new google.maps.LatLng(38, 30);

console.log("Loading maps.js");


let minLat = 36,
maxLat = 42,
minLng = 25,
maxLng = 44,
markerId = 1;

function initMap() {
    console.log("initMaps() has been called");
    google.maps.visualRefresh = true;

    var mapOptions = {
        center: googleIOLocation,
        zoom:5,
        mapTypeControlOptions:{
            mapTypeIds:[google.maps.MapTypeId.ROADMAP]
        }
    };

    //Create a map with the mapDiv
    map = new google.maps.Map(document.getElementById('mapDiv'), mapOptions);

    //Set the base map to ROADMAP
    map.setMapTypeId(google.maps.MapTypeId.ROADMAP);

    addPolyline();
}



google.maps.event.addDomListener(window, 'load', initMap);




    

console.log("maps.js has been loaded");

var lineCoordinates = [
    [41.01306,29.14672],[40.8096,29.4818],
    [40.7971,29.9761],[40.7181,30.4980],
    [40.8429,31.0253],[40.7430,31.6241],
    [40.7472,32.1899],[39.9097,32.8216]
    ];
    
function addPolyline () {
    //First we iterate over the coordinates array to create a
    // new array which includes objects of LatLng class.
    var pointCount = lineCoordinates.length;
    var linePath = [];
    for (var i=0; i < pointCount; i++) {
    var tempLatLng = new google.maps.LatLng(lineCoordinates[i][0] , lineCoordinates[i][1]);
    linePath.push(tempLatLng);
    }

    //Polyline properties are defined below
    var lineOptions = {
        path: linePath,
        strokeWeight: 7,
        strokeColor: '#FF00FF',
        strokeOpacity: 0.9
        }
    var polyline = new google.maps.Polyline(lineOptions);

    //Polyline is set to current map.
    polyline.setMap(map);
}