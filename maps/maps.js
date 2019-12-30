var map;

console.log("Loading maps.js");

function initMap() {
    console.log("initMaps() has been called");
    google.maps.visualRefresh = true;
    //Default to Shenzhen
    let lat = 22.558953, lng = 114.118784;

    var mapOptions = {
        center: new google.maps.LatLng(lat, lng),
        zoom:12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    //Getting map DOM ekement
    var mapElement = document.getElementById('mapDiv');
    map = new google.maps.Map(mapElement, mapOptions);
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
    document.getElementById('buttonZoomToIstanbul').addEventListener('click', function(){
        var istanbul = new google.maps.LatLng(41.0579, 29.0340);
        map.setCenter(istanbul);
    });
    document.getElementById('buttonZoomToStreet').addEventListener('click', function(){
        map.setZoom(18);
    });
    document.getElementById('buttonDisableDrag').addEventListener('click', function(){
        map.setOptions({draggable:false});
    });
    document.getElementById('buttonMaxZoom').addEventListener('click', function(){
        map.setOptions({maxZoom:12});
    });
    document.getElementById('buttonMinZoom').addEventListener('click', function(){
        map.setOptions({minZoom:5});
    });
    document.getElementById('buttonChangeUI').addEventListener('click', function(){
        map.setOptions ({ disableDefaultUI: true });
    });
    document.getElementById('buttonDisableScroll').addEventListener('click', function(){
        map.setOptions ({ scrollwheel: false });
    });
    
}

console.log("maps.js has been loaded");
