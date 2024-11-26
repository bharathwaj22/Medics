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
import { Link } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { MdEditNote } from "react-icons/md";
import { RiSoundModuleLine } from "react-icons/ri";
import {
  IoCalendarOutline,
  IoSettingsOutline,
  IoExitOutline,
} from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { TiThMenu } from "react-icons/ti";
import React from "react";
import "../assests/css/sider.css";

function Sidebar() {
  const [menu, setMenu] = React.useState(false);
  const handleClick = () => {
    setMenu(!menu);
  };
  return (
    <div className=" ">
      <div className="text-center  d-none d-lg-block ">
        <Link to="/dashboard">
          <div className="group-icon">
            <RiDashboardLine className="ico" />
          </div>
        </Link>

        <Link to="/entry-process">
          <div className="group-icon ">
            <MdEditNote className="ico" />
          </div>
        </Link>
        <div className="group-icon">
          <RiSoundModuleLine  className="ico" />
        </div>
        <div className="group-icon">
          <GrGroup className="ico" />
        </div>
        <div className="position-relative side2-icon">
          <Link  to="/settings"><div className="group-icon">
            <IoSettingsOutline className="ico" />
          </div></Link>
          <Link to="/">
          <div className="group-icon">
            <IoExitOutline className="ico" />
          </div>
          </Link>
        </div>
      </div>
      <div className="  d-lg-none sider">
        <div className="header-menu">menu</div>

        <div className="group-icon ">
          <RiDashboardLine className="ico" />
        </div>
        <div className="group-icon">
          <RiDashboardLine className="ico" />
        </div>
        <div className="group-icon">
          <IoCalendarOutline className="ico" />
        </div>
        <div className="group-icon">
          <GrGroup className="ico " />
        </div>
        <div className="position-relative side2-icon">
          <div className="group-icon ">
            <IoSettingsOutline className="ico" />
          </div>
          <div className="group-icon ">
            <IoExitOutline className="ico" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
