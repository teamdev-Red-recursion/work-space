var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var express = require('express');
var client = require('./pg_pool');
var app = express();
var port = process.env.EXPRESS_PORT || 3000;
//GET(select) all articles
app.get("/articles", function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var query, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = "SELECT * FROM test";
                    return [4 /*yield*/, client.connect()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, client.query(query)];
                case 2:
                    results = _a.sent();
                    return [4 /*yield*/, client.end()];
                case 3:
                    _a.sent();
                    res.send({
                        articles: results.rows
                    });
                    return [2 /*return*/];
            }
        });
    });
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
module.exports = app;
