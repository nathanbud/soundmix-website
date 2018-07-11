// Regular map
function initMap() {
    var var_location = new google.maps.LatLng(16.4023, -120.5960);

    var var_mapoptions = {
        center: var_location,
        zoom: 14
    };

    var var_map = new google.maps.Map(document.getElementById("map-container"),
        var_mapoptions);

    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "Baguio City"
    });
}

// Initialize maps
google.maps.event.addDomListener(window, 'load', initMap);