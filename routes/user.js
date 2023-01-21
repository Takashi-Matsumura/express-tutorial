const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("ユーザです");
});

router.get("/info", (req, res) => {
    res.send("ユーザ情報です");
});

router.get("/:id", (req, res) => {
    res.send(`${req.params.id}のユーザ情報を取得しました`);
});

module.exports = router;