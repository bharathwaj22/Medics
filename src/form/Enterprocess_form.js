import React, { useState } from "react";
import "../assests/css/enter_form.css";

import Sider from "../components/Sider.js";
import Header from "../components/Header.js";
import { Link } from "react-router-dom";
// import Enterprocesshead from "../enterprocess/Enterprocesshead.js";
import { PiCloudArrowUpLight } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import RichEditor from "../components/RichEditor.jsx";
import Breadcrumbs from "../routes/Breadcrumbs";

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
  const handleFileChange = (event, id) => {
    const newFields = fields.map((field) =>
      field.id === id ? { ...field, fileUploaded: event.target.files.length > 0 } : field
    );
    setFields(newFields);
  };

  const [fileUploaded, setFileUploaded] = useState(false);

  const handleFileDelete = (id) => {
    const newFields = fields.map((field) =>
      field.id === id ? { ...field, fileUploaded: false } : field
    );
    setFields(newFields);
    document.getElementById(`fileupload-${id}`).value = '';
  };

  // Handle deleting the entire file input field
  const handleFieldDelete = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };


  // };
  const handleFileChange1 = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileUploaded(true);  // File uploaded
    } else {
      setFileUploaded(false); // No file uploaded
    }
  };

  // Handle file delete
  const handleFileDelete1 = () => {
    setFileUploaded(false);  // Reset uploaded status
    document.getElementById("fileupload").value = "";  // Clear the file input
  };
  const [fields, setFields] = useState([]);

  const handleButtonClick = () => {
    setFields((prev) => [...prev, { id: Math.random(), isVisible: true }]); // Add a new field
  };

  const handleDeleteField = (id) => {
    setFields((prev) => prev.filter((field) => field.id !== id)); // Remove the specific field
  };

  const [showWriter, setShowWriter] = useState(false);
  const [showReviewer, setShowReviewer] = useState(false);
  const [showStatistican, setShowStatistican] = useState(false);
  const [showJournal, setShowJournal] = useState(false);
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
  const handleJournalClick = () => {
    setShowJournal(!showJournal);
  };

  const [showOthers, setShowOthers] = useState(false);

  const handleChangeselect = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      specificOption: "",
    }));

    // Toggle showOthers based on selection
    if (name === "typeofwork") {
      setShowOthers(value === "others");
    }
  };
  const handleSpecificChange = (event) => {
    const { value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      specificOption: value,
    }));
  };
  // const handleSpecificChange1 = (event) => {
  //   const { value } = event.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     specificOption: value,
  //   }));
  // };
  const optionsMapping = {
    statistics: [
      { value: "1", label: "Sample Size" },
      { value: "2", label: "Paper Statistics" },
      { value: "3", label: "Thesis Statistics - With Text" },
      { value: "4", label: "Thesis Statistics - Without Text" },
    ],
    manuscript: [
      { value: "1", label: "Writing" },
      { value: "2", label: "With Statistics" },
      { value: "3", label: "With Publication" },
    ],
    thesis: [
      { value: "6", label: "Supporting Thesis with MS" },
      { value: "7", label: "Supporting Thesis without MS" },
      { value: "8", label: "Supporting Thesis Part - 1" },
      { value: "9", label: "Supporting Thesis Part - 2" },
      { value: "10", label: "Supporting Thesis Part - With MS" },
      { value: "11", label: "Supporting Thesis Part - Without MS" },
      { value: "12", label: "Thesis Reviewing" },
    ],
    presentation: [
      { value: "1", label: "Conference Presentation" },
      { value: "2", label: "With Statistics" },
      { value: "3", label: "Poster Presentation" },
    ],
    others: [],
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
              <div className="pt-2 px-2 d-none d-md-block">
                <Breadcrumbs></Breadcrumbs>
              </div>
              <form>
                <div className="row w-100 mt-0 px-3 ">
                  <div className="col-12 col-md-3 float-start pt-3  ">
                    <label className="statis-name  mx-2">Entry Date</label>
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

                  <div className=" col-12 col-md-3 float-start pt-3 ">
                    <label className="statis-name ">Title</label>
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
                  <div className="col-12 col-md-3 float-start pt-3 ">
                    <label className="statis-name ">Project ID</label>
                    <input
                      className={`form-control ${
                        errors.typeofwork ? "error" : ""
                      }`}
                      placeholder="Enter the Project Id"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12 col-md-3 float-start pt-3 ">
                    <label className="statis-name ">Type of Work</label>
                    <select
                      className={`form-select ${
                        errors.typeofwork ? "error" : ""
                      }`}
                      name="typeofwork"
                      value={formData.typeofwork}
                      placeholder="Enter the Project Id"
                      onChange={handleChangeselect}
                      required
                    >
                      <option value="" disabled>
                        Select an option
                      </option>{" "}
                      <option value="statistics">Statistics</option>
                      <option value="manuscript">Manuscript</option>
                      <option value="thesis">Thesis</option>
                      <option value="presentation">Presentation</option>
                      <option value="others">Others</option>
                    </select>
                  </div>

                  <div className="row  mt-2 pt-3   p-3 ">
                    <div className="col-12 col-md-4 ">
                      <label className="statis-name">Select Document</label>

                      {formData.typeofwork === "others" ? (
                        <input
                          type="text"
                          className="form-control"
                          name="specificOption"
                          value={formData.specificOption}
                          onChange={handleSpecificChange}
                          placeholder="Enter Others Option"
                          required
                        />
                      ) : (
                        <select
                          className="form-select"
                          name="specificOption"
                          value={formData.specificOption}
                          onChange={handleSpecificChange}
                          required
                        >
                          <option value="" disabled>
                            Select a specific option
                          </option>
                          {optionsMapping[formData.typeofwork]?.map(
                            (option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            )
                          )}
                        </select>
                      )}
                    </div>

                    <div className="col-12 col-md-4">
                      <label className="statis-name">File</label>

                      <div className="form-control d-flex justify-content-end">
                        <input
                          type="file"
                          id="fileupload"
                          accept="file/*"
                          className="file-upload-input"
                          onChange={handleFileChange1}
                        />
                        {!fileUploaded && (
                          <label htmlFor="fileupload" className="file-icon">
                            <PiCloudArrowUpLight />
                          </label>
                        )}
                        {fileUploaded && (
                          <RiDeleteBin6Line
                            className="file-del-icon"
                            onClick={handleFileDelete1}
                          />
                        )}
                      </div>
                    </div>

                    <div className="col d-flex justify-content-start py-3 mt-2">
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
                            <select className="form-select " name="hierarchy">
                              className="form-select" name="specificOption"
                              value={formData.specificOption}
                              onChange={handleSpecificChange}
                              required
                              <option value="" disabled>
                                Select a specific option
                              </option>
                              {optionsMapping[formData.typeofwork]?.map(
                                (option) => (
                                  <option
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </option>
                                )
                              )}
                            </select>
                             {/* {formData.typeofwork === "others" ? (
                        <input
                          type="text"
                          className="form-control"
                          name="specificOption"
                          value={formData.specificOption}
                          onChange={handleSpecificChange1}
                          placeholder="Enter Others Option"
                          required
                        />
                      ) : (
                        <select
                          className="form-select"
                          name="specificOption"
                          value={formData.specificOption}
                          onChange={handleSpecificChange1}
                          required
                        >
                          <option value="" disabled>
                            Select a specific option
                          </option>
                          {optionsMapping[formData.typeofwork]?.map(
                            (option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            )
                          )}
                        </select>
                      )} */}
                            
                          </div>
                          <div className="col-12 col-md-4">
                            <div className="form-control d-flex justify-content-end">
                              <input
                                type="file"
                                id={`fileupload-${field.id}`}
                                className="file-upload-input"
                                onChange={(event) =>
                                  handleFileChange(event, field.id)
                                }
                                accept="image/*"
                              />
                              {!field.fileUploaded ? (
                                <label
                                  htmlFor={`fileupload-${field.id}`}
                                  className="file-icon"
                                >
                                  <PiCloudArrowUpLight />
                                </label>
                              ) : (
                                <RiDeleteBin6Line
                                  className="file-del-icon"
                                  onClick={() => handleFileDelete(field.id)}
                                />
                              )}
                            </div>
                          </div>
                          <div className="col d-flex justify-content-start  ">
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

                  <div className="col-md-12 float-start pt-1 py-3">
                    <label className="client-name-pop ">
                      Client Information
                    </label>
                  </div>

                  <div className="col-12 col-md-4 float-start pt-0  ">
                    <label className="statis-name ">Client Name</label>
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
                  <div className="col-12 col-md-4 float-start pt-2">
                    <label className="statis-name  ">Email ID</label>

                    <input
                      type="email"
                      className={`form-control ${errors.email ? "error" : ""}`}
                      name="email"
                      placeholder="Enter the Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12 col-md-4 float-start pt-2">
                    <label className="statis-name  ">Contact No</label>
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

                  <div className="col-12 col-md-4 float-start pt-4  ">
                    <label className="statis-name ">Institute</label>
                    <div className="dropdown-container ">
                      <div
                        className={`form-select dropdown-header pt-2 px-3 ${
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

                  <div className="col-12 col-md-4 float-start pt-4">
                    <label className="statis-name  ">Department</label>
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

                  <div className=" col-12 col-md-4 float-start pt-4 ">
                    <label className="statis-name ">Profession</label>
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
                  <div className="col-12 col-md-4 float-start pt-4">
                    <label className="statis-name ">Budget</label>
                    <input
                      type="number"
                      className={`form-control ${
                        errors.contactNo ? "error" : ""
                      }`}
                      placeholder="Enter Budget"
                      // name="contactNo"
                      // value={formData.contactNo}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12 col-md-4 float-start  pt-4">
                    <label className="statis-name ">Hierarchy Level</label>
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
                  <div className="col-12 col-md-6 pt-4">
                    <label className="statis-name ">Comment Box</label>
                    {/* <input className=" command-box" /> */}
                    <RichEditor></RichEditor>
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
                    <div className="row px-4 pt-0">
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
                        <div>
                          <input
                            type="checkbox"
                            id="journal"
                            onClick={handleJournalClick}
                          />
                          <label className="statis-name1" htmlFor="journal">
                            Journal
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                  {showWriter && (
                    <div className="row w-100 pt-2 ">
                      <div className="col  pt-2">
                        <label className="statis-name ">Writer</label>
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
                        <label className="statis-name ">
                          Writer Assigned Date
                        </label>
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
                        <label className="statis-name "> Writer Status</label>
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
                        <label className="statis-name ">
                          Writer status Date
                        </label>

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
                        <label className="statis-name ">
                          {" "}
                          Writer Project Duration
                        </label>
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

                  {showReviewer && (
                    <div className="row w-100 pt-4">
                      <div className="col  ">
                        <label className="statis-name "> Reviewer</label>
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
                      <div className="col  ">
                        <label className="statis-name ">
                          Reviewer Assigned Date
                        </label>
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
                      <div className="col t ">
                        <label className="statis-name ">Reviewer Status</label>

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
                      <div className="col  ">
                        <label className="statis-name ">
                          Reviewer Status date
                        </label>
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
                      <div className="col  ">
                        <label className="statis-name ">
                          {" "}
                          Reviewer Project Duration
                        </label>
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

                  {showStatistican && (
                    <div className="row w-100 pt-4">
                      <div className="col float-start ">
                        <label className="statis-name ">Statistican</label>
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
                      <div className="col float-start  ">
                        <label className="statis-name ">
                          Statistican Assigned Date
                        </label>
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
                      <div className="col float-start  ">
                        <label className="statis-name ">
                          {" "}
                          Statistican Status
                        </label>
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
                      <div className="col float-start ">
                        <label className="statis-name ">
                          Statistican status Date
                        </label>

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
                      <div className="col float-start  l">
                        <label className="statis-name ">
                          {" "}
                          Statistican Project Duration
                        </label>
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

                  {showJournal && (
                    <div className="row w-100 pt-4">
                      <div className="col float-start ">
                        <label className="statis-name ">Journal</label>
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
                            Select Journal
                          </option>
                          <option value="one">One</option>
                          <option value="two">Two</option>
                          <option value="three">Three</option>
                        </select>
                      </div>
                      <div className="col float-start  ">
                        <label className="statis-name ">
                          Journal Assigned Date
                        </label>
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
                      <div className="col float-start  ">
                        <label className="statis-name "> JournalStatus</label>
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
                            Select Journal Status
                          </option>
                          <option value="one">One</option>
                          <option value="two">Two</option>
                          <option value="three">Three</option>
                        </select>
                      </div>
                      <div className="col float-start ">
                        <label className="statis-name ">
                          Journal status Date
                        </label>

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
                      <div className="col float-start  l">
                        <label className="statis-name ">
                          {" "}
                          Journal Project Duration
                        </label>
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
