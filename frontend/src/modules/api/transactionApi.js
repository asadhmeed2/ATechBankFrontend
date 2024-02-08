import axios from "axios";

class TransactionApi {
  async getBalance() {
    try {
      const balance = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/transactions/balance`
      );

      return balance.data.balance[0].count;
    } catch (err) {
      console.error(err);
    }
  }
}

export const transactionApi = new TransactionApi();
