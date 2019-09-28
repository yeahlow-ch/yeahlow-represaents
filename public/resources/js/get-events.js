function getEvents(callback) {
// Make a< request for a user with a given ID
    instance.get('/events')
        .then(function (response) {
            // handle success
            callback(response.data);
            console.log("Success");

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}
