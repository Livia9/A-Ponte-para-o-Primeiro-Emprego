import { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export function UserProvider({ children }){
  const [currentUser, setCurrentUser] = useState(null);
  const [userType, setUserType] = useState(null); 

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    const storedType = localStorage.getItem('userType');
    
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    if (storedType) {
      setUserType(storedType);
    }
  }, []);

  function login(userData, type) {
    setCurrentUser(userData);
    setUserType(type);
    localStorage.setItem('currentUser', JSON.stringify(userData));
    localStorage.setItem('userType', type);
  };

  function logout(){
    setCurrentUser(null);
    setUserType(null);
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userType');
  };

  return (
    <UserContext.Provider value={{ currentUser, userType, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);