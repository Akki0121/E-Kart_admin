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
          <div className="flex flex-wrap gap-4 w-full text-center justify-center">
            <NavLink
              to="/admin/users"
              className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6"
            >
              <div className="w-full min-w-fit h-fit px-3 py-1 bg-slate-800 text-slate-100 text-lg hover:text-orange-400 font-normal rounded-xl shadow-md hover:shadow-lg hover:shadow-black shadow-black">
                <p>Total Users</p>
                <p>{users?.count || "--"}</p>
              </div>
            </NavLink>
            <NavLink
              to="/admin/sellers"
              className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6"
            >
              <div className="w-full min-w-fit h-fit px-2 py-1 bg-slate-800 text-slate-100 text-lg hover:text-orange-400 font-normal rounded-xl shadow-md hover:shadow-lg hover:shadow-black shadow-black">
                Total Sellers
                <p>{sellers?.count || "--"}</p>
              </div>
            </NavLink>
            <NavLink
              to="/admin/products"
              className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6"
            >
              <div className="w-full min-w-fit h-fit px-2 py-1 bg-slate-800 text-slate-100 text-lg hover:text-orange-400 font-normal rounded-xl shadow-md hover:shadow-lg hover:shadow-black shadow-black">
                Total Products
                <p>{products?.count || "--"}</p>
              </div>
            </NavLink>
            <NavLink
              to="/admin/orders"
              className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6"
            >
              <div className="w-full min-w-fit h-fit px-2 py-1 bg-slate-800 text-slate-100 text-lg hover:text-orange-400 font-normal rounded-xl shadow-md hover:shadow-lg hover:shadow-black shadow-black">
                Total Orders
                <p>{orders?.count || "--"}</p>
              </div>
            </NavLink>
            <NavLink
              to="/admin/requests"
              className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6"
            >
              <div className="w-full min-w-fit h-fit px-2 py-1 bg-slate-800 text-slate-100 text-lg hover:text-orange-400 font-normal rounded-xl shadow-md hover:shadow-lg hover:shadow-black shadow-black">
                Total Requests
                <p>{requests?.count || "--"}</p>
              </div>
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
}

export default dashboard;
