import React, { useState, createContext, useContext } from "react";
const myContext = createContext({});
export const ContextProvider = ({ children }) => {
  let [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <div>
      <myContext.Provider value={{ count, increment, decrement, resetCount }}>
        {children}
      </myContext.Provider>
    </div>
  );
};
export const useMyContext = () => {
  return useContext(myContext);
};
