import React, { useState } from "react";

export const AuthContext = React.createContext({});

const AuthContextProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <AuthContext.Provider value={{ showLogin, setShowLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
