import React, { useState } from 'react'
import EmployCreation from '../Creation/EmployCreation';
import EmployList from '../EmployList/EmployList';
import { BrowserRouter, Route, Router } from 'react-router-dom';



const Dashboard = () => {

   
  return (
    <div className="p-4 ">
      <div className="flex gap-6 ">
        {/* Left - Form */}
        <div className="w-1/2 bg-white p-4 rounded shadow">
          <EmployCreation />
        </div>

        {/* Right - List */}
        <div className="w-1/2 bg-white p-4 my-30 rounded shadow">
          <EmployList />
        </div>
      </div>
    </div>
  );
}

export default Dashboard