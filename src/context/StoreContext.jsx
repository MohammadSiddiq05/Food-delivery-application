import { createContext, useState, useEffect } from "react";
import { food_list as initialFoodList } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  // Initialize food_list from localStorage or use the initial static list
  const [food_list, setFoodList] = useState(() => {
    const savedProducts = localStorage.getItem('food_products');
    if (savedProducts) {
      return JSON.parse(savedProducts);
    }
    // Save initial list to localStorage on first load
    localStorage.setItem('food_products', JSON.stringify(initialFoodList));
    return initialFoodList;
  });

  const [cartItems, setCartItems] = useState({});

  // Save food_list to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('food_products', JSON.stringify(food_list));
  }, [food_list]);

  // Function to add a new product (for admin page)
  const addProduct = (product) => {
    const newProduct = {
      ...product,
      _id: "P" + Date.now().toString(), // Generate unique ID
      createdAt: new Date().toISOString()
    };
    setFoodList((prev) => [...prev, newProduct]);
    return newProduct;
  };

  // Function to update a product (for admin page)
  const updateProduct = (productId, updatedData) => {
    setFoodList((prev) =>
      prev.map((product) =>
        product._id === productId ? { ...product, ...updatedData } : product
      )
    );
  };

  // Function to delete a product (for admin page)
  const deleteProduct = (productId) => {
    setFoodList((prev) => prev.filter((product) => product._id !== productId));
  };

  // Existing cart functions
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    if (cartItems[itemId] === 1) {
      const newCartItems = { ...cartItems };
      delete newCartItems[itemId];
      setCartItems(newCartItems);
    } else if (cartItems[itemId] > 1) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
  };

  const getTotalQuantity = () => {
    return Object.values(cartItems).reduce((total, qty) => total + qty, 0);
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const product = food_list.find((food) => food._id === itemId);
      if (product) {
        totalAmount += product.price * cartItems[itemId];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalQuantity,
    getTotalCartAmount,
    // New functions for admin
    addProduct,
    updateProduct,
    deleteProduct,
    setFoodList, // For compatibility with existing code
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;