import React, { createContext, useEffect, useState } from "react";
import { housesData } from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price (any)");
  const [startDate, setStartDate] = useState("Date (any)");
  const [startDates, setStartDates] = useState([]);
  const [loading, setLoading] = useState(false);

  const isDefault = (str) => str.split(' ').includes('(any)');

  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];
    setCountries(uniqueCountries);
  }, []);

  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });
    const uniqueProperty = ["Property (any)", ...new Set(allProperties)];
    setProperties(uniqueProperty);
  }, []);

  useEffect(() => {
    const allDates = houses.map((house) => {
      return house.listingDate;
    });
    const uniqueDate = ["Date (any)", ...new Set(allDates)];
    setStartDates(uniqueDate);
  }, []);

  const onHandleClick = (name) => {
    setLoading(true);

    const newHouses = housesData.filter((house) => house.name === name);

    setTimeout(() => {
      setHouses(newHouses);
      setLoading(false);
      setCountry('Location (any)');
      setProperty('Property (any)');
      setPrice('Price (any)');
      setStartDate('Date (any)');
    }, 1000);
  };

  const handleClick = () => {
    setLoading(true);

    const minPrice = parseInt(price.split(' ')[0]);
    const maxPrice = parseInt(price.split(' ')[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      // Apply filters based on different conditions
      return (
        (isDefault(country) || house.country === country) &&
        (isDefault(property) || house.type === property) &&
        (isDefault(startDate) || house.listingDate === startDate) &&
        (isDefault(price) || (housePrice >= minPrice && housePrice <= maxPrice))
      );
    });

    setTimeout(() => {
      setHouses(newHouses);
      setLoading(false);
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        houses,
        onHandleClick,
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        startDate,
        setStartDate,
        startDates,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
