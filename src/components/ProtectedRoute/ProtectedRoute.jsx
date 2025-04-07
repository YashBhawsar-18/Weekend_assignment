import React from 'react'
import {  Outlet, useNavigate } from 'react-router-dom';



const ProtectedRoute = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("Token");
    return (
        token ? <Outlet/> : navigate("/")
    )
  
  };
export default ProtectedRoute

