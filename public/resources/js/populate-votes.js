function populateVotes(map, votesCallback) {
    // populate circles
    getVotes(function (data) {
        votesCallback(data.map(function (x) {
            console.log(`${x.place} has ${x.hotness}`)
            return {
                id: x.place, circle: new google.maps.Circle({
                    strokeColor: x.hotness_color,
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: x.hotness_color,
                    fillOpacity: 0.35,
                    map: map,
                    center: {
                        "lat": Number(x.latitude),
                        "lng": Number(x.longitude)
                    },
                    radius: calcRadius(x.hotness)
                })
            };
        }));
    });
}

function calcRadius(value) {
    return Number(value);
}