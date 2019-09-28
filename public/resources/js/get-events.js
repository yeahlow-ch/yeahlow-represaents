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

function getSurpriseEvent(callback) {
    instance.get('/events/surprise?latitude=47.389634&longitude=8.516191&range=400')
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
