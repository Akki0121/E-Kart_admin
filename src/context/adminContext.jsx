import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AdminContext = createContext(null);

const AdminContextProvider = (props) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [users, setUsers] = useState({
    data: [],
    loader: false,
    error: null,
    count: null,
  });
  const [sellers, setSellers] = useState({
    data: [],
    loader: false,
    error: null,
    count: null,
  });
  const [products, setProducts] = useState({
    data: [],
    loader: false,
    error: null,
    count: null,
  });
  const [orders, setOrders] = useState({
    data: [],
    loader: false,
    error: null,
    count: null,
  });
  const [requests, setRequests] = useState({
    data: [],
    loader: false,
    error: null,
    count: null,
  });

  const fetchUsers = async () => {
    try {
      setUsers((prev) => ({
        ...prev,
        loader: true,
        error: null,
      }));
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/admin/getusers`
      );
      setUsers((prev) => ({
        ...prev,
        data: response.data,
        count: response.data.length,
      }));
    } catch (error) {
      setUsers((prev) => ({
        ...prev,
        error: error?.response?.data?.message || "Error fetching users",
      }));
    } finally {
      setUsers((prev) => ({
        ...prev,
        loader: false,
      }));
    }
  };

  const fetchSellers = async () => {
    try {
      setSellers((prev) => ({
        ...prev,
        loader: true,
        error: null,
      }));
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/admin/getsellers`
      );
      setSellers((prev) => ({
        ...prev,
        data: response.data,
        count: response.data.length,
      }));
    } catch (error) {
      console.error("Error fetching Sellers", error);
      setSellers((prev) => ({
        ...prev,
        error: error?.response?.data?.message || "Error fetching sellers",
      }));
    } finally {
      setSellers((prev) => ({
        ...prev,
        loader: false,
      }));
    }
  };

  const fetchProducts = async () => {
    try {
      setProducts((prev) => ({
        ...prev,
        loader: true,
        error: null,
      }));
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/admin/getproducts`
      );
      setProducts((prev) => ({
        ...prev,
        data: response.data,
        count: response.data.length,
      }));
    } catch (error) {
      console.error("Error fetching products", error);
      setProducts((prev) => ({
        ...prev,
        error: error?.response?.data?.message || "Error fetching products",
      }));
    } finally {
      setProducts((prev) => ({
        ...prev,
        loader: false,
      }));
    }
  };

  const fetchOrders = async () => {
    try {
      setOrders((prev) => ({
        ...prev,
        loader: true,
      }));
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/admin/getorders`
      );
      setOrders((prev) => ({
        ...prev,
        data: response.data,
        count: response.data.length,
      }));
    } catch (error) {
      toast.error("Order Fetch Error");
      console.error("Error fetching orders:", error);
      setOrders((prev) => ({
        ...prev,
        error: error?.response?.data?.message || "Error fetching orders",
      }));
    } finally {
      setOrders((prev) => ({
        ...prev,
        loader: false,
      }));
    }
  };

  const fetchRequests = async () => {
    try {
      setRequests((prev) => ({
        ...prev,
        loader: true,
        error: null,
      }));
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/admin/getrequests`
      );
      setRequests((prev) => ({
        ...prev,
        data: response.data,
        count: response.data.length,
      }));
    } catch (error) {
      console.error("Error fetching requests:", error);
      setRequests((prev) => ({
        ...prev,
        error: error?.response?.data?.message || "Error fetching requests",
      }));
    } finally {
      setRequests((prev) => ({
        ...prev,
        loader: false,
      }));
    }
  };

  const checkAdminLoginStatus = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/admin/verify`
      );
      if (res.data.success) {
        setIsAdminLoggedIn(true);
      } else {
        setIsAdminLoggedIn(false);
      }
    } catch (error) {
      setIsAdminLoggedIn(false);
    }
  };

  const contextValue = {
    checkAdminLoginStatus,
    fetchOrders,
    fetchUsers,
    fetchProducts,
    fetchSellers,
    fetchRequests,
    isAdminLoggedIn,
    users,
    sellers,
    products,
    orders,
    requests,
  };

  return (
    <AdminContext.Provider value={contextValue}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
