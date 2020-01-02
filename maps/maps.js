var map;
//Create a new base map with open street map
var osmMapType = new google.maps.ImageMapType({getTileUrl:function(coord, zoom){
        return "http://tile.openstreetmap.org/"+zoom+"/"+coord.x+"/"+coord.y+".png";
    },
    tileSize: new google.maps.Size(256, 256),
    name:"OpenStreetMap",
    maxZoom:18
});

console.log("Loading maps.js");

function initMap() {
    console.log("initMaps() has been called");
    google.maps.visualRefresh = true;
    //Default to Shenzhen
    let lat = 22.558953, lng = 114.118784;

    var mapOptions = {
        center: new google.maps.LatLng(lat, lng),
        zoom:10,
        mapTypeControlOptions:{
            mapTypeIds:[google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.SATELLITE]
        }
    };

    //Create a map with the mapDiv
    map = new google.maps.Map(document.getElementById('mapDiv'), mapOptions);

    //Set the base map to ROADMAP
    map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
    map.overlayMapTypes.insertAt(0, null);

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
        var OSMLayer = document.getElementById("ButtonOverlay");
        if (OSMLayer.checked)
        {
            map.overlayMapTypes.setAt(0, osmMapType);
        }
        else
        {
            map.overlayMapTypes.setAt(0, null);
        }
    });
}

console.log("maps.js has been loaded");
