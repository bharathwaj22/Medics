import React, { useState } from "react";
import "../assests/css/enter_form.css";

import Sider from "../components/Sider.js";
import Header from "../components/Header.js";
import { Link } from "react-router-dom";
import Enterprocesshead from "../enterprocess/Enterprocesshead.js";
import { PiCloudArrowUpLight } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";

// import  from "react";

function Enterprocess_form() {
  const [formData, setFormData] = useState({
    entrydate: "",
    typeofwork: "",
    clientName: "",
    profession: "",
    title: "",
    institute: "",
    contactNo: "",
    department: "",
    email: "",
    hierarchy: "",
  });

  // State to store validation errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form before submission
  const validateForm = () => {
    let formErrors = {};

    if (!formData.entryDate) formErrors.entryDateType = "EntryDate is required";
    if (!formData.typeofwork) formErrors.typeofwork = "typeofwork is required";
    if (!formData.clientName) formErrors.clientName = "Client Name is required";
    if (!formData.profession) formErrors.profession = "Profession is required";
    if (!formData.title) formErrors.title = "Title is required";
    if (!formData.institute) formErrors.institute = "Institute is required";
    if (!formData.contactNo) formErrors.contactNo = "Contact No is required";
    if (!formData.department) formErrors.department = "Department is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.hierarchy) formErrors.hierarchy = "hierarchy is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = "Email is not valid";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // If form is valid, process the data
    if (validateForm()) {
      console.log("Form data submitted:", formData);
    }
  };
  //  profession.........................................................>
  const [currentChoice, setCurrentChoice] = useState(""); // Stores selected option
  const [query, setQuery] = useState(""); // Stores search query
  const [dropdownItems] = useState([
    "Assitant Profession",
    "Associate profession",
    "Professor",
    "Consultant",
    "Junior Resident",
    "Senior Professor",
    "Postgraduate",
    "Others",
  ]); // Static list of options
  const [isDropdownVisible, setDropdownVisible] = useState(false); // Tracks dropdown visibility

  const filteredItems = dropdownItems.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelectItem = (item) => {
    setCurrentChoice(item);
    setDropdownVisible(false); // Close dropdown after selection
  };

  const toggleDropmenu = () => {
    setDropdownVisible((prev) => !prev); // Toggle dropdown visibility
    setListExpanded(false);
    setIsDropdownOpen(false);
  };

  // institute...................................................=>
  const [selectedOption, setSelectedOption] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [optionsinstitute] = useState(["one", "two", "three"]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredOptions = optionsinstitute.filter((optionsinstitute) =>
    optionsinstitute.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectOption = (optionsinstitute) => {
    setSelectedOption(optionsinstitute);
    setIsDropdownOpen(false);
  };

  const toggleDropdowninstitue = () => {
    setIsDropdownOpen((prev) => !prev);
    setDropdownVisible(false);
  };

  // department........................................................>
  const [chosenOption, setChosenOption] = useState(""); // Stores selected option
  const [searchInput, setSearchInput] = useState(""); // Stores search query
  const [availableOptions] = useState(["one", "two"]); // Static list of options
  const [isListExpanded, setListExpanded] = useState(false); // Tracks dropdown visibility

  const filtereddepOptions = availableOptions.filter((option) =>
    option.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handledepOptionSelect = (option) => {
    setChosenOption(option);
    setListExpanded(false); // Close dropdown after selection
  };

  const toggleList = () => {
    setListExpanded((prev) => !prev); // Toggle dropdown visibility
    setDropdownVisible(false);
    setIsDropdownOpen(false);
  };
  // const [file, setFile] = useState(null);

  // const handleFileChange = (event) => {
  //   const selectedFile = event.target.files[0];
  //   if (selectedFile) {
  //     setFile(selectedFile);
  //   }
  // };
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileUploaded(true);
    } else {
      setFileUploaded(false);
    }
  };

  const handleFileDelete = () => {
    setFileUploaded(false);
    document.getElementById("fileupload").value = "";
  };

  // };
  const [fields, setFields] = useState([]);
  // const [fileUploaded, setFileUploaded] = useState(false);

  // Function to toggle the visibility of a new field
  const handleButtonClick = () => {
    setFields((prev) => [...prev, { id: Date.now(), isVisible: true }]); // Add a new field
  };

  // Function to delete a specific field
  const handleDeleteField = (id) => {
    setFields((prev) => prev.filter((field) => field.id !== id)); // Remove the specific field
  };

  // Handle file change (example function)
  // const handleFileChange = (e) => {
  //   setFileUploaded(true); // Set file as uploaded (simple logic here, adapt to your needs)
  // };

  // // Handle file deletion (example function)
  // const handleFileDelete = () => {
  //   setFileUploaded(false); // Reset file upload state
  // };

  const [showWriter, setShowWriter] = useState(false);
  const [showReviewer, setShowReviewer] = useState(false);
  const [showStatistican, setShowStatistican] = useState(false);
  const [showProject, setShowProject] = useState(false);

  const handleWriterClick = () => {
    setShowWriter(!showWriter);
  };
  const handleStatisticanClick = () => {
    setShowStatistican(!showStatistican);
  };

  const handleReviewerClick = () => {
    setShowReviewer(!showReviewer);
  };
  const handleProjectClick = () => {
    setShowProject(!showProject);
  };

  return (
    <>
      <section className=" main">
        <div className=" row mt-4  w-100 ">
          <div className=" col-1 d-flex justify-content-center">
            <Sider></Sider>
          </div>
          <div className="col-11  ">
            <div className="col-12">
              <Header></Header>
            </div>

            <div className="col-12  wapper w-100 mt-3  ">
              {/* <div className="col-12 mt-3 d-flex justify-content-center w-100">
                <Enterprocesshead></Enterprocesshead>
              </div> */}
              <form>
                <div className="row w-100 mt-2 px-3 ">
                  <div className="col-12 col-md-3 float-start pt-5  ">
                    <h5 className="statis-name  mx-2">Entry Date</h5>
                    <input
                      type="date"
                      className={`form-control ${
                        errors.entryDateType ? "error" : ""
                      }`}
                      name="entryDate"
                      value={formData.entryDateType}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className=" col-12 col-md-3 float-start pt-5 ">
                    <h5 className="statis-name ">Title</h5>
                    <input
                      type="text"
                      className={`form-control ${errors.title ? "error" : ""}`}
                      name="title"
                      placeholder="Enter the Title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12 col-md-3 float-start pt-5 ">
                    <h5 className="statis-name ">Project ID</h5>
                    <input
                      className={`form-control ${
                        errors.typeofwork ? "error" : ""
                      }`}
                      name="typeofwork"
                      value={formData.typeofwork}
                      placeholder="Enter the Project Id"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12 col-md-3 float-start pt-5 ">
                    <h5 className="statis-name ">Type of Work</h5>
                    <select
                      className={`form-select ${
                        errors.typeofwork ? "error" : ""
                      }`}
                      name="typeofwork"
                      value={formData.typeofwork}
                      placeholder="Enter the Project Id"
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select an option
                      </option>{" "}
                      <option value="Statistics">Statistics</option>
                      <option value="Manuscript">Manuscript</option>
                      <option value="Thesis">Thesis</option>
                      <option value="Presentation">Presentation</option>
                      <option value="others">Others</option>
                    </select>
                  </div>

                  <div className="col-12 col-md-3 float-start pt-5 ">
                    <input
                      type="text"
                      className="form-control  "
                      name="clientName"
                      placeholder=""
                      value={formData.clientName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="row  mt-2 pt-3   p-3 ">
                    <div className="col-12 col-md-4 ">
                      <label className="statis-name">Select Document</label>
                      <select className="form-select " name="hierarchy">
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="1">Aim</option>
                        <option value="2">Title</option>
                        <option value="3">objective</option>
                        <option value="4">Primary Outcome</option>
                        <option value="5">Parent Paper</option>
                        <option value="6">Master sheet</option>
                        <option value="7">protocol</option>
                        <option value="8">Ethical Committee Approval</option>
                        <option value="9">Full Thesis</option>
                        <option value="10">Study desgin</option>
                        <option value="11">Statistics Result</option>
                        <option value="12">Unorganized thesis</option>
                        <option value="13">Last Year completedn Thesis</option>
                        <option value="14">Guidelines</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-4">
                      <label className="statis-name">File</label>

                      <div className="form-control d-flex justify-content-end">
                        <input
                          type="file"
                          id="fileupload"
                          accept="file/*"
                          className="file-upload-input"
                          onChange={handleFileChange}
                        />
                        {!fileUploaded && (
                          <label htmlFor="fileupload" className="file-icon">
                            <PiCloudArrowUpLight />
                          </label>
                        )}
                        {fileUploaded && (
                          <RiDeleteBin6Line
                            className="file-del-icon"
                            onClick={handleFileDelete}
                          />
                        )}
                      </div>
                    </div>

                    <div className="col d-flex justify-content-start py-4 mt-2">
                      <button
                        type="button"
                        className="save-form-add"
                        onClick={handleButtonClick}
                      >
                        Add +
                      </button>
                    </div>
                  </div>
                  {fields.map(
                    (field, index) =>
                      field.isVisible && (
                        <div key={field.id} className="row pt-1 p-3">
                          <div className="col-12 col-md-4">
                            {/* <label className="statis-name">
                              Select Document
                            </label> */}
                            <select className="form-select " name="hierarchy">
                              <option value="" disabled>
                                Select an option
                              </option>
                              <option value="1">Aim</option>
                              <option value="2">Title</option>
                              <option value="3">Objective</option>
                              <option value="4">Primary Outcome</option>
                              <option value="5">Parent Paper</option>
                              <option value="6">Master Sheet</option>
                              <option value="7">Protocol</option>
                              <option value="8">
                                Ethical Committee Approval
                              </option>
                              <option value="9">Full Thesis</option>
                              <option value="10">Study desgin</option>
                              <option value="11">Statistics Result</option>
                              <option value="12">Unorganized thesis</option>
                              <option value="13">
                                Last Year completedn Thesis
                              </option>
                              <option value="14">Guidelines</option>
                            </select>
                          </div>
                          <div className="col-12 col-md-4">
                            {/* <label className="statis-name">File</label> */}
                            <div className="form-control d-flex justify-content-end">
                              <input
                                type="file"
                                id="fileupload"
                                accept=".jpg,.png,.pdf"
                                className=""
                                onChange={handleFileChange}
                              />
                              {!fileUploaded ? (
                                <label
                                  htmlFor="fileupload"
                                  className="file-icon"
                                >
                                  <PiCloudArrowUpLight />
                                </label>
                              ) : (
                                <RiDeleteBin6Line
                                  className="file-del-icon"
                                  onClick={handleFileDelete}
                                />
                              )}
                            </div>
                          </div>
                          <div className="col d-flex justify-content-start py-2 ">
                            <button
                              type="button"
                              className="save-form-del"
                              onClick={() => handleDeleteField(field.id)} // Delete specific field
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      )
                  )}

                  <div className="col-md-12 float-start pt-5 py-3">
                    <h5 className="client-name-pop ">Client Information</h5>
                  </div>

                  <div className="col-12 col-md-4 float-start pt-3  ">
                    <h5 className="statis-name ">Client Name</h5>
                    <input
                      type="text"
                      className={`form-control  ${
                        errors.clientName ? "error" : ""
                      }`}
                      name="clientName"
                      placeholder="Enter the name"
                      value={formData.clientName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12 col-md-4 float-start pt-3">
                    <h5 className="statis-name  ">Email ID</h5>

                    <input
                      type="email"
                      className={`form-control ${errors.email ? "error" : ""}`}
                      name="email"
                      placeholder="Enter the Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12 col-md-4 float-start pt-3">
                    <h5 className="statis-name  ">Contact No</h5>
                    <input
                      type="number"
                      className={`form-control ${
                        errors.contactNo ? "error" : ""
                      }`}
                      placeholder="Enter the Contact No"
                      name="contactNo"
                      value={formData.contactNo}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12 col-md-4 float-start pt-3  ">
                    <h5 className="statis-name mt-5 ">Institute</h5>
                    <div className="dropdown-container ">
                      <div
                        className={`form-select dropdown-header pt-3 px-3 ${
                          errors.institute ? "error" : ""
                        }`}
                        onClick={toggleDropdowninstitue}
                      >
                        {selectedOption || "Institute"}
                      </div>

                      {isDropdownOpen && (
                        <div className="dropdown   position-absolute">
                          <input
                            type="text"
                            className="dropdown-search"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                          <div className="dropdown-options ">
                            {filteredOptions.length > 0 ? (
                              filteredOptions.map((optionsinstitute, index) => (
                                <div
                                  key={index}
                                  className="dropdown-option"
                                  onClick={() => {
                                    handleSelectOption(optionsinstitute); // Select item
                                    setFormData({
                                      ...formData,
                                      institute: optionsinstitute,
                                    }); // Update profession
                                    setErrors({ ...errors, institute: "" }); // Clear profession error
                                  }}
                                >
                                  {optionsinstitute}
                                </div>
                              ))
                            ) : (
                              <div className="dropdown-no-options">
                                No options found
                              </div>
                            )}
                          </div>
                          {/* <button type="button">add</button> */}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-12 col-md-4 float-start pt-3">
                    <h5 className="statis-name mt-5 ">Department</h5>
                    <div className="dropdown-container ">
                      <div
                        className={`form-select dropdown-header pt-3 px-3 ${
                          errors.department ? "error" : ""
                        }`}
                        onClick={toggleList}
                      >
                        {chosenOption || "Department"}
                      </div>

                      {isListExpanded && (
                        <div className="dropdown position-absolute">
                          <input
                            type="text"
                            className="dropdown-search"
                            placeholder="Search..."
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                          />
                          <div className="dropdown-options">
                            {filtereddepOptions.length > 0 ? (
                              filtereddepOptions.map((option, index) => (
                                <div
                                  key={index}
                                  className="dropdown-option"
                                  onClick={() => {
                                    handledepOptionSelect(option); // Select item
                                    setFormData({
                                      ...formData,
                                      department: option,
                                    }); // Update profession
                                    setErrors({ ...errors, department: "" }); // Clear profession error
                                  }}
                                >
                                  {option}
                                </div>
                              ))
                            ) : (
                              <div className="dropdown-no-options">
                                No options found
                              </div>
                            )}
                          </div>
                          {/* <button type="button">add</button> */}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className=" col-12 col-md-4 float-start pt-3 ">
                    <h5 className="statis-name mt-5">Profession</h5>
                    {/* input */}

                    <div className="dropdown-container">
                      <div
                        className={`form-select dropdown-header  pt-3 px-3   ${
                          errors.profession ? "error" : ""
                        }`}
                        //   Value={formData.profession}
                        // onChange={handleChange}
                        // required
                        id="client"
                        onClick={toggleDropmenu}
                      >
                        {formData.profession || currentChoice || "Profession"}
                      </div>

                      {isDropdownVisible && (
                        <div className="dropdown    position-absolute">
                          <input
                            type="text"
                            className="dropdown-search"
                            placeholder="Search..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                          />
                          <div className="dropdown-options">
                            {filteredItems.length > 0 ? (
                              filteredItems.map((item, index) => (
                                <div
                                  key={index}
                                  className="dropdown-option"
                                  onClick={() => {
                                    handleSelectItem(item); // Select item
                                    setFormData({
                                      ...formData,
                                      profession: item,
                                    }); // Update profession
                                    setErrors({ ...errors, profession: "" }); // Clear profession error
                                  }}
                                >
                                  {item}
                                </div>
                              ))
                            ) : (
                              <div className="dropdown-no-options">
                                No options found
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-12 col-md-4 float-start pt-3">
                    <h5 className="statis-name mt-5 ">Budget</h5>
                    <input
                      type="number"
                      className={`form-control ${
                        errors.contactNo ? "error" : ""
                      }`}
                      placeholder="Enter Budget"
                      name="contactNo"
                      value={formData.contactNo}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12 col-md-4 float-start mt-3 pt-5">
                    <h5 className="statis-name ">Hierarchy Level</h5>
                    <select
                      className={`form-select ${
                        errors.hierarchy ? "error" : ""
                      }`}
                      name="hierarchy"
                      value={formData.hierarchy}
                      onChange={handleChange}
                      required
                      aria-label="Priority hierarchy"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="1">Urgent/Important</option>
                      <option value="2">Important/Not Urgent</option>
                      <option value="3">Urgent/Not Important</option>
                      <option value="4">Not Urgent/Not Important</option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6 pt-5">
                    <h5 className="statis-name ">Comment Box</h5>
                    <input className=" command-box" />
                  </div>
                  <div class="row p-4">
                    <div className="col d-flex gap-1">
                      <input
                        type="checkbox"
                        id="project"
                        onClick={handleProjectClick}
                        className=""
                      />
                      <label className="statis-name1 " htmlFor="project">
                        Else your project manager click me
                      </label>
                    </div>
                  </div>
                  {showProject && (
                    <div className="row p-4">
                      <div className="col d-flex  gap-3">
                        <div>
                          <input
                            type="checkbox"
                            id="writer"
                            onClick={handleWriterClick}
                            className="col-6 col-md-2"
                          />
                          <label className="statis-name1 " htmlFor="writer">
                            Writer
                          </label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            id="reviewer"
                            onClick={handleReviewerClick}
                          />
                          <label className="statis-name1" htmlFor="reviewer">
                            Reviewer
                          </label>
                        </div>

                        <div>
                          <input
                            type="checkbox"
                            id="statistican"
                            onClick={handleStatisticanClick}
                          />
                          <label className="statis-name1" htmlFor="statistican">
                            Statistican
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                  {showWriter && (
                   
                      <div className="row w-100 ">
                        <div className="col  pt-2">
                          <h5 className="statis-name ">Writer</h5>
                          <select
                            className={`form-control  ${
                              errors.writer ? "error" : ""
                            }`}
                            name="writer"
                            value={formData.writer}
                            onChange={handleChange}
                            required
                          >
                            <option value="" disabled>
                              Select writer
                            </option>
                            <option value="one">One</option>
                            <option value="two">Two</option>
                            <option value="three">Three</option>
                          </select>
                        </div>
                        <div className="col  pt-2 ">
                          <h5 className="statis-name ">Writer Assigned Date</h5>
                          <input
                            type="date"
                            className={`form-control ${
                              errors.writerDate ? "error" : ""
                            }`}
                            name="writerDate"
                            value={formData.writerDate}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col pt-2 ">
                          <h5 className="statis-name "> Writer Status</h5>
                          <select
                            className={`form-control  ${
                              errors.writerStatus ? "error" : ""
                            }`}
                            name="writerStatus"
                            value={formData.writerStatus}
                            onChange={handleChange}
                            required
                          >
                            <option value="" disabled>
                              Select Writer Status
                            </option>
                            <option value="one">One</option>
                            <option value="two">Two</option>
                            <option value="three">Three</option>
                          </select>
                        </div>
                        <div className="col  pt-2">
                          <h5 className="statis-name ">Writer status Date</h5>

                          <input
                            type="date"
                            className={`form-control ${
                              errors.writerStatusDate ? "error" : ""
                            }`}
                            name="writerStatusDate"
                            value={formData.writerStatusDate || ""}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col  pt-2">
                          <h5 className="statis-name ">Project Duration</h5>
                          <div className="d-flex form-control">
                            <input
                              className="duration-input"
                              type="text"
                            ></input>
                            <select className="duration-select">
                              <option value="" disabled selected>
                                Hrs/Days
                              </option>
                              <option value="one">Hrs</option>
                              <option value="two">days</option>
                            </select>
                          </div>
                        </div>
                      </div>
                   
                  )}

                  {showReviewer && (
                   
                      <div className="row w-100">
                        <div className="col  pt-5">
                          <h5 className="statis-name "> Reviewer</h5>
                          <select
                            className={`form-control  ${
                              errors.reviwer ? "error" : ""
                            }`}
                            name="reviwer"
                            value={formData.reviwer || ""}
                            onChange={handleChange}
                            required
                          >
                            <option value="" disabled>
                              Select an option
                            </option>

                            <option value="one">one</option>
                            <option value="two">two</option>
                            <option value="three">three</option>
                          </select>
                        </div>
                        <div className="col  pt-5">
                          <h5 className="statis-name ">
                            Reviewer Assigned Date
                          </h5>
                          <input
                            type="date"
                            className={`form-control ${
                              errors.reviwerAssignedDate ? "error" : ""
                            }`}
                            name="reviwerAssignedDate"
                            value={formData.reviwerAssignedDate || ""}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col t pt-5">
                          <h5 className="statis-name ">Reviewer Status</h5>

                          <select
                            className={`form-control ${
                              errors.reviwerStatus ? "error" : ""
                            }`}
                            name="reviwerStatus"
                            value={formData.reviwerStatus || ""}
                            onChange={handleChange}
                            required
                          >
                            <option value="" disabled>
                              Select a status
                            </option>{" "}
                            <option value="one">One</option>
                            <option value="two">Two</option>
                            <option value="three">Three</option>
                          </select>
                        </div>
                        <div className="col  pt-5">
                          <h5 className="statis-name ">Reviewer Status date</h5>
                          <input
                            type="date"
                            className={`form-control ${
                              errors.reviwerstatusDate ? "error" : ""
                            }`}
                            name="reviwerstatusDate"
                            value={formData.reviwerstatusDate}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col  pt-5">
                          <h5 className="statis-name ">Project Duration</h5>
                          <div className="d-flex form-control">
                            <input
                              className="duration-input"
                              type="text"
                            ></input>
                            <select className="duration-select">
                              <option value="" disabled selected>
                                Hrs/Days
                              </option>
                              <option value="one">Hrs</option>
                              <option value="two">days</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    
                  )}

                  {showStatistican && (
                    <div className="row w-100">
                      <div className="col float-start pt-5">
                        <h5 className="statis-name ">Statistican</h5>
                        <select
                          className={`form-control  ${
                            errors.writer ? "error" : ""
                          }`}
                          name="writer"
                          value={formData.writer}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>
                            Select Statistican
                          </option>
                          <option value="one">One</option>
                          <option value="two">Two</option>
                          <option value="three">Three</option>
                        </select>
                      </div>
                      <div className="col float-start pt-5 ">
                        <h5 className="statis-name ">
                          Statistican Assigned Date
                        </h5>
                        <input
                          type="date"
                          className={`form-control ${
                            errors.writerDate ? "error" : ""
                          }`}
                          name="writerDate"
                          value={formData.writerDate}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col float-start pt-5 ">
                        <h5 className="statis-name "> Statistican Status</h5>
                        <select
                          className={`form-control  ${
                            errors.writerStatus ? "error" : ""
                          }`}
                          name="writerStatus"
                          value={formData.writerStatus}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>
                            Select Statistican Status
                          </option>
                          <option value="one">One</option>
                          <option value="two">Two</option>
                          <option value="three">Three</option>
                        </select>
                      </div>
                      <div className="col float-start pt-5">
                        <h5 className="statis-name ">
                          Statistican status Date
                        </h5>

                        <input
                          type="date"
                          className={`form-control ${
                            errors.writerStatusDate ? "error" : ""
                          }`}
                          name="writerStatusDate"
                          value={formData.writerStatusDate || ""}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col float-start pt-5 l">
                        <h5 className="statis-name ">Project Duration</h5>
                        <div className="d-flex form-control">
                          <input className="duration-input" type="text"></input>
                          <select className="duration-select">
                            <option value="" disabled selected>
                              Hrs/Days
                            </option>
                            <option value="one">Hrs</option>
                            <option value="two">days</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="col-12 d-flex justify-content-end  pt-5 py-5 gap-3 ">
                    <Link to="/entry-process">
                      <button className="save-form">Back</button>
                    </Link>
                    <button
                      onClick={handleSubmit}
                      type="submit"
                      className="save-form"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Enterprocess_form;
