import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { loginUser } from '../redux/apiCall/authApiCall';

const LoginPage = () => {
    const [email ,setEmail]=useState("")
    const [password , setPass]=useState("")

    const navigate=useNavigate()
    const dispatch = useDispatch();

    const handlesubmet=(e)=>{
        e.preventDefault()
        if(email.trim() === "") return toast.error("Email is required");
        if(password.trim() === "") return toast.error("Password is required");

        dispatch(loginUser({ email, password }));
        navigate("/")
    }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/4449785/pexels-photo-4449785.jpeg?auto=compress&cs=tinysrgb&w=1400')" }}
    >
      <div className="bg-white p-8 rounded shadow-md w-96">
      <ToastContainer />

        <h2 className="text-3xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPass(e.target.value)}
              className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              onClick={handlesubmet}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
            >
              Login
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default LoginPage;
