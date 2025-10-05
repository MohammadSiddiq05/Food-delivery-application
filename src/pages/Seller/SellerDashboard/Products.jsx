import React, { useState } from "react";
import {
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  Search,
  PlusCircle,
  Edit,
  RefreshCw,
} from "lucide-react";
import { Package, CheckCircle, AlertTriangle } from "lucide-react";

export const productStats = [
  {
    title: "Total Products",
    value: "250",
    change: "+10%",
    trend: "up",
    bgcolor: "bg-indigo-100 dark:bg-indigo-900",
    textColor: "text-indigo-600 dark:text-indigo-300",
    color: "from-indigo-500 to-indigo-600",
    icon: Package,
  },
  {
    title: "Active Products",
    value: "190",
    change: "+5%",
    trend: "up",
    bgcolor: "bg-emerald-100 dark:bg-emerald-900",
    textColor: "text-emerald-600 dark:text-emerald-300",
    color: "from-emerald-500 to-emerald-600",
    icon: CheckCircle,
  },
  {
    title: "Low Stock",
    value: "30",
    change: "-8%",
    trend: "down",
    bgcolor: "bg-red-100 dark:bg-red-900",
    textColor: "text-red-600 dark:text-red-300",
    color: "from-red-500 to-red-600",
    icon: AlertTriangle,
  },
];

const ProductsManagement = () => {
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Make products stateful
  const [products, setProducts] = useState([
    {
      id: "#FZ001",
      name: "Zinger Burger",
      category: "Fast Food",
      price: "$5",
      stock: 120,
      status: "Active",
    },
    {
      id: "#FZ002",
      name: "Large Pizza",
      category: "Pizza",
      price: "$12",
      stock: 15,
      status: "Low Stock",
    },
    {
      id: "#FZ003",
      name: "Family Biryani Platter",
      category: "Desi",
      price: "$25",
      stock: 200,
      status: "Active",
    },
    {
      id: "#FZ004",
      name: "Beef Steak",
      category: "Western",
      price: "$22",
      stock: 8,
      status: "Low Stock",
    },
    {
      id: "#FZ005",
      name: "Shawarma Wrap",
      category: "Fast Food",
      price: "$3",
      stock: 150,
      status: "Active",
    },
  ]);

  // ✅ Modal state
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    category: "",
    price: "",
    stock: "",
    status: "Active",
  });

  const openAddModal = () => {
    setEditingProduct(null);
    setFormData({
      id: `#FZ${Math.floor(Math.random() * 1000)}`,
      name: "",
      category: "",
      price: "",
      stock: "",
      status: "Active",
    });
    setShowModal(true);
  };

  const openEditModal = (product) => {
    setEditingProduct(product);
    setFormData(product);
    setShowModal(true);
  };

  const handleSave = () => {
    if (editingProduct) {
      // edit existing product
      setProducts((prev) =>
        prev.map((p) => (p.id === editingProduct.id ? formData : p))
      );
    } else {
      // add new
      setProducts((prev) => [...prev, formData]);
    }
    setShowModal(false);
  };

  const handleRestock = (productId) => {
    const qty = prompt("Enter quantity to add:");
    if (!qty || isNaN(qty)) return;
    setProducts((prev) =>
      prev.map((p) =>
        p.id === productId
          ? {
              ...p,
              stock: Number(p.stock) + Number(qty),
              status: p.stock + Number(qty) < 20 ? "Low Stock" : "Active",
            }
          : p
      )
    );
  };

  // ✅ Filter logic
  const filteredProducts = products.filter((product) => {
    const matchStatus =
      statusFilter === "all" || product.status === statusFilter;
    const matchSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchStatus && matchSearch;
  });

  return (
    <div className="space-y-8 dark:text-white">
      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {productStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300 group"
              key={index}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                    {stat.value}
                  </p>
                  <div className="flex items-center space-x-2">
                    {stat.trend === "up" ? (
                      <ArrowUpRight className="size-4 text-emerald-500" />
                    ) : (
                      <ArrowDownRight className="size-4 text-red-500" />
                    )}
                    <span
                      className={`text-sm font-semibold ${
                        stat.trend === "up"
                          ? "text-emerald-500"
                          : "text-red-500"
                      }`}
                    >
                      {stat.change}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400 w-full">
                      vs last month
                    </span>
                  </div>
                </div>
                <div
                  className={`p-3 rounded-xl ${stat.bgcolor} group-hover:scale-110 transition-all duration-200`}
                >
                  <Icon className={`size-6 ${stat.textColor}`} />
                </div>
              </div>
              <div className="mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-2 bg-gradient-to-r ${stat.color} rounded-full transition-all duration-300`}
                  style={{
                    width: stat.trend === "up" ? "75%" : "45%",
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <select
          className="border dark:border-slate-700 dark:bg-slate-900 rounded-lg p-2"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="Active">Active</option>
          <option value="Low Stock">Low Stock</option>
        </select>

        <div className="flex items-center border dark:border-slate-700 dark:bg-slate-900 rounded-lg px-2">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search by Product ID or Name"
            className="flex-1 p-2 outline-none bg-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <button
          onClick={openAddModal}
          className="flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg p-2"
        >
          <PlusCircle className="mr-2" size={18} /> Add Product
        </button>
      </div>

      {/* Table */}
      <div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow overflow-x-auto">
        <h2 className="text-lg font-semibold mb-4">All Products</h2>
        <table className="min-w-full text-left">
          <thead>
            <tr>
              <th className="p-3 border-b dark:border-slate-700">Product ID</th>
              <th className="p-3 border-b dark:border-slate-700">Name</th>
              <th className="p-3 border-b dark:border-slate-700">Category</th>
              <th className="p-3 border-b dark:border-slate-700">Price</th>
              <th className="p-3 border-b dark:border-slate-700">Stock</th>
              <th className="p-3 border-b dark:border-slate-700">Status</th>
              <th className="p-3 border-b dark:border-slate-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr
                key={product.id}
                className="hover:bg-gray-50 dark:hover:bg-slate-800 transition"
              >
                <td className="p-3 border-b dark:border-slate-700">
                  {product.id}
                </td>
                <td className="p-3 border-b dark:border-slate-700">
                  {product.name}
                </td>
                <td className="p-3 border-b dark:border-slate-700">
                  {product.category}
                </td>
                <td className="p-3 border-b dark:border-slate-700">
                  {product.price}
                </td>
                <td className="p-3 border-b dark:border-slate-700">
                  {product.stock}
                </td>
                <td className="p-3 border-b dark:border-slate-700">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      product.status === "Active"
                        ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-200"
                    }`}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="p-3 border-b dark:border-slate-700 space-x-2">
                  <button
                    className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                    onClick={() => openEditModal(product)}
                  >
                    <Edit size={16} /> Edit
                  </button>
                  <button
                    className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline"
                    onClick={() => handleRestock(product.id)}
                  >
                    <RefreshCw size={16} /> Restock
                  </button>
                </td>
              </tr>
            ))}

            {filteredProducts.length === 0 && (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-4 text-gray-500 dark:text-slate-400"
                >
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">
              {editingProduct ? "Edit Product" : "Add Product"}
            </h2>
            <div className="space-y-3">
              <input
                type="text"
                className="w-full p-2 border dark:border-slate-700 rounded-lg bg-transparent"
                placeholder="Product Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="text"
                className="w-full p-2 border dark:border-slate-700 rounded-lg bg-transparent"
                placeholder="Category"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              />
              <input
                type="text"
                className="w-full p-2 border dark:border-slate-700 rounded-lg bg-transparent"
                placeholder="Price"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />
              <input
                type="number"
                className="w-full p-2 border dark:border-slate-700 rounded-lg bg-transparent"
                placeholder="Stock"
                value={formData.stock}
                onChange={(e) =>
                  setFormData({ ...formData, stock: e.target.value })
                }
              />
              <select
                className="w-full p-2 border dark:border-slate-700 rounded-lg bg-transparent"
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
              >
                <option value="Active">Active</option>
                <option value="Low Stock">Low Stock</option>
              </select>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg border dark:border-slate-700"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsManagement;
