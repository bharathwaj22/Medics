// import React from "react";
// import "../assests/css/modula.css";
// import Sider from "../components/Sider";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import Header from "../components/Header";
// import { TfiPencilAlt } from "react-icons/tfi";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import Modula_header from "./Modula_header";
// import { IoMdAdd } from "react-icons/io";
// import { VscGitStashPop } from "react-icons/vsc";
// import DataTable from 'datatables.net-react';
// import DT from 'datatables.net-dt';

// import 'datatables.net-select-dt';
// import 'datatables.net-responsive-dt';

// DataTable.use(DT);

// function Modula_Profession() {
//   // const [data, setData] = useState([]);
//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         "https://dummyjson.com/c/15fb-d155-40a6-a49e"
//       );
//       setData(response.data);

//       console.log(response.data);
//     } catch (error) {
//       console.error("error fetching data", error);
//     }
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   const [isReadOnly, setIsReadOnly] = React.useState(true);
//   const [isOpen, setIsOpen] = useState(false);

//   const openPopup = () => setIsOpen(true);
//   const closePopup = () => setIsOpen(false);

//   const [isOpenadd, setIsOpenadd] = useState(false);

//   const openPopupadd = () => setIsOpenadd(true);
//   const closePopupadd = () => setIsOpenadd(false);
//   // State to store validation errors
//   const [errors, setErrors] = useState({});

//   // Handle input changes
//   const handleChangepending = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const [formData, setFormData] = useState({
//     name: "",

//     status: "",
//   });
//   // Validate form before submission
//   const validateForm = () => {
//     let formErrors = {};

//     if (!formData.name) formErrors.name = "name is required";
//     if (!formData.status) formErrors.status = "status is required";

//     setErrors(formErrors);
//     return Object.keys(formErrors).length === 0;
//   };

//   // Handle form submission
//   const handleSubmitadd = (e) => {
//     e.preventDefault();

//     // If form is valid, process the data
//     if (validateForm()) {
//       console.log("Form data submitted:", formData);
//     }
//   };

//   const columns = [
//     { title: 'Name', data: 'name' },
//     { title: 'Position', data: 'position' },
//     { title: 'Office', data: 'office' },
//     { title: 'Extn.', data: 'extn' },
//     { title: 'Start date', data: 'start_date' },
//     { title: 'Salary', data: 'salary' },
//   ];

//   const data = [
//     { name: 'Jennifer Acosta', position: 'Junior Javascript Developer', office: 'Edinburgh', extn: '3431', start_date: '2013/02/01', salary: '$75,650' },
//     { name: 'Justin Cooper', position: 'Javascript Developer', office: 'London', extn: '8836', start_date: '2012/11/27', salary: '$91,000' },
//     { name: 'Luke Jacobs', position: 'Support Engineer', office: 'San Francisco', extn: '6755', start_date: '2011/07/09', salary: '$92,575' },
//     { name: 'Jennifer Acosta', position: 'Junior Javascript Developer', office: 'Edinburgh', extn: '3431', start_date: '2013/02/01', salary: '$75,650' },
//     { name: 'Justin Cooper', position: 'Javascript Developer', office: 'London', extn: '8836', start_date: '2012/11/27', salary: '$91,000' },
//     { name: 'Luke Jacobs', position: 'Support Engineer', office: 'San Francisco', extn: '6755', start_date: '2011/07/09', salary: '$92,575' },
//     { name: 'Jennifer Acosta', position: 'Junior Javascript Developer', office: 'Edinburgh', extn: '3431', start_date: '2013/02/01', salary: '$75,650' },
//     { name: 'Justin Cooper', position: 'Javascript Developer', office: 'London', extn: '8836', start_date: '2012/11/27', salary: '$91,000' },
//     { name: 'Luke Jacobs', position: 'Support Engineer', office: 'San Francisco', extn: '6755', start_date: '2011/07/09', salary: '$92,575' },
//     { name: 'Jennifer Acosta', position: 'Junior Javascript Developer', office: 'Edinburgh', extn: '3431', start_date: '2013/02/01', salary: '$75,650' },
//     { name: 'Justin Cooper', position: 'Javascript Developer', office: 'London', extn: '8836', start_date: '2012/11/27', salary: '$91,000' },
//     { name: 'Luke Jacobs', position: 'Support Engineer', office: 'San Francisco', extn: '6755', start_date: '2011/07/09', salary: '$92,575' },

//     { name: 'Jennifer Acosta', position: 'Junior Javascript Developer', office: 'Edinburgh', extn: '3431', start_date: '2013/02/01', salary: '$75,650' },
//     { name: 'Justin Cooper', position: 'Javascript Developer', office: 'London', extn: '8836', start_date: '2012/11/27', salary: '$91,000' },
//     { name: 'Luke Jacobs', position: 'Support Engineer', office: 'San Francisco', extn: '6755', start_date: '2011/07/09', salary: '$92,575' },{ name: 'Jennifer Acosta', position: 'Junior Javascript Developer', office: 'Edinburgh', extn: '3431', start_date: '2013/02/01', salary: '$75,650' },
//     { name: 'Justin Cooper', position: 'Javascript Developer', office: 'London', extn: '8836', start_date: '2012/11/27', salary: '$91,000' },
//     { name: 'Luke Jacobs', position: 'Support Engineer', office: 'San Francisco', extn: '6755', start_date: '2011/07/09', salary: '$92,575' },

//     { name: 'Jennifer Acosta', position: 'Junior Javascript Developer', office: 'Edinburgh', extn: '3431', start_date: '2013/02/01', salary: '$75,650' },
//     { name: 'Justin Cooper', position: 'Javascript Developer', office: 'London', extn: '8836', start_date: '2012/11/27', salary: '$91,000' },
//     { name: 'Luke Jacobs', position: 'Support Engineer', office: 'San Francisco', extn: '6755', start_date: '2011/07/09', salary: '$92,575' },{ name: 'Jennifer Acosta', position: 'Junior Javascript Developer', office: 'Edinburgh', extn: '3431', start_date: '2013/02/01', salary: '$75,650' },
//     { name: 'Justin Cooper', position: 'Javascript Developer', office: 'London', extn: '8836', start_date: '2012/11/27', salary: '$91,000' },
//     { name: 'Luke Jacobs', position: 'Support Engineer', office: 'San Francisco', extn: '6755', start_date: '2011/07/09', salary: '$92,575' },
//     { name: 'Jennifer Acosta', position: 'Junior Javascript Developer', office: 'Edinburgh', extn: '3431', start_date: '2013/02/01', salary: '$75,650' },
//     { name: 'Justin Cooper', position: 'Javascript Developer', office: 'London', extn: '8836', start_date: '2012/11/27', salary: '$91,000' },
//     { name: 'Luke Jacobs', position: 'Support Engineer', office: 'San Francisco', extn: '6755', start_date: '2011/07/09', salary: '$92,575' },

//   ];

//   return (
//     <>
//       <section className="main ">
//         <div className="row mt-4 w-100">
//           <div className="col-1 d-flex   justify-content-center">
//             <Sider />
//           </div>
//           <div className="col-11">
//             <div className="col-12">
//               <Header></Header>
//             </div>
//             <div className="col-12 wapper w-100 mt-3 pt-5 py-5 ">
//               <div className="col-12 d-flex justify-content-center w-100">
//                 <Modula_header></Modula_header>
//               </div>
//               <div className="col text-center mt-3 ">
//                 <div className=" d-flex justify-content-center    ">
//                   <div className="add-icon">
//                     <IoMdAdd onClick={openPopupadd} className="add1-icon" />
//                   </div>
//                   {isOpenadd && (
//                     <div className="popup-container">
//                       <div className="popup-add">
//                         <div className="popup-content-add">
//                           <span className="close" onClick={closePopupadd}>
//                             &times;
//                           </span>

//                           <div className="popup-content1 px-5 ">
//                             {/* <form onSubmit={handleSubmitadd}>
//                               <div className="row w-100 mt-2 ">
//                                 <div className="col-12  float-start pt-5 ">
//                                   <h5 className="statis-name mx-2">Name</h5>
//                                   <input
//                                     type="text"
//                                     className={`client-info mx-3 ${
//                                       errors.name ? "error" : ""
//                                     }`}
//                                     name="name"
//                                     value={formData.name}
//                                     onChange={handleChangepending}
//                                   />
//                                 </div>

//                                 <div className="col float-start pt-5 ">
//                                   <h5 className="statis-name mx-3">Status</h5>
//                                   <select
//                                     className={`mx-3 client-info ${
//                                       errors.status ? "error" : ""
//                                     }`}
//                                     name="status"
//                                     value={formData.status}
//                                     onChange={handleChangepending}
//                                   >
//                                     <option value="" disabled>
//                                       Status
//                                     </option>
//                                     <option value="1">Active</option>
//                                     <option value="2">Inactive</option>
//                                   </select>
//                                 </div>
//                               </div>

//                               <div className="col-md-12 d-flex justify-content-center mt-2  px-5 py-5 ">
//                                 <button type="submit" className="save-form ">
//                                   Save
//                                 </button>
//                               </div>
//                             </form> */}
//                             <form onSubmit={handleSubmitadd}>
//                               <div className="row w-100 mt-2 ">
//                                 <div className="col-12  float-start p-3  ">
//                                   <label className="form-label">Name</label>
//                                   <input
//                                     type="text"
//                                     className={`form-control ${
//                                       errors.name ? "error" : ""
//                                     }`}
//                                     name="name"
//                                     value={formData.name}
//                                     onChange={handleChangepending}
//                                   />
//                                   {errors.name && (
//                                     <span className="error">{errors.name}</span>
//                                   )}
//                                 </div>

//                                 <div className="col float-start  ">
//                                   <label className="form-label ">Status</label>
//                                   <select
//                                     className={` form-control ${
//                                       errors.status ? "error" : ""
//                                     }`}
//                                     name="status"
//                                     value={formData.status}
//                                     onChange={handleChangepending}
//                                   >
//                                     <option value="" disabled>
//                                       Status
//                                     </option>
//                                     <option value="1">Active</option>
//                                     <option value="2">Inactive</option>
//                                   </select>
//                                 </div>
//                               </div>

//                               <div className="col-md-12 d-flex justify-content-center   px-5 py-5 ">
//                                 <button type="submit" className="save-form ">
//                                   Save
//                                 </button>
//                               </div>
//                             </form>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                   <div className="add-icon">
//                     <VscGitStashPop className="exit-icon" />
//                   </div>
//                 </div>
//               </div>
//               <DataTable
//       data={data}
//       columns={columns}
//       className="display"
//       options={{
//         responsive: true,
//         select: true,
        
//       }}
//     />

//                           <td className="d-flex justify-content-center ">
//                             <div className="d-flex justify-content-around modula-main mt-1  ">
//                               <div
//                                 className="modula-icon-edit"
//                                 onClick={openPopup}
//                               >
//                                 <TfiPencilAlt />
//                               </div>
//                               {isOpen && (
//                                 <div className="popup-container">
//                                   <div className="popup">
//                                     <div className="popup-content">
//                                       <span
//                                         className="close"
//                                         onClick={closePopup}
//                                       >
//                                         &times;
//                                       </span>

//                                       <div className="popup-content1 px-5 ">
//                                       <form onSubmit={handleSubmitadd}>
//                                           <div className="row w-100 mt-2 ">
//                                             <div className="col-12  float-start p-3  ">
//                                               <label className="form-label">
//                                                 Name
//                                               </label>
//                                               <input
//                                                 type="text"
//                                                 className=" form-control "
//                                               />
//                                             </div>

//                                             <div className="col float-start  ">
//                                               <label className="form-label ">
//                                                 Status
//                                               </label>
//                                               <select className=" form-control ">
//                                                 <option value="" disabled>
//                                                   Status
//                                                 </option>
//                                                 <option value="1">
//                                                   Active
//                                                 </option>
//                                                 <option value="2">
//                                                   Inactive
//                                                 </option>
//                                               </select>
//                                             </div>
//                                           </div>

//                                           <div className="col-md-12 d-flex justify-content-center   px-5 py-5 ">
//                                             <button
//                                               type="submit"
//                                               className="save-form "
//                                             >
//                                               Save
//                                             </button>
//                                           </div>
//                                         </form>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               )}

//                               <div className="border border-1"></div>
//                               <div className="modula-icon-del">
//                                 <RiDeleteBin6Line />
//                               </div>
//                             </div>
//                             </div>
//                       </td>
//                     ))}
//                  </tr>
//               </div>
//               {/* <div className="col-12 d-flex justify-content-end pt-5 px-5">
//               <nav aria-label="Page navigation example">
//                 <ul class="pagination">
//                   <li class="page-item">
//                     <a class="page-link" href="#" aria-label="Previous">
//                       <span aria-hidden="true">&laquo;</span>
//                     </a>
//                   </li>
//                   <li class="page-item ">
//                     <a class="page-link " href="#">
//                       1
//                     </a>
//                   </li>
//                   <li class="page-item">
//                     <a class="page-link" href="#">
//                       2
//                     </a>
//                   </li>
//                   <li class="page-item">
//                     <a class="page-link" href="#">
//                       3
//                     </a>
//                   </li>

//                   <li class="page-item">
//                     <a class="page-link" href="#" aria-label="Next">
//                       <span aria-hidden="true">&raquo;</span>
//                     </a>
//                   </li>
//                 </ul>
//               </nav>
//             </div> */}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Modula_Profession;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoMdAdd } from "react-icons/io";
import { VscGitStashPop } from "react-icons/vsc";
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import 'datatables.net-select-dt';
import 'datatables.net-responsive-dt';
import { TfiPencilAlt } from "react-icons/tfi";
import { RiDeleteBin6Line } from "react-icons/ri";
import Sider from "../components/Sider";

import Header from "../components/Header";

import Modula_header from "./Modula_header";

DataTable.use(DT);

function Modula_Profession() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ name: "", status: "" });
  const [errors, setErrors] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAdd, setIsOpenAdd] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/c/15fb-d155-40a6-a49e");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openPopupAdd = () => setIsOpenAdd(true);
  const closePopupAdd = () => setIsOpenAdd(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.status) formErrors.status = "Status is required";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmitAdd = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data submitted:", formData);
      // You can submit the data here (e.g., API call or state update)
    }
  };

  const columns = [
    { title: 'Name', data: 'name' },
    { title: 'Position', data: 'position' },
    { title: 'Office', data: 'office' },
    { title: 'Extn.', data: 'extn' },
    
    
   
   
  ];
  
  const databharath = [
    { name: 'Jennifer Acosta', position: 'Junior Javascript Developer', office: 'Edinburgh', extn: '3431' },
    { name: 'Justin Cooper', position: 'Javascript Developer', office: 'London', extn: '8836' },
    { name: 'Luke Jacobs', position: 'Support Engineer', office: 'San Francisco', extn: '6755' },
    { name: 'Jennifer Acosta', position: 'Junior Javascript Developer', office: 'Edinburgh', extn: '3431'  },
    { name: 'Justin Cooper', position: 'Javascript Developer', office: 'London', extn: '8836' },
  ]

  return (
    <section className="main">
      <div className="row mt-4 w-100">
        <div className="col-1 d-flex justify-content-center">
          <Sider />
        </div>
        <div className="col-11">
          <div className="col-12">
            <Header />
          </div>
          <div className="col-12 wapper w-100 mt-3 pt-5 py-5">
            <div className="col-12 d-flex justify-content-center w-100">
              <Modula_header />
            </div>
            <div className="col text-center mt-3">
              <div className="d-flex justify-content-center">
                <div className="add-icon">
                  <IoMdAdd onClick={openPopupAdd} className="add1-icon" />
                </div>
                {isOpenAdd && (
                  <div className="popup-container">
                    <div className="popup-add">
                      <div className="popup-content-add">
                        <span className="close" onClick={closePopupAdd}>&times;</span>
                        <form onSubmit={handleSubmitAdd}>
                          <div className="row w-100 mt-2">
                            <div className="col-12 float-start p-3">
                              <label className="form-label">Name</label>
                              <input
                                type="text"
                                className={`form-control ${errors.name ? "error" : ""}`}
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                              />
                              {errors.name && <span className="error">{errors.name}</span>}
                            </div>
                            <div className="col float-start">
                              <label className="form-label">Status</label>
                              <select
                                className={`form-control ${errors.status ? "error" : ""}`}
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                              >
                                <option value="" disabled>Status</option>
                                <option value="1">Active</option>
                                <option value="2">Inactive</option>
                              </select>
                              {errors.status && <span className="error">{errors.status}</span>}
                            </div>
                          </div>
                          <div className="col-md-12 d-flex justify-content-center px-5 py-5">
                            <button type="submit" className="save-form">Save</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          <div className="px-5">
            <DataTable
            
              data={databharath}
              columns={columns}
              className="display"
              options={{ responsive: true, select: true }}
            />
           </div>
            <div className="d-flex justify-content-center">
              <div className="d-flex justify-content-around modula-main mt-1">
                <div className="modula-icon-edit" onClick={openPopup}>
                  <TfiPencilAlt />
                </div>
                {isOpen && (
                  <div className="popup-container">
                    <div className="popup">
                      <div className="popup-content">
                        <span className="close" onClick={closePopup}>&times;</span>
                        <div className="popup-content1 px-5">
                          <form onSubmit={handleSubmitAdd}>
                            <div className="row w-100 mt-2">
                              <div className="col-12 float-start p-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" />
                              </div>
                              <div className="col float-start">
                                <label className="form-label">Status</label>
                                <select className="form-control">
                                  <option value="" disabled>Status</option>
                                  <option value="1">Active</option>
                                  <option value="2">Inactive</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-12 d-flex justify-content-center px-5 py-5">
                              <button type="submit" className="save-form">Save</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="modula-icon-del">
                  <RiDeleteBin6Line />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Modula_Profession;
