// Initialize and add the map
function initMap() {
    // The location of irbid
    var irbid = { lat: 32.556957, lng: 35.847908 };
    // The map, centered at irbid
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: irbid,
    });
    // The marker, positioned at irbid
    var marker = new google.maps.Marker({
      position: irbid,
      map: map,
    });
  }
  window.initMap = initMap;


 