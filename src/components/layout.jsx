import React from "react";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

function layout() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    console.log("Layout mounted");
    setIsInitialized(true);
  }, []);

  if (!isInitialized) return <p>Loading layout...</p>;
  return (
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
}

export default layout;

// import { Outlet } from "react-router-dom";
// import Navbar from "./navbar";
// import Sidebar from "./sidebar";

// const Layout = () => {
//   console.log("this is layout");
//   return (
//     <div className="flex ">
//       <Sidebar />
//       <div className="flex-1">
//         <Navbar />
//         <main>
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Layout;
