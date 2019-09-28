// const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://yeahlow.eu-de.mybluemix.net/api',
    timeout: 5000,
    withCredentials: false,
});

function getVotes(callback) {
// Make a< request for a user with a given ID
    instance.get('/votes')
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

// getVotes((data) => console.log(data));
