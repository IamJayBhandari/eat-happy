// import { createContext,useState,useContext } from "react";

// const FoodContext = createContext()

// const FoodProvider = ({ children }) => {
//     const [Food,setFood] = useState(null)
//     return (
//         <FoodContext.Provider value={{ Food,setFood }}>
//         {
//             children
//         }
//         </FoodContext.Provider>

//     )
// }

// const useFoodContext = () => {
//     return useContext(FoodContext)
// }

// export { FoodProvider , useFoodContext }

// import React, { createContext, useState, useContext } from "react";

// const FoodContext = createContext();

// const FoodProvider = ({ children }) => {
//   const [food, setFood] = useState([]);
//   return (
//     <FoodContext.Provider value={{ food, setFood }}>
//       {children}
//     </FoodContext.Provider>
//   );
// };

// const useFoodContext = () => {
//   return useContext(FoodContext);
// };

// export { FoodProvider, useFoodContext };


//new
import React, { createContext, useState, useContext } from "react";

const FoodContext = createContext();

const FoodProvider = ({ children }) => {
  const [food, setFood] = useState([]);
  return (
    <FoodContext.Provider value={{ food, setFood }}>
      {children}
    </FoodContext.Provider>
  );
};

const useFoodContext = () => {
  return useContext(FoodContext);
};

export { FoodProvider, useFoodContext };
