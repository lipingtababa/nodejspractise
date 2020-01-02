// The base map
var map;
// The layer map
var layerMap;
//The default location
var defaultLocation = new google.maps.LatLng(41.3854, 2.1822);

console.log("Loading maps.js");
google.maps.event.addDomListener(window, 'load', initMap);
console.log("maps.js has been loaded");

function initMap() {
    console.log("initMaps() has been called");
    google.maps.visualRefresh = true;
    var mapOptions = {
        center: defaultLocation,
        zoom:12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    //Getting map DOM ekement
    var mapElement = document.getElementById('mapDiv');
    map = new google.maps.Map(mapElement, mapOptions);

    layerMap = new google.maps.panoramio.PanoramioLayer();
    layerMap.setMap(map);

    registerButtonEvents();
    registerGetCurrentPosition();
}

function registerGetCurrentPosition(){
    if(navigator.geolocation){
        console.log("geolocation is enabled");
        navigator.geolocation.getCurrentPosition(function(position){
            console.log("setCenter is called");
            //If the navigator support geolocation, then set the map to user's current location.
            var devCenter = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            map.setCenter(devCenter);
        })
    }
}

function registerButtonEvents(){
    document.getElementById('ButtonOverlay').addEventListener('click', function(){
        let OSMLayer = document.getElementById("ButtonOverlay");
        console.log("Overlay click event captured");
        if (OSMLayer.checked)
        {
            //Load the layer
            layerMap.setMap(map);
        }
        else
        {
            //offload the layer
            layerMap.setMap(null);
        }
    });
}


