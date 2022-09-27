import React from 'react';
import ConsultContext from './ConsultContext';

 const ConsultState=(props)=>{
    const state= {
        "name": "Ram Sharma",   
        "Course":"Bca"  
     }

  return (
    <ConsultContext.Provider value={state}>
        {props.childern}
    </ConsultContext.Provider>
  )

 }

export default ConsultState;
