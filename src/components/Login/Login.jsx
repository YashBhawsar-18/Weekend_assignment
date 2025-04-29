import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { useState } from 'react';
import auth from '../../Api/Auth.js';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard.jsx';
import Header from '../Header/Header.jsx';




const Login = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const queryClient = useQueryClient();
    const navigate = useNavigate();



    const loginMutation = useMutation({
      mutationFn: auth,
      onSuccess: (data) => {
          alert("Welcome To Employpuri");
          localStorage.setItem("Token", data.accessToken);
            queryClient.invalidateQueries(["users"]);
            navigate("/dashboard");
          // console.log("Mutation data", data);
          // queryClient.invalidateQueries(["users"]);
          // localStorage.setItem("Token", data.accessToken);
          // console.log(Token);
          // localStorage.setItem("Username", username);
          // console.log("username", username);
          // // navigate to dashboard
          // navigate("/dashboard")
          // if (data.accessToken) {
          //   localStorage.setItem("Token", data.accessToken);
          //   queryClient.invalidateQueries(["users"]);
          //   navigate("/dashboard");
          // } else {
          //   console.error("AccessToken missing from response");
          // }

      },
      onError: () => {
        console.log("Auth_mutation_Error",error);
        
      }

    })


    const handleEmail = (e) => {
        setUsername(e.target.value)
    }
    
    const handlePassword = (e) => {
      setPassword(e.target.value);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Email", username)
        console.log("Pass", password);
        // api calling by tanstack mutation for authentication
        loginMutation.mutate({username, password});
        // mutate ko sab kuch ek hi variable ya 1 hi object ke andar pass krna jaruri hai

    }




  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="text"
            value={username}
            onChange={handleEmail}
            placeholder="Enter your Email"
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePassword}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  </div>
  </>
  );
}

export default Login