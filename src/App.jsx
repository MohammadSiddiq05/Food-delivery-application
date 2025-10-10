import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import StoreContextProvider from "./context/StoreContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/customer/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/customer/PlaceOrder/PlaceOrder";
import PrivateRoute from "./routes/PrivateRoute";
import CustomerPage from "./pages/customer/CustomerPage";
import CustomerSignUp from "./pages/Auth/CustomerSignUp";
import CustomerLogin from "./pages/Auth/CustomerLogin";
import SellerSignUp from "./pages/Auth/SellerSignUp";
import SellerLogin from "./pages/Auth/SellerLogin";
import SellerPage from "./pages/Seller/SellerPage";
import RiderSignUp from "./pages/Auth/RiderSignUp";
import RiderLogin from "./pages/Auth/RiderLogin";
import RiderPage from "./pages/rider/RiderPage";
import Main from './pages/Main'

const AppContent = ({ setShowLogin, showLogin }) => {
  const location = useLocation();

  const hideNavbarFooterRoutes = ["/SellerPage", "/RiderPage", "/Main", "/CustomerSignUp","/CustomerLogin","/SellerSignUp", "/SellerLogin", "/RiderSignUp", "/RiderLogin"  ];

  const shouldHide = hideNavbarFooterRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHide && <Navbar setShowLogin={setShowLogin} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />

        <Route path="/CustomerSignUp" element={<CustomerSignUp />} />
        <Route path="/CustomerLogin" element={<CustomerLogin />} />
        <Route
          path="/CustomerPage"
          element={
            <PrivateRoute allowedRole="customer">
              <CustomerPage />
            </PrivateRoute>
          }
        />

        <Route path="/SellerSignUp" element={<SellerSignUp />} />
        <Route path="/SellerLogin" element={<SellerLogin />} />
        <Route
          path="/SellerPage"
          element={
            <PrivateRoute allowedRole="seller">
              <SellerPage />
            </PrivateRoute>
          }
        />

        <Route path="/RiderSignUp" element={<RiderSignUp />} />
        <Route path="/RiderLogin" element={<RiderLogin />} />
        <Route
          path="/RiderPage"
          element={
            <PrivateRoute allowedRole="rider">
              <RiderPage />
            </PrivateRoute>
          }
        />
        <Route path="/Main" element={<Main/>}/>
      </Routes>

      <Footer />
    </>
  );
};

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <StoreContextProvider>
      <BrowserRouter>
        <AppContent setShowLogin={setShowLogin} showLogin={showLogin} />
      </BrowserRouter>
    </StoreContextProvider>
  );
};

export default App;
