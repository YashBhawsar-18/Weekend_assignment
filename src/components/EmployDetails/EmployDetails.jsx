import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'react-router-dom';
import { getSingleEmploy } from '../Api/Creation';



const EmployDetails = () => {
    const { id } = useParams();
    console.log("id: ",id)

    const { data, isLoading, error } = useQuery({
      queryKey: ["entry", id],
      queryFn: () => getSingleEmploy(id),
    });
  
     if (isLoading) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <p className="text-gray-500">Loading...</p>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <p className="text-red-500">Error fetching entry</p>
    </div>
  );
  
    return (
      <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">{data.name}</h2>
        <p className="mb-2"><span className="font-semibold text-gray-700">Technology:</span> {data.technology}</p>
        <p className="mb-2"><span className="font-semibold text-gray-700">Company:</span> {data.company}</p>
        <p><span className="font-semibold text-gray-700">Description:</span> {data.description}</p>
      </div>
    </div>
    );
}

export default EmployDetails