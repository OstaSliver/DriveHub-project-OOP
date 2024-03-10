import React, { createContext, useState , useContext } from 'react';

const AuthContext = createContext({
  auth: false,
  setAuth: () => {},
  handleLogout: () => {},
  role: "customer",
  setRole: () => {},
});
const useAuth = () => useContext(AuthContext);
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [role, setRole] = useState("customer");
  const handleLogout = () => {
    setRole('customer')
    setAuth(false);
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth , handleLogout , role , setRole  }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthProvider , useAuth}
