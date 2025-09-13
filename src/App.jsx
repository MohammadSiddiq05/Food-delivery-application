import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar/Navbar";

import Main from "./pages/Main";
import CustomerSignUp from "./pages/Customer/CustomerSignUp";
import CustomerLogin from "./pages/Customer/CustomerLogin";
import SellerSignUp from "./pages/Seller/SellerSignUp";
import SellerLogin from "./pages/Seller/SellerLogin";
import RiderSignUp from "./pages/Rider/RiderSignUp";
import RiderLogin from "./pages/Rider/RiderLogin";
import CustomerPage from "./pages/Customer/CustomerPage";
import SellerPage from "./pages/Seller/SellerDashboard/SellerPage";
import RiderPage from "./pages/Rider/RiderPage";


const App = () => {
  return <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>}/>
      
      <Route path="/CustomerSignUp" element={<CustomerSignUp />}/>
      <Route path="/CustomerLogin" element={<CustomerLogin />}/>
      <Route path="/CustomerPage" element={<CustomerPage/>}/>
      
      <Route path="/SellerSignUp" element={<SellerSignUp />}/>
      <Route path="/SellerLogin" element={<SellerLogin />}/>
      <Route path="/SellerPage" element={<SellerPage/>}/>
      
      <Route path="/RiderSignUp" element={<RiderSignUp/>}/>
      <Route path="/RiderLogin" element={<RiderLogin/>}/>
      <Route path="/RiderPage" element={<RiderPage/>}/>
    </Routes>
    </BrowserRouter>
  </>;
};

export default App;
