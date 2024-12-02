import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import HamSidebar from "./HamSidebar";

function layout() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="flex ">
        {screenSize.width < 768 ? <HamSidebar /> : <Sidebar />}
        {/* <Sidebar /> */}
        <div className="flex-1">
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default layout;
