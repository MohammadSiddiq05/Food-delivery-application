import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const { cartItems } = useContext(StoreContext); // directly use cartItems
  const totalQuantity = Object.values(cartItems).reduce((a, b) => a + b, 0);

  const [menu, setMenu] = useState("home");

  return (
    <nav className="flex justify-between items-center w-[90%] mx-auto py-5">
      {/* Logo */}
      <Link to="/">
        <img
          src={assets.logo}
          alt="logo"
          className="w-[150px] max-[1050px]:w-[140px] max-[900px]:w-[120px]"
        />
      </Link>

      {/* Menu */}
      <ul className="flex gap-6 text-gray-800 font-medium max-[750px]:hidden">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={`transition cursor-pointer ${
            menu === "home"
              ? "text-primary border-b-2 border-primary pb-[2px]"
              : "hover:text-primary"
          }`}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={`transition cursor-pointer ${
            menu === "menu"
              ? "text-primary border-b-2 border-primary pb-[2px]"
              : "hover:text-primary"
          }`}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={`transition cursor-pointer ${
            menu === "mobile-app"
              ? "text-primary border-b-2 border-primary pb-[2px]"
              : "hover:text-primary"
          }`}
        >
          Mobile App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={`transition cursor-pointer ${
            menu === "contact-us"
              ? "text-primary border-b-2 border-primary pb-[2px]"
              : "hover:text-primary"
          }`}
        >
          Contact Us
        </a>
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-8 max-[1050px]:gap-6 max-[900px]:gap-4">
        {/* Search Icon */}
        <img
          src={assets.search_icon}
          alt="search_icon"
          className="w-6 max-[1050px]:w-[22px] max-[900px]:w-[20px] cursor-pointer"
        />

        {/* Basket Icon */}
        <div className="relative">
          <Link to="/cart">
            <img
              src={assets.basket_icon}
              alt="basket_icon"
              className="w-6 max-[1050px]:w-[22px] max-[900px]:w-[20px] cursor-pointer"
            />
          </Link>
          {totalQuantity > 0 && (
            <div className="absolute -top-2 -right-2 min-w-[20px] min-h-[20px] bg-primary rounded-full flex items-center justify-center">
              <p className="text-white text-[12px] leading-[12px]">
                {totalQuantity}
              </p>
            </div>
          )}
        </div>

        {/* Button */}
        <Link to={"/Main"}>
          <button className="bg-transparent text-gray-800 border border-primary rounded-full px-8 py-2 text-[16px] transition hover:bg-[#fff4f2] max-[1050px]:px-6 max-[900px]:px-5 max-[900px]:text-[14px]">
            Sign in
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
