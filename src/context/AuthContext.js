import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // console.log(localStorage.getItem("token"));
  const [user, setUser] = useState(localStorage.getItem("token"));

  const login = (userData) => {
    localStorage.setItem("token", userData);
    setUser(localStorage.getItem("token"));
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
