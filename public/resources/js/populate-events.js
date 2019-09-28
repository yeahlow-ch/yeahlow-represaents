function populateEvents(map, position, eventsCallback) {
    // populate events
    getEvents(function (data) {
        eventsCallback(data.map(function (x) {
            var icons = {
                food: {
                    url: "./resources/images/markers/svg/Food_1.svg",
                    scaledSize: new google.maps.Size(64, 64)
                },
                animal: {
                    url: "./resources/images/markers/svg/Deer_6.svg",
                    scaledSize: new google.maps.Size(64, 64)
                },
                sport: {
                    url: "./resources/images/markers/svg/Flag_7.svg",
                    scaledSize: new google.maps.Size(64, 64)
                },
                party: {
                    url: "./resources/images/markers/svg/Beer_8.svg",
                    scaledSize: new google.maps.Size(64, 64)
                },
                hackathon: {
                    url: "./resources/images/markers/svg/Rocket_2.svg",
                    scaledSize: new google.maps.Size(64, 64)
                },
                culture: {
                    url: "./resources/images/markers/svg/Artist_5.svg",
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
            let link = x.name === "Geneva" ? "https://sbb.ch" : linkToGoogleMaps;
            let text = x.name === "Geneva" ? "Book now and save up to 70%!" : "Show me the way!";
            let infoClass = x.name === "Geneva" ? "btn-primary-train-geneva" : "btn-primary-train";

            let infoWindow = new google.maps.InfoWindow({
                content: `
                        <div class="info">
                            <h3>${x.name}</h3>
                            <h5>${x.description}</h5>
                            <h4>Starts: ${x.start_time}</h4>
                            <h4>Ends: ${x.end_time}</h4>
                            
                            <button class="btn btn-primary ${infoClass}" type="button">
                                <i class="fas fa-train"></i>
                                <a target='_blank' href=${link}>${text}</a>
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
