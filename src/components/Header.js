import "../assests/css/header.css";
import Sider from "../components/Sider.js";

import { IoSearch } from "react-icons/io5";
import { TiMessage } from "react-icons/ti";
import { FaRegBell } from "react-icons/fa";
import Profile from "..//assests/images/profile.png";
import { TiThMenu } from "react-icons/ti";

import { NavLink, Link } from "react-router-dom";
import Vector from "../assests/images/Vector.svg";
import { useState } from "react";

function Header() {
  return (
    <section className="header">

      <div className="row w-100 header-hide  d-none d-xl-flex  ">
        
        <div className=" col-5 mt-3 pt-2 py-2   d-flex  justify-content-around align-items-center head-button ">
          
          <NavLink to="/entry-process" className="btn1   ">
            Entry Process
          </NavLink>
          <NavLink to="/processstatus" className="btn1 mx-1 ">
            Process Status
          </NavLink>
          <NavLink to="/paymentstatus" className="btn1  ">
            Payment Status
          </NavLink>
          <NavLink to="/pending" className="btn1 mx-1 ">
            Pending
          </NavLink>
            
        </div>

        <div className="col-2 d-flex justify-content-center   px-0 ">
          <img className="img-fluid header-logo   " src={Vector} alt="img" />
        </div>

        <div className="col-5   ">
          <div className=" d-flex justify-content-between header-admin mt-1 ">
            <div className="d-flex pt-2  ">
              <div className="group-icon text-center mx-2 pt-2  ">
                <IoSearch className="head-icon" />
              </div>
              <div className="group-icon text-center mx-2 pt-2">
                <TiMessage className="head-icon" />
              </div>
              <div className="group-icon text-center mx-2 pt-2">
                <FaRegBell className="head-icon" />
              </div>
            </div>
            <div className=" d-flex   justify-content-between mt-1  pro-fi">
              <div className="pro-main mx-2 text-center  ">
                <div className="pro-name ">
                  <p>Rabina </p>
                </div>
                <div className="pro-admin">
                  <Link to="/admin-profile" className="admin-create">
                    Admin
                  </Link>
                </div>
              </div>

              <img className=" pro-img" src={Profile} alt="img" />
            </div>
          </div>
        </div>
      </div>
      <div className="row w-100 header-hide   d-xl-none  d-none d-lg-flex  ">
        
        <div className=" col-6 mt-3 pt-2 py-2   d-flex  justify-content-around align-items-center head-button ">
          <NavLink to="/entry-process" className="btn1   ">
            Entry Process
          </NavLink>
          <NavLink to="/processstatus" className="btn1  ">
            Process Status
          </NavLink>
          <NavLink to="/paymentstatus" className="btn1  ">
            Payment Status
          </NavLink>
          <NavLink to="/pending" className="btn1  ">
            Pending
          </NavLink>
        </div>

        <div className="col-1 d-flex justify-content-center  px-0 ">
          <img className="img-fluid header-logo w-75    " src={Vector} alt="img" />
        </div>

        
          <div className="col-5  d-flex justify-content-between header-admin mt-1 ">
            <div className="d-flex pt-2  ">
              <div className="group-icon text-center mx-2 pt-2  ">
                <IoSearch className="head-icon" />
              </div>
              <div className="group-icon text-center mx-2 pt-2">
                <TiMessage className="head-icon" />
              </div>
              <div className="group-icon text-center mx-2 pt-2">
                <FaRegBell className="head-icon" />
              </div>
            </div>
            <div className=" d-flex   justify-content-between mt-1  pro-fi">
              <div className="pro-main mx-2 text-center  ">
                <div className="pro-name ">
                  <p>Rabina </p>
                </div>
                <div className="pro-admin">
                  <Link to="/admin-profile" className="admin-create">
                    Admin
                  </Link>
                </div>
              </div>

              <img className=" pro-img" src={Profile} alt="img" />
            </div>
          </div>
        
      </div>

      <div className="col-12 w-100  mt-0 d-lg-none side-head1 ">
        <div className="w-100 d-flex justify-content-between ">
         

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
    </section>
  );
}

export default Header;
