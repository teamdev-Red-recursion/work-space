var Client = require('pg').Client;
var client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PW,
    port: process.env.DB_PORT,
});
client.connect();
client.query('SELECT NOW()', function (err, res) {
    console.log(err, res);
    client.end();
});
