import "../assests/css/headerenter.css";
// import { IoIosArrowBack } from "react-icons/io";
import Vector from "../assests/images/Vector.svg";
import { IoSearch } from "react-icons/io5";
import { TiMessage } from "react-icons/ti";
import { FaRegBell } from "react-icons/fa";
import Profile from "..//assests/images/profile.png";
// import { TiThMenu } from "react-icons/ti";
// import { useState } from "react";
import { NavLink } from "react-router-dom";

function Headerenter() {
  return (
    
      <div className="row   header-box   ">
        <div className="col-6  d-none d-xl-block  d-flex  px-5  ">
          <div className=" head-bot1  d-flex justify-content-around  ">
            <NavLink className=" btn1 " to="/entry-process">
              Entry Process
            </NavLink>

            <NavLink className="btn1" to="/processstatus">
              
              Process Status
            </NavLink>
            
            <NavLink className="btn1" to="/paymentstatus"> Payment Status</NavLink>
            <NavLink className="btn1 px-4" to="/pending"> Pending</NavLink>
          </div>
        </div>

        <div className="col-3 mt-3  px-0 ">
          <img className="img-fluid header-logo mx-4  " src={Vector} alt="img" />
        </div>
        <div className="col-3  mt-2  px-2  d-none d-xl-block  ">
          <div className=" d-flex justify-content-around   side-headenter">
            <div className="d-flex    ">
              <div className="group-icon text-center mx-2 ">
                <IoSearch className="head-icon" />
              </div>
              <div className="group-icon text-center mx-2">
                <TiMessage className="head-icon" />
              </div>
              <div className="group-icon text-center mx-2">
                <FaRegBell className="head-icon" />
              </div>
              <div className="px-4">
                <img className=" prolo-img px-3" src={Profile} alt="img" />
              </div>
            </div>
            
          </div>
        </div>
      

      <div className="col-12 w-100   d-xl-none ">
        <div className="w-100 d-flex justify-content-between side-head1">
          <div>
            <p className="title">Entry Process</p>
          </div>

          <div className="d-flex mt-2 ">
            <div className=" text-center  ">
              <IoSearch className="head-icon1" />
            </div>
            <div className=" text-center">
              <TiMessage className="head-icon1" />
            </div>
            <div className=" text-center">
              <FaRegBell className="head-icon1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Headerenter;
