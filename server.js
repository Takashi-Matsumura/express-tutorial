const express = require("express");
const app = express();
app.use(express.json());

const userRouter = require("./routes/user");
const customerRouter = require("./routes/customer");

const PORT = 3000;

//お客様情報
const customers = [
    { name: "田中", id: 1 },
    { name: "山田", id: 2 },
    { name: "鈴木", id: 3 },
    { name: "橋本", id: 4 },
];

app.set("view engine", "ejs"); //EJSテンプレートエンジン

app.get("/", (req, res) => {
    res.render("index", {text: "NodejsとExpress"});
});

//ルーティング
app.use("/user", userRouter);
app.use("/customer", customerRouter);

app.listen(PORT, () => console.log("サーバが起動しました"));