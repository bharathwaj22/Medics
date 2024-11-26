import "../assests/css/header.css";
import Sider from "../components/Sider.js";
// import { IoIosArrowBack } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { TiMessage } from "react-icons/ti";
import { FaRegBell } from "react-icons/fa";
import Profile from "..//assests/images/profile.png";
import { TiThMenu } from "react-icons/ti";
// import { useState } from "react";
import { NavLink ,Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const[menu ,SetMenu]=useState(false);
  const handleClick = () => {
    SetMenu(!menu);
  };
  return (
    <div>
      
      <div className="row mt-3 w-100   ">
        <div className="col-6   d-none d-lg-block  d-flex  header-probtn1  ">
          <div className=" head-button  d-flex justify-content-around    ">
           <NavLink  className=" btn1 "to='/entry-process'>
              Entry Process
            </NavLink>

            <NavLink className="btn1 " to="/processstatus">Process Status</NavLink>
            <NavLink className="btn1 " to="/paymentstatus"> Payment Status</NavLink>
            <NavLink className="btn1  px-4" to="/pending"> Pending</NavLink>
            
          </div>
        </div>
       

        
        <div className="col-6   d-none d-lg-block">
          <div className=" d-flex justify-content-between side-head">
            <div className="d-flex mt-2 ">
              <div className="group-icon text-center mx-2 ">
                <IoSearch className="head-icon" />
              </div>
              <div className="group-icon text-center mx-2">
                <TiMessage className="head-icon" />
              </div>
              <div className="group-icon text-center mx-2">
                <FaRegBell className="head-icon" />
              </div>
            </div>
            <div className=" d-flex   justify-content-between  pro-fi">
              <div className="pro-main mx-2 text-center ">
                <div className="pro-name ">
                  <p>Rabina </p>
                </div>
                <div className="pro-admin">
                  <p>Admin</p>
                </div>
              </div>

              <img className=" pro-img" src={Profile} alt="img" />
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 w-100  mt-0 d-lg-none ">
        <div className="w-100 d-flex justify-content-between side-head1">
         
          
       
        
          <div>
           
           <p className="title">Entry Process</p>
         </div>
          
          
          
          

          <div className="d-flex mt-2 mx-4 ">
            <div className=" text-center px-2  ">
              <IoSearch className="head-icon1" />
            </div>
            <div className=" text-center px-2">
              <TiMessage className="head-icon1" />
            </div>
            <div className=" text-center px-2">
              <FaRegBell className="head-icon1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
