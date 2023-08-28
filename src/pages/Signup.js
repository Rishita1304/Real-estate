import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const navigate = useNavigate();
    const handleSignClick= ()=>{
        alert("User Registered!!")
        navigate('/login')
    }
  return (
    <div className="min-h-[600px] mx-6">
        <div className='mx-auto my-4 w-full pt-8 lg:w-1/3 justify-center items-center'>
            <h2 className='text-2xl font-semibold pb-2 m-4 flex items-center justify-center'>Register here</h2>
            <form className="flex flex-col gap-y-5">
              <input
                className="border border-gray-200 focus:border-purple-700 outline-none rounded w-full px-4 h-14 text-sm"
                placeholder="Name"
                type="text"
              />
              <input
                className="border border-gray-200 focus:border-purple-700 outline-none rounded w-full px-4 h-14 text-sm"
                placeholder="Email Address"
                type="email"
              />
              <input
                className="border border-gray-200 focus:border-purple-700 outline-none rounded w-full px-4 h-14 text-sm"
                placeholder="Phone Number"
                type="number"
              />
              <input
                className="border border-gray-200 focus:border-purple-700 outline-none rounded w-full px-4 h-14 text-sm"
                placeholder="Password"
                type="password"
              />
                <button className="bg-purple-700 hover:bg-purple-800 text-white rounded p-4 text-sm w-full transition" onClick={handleSignClick}>
                  Submit
                </button>
            </form>
            </div>
    </div>
  )
}

export default Signup
