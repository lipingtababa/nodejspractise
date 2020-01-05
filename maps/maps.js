
console.log("Loading maps.js");

var map;

//Default location
let startPoint = new google.maps.LatLng(40.0192, 32.6953);

function initMap() {
    console.log("initMaps() has been called");
    google.maps.visualRefresh = true;

    var mapOptions = {
        center: startPoint,
        zoom:10,
        mapTypeControlOptions:{
            mapTypeIds:[google.maps.MapTypeId.ROADMAP]
        }
    };

    //Create a map with the mapDiv
    map = new google.maps.Map(document.getElementById('mapDiv'), mapOptions);

    //Set the base map to ROADMAP
    map.setMapTypeId(google.maps.MapTypeId.ROADMAP);

    addPolygon();

    addMarker();
}

google.maps.event.addDomListener(window, 'load', initMap);


console.log("maps.js has been loaded");


function addMarker(){
    let marker = new google.maps.Marker({
                    position: startPoint,
                    icon: './img/coffee.png',
                    title: "Starting point"
                });
    marker.setMap(map);
}

    
function addPolygon() {
    let areaCoordinates = [
        [40.0192,32.6953],[39.9434,32.5854],[39.8465,32.6898],[39.7465,32.8106],[39.8465, 33.0234],
        [39.9139,33.0084],[40.0318,32.9260],
        [40.0402,32.7832],[40.0192,32.6953]
        ];

    //First we iterate over the coordinates array to create a
    // new array which includes objects of LatLng class.
    let pointCount = areaCoordinates.length;
    let areaPath = [];
    for (var i=0; i < pointCount; i++) {
        var tempLatLng = new google.maps.LatLng(areaCoordinates[i][0], areaCoordinates[i][1]);
        areaPath.push(tempLatLng);
    }

    let options = {
        paths: areaPath,
        strokeColor:'blue',
        strokeOpacity:0.8,
        strokeWeight:1,
        fillColor:'#FF0000',
        fillOpacity:0.2
    };

    let polygon = new google.maps.Polygon(options);

    polygon.setMap(map);
}