import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import Sidebar from "./sidebar";
import Logo from "./images/logo.png";

const HamSidebar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="ham-sidebar flex ">
      {isOpen && <Sidebar />}
      <div className="">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        {/* {isOpen && (
          <div className=" bg-slate-800 md:flex justify-center">
            <img className="w-44 h-14 px-2 py-2 " src={Logo} alt="logo image" />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default HamSidebar;
