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
import { Journal } from "react-bootstrap-icons";

// import  from "react";

function Enterprocess_form() {
  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const [formData, setFormData] = useState({
    entrydate: getTodayDate() || "",

    typeofwork: "",
    projectid: "",
    clientName: "",
    profession: "",
    title: "",
    institute: "",
    contactNo: "",
    department: "",
    email: "",
    hierarchy: "",
    writer: "",
    writerDate: getTodayDate() || "",
    writerStatus: "",
    writerStatusDate: getTodayDate() || "",
    reviwer: "",
    reviwerAssignedDate: getTodayDate() || "",
    reviwerStatus: "",
    reviwerStatusdate: getTodayDate() || "",
    statistican: "",
    statisticanDate: getTodayDate() || "",
    statisticanStatus: "",
    statisticanStatusDate: getTodayDate() || "",
    journal: "",
    journalDate: getTodayDate() || "",
    journalStatus: "",
    journalStatusDate: getTodayDate() || "",
    writerProjectDuration: "",
    reviwerprojectDuration: "",
    statisticanProjectDuration: "",
    journalProjectDuration: "",
    processStatus: "",
    budget: "",
    journaldurationUnit: "",
    writerdurationUnit: "",
    reviwerdurationUnit: "",
    statisticandurationUnit: "",
    commandbox:"",
    // specificOption:"",
    // fields:"",
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
  // current

  // Validate form before submission
  const validateForm = () => {
    let formErrors = {};

    if (!formData.entryDate) formErrors.entrydate = "EntryDate is required";
    if (!formData.typeofwork) formErrors.typeofwork = "typeofwork is required";
    if (!formData.projectid) formErrors.projectid = "Project ID is required";
    if (!formData.clientName) formErrors.clientName = "Client Name is required";
    if (!formData.profession) formErrors.profession = "Profession is required";
    if (!formData.title) formErrors.title = "Title is required";
    if (!formData.institute) formErrors.institute = "Institute is required";
    if (!formData.contactNo) formErrors.contactNo = "Contact No is required";
    if (!formData.department) formErrors.department = "Department is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.processStatus)
      formErrors.processStatus = " entry process status";
    if (!formData.budget) formErrors.budget = "Budget is required";

    if (!formData.hierarchy) formErrors.hierarchy = "hierarchy is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = "Email is not valid";
    if (!formData.writer) {
      formErrors.writer = "Writer is required";
    }
    if (!formData.writerDate) {
      formErrors.writerDate = "Writer Date is required";
    }
    if (!formData.writerStatus) {
      formErrors.writerStatus = "Writer Status is required";
    }
    if (!formData.writerStatusDate) {
      formErrors.writerStatusDate = "Writer Status Date is required";
    }
    if (!formData.writerProjectDuration) {
      formErrors.writerProjectDuration = "Writer Project Duration is required";
    }
    if (!formData.duration) {
      setErrors({ duration: "Please select either Hrs or Days." });
      if (!formData.durationInput) {
        formErrors.durationInput = "Please enter a duration.";
      }
    }
    if (!formData.reviwer) {
      formErrors.reviwer = "Reviewer is required";
    }
    if (!formData.reviwerAssignedDate) {
      formErrors.reviwerAssignedDate = "Reviewer Assigned Date is required";
    }
    if (!formData.reviwerStatus) {
      formErrors.reviwerStatus = "Reviewer Status is required";
    }
    if (!formData.reviwerStatusDate) {
      formErrors.reviwerStatusDate = "Reviewer Status Date is required";
    }
    if (!formData.statistican) {
      formErrors.statistican = "Statistican is required";
    }
    if (!formData.statisticanDate) {
      formErrors.statisticanDate = "Statistican Date is required";
    }
    if (!formData.statisticanStatus) {
      formErrors.statisticanStatus = "Statistican Status is required";
    }
    if (!formData.statisticanStatusDate) {
      formErrors.statisticanStatusDate = "Statistican Status Date is required";
    }
    if (!formData.journal) {
      formErrors.journal = "Journal is required";
    }
    if (!formData.journalDate) {
      formErrors.journalDate = "Journal Date is required";
    }
    if (!formData.journalStatus) {
      formErrors.journalStatus = "Journal Status is required";
    }
    if (!formData.journalStatusDate) {
      formErrors.journalStatusDate = "Journal Status Date is required";
    }
    if (!formData.journalProjectDuration) {
      formErrors.journalProjectDuration =
        "Journal Project Duration is required";
    }
    if (!formData.statisticanProjectDuration) {
      formErrors.statisticanProjectDuration =
        "Statistican Project Duration is required";
    }
    if (!formData.reviwerProjectDuration) {
      formErrors.reviwerProjectDuration =
        "reviwer Project Duration is required";
    }
    if (!formData.reviwerduration) {
      setErrors({ reviwerduration: "Please select either Hrs or Days." });
      if (!formData.reviwerdurationInput) {
        formErrors.reviwerdurationInput = "Please enter a duration.";
      }
    }
    if (!formData.statisticanProjectDuration) {
      formErrors.statisticanProjectDuration =
        "statistican Project Duration is required";
    }
    if (!formData.statisticanduration) {
      setErrors({ statisticanduration: "Please select either Hrs or Days." });
      if (!formData.statisticandurationInput) {
        formErrors.statisticandurationInput = "Please enter a duration.";
      }
    }
    if (!formData.journalProjectDuration) {
      formErrors.journalProjectDuration =
        "journal Project Duration is required";
    }
    if (!formData.journalduration) {
      setErrors({ journalduration: "Please select either Hrs or Days." });
      if (!formData.journaldurationInput) {
        formErrors.journaldurationInput = "Please enter a duration.";
      }
    }
    // if (!formData.reviwerProjectDuration) {

    // if (!formData.specificOption) {
    //   formErrors.specificOption = "Specific Option is required";
    // }
    // if (!formData.fields) {
    //   formErrors.fields = "Fields is required";
    // }

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
   
        console.log("Form Data:", formData);
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
  // const handleFileChange = (event, id) => {
  //   const newFields = fields.map((field) =>
  //     field.id === id
  //       ? { ...field, fileUploaded: event.target.files.length > 0 }
  //       : field
  //   );
  //   setFields(newFields);
  // };
  // const handleFileChange = (event, fieldId = null) => {
  //   const files = event.target.files; // Get uploaded files

  //   if (files && files.length > 0) {
  //     // Convert FileList to an array and map file details
  //     const fileArray = Array.from(files).map((file) => ({
  //       option: formData.specificOption, // Add selected option
  //       file: {
  //         name: file.name,
  //         size: file.size,
  //         type: file.type,
  //         lastModified: file.lastModified,
  //       },
  //     }));

  //     // Add file details to the uploadedFiles state
  //     setUploadedFiles((prevFiles) => [...prevFiles, ...fileArray]);

  //     console.log("Updated Uploaded Files Array:", [...uploadedFiles, ...fileArray]);
  //   }
  // }

  // const handleFileChange = (event, fieldId) => {
  //   const files = event.target.files; // Get uploaded files

  //   // Ensure the field is available and `specificOption` is correctly set
  //   const field = fields.find(f => f.id === fieldId); // Find the field object by its id
  //   const option = field ? field.specificOption : "No Option Selected"; // Use field's specificOption or default

  //   if (files && files.length > 0) {
  //     // Map the files to include the specific option and file metadata
  //     const fileArray = Array.from(files).map((file) => ({
  //       option: option, // Correctly associate the option with the file
  //       file: {
  //         name: file.name,
  //         size: file.size,
  //         type: file.type,
  //         lastModified: file.lastModified,
  //       },
  //     }));

  //     // Add the files with the correct option to the uploadedFiles state
  //     setUploadedFiles((prevFiles) => [...prevFiles, ...fileArray]);

  //     console.log("Uploaded Files:", [...uploadedFiles, ...fileArray]);
  //   }
  // };
  const handleFileChange = (event, fieldId) => {
    const files = event.target.files; // Get uploaded files

    // Ensure the field is available and `specificOption` is correctly set
    const field = fields.find((f) => f.id === fieldId); // Find the field object by its id
    const option = field ? field.specificOption : "No Option Selected"; // Use field's specificOption or default

    if (files && files.length > 0) {
      // Map the files to include the specific option and file metadata
      const fileArray = Array.from(files).map((file) => ({
        option: option, // Correctly associate the option with the file
        file: {
          name: file.name,
          size: file.size,
          type: file.type,
          lastModified: file.lastModified,
        },
      }));

      // Add the files with the correct option to the uploadedFiles state
      setUploadedFiles((prevFiles) => [...prevFiles, ...fileArray]);

      console.log("Uploaded Files:", [...uploadedFiles, ...fileArray]);
    }
  };

  // const handleOptionChange = (event) => {
  //   setFormData({ ...formData, specificOption: event.target.value });
  // };

  const [fileUploaded, setFileUploaded] = useState(false);
  // const handleFileDelete = (option) => {
  //   // Remove the file based on its option (or another unique identifier)
  //   setUploadedFiles((prevFiles) => prevFiles.filter((file) => file.option !== option));
  // };
  const handleFileDelete = (option) => {
    // Remove the file based on its option (or another unique identifier)
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((file) => file.option !== option)
    );
  };

  const handleFieldDelete = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileChange1 = (event) => {
    const files = event.target.files; // Get uploaded files

    if (files && files.length > 0) {
      setFileUploaded(true); // Indicate a file was uploaded

      // Map files to include option data and file metadata
      const fileArray = Array.from(files).map((file) => ({
        option: formData.specificOption || "No Option Selected", // Ensure the selected option is included
        file: {
          name: file.name,
          size: file.size,
          type: file.type,
          lastModified: file.lastModified,
        },
      }));

      // Save files in the uploadedFiles state
      setUploadedFiles((prevFiles) => [...prevFiles, ...fileArray]);
    } else {
      setFileUploaded(false); // No file uploaded
    }
  };

  // Handle file delete
  const handleFileDelete1 = () => {
    setFileUploaded(false); // Reset uploaded status
    document.getElementById("fileupload").value = ""; // Clear the file input
  };
  const [fields, setFields] = useState([]);

  // const handleButtonClick = () => {
  //   setFields((prev) => [...prev, { id: Math.random(), isVisible: true }]); // Add a new field
  //   const newErrors = {};

  //   // Validate specificOption
  //   if (!formData.specificOption) {
  //     newErrors.specificOption = "This field is required.";
  //   }

  //   // Validate file upload
  //   if (!fileUploaded) {
  //     newErrors.file = "File upload is required.";
  //   }

  //   setErrors(newErrors);

  //   // Proceed only if no errors

  // };
  const handleButtonClick = () => {
    const newErrors = {};

    // Validate specificOption
    if (!formData.specificOption) {
      newErrors.specificOption = "This field is required.";
    }

    // Validate file upload
    if (!fileUploaded) {
      newErrors.file = "File upload is required.";
    }

    setErrors(newErrors);

    // Proceed only if there are no errors
    if (Object.keys(newErrors).length === 0) {
      // Add a new field only if validation passes
      setFields((prev) => [...prev, { id: Math.random(), isVisible: true }]);
    }
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
  // const handleFileChange = (event) => {
  //   const files = event.target.files; // Get uploaded files

  //   if (files && files.length > 0) {
  //     // Map files to the desired structure
  //     const fileArray = Array.from(files).map((file) => ({
  //       option: formData.specificOption || "No Option Selected", // Add the selected option
  //       file: {
  //         name: file.name,
  //         size: file.size,
  //         type: file.type,
  //         lastModified: file.lastModified,
  //       },
  //     }));

  //     // Add files and their associated options to the uploadedFiles array
  //     setUploadedFiles((prevFiles) => {
  //       const newFiles = [...prevFiles, ...fileArray];
  //       console.log("Uploaded Files with Options:", newFiles); // Log updated files with options
  //       return newFiles;
  //     });
  //   }
  // };

  // const handleOptionChange = (event) => {
  //   const value = event.target.value;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     specificOption: value,
  //   }));
  // };

  const handleChangeselect = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      specificOption: "", // Reset the specific option when changing selection
    }));

    // Toggle showOthers based on selection
    if (name === "typeofwork") {
      setShowOthers(value === "others");
    }
  };

  const [showOthers, setShowOthers] = useState(false);

  // const handleChangeselect = (event) => {
  //   const { name, value } = event.target;

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //     specificOption: "",
  //   }));

  //   // Toggle showOthers based on selection
  //   if (name === "typeofwork") {
  //     setShowOthers(value === "others");
  //   }
  // };
  const handleSpecificChange = (event) => {
    const { value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      specificOption: value,
    }));
  };

  const handleSpecificChange1 = (event, fieldId) => {
    const { value } = event.target;
    console.log(`Field ${fieldId} specificOption updated to: ${value}`);

    setFields((prevFields) => {
      const updatedFields = prevFields.map((field) =>
        field.id === fieldId ? { ...field, specificOption: value } : field
      );
      console.log("Updated Fields:", updatedFields); // Check the updated fields
      return updatedFields;
    });
  };

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
  // file valditation


  const handleCommentChange = (newValue) => {
    setFormData((prevData) => ({
        ...prevData,
        commandbox: newValue, // Update only the commandbox property
    }));
    
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
                  <div className="col-12 col-md-3 pt-3  ">
                    <label className="statis-name  mx-2">Entry Date</label>
                    <input
                      type="date"
                      className={`form-control ${
                        errors.entryDateType ? "error" : ""
                      }`}
                      name="entrydate"
                      value={formData.entrydate}
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
                  <div className="col-12 col-md-3 float-start pt-3 ">
                    <label className="statis-name ">Project ID</label>
                    <input
                      className={`form-control ${
                        errors.projectid ? "error" : ""
                      }`}
                      placeholder="Enter the Project Id"
                      onChange={handleChange}
                      name="projectid"
                      value={formData.projectid}
                      required
                    />
                  </div>

                  {/* <div className="row  mt-2 pt-3   p-3 ">
                    <div className="col-12 col-md-4 ">
                      <label className="statis-name">Select Document</label>

                      {formData.typeofwork === "others" ? (
                        <input
                          type="text"
                          className={`form-control ${
                            errors.specificOption ? "error" : ""
                          }`}
                          name="specificOption"
                          value={formData.specificOption}
                          onChange={handleSpecificChange}
                          placeholder="Enter Others Option"
                          required
                        />
                      ) : (
                        <select
                          className={`form-select ${
                            errors.specificOption ? "error" : ""
                          }`}
                          name="specificOption"
                          value={formData.specificOption}
                          onChange={handleSpecificChange}
                          required
                        >
                          <option value="" disabled selected>
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
                      <div
                        className={`form-control d-flex justify-content-end ${
                          errors.file ? "error" : ""
                        }`}
                      >
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

                        // disabled={
                        //   !fileUploaded ||
                        //   !formData.specificOption ||
                        //   fields.some((field) => field.isVisible && !field.fileUploaded) // Ensure all visible fields have files uploaded
                        // }
                      >
                        Add +
                      </button>
                    </div>
                  </div>
                  {fields.map(
                    (field) =>
                      field.isVisible && (
                        <div key={field.id} className="row pt-1 p-3">
                          <div className="col-12 col-md-4">
                            {formData.typeofwork === "others" ? (
                              <input
                                type="text"
                                className={`form-control ${
                                  errors[field.id] ? "error" : ""
                                }`}
                                name={`specificOption-${field.id}`} // Unique name for this field
                                value={field.specificOption || ""} // Ensure it defaults to empty if no value is set
                                onChange={(event) =>
                                  handleSpecificChange1(event, field.id)
                                } // Update with field ID
                                placeholder="Enter Others Option"
                                required
                              />
                            ) : (
                              <select
                                className={`form-select ${
                                  errors[field.id] ? "error" : ""
                                }`}
                                name={`specificOption-${field.id}`} // Unique name for this field
                                value={field.specificOption} // Ensure it defaults to empty if no value is set
                                onChange={(e) =>
                                  handleSpecificChange1(e, field.id)
                                } // Pass field ID for state update
                                required
                              >
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
                            )}
                          </div>
                          <div className="col-12 col-md-4">
                            <div
                              className={`form-control d-flex justify-content-end ${
                                errors.specificOption ? "error" : ""
                              }`}
                            >
                              <input
                                type="file"
                                id={`fileupload-${field.id}`}
                                className="file-upload-input"
                                onChange={(e) => handleFileChange(e, field.id)}
                                accept=""
                              />
                              {!field.fileUploaded ? (
                                <label
                                  htmlFor={`fileupload-${field.id}`}
                                  className="file-icon"
                                >
                                  <PiCloudArrowUpLight />
                                </label>
                              ) : (
                                // Corrected delete icon condition
                                uploadedFiles.map(
                                  (file, index) =>
                                    file.option !== "No Option Selected" && (
                                      <RiDeleteBin6Line
                                        key={index} // Add key to each delete icon
                                        className="file-del-icon"
                                        onClick={() =>
                                          handleFileDelete(file.option)
                                        } // Pass the option to delete
                                      />
                                    )
                                )
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
                  )} */}

{/* <div className="container mt-5">
      {formData.map((fieldData, index) => (
        <div className="row  mt-2 pt-3 p-3" key={index}>
          <div className="col-12 col-md-4">
            <label className="statis-name">Select Document</label>

            {fieldData.typeofwork === "others" ? (
              <input
                type="text"
                className={`form-control ${errors[`specificOption-${index}`] ? "border-danger" : ""}`}
                name="specificOption"
                value={fieldData.specificOption}
                onChange={(e) => handleChangeSelect(index, e)}
                placeholder="Enter Others Option"
                required
              />
            ) : (
              <select
                className={`form-select ${errors[`specificOption-${index}`] ? "border-danger" : ""}`}
                name="specificOption"
                value={fieldData.specificOption}
                onChange={(e) => handleChangeSelect(index, e)}
                required
              >
                <option value="" disabled>
                  Select a specific option
                </option>
                {optionsMapping[fieldData.typeofwork]?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
            {errors[`specificOption-${index}`] && (
              <small className="text-danger">This field is required.</small>
            )}
          </div>

          <div className="col-12 col-md-4">
            <label className="statis-name">File</label>
            <div
              className={`form-control d-flex justify-content-end ${errors[`file-${index}`] ? "border-danger" : ""}`}
            >
              <input
                type="file"
                id={`fileupload-${index}`}
                className="file-upload-input"
                onChange={(e) => handleFileChange(index, e)}
              />
              {!fieldData.file && (
                <label htmlFor={`fileupload-${index}`} className="file-icon">
                  <PiCloudArrowUpLight />
                </label>
              )}
              {fieldData.file && (
                <RiDeleteBin6Line
                  className="file-del-icon"
                  onClick={() => handleFileDelete(index)}
                />
              )}
            </div>
            {errors[`file-${index}`] && (
              <small className="text-danger">File is required.</small>
            )}
          </div>

          <div className="col d-flex justify-content-start py-3 mt-2">
            <button
              type="button"
              className="save-form-add"
              onClick={() => handleButtonClick(index)}
            >
              Add +
            </button>
            <button
              type="button"
              className="save-form-del ms-3"
              onClick={() => handleDeleteField(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <div className="col d-flex justify-content-start py-3 mt-2">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddField}
        >
          Add Another Field
        </button>
      </div>
    </div> */}

                  <div className="col-md-12 float-start pt-1 py-3">
                    <label className="client-name-pop ">
                      Client Information
                    </label>
                  </div>

                  <div className="col-12 col-md-4 float-start pt-2  ">
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
                      className={`form-control ${errors.budget ? "error" : ""}`}
                      placeholder="Enter Budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12 col-md-4 float-start pt-4  ">
                    <h5 className="statis-name ">Process Status</h5>
                    <select
                      className={`form-select  ${
                        errors.processStatus ? "error" : ""
                      }`}
                      name="processStatus"
                      value={formData.processStatus}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled selected>
                        Select Process status
                      </option>
                      <option value="one">Not Assigned</option>
                      <option value="two">Pending - Statistics</option>
                      <option value="three">Pending - Writer</option>
                      <option value="four">Pending - Reviewer</option>
                      <option value="five">Pending - Author</option>
                      <option value="six">Completed</option>
                      <option value="seven">In-discussion</option>
                      <option value="eight">Waiting for Submission</option>
                      <option value="nine">Withdrawn</option>
                      <option value="ten">Pending - Email</option>
                      <option value="eleven">To Do</option>
                      <option value="twelve">In Work</option>
                      <option value="thirteen">Submitted</option>
                      <option value="fourteen">Pending </option>
                      <option value="fifteen">Reviews</option>
                    </select>
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
                   
                    {/* <RichEditor
                    value={formData.commandbox} // Controlled value
                    onChange={handleCommentChange} // Update state on change
                    name="commandbox"
                /> */}
                   <RichEditor setFormData={setFormData} />
      
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
                    <div className="gap-3 px-4 d-flex  flex-wrap">
                      <div>
                        <input
                          type="checkbox"
                          id="writer"
                          onClick={handleWriterClick}
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
                  )}
                  {showWriter && (
                    <div className="row w-100 pt-2 d-flex flex-wrap ">
                      <div className="col-12 col-md-6 col-lg  w-100 pt-2">
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
                          <option value="" disabled selected>
                            Select writer
                          </option>
                          <option value="one">One</option>
                          <option value="two">Two</option>
                          <option value="three">Three</option>
                        </select>
                      </div>
                      <div className="col-12 col-md-6 col-lg   pt-2 ">
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
                      <div className="col-12 col-md-6 col-lg  pt-2 ">
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
                          <option value="" disabled selected>
                            Select Writer Status
                          </option>
                          <option value="one">Completed</option>
                          <option value="two">Need support </option>
                          <option value="three">Not Assigned</option>
                          <option value="four">Plag correction </option>
                          <option value="five">Correction 1 </option>
                          <option value="six">Correction 2 </option>
                          <option value="seven">Correction 3 </option>
                        </select>
                      </div>
                      <div className="col-12 col-md-6 col-lg   pt-2">
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
                      <div className="col-12 col-md-6 col-lg   pt-2">
                        <label className="statis-name ">
                          {" "}
                          Writer Project Duration
                        </label>
                        <div
                          className={` form-control d-flex  ${
                            errors.durationInput ? "error" : ""
                          }`}
                        >
                          <input
                            className={`duration-input ${
                              errors.duration ? "error" : ""
                            }`}
                            type="text"
                            name="duration"
                            value={formData.duration}
                            onChange={handleChange}
                            required
                          />
                          <select
                            className={`duration-select ${
                              errors.duration ? "error" : ""
                            }`}
                            name="writerdurationUnit"
                            value={formData.writerdurationUnit}
                            onChange={handleChange}
                            required
                          >
                            <option value="" disabled selected>
                              Hrs/Days
                            </option>
                            <option value="hrs">Hrs</option>
                            <option value="days">Days</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {showReviewer && (
                    <div className="row w-100 pt-4 d-flex flex-wrap">
                      <div className="col-12 col-md-6 col-lg ">
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
                          <option value="" disabled selected>
                            Select an option
                          </option>

                          <option value="one">one</option>
                          <option value="two">two</option>
                          <option value="three">three</option>
                        </select>
                      </div>
                      <div className="col-12 col-md-6 col-lg ">
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
                      <div className="col-12 col-md-6 col-lg ">
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
                          <option value="" disabled selected>
                            Select Reviewer status
                          </option>{" "}
                          <option value="one">Completed</option>
                          <option value="two">Need support </option>
                          <option value="three">Not Assigned</option>
                          <option value="four">Plag correction </option>
                          <option value="five">Correction 1 </option>
                          <option value="six">Correction 2 </option>
                          <option value="seven">Correction 3 </option>
                        </select>
                      </div>
                      <div className="col-12 col-md-6 col-lg ">
                        <label className="statis-name ">
                          Reviewer Status date
                        </label>
                        <input
                          type="date"
                          className={`form-control ${
                            errors.reviwerstatusDate ? "error" : ""
                          }`}
                          name="reviwerStatusdate"
                          value={formData.reviwerStatusdate}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12 col-md-6 col-lg ">
                        <label className="statis-name ">
                          {" "}
                          Reviewer Project Duration
                        </label>
                        <div
                          className={` form-control d-flex  ${
                            errors.reviwerdurationInput ? "error" : ""
                          }`}
                        >
                          <input
                            className={`duration-input ${
                              errors.reviwerduration ? "error" : ""
                            }`}
                            type="text"
                            name="reviwerduration"
                            value={formData.reviwerduration}
                            onChange={handleChange}
                            required
                          />
                          <select
                            className={`duration-select ${
                              errors.reviwerduration ? "error" : ""
                            }`}
                            name="reviwerdurationUnit"
                            value={formData.reviwerdurationUnit}
                            onChange={handleChange}
                            required
                          >
                            <option value="" disabled selected>
                              Hrs/Days
                            </option>
                            <option value="hrs">Hrs</option>
                            <option value="days">Days</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {showStatistican && (
                    <div className="row w-100 pt-4">
                      <div className="col-12 col-md-6 col-lg ">
                        <label className="statis-name ">Statistican</label>
                        <select
                          className={`form-control  ${
                            errors.statistican ? "error" : ""
                          }`}
                          name="statistican"
                          value={formData.statistican}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled selected>
                            Select Statistican
                          </option>
                          <option value="one">One</option>
                          <option value="two">Two</option>
                          <option value="three">Three</option>
                        </select>
                      </div>
                      <div className="col-12 col-md-6 col-lg  ">
                        <label className="statis-name ">
                          Statistican Assigned Date
                        </label>
                        <input
                          type="date"
                          className={`form-control ${
                            errors.statisticanDate ? "error" : ""
                          }`}
                          name="statisticanDate"
                          value={formData.statisticanDate}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12 col-md-6 col-lg  ">
                        <label className="statis-name ">
                          {" "}
                          Statistican Status
                        </label>
                        <select
                          className={`form-control  ${
                            errors.statisticanStatus ? "error" : ""
                          }`}
                          name="statisticanStatus"
                          value={formData.statisticanStatus}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled selected>
                            Select Statistican Status
                          </option>
                          <option value="one">On going</option>
                          <option value="two">Query </option>
                          <option value="three">Correction 1 </option>
                          <option value="four">Completed </option>
                          <option value="five">Client review </option>
                          <option value="six">Not Assigned </option>
                        </select>
                      </div>
                      <div className="col-12 col-md-6 col-lg ">
                        <label className="statis-name ">
                          Statistican status Date
                        </label>

                        <input
                          type="date"
                          className={`form-control ${
                            errors.statisticanStatusDate ? "error" : ""
                          }`}
                          name="statisticanStatusDate"
                          value={formData.statisticanStatusDate || ""}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12 col-md-6 col-lg  ">
                        <label className="statis-name ">
                          {" "}
                          Statistican Project Duration
                        </label>
                        <div
                          className={` form-control d-flex  ${
                            errors.statisticandurationInput ? "error" : ""
                          }`}
                        >
                          <input
                            className={`duration-input ${
                              errors.statisticanduration ? "error" : ""
                            }`}
                            type="text"
                            name="statisticanduration"
                            value={formData.statisticanduration}
                            onChange={handleChange}
                            required
                          />
                          <select
                            className={`duration-select ${
                              errors.statisticanduration ? "error" : ""
                            }`}
                            name="statisticandurationUnit"
                            value={formData.statisticandurationUnit}
                            onChange={handleChange}
                            required
                          >
                            <option value="" disabled selected>
                              Hrs/Days
                            </option>
                            <option value="hrs">Hrs</option>
                            <option value="days">Days</option>
                          </select>
                        </div>
                                  
                      </div>
                    </div>
                  )}

                  {showJournal && (
                    <div className="row w-100 pt-1">
                      <div className="col-12 col-md-6 col-lg ">
                        <label className="statis-name ">Journal</label>
                        <select
                          className={`form-control  ${
                            errors.journal ? "error" : ""
                          }`}
                          name="journal"
                          value={formData.journal}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled selected>
                            Select Journal
                          </option>
                          <option value="one">One</option>
                          <option value="two">Two</option>
                          <option value="three">Three</option>
                        </select>
                      </div>
                      <div className="col-12 col-md-6 col-lg  ">
                        <label className="statis-name ">
                          Journal Assigned Date
                        </label>
                        <input
                          type="date"
                          className={`form-control ${
                            errors.journalDate ? "error" : ""
                          }`}
                          name="journalDate"
                          value={formData.journalDate}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12 col-md-6 col-lg  ">
                        <label className="statis-name "> JournalStatus</label>
                        <select
                          className={`form-control  ${
                            errors.journalStatus ? "error" : ""
                          }`}
                          name="journalStatus"
                          value={formData.journalStatus}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled selected>
                            Select Journal Status
                          </option>
                          <option value="one">Pending - Author</option>
                          <option value="two">Waiting for Submission</option>
                          <option value="three">Peer Review</option>
                          <option value="four">Review Client</option>
                          <option value="five">Rejected </option>
                          <option value="six">Submitted </option>
                          <option value="seven">Resubmission </option>
                          <option value="eight">Reviewer comments </option>
                          <option value="nine">Accepted </option>
                        </select>
                      </div>
                      <div className="col-12 col-md-6 col-lg ">
                        <label className="statis-name ">
                          Journal status Date
                        </label>

                        <input
                          type="date"
                          className={`form-control ${
                            errors.journalStatusDate ? "error" : ""
                          }`}
                          name="journalStatusDate"
                          value={formData.journalStatusDate || ""}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12 col-md-6 col-lg  ">
                        <label className="statis-name ">
                          {" "}
                          Journal Project Duration
                        </label>
                        <div
                          className={` form-control d-flex  ${
                            errors.journaldurationInput ? "error" : ""
                          }`}
                        >
                          <input
                            className={`duration-input ${
                              errors.journalduration ? "error" : ""
                            }`}
                            type="text"
                            name="journalduration"
                            value={formData.journalduration}
                            onChange={handleChange}
                            required
                          />
                          <select
                            className={`duration-select ${
                              errors.journalduration ? "error" : ""
                            }`}
                            name="journaldurationUnit"
                            value={formData.journaldurationUnit}
                            onChange={handleChange}
                            required
                          >
                            <option value="" disabled selected>
                              Hrs/Days
                            </option>
                            <option value="hrs">Hrs</option>
                            <option value="days">Days</option>
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
