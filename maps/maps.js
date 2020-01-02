console.log("Loading maps.js");
google.maps.event.addDomListener(window, 'load', initMap);

//The base map
var map;
//The layer map
var layerMap;

//Default to Istanbul
var googleIOLocation = new google.maps.LatLng(41.0083746002077,28.971582399708);
function initMap() {
    console.log("initMaps() has been called");
    google.maps.visualRefresh = true;

    var mapOptions = {
        center: googleIOLocation,
        zoom:14,
        mapTypeId:google.maps.MapTypeId.ROADMAP    
    };

    //Create a base map
    map = new google.maps.Map(document.getElementById("mapDiv"), mapOptions);
    
    //Creating the heatmap layer
    layerMap = new google.maps.visualization.HeatmapLayer({
        data: heatmapPoints
    });
    //Adding heatmap layer to the map
    layerMap.setMap(map);

    startButtonEvents();
}

function startButtonEvents(){
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

console.log("maps.js has been loaded");
