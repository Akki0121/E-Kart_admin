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

      setLoading(false);
    } catch (err) {
      console.error("Error fetching orders:", err);
      setError("Failed to fetch orders");
      setLoading(false);
    }
  };
  useEffect(async () => {
    fetchOrders();
  }, []);

  return (
    <div className="flex justify-center p-5">
      <div className="bg-slate-300 text-black p-10 rounded-md space-y-6">
        <h1 className="text-4xl">Manage Orders</h1>
        {loading && <p>Loading...</p>} {/* Show loading state */}
        {/* {error && <p>{error}</p>} */}
        <table>
          <tr>
            <th>Products</th>
            <th>Bill Amount</th>
            <th>Address</th>
            <th>payment Status</th>
          </tr>
          {orders?.map((elm) => (
            <tr>
              <td>{elm.items.productId}</td>
              <td>{elm.amount}</td>
              <td>{elm.address}</td>
              <td>{elm.payment}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Orders;
