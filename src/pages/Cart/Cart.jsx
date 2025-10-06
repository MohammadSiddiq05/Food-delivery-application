import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

export const deliveryFee = 2;

const Cart = () => {
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
    getTotalQuantity,
  } = useContext(StoreContext);

  const totalQuantity = getTotalQuantity();
  const navigate = useNavigate();

  return (
    <div className="w-full px-5 py-10 flex flex-col gap-10">
      {/* Cart Items */}
      <div className="bg-white rounded-lg shadow p-5">
        {/* Table Head */}
        <div className="grid grid-cols-6 font-semibold text-gray-700 pb-3 border-b border-gray-200">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        {totalQuantity === 0 ? (
          <p className="text-center text-gray-500 py-6">No Items in cart</p>
        ) : (
          food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <React.Fragment key={item._id}>
                  <div className="grid grid-cols-6 items-center py-4 border-b border-gray-100">
                    {/* Item Image */}
                    <img
                      src={item.image}
                      alt="food"
                      className="w-16 h-16 object-cover rounded-lg"
                    />

                    {/* Title */}
                    <p className="text-gray-800">{item.name}</p>

                    {/* Price */}
                    <p className="text-gray-600">${item.price}</p>

                    {/* Quantity */}
                    <p className="text-gray-700 font-medium">
                      {cartItems[item._id]}
                    </p>

                    {/* Total */}
                    <p className="text-gray-900 font-semibold">
                      ${item.price * cartItems[item._id]}
                    </p>

                    {/* Remove */}
                    <button
                      className="flex justify-center items-center"
                      onClick={() => removeFromCart(item._id)}
                    >
                      <img
                        src={assets.remove_icon_cross}
                        alt="remove"
                        className="w-5 h-5 cursor-pointer hover:scale-110 transition"
                      />
                    </button>
                  </div>
                </React.Fragment>
              );
            }
            return null;
          })
        )}
      </div>

      {/* Cart Bottom Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Cart Total */}
        <div className="bg-white rounded-lg shadow p-6 flex-1">
          <h2 className="text-xl font-semibold mb-4">Cart Total</h2>

          {/* Subtotal */}
          <div className="flex justify-between py-2 border-b border-gray-200">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>

          {/* Delivery Fee */}
          <div className="flex justify-between py-2 border-b border-gray-200">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount() === 0 ? 0 : deliveryFee}</p>
          </div>

          {/* Total */}
          <div className="flex justify-between py-3 text-lg font-bold">
            <p>Total</p>
            <p>
              $
              {getTotalCartAmount() === 0
                ? 0
                : getTotalCartAmount() + deliveryFee}
            </p>
          </div>

          {/* Checkout Button */}
          <button
            disabled={getTotalCartAmount() === 0}
            onClick={() => navigate("/order")}
            className={`w-full py-3 mt-3 rounded-full font-medium transition ${
              getTotalCartAmount() === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-primary text-white hover:bg-primary/90"
            }`}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Promo Code */}
        <div className="bg-white rounded-lg shadow p-6 flex-1">
          <p className="mb-3 text-gray-700">
            If you have a promocode, enter it here
          </p>
          <div className="flex border border-gray-300 rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Promo Code"
              className="flex-1 px-4 py-2 outline-none"
            />
            <button className="bg-primary text-white px-6 py-2 font-medium hover:bg-primary/90">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
