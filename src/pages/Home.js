import React from "react";
import Search from "../components/Search";
import HouseList from "../components/HouseList";

const Home = () => {
  return (
    <div className="min-h-[1800px] mx-6">
      <div className="mb-10">
      <h1 className="font-semibold text-2xl lg:text-3xl py-4 my-4 flex justify-between">Search Properties to rent</h1>
      <Search/>
      </div>
      <HouseList/>
    </div>
  );
};

export default Home;
