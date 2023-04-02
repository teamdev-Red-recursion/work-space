const express = require('express');
const cors = require("cors");
const pool = require('./pg_pool');
const app = express();
const jwt = require('jsonwebtoken');
const port = process.env.EXPRESS_PORT || 3005

const corsOptions = {
    origin: 'http://43.207.84.153/', // 本番環境では、ここをフロントエンドのドメインに変更してください。
    optionsSuccessStatus: 200
  };


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors(corsOptions))

app.listen(port, () => {
    console.log(`listening on *:${port}`);
  })

  module.exports = app

//GET(select) all articles
app.get("/articles", async function(req, res) {
    const selectQuery = "SELECT * FROM articles"
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
    console.log(req.body)
    //const insertQuery = `INSERT INTO test (id, name, zip, address, birth, sex) VALUES (${req.body.id}, '${req.body.name}', '${req.body.zip}', '${req.body.address}', '${req.body.birth}', ${req.body.sex})`
    const insertQuery = `INSERT INTO articles (title, text, date) VALUES ('${req.body.title}', '${req.body.text}','${req.body.date}')`
    const insertClient = await pool.connect()
    try {
        await insertClient.query(insertQuery)
    } catch (err) {
        console.log(err.stack)
    } finally {
        insertClient.release()
    }
    res.send("ok!")
})

//認証+Tokenの発行
//呼び出し例
//curl -s -X POST -H 'Content-Type: application/json' -d '{"username":"hoge","password":"password"}' http://43.207.84.153/login
app.post('/login', function (req, res) {
    //id, pwをbodyより取得
    var username = req.body.username;
    var password = req.body.password;

    if (username === "hoge" && password === "password") {
        const token = jwt.sign({ username: username }, 'fuga', { expiresIn: '1h' });
        res.json({
            token: token
        });
    } else {
        res.json({
            error: "auth error"
        });
    }

})

//tokenが必要なGET
//呼び出し例
//curl -X GET http://43.207.84.153/articles/sec -H "Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxx"
// xxxxxはlogin apiで取得したTOKEN
app.get('/articles/sec', verifyToken, async function (req, res) {
    const selectQuery = "SELECT * FROM articles"
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

app.post("/articles/sec", verifyToken, async function(req, res) {
    const insertQuery = `INSERT INTO articles (title, text, date) VALUES ('${req.body.title}', '${req.body.text}','${req.body.date}')`
    const insertClient = await pool.connect()
    try {
        await insertClient.query(insertQuery)
    } catch (err) {
        console.log(err.stack)
    } finally {
        insertClient.release()
    }
    res.send("ok!")
})

//PUT(update) a article
app.put("/articles/sec", verifyToken, async function(req, res) {
    //TODO bodyで具体的な修正対象を送る→処理み実装

    const updateQuery = `UPDATE articles SET (text, date) = ('${req.body.text}',${req.body.date}) WHERE title = '${req.body.title}'`
    const updateClient = await pool.connect()
    try {
        await updateClient.query(updateQuery)
    } catch (err) {
        console.log(err.stack)
    } finally {
        updateClient.release()
    }
    res.send("ok!")
})

//DELETE(delete) a article
app.delete("/articles/sec", verifyToken, async function(req, res) {
    const deleteQuery = `DELETE from articles where title = '${req.body.title}'`
    const deleteClient = await pool.connect()
    try {
        await deleteClient.query(deleteQuery)
    } catch (err) {
        console.log(err.stack)
    } finally {
        deleteClient.release()
    }
    res.send("ok!")
})

function verifyToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    if (authHeader !== undefined) {
        if (authHeader.split(" ")[0] === "Bearer") {
            try {
                const token = jwt.verify(authHeader.split(" ")[1], 'fuga');
                if (token.username === "hoge" && Date.now() < token.exp * 1000) {
                    next();
                } else {
                    res.json({ error: "auth error" })
                }
            } catch (e) {
                console.log(e.message);
                res.json({ error: e.message })
            }
        } else {
            res.json({ error: "header format error" });
        }
    } else {
        res.json({ error: "header error" });
    }
}
