import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEmploy } from "../Api/Creation";


const EmployCreation = () => {
  const [formData, setFormData] = useState({
    name: "",
    technology: "",
    company: "",
    description: "",
  });

  const queryClient = useQueryClient();



  const handleChange = (e) => {
    const { id, value } = e.target;
    // destructured data into name and value
    setFormData({ ...formData, [id]: value });
    // console.log(formData)


    // console.log(formData);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form data: ", formData);
  // };

  // const handleChange = (e) => {
  //   const { id, value } = e.target;
  //   setFormData({ ...formData, [id]: value });
  //   console.log(formData);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, technology, company, description } = formData;

    if (name.length < 3) return alert("Name must be at least 3 characters");
    if (description.length < 20) return alert("Description too short");

    creationMutation.mutate(formData);
  };

  const creationMutation = useMutation({
    mutationFn: addEmploy,
    onSuccess: () => {
      queryClient.invalidateQueries(["entries"]);
      alert("Entry added successfully!");
      setFormData({ name: "", technology: "", company: "", description: "" });
    },
    onError: () => {
      alert("Failed to add entry");
    },
  });


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Employ</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label htmlFor="technology" className="block text-sm font-medium text-gray-700">
              Technology
            </label>
            <input
              type="text"
              id="technology"
              placeholder="Technology"
              value={formData.technology}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
              Company
            </label>
            <input
              type="text"
              id="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <input
              type="text"
              id="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-medium py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployCreation;
