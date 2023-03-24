const { Client } = require('pg')
//const connectionString = 'postgres://' + process.env.DB_USER + ':' + process.env.DB_PW + '@' + process.env.DB_HOST + ':' + process.env.PORT + '/' + process.env.DB_NAME;
const client = new Client({
    //connectionString: connectionString,
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PW,
    port: process.env.DB_PORT,
    //max: 10
});

module.exports = client;