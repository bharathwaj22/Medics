import React from 'react'
import { NavLink } from "react-router-dom";
import'../assests/css/enterprocesshead.css';
import Header from '../components/Header';

function Process_header() {
  return (
    
      <div className="row ">
      <div
      className="col-12  head-button1  d-flex justify-content-around  px-5 ">
      <NavLink to="/process-statistic" className="satist-btn">Statistics</NavLink>
      <NavLink to="/process-manuscript" className="satist-btn"> ManuScript</NavLink>
      <NavLink to="/process-thesis" className="satist-btn"> Thesis</NavLink>
      <NavLink to="/process-presentation" className="satist-btn"> Presentation</NavLink>
      <NavLink to="/process-enterprother" className="satist-btn"> Others</NavLink>
    </div>
        </div>


  )
}

export default Process_header