import React from "react";
import { get, post, update, removeall } from "../api";

export const APIContext = React.createContext({});

export const APIProvider = ({ children }) => {
  return (
    <APIContext.Provider value={{ api: { get, post, update, removeall } }}>
      {children}
    </APIContext.Provider>
  );
};
