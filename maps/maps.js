var map;

console.log("Loading maps.js");

function initMap() {
    console.log("initMaps() has been called");
    google.maps.visualRefresh = true;
    //Default to Shenzhen
    let lat = 22.558953, lng = 114.118784;

    //Create a new base map with open street map
    var osmMapType = new google.maps.ImageMapType({getTileUrl:function(coord, zoom){
                            return "http://tile.openstreemap.org/"+zoom+"/"+coord.x+"/"+coord.y+".png";
                        },
                        tileSize: new google.maps.Size(256, 256),
                        name:"OpenStreetMap",
                        maxZoom:18  
    });

    var mapOptions = {
        center: new google.maps.LatLng(lat, lng),
        zoom:10,
        mapTypeIds: [google.maps.MapTypeId.ROADMAP,'OSM']
    };

    //Create a map with the mapDiv
    map = new google.maps.Map(document.getElementById('mapDiv'), mapOptions);

    //Set the base map to the open steet map
    map.mapTypes.set('OSM', osmMapType);
    map.setMapTypeId('OSM');
    
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
}

console.log("maps.js has been loaded");
