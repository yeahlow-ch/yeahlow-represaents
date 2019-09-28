function getEvents(callback) {
// Make a< request for a user with a given ID
    instance.get('/events')
        .then(function (response) {
            // handle success
            callback(response.data);
            console.log("Success on getEvents");

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}

function getSurpriseEvent(lat, long, range, callback) {
    instance.get('/events/surprise?latitude=' + lat + '&longitude=' + long + '&range=' + range)
        .then(function (response) {
            // handle success
            callback(response.data);
            console.log("Success on getSurpriseEvent");

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}
