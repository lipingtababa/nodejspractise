var map;

console.log("Loading maps.js");

function initMap() {
    console.log("initMaps() has been called");
    google.maps.visualRefresh = true;
    //Default to Shenzhen
    let lat = 22.558953, lng = 114.118784;

    //create a new StyledMapType and reference it with the style array
    let bluishStyledMap = new google.maps.StyledMapType(bluishStyle,
        {name: "Bluish Google Base Maps with Pink Highways"});

    var mapOptions = {
        center: new google.maps.LatLng(lat, lng),
        zoom:12,
        mapTypeControlOptions: {mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'new_bluish_style']}
    };

    //Getting map DOM element
    var mapElement = document.getElementById('mapDiv');
    map = new google.maps.Map(mapElement, mapOptions);

    //relate new mapTypeId to the styledMapType object
    map.mapTypes.set('new_bluish_style', bluishStyledMap);
    //set this new mapTypeId to be displayed
    map.setMapTypeId('new_bluish_style');
    
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
