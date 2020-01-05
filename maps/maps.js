
//Should be accesible from out of this file
var map;

//Default location
let startPoint;

console.log("Loading maps.js");
google.maps.event.addDomListener(window, 'load', initMap);
console.log("maps.js has been loaded");


function initMap() {
    console.log("initMaps() has been called");
    startPoint = new google.maps.LatLng(22.615592, 114.105046);
    google.maps.visualRefresh = true;

    var mapOptions = {
        center: startPoint,
        zoom:8,
        mapTypeControlOptions:{
            mapTypeIds:[google.maps.MapTypeId.ROADMAP]
        }
    };

    //Create a map with the mapDiv
    map = new google.maps.Map(document.getElementById('mapDiv'), mapOptions);

    //Set the base map to ROADMAP
    map.setMapTypeId(google.maps.MapTypeId.ROADMAP);

    addPolygon();

    addMarker();

    markCenter(startPoint);

    addRoute2Guangzhou();
}

var stops = [
    [22.532918, 114.055876], // Futian
    [22.559902, 113.955611], // Xili
    [22.686023, 113.843983], // Fuyong
    [22.811992, 113.743716], // Changan
    [22.936680, 113.693246], // Houjie
    [23.064985, 113.607265], // Machong
    [23.142649, 113.512379], // Huangpu
    [23.150640, 113.397385], // Chebei
    [23.170692, 113.341776], // Tianhe
    [23.160103, 113.259250], // Sanyuanli
    [23.128553, 113.263912], // Yuexiu
];

function addRoute2Guangzhou(){

    //Convert stops to an array of LatLng.
    let path = [];
    for(let i=0; i < stops.length; i++){
        let stop = new google.maps.LatLng(stops[i][0], stops[i][1]);
        path.push(stop);
    }

    // Defining arrow symbol
    var arrowSymbol = {
        strokeColor: 'blue',
        scale: 3,
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
    };

    var lineOptions = {
        path: path,
        icons: [{
            icon: arrowSymbol,
            offset: '0%'
        }],
        strokeWeight: 2,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8
    };

    var polyline = new google.maps.Polyline(lineOptions);

    polyline.setMap(map);
    // Calling the arrow animation function
    animateArrow(polyline);
}

function animateArrow(line) {
    var counter = 0;
    var accessVar = window.setInterval(function() {
        counter = (counter + 1) % 200;
        var arrows = line.get('icons');
        arrows[0].offset = (counter / 2) + '%';
        line.set('icons', arrows);
        console.log("cuonter is "+ counter);
    }, 100);
}


function markCenter(startPoint){
    var circleoption = {
        center: startPoint,
        radius: 3000,
        fillColor:'#FF0000',
        fillOpacity:'0.2',
        strokeColor:'#FE0000',
        strokeWeight:'1'

    };
    let marker = new google.maps.Circle(circleoption);
    marker.setMap(map);
}

function addMarker(){
    let marker = new google.maps.Marker({
                    position: startPoint,
                    title: "Starting point"
                });
    marker.setMap(map);
}

    
function addPolygon() {
    let areaCoordinates = [
        [22.847372, 113.882572], //Gong ming
        [22.738107, 113.764886], //Sha jing
        [22.452991, 113.891753], //She kou
        [22.523168, 113.946005], //Hou hai
        [22.507748, 114.055345], //Fu tian
        [22.607495, 114.415947], //Kui chong
        [22.445694, 114.512482], //Dapengwan
        [22.513042, 114.627048], //Xi qi jiao
        [22.660967, 114.516176], //Dayawan
        [22.808525, 114.342455], //Pingdi
        [22.656146, 114.173424], //Henggang
        [22.847372, 113.882572], //Gong ming
        ];

    //First we iterate over the coordinates array to create a
    // new array which includes objects of LatLng class.
    let pointCount = areaCoordinates.length;
    let areaPath = [];
    for (var i=0; i < pointCount; i++) {
        var tempLatLng = new google.maps.LatLng(areaCoordinates[i][0], areaCoordinates[i][1]);
        areaPath.push(tempLatLng);
    }

    let options = {
        paths: areaPath,
        strokeColor:'blue',
        strokeOpacity:0.8,
        strokeWeight:1,
        fillColor:'#FF0000',
        fillOpacity:0.2
    };

    let polygon = new google.maps.Polygon(options);

    polygon.setMap(map);
}