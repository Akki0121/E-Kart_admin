import { useEffect, useContext } from "react";
import { AdminContext } from "../context/adminContext";
import Loader from "../components/loader";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
const Orders = () => {
  const { fetchOrders, orders } = useContext(AdminContext);
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="px-4">
      <h1 className="text-3xl text-white py-2 text-center my-3 font-semibold bg-slate-800 rounded-t-md shadow-md shadow-black">
        Orders
      </h1>
      {orders?.error && (
        <p className="text-red-700 font-semibold text-lg bg-red-200 rounded-md my-4">
          {orders.error}
        </p>
      )}
      {orders?.loader ? (
        <p className="flex justify-center">
          <Loader />
        </p>
      ) : (
        <table className="table-auto  border-spacing-3  text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left text-xl font-medium text-gray-700">
                OrderId
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left text-xl font-medium text-gray-700">
                Products
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left text-xl font-medium text-gray-700">
                Quantity
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left text-xl font-medium text-gray-700">
                Bill Amount
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left text-xl font-medium text-gray-700">
                Address
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left text-xl font-medium text-gray-700">
                Payment Status
              </th>
            </tr>
          </thead>
          <tbody className="text-slate-800 text-xl">
            {orders?.data?.map((elm, rowIndex) => (
              <tr className={rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="px-4 py-2 border border-gray-300  ">
                  {elm?.generatedId}
                </td>
                <td className="px-4 py-2 border border-gray-300  ">
                  {elm?.items?.map((el) => (
                    <ul>
                      <li>{el?.productId?.name}</li>
                    </ul>
                  ))}
                </td>
                <td className="px-4 py-2 border border-gray-300  ">
                  {elm?.items?.map((el) => (
                    <ul>
                      <li>{el?.quantity}</li>
                    </ul>
                  ))}
                </td>
                <td className="px-4 py-2 border border-gray-300  ">
                  {elm?.amount}
                </td>
                <td className="px-4 py-2 border border-gray-300  ">
                  {elm?.address}
                </td>
                <td className="px-4 py-2 border border-gray-300   ">
                  {String(elm?.payment) === "false" ? (
                    <ImCross className="text-red-600" />
                  ) : (
                    <TiTick className="text-green-600 text-2xl" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Orders;
