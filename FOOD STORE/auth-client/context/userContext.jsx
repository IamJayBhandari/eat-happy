import { createContext,useState,useContext } from "react";

const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [user,setUser] = useState(null)
    return (
        <UserContext.Provider value={{ user,setUser }}>
        {
            children
        }
        </UserContext.Provider>

    )
}

const useUserContext = () => {
    return useContext(UserContext)
}

export { UserProvider , useUserContext }
// import React, { createContext, useState, useContext } from "react";

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUserContext = () => {
//   return useContext(UserContext);
// };

