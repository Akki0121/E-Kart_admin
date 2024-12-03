import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import Sidebar from "./sidebar";

const HamSidebar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="ham-sidebar flex ">
      {isOpen && <Sidebar />}
      <div className="mt-2">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </div>
  );
};

export default HamSidebar;
