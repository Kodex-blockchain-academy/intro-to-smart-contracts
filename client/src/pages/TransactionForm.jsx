import React, { useState } from "react";
// import axios from "axios";

const TransactionForm = () => {
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [transactionHash, setTransactionHash] = useState("");

  // Function to handle form submission
  const handleTransaction = async (e) => {
    e.preventDefault();

    if (!receiver || !amount) {
      alert("Please enter both receiver address and amount.");
      return;
    }

    // try {
    //   setLoading(true);

    //   // Mock API call to your backend or blockchain provider
    //   const response = await axios.post("/api/send-transaction", {
    //     receiver,
    //     amount,
    //   });

    //   // Assuming the response returns a transaction hash
    //   setTransactionHash(response.data.transactionHash);
    // } catch (error) {
    //   console.error("Transaction failed:", error);
    //   alert("Transaction failed! Please try again.");
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <section className="w-full h-screen flex justify-center items-center ">
      <div className="w-1/3 mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Send Transaction
        </h2>

        <form onSubmit={handleTransaction}>
          {/* Receiver Address */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Receiver Address
            </label>
            <input
              type="text"
              value={receiver}
              onChange={(e) => setReceiver(e.target.value)}
              placeholder="0xRecipientAddress"
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              required
            />
          </div>

          {/* Amount */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Amount (in ETH)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount in ETH"
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full px-4 py-2 text-white font-bold rounded-md ${
              loading ? "bg-gray-400" : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            {loading ? "Processing..." : "Send Transaction"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default TransactionForm;
