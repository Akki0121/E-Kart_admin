import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function navbar() {
  const logoutbtn = async () => {
    try {
      await axios.post("http://localhost:3000/admin/logout");
      window.location.href = "/login";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="navbar navbar-expand-lg px-5 bg-white w-full h-10 flex justify-end items-center">
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
