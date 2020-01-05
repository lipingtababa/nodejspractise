
//Should be accesible from out of this file
var map;

//Default location
let startPoint;

console.log("Loading maps.js");
google.maps.event.addDomListener(window, 'load', initMap);
console.log("maps.js has been loaded");


function initMap() {
    console.log("initMaps() has been called");
    startPoint = new google.maps.LatLng(22.615592, 114.105046);
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

    markCenter();
}



function markCenter(){
    var circleoption = {
        center: startPoint,
        radius: 3000,
        fillColor:'#FF0000',
        fillOpacity:'0.2',
        strokeColor:'#FE0000',
        strokeWeight:'1'

    };
    let marker = new google.maps.Circle(circleoption);
    marker.setMap(map);
}

function addMarker(){
    let marker = new google.maps.Marker({
                    position: startPoint,
                    title: "Starting point"
                });
    marker.setMap(map);
}

    
function addPolygon() {
    let areaCoordinates = [
        [22.847372, 113.882572], //Gong ming
        [22.738107, 113.764886], //Sha jing
        [22.452991, 113.891753], //She kou
        [22.523168, 113.946005], //Hou hai
        [22.507748, 114.055345], //Fu tian
        [22.607495, 114.415947], //Kui chong
        [22.445694, 114.512482], //Dapengwan
        [22.513042, 114.627048], //Xi qi jiao
        [22.660967, 114.516176], //Dayawan
        [22.808525, 114.342455], //Pingdi
        [22.656146, 114.173424], //Henggang
        [22.847372, 113.882572], //Gong ming
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