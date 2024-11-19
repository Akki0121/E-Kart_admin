import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchproducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/admin/getproducts"
      );
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to fetch products");
      setLoading(false);
    }
  };
  useEffect(async () => {
    fetchproducts();
  }, []);

  return (
    <div className="flex justify-center p-5">
      <div className="bg-slate-300 text-black p-10 rounded-md space-y-6">
        <h1 className="text-4xl">Manage Products</h1>
        {loading && <p>Loading...</p>} {/* Show loading state */}
        {error && <p>{error}</p>}
        <table>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
          {products.map((elm) => (
            <tr>
              <td>{elm.name}</td>
              <td>{elm.price}</td>
              <td>{elm.description}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Products;
