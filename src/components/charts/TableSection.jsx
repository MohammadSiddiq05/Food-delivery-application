import { MoreHorizontal, TrendingDown, TrendingUp } from "lucide-react";

export const recentOrders = [
  {
    id: "#7851",
    customer: "John Smith",
    product: "Biryani",
    amount: "$18.99",
    status: "completed",
    date: "2025-09-14",
  },
  {
    id: "#7852",
    customer: "Emily Carter",
    product: "Burger",
    amount: "$9.50",
    status: "pending",
    date: "2025-09-15",
  },
  {
    id: "#7853",
    customer: "Ali Khan",
    product: "Pizza",
    amount: "$15.00",
    status: "processing",
    date: "2025-09-15",
  },
  {
    id: "#7854",
    customer: "Sofia Ahmed",
    product: "Drink",
    amount: "$3.99",
    status: "cancelled",
    date: "2025-09-16",
  },
  {
    id: "#7855",
    customer: "Daniel Brown",
    product: "Biryani",
    amount: "$19.49",
    status: "completed",
    date: "2025-09-16",
  },
  {
    id: "#7856",
    customer: "Zara Sheikh",
    product: "Pizza",
    amount: "$13.75",
    status: "pending",
    date: "2025-09-17",
  },
  {
    id: "#7857",
    customer: "Omar Malik",
    product: "Burger",
    amount: "$8.25",
    status: "completed",
    date: "2025-09-17",
  },
];

// Top Products Dummy Data
export const topProducts = [
  {
    id: 1,
    name: "Biryani",
    category: "Main Course",
    orders: 1250,
    revenue: "$23,500",
    trend: "up",
    change: "12%", // added
    color: "#F59E0B", // amber
  },
  {
    id: 2,
    name: "Burgers",
    category: "Fast Food",
    orders: 980,
    revenue: "$12,750",
    trend: "up",
    change: "7%", // added
    color: "#10B981", // emerald
  },
  {
    id: 3,
    name: "Pizzas",
    category: "Fast Food",
    orders: 865,
    revenue: "$15,850",
    trend: "down",
    change: "-5%", // added
    color: "#3B82F6", // blue
  },
  {
    id: 4,
    name: "Drinks",
    category: "Beverages",
    orders: 2100,
    revenue: "$6,300",
    trend: "up",
    change: "15%", // added
    color: "#EF4444", // red
  },
  {
    id: 5,
    name: "Fries",
    category: "Sides",
    orders: 740,
    revenue: "$3,700",
    trend: "down",
    change: "-3%", // added
    color: "#8B5CF6", // violet
  },
];

const TableSection = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
      case "pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "cancelled":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      case "processing":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                Recent Orders
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Latest Customer Orders
              </p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Order ID
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Customer
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Product
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Amount
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Status
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <td className="p-4">
                    <span className="text-sm font-medium dark:text-white">
                      {order.id}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-800 dark:text-white">
                      {order.customer}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-800 dark:text-white">
                      {order.product}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-800 dark:text-white">
                      {order.amount}
                    </span>
                  </td>
                  <td className="p-4">
                    <span
                      className={`font-medium text-xs px-3 py-1 rounded-full ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-800 dark:text-white">
                      {order.date}
                    </span>
                  </td>
                  <td className="p-4">
                    <MoreHorizontal className="size-4 text-slate-500 dark:text-slate-400" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Products */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between w-full">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                Top Products
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Best selling items
              </p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {topProducts.map((product, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-b-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
                  {product.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Orders: {product.orders}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-800 dark:text-white">
                  {product.revenue}
                </p>
                <div className="flex items-center space-x-1 justify-end">
                  {product.trend === "up" ? (
                    <TrendingUp className="size-3 text-emerald-500" />
                  ) : (
                    <TrendingDown className="size-3 text-red-500" />
                  )}
                  <span
                    className={`text-xs ${
                      product.trend === "up"
                        ? "text-emerald-500"
                        : "text-red-500"
                    }`}
                  >
                    {product.change}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableSection;
