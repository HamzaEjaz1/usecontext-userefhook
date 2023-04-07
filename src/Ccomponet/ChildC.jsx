import React, { useContext, useRef, useState } from 'react'
import {data,data1} from './Main'
const ChildC = () => {
    const Name = useContext(data);
    const gender =useContext(data1);

    const [FirstName , setName] =useState("Hamza ")
const refElement = useRef("");
console.log(refElement);
    const rest = ()=>{
        setName("");
        refElement.current.focus;
    }
  return (

    <div>
        <p>Use Context Hook</p>
      <h1>Hi My Name is {Name} and My gender is {gender}</h1>
      <p>Use ref Hook</p>

      <input ref={refElement} type="text" value={FirstName} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={rest}>Reset</button>

    </div>
  )
}

export default ChildC
