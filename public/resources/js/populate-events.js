function populateEvents(map) {
    // populate events
    getEvents(function (data) {
        let markers = data.map(function (x) {
            let marker = new google.maps.Marker({
                position: {
                    "lat": Number(x.latitude),
                    "lng": Number(x.longitude)
                },
                map: map,
                title: x.name
            });

            let infoWindow = new google.maps.InfoWindow({
                content: `
                        <div class="info">
                            <h3>${x.name}</h3>
                            <p>${x.description}</p>
                            <p>${x.start_time} - ${x.end_time}</p>
                        </div>
                    `
            });

            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            });


        });
    });
}
