import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { registerUser } from '../redux/apiCall/authApiCall';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { RotatingLines } from "react-loader-spinner";

const RegisterPage = () => {
const [username ,setUsername]=useState("")
const [email ,setEmail]=useState("")
const [password, setPass]=useState("")

const { registerMessage, loading} = useSelector(state => state.auth);


const dispatch = useDispatch();

    const handlesubmet=(e)=>{
      e.preventDefault();
      if(username.trim() === "") return toast.error("Username is required");
      if(email.trim() === "") return toast.error("Email is required");
      if(password.trim() === "") return toast.error("Password is required");

      dispatch(registerUser({ username, email, password }))
    }
    console.log({ username, email, password })

    if(registerMessage) {
      swal({
          title: registerMessage,
          icon: "success"
      }).then(isOk => {
          if(isOk) {
             
          }
      })
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-no-repeat "
    style={{ backgroundImage: "url('https://images.pexels.com/photos/4449785/pexels-photo-4449785.jpeg?auto=compress&cs=tinysrgb&w=1400') "}}>
      <div className="bg-white p-8 rounded shadow-md w-96">
      <ToastContainer />

        <h2 className="text-3xl font-semibold mb-4">Register</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
                     onChange={(e) => setUsername(e.target.value)}
              className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
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
          {registerMessage?"":
          <button
          onClick={handlesubmet}
            type="submit"
            className="w-fit m-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
          >
          {loading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="40"
              visible={true}
            />
          ) : (
            "Register"
          )}
            
          </button>
        }
  
          </div>
          <a href='/login' className=' font-bold text-red-200 hover:text-red-500 duration-300 '> Already have an account? </a>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
