import React, { createContext, useEffect, useState } from "react";
import { GetLocalStorage, SetLocalStorage } from "../utils/LocalStorage";

export const authContext = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const { employees, admin } = GetLocalStorage();
    setUser({ employees, admin });
  }, []);

  return (
    <>
      <authContext.Provider value={user}>{children}</authContext.Provider>
    </>
  );
};

export default AuthContext;
