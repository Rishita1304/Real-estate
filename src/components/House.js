import React from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { BsCurrencyRupee } from "react-icons/bs";

const House = ({ house }) => {
  const {
    image,
    type,
    country,
    address,
    bedrooms,
    bathrooms,
    surface,
    listingDate,
    price,
    name
  } = house;
  return (
    <div className="bg-white shadow-1 p-5 rounded-lg mx-auto cursor-pointer w-full max-w-[352px] hover:shadow-2xl transition">
      <img className="mb-6 rounded-lg" src={image} alt="" />
      <div className="mb-3 flex gap-x-4 text-sm">
        <div className="bg-green-500 py-1 rounded-full px-3 text-white">
          {type}
        </div>
        <div className="bg-purple-500 py-1 rounded-full px-3 text-white">
          {country}
        </div>
      </div>
      <div className="py-2 font-semibold text-xl flex gap-x-2 items-center">
        {name}
      </div>
      <div className="text-gray-500 py-2 font-medium flex gap-x-2 items-center">
        {address}
      </div>
      <div className="flex justify-between py-3 my-2 border-y mx-1">
        <div className="text-gray-400 flex gap-x-0.5 items-center">
          <BiBed />
          {bedrooms}
        </div>
        <div className="text-gray-400 flex gap-x-0.5 items-center">
          <BiBath />
          {bathrooms}
        </div>
        <div className="text-gray-400 flex gap-x-0.5 items-center">
          <BiArea />
          {surface}
        </div>
      </div>
      <div className="flex justify-between items-center pt-2 mx-1">
        <div className="text-gray-700 font-medium flex gap-x-2 items-center">
          <SlCalender />
          {listingDate}
        </div>
        <div className="text-purple-700 font-medium flex gap-x-0.25 items-center">
          <BsCurrencyRupee />
          {price}
        </div>
      </div>
    </div>
  );
};

export default House;
