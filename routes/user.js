const express = require('express');
const router = express.Router();

//router.use(mylogger);

//router.get("/", (req, res) => {
router.get("/", mylogger, (req, res) => {
    res.send("ユーザです");
});

router.get("/info", (req, res) => {
    res.send("ユーザ情報です");
});

router.get("/:id", (req, res) => {
    res.send(`${req.params.id}のユーザ情報を取得しました`);
});

//ミドルウェア
function mylogger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

module.exports = router;