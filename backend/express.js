var express = require('express');
var client = require('./pg_pool');
var app = express.Router();
var port = process.env.EXPRESS_PORT || 3000;
//GET(select) all articles
app.get("/articles", function (req, res) {
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
//POST(insert) a article
app.post("/articles", function (req, res) {
    var query = "INSERT INTO test (id, name, zip, address, birth, sex) VALUES (1, 'yuya', '111-1111', 'tokyo', '2023-03-25', true)";
    client.connect()
        .then(function () { return client.query(query); })
        .then(function () { return res.send("ok!"); })
        .catch(function (e) { return console.log(e); })
        .finally(function () { return client.end(); });
});
//PUT(update) a article
app.put("/articles:id", function (req, res) {
    //TODO bodyで具体的な修正対象を送る→処理み実装
    console.log(req.body);
    var query = "UPDATE test SET (id, name) = (999, 'change') WHERE id = 1";
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
//DELETE(delete) a article
app.delete("/articles:id", function (req, res) {
    var query = "DELETE from test where id = 1";
    client.connect()
        .then(function () { return client.query(query); })
        .then(function () { return res.send("ok!"); })
        .catch(function (e) { return console.log(e); })
        .finally(function () { return client.end(); });
});
app.listen(port, function () {
    console.log("listening on *:".concat(port));
});
