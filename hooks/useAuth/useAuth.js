import { useState, useContext, useCallback } from "react";
import {
  login as loginService,
  logout as logoutService,
} from "../../services/auth/authServices";
import AuthContext from "../../contexts/Auth/AuthContext";

const useAuth = () => {
  const {
    user,
    setUser,
    jwt,
    setJwt,
    isAuthenticated,
    setIsAuthenticated,
    showLogin,
    setShowLogin,
  } = useContext(AuthContext);

  const login = useCallback(
    ({ identifier, password, remember }) => {
      loginService({ identifier, password, remember })
        .then((res) => {
          setUser(res.user);
          setJwt(res.jwt);
          setIsAuthenticated(true);
          setShowLogin(false);
        })
        .catch((err) => {
          console.log("error on hook", err.message);
        });
    },
    [setJwt, setUser]
  );

  const logout = useCallback(() => {
    logoutService()
      .then(() => {
        setUser(null);
        setJwt(null);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setJwt, setUser]);

  return {
    user,
    login,
    logout,
    isAuthenticated,
  };
};

export default useAuth;
