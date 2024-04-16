import React, { createContext, useState, useContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [sharedData, setSharedData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  return (
    <DataContext.Provider
      value={{ sharedData, setSharedData, errorMessage, setErrorMessage }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
