/* eslint-disable react/prop-types */
import { useState, useContext, createContext } from "react";
import { toast } from "react-hot-toast";

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [isauthenticated, setisauthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const login = (token, user) => {
    setisauthenticated(true);
    localStorage.setItem("token", token);
    localStorage.setItem("user_email", user.Email);
    localStorage.setItem("user_name", user.Username);
    localStorage.setItem("user_id", user.id);
  };

  const logout = () => {
    setisauthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user_email");
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_id");
    toast.success("Logged out successfully", {
      duration: 3000,
    });
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ isauthenticated, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
