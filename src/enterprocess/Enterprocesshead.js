import React from 'react'
import { Link } from "react-router-dom";
import'../assests/css/enterprocesshead.css';

function Enterprocesshead() {
  return (
    
    //   <div className="row ">
    //   <div 
    //   className="col-6  head-button1  d-flex justify-content-around  px-5 ">
    //   <NavLink to="/statistics" className="satist-btn">Statistics</NavLink>
    //   <NavLink to="/manuscript" className="satist-btn"> ManuScript</NavLink>
    //   <NavLink to="/thesis" className="satist-btn"> Thesis</NavLink>
    //   <NavLink to="/presentation" className="satist-btn"> Presentation</NavLink>
    //   <NavLink to="/enterprother" className="satist-btn"> Others</NavLink>
    // </div>
    //     </div>
    <>
    <div className=" col-5 mt-3 pt-2 py-2   d-flex  justify-content-around align-items-center head-button ">
          
          <Link to="/enter_process_form" className="btn1   ">
            Statistics
          </Link>
          <Link to="/enter_process_form"className="btn1 mx-1 ">
            Manuscript
          </Link>
          <Link to="/enter_process_form" className="btn1  ">
            Thesis
          </Link>
          <Link to="/enter_process_form" className="btn1 mx-1 ">
            Presentation
          </Link>
          <Link to="/enter_process_form" className="btn1  ">
            Others
          </Link>
            
            
        </div>
    </>


  )
}

export default Enterprocesshead