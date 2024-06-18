import React, { createContext, useContext, useState } from 'react';


export const AuthContext = createContext();
export const useAuth = () => {
    return useContext(AuthContext);
  };
export const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null); 
   const login = (userData) => {
      setUser(userData); // Définit l'utilisateur après la connexion réussie
   };

   const logout = () => {
      setUser(null); 
   };
   const authContextValue = {
      user,
      login,
      logout,
   };

   return (
      <AuthContext.Provider value={authContextValue}>
         {children}
      </AuthContext.Provider>
   );
};
