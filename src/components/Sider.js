import { NavLink, Link } from "react-router-dom";
import "../assests/css/sider.css";

// import { RiDashboardLine } from "react-icons/ri";
import { MdEditNote } from "react-icons/md";
import { RiSoundModuleLine } from "react-icons/ri";
// import {
//   IoCalendarOutline,
//   IoSettingsOutline,
//   IoExitOutline,
// } from "react-icons/io5";
// import { GrGroup } from "react-icons/gr";
import { RiDashboardLine } from "react-icons/ri";
import {
  IoCalendarOutline,
  IoSettingsOutline,
  IoExitOutline,
} from "react-icons/io5";
import { GrGroup } from "react-icons/gr";

import { TiThMenu } from "react-icons/ti";
import { MdDashboardCustomize } from "react-icons/md";

import React, { useState } from "react";

function Sidebar() {
  // const [menu, setMenu] = React.useState(false);
  // const handleClick = () => {
  //   setMenu(!menu);
  // };
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen1, setIsOpen1] = useState(false);

  const toggledropdown = () => {
    setIsOpen1(!isOpen1);
  };

  return (
    <>
      <section className="position-fixed">
        <div className="text-center d- d-none d-lg-block mt-5  ">
          <NavLink to="/">
            <div className="">
              <RiDashboardLine className="ico-side" />
            </div>
          </NavLink>
          <NavLink to="/project-management">
            <div className=" mt-4">
              <MdDashboardCustomize className="ico-side" />
            </div>
          </NavLink>

          <NavLink to="/entry-process">
            <div className=" mt-4 ">
              <MdEditNote className="ico-side" />
            </div>
          </NavLink>
          <NavLink to="/modula-institution">
            <div className=" mt-4">
              <RiSoundModuleLine className="ico-side" />
            </div>
          </NavLink>
          <NavLink to="/people-details">
            <div className="mt-4">
              <GrGroup className="ico-side" />
            </div>
          </NavLink>
          <div className="position-relative side2-icon">
            <NavLink to="/settings">
              <div className="">
                <IoSettingsOutline className="ico-side" />
              </div>
            </NavLink>
            <NavLink to="/">
              <div className=" mt-5">
                <IoExitOutline className="ico-side" />
              </div>
            </NavLink>
          </div>
        </div>

        {/* lg */}
      </section>
      {/* <section>
      <div className=" d-lg-none  ">
        <div className="menu-icon" onClick={toggleSidebar}>
          <TiThMenu className="mobile-menu" />
        </div>

        <div className={`sidebar w-100  ${isOpen ? "visible" : "hidden"}`}>
          
          <NavLink to="/dashboard">
            <div className=" mt-4 text-center text-decoration-none ">
             dashboard
            </div>
          </NavLink>
          <NavLink to="/project-management">
            <div className="group-icon-menu mt-4 text-center">
              <MdDashboardCustomize className="ico" />
            </div>
          </NavLink>

          <NavLink to="/entry-process">
            <div className="group-icon-menu mt-4 text-center ">
              <MdEditNote className="ico" />
            </div>
          </NavLink>
          <NavLink to="/modula-institution">
            <div className="group-icon-menu mt-4 text-center">
              <RiSoundModuleLine className="ico" />
            </div>
          </NavLink>
          <NavLink to="/people-details">
            <div className="group-icon-menu mt-4 text-center">
              <GrGroup className="ico" />
            </div>
          </NavLink>
          <div className="position-relative side2-icon">
            <NavLink to="/settings">
              <div className="group-icon-menu text-center">
                <IoSettingsOutline className="ico" />
              </div>
            </NavLink>
            <NavLink to="/">
              <div className="group-icon-menu mt-5 text-center">
                <IoExitOutline className="ico" />
              </div>
            </NavLink>
            </div>
          </div>
        </div>
    </section> */}

      {/* <section>
        <div className="d-lg-none">
        
          <div className="menu-icon" onClick={toggleSidebar}>
            <TiThMenu className="mobile-menu" />
          </div>

             <div className={`sidebar  py-5 ${isOpen ? "visible" : "hidden"}`}>
            <nav>
              <NavLink to="/dashboard" className="menu-item mt-5">
                Dashboard
              </NavLink>
              <NavLink to="/project-management" className="menu-item mt-3">
                Project Management
              </NavLink>
              <div className="dropdown">
      <button className="dropbtn" onClick={toggledropdown}>
        Dropdown <i className="fa fa-caret-down"></i>
      </button>
      <div
        className={`dropdown-content ${isOpen1 ? 'show' : ''}`}
        style={{
          opacity: isOpen1 ? 1 : 0,
          transform: isOpen1 ? 'translateY(0)' : 'translateY(-10px)',
        }}
      >
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
              <NavLink to="/modula-institution" className="menu-item mt-3">
                Modular Institution
              </NavLink>
              <NavLink to="/people-details" className="menu-item mt-3">
                People Details
              </NavLink>
              <div className="menu-item-group">
                <NavLink to="/settings" className="menu-item">
                  Settings
                </NavLink>
                <NavLink to="/" className="menu-item logout">
                  Logout
                </NavLink>
              </div>
            </nav>
          </div>
        </div>
      </section> */}
      <section>
        <div className="d-lg-none">
          {/* Sidebar Toggle Button */}
          <div className="menu-icon" onClick={toggleSidebar}>
            <TiThMenu className="mobile-menu" />
          </div>

          {/* Sidebar */}
          <div className={`sidebar py-5 ${isOpen ? "visible" : "hidden"}`}>
            <nav>
              <NavLink to="/" className="menu-item mt-5">
                Dashboard
              </NavLink>
              <NavLink to="/project-management" className="menu-item mt-3">
                Project Management
              </NavLink>

             
              <div className="">
                <NavLink className="menu-item mt-3" onClick={toggledropdown}>
                   Entry Process 
                </NavLink>
                {/* <div
                  className={`dropdown-content ${isOpen1 ? "show" : ""}`}
                  
                >
                  <Link to="/entry-process" className="   ">
                    Entry Process
                  </Link>
                  {/* <Link to="/processstatus" className=" ">
                    Process Status
                  </Link>
                  <Link to="/paymentstatus" className="  ">
                    Payment Status
                  </Link>
                  <Link to="/pending" className=" ">
                    Pending
                  </Link> */}
                {/* </div> */} 
              </div>

              <NavLink to="/modula-institution" className="menu-item mt-3">
                Modular Institution
              </NavLink>
              <NavLink to="/people-details" className="menu-item mt-3">
                People Details
              </NavLink>
              <div className="menu-item-group">
                <NavLink to="/settings" className="menu-item">
                  Settings
                </NavLink>
                <NavLink to="/" className="menu-item logout">
                  Logout
                </NavLink>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sidebar;
