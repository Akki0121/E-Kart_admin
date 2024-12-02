import { Route, Routes, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AdminContext } from "./context/adminContext";
import Dashboard from "./pages/dashboard";
import Users from "./pages/users";
import Products from "./pages/products";
import Orders from "./pages/orders";
import Requests from "./pages/requests";
import Sellers from "./pages/sellers";
import Login from "./pages/login";
import Register from "./pages/register";
import Layout from "./components/layout";
import Protected from "./components/protected";

function App() {
  const { isAdminLoggedIn, checkAdminLoginStatus } = useContext(AdminContext);

  useEffect(() => {
    checkAdminLoginStatus();
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/admin/" element={<Protected />}>
        <Route index path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
        <Route path="requests" element={<Requests />} />
        <Route path="sellers" element={<Sellers />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
