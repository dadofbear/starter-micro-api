var http = require('http');
const cron = require('node-cron');

// Schedule tasks to be run on the server.
cron.schedule('*/5 * * * * *', function () {
    console.log('running a task every minute');
});

http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('Yo!');
    res.end();
}).listen(process.env.PORT || 3000);