const express = require('express')
const client = require('./pg_pool');

const app = express()
const port = process.env.EXPRESS_PORT || 3000


app.get("/articles", (req, res) => {
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000') TODO Reactのサーバーからのみ許可するように後で修正
    const query = "SELECT * FROM test"
    client.connect()
    .then(() => client.query(query))
    .then(results => {
        res.send({
        articles: results.rows
        })
    })
    .catch(e => console.log(e))
    .finally(() => client.end())
})



app.listen(port, "18.176.52.15", () => {
  console.log(`listening on *:${port}`);
})