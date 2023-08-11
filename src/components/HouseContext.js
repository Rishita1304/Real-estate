import React, { createContext, useEffect, useState } from 'react';
import {houseData} from '../data'

export const HouseContext = createContext();

const HouseContextProvider = ({children}) => {
  return <HouseContext.Provider value={console.log('hiiiii')}></HouseContext.Provider>
}

export default HouseContextProvider;