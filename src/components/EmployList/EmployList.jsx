import { useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { getEntries } from '../Api/Creation';
import {  NavLink } from 'react-router-dom';


const EmployList = () => {

    const queryClient = useQueryClient()

    const { isLoading, error, data } = useQuery({
        queryKey: ['entries'],
        queryFn: getEntries,
    });


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">Employee List</h2>
        <ul className="space-y-2">
          {(data ?? []).map((entry) => (
            <li key={entry.id}>
              <NavLink to={`/employdetails/${entry.id}`}
                className="block px-4 py-2 rounded-md bg-indigo-100 hover:bg-indigo-200 transition font-medium text-indigo-800"
              >
                {entry.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>


    
  )
}

export default EmployList