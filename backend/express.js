const express = require('express')
const pool = require('./pg_pool');
const app = express();
const port = process.env.EXPRESS_PORT || 3005

//GET(select) all articles
app.get("/articles", async function(req, res) {
    const selectQuery = "SELECT * FROM test"
    const selectClient = await pool.connect()
    try {
        const selectRes = await selectClient.query(selectQuery)
        res.send({
            articles: selectRes.rows
        })
    } catch (err) {
        console.log(err.stack)
    } finally {
        selectClient.release()
    }
})

//POST(insert) a article
app.post("/articles", async function(req, res) {
    const body = req.body;
    const insertQuery = `INSERT INTO test (id, name, zip, address, birth, sex) VALUES (${body.id}, ${body.name}, ${body.zip}, ${body.address}, ${body.birth}, ${body.sex})`
    const insertClient = await pool.connect()
    try {
        const insertRes = await insertClient.query(insertQuery)
    } catch (err) {
        console.log(err.stack)
    } finally {
        insertClient.release()
    }
    res.send("ok!")
})

//PUT(update) a article
app.put("/articles", async function(req, res) {
    //TODO bodyで具体的な修正対象を送る→処理み実装
    console.log(req.body);

    const updateQuery = "UPDATE test SET (id, name) = (999, 'change') WHERE id = 1"
    const updateClient = await pool.connect()
    try {
        const updateRes = await updateClient.query(updateQuery)
    } catch (err) {
        console.log(err.stack)
    } finally {
        updateClient.release()
    }
    res.send("ok!")
})

//DELETE(delete) a article
app.delete("/articles", async function(req, res) {
    const deleteQuery = "DELETE from test where id = 1"
    const deleteClient = await pool.connect()
    try {
        const deleteRes = await deleteClient.query(deleteQuery)
    } catch (err) {
        console.log(err.stack)
    } finally {
        deleteClient.release()
    }
    res.send("ok!")
})

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE, OPTION"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.listen(port, () => {
  console.log(`listening on *:${port}`);
})

module.exports = app