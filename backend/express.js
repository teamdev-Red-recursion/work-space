var express = require('express');
var client = require('./pg_pool');
var app = express();
var port = process.env.EXPRESS_PORT || 3000;
app.get("/articles", function (req, res) {
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000') TODO Reactのサーバーからのみ許可するように後で修正
    var query = "SELECT * FROM test";
    client.connect()
        .then(function () { return client.query(query); })
        .then(function (results) {
        res.send({
            articles: results.rows
        });
    })
        .catch(function (e) { return console.log(e); })
        .finally(function () { return client.end(); });
});
app.listen(port, "18.176.52.15", function () {
    console.log("listening on *:".concat(port));
});
