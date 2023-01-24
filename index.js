var http = require('http');
const cron = require('node-cron');
const axios = require('axios');

// Schedule tasks to be run on the server.
cron.schedule('*/10 * * * * *', function () {
    axios.get('https://kind-lime-bonobo-hem.cyclic.app')
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
});

http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('Yo!');
    res.end();
}).listen(process.env.PORT || 3000);