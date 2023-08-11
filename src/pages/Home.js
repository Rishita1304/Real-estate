import React, { useState, useContext } from "react";
import Search from "../components/Search";
import HouseList from "../components/HouseList";
import Input from '../components/Input'
import { HouseContext } from "../components/HouseContext";

const Home = () => {
  const {houses,onHandleClick} = useContext(HouseContext)
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredData = houses.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="min-h-[1800px] mx-6">
      <div className="mb-10">
        <div className="mx-6 flex lg:flex-row justify-between items-center flex-col">
      <h1 className="font-semibold text-2xl lg:text-3xl py-4 my-4 flex justify-between">Search Properties to rent</h1>
      <div>
        <input className=" border rounded-lg p-4"
        type="text"
        placeholder="Search by property Title"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        />
        <div className="px-6 text-[15px] cursor-pointer space-y-6 shadow-md bg-white absolute lg:w-1/5 w-full z-10 list-none rounded-b-lg">
        {/* <div className="w-full bg-white border flex flex-col px-2 justify-start lg:max-w-[296px] cursor-pointer"> */}

      {searchTerm?
(      <ul>
        {filteredData.map(item => (
          <li key={item.id} className="py-2">
            <h3 onClick={()=>onHandleClick(item.name)}>{item.name}</h3>
          </li>
        ))}
      </ul>): ''}
        </div>
        </div>
        </div>
      <Search/>
      </div>
      <HouseList/>
    </div>
  );
};

export default Home;
