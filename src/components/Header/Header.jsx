// import React from "react";
// import Logout from "../logout/Logout";
// import logo from "../../assets/logo.png";

// const Header = () => {
//   return (
//     <header className="w-full bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
//         {/* Logo on the left */}
//         <div className="flex items-center space-x-3">
//           <img src={logo} alt="logo" />
//           <span className="text-xl font-semibold text-gray-700">Systango</span>
//         </div>

//         {/* Logout button on the right */}
//         <div>
//           <Logout />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from "react"
import image from '../../assets/logo.png'
import Logout from "../logout/Logout"
import { Outlet } from "react-router-dom"



const Header = () => {
  return (<>
    <header className="flex items-center justify-between h-20 bg-gray-800 text-white shadow-md">
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt="Logo"
          className="h-10 w-10 object-cover rounded-full"
        />
        <h1 className="text-xl font-bold">Systango</h1>
      </div>
      <div>
       <Logout/>
      </div>
    
    </header>
    <Outlet/>
    </>
  )
}

export default Header