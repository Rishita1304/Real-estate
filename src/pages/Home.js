import React from "react";
import Banner from '../components/Banner';
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="min-h-[1800px]">
      <div className="lg:mx-20 mx-6">
      <h1 className="font-semibold text-2xl lg:text-3xl py-4 my-4">Search Properties to rent</h1>
      <Search/>
      </div>
    </div>
  );
};

export default Home;
