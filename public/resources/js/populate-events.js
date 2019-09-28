function populateEvents(map) {
    // populate events
    getEvents(function (data) {
        let markers = data.map(function (x) {
            var icons = {
                food: {
                    url: "../public/resources/images/markers/png/Food_1.png",
                    scaledSize: new google.maps.Size(64, 64)
                },
                animal: {
                    url: "../public/resources/images/markers/png/Deer_6.png",
                    scaledSize: new google.maps.Size(64, 64)
                },
                sport: {
                    url: "../public/resources/images/markers/png/Flag_7.png",
                    scaledSize: new google.maps.Size(64, 64)
                },
                party: {
                    url: "../public/resources/images/markers/png/Beer_8.png",
                    scaledSize: new google.maps.Size(64, 64)
                },
                hackathon: {
                    url: "../public/resources/images/markers/png/Rocket_2.png",
                    scaledSize: new google.maps.Size(64, 64)
                },
                culture: {
                    url: "../public/resources/images/markers/png/Artist_5.png",
                    scaledSize: new google.maps.Size(64, 64)
                }
            };

            let marker = new google.maps.Marker({
                position: {
                    "lat": Number(x.latitude),
                    "lng": Number(x.longitude)
                },
                // icon: icons[features[i].type].icon,
                icon: icons[x.type],
                map: map,
                title: x.name
            });

            let infoWindow = new google.maps.InfoWindow({
                content: `
                        <div class="info">
                            <h3>${x.name}</h3>
                            <h5>${x.description}</h5>
                            <h4>Starts: ${x.start_time}</h4>
                            <h4>Ends: ${x.end_time}</h4>
                        </div>
                    `
            });

            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            });


        });
    });
}
