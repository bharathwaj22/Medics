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

// function Modula() {
//   const [data, setData] = useState([]);
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
//   const handleSubmitpending = (e) => {
//     e.preventDefault();

//     // If form is valid, process the data
//     if (validateForm()) {
//       console.log("Form data submitted:", formData);
//     }
//   };

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

//                           <div className="popup-content1  pt-4 px-5 ">
//                             <form onSubmit={handleSubmitpending}>
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
//               <div className="col-12 mt-3 px-2 table-responsive  table-wrapper-scroll-y my-custom-scrollbar  ">
//                 <table className=" table-head   ">
//                   <thead>
//                     <tr className="text-center tr-head  ">
//                       <th className="">S.NO </th>
//                       <th className="">NAME</th>
//                       <th className="">STATUS</th>

//                       <th className="">ACTION</th>

//                       <th></th>
//                     </tr>
//                   </thead>

//                   <React.Fragment>
//                     {data.map((item) => (
//                       <tbody key={item.id}>
//                         <tr className=" text-center tr-head ">
//                           <td>{item["s.no"]}</td>
//                           <td>{item.id}</td>
//                           <td>{item.department}</td>

                          

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
//                                         <form onSubmit={handleSubmitpending}>
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
//                           </td>
//                         </tr>
//                       </tbody>
//                     ))}
//                   </React.Fragment>
//                 </table>
//               </div>
//               <div className="col-12 d-flex justify-content-end pt-5 px-5">
//                 <nav aria-label="Page navigation example">
//                   <ul class="pagination">
//                     <li class="page-item">
//                       <a class="page-link" href="#" aria-label="Previous">
//                         <span aria-hidden="true">&laquo;</span>
//                       </a>
//                     </li>
//                     <li class="page-item ">
//                       <a class="page-link " href="#">
//                         1
//                       </a>
//                     </li>
//                     <li class="page-item">
//                       <a class="page-link" href="#">
//                         2
//                       </a>
//                     </li>
//                     <li class="page-item">
//                       <a class="page-link" href="#">
//                         3
//                       </a>
//                     </li>

//                     <li class="page-item">
//                       <a class="page-link" href="#" aria-label="Next">
//                         <span aria-hidden="true">&raquo;</span>
//                       </a>
//                     </li>
//                   </ul>
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Modula;



// import React, { useEffect } from 'react';
// import $ from 'jquery';  
// import 'datatables.net'; 

// function Modula_institution() {
//   useEffect(() => {
   
//     $(document).ready(function() {
//       $('#example').DataTable(); 
//     });
//   }, []);
 
//   return (
//     <div className='mt-5'>
//       <table  id="example" class="table table-striped" style={{width:"100%"}} >
//         <thead>
//             <tr>
//                 <th>Name</th>
//                 <th>Position</th>
//                 <th>Office</th>
//                 <th>Age</th>
//                 <th>Start date</th>
//                 <th>Salary</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>Tiger Nixon</td>
//                 <td>System Architect</td>
//                 <td>Edinburgh</td>
//                 <td>61</td>
//                 <td>2011-04-25</td>
//                 <td>$320,800</td>
//             </tr>
//             <tr>
//                 <td>Garrett Winters</td>
//                 <td>Accountant</td>
//                 <td>Tokyo</td>
//                 <td>63</td>
//                 <td>2011-07-25</td>
//                 <td>$170,750</td>
//             </tr>
//             <tr>
//                 <td>Ashton Cox</td>
//                 <td>Junior Technical Author</td>
//                 <td>San Francisco</td>
//                 <td>66</td>
//                 <td>2009-01-12</td>
//                 <td>$86,000</td>
//             </tr>
//             <tr>
//                 <td>Cedric Kelly</td>
//                 <td>Senior Javascript Developer</td>
//                 <td>Edinburgh</td>
//                 <td>22</td>
//                 <td>2012-03-29</td>
//                 <td>$433,060</td>
//             </tr>
//             <tr>
//                 <td>Airi Satou</td>
//                 <td>Accountant</td>
//                 <td>Tokyo</td>
//                 <td>33</td>
//                 <td>2008-11-28</td>
//                 <td>$162,700</td>
//             </tr>
//             <tr>
//                 <td>Brielle Williamson</td>
//                 <td>Integration Specialist</td>
//                 <td>New York</td>
//                 <td>61</td>
//                 <td>2012-12-02</td>
//                 <td>$372,000</td>
//             </tr>
//             <tr>
//                 <td>Herrod Chandler</td>
//                 <td>Sales Assistant</td>
//                 <td>San Francisco</td>
//                 <td>59</td>
//                 <td>2012-08-06</td>
//                 <td>$137,500</td>
//             </tr>
//             <tr>
//                 <td>Rhona Davidson</td>
//                 <td>Integration Specialist</td>
//                 <td>Tokyo</td>
//                 <td>55</td>
//                 <td>2010-10-14</td>
//                 <td>$327,900</td>
//             </tr>
//             <tr>
//                 <td>Colleen Hurst</td>
//                 <td>Javascript Developer</td>
//                 <td>San Francisco</td>
//                 <td>39</td>
//                 <td>2009-09-15</td>
//                 <td>$205,500</td>
//             </tr>
//             <tr>
//                 <td>Sonya Frost</td>
//                 <td>Software Engineer</td>
//                 <td>Edinburgh</td>
//                 <td>23</td>
//                 <td>2008-12-13</td>
//                 <td>$103,600</td>
//             </tr>
//             <tr>
//                 <td>Jena Gaines</td>
//                 <td>Office Manager</td>
//                 <td>London</td>
//                 <td>30</td>
//                 <td>2008-12-19</td>
//                 <td>$90,560</td>
//             </tr>
//             <tr>
//                 <td>Quinn Flynn</td>
//                 <td>Support Lead</td>
//                 <td>Edinburgh</td>
//                 <td>22</td>
//                 <td>2013-03-03</td>
//                 <td>$342,000</td>
//             </tr>
//             <tr>
//                 <td>Charde Marshall</td>
//                 <td>Regional Director</td>
//                 <td>San Francisco</td>
//                 <td>36</td>
//                 <td>2008-10-16</td>
//                 <td>$470,600</td>
//             </tr>
//             <tr>
//                 <td>Haley Kennedy</td>
//                 <td>Senior Marketing Designer</td>
//                 <td>London</td>
//                 <td>43</td>
//                 <td>2012-12-18</td>
//                 <td>$313,500</td>
//             </tr>
            
//         </tbody>
      
//     </table>
//     </div>
//   )
// }

// export default Modula_institution


// import DataTable from 'datatables.net-react';
// import DT from 'datatables.net-dt';

// import 'datatables.net-select-dt';
// import 'datatables.net-responsive-dt';
 
// DataTable.use(DT);
 
// function App() {
//   const columns = [
//     { data: 'name' },
//     { data: 'position' },
//     { data: 'office' },
//     { data: 'extn' },
//     { data: 'start_date' },
//     { data: 'salary' },
//   ];
//  const data=[
//   { "name": "Jennifer Acosta", "position": "Junior Javascript Developer", "office": "Edinburgh", "extn": "3431", "start_date": "2013/02/01", "salary": "$75,650" },
//   { "name": "Justin Cooper", "position": "Javascript Developer", "office": "London", "extn": "8836", "start_date": "2012/11/27", "salary": "$91,000" },
//   { "name": "Luke Jacobs", "position": "Support Engineer", "office": "San Francisco", "extn": "6755", "start_date": "2011/07/09", "salary": "$92,575" }
// ]


//     return (
      
//         <DataTable
//             ajax="/data.json"
//             columns={columns}
//             className="display"
//             options={{
//                 responsive: true,
//                 select: true,
//             }}
//         >
//             <thead>
//             <tr>
//                 <th>Name</th>
//                 <th>Position</th>
//                 <th>Office</th>
//                 <th>Extn.</th>
//                 <th>Start date</th>
//                 <th>Salary</th>
//             </tr>
//             </thead>
//             {data.map((data)=>{
//               return <tr key={data.name}>
//                 <td>{data.name}</td>
//                 <td>{data.position}</td>
//                 <td>{data.office}</td>
//                 <td>{data.extn}</td>
//                 <td>{data.start_date}</td>
//                 <td>{data.salary}</td>
//               </tr>
//             })};
           
//         </DataTable>

        
        
//     );
// }
 
// export default App;
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';

import 'datatables.net-select-dt';
import 'datatables.net-responsive-dt';

DataTable.use(DT);

function App() {
  const columns = [
    { title: 'Name', data: 'name' },
    { title: 'Position', data: 'position' },
    { title: 'Office', data: 'office' },
    { title: 'Extn.', data: 'extn' },
    { title: 'Start date', data: 'start_date' },
    { title: 'Salary', data: 'salary' },
  ];

  const data = [
    { name: 'Jennifer Acosta', position: 'Junior Javascript Developer', office: 'Edinburgh', extn: '3431', start_date: '2013/02/01', salary: '$75,650' },
    { name: 'Justin Cooper', position: 'Javascript Developer', office: 'London', extn: '8836', start_date: '2012/11/27', salary: '$91,000' },
    { name: 'Luke Jacobs', position: 'Support Engineer', office: 'San Francisco', extn: '6755', start_date: '2011/07/09', salary: '$92,575' },
    { name: 'Jennifer Acosta', position: 'Junior Javascript Developer', office: 'Edinburgh', extn: '3431', start_date: '2013/02/01', salary: '$75,650' },
    { name: 'Justin Cooper', position: 'Javascript Developer', office: 'London', extn: '8836', start_date: '2012/11/27', salary: '$91,000' },
    { name: 'Luke Jacobs', position: 'Support Engineer', office: 'San Francisco', extn: '6755', start_date: '2011/07/09', salary: '$92,575' },
    { name: 'Jennifer Acosta', position: 'Junior Javascript Developer', office: 'Edinburgh', extn: '3431', start_date: '2013/02/01', salary: '$75,650' },
    { name: 'Justin Cooper', position: 'Javascript Developer', office: 'London', extn: '8836', start_date: '2012/11/27', salary: '$91,000' },
    { name: 'Luke Jacobs', position: 'Support Engineer', office: 'San Francisco', extn: '6755', start_date: '2011/07/09', salary: '$92,575' },
    { name: 'Jennifer Acosta', position: 'Junior Javascript Developer', office: 'Edinburgh', extn: '3431', start_date: '2013/02/01', salary: '$75,650' },
    { name: 'Justin Cooper', position: 'Javascript Developer', office: 'London', extn: '8836', start_date: '2012/11/27', salary: '$91,000' },
    { name: 'Luke Jacobs', position: 'Support Engineer', office: 'San Francisco', extn: '6755', start_date: '2011/07/09', salary: '$92,575' },

    { name: 'Jennifer Acosta', position: 'Junior Javascript Developer', office: 'Edinburgh', extn: '3431', start_date: '2013/02/01', salary: '$75,650' },
    { name: 'Justin Cooper', position: 'Javascript Developer', office: 'London', extn: '8836', start_date: '2012/11/27', salary: '$91,000' },
    { name: 'Luke Jacobs', position: 'Support Engineer', office: 'San Francisco', extn: '6755', start_date: '2011/07/09', salary: '$92,575' },{ name: 'Jennifer Acosta', position: 'Junior Javascript Developer', office: 'Edinburgh', extn: '3431', start_date: '2013/02/01', salary: '$75,650' },
    { name: 'Justin Cooper', position: 'Javascript Developer', office: 'London', extn: '8836', start_date: '2012/11/27', salary: '$91,000' },
    { name: 'Luke Jacobs', position: 'Support Engineer', office: 'San Francisco', extn: '6755', start_date: '2011/07/09', salary: '$92,575' },

    { name: 'Jennifer Acosta', position: 'Junior Javascript Developer', office: 'Edinburgh', extn: '3431', start_date: '2013/02/01', salary: '$75,650' },
    { name: 'Justin Cooper', position: 'Javascript Developer', office: 'London', extn: '8836', start_date: '2012/11/27', salary: '$91,000' },
    { name: 'Luke Jacobs', position: 'Support Engineer', office: 'San Francisco', extn: '6755', start_date: '2011/07/09', salary: '$92,575' },{ name: 'Jennifer Acosta', position: 'Junior Javascript Developer', office: 'Edinburgh', extn: '3431', start_date: '2013/02/01', salary: '$75,650' },
    { name: 'Justin Cooper', position: 'Javascript Developer', office: 'London', extn: '8836', start_date: '2012/11/27', salary: '$91,000' },
    { name: 'Luke Jacobs', position: 'Support Engineer', office: 'San Francisco', extn: '6755', start_date: '2011/07/09', salary: '$92,575' },
    { name: 'Jennifer Acosta', position: 'Junior Javascript Developer', office: 'Edinburgh', extn: '3431', start_date: '2013/02/01', salary: '$75,650' },
    { name: 'Justin Cooper', position: 'Javascript Developer', office: 'London', extn: '8836', start_date: '2012/11/27', salary: '$91,000' },
    { name: 'Luke Jacobs', position: 'Support Engineer', office: 'San Francisco', extn: '6755', start_date: '2011/07/09', salary: '$92,575' },

  ];

  return (
    <DataTable
      data={data}
      columns={columns}
      className="display"
      options={{
        responsive: true,
        select: true,
        
      }}
    />
  );
}

export default App;
