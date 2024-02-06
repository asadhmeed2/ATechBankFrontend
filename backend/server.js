const express = require("express");

const mongoose = require("mongoose");

const transactionsApi = require("./api/transactions.api");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bank", {
  useNewUrlParser: true,
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("dotenv").config({ path: __dirname + "/.env" });

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );

  next();
});

app.use("/api/transactions", transactionsApi);

const port = 8880;

app.listen(process.env.PORT || port, function () {
  console.log(`Rennin  on port ${port}`);
});
