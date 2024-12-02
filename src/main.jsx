import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import AdminContextProvider from "./context/adminContext";

axios.defaults.withCredentials = true;
createRoot(document.getElementById("root")).render(
  <AdminContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AdminContextProvider>
);
