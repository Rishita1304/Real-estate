import React, { useContext, useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import {SlCalender} from 'react-icons/sl'
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const DateDropdown = () => {
    const {houses, startDate, setStartDate,startDates } = useContext(HouseContext);
    const [filteredProperties, setFilteredProperties] = useState([]);

    const handleStartDateChange = (event) => {
        const selectedStartDate = event.target.value;
        setStartDate(selectedStartDate);
        filterProperties(selectedStartDate);
      };
    
      const filterProperties = (start) => {
        const filtered = houses.filter(house => {
          return house.listingDate >= start;
        });
    
        setFilteredProperties(filtered);
      };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown">
      <Menu.Button onClick={()=>setIsOpen(!isOpen)} className="dropdown-btn w-full text-left">
        <SlCalender className="dropdown-icon-primary"/>
        <div>
          <div className="text-[15px] font-medium">{startDate}</div>
          <div className="text-[13px] text-gray-400">Select your place</div>
          </div>
          {
            isOpen? (
              <RiArrowUpSLine className="dropdown-icon-secondary"/>
            ) : (
              <RiArrowDownSLine className="dropdown-icon-secondary"/>
            )
          }
          
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {startDates.map((startDate, index) => {
          return <Menu.Item onClick={()=>setStartDate(startDate)} className='cursor-pointer hover:text-purple-700 transition' as='li' key={index}>{startDate}</Menu.Item>
        })}
      </Menu.Items>
    </Menu>
  );
};

export default DateDropdown;

