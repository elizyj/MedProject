var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.0902, lng: -95.7129 },
        zoom: 8
    });

    var input = document.getElementById('address');
    var autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.addListener('place_changed', function() {
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            alert("No details available for input: '" + place.name + "'");
            return;
        }
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17); // Zoom in if no viewport defined
        }
    });


}
