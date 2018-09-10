class LoadMap {

  load() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 51.246, lng: 22.568446},
      zoom: 10,
      mapTypeId: 'roadmap'
    });
    var marker = new google.maps.Marker({
      position: map.center,
      map:map
    })

    var input = document.getElementById('pac-input');

    var defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(-33.8902, 151.1759),
      new google.maps.LatLng(-33.8474, 151.2631));
      var searchBox = new google.maps.places.SearchBox(input, {
      bounds: defaultBounds
      });

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });
    var markers = [];
 
    searchBox.addListener('places_changed', function() {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];

      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
      
      markers.push(new google.maps.Marker({
        map: map,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
       }
      });
      map.fitBounds(bounds);
    });
  }
}

export const loadmap = new LoadMap();