function getVotes(callback) {
// Make a< request for a user with a given ID
    instance.get('/votes')
        .then(function (response) {
            // handle success
            callback(response.data);
            console.log("Success on getVotes");

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}
