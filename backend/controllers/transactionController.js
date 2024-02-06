const Transaction = require("../models/Transaction");

class TransactionController {
  async getAllTransaction() {
    return Transaction.find({});
  }

  async addTransaction(transaction) {
    const t1 = new Transaction(transaction);
    const newTransaction = await t1.save();
    return newTransaction;
  }

  async deleteTransaction(id) {
    const transaction = await Transaction.findById(id);

    if (transaction) {
      await Transaction.deleteOne({ _id: id });

      return true;
    }

    return false;
  }

  async getSumOfTransactionsByCategory() {
    const transaction = await Transaction.aggregate([
      {
        $group: {
          _id: "$category",
          count: {
            $sum: "$amount",
          },
        },
      },
    ]);

    return transaction;
  }
}

module.exports = new TransactionController();
