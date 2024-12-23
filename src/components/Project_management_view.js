import React, { useState } from "react";

import Sider from "../components/Sider";

import Header from "../components/Header";
import "..//assests/css/project-management-view.css";
import Profile from "..//assests/images/profile.png";
import Breadcrumbs from "../routes/Breadcrumbs";
import { IoMdAdd } from "react-icons/io";
import RichEditor from "../components/RichEditor.jsx";
import { IoMdClose } from "react-icons/io";

function Project_management_view() {
  // const [formData, setFormData1] = React.useState({
  //   commandbox: "",
  // });
  // const [editorContent, setEditorContent] = useState('');
  // const [isRejected, setIsRejected] = useState(false);

  // const setFormData = (content) => {
  //   setEditorContent(content ? String(content) : '');
  //   console.log("Editor content updated:", content);
  // };
  // const handleRejectSubmit = () => {
  //   if (editorContent.trim() === '') {

  //     setIsRejected(true);
  //   } else {
  //     setIsRejected(false);
  //     console.log('Rejected with content:', editorContent);
  //   }
  // };
  // const handleCommentChange = (newValue) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     commandbox: newValue, // Update only the commandbox property
  //   }));
  // };
  const [formData, setFormData] = useState({
    commandbox: "",
  });
  const [isRejected, setIsRejected] = useState(false);

  // This function updates the formData's commandbox property
  const handleEditorChange = (content) => {
    const contentString = content ? String(content) : ""; 
  
    setFormData((prevData) => ({
      ...prevData,
      commandbox: contentString,
    }));
  
    if (contentString.trim() !== "") {
      setIsRejected(false);
    }
  
    console.log("Editor content updated:", contentString);
  };

  const handleRejectSubmit = () => {
    console.log("Current commandbox content:", formData.commandbox);

    if (formData.commandbox.trim() === "") {
      setIsRejected(true); // Show warning if content is empty
    } else {
      setIsRejected(false); // Hide warning if content is not empty
      console.log("Rejected with content:", formData.commandbox);
    }
  };
  // const [mainProfiles, setMainProfiles] = useState([]);
  // const [availableProfiles, setAvailableProfiles] = useState([
  //   { image: Profile, name: "Rabina" },
  //   { image: Profile, name: "John" },
  //   { image: Profile, name: "Alice" },
  // ]);
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleDiv = () => {
  //   setIsOpen((prev) => !prev);
  // };

  // const selectProfile = (profile) => {

  //   setMainProfiles((prev) => [...prev, profile]);
  //   setAvailableProfiles((prev) =>
  //     prev.filter((item) => item.name !== profile.name)
  //   );
  //   setIsOpen(false); // Close the "add-view-names" section
  // };

  // const deleteProfile = (profile) => {
  //   // Move profile from mainProfiles to availableProfiles
  //   setAvailableProfiles((prev) => [...prev, profile]);
  //   setMainProfiles((prev) =>
  //     prev.filter((item) => item.name !== profile.name)
  //   );
  // };
  // const AssignerDropdown = () => {
  //   const [optionsAssigner, setOptionsAssigner] = useState([
  //     { name: "one", image: "https://via.placeholder.com/40" },
  //     { name: "two", image: "https://via.placeholder.com/40" },
  //     { name: "three", image: "https://via.placeholder.com/40" },
  //   ]);

  //   const [selectedOption, setSelectedOption] = useState(null);
  //   const [searchQuery, setSearchQuery] = useState("");
  //   const [newOption, setNewOption] = useState({ name: "", image: "" });
  //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  //   const [errors, setErrors] = useState({});

  //   const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  //   const handleOptionSelect = (option) => {
  //     setSelectedOption(option);
  //     setIsDropdownOpen(false);
  //     setErrors({ ...errors, assigner: "" });
  //   };

  //   const handleAddOption = () => {
  //     if (
  //       newOption.name.trim() &&
  //       newOption.image.trim() &&
  //       !optionsAssigner.some((opt) => opt.name === newOption.name)
  //     ) {
  //       setOptionsAssigner([...optionsAssigner, newOption]);
  //       setNewOption({ name: "", image: "" });
  //       setSearchQuery("");
  //     }
  //   };
  // }
  const [errors, setErrors] = useState({});

  const [optionsAssigner, setOptionsAssigner] = useState([
    { name: "Rabina", image: Profile },
    { name: "bharath", image: Profile },
    { name: "waj", image: Profile },
  ]);

  const [selectedOption, setSelectedOption] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const filteredOptions = optionsAssigner.filter((option) =>
    option.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <section className="main position-fixed">
        <div className="row mt-4 w-100">
          <div className="col-1 d-flex justify-content-center">
            <Sider />
          </div>
          <div className="col-11">
            <Header />
            <div className="col-12  mt-3 project-manage-view pb-3 w-100">
              <div className="pt-2 px-2 d-none d-md-block">
                <Breadcrumbs></Breadcrumbs>
              </div>

              <div className="row">
                <section className="col-8 pb-5 scrollable-section">
                  <div className="row px-3">
                    <div className="col-12 mt-4">
                      <p className="view-heading">Description</p>
                    </div>
                  </div>
                  <div className="row px-3">
                    <div className="col-12 float-start">
                      <div className="d-flex gap-2">
                       
                        <div className="view-present">Statistics</div>
                        <div className="view-present">Manuscript</div>
                        <div className="view-present">Thesis</div>
                        <div className="view-present">Presentation</div>
                        <div className="view-present">Others</div>
                       
                      </div>
                      <div className="col-12 mt-4">
                        <p className="view-heading">#Project Title</p>
                        <p className="view-project-title">
                          lorem100Lorem ipsum, or lipsum as it is sometimes
                          known, is dummy text used in laying out print, graphic
                          or web designs. The passage is attributed to an
                          unknown typesetter in the 15th century who is thought
                          to have scrambled parts of Cicero's De Finibus Bonorum
                          et Malorum for use in a type specimen book. It usually
                          begins with:
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 d-flex justify-content-start gap-3 px-3">
                    <button className="view-rej" onClick={handleRejectSubmit}>
                      Rejected
                    </button>
                    <button className="view-accept">Accepted</button>
                  </div>
                  <div className="row px-3">
                    <div className="col-12 mt-4">
                      <p className="view-heading">Activity</p>
                    </div>
                  </div>
                  <div className="row px-4">
                    <div
                      className={`col-12  pt-4 box-line ${
                        isRejected ? "border-red" : ""
                      }`}
                    >
                      <RichEditor setFormData={handleEditorChange} />
                    </div>
                    {isRejected && (
                      <div className="col-12">
                        <p className="warning-text">
                          Please fill out the command box before rejecting.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="row px-3 pt-5">
                    <div className="col d-flex align-items-center gap-3">
                      <img src={Profile} className="" alt="" />
                      <div className="view-names1  ">Rabina</div>
                      <div className=" created-by ">5min</div>
                    </div>
                    <div className="col-12 mx-4">
                      <p className="view-project-title  mx-5 pt-2">
                        lorem100Lorem ipsum, or lipsum as it is sometimes known,
                        is dummy text used in laying out print, graphic or web
                        designs.
                      </p>
                    </div>
                  </div>
                  <div className="row px-3 pt-2">
                    <div className="col d-flex align-items-center gap-3">
                      <img src={Profile} className="" alt="" />
                      <div className="view-names1  ">Rabina</div>
                      <div className=" created-by ">5min</div>
                    </div>
                    <div className="col-12 mx-4">
                      <p className="view-project-title  mx-5 pt-2">
                        lorem100Lorem ipsum, or lipsum as it is sometimes known,
                        is dummy text used in laying out print, graphic or web
                        designs.
                      </p>
                    </div>
                  </div>
                </section>
                <section className="col-sm-12 col-md-4 pt-5">
                  <div className=" float-start">
                    <div className="">
                      <div className="d-flex gap-2 ">
                        <p className="created-by pt-2">Created by</p>
                        <div className="create-view d-flex align-items-center gap-2 px-1 mx-3">
                          <img src={Profile} className="pro-view-img" alt="" />
                          <p className="view-names text-center ">Rabina</p>
                        </div>
                      </div>

                      <div className="d-flex gap-4">
                        <p className="created-by pt-2 ">Assigned To</p>

                        <div className="dropdown-container1 mx-5 mb-2">
                          <div
                            className={`form-select1 dropdown-header-view pt-2 px-3 ${
                              errors.assigner ? "error" : ""
                            }`}
                            onClick={toggleDropdown}
                          >
                            {selectedOption ? (
                              <div className="d-flex align-items-center">
                                <img
                                  src={selectedOption.image}
                                  alt={selectedOption.name}
                                  className="dropdown-selected-img me-2"
                                  // style={{
                                  //   width: "24px",
                                  //   height: "24px",
                                  //   borderRadius: "50%",
                                  // }}
                                />
                                {selectedOption.name}
                              </div>
                            ) : (
                              "Select Assigner"
                            )}
                          </div>

                          {isDropdownOpen && (
                            <div className="dropdown-view position-absolute ">
                              <input
                                type="text"
                                className="dropdown-search-view form-control mb-2"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                              />
                              <div className="dropdown-options">
                                {filteredOptions.length > 0 ? (
                                  filteredOptions.map((option, index) => (
                                    <div
                                      key={index}
                                      className="dropdown-option d-flex align-items-center py-2"
                                      onClick={() => handleOptionSelect(option)}
                                      style={{ cursor: "pointer" }}
                                    >
                                      <img
                                        src={option.image}
                                        alt={option.name}
                                        className="me-2"
                                        style={{
                                          width: "24px",
                                          height: "24px",
                                          borderRadius: "50%",
                                        }}
                                      />
                                      {option.name}
                                    </div>
                                  ))
                                ) : (
                                  <div className="dropdown-no-options py-2">
                                    No options found
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/*  */}
                      <div className="d-flex gap-3 align-items-center">
                        <p className="created-by mb-0">Time line</p>
                        <p className="view-names mx-3 mb-0">
                          Jan 3, 2024 to Apr 24, 2024
                        </p>
                      </div>
                      {/*  */}
                      <div className="d-flex gap-4 align-items-center mt-2">
                        <p className="created-by mb-0">Priority</p>
                        <p className="view-names mx-2 mb-0">Important</p>
                      </div>
                      {/*  */}
                      <div className="d-flex gap-4 align-items-center mt-2">
                        <p className="created-by mb-0">Status</p>
                        <p className="view-names mx-2 mb-0">TO DO</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project_management_view;


// import React, { useState } from "react";
// import { PiCloudArrowUpLight } from "react-icons/pi";
// import { RiDeleteBin6Line } from "react-icons/ri";

// const FormComponent = () => {
//   const [fields, setFields] = useState([
//     { id: 1, specificOption: "", fileUploaded: false },
//     { id: 2, specificOption: "", fileUploaded: false },
//   ]);
//   const [uploadedFiles, setUploadedFiles] = useState([]);
//   const [errors, setErrors] = useState({});
//   const [formData, setFormData] = useState({
//     typeofwork: "others", // or some other value
//   });

//   const optionsMapping = {
//     others: [
//       { value: "option1", label: "Option 1" },
//       { value: "option2", label: "Option 2" },
//     ],
//   };

//   // Handle specific option change
//   const handleSpecificChange1 = (e, fieldId) => {
//     const { value } = e.target;
//     setFields((prevFields) =>
//       prevFields.map((field) =>
//         field.id === fieldId ? { ...field, specificOption: value } : field
//       )
//     );
//   };

//   // Handle file change
//   const handleFileChange = (e, fieldId) => {
//     const file = e.target.files[0];
//     if (file) {
//       setUploadedFiles((prevFiles) => [
//         ...prevFiles,
//         { option: fieldId, file },
//       ]);
//       setFields((prevFields) =>
//         prevFields.map((field) =>
//           field.id === fieldId ? { ...field, fileUploaded: true } : field
//         )
//       );
//     }
//   };

//   // Handle file delete
//   const handleFileDelete = (fieldId) => {
//     setUploadedFiles((prevFiles) =>
//       prevFiles.filter((file) => file.option !== fieldId)
//     );
//     setFields((prevFields) =>
//       prevFields.map((field) =>
//         field.id === fieldId ? { ...field, fileUploaded: false } : field
//       )
//     );
//   };

//   // Handle delete field
//   const handleDeleteField = (fieldId) => {
//     setFields((prevFields) => prevFields.filter((field) => field.id !== fieldId));
//   };

//   // Handle select change
//   const handleChangeSelect = (e, fieldId) => {
//     const { value } = e.target;
//     setFields((prevFields) =>
//       prevFields.map((field) =>
//         field.id === fieldId ? { ...field, specificOption: value } : field
//       )
//     );
//   };

//   // Handle add field
//   const handleAddField = () => {
//     const newField = {
//       id: fields.length + 1, // or use another method to generate unique IDs
//       specificOption: "",
//       fileUploaded: false,
//     };
//     setFields((prevFields) => [...prevFields, newField]);
//   };

//   // Handle form submit with validation
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let isValid = true;
//     let newErrors = {};

//     // Validate each field
//     fields.forEach((field) => {
//       if (!field.specificOption) {
//         newErrors[`specificOption-${field.id}`] = "This field is required";
//         isValid = false;
//       }
//       // File validation
//       const fileUploaded = uploadedFiles.some((file) => file.option === field.id);
//       if (!fileUploaded) {
//         newErrors[`file-upload-${field.id}`] = "File upload is required";
//         isValid = false;
//       }
//     });

//     // Set errors if any
//     setErrors(newErrors);
//     if (isValid) {
//       // Proceed with form submission logic
//       console.log("Form submitted successfully");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {fields.map((field) => (
//         <div key={field.id} className="row pt-1 p-3">
//           {/* Specific Option Input */}
//           <div className="col-12 col-md-4">
//             {formData.typeofwork === "others" ? (
//               <input
//                 type="text"
//                 className={`form-control ${
//                   errors[`specificOption-${field.id}`] ? "error" : ""
//                 }`}
//                 name={`specificOption-${field.id}`}
//                 value={field.specificOption || ""}
//                 onChange={(event) => handleSpecificChange1(event, field.id)}
//                 placeholder="Enter Others Option"
//                 required
//               />
//             ) : (
//               <select
//                 className={`form-select ${
//                   errors[`specificOption-${field.id}`] ? "error" : ""
//                 }`}
//                 name={`specificOption-${field.id}`}
//                 value={field.specificOption || ""}
//                 onChange={(e) => handleChangeSelect(e, field.id)}
//                 required
//               >
//                 <option value="" disabled>
//                   Select a specific option
//                 </option>
//                 {optionsMapping[formData.typeofwork]?.map((option) => (
//                   <option key={option.value} value={option.value}>
//                     {option.label}
//                   </option>
//                 ))}
//               </select>
//             )}
//             {errors[`specificOption-${field.id}`] && (
//               <div className="error-message">
//                 {errors[`specificOption-${field.id}`]}
//               </div>
//             )}
//           </div>

//           {/* File Upload Input */}
//           <div className="col-12 col-md-4">
//             <div
//               className={`form-control d-flex justify-content-end ${
//                 errors[`file-upload-${field.id}`] ? "error" : ""
//               }`}
//             >
//               <input
//                 type="file"
//                 id={`fileupload-${field.id}`}
//                 className="file-upload-input"
//                 onChange={(e) => handleFileChange(e, field.id)}
//                 accept="*"
//                 required
//               />
//               {!uploadedFiles.some((file) => file.option === field.id) ? (
//                 <label htmlFor={`fileupload-${field.id}`} className="file-icon">
//                   <PiCloudArrowUpLight />
//                 </label>
//               ) : (
//                 uploadedFiles
//                   .filter((file) => file.option === field.id)
//                   .map((file, index) => (
//                     <RiDeleteBin6Line
//                       key={index}
//                       className="file-del-icon"
//                       onClick={() => handleFileDelete(field.id)}
//                     />
//                   ))
//               )}
//             </div>
//             {errors[`file-upload-${field.id}`] && (
//               <div className="error-message">
//                 {errors[`file-upload-${field.id}`]}
//               </div>
//             )}
//           </div>

//           {/* Delete Button */}
//           <div className="col d-flex justify-content-start">
//             <button
//               type="button"
//               className="save-form-del"
//               onClick={() => handleDeleteField(field.id)}
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}

//       {/* Add New Field Button */}
//       <div className="form-group">
//         <button type="button" onClick={handleAddField}>
//           Add New Field
//         </button>
//       </div>

//       {/* Submit Button */}
//       <div className="form-group">
//         <button type="submit" className="submit-btn">
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// };

// export default FormComponent;

