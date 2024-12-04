// import React from "react";
// import "../assests/css/sider.css";
// import { IoIosArrowBack } from "react-icons/io";
// import { RiDashboardLine } from "react-icons/ri";
// import { IoCalendarOutline } from "react-icons/io5";
// import { GrGroup } from "react-icons/gr";
// import { IoSettingsOutline } from "react-icons/io5";
// import { IoExitOutline } from "react-icons/io5";
// import { TiThMenu } from "react-icons/ti";
// import { MdEditNote } from "react-icons/md";
// import { NavLink,Link } from "react-router-dom";

// function Sider() {
//   const [menu, setMenu] = React.useState(false);
//   const handleClick = () => {
//     setMenu(!menu);
//   };
//   return (
//     <div className=" sider">
//       <div className="text-center mt-4 mx-4 d-none d-xl-block ">
//        <NavLink to='/dashboard'><div className="group-icon ">
//           <RiDashboardLine className="ico" />
//         </div></NavLink>
//         <NavLink to='/process1'><div className="group-icon">
//         <MdEditNote  className="ico" /></div></NavLink>

//         <div className="group-icon">
//           <IoCalendarOutline className="ico" />
//         </div>
//         <div className="group-icon">
//           <GrGroup className="ico " />
//         </div>
//         <div className="position-relative side2-icon ">
//           <div className="group-icon ">
//             <IoSettingsOutline className="ico" />
//           </div>
//           <div className="group-icon ">
//             <IoExitOutline className="ico" />
//           </div>
//         </div>
//       </div>
//       </div>

// <div className=" d-none d-xl-none">
// <button onClick={handleClick}  className="menu-butn"><TiThMenu className="menu-icon"></TiThMenu></button>

// <div className={`text-center mt-5   d-xl-none sidebar2 ${menu?'d-block':'d-none'}`}>

// <div className="group-icon ">
//   <RiDashboardLine className="ico" />
// </div>
// <div className="group-icon">
//   <RiDashboardLine className="ico" />
// </div>
// <div className="group-icon">
//   <IoCalendarOutline className="ico" />
// </div>
// <div className="group-icon">
//   <GrGroup className="ico " />
// </div>
// <div className="position-relative side2-icon">
//   <div className="group-icon ">
//     <IoSettingsOutline className="ico" />
//   </div>
//   <div className="group-icon ">
//     <IoExitOutline className="ico" />
//   </div>
// </div>

// </div>

//   );
// }

// export default Sider;
import { NavLink,Link } from "react-router-dom";
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
import { RiDashboardLine } from 'react-icons/ri';
import { IoCalendarOutline, IoSettingsOutline, IoExitOutline } from 'react-icons/io5';
import { GrGroup } from 'react-icons/gr';
import { TiThMenu } from "react-icons/ti";
import { MdDashboardCustomize } from "react-icons/md";

import React, { useState } from 'react';;

function Sidebar() {
  
  // const [menu, setMenu] = React.useState(false);
  // const handleClick = () => {
  //   setMenu(!menu);
  // };
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="">
      <div className="text-center d- d-none d-lg-block mt-5  ">
        <NavLink to="/dashboard">
          <div className="group-icon">
            <RiDashboardLine className="ico" />
          </div>
        </NavLink>
        <NavLink to="/project-management">
          <div className="group-icon mt-4">
            <MdDashboardCustomize  className="ico" />
          </div>
        </NavLink>

        <NavLink to="/entry-process">
          <div className="group-icon mt-4 ">
            <MdEditNote className="ico" />
          </div>
        </NavLink>
        <NavLink to="/modula-institution">
        <div className="group-icon mt-4">
          <RiSoundModuleLine  className="ico" />
        </div>
        </NavLink >
        <NavLink to="/people-details">
        <div className="group-icon mt-4">
          <GrGroup className="ico" />
        </div>
        </NavLink>
        <div className="position-relative side2-icon">
          <NavLink  to="/settings"><div className="group-icon">
            <IoSettingsOutline className="ico" />
          </div></NavLink>
          <NavLink to="/">
          <div className="group-icon mt-5">
            <IoExitOutline className="ico" />
          </div>
          </NavLink>
        </div>
      </div>

      {/* lg */}
      {/* <div className="  d-lg-none ">
        <div className="header-menu">menu</div>

        <div className="groupsider-icon mt-4 ">
          <RiDashboardLine className="ico" />
        </div>
        <div className="groupsider-icon mt-4">
          <RiDashboardLine className="ico" />
        </div>
        <div className="groupsider-icon">
          <IoCalendarOutline className="ico" />
        </div>
        <div className="groupsider-icon">
          <GrGroup className="ico " />
        </div>
        <div className="position-relative side2-icon">
          <div className="groupsider-icon ">
            <IoSettingsOutline className="ico" />
          </div>
          <div className="groupsider-icon ">
            <IoExitOutline className="ico" />
          </div>
        </div>
      </div> */}
       
       
      
 
    </section>
  );
}

export default Sidebar;
