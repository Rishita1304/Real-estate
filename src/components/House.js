import React from 'react';
import {BiBed, BiBath, BiArea} from 'react-icons/bi';
import { SlCalender } from 'react-icons/sl';
import {BsCurrencyRupee} from 'react-icons/bs'

const House = ({house}) => {
  const {image, type,country, address, bedrooms, bathrooms, surface, listingDate,price,} = house;
  return <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] mx-auto cursor-pointer w-full max-w-[352px] hover:shadow-2xl transition'>
    <img className='mb-6' src={image} alt=""/>
    <div className='mb-3 flex gap-x-4 text-sm'>
      <div className='bg-green-500 py-1 rounded-full px-3 text-white'>{type}</div>
      <div className='bg-purple-500 py-1 rounded-full px-3 text-white'>{country}</div>
    </div>
      <div className='text-gray-600 mb-2 font-medium flex gap-x-2 items-center'><SlCalender/>{listingDate}</div>
      <div className='text-gray-900 mb-2 font-medium flex gap-x-2 items-center'>{address}</div>
      <div className='flex justify-between mr-2 mb-2'>
        <div className='text-gray-400 flex gap-x-0.5 items-center'><BiBed/>{bedrooms}</div>
        <div className='text-gray-400 flex gap-x-0.5 items-center'><BiBath/>{bathrooms}</div>
        <div className='text-gray-400 flex gap-x-0.5 items-center'><BiArea/>{surface}</div>
      </div>
      <div className='text-purple-700 font-medium flex gap-x-0.25 items-center'><BsCurrencyRupee/>{price}</div>
  </div>;
};

export default House;
