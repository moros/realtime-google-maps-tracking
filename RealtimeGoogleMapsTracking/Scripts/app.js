
$(function() {
    var lat = 37.8199;
    var lng = -122.4783;

    var map;
    var mark;
    var lineCoords = [];

    var initialize = function () {
        map = new google.maps.Map(document.getElementById("map-canvas"), {
            center: { lat: lat, lng: lng },
            zoom: 12
        });
        mark = new google.maps.Marker({
            position: { lat: lat, lng: lng },
            map: map
        });

        lineCoords.push(new google.maps.LatLng(window.lat, window.lng));
    };

    initialize();

    var redraw = function (payload) {
        lat = payload.lat;
        lng = payload.lng;

        map.setCenter({
            lat: lat,
            lng: lng,
            alt: 0
        });

        mark.setPosition({
            lat: lat,
            lng: lng,
            alt: 0
        });
        lineCoords.push(new google.maps.LatLng(lat, lng));

        var lineCoordinatesPath = new google.maps.Polyline({
            path: lineCoords,
            geodesic: true,
            strokeColor: '#2E10FF'
        });

        lineCoordinatesPath.setMap(map);
    }
    
    setInterval(function () {
        redraw({
            lat: lat + 0.001,
            lng: lng + 0.01
        });
    }, 1200);
});