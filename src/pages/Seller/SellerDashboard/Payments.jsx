import React, { useState, useMemo } from "react";

const dummyTransactions = [
  {
    id: 1,
    txnId: "TXN001",
    customer: "Ali Khan",
    amount: 120,
    method: "Credit Card",
    status: "Success",
    date: "2025-09-16",
  },
  {
    id: 2,
    txnId: "TXN002",
    customer: "Sara Ahmed",
    amount: 75,
    method: "Wallet",
    status: "Pending",
    date: "2025-09-17",
  },
  {
    id: 3,
    txnId: "TXN003",
    customer: "Usman Raza",
    amount: 200,
    method: "Bank Transfer",
    status: "Failed",
    date: "2025-09-15",
  },
];

const Payments = () => {
  const [transactions] = useState(dummyTransactions);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // 🔹 Filter + Search
  const filteredTransactions = useMemo(() => {
    return transactions.filter((txn) => {
      const matchesSearch =
        txn.customer.toLowerCase().includes(search.toLowerCase()) ||
        txn.txnId.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || txn.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [transactions, search, statusFilter]);

  return (
    <div className="min-h-screen p-6 bg-slate-50 dark:bg-slate-900 transition-all duration-500 text-slate-800 dark:text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Payments & Transactions</h1>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-white dark:bg-slate-800 rounded shadow">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Total Transactions
          </p>
          <p className="text-xl font-bold">{transactions.length}</p>
        </div>
        <div className="p-4 bg-white dark:bg-slate-800 rounded shadow">
          <p className="text-sm text-slate-500 dark:text-slate-400">Successful</p>
          <p className="text-xl font-bold text-green-600 dark:text-green-400">
            {transactions.filter((t) => t.status === "Success").length}
          </p>
        </div>
        <div className="p-4 bg-white dark:bg-slate-800 rounded shadow">
          <p className="text-sm text-slate-500 dark:text-slate-400">Pending</p>
          <p className="text-xl font-bold text-yellow-500 dark:text-yellow-400">
            {transactions.filter((t) => t.status === "Pending").length}
          </p>
        </div>
        <div className="p-4 bg-white dark:bg-slate-800 rounded shadow">
          <p className="text-sm text-slate-500 dark:text-slate-400">Failed</p>
          <p className="text-xl font-bold text-red-500 dark:text-red-400">
            {transactions.filter((t) => t.status === "Failed").length}
          </p>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by Customer or Transaction ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border border-slate-300 dark:border-slate-700 rounded w-full md:w-1/3 bg-white dark:bg-slate-800 dark:text-white"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-2 border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-800 dark:text-white"
        >
          <option value="All">All Statuses</option>
          <option value="Success">Success</option>
          <option value="Pending">Pending</option>
          <option value="Failed">Failed</option>
        </select>
      </div>

      {/* Transactions Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-slate-800 rounded shadow">
          <thead className="bg-gray-200 dark:bg-slate-700 text-slate-700 dark:text-white">
            <tr>
              <th className="p-2 text-left">Transaction ID</th>
              <th className="p-2 text-left">Customer</th>
              <th className="p-2 text-left">Amount</th>
              <th className="p-2 text-left">Payment Method</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((txn) => (
                <tr
                  key={txn.id}
                  className="border-b border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700"
                >
                  <td className="p-2">{txn.txnId}</td>
                  <td className="p-2">{txn.customer}</td>
                  <td className="p-2">${txn.amount}</td>
                  <td className="p-2">{txn.method}</td>
                  <td
                    className={`p-2 font-semibold ${
                      txn.status === "Success"
                        ? "text-green-600 dark:text-green-400"
                        : txn.status === "Pending"
                        ? "text-yellow-500 dark:text-yellow-400"
                        : "text-red-500 dark:text-red-400"
                    }`}
                  >
                    {txn.status}
                  </td>
                  <td className="p-2">{txn.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-4 text-center" colSpan={6}>
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;
