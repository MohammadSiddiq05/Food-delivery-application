import React, { useContext } from "react";
import { StoreContext } from "../../../context/StoreContext";
import { deliveryFee } from "../../Cart/Cart";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate("/cart")}
        className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg shadow-sm transition"
      >
        ⬅️ Go Back to Cart Page
      </button>

      {/* Place Order Form */}
      <form className="grid grid-cols-2 lg:flex-row gap-10">
        {/* Left - Delivery Information */}
        <div className=" space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Delivery Information
          </h2>

          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-primary"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-primary"
            />
          </div>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-primary"
          />
          <input
            type="text"
            placeholder="Street"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-primary"
          />

          <div className="flex gap-4">
            <input
              type="text"
              placeholder="City"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-primary"
            />
            <input
              type="text"
              placeholder="State"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-primary"
            />
          </div>

          <div className="flex gap-4">
            <input
              type="number"
              placeholder="Zip Code"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-primary"
            />
            <input
              type="text"
              placeholder="Country"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-primary"
            />
          </div>

          <input
            type="number"
            placeholder="Phone"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-primary"
          />
        </div>

        {/* Right - Cart Summary */}
        <div className="w-full mt-12">
          <div className="p-6 border rounded-2xl shadow-lg bg-white">
            <h2 className="text-2xl font-semibold mb-4">Cart Total</h2>

            <div className="space-y-3">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : deliveryFee}</p>
              </div>
              <hr />
              <div className="flex justify-between font-semibold">
                <p>Total</p>
                <p>
                  $
                  {getTotalCartAmount() === 0
                    ? 0
                    : getTotalCartAmount() + deliveryFee}
                </p>
              </div>
            </div>

            <button
              disabled={getTotalCartAmount() === 0}
              className={`mt-6 w-full py-3 rounded-lg text-white bg-[#0E2A45] hover:bg-[#E64D21] font-semibold transition duration-300 ${
                getTotalCartAmount() === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-primary hover:bg-primary/90"
              }`}
            >
              PROCEED TO Payment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
