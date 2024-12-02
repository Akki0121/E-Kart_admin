import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function navbar() {
  const logoutbtn = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/admin/logout`
        // "http://localhost:3000/admin/logout"
      );
      window.location.href = "/login";
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="navbar sticky top-0 bg-slate-800 navbar-expand-lg px-5 border-b-2 border-b-slate-500 w-full h-14 flex justify-end items-center">
        <button
          onClick={() => logoutbtn()}
          className="bg-purple-700 px-4 py-1 rounded-md text-white font-semibold"
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default navbar;
