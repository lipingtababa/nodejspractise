
var map1, map2;

console.log("maps.js is being loaded");
google.maps.event.addDomListener(window, 'load', initMaps);
console.log("maps.js has been loaded");


function initMaps(){
    console.log("initMaps() has been called");
    google.maps.visualRefresh = true;
    initMap1();
    initMap2();
}

function initMap1() {
    var mapOptions = {
        //Shenzhen
        center: new google.maps.LatLng(22.558267, 114.118130),
        zoom:12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    //Getting map DOM ekement
    var mapElement = document.getElementById('mapDiv1');
    map1 = new google.maps.Map(mapElement, mapOptions);

    console.log("initMap1() has been called");

    google.maps.event.addListener(map1, 'center_changed',
        function() {
            map2.setCenter(map1.getCenter());
        }
    );

    google.maps.event.addListener(map1, 'zoom_changed',
        function() {
            map2.setZoom(map1.getZoom());
        }
    );
}


function initMap2() {
    //Setting starting options of map
    var mapOptions2 = {
        //Stockholm
        center: new google.maps.LatLng(59.329529, 18.089642),
        zoom: 10,
        maxZoom: 15,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    //Getting map DOM element
    var mapElement2 = document.getElementById('mapDiv2');
    //Creating a map with DOM element which is just
    //obtained
    map2 = new google.maps.Map(mapElement2, mapOptions2);
    
    console.log("initMap2() has been called");

    //Listening center_changed event of map 2 to
    //change center of map 1
    google.maps.event.addListener(map2, 'center_changed',
        function() {
            setTimeout(function() {
            map1.setCenter(map2.getCenter());
        }, 
        10);
    });
    //Listening zoom_changed event of map 2 to change
    //zoom level of map 1
    google.maps.event.addListener(map2, 'zoom_changed',
        function() {
            setTimeout(function() {
            map1.setZoom(map2.getZoom());
        }, 
        10);
    });
}


