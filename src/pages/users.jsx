import { useContext, useEffect } from "react";
import { AdminContext } from "../context/adminContext";
import Loader from "../components/loader";
import TableComponent from "../components/table";

const Users = () => {
  const { fetchUsers, users } = useContext(AdminContext);

  useEffect(() => {
    fetchUsers();
  }, []);

  const columns = [
    { header: "User Name", field: "name" },
    { header: "Email", field: "email" },
    { header: "Phone", field: "phone" },
  ];

  const data = users.data.map((elm) => ({
    name: elm.name,
    email: elm.email,
    phone: elm.phone,
  }));

  return (
    <div className="p-4">
      <h1 className="text-3xl text-center my-3 font-semibold">Users</h1>
      {users.error && (
        <p className="text-red-700 font-semibold text-lg bg-red-200 rounded-md">
          {users.error}
        </p>
      )}
      {users.loader ? (
        <p className="flex justify-center">
          <Loader />
        </p>
      ) : (
        <TableComponent columns={columns} data={data} />
      )}
    </div>
  );
};

export default Users;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import Loader from "../components/loader";
// import TableComponent from "../components/table";

// const Users = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get(
//         `${import.meta.env.VITE_API_URL}/admin/getusers`
//         // "http://localhost:3000/admin/getusers"
//       );
//       setUsers(response.data);
//       console.log(response?.message);
//     } catch (err) {
//       setError(err?.response?.data?.message || "Error Fetching Users");
//     } finally {
//       setLoading(false);
//     }
//   };
//   useEffect(() => {
//     fetchUsers();
//   }, []);
//   const columns = [
//     { header: "User Name", field: "name" },
//     { header: "Email", field: "email" },
//     { header: "Phone", field: "phone" },
//   ];

//   const data = users?.map((elm) => ({
//     name: elm?.name,
//     email: elm?.email,
//     phone: elm?.phone,
//   }));

//   return (
//     <div className="p-4">
//       <h1 className="text-3xl text-center my-3 font-semibold">Users</h1>
//       {error && (
//         <p className="text-red-700 font-semibold text-lg bg-red-200 rounded-md">
//           {error}
//         </p>
//       )}
//       {loading ? (
//         <p className="flex justify-center">
//           <Loader />
//         </p>
//       ) : (
//         <TableComponent columns={columns} data={data} />
//       )}
//     </div>
//     // <div className="flex justify-center ">
//     //   <div className="bg-slate-300 mt-10 rounded-lg p-8">
//     //     <h1 className="text-3xl text-center my-3">Manage Users</h1>
//     //     {error && (
//     //       <p className="text-red-700 font-semibold text-lg bg-red-200 rounded-md">
//     //         {error}
//     //       </p>
//     //     )}
//     //     {loading ? (
//     //       <p className="flex justify-center">
//     //         <Loader />
//     //       </p>
//     //     ) : (
//     //       <table className="table-auto  border-spacing-3  text-left">
//     //         <tr>
//     //           <th className="px-4 py-1 text-2xl font-medium">Username</th>
//     //           <th className="px-4 py-1 text-2xl font-medium">Phone Number</th>
//     //           <th className="px-4 py-1 text-2xl font-medium">Email</th>
//     //         </tr>
//     //         {users.map((user) => (
//     //           <tr>
//     //             <td className="px-4 py-1 text-lg font-medium">{user.name}</td>
//     //             <td className="px-4 py-1 text-lg font-medium">{user.phone}</td>
//     //             <td className="px-4 py-1 text-lg font-medium">{user.email}</td>
//     //           </tr>
//     //         ))}
//     //       </table>
//     //     )}
//     //   </div>
//     // </div>
//   );
// };

// export default Users;
