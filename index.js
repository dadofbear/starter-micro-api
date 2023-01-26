var http = require('http');
const cron = require('node-cron');
const axios = require('axios');

// Schedule tasks to be run on the server.
cron.schedule('*/10 * * * * *', function () {
    console.log(new Date())
});

http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('Yo!');
    res.end();
}).listen(process.env.PORT || 3000);