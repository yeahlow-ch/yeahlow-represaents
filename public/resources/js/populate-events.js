function populateEvents(map, position, eventsCallback) {
    // populate events
    getEvents(function (data) {
        eventsCallback(data.map(function (x) {
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

            let [lat, long] = position();

            let linkToGoogleMaps = `https://www.google.ch/maps/dir/${lat},${long}/${x.latitude},${x.longitude}/data=!3m1!4b1!4m2!4m1!3e3`;

            let infoWindow = new google.maps.InfoWindow({
                content: `
                        <div class="info">
                            <h3>${x.name}</h3>
                            <h5>${x.description}</h5>
                            <h4>Starts: ${x.start_time}</h4>
                            <h4>Ends: ${x.end_time}</h4>
                            
                            <button class="btn btn-primary btn-primary-train" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                <i class="fas fa-train"></i>
                                <a target='_blank' href=${linkToGoogleMaps}>Book now and save up to 70%!</a>
                            </button>
                        </div>
                    `
            });

            let openInfoWindow = () => infoWindow.open(map, marker);

            marker.addListener('click', function () {
                openInfoWindow();
            });

            return {id: x.id, open: openInfoWindow};
        }));
    });
}
