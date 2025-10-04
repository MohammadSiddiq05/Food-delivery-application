import { useState, useMemo } from "react";

const dummyMessages = [
  {
    id: 1,
    customer: "Ali Khan",
    email: "ali@example.com",
    message: "I have an issue with my order.",
    status: "Unread",
    date: "2025-09-16",
  },
  {
    id: 2,
    customer: "Sara Ahmed",
    email: "sara@example.com",
    message: "Can you update my shipping address?",
    status: "Replied",
    date: "2025-09-17",
  },
  {
    id: 3,
    customer: "Usman Raza",
    email: "usman@example.com",
    message: "Payment not reflected.",
    status: "Unread",
    date: "2025-09-15",
  },
];

const Messages = () => {
  const [messages] = useState(dummyMessages);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  //  Filter + Search
  const filteredMessages = useMemo(() => {
    return messages.filter((msg) => {
      const matchesSearch =
        msg.customer.toLowerCase().includes(search.toLowerCase()) ||
        msg.email.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || msg.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [messages, search, statusFilter]);

  return (
    <div className="min-h-screen p-6 bg-slate-50 dark:bg-slate-900 transition-all duration-500 text-slate-800 dark:text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Customer Messages</h1>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-white dark:bg-slate-800 rounded shadow">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Total Messages
          </p>
          <p className="text-xl font-bold">{messages.length}</p>
        </div>
        <div className="p-4 bg-white dark:bg-slate-800 rounded shadow">
          <p className="text-sm text-slate-500 dark:text-slate-400">Unread</p>
          <p className="text-xl font-bold text-yellow-500 dark:text-yellow-400">
            {messages.filter((m) => m.status === "Unread").length}
          </p>
        </div>
        <div className="p-4 bg-white dark:bg-slate-800 rounded shadow">
          <p className="text-sm text-slate-500 dark:text-slate-400">Replied</p>
          <p className="text-xl font-bold text-green-600 dark:text-green-400">
            {messages.filter((m) => m.status === "Replied").length}
          </p>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by Customer or Email..."
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
          <option value="Unread">Unread</option>
          <option value="Replied">Replied</option>
        </select>
      </div>

      {/* Messages Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-slate-800 rounded shadow">
          <thead className="bg-gray-200 dark:bg-slate-700 text-slate-700 dark:text-white">
            <tr>
              <th className="p-2 text-left">Customer</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Message</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredMessages.length > 0 ? (
              filteredMessages.map((msg) => (
                <tr
                  key={msg.id}
                  className="border-b border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700"
                >
                  <td className="p-2">{msg.customer}</td>
                  <td className="p-2">{msg.email}</td>
                  <td className="p-2">{msg.message}</td>
                  <td
                    className={`p-2 font-semibold ${
                      msg.status === "Unread"
                        ? "text-yellow-500 dark:text-yellow-400"
                        : "text-green-600 dark:text-green-400"
                    }`}
                  >
                    {msg.status}
                  </td>
                  <td className="p-2">{msg.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-4 text-center" colSpan={5}>
                  No messages found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Messages;
