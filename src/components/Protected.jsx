import { Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AdminContext } from "../context/adminContext";
import Layout from "./layout";

const Protected = () => {
  const { isAdminLoggedIn } = useContext(AdminContext);

  return isAdminLoggedIn ? <Layout /> : <Navigate to={"/login"} />;
};

export default Protected;
