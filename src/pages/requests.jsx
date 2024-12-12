import { useContext, useEffect } from "react";
import { AdminContext } from "../context/adminContext";
import Loader from "../components/loader";
import TableComponent from "../components/table";

const Requests = () => {
  const { fetchRequests, requests } = useContext(AdminContext);
  useEffect(() => {
    fetchRequests();
  }, []);
  const columns = [
    { header: "ID", field: "id" },
    { header: "Request Type", field: "request_type" },
    { header: "Status", field: "status" },
    { header: "Reason", field: "reason" },
  ];

  const data = requests?.data?.map((elm) => ({
    id: elm?._id,
    request_type: elm?.requestType,
    status: elm?.status,
    reason: elm?.reason,
  }));

  return (
    <div className="px-4">
      <h1 className="text-3xl text-white py-2 text-center my-3 font-semibold bg-slate-800 rounded-t-md shadow-md shadow-black">
        Requests
      </h1>
      {requests?.error && (
        <p className="text-red-700 font-semibold text-lg bg-red-200 rounded-md my-4">
          {requests?.error}
        </p>
      )}
      {requests?.loader ? (
        <p className="flex justify-center">
          <Loader />
        </p>
      ) : (
        <TableComponent columns={columns} data={data} />
      )}
    </div>
  );
};

export default Requests;

// <div className="flex justify-center ">
//   <div className="bg-slate-300 mt-10 rounded-lg p-8">
//     <h1 className="text-3xl text-center my-3">Manage Requests</h1>
//     {error && (
//       <p className="text-red-700 font-semibold text-lg bg-red-200 rounded-md my-4">
//         {error}
//       </p>
//     )}
//     {loading ? (
//       <p className="flex justify-center">
//         <Loader />
//       </p>
//     ) : (
//       <table className="table-auto  border-spacing-3  text-left">
//         <tr>
//           <th className="px-4 py-1 text-2xl font-medium">Request ID</th>
//           <th className="px-4 py-1 text-2xl font-medium">Request Type</th>
//           <th className="px-4 py-1 text-2xl font-medium">Status</th>
//           <th className="px-4 py-1 text-2xl font-medium">Reason</th>
//         </tr>
//         {request?.map((elm) => (
//           <tr>
//             <td className="px-4 py-1 text-lg font-medium">{elm?._id}</td>
//             <td className="px-4 py-1 text-lg font-medium">
//               {elm?.requestType}
//             </td>
//             <td className="px-4 py-1 text-lg font-medium">{elm?.status}</td>
//             <td className="px-4 py-1 text-lg font-medium">{elm?.reason}</td>
//           </tr>
//         ))}
//       </table>
//     )}
//   </div>
// </div>
