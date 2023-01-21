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
    res.send(customer);
});

//PUTメソッド
router.put("/:id", (req, res) => {
    const customer = customers.find((c) => c.id === parseInt(req.params.id));
    customer.name = req.body.name;
    res.send(customer);
});

//DELETEメソッド
router.delete("/:id", (req, res) => {
    const customer = customers.find((c) => c.id === parseInt(req.params.id));
    const index = customers.indexOf(customer);
    customers.splice(index, 1);
    res.send(customer);
});

module.exports = router;