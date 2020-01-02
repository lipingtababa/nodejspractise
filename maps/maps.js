var map;

//Default to Google Event Venue
var googleIOLocation = new google.maps.LatLng(37.78320, -122.40421);

console.log("Loading maps.js");

function initMap() {
    console.log("initMaps() has been called");
    google.maps.visualRefresh = true;

    var mapOptions = {
        center: googleIOLocation,
        zoom:18,
        mapTypeControlOptions:{
            mapTypeIds:[google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.SATELLITE]
        }
    };

    //Create a map with the mapDiv
    map = new google.maps.Map(document.getElementById('mapDiv'), mapOptions);

    //Set the base map to ROADMAP
    map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
    map.overlayMapTypes.insertAt(0, buildPlanMapType);

    startButtonEvents();
}

if(navigator.geolocation){
    console.log("geolocation is enabled");
    navigator.geolocation.getCurrentPosition(function(position){
        console.log("setCenter is called");
        //If the navigator support geolocation, then set the map to user's current location.
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        var devCenter = new google.maps.LatLng(lat, lng);
        map.setCenter(devCenter);
        map.setZoom(15);
    })
}

google.maps.event.addDomListener(window, 'load', initMap);

function startButtonEvents(){
    document.getElementById('buttonSatellite').addEventListener('click', function(){
        map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
        map.setTilt(45);
    });
    document.getElementById('buttonRoadmap').addEventListener('click', function(){
        map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
    });
    document.getElementById('ButtonHybrid').addEventListener('click', function(){
        map.setMapTypeId(google.maps.MapTypeId.HYBRID);
    });
    document.getElementById('ButtonTerrain').addEventListener('click', function(){
        map.setMapTypeId(google.maps.MapTypeId.TERRAIN);
    });    
    document.getElementById('ButtonOverlay').addEventListener('click', function(){
        let OSMLayer = document.getElementById("ButtonOverlay");
        console.log("Overlay click event captured");
        if (OSMLayer.checked)
        {
            map.setCenter(googleIOLocation);
            map.setZoom(18);
            map.overlayMapTypes.setAt(0, buildPlanMapType);
        }
        else
        {
            map.overlayMapTypes.setAt(0, null);
        }
    });
}

console.log("maps.js has been loaded");
