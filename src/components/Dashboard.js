// import React from "react";
// import "../assests/css/dashboard.css";
// import Sider from "./Sider";
// import Process1 from "./Process1";
// import { MdKeyboardArrowDown } from "react-icons/md";

// function Dashbaord() {
//   const Selected = document.querySelector(".selected");
//   const optionsContainer = document.querySelector(".options-container");
//   const optionList = document.querySelectorAll(".option");
//   const searchBox = document.querySelector(".search-box input");
//   Selected.addEventListener("click", () =>{
//     optionsContainer.classNameList.toggle("active");
//     searchBox.value= "";
//     FileList("");
//     if (optionsContainer.classNameList.contains("active")) {
//       searchBox.focus();
//     }
//   });
//   optionList.forEach((o) => {
//     o.addEventListener("click", () => {
//       Selected.innerHtml = o.querySelector("label").innerHTML;
//       optionsContainer.classNameList.remove("active");
//     });
//   });
//   searchBox.addEventListener("keyup", function (e) {
//     FileList(e.target.value);
//   });
//   const filterList = (searchTerm) => {
//     searchTerm = searchTerm.toLowerCase();
//     optionList.forEach((option) => {
//       let label =
//         option.firstElementChild.nextElementSibling.innerText.toLowerCase();
//       if (label.indexOf(searchTerm) != -1) {
//         option.style.display = "block";
//       } else {
//         option.style.display = "none";
//       }
//     });
//   };

//   return (
//     <div>
//       <div className="d-flex">
//         <Sider></Sider>
//         <h1>Dashboard</h1>
//         <div className="select-box">
//           <div className="option-container">
//             <div className="selected">Institute name</div>
//             <div className="search-box">
//               <input type="text" placeholder="search..." />
//             </div>
//             <div className="option">
//               <input type="radio" className="radio"></input>
//               <label>one</label>
//             </div>
//             <div className="option">
//               <input type="radio" className="radio"></input>
//               <label>one</label>
//             </div>
//             <div className="option">
//               <input type="radio" className="radio"></input>
//               <label>one</label>
//             </div>
//             <div className="option">
//               <input type="radio" className="radio"></input>
//               <label for="one">one</label>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashbaord;

import "../assests/css/dashboard.css";
import Sider from "./Sider";
import DatePicker from "react-datepicker";
import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";

function Dashboard() {
  return (
    <>
      <section className="main ">
        <div className="row mt-5 w-100 position-fixed">
          <div className="col-1 d-flex justify-content-center">
            <Sider />
          </div>
          <div className="col-11 wapper ">
            <h1>Dashbaord</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
