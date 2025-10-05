import { BrowserRouter, Routes, Route } from "react-router";
import Main from "./pages/Main";
import CustomerSignUp from "./pages/Auth/CustomerSignUp";
import CustomerLogin from "./pages/Auth/CustomerLogin";
import SellerSignUp from "./pages/Auth/SellerSignUp";
import SellerLogin from "./pages/Auth/SellerLogin";
import RiderSignUp from "./pages/Auth/RiderSignUp";
import RiderLogin from "./pages/Auth/RiderLogin";
import CustomerPage from "./pages/customer/CustomerPage";
import SellerPage from "./pages/Seller/SellerPage";
import RiderPage from "./pages/rider/RiderPage";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/CustomerSignUp" element={<CustomerSignUp />} />
          <Route path="/CustomerLogin" element={<CustomerLogin />} />
          <Route path="/CustomerPage" element={<CustomerPage />} />

          <Route path="/SellerSignUp" element={<SellerSignUp />}></Route>
          <Route path="/SellerLogin" element={<SellerLogin />} />
          <Route path="/SellerPage" element={<SellerPage />} />

          <Route path="/RiderSignUp" element={<RiderSignUp />} />
          <Route path="/RiderLogin" element={<RiderLogin />} />
          <Route path="/RiderPage" element={<RiderPage />} />

        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
};

export default App;
