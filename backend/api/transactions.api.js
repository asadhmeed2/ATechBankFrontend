/** @format */

const express = require("express");
const router = express.Router();
const TransactionController = require("../controllers/transactionController");

router.post("/", async function (req, res) {
  try {
    const task = await TransactionController.addTransaction(req.body);
    res.send(task);
  } catch (err) {
    res.status(301).send({ message: err.message });
  }
});

router.get("/", async function (req, res) {
  try {
    const transactions = await TransactionController.getAllTransaction();
    res.send(transactions);
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
});

router.get("/byCategory/sum", async function (req, res) {
  try {
    const transactionsByCategory =
      await TransactionController.getSumOfTransactionsByCategory();

    res.send(transactionsByCategory);
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
});

router.delete("/:id", async function (req, res) {
  const id = req.params.id;

  try {
    const transactions = await TransactionController.deleteTransaction(id);
    res.send(transactions);
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
});

module.exports = router;
