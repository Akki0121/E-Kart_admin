import { useEffect, useState } from "react";
import axios from "axios";
import { data } from "autoprefixer";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await axios?.get(
        "http://localhost:3000/admin/getorders"
      );
      setOrders(response?.data);
      console.log(response?.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching orders:", err);
      setError("Failed to fetch orders");
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="flex justify-center p-5">
      <div className="bg-slate-300 text-black p-10 rounded-md space-y-6">
        <h1 className="text-4xl">Manage Orders</h1>
        {loading && <p>Loading...</p>} {/* Show loading state */}
        {/* {error && <p>{error}</p>} */}
        <table className="border-2">
          <tr>
            <th className="border-x-2 px-3 py-1 text-lg">Products</th>
            <th className="border-x-2 px-3 py-1 text-lg">Quantity</th>
            <th className="border-x-2 px-3 py-1 text-lg">Bill Amount</th>
            <th className="border-x-2 px-3 py-1 text-lg">Address</th>
            <th className="border-x-2 px-3 py-1 text-lg">payment Status</th>
          </tr>
          {orders?.map((elm) => (
            <tr className="border-y-2">
              <td>
                {elm?.items?.map((el) => (
                  <ul className="border-r-2">
                    <li>{el?.productId?.name}</li>
                  </ul>
                ))}
              </td>
              <td>
                {elm?.items?.map((el) => (
                  <ul className="border-r-2">
                    <li>{el?.quantity}</li>
                  </ul>
                ))}
              </td>
              <td className="border-x-2 px-3 py-1 text-lg">{elm?.amount}</td>
              <td className="border-x-2 px-3 py-1 text-lg">{elm?.address}</td>
              <td className="border-x-2 px-3 py-1 text-lg">
                {String(elm?.payment)}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Orders;
