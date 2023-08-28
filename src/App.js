import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { gapi } from "gapi-script";

const App = () => {

  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId: "902793822276-faketo9e86fhf873hvrf3fp7k365dfm2.apps.googleusercontent.com",
        scope:"",
      })
    }
    gapi.load('client:auth2', start)
  })
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
