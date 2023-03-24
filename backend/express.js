var express = require('express');
var app = express();
var port = process.env.EXPRESS_PORT || 3000;
app.get('/', function (req, res) {
    try {
        //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000') TODO Reactのサーバーからのみ許可するように後で修正
        res.send('Hello World!');
    }
    catch (error) {
        console.error(error);
    }
});
app.listen(port, function () {
    console.log("listening on *:".concat(port));
});
