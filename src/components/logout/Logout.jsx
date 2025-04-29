import React from "react";
import { Outlet, useNavigate } from "react-router-dom";


const Logout = () => {

    const navigate = useNavigate();
    const handleClick = (e) => {
        localStorage.removeItem("Token");
        navigate("/");
    }

  return (
    <div className=" min-h-screen">
      <button
        onClick={handleClick}
        className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  )
}

export default Logout
