import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Layout = () => (
  <div className="flex ">
    <Sidebar />
    <div className="flex-1">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  </div>
);

export default Layout;
