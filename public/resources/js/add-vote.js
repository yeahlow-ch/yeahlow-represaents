function postVotes(lat, long, vote) {
    instance.post('/votes', {
        latitude: lat,
        longitude: long,
        vote: vote
    })
        .then(function () {
            console.log("Success on postVotes");
        })
        .catch(function (error) {
            console.log(error);
        });
}
