var map;

function initialize() {
    var lat = 51.46310355210425;
    var lng = -0.36240399999992734;

    var mapOptions = {
        center: new google.maps.LatLng(lat, lng),
        zoom: 15,
        sensors:false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
}

/**
 *
 * @returns {*|jQuery}
 */
function getWindowHeight(){
    return $(window).height();
}

function getMainNavHeight(){
    return 40; //currently not returning $('.main-nav').css('height')
}

function mapHeight(){
    return getWindowHeight() - getMainNavHeight();
}

function setMapHeight(){
    $('#map-canvas').height(100);
}

console.log(getWindowHeight());
console.log(getMainNavHeight());
console.log(mapHeight());

setMapHeight();

google.maps.event.addDomListener(window, 'load', initialize);
