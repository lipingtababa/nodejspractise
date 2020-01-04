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

    startButtonEvents();
}

function startButtonEvents(){
    document.getElementById('addStandardMarker').addEventListener('click', function(){
        addStandardMarker();
    });
    document.getElementById('addIconMarker').addEventListener('click', function(){
        addIconMarker();
    });
}

function createRandomLatLng() {
    let deltaLat = maxLat - minLat;
    let deltaLng = maxLng - minLng;
    let rndNumLat = Math.random();
    let newLat = minLat + rndNumLat * deltaLat;
    let rndNumLng = Math.random();
    let newLng = minLng + rndNumLng * deltaLng;
    return new google.maps.LatLng(newLat, newLng);
}

function addStandardMarker() {
    var coordinate = createRandomLatLng();
    var marker = new google.maps.Marker({
                        position: coordinate,
                        map: map,
                        title: 'Random Marker - ' + markerId
                    });

    var infowindow = new google.maps.InfoWindow({
        content: 'Marker Info Window – ID : ' + markerId
        });
        
    google.maps.event.addListener(marker, 'click', function(){
                                                    infowindow.open(map, marker);
                                                    }
                        );

    // If you don't specify a Map during the initialization
    //of the Marker you can add it later using the line
    //below
    //marker.setMap(map);
    markerId++;


}

function addIconMarker() {
    let markerIcons = ['coffee', 'restaurant_fish', 'walkingtour', 'postal', 'airport'];
    let rndMarkerId = Math.floor(Math.random() * markerIcons.length);
    let coordinate = createRandomLatLng();
    let marker = new google.maps.Marker({
                        position: coordinate,
                        map: map,
                        icon: 'img/' + markerIcons[rndMarkerId] + '.png',
                        title: 'Random Marker - ' + markerId
    });
    markerId++;
}


google.maps.event.addDomListener(window, 'load', initMap);




    

console.log("maps.js has been loaded");
