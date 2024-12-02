import { useEffect, useState, useContext } from "react";
import { AdminContext } from "../context/adminContext";
import Loader from "../components/loader";
import TableComponent from "../components/table";

const Sellers = () => {
  const { fetchSellers, sellers } = useContext(AdminContext);
  useEffect(() => {
    fetchSellers();
  }, []);
  const columns = [
    { header: "Seller Name", field: "name" },
    { header: "Seller Email", field: "email" },
    { header: "Seller Phone", field: "phone" },
    { header: "Seller Address", field: "address" },
  ];

  const data = sellers.data.map((elm) => ({
    name: elm?.name,
    email: elm?.email,
    phone: elm?.phone,
    address: elm?.shopAddress,
  }));

  return (
    <>
      <div className="p-4">
        <h1 className="text-3xl text-center my-3">Sellers</h1>
        {sellers.error && (
          <p className="text-red-700 font-semibold text-lg bg-red-200 rounded-md my-4">
            {error}
          </p>
        )}
        {sellers.loader ? (
          <p className="flex justify-center">
            <Loader />
          </p>
        ) : (
          <TableComponent columns={columns} data={data} />
        )}
      </div>
      {/* <div className="flex justify-center items-center">
        <div className="bg-slate-300 mt-10 rounded-lg p-8">
          <h1 className="text-3xl text-center my-3">Manage sellers</h1>

          {error && (
            <p className="text-red-700 font-semibold text-lg bg-red-200 rounded-md my-4">
              {error}
            </p>
          )}
          {loading ? (
            <p className="flex justify-center">
              <Loader />
            </p>
          ) : (
            <table className="table-auto  border-spacing-3  text-left">
              <tr>
                <th className="px-4 py-1 text-2xl font-medium">Username</th>
                <th className="px-4 py-1 text-2xl font-medium">Phone Number</th>
                <th className="px-4 py-1 text-2xl font-medium">Email</th>
              </tr>
              {sellers.map((elm) => (
                <tr>
                  <td className="px-4 py-1 text-lg font-medium">{elm.name}</td>
                  <td className="px-4 py-1 text-lg font-medium">{elm.phone}</td>
                  <td className="px-4 py-1 text-lg font-medium">{elm.email}</td>
                </tr>
              ))}
            </table>
          )}
        </div>
      </div> */}
    </>
  );
};

export default Sellers;
