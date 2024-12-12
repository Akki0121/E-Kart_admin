import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Logo from "./images/logo.png";
import axios from "axios";
import { AdminContext } from "../context/adminContext";
import {
  FaUser,
  FaSellcast,
  FaProductHunt,
  FaShoppingCart,
  FaExchangeAlt,
} from "react-icons/fa";
import { RiProfileFill } from "react-icons/ri";

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
        navigate("/login");
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className=" bg-slate-300 h-screen sticky top-0 shadow-lg shadow-gray-800">
      <div className=" bg-slate-800 flex justify-center pb-2 shadow-sm shadow-gray-800">
        <img className="w-44 h-14 px-2 py-2 " src={Logo} alt="logo image" />
      </div>
      <div className="bg-transparent md:bg-slate-300 px-1">
        <NavLink
          to="/admin/dashboard"
          className="flex items-center gap-1 text-xl font-semibold w-full  hover:bg-slate-800 hover:text-white hover:rounded-3xl my-2 px-16 py-3"
        >
          <RiProfileFill />
          Dashboard
        </NavLink>
        <NavLink
          to="/admin/users"
          className="flex items-center gap-1 text-xl font-semibold w-full  hover:bg-slate-800 hover:text-white hover:rounded-3xl my-2 px-16  py-3"
        >
          <FaUser />
          Users
        </NavLink>
        <NavLink
          to="/admin/sellers"
          className="flex items-center gap-1 text-xl font-semibold w-full  hover:bg-slate-800 hover:text-white hover:rounded-3xl my-2 px-16  py-3"
        >
          <FaSellcast />
          Sellers
        </NavLink>
        <NavLink
          to="/admin/products"
          className="flex items-center gap-1 text-xl font-semibold w-full  hover:bg-slate-800 hover:text-white hover:rounded-3xl my-2 px-16  py-3"
        >
          <FaProductHunt />
          Products
        </NavLink>
        <NavLink
          to="/admin/orders"
          className="flex items-center gap-1 text-xl font-semibold w-full  hover:bg-slate-800 hover:text-white hover:rounded-3xl my-2 px-16  py-3"
        >
          <FaShoppingCart />
          Orders
        </NavLink>
        <NavLink
          to="/admin/requests"
          className="flex items-center gap-1 text-xl font-semibold w-full hover:bg-slate-800 hover:text-white hover:rounded-3xl my-2 px-16  py-3"
        >
          <FaExchangeAlt />
          Requests
        </NavLink>
        <div className="fixed bottom-6 left-14 pl-1">
          <button
            onClick={() => logoutbtn()}
            className="bg-slate-800 px-8 py-1 rounded-md text-white text-xl font-semibold shadow-md shadow-black"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
