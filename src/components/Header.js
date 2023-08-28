import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../assets/img/logo11.png'

const Header = ({user}) => {
  const navigate = useNavigate()
  
  const handlelogout = () => {
    window.location.assign('/')
    localStorage.removeItem("user");
    alert("User Logged out!!")
  }
  
  return (
    <header className="pt-2 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to='/'>
          <img className="h-[55px] lg:h-[70px]" src={Logo} alt=""/>
        </Link>
        {user ? (<div className="flex items-center gap-3 lg:gap-6">
          <Link to='/signup'><button className="bg-purple-700 px-4 py-3 text-white rounded-lg hover:bg-purple-800 transition" onClick={handlelogout}>Log Out</button></Link>
          </div>) : (
          <div className="flex items-center gap-3 lg:gap-6">
          <Link to='/login' className="hover:text-purple-900 px-4 py-3 border hover:border-purple-400 rounded-lg transition">Log in</Link>
          <Link to='/signup' className="bg-purple-700 px-4 py-3 text-white rounded-lg hover:bg-purple-800 transition">Sign up</Link>
          </div>
          )}
      </div>
    </header>
  );
};

export default Header;
