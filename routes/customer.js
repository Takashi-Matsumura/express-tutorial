const express = require('express');
const router = express.Router();

//お客様情報
const customers = [
    { name: "田中", id: 1 },
    { name: "山田", id: 2 },
    { name: "鈴木", id: 3 },
    { name: "橋本", id: 4 },
];

//GETメソッド
router.get("/", (req, res) => {
    res.send(customers);
});

//POSTメソッド
router.post("/", (req, res) => {
    const customer = {
        name: req.body.name,
        id: customers.length +1,
    };
    customers.push(customer);
    res.send(customers);
});

module.exports = router;