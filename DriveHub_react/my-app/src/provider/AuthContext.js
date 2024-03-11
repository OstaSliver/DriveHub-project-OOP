import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext({
  auth: false,
  setAuth: () => {},
  handleLogout: () => {},
  role: "customer",
  setRole: () => {},
});

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    // Check local storage for auth state on component mount
    return JSON.parse(localStorage.getItem('auth')) || false;
  });
  const [role, setRole] = useState(() => {
    // Check local storage for role on component mount
    return localStorage.getItem('role') || 'customer';
  });

  const handleLogout = () => {
    setRole('customer');
    setAuth(false);
  };

  useEffect(() => {
    // Save auth state and role to local storage whenever they change
    localStorage.setItem('auth', JSON.stringify(auth));
    localStorage.setItem('role', role);
  }, [auth, role]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, handleLogout, role, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
