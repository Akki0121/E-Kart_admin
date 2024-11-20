import { useEffect, useState } from "react";
import axios from "axios";

const Sellers = () => {
  const [sellers, setsellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchsellers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/admin/getsellers"
      );
      setsellers(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching sellers:", err);
      setError("Failed to fetch sellers");
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchsellers();
  }, []);

  return (
    <div className="flex justify-center p-5">
      <div className="bg-slate-300 text-black p-10 rounded-md space-y-6">
        <h1 className="text-4xl">Manage sellers</h1>
        {loading && <p>Loading...</p>} {/* Show loading state */}
        {/* {error && <p>{error}</p>} Show error message */}
        <table className="border-2">
          <tr>
            <th>Username</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
          {sellers.map((elm) => (
            <tr className="border-y-2">
              <td>{elm.name}</td>
              <td>{elm.phone}</td>
              <td>{elm.email}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Sellers;
