import axios from "axios";
import { TRANSACTION_ENDPOINT } from "../../consts";

class TransactionApi {
  async getBalance() {
    try {
      const balance = await axios.get(
        `${process.env.REACT_APP_API_URL}/${TRANSACTION_ENDPOINT}/balance`
      );

      return balance.data.balance[0].count;
    } catch (err) {
      console.error(err);
    }
  }

  async getTransactions() {
    try {
      const balance = await axios.get(
        `${process.env.REACT_APP_API_URL}/${TRANSACTION_ENDPOINT}`
      );

      return balance.data;
    } catch (err) {
      console.error(err);
    }
  }

  async addTransaction(createdTransaction) {
    try {
      const balance = await axios.post(
        `${process.env.REACT_APP_API_URL}/${TRANSACTION_ENDPOINT}`,
        createdTransaction
      );

      return balance.data;
    } catch (err) {
      console.error(err);
    }
  }
}

export const transactionApi = new TransactionApi();
