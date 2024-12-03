import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Logo from "./images/logo.png";
import axios from "axios";
import { AdminContext } from "../context/adminContext";

const Sidebar = () => {
  const { checkAdminLoginStatus } = useContext(AdminContext);
  const navigate = useNavigate();

  const logoutbtn = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/admin/logout`
        // "http://localhost:3000/admin/logout"
      );
      if (response.status === 200) {
        await checkAdminLoginStatus();
        navigate("/");
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className=" bg-slate-300 h-screen sticky top-0 border-r border-slate-800">
      <div className=" bg-slate-800 flex justify-end md:justify-center">
        <img className="w-44 h-14 px-2 py-2 " src={Logo} alt="logo image" />
      </div>
      <div className="bg-transparent md:bg-slate-300">
        <NavLink
          to="/admin/dashboard"
          className="block text-xl font-semibold w-full border-t border-black hover:bg-slate-800 hover:text-white px-16 py-3"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/admin/users"
          className="block text-xl font-semibold w-full border-t border-black hover:bg-slate-800 hover:text-white px-16  py-3"
        >
          Users
        </NavLink>
        <NavLink
          to="/admin/sellers"
          className="block text-xl font-semibold w-full border-t border-black hover:bg-slate-800 hover:text-white px-16  py-3"
        >
          Sellers
        </NavLink>
        <NavLink
          to="/admin/products"
          className="block text-xl font-semibold w-full border-t border-black hover:bg-slate-800 hover:text-white px-16  py-3"
        >
          Products
        </NavLink>
        <NavLink
          to="/admin/orders"
          className="block text-xl font-semibold w-full border-t border-black hover:bg-slate-800 hover:text-white px-16  py-3"
        >
          Orders
        </NavLink>
        <NavLink
          to="/admin/requests"
          className="block text-xl font-semibold w-full border-y border-black hover:bg-slate-800 hover:text-white px-16  py-3"
        >
          Requests
        </NavLink>
        <div className="fixed bottom-6 left-12">
          <button
            onClick={() => logoutbtn()}
            className="bg-slate-800 px-8 py-1 rounded-md text-white text-xl font-semibold"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
