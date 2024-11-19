import { NavLink } from "react-router-dom";

const Sidebar = () => (
  <aside className="pt-10 space-y-3 bg-slate-300 h-screen">
    <NavLink
      to="/admin/dashboard"
      className="block text-lg font-semibold w-full hover:bg-slate-800 hover:text-white px-10"
    >
      Dashboard
    </NavLink>
    <NavLink
      to="/admin/users"
      className="block text-lg font-semibold w-full hover:bg-slate-800 hover:text-white px-10"
    >
      Users
    </NavLink>
    <NavLink
      to="/admin/sellers"
      className="block text-lg font-semibold w-full hover:bg-slate-800 hover:text-white px-10"
    >
      Sellers
    </NavLink>
    <NavLink
      to="/admin/products"
      className="block text-lg font-semibold w-full hover:bg-slate-800 hover:text-white px-10"
    >
      Products
    </NavLink>
    <NavLink
      to="/admin/orders"
      className="block text-lg font-semibold w-full hover:bg-slate-800 hover:text-white px-10"
    >
      Orders
    </NavLink>
    <NavLink
      to="/admin/requests"
      className="block text-lg font-semibold w-full hover:bg-slate-800 hover:text-white px-10"
    >
      Requests
    </NavLink>
  </aside>
);

export default Sidebar;
