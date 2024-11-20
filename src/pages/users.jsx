import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/admin/getusers`
        // "http://localhost:3000/admin/getusers"
      );
      setUsers(response.data);
      console.log(response?.message);
      setLoading(false);
    } catch (err) {
      setError(err?.response?.data?.message || "Error Fetching Users");
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex justify-center p-5">
      <div className="bg-slate-300 text-black p-10 rounded-md space-y-6">
        <h1 className="text-4xl">Manage Users</h1>
        {loading && <p>Loading...</p>} {/* Show loading state */}
        {error && (
          <p className="text-red-700 font-semibold text-lg bg-red-200 rounded-md">
            {error}
          </p>
        )}
        <table className="border-2">
          <tr>
            <th className="border-x-2">Username</th>
            <th className="border-x-2">Phone Number</th>
            <th className="border-x-2">Email</th>
          </tr>
          {users.map((user) => (
            <tr className="border-y-2">
              <td className="border-x-2">{user.name}</td>
              <td className="border-x-2">{user.phone}</td>
              <td className="border-x-2">{user.email}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Users;
