import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchproducts = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/admin/getproducts`
        // "http://localhost:3000/admin/getproducts"
      );
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError(err?.response?.data?.message || "Error fetching sellers");
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchproducts();
  }, []);

  return (
    <div className="flex justify-center p-5">
      <div className="bg-slate-300 text-black p-10 rounded-md space-y-6">
        <h1 className="text-4xl">Manage Products</h1>
        {loading && <p>Loading...</p>} {/* Show loading state */}
        {error && (
          <p className="text-red-700 font-semibold text-lg bg-red-200 rounded-md">
            {error}
          </p>
        )}
        <table className="border-2">
          <tr>
            <th className="border-x-2 px-3 py-1 text-lg">Product Name</th>
            <th className="border-x-2 px-3 py-1 text-lg">Price</th>
            <th className="border-x-2 px-3 py-1 text-lg">Description</th>
          </tr>
          {products.map((elm) => (
            <tr className="border-y-2">
              <td className="border-x-2 px-3 py-1 text-lg">{elm.name}</td>
              <td className="border-x-2 px-3 py-1 text-lg">{elm.price}</td>
              <td className="border-x-2 px-3 py-1 text-lg">
                {elm.description}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Products;
