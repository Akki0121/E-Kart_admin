import { NavLink } from "react-router-dom";

const Sidebar = () => (
  <div className="pt-10 px-8 bg-slate-300 h-screen border-r-2 border-black">
    <NavLink
      to="/admin/dashboard"
      className="block text-xl font-semibold w-full border-t-2 border-black hover:bg-slate-800 hover:text-white px-10 py-2"
    >
      Dashboard
    </NavLink>
    <NavLink
      to="/admin/users"
      className="block text-xl font-semibold w-full border-t-2 border-black hover:bg-slate-800 hover:text-white px-10  py-2"
    >
      Users
    </NavLink>
    <NavLink
      to="/admin/sellers"
      className="block text-xl font-semibold w-full border-t-2 border-black hover:bg-slate-800 hover:text-white px-10  py-2"
    >
      Sellers
    </NavLink>
    <NavLink
      to="/admin/products"
      className="block text-xl font-semibold w-full border-t-2 border-black hover:bg-slate-800 hover:text-white px-10  py-2"
    >
      Products
    </NavLink>
    <NavLink
      to="/admin/orders"
      className="block text-xl font-semibold w-full border-t-2 border-black hover:bg-slate-800 hover:text-white px-10  py-2"
    >
      Orders
    </NavLink>
    <NavLink
      to="/admin/requests"
      className="block text-xl font-semibold w-full border-y-2 border-black hover:bg-slate-800 hover:text-white px-10  py-2"
    >
      Requests
    </NavLink>
  </div>
);

export default Sidebar;
