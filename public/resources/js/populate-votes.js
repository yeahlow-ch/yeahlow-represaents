function populateVotes(map) {
    // populate circles
    getVotes(function (data) {
        let circles = data.map(function (x) {
            return new google.maps.Circle({
                strokeColor: '#EF915D',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#EF915D',
                fillOpacity: 0.35,
                map: map,
                center: {
                    "lat": Number(x.latitude),
                    "lng": Number(x.longitude)
                },
                radius: Math.sqrt(Number(x.hotness) / 10) * 100
            });
        });
    });
}