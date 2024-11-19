// import React from "react";

// function users() {
//   return <div className="text-4xl">Manage Users</div>;
// }

// export default users;

import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/admin/getusers");
      setUsers(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching users:", err);
      setError("Failed to fetch users");
      setLoading(false);
    }
  };
  useEffect(async () => {
    fetchUsers();
  }, []);

  return (
    <div className="flex justify-center p-5">
      <div className="bg-slate-300 text-black p-10 rounded-md space-y-6">
        <h1 className="text-4xl">Manage Users</h1>
        {loading && <p>Loading...</p>} {/* Show loading state */}
        {/* {error && <p>{error}</p>} Show error message */}
        <table>
          <tr>
            <th>Username</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
          {users.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Users;
