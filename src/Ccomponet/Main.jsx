import React, { createContext } from 'react'
import ChildA from './ChildA';
const data =createContext();
const data1= createContext();
const Main = () => {

  const Name = "Hamza Ejaz";
  const gender ="Male";

  return (
 <>
    
 <data.Provider value={Name}>
<data1.Provider value={gender}>
      <ChildA/>
</data1.Provider>
 </data.Provider>
  </>  
  )
}

export default Main;
export {data ,data1};