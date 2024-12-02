import { useState, useEffect, useContext } from "react";
import { AdminContext } from "../context/adminContext";
import { NavLink } from "react-router-dom";
import Loader from "../components/loader";
function dashboard() {
  const {
    fetchUsers,
    users,
    fetchSellers,
    sellers,
    fetchProducts,
    products,
    fetchOrders,
    orders,
    fetchRequests,
    requests,
  } = useContext(AdminContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchdashboard = async () => {
    setLoading(true);
    try {
    } catch (error) {
      setError(error + "Error fetching dashboard");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchdashboard();
    fetchUsers();
    fetchSellers();
    fetchProducts();
    fetchOrders();
    fetchRequests();
  }, []);

  return (
    <div className="flex justify-center mt-2 p-6">
      {loading ? (
        <p className="flex justify-center">
          <Loader />
        </p>
      ) : (
        <>
          <div className="flex flex-wrap gap-10 w-full text-center">
            <NavLink to="/admin/users" className="w-1/6">
              <div className="w-full min-w-fit h-fit px-3 py-1 bg-orange-600 text-2xl font semibld rounded-xl shadow-lg shadow-orange-400">
                <p>Total Users</p>
                <p>{users?.count}</p>
              </div>
            </NavLink>
            <NavLink to="/admin/sellers" className="w-1/6">
              <div className="w-full min-w-fit h-fit px-2 py-1 bg-orange-600 text-2xl font semibld rounded-xl shadow-lg shadow-orange-400">
                Total Sellers
                <p>{sellers?.count}</p>
              </div>
            </NavLink>
            <NavLink to="/admin/products" className="w-1/6">
              <div className="w-full min-w-fit h-fit px-2 py-1 bg-orange-600 text-2xl font semibld rounded-xl shadow-lg shadow-orange-400">
                Total Products
                <p>{products?.count}</p>
              </div>
            </NavLink>
            <NavLink to="/admin/orders" className="w-1/6">
              <div className="w-full min-w-fit h-fit px-2 py-1 bg-orange-600 text-2xl font semibld rounded-xl shadow-lg shadow-orange-400">
                Total Orders
                <p>{orders?.count}</p>
              </div>
            </NavLink>
            <NavLink to="/admin/requests" className="w-1/6">
              <div className="w-full min-w-fit h-fit px-2 py-1 bg-orange-600 text-2xl font semibld rounded-xl shadow-lg shadow-orange-400">
                Total Requests
                <p>{requests?.count}</p>
              </div>
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
}

export default dashboard;
