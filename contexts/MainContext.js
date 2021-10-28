import React from "react";

import { createContext, useState } from "react";
const MainContext = createContext();

const MainProvider = ({ children }) => {

  let [primaryNav, setPrimaryNav] = useState(true);
  let [siteObject, setSiteObject] = useState({});

  return (
    <MainContext.Provider
      value={{
        primaryNav,
        setPrimaryNav,
        siteObject,
        setSiteObject,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};


export { MainProvider, MainContext };
