let map;
let marker;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: { lat: -6.200000, lng: 106.816666 }, // Koordinat Jakarta sebagai contoh
    });

    marker = new google.maps.Marker({
        position: { lat: -6.200000, lng: 106.816666 }, // Lokasi awal
        map: map,
        title: "Lokasi Tracker",
    });

    // Inisialisasi WebSocket
    const socket = new WebSocket('ws://localhost:8080');

    socket.onmessage = function(event) {
        const location = JSON.parse(event.data);
        updateMarker(location);
    };
}

function updateMarker(location) {
    const newPosition = { lat: location.lat, lng: location.lng };
    marker.setPosition(newPosition);
    map.setCenter(newPosition);
}

// Panggil fungsi initMap saat halaman dimuat
window.onload = initMap;
