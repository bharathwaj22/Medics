import React from 'react'
import { NavLink } from "react-router-dom";

function Modula_header() {
  return (
    <>
    <div className=" mt-1  p-2 px-2   d-flex  justify-content-around align-items-center head-button ">
          <NavLink to="/modula-institution" className="btn1   ">
            INSTITUTION
          </NavLink>
          <NavLink to="/modula-department" className="btn1 mx-1 ">
            DEPARTMENT
          </NavLink>
          <NavLink to="/modula-profession" className="btn1  ">
            PROFESSION
          </NavLink>
          
        </div>
    </>
  )
}

export default Modula_header