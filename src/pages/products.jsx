import { useEffect, useContext } from "react";
import { AdminContext } from "../context/adminContext";
import Loader from "../components/loader";
import TableComponent from "../components/table";
const Products = () => {
  const { fetchProducts, products } = useContext(AdminContext);
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const fetchproducts = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.get(
  //       `${import.meta.env.VITE_API_URL}/admin/getproducts`
  //       // "http://localhost:3000/admin/getproducts"
  //     );
  //     setProducts(response.data);
  //   } catch (err) {
  //     console.error("Error fetching products:", err);
  //     setError(err?.response?.data?.message || "Error fetching sellers");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  useEffect(() => {
    fetchProducts();
  }, []);

  const columns = [
    { header: "Images", field: "images" },
    { header: "Name", field: "name" },
    { header: "Price", field: "price" },
    { header: "Description", field: "description" },
  ];

  const data = products?.data?.map((elm) => ({
    images: elm?.imageUrl,
    name: elm?.name,
    price: "₹" + elm?.price,
    description: elm?.description,
  }));

  return (
    <div className="px-4">
      <h1 className="text-3xl text-white py-2 text-center my-3 font-semibold bg-slate-800 rounded-t-md shadow-md shadow-black">
        All Products
      </h1>
      {products?.error && (
        <p className="text-red-700 font-semibold text-lg bg-red-200 rounded-md my-4">
          {error}
        </p>
      )}
      {products?.loader ? (
        <p className="flex justify-center">
          <Loader />
        </p>
      ) : (
        <TableComponent columns={columns} data={data} />
      )}
    </div>
    // <div className="flex justify-center ">
    //   <div className="bg-slate-300 mt-10 rounded-lg p-8">
    //     <h1 className="text-3xl text-center my-3">Manage Products</h1>
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
    //           <th className="px-4 py-1 text-2xl font-medium">Name</th>
    //           <th className="px-4 py-1 text-2xl font-medium">Price</th>
    //           <th className="px-4 py-1 text-2xl font-medium">Description</th>
    //         </tr>
    //         {products.map((elm) => (
    //           <tr>
    //             <td className="px-4 py-1 text-lg font-medium">{elm.name}</td>
    //             <td className="px-4 py-1 text-lg font-medium">{elm.price}</td>
    //             <td className="px-4 py-1 text-lg font-medium">
    //               {elm.description}
    //             </td>
    //           </tr>
    //         ))}
    //       </table>
    //     )}
    //   </div>
    // </div>
  );
};

export default Products;
