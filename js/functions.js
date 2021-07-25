window.onload = function() {
    var map;

    function intialize() {
        var mapprop = {
            center: new google.maps.LatLng(-12.889687, -38.341203),
            scrollwheel: false,
            zoom:12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        map = new google.maps.Map(document.getElementById("mapa"),mapprop);
    }
    intialize();
}