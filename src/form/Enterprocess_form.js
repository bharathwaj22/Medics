import React, { useState } from "react";
import "../assests/css/enter_form.css";

import Sider from "../components/Sider.js";
import Headerenter from "../components/Headerenter.js";



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
  };

  return (
    <>
      <div className="row header-stat ">
        <Headerenter></Headerenter>
      </div>

      <section className=" main">
        <div className=" row mt-5  w-100 ">
          <div className=" col-1 d-flex justify-content-center">
            <Sider></Sider>
          </div>
          <div className="col-11  wapper ">
            <form onSubmit={handleSubmit}>
            <div className="row w-100 mt-5 mx-4 ">
              <div className="col-4  ">
                <h5 className="statis-name mt-2 mx-2">Entry Date</h5>
                <input
                  type="date"
                  className={`client-info1 ${
                    errors.entryDateType ? "error" : ""
                  }`}
                  name="entryDate"
                  value={formData.entryDateType}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className=" col-4   mt-2">
                <h5 className="statis-name ">Title</h5>
                <input
                  type="text"
                  className={`client-info1 ${errors.title ? "error" : ""}`}
                  name="title"
                  placeholder="Enter the Title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-4 mt-2">
                <h5 className="statis-name ">Type Of Work</h5>
                <select
                  className={` client-info1 ${
                    errors.typeofwork ? "error" : ""
                  }`}
                  name="typeofwork"
                  value={formData.typeofwork}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select an option</option>{" "}
                 
                  <option value="Statistics">Statistics</option>
                  <option value="Manuscript">Manuscript</option>
                  <option value="Thesis">Thesis</option>
                  <option value="Presentation">Presentation</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>
            <div className="row  w-100">
              <div className="col-4 mx-2 mt-3">
                <input
                  type="text"
                  className="client-info1 mx-4 "
                  name="clientName"
                  placeholder=""
                  value={formData.clientName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row mt-2 w-100 ">
              <div className="col-11   mt-2">
                <h5 className="client-name mx-5">Client Information</h5>
              </div>
            </div>
            <div className="row mt-4 w-100 ">
              <div className="col-4 ">
                <div className="mx-5">
                  <div>
                    <h5 className="statis-name ">Client Name</h5>
                    <input
                      type="text"
                      className={`client-info  ${
                        errors.clientName ? "error" : ""
                      }`}
                      name="clientName"
                      placeholder="Enter the name"
                      value={formData.clientName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mt-5">
                    <h5 className="statis-name ">Profession</h5>
                    {/* input */}

                    <div className="dropdown-container ">
                      <div
                        className={`client-info dropdown-header  pt-3 px-3   ${
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
                  {/* <div className="mt-5">
                    <h5 className="statis-name ">Title</h5>
                    <input
                      type="text"
                      className={`client-info ${errors.title ? "error" : ""}`}
                      name="title"
                      placeholder="Enter the Title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                    />
                  </div> */}
                </div>
              </div>
              <div className="col-4">
                <div className="mx-4">
                  <div>
                    <h5 className="statis-name ">Institute</h5>
                    <div className="dropdown-container">
                      <div
                        className={`client-info dropdown-header pt-3 px-3 ${
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

                  <div>
                    <h5 className="statis-name mt-5 ">Contact No</h5>
                    <input
                      type="number"
                      className={`client-info ${
                        errors.contactNo ? "error" : ""
                      }`}
                      placeholder="Enter the Contact No"
                      name="contactNo"
                      value={formData.contactNo}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* <div>
                    <h5 className="statis-name  mt-5">Free text</h5>
                    <input
                      type="text"
                      className={`client-info ${errors.amount ? "error" : ""}`}
                      placeholder="Amount"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      required
                    />
                  </div> */}
                </div>
              </div>
              <div className="col-4 ">
                <div className="mx-4">
                  <div>
                    <h5 className="statis-name ">Department</h5>
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
                  <div>
                    <h5 className="statis-name mt-5 ">Email ID</h5>

                    <input
                      type="email"
                      className={`client-info ${errors.email ? "error" : ""}`}
                      name="email"
                      placeholder="Enter the Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row w-100 py-5 ">
              <div className="col-7 mt-2  ">
                <div className=" head-button2 mx-5 mt-4 ">
                  <h5 className="statis-name1  mt-3 pt-3 ">Hierarchy Level</h5>
                  <div className="d-flex justify-content-around">
                    <button className="fot-btn">Urgent / Important</button>
                    <button className="fot-btn1">Important / Not Urgent</button>
                    <button className="fot-btn2">Urgent / Not Important</button>
                    <button className="fot-btn3">
                      Not Urgent / Not Important
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-3 mt-5 ">
                <div className="save-btn ">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="save-btn1"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Enterprocess_form;
