const express = require("express");
const app = express();
const userRouter = require("./routes/user");

const PORT = 3000;

app.set("view engine", "ejs"); //EJSテンプレートエンジン

app.get("/", (req, res) => {
    res.render("index", {text: "NodejsとExpress"});
});

//ルーティング
app.use("/user", userRouter);

app.listen(PORT, () => console.log("サーバが起動しました"));