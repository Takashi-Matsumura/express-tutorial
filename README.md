# express-tutorial

2023.01.21
参照YouTube：　https://www.youtube.com/watch?v=Zk7tpzaKv0U

■Expressフレームワークの準備
１．GitHubリポジトリ作成（express-tutorial）
２．VScodeで初期化（>npm init -y）で、package.json作成
３．VScodeでexpressとnodemonをインストール（>npm i express nodemon）
４．VScodeでサーバの起動（>npm run dev）

■ExpressでWebアプリケーションの作成
１．サーバの起動
const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log("..."));

２．GETメソッド追加
app.get("/", (req, res) => {
  res.status(500).json((msg: "エラーです");
});
