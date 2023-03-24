const client = require('./pg_pool');

client.connect();
client.query('SELECT NOW()', function (err, res) {
    console.log(err, res);
    client.end();
});
