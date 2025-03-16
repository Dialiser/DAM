// AuthContext.js
import React, { createContext, useContext, useState, useMemo } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const updateAuthentication = (authenticated, userData = null) => {
    setIsAuthenticated(authenticated);
    setUser(userData);
  };

  const authValue = useMemo(
    () => ({ isAuthenticated, user, updateAuthentication }),
    [isAuthenticated, user]
  );

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
