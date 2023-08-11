import React, { useContext } from 'react';
import { HouseContext } from './HouseContext';
import House from '../components/House'

const HouseList = () => {
  const {houses, loading} = useContext(HouseContext);

  return <section className='mb-20'>
    <div className='container mx-auto'>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 lg:gap-14'>
        {houses.map((house)=>{
          return (
            <House house={house}/>
          )
        })}
      </div>
    </div>
  </section>;
};

export default HouseList;
