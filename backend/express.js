const express = require('express')
const pool = require('./pg_pool');
const app = express();
const port = process.env.EXPRESS_PORT || 3000

//GET(select) all articles
app.get("/articles", async function(req, res) {
    const query = "SELECT * FROM test"
    const client = await pool.connect()
    try {
        const res = await client.query(query)
        console.log(res.rows[0])
    } catch (err) {
        console.log(err.stack)
    } finally {
        client.release()
    }
    res.send({
        articles: res.rows
    })

})

//POST(insert) a article
app.post("/articles", (req, res) => {
    const query = "INSERT INTO test (id, name, zip, address, birth, sex) VALUES (1, 'yuya', '111-1111', 'tokyo', '2023-03-25', true)"
    pool.connect()
    .then(() => pool.query(query))
    .then(() => res.send("ok!"))
    .catch(e => console.log(e))
    .finally(() => pool.end())
})

//PUT(update) a article
app.put("/articles:id", (req, res) => {
    //TODO bodyで具体的な修正対象を送る→処理み実装
    console.log(req.body);

    const query = "UPDATE test SET (id, name) = (999, 'change') WHERE id = 1"
    pool.connect()
    .then(() => pool.query(query))
    .then(results => {
        res.send({
        articles: results.rows
        })
    })
    .catch(e => console.log(e))
    .finally(() => pool.end())
})

//DELETE(delete) a article
app.delete("/articles:id", (req, res) => {
    const query = "DELETE from test where id = 1"
    pool.connect()
    .then(() => pool.query(query))
    .then(() => res.send("ok!"))
    .catch(e => console.log(e))
    .finally(() => pool.end())
})

app.listen(port, () => {
  console.log(`listening on *:${port}`);
})

module.exports = app