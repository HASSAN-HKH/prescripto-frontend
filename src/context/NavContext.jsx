import React, { createContext } from "react";
import { useState } from "react";

export const NavContext = createContext(null);

export const NavProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <NavContext.Provider value={{ open, setOpen, visible, setVisible }}>
      {children}
    </NavContext.Provider>
  );
};
