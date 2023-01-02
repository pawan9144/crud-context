import React, { createContext, useState } from "react";

const Context = createContext();

export function ContextProvider({ children }) {
  const [val, setVal] = useState("");

  return (
    <Context.Provider value={{ val, setVal }}>{children}</Context.Provider>
  );
}

export default Context;
