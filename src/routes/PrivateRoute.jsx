import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, allowedRole }) => {
  // yahan se user uthana hai
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    // agar user nahi mila to role ke hisaab se login route bhejo
    let loginRoute = "/CustomerLogin"; 

    if (allowedRole === "seller") loginRoute = "/SellerLogin";
    if (allowedRole === "rider") loginRoute = "/RiderLogin";

    return <Navigate to={loginRoute} />;
  }

  // agar user hai lekin role match nahi karta to /main bhej do
  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to="/main" />;
  }

  // agar sab sahi hai to component render karo
  return children;
};

export default PrivateRoute;
