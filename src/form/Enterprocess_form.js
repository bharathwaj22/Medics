import React, { useState } from "react";
import "../assests/css/enter_form.css";

import Sider from "../components/Sider.js";
import Header from "../components/Header.js";

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
    setListExpanded(false)
    setIsDropdownOpen(false)


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
    setIsDropdownOpen(false)
  };

  const toggleDropdowninstitue = () => {
    setIsDropdownOpen((prev) => !prev);
    setDropdownVisible(false)

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
    setDropdownVisible(false)
    setIsDropdownOpen(false)
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

            <div className="col-12  wapper w-100 mt-3 px-5 ">
              <form>
                <div className="row w-100 mt-2 ">
                  <div className="col-md-4 float-start pt-5  ">
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

                  <div className=" col-md-4 float-start pt-5 ">
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

                  <div className="col-md-4 float-start pt-5 ">
                    <h5 className="statis-name ">Type Of Work</h5>
                    <select
                      className={`form-control ${
                        errors.typeofwork ? "error" : ""
                      }`}
                      name="typeofwork"
                      value={formData.typeofwork}
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

                  <div className="col-md-4 float-start pt-5 ">
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

                  <div className="col-md-12 float-start pt-5 py-3">
                    <h5 className="client-name-pop ">Client Information</h5>
                  </div>

                  <div className="col-md-4 float-start pt-3  ">
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
                  <div className=" col-md-4 float-start pt-3 ">
                    <h5 className="statis-name ">Profession</h5>
                    {/* input */}

                    <div className="dropdown-container ">
                      <div
                        className={`form-control dropdown-header  pt-3 px-3   ${
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
                          {/* <button type="button">add</button> */}
                        </div>
                      )}
                    </div>
                  </div>
                 

                  <div className="col-md-4 float-start pt-3  ">
                    <h5 className="statis-name ">Institute</h5>
                    <div className="dropdown-container ">
                      <div
                        className={`form-control dropdown-header pt-3 px-3 ${
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

                  <div className="col-md-4 float-start pt-3">
                    <h5 className="statis-name mt-5 ">Contact No</h5>
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

                  <div className="col-md-4 float-start pt-3">
                    <h5 className="statis-name mt-5 ">Department</h5>
                    <div className="dropdown-container ">
                      <div
                        className={`client-info dropdown-header pt-3 px-3 ${
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
                  <div className="col-md-4 float-start pt-3">
                    <h5 className="statis-name mt-5 ">Email ID</h5>

                    <input
                      type="email"
                      className={`form-control ${errors.email ? "error" : ""}`}
                      name="email"
                      placeholder="Enter the Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-4 float-start mt-3 pt-5">
                    <h5 className="statis-name ">Hierarchy Level</h5>
                    <select
                      className={`form-control ${
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
                  <div className="col-md-12 d-flex justify-content-end  pt-3 py-5 ">
                    
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
