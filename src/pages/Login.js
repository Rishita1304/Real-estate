import React from 'react'
import { useNavigate } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc'
import GoogleLogin from 'react-google-login';

const Login = () => {
    const navigate = useNavigate();
    const handleLogClick= ()=>{
        alert("User Logged In!!")
        navigate('/')
      }
      const onSuccess = (res) => {
        console.log("LogIn Success", res.profileObj);
        navigate('/')
    }
    const onFailure = (res) => {
        console.log("LogIn Fuilure", res);
    }
  return (
    <div className="min-h-[800px] lg:min-h-[650px] mx-6">
        <div className='mx-auto my-4 w-full pt-8 lg:w-1/3 justify-center items-center'>
        <h2 className='text-2xl font-semibold pb-2 m-4 flex items-center justify-center'>Login here</h2>
            <form className="flex flex-col gap-y-6">
              <input
                className="border border-gray-200 focus:border-purple-700 outline-none rounded w-full px-4 h-14 text-sm"
                placeholder="Email Address"
                type="email"
              />
              <input
                className="border border-gray-200 focus:border-purple-700 outline-none rounded w-full px-4 h-14 text-sm"
                placeholder="Password"
                type="password"
              />
                <button className="bg-purple-700 hover:bg-purple-800 text-white rounded p-4 text-sm w-full transition" onClick={handleLogClick}>
                  Submit
                </button>
                <hr/>
                <div className='mt-[-35px] w-1/6 mx-auto bg-white text-gray-400 flex justify-center'>OR</div>
                {/* <button className="flex items-center justify-center gap-7 p-3 border border-gray-300 rounded-lg hover:bg-slate-50 transition-all">
          <FcGoogle className="text-2xl" />
          <span className="text-gray-500 hover:text-gray-600  text-lg">Login with Google</span>
        </button> */}
        <GoogleLogin     clientId="902793822276-faketo9e86fhf873hvrf3fp7k365dfm2.apps.googleusercontent.com"
    buttonText="Login with Google"
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}/>
            </form>
            </div>
    </div>
  )
}

export default Login