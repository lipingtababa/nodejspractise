var map;
console.log("Loading maps.js");

function initMap() {
    console.log("initMaps() has been called");
    google.maps.visualRefresh = true;
    var mapOptions = {
        center: new google.maps.LatLng(39.9078, 32.8252),
        zoom:10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    //Getting map DOM ekement
    var mapElement = document.getElementById('mapDiv');
    map = new google.maps.Map(mapElement, mapOptions);
}

google.maps.event.addDomListener(window, 'load', initMap);
console.log("maps.js has been loaded");
