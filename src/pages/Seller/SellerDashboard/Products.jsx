import * as React from "react";
import { styled } from "@mui/material/styles";
import { useState, useContext } from "react";
import {
  ArrowUpRight,
  ArrowDownRight,
  Search,
  PlusCircle,
  Edit,
  RefreshCw,
  Trash2,
} from "lucide-react";
import { Package, CheckCircle, AlertTriangle } from "lucide-react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { ImageList, ImageListItem } from "@mui/material";
import { StoreContext } from "../../../context/StoreContext";

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

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ProductsManagement = () => {
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);
  
  // ✅ Get context functions
  const { food_list, addProduct, deleteProduct, updateProduct } = useContext(StoreContext);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
    status: "Active",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFile(null);
    setFormData({
      name: "",
      category: "",
      price: "",
      stock: "",
      description: "",
      status: "Active",
    });
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  // ✅ UPDATED: Save product to context (syncs with localStorage automatically)
  const handleSave = () => {
    if (!formData.name || !formData.price || !formData.category) return;

    const newProduct = {
      name: formData.name,
      category: formData.category,
      price: parseFloat(formData.price),
      description: formData.description,
      image: file ? URL.createObjectURL(file) : "https://via.placeholder.com/150",
      stock: formData.stock || 0,
      status: formData.status,
    };

    addProduct(newProduct); // ✅ This saves to context + localStorage
    handleClose();
  };

  // ✅ Delete product from context
  const handleDelete = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProduct(productId);
    }
  };

  // ✅ Restock function
  const handleRestock = (productId) => {
    const qty = prompt("Enter quantity to add:");
    if (!qty || isNaN(qty)) return;
    
    const product = food_list.find(p => p._id === productId);
    if (product) {
      const newStock = Number(product.stock || 0) + Number(qty);
      updateProduct(productId, {
        stock: newStock,
        status: newStock < 20 ? "Low Stock" : "Active",
      });
    }
  };

  // ✅ Filter products from context
  const filteredProducts = food_list.filter((product) => {
    const matchStatus =
      statusFilter === "all" || product.status === statusFilter;
    const matchSearch =
      product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product._id?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchStatus && matchSearch;
  });

  return (
    <div className="space-y-8 dark:text-white">
      {/* ✅ Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {productStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                    {index === 0 ? food_list.length : stat.value}
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
            </div>
          );
        })}
      </div>

      {/* ✅ Filters & Add Product Button */}
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
          onClick={handleOpen}
          className="flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg p-2"
        >
          <PlusCircle className="mr-2" size={18} /> Add Product
        </button>
      </div>

      {/* ✅ Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <h2 className="text-2xl font-bold mb-4 text-[#0E2A45]">Add Product</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Product Name"
              className="w-full p-2 border rounded-lg"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Category"
              className="w-full p-2 border rounded-lg"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Price"
              className="w-full p-2 border rounded-lg"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Stock"
              className="w-full p-2 border rounded-lg"
              value={formData.stock}
              onChange={(e) =>
                setFormData({ ...formData, stock: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Description"
              className="w-full p-2 border rounded-lg"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
            {file && (
              <ImageList sx={{ width: 200, height: 100 }}>
                <ImageListItem>
                  <img
                    src={URL.createObjectURL(file)}
                    alt="preview"
                    style={{
                      borderRadius: "10px",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </ImageListItem>
              </ImageList>
            )}

            <Button
              variant="contained"
              component="label"
              sx={{
                backgroundColor: "#0E2A45",
                "&:hover": { backgroundColor: "#E64D21" },
                borderRadius: "10px",
                textTransform: "none",
                marginBottom: "5px",
              }}
            >
              Choose Image
              <VisuallyHiddenInput
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </Button>

            <select
              className="w-full p-2 border rounded-lg"
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
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleSave}>
              Save
            </Button>
          </div>
        </Box>
      </Modal>

      {/* ✅ Products Table */}
      <div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow overflow-x-auto">
        <h2 className="text-lg font-semibold mb-4">
          All Products ({filteredProducts.length})
        </h2>
        <table className="min-w-full text-left">
          <thead>
            <tr>
              <th className="p-3 border-b">Image</th>
              <th className="p-3 border-b">Product ID</th>
              <th className="p-3 border-b">Name</th>
              <th className="p-3 border-b">Category</th>
              <th className="p-3 border-b">Price</th>
              <th className="p-3 border-b">Stock</th>
              <th className="p-3 border-b">Status</th>
              <th className="p-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product._id}>
                <td className="p-3 border-b">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  ) : (
                    "—"
                  )}
                </td>
                <td className="p-3 border-b">{product._id}</td>
                <td className="p-3 border-b">{product.name}</td>
                <td className="p-3 border-b">{product.category}</td>
                <td className="p-3 border-b">Rs. {product.price}</td>
                <td className="p-3 border-b">{product.stock || 0}</td>
                <td className="p-3 border-b">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      product.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {product.status || "Active"}
                  </span>
                </td>
                <td className="p-3 border-b space-x-2">
                  <button
                    className="text-emerald-600 hover:underline inline-flex items-center gap-1"
                    onClick={() => handleRestock(product._id)}
                  >
                    <RefreshCw size={16} /> Restock
                  </button>
                  <button
                    className="text-red-600 hover:underline inline-flex items-center gap-1"
                    onClick={() => handleDelete(product._id)}
                  >
                    <Trash2 size={16} /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsManagement;