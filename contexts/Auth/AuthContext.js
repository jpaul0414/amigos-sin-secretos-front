import React, { useState } from "react";
import Cookies from "js-cookie";

const AuthContext = React.createContext({});

export const AuthContextProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(() => {
    const cookie = Cookies.get("session");
    return cookie ? JSON.parse(cookie).user : null;
  });

  const [jwt, setJwt] = useState(() => {
    const cookie = Cookies.get("session");
    return cookie ? JSON.parse(cookie).jwt : null;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => Boolean(jwt));

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        showLogin,
        setShowLogin,
        isAuthenticated,
        setIsAuthenticated,
        jwt,
        setJwt,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
