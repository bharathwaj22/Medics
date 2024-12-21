import React, { useState } from "react";

import Sider from "../components/Sider.js";
import Header from "../components/Header.js";
import { Link } from "react-router-dom";
import Breadcrumbs from "../routes/Breadcrumbs";

function Process_statistic() {
  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };
  const [formData, setFormData] = useState({
    processTitle: "",
    processStatus: "",
    processStatusDate: getTodayDate() || "",
    processComments: "",
    writer: "",
    writerDate: getTodayDate() || "",
    writerStatus: "",
    writerStatusDate: getTodayDate() || "",
    reviwer: "",
    reviwerAssignedDate: getTodayDate() || "",
    reviwerStatus: "",
    reviwerStatusdate: getTodayDate() || "",
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
    if (!formData.processTitle) formErrors.processTitle = " enter title";
    if (!formData.processStatus)
      formErrors.processStatus = " entry process status";
    if (!formData.processStatusDate) formErrors.processStatusDate = "entrydate";

    if (!formData.processComments) formErrors.processComments = "entercomments";
    if (!formData.writer) formErrors.writer = "enterwriter";
    if (!formData.writerDate) formErrors.writerDate = "writerdate";
    if (!formData.writerStatusDate)
      formErrors.writerStatusDate = "writerstatusdate";
    if (!formData.writerStatus) formErrors.writerStatus = " writerstatus";
    if (!formData.reviwer) formErrors.reviwer = " enterreviwer";
    if (!formData.reviwerAssignedDate)
      formErrors.reviwerAssignedDate = "enterreviwerassigneddate";
    if (!formData.reviwerStatus)
      formErrors.reviwerStatus = "enterreviwerstatus";
    if (!formData.reviwerstatusDate)
      formErrors.reviwerstatusDate = "reviwerstatusdate ";
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
    if (!formData.writerProjectDuration) {
      formErrors.writerProjectDuration = "Writer Project Duration is required";
    }
    if (!formData.duration) {
      setErrors({ duration: "Please select either Hrs or Days." });
      if (!formData.durationInput) {
        formErrors.durationInput = "Please enter a duration.";
      }
    }

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

  const [showWriter, setShowWriter] = useState(false);
  const [showReviewer, setShowReviewer] = useState(false);
  const [showStatistican, setShowStatistican] = useState(false);
  const [showJournal, setShowJournal] = useState(false);

  const handleWriterClick = () => {
    setShowWriter(!showWriter);
  };
  const handleStatisticanClick = () => {
    setShowStatistican(!showStatistican);
  };

  const handleReviewerClick = () => {
    setShowReviewer(!showReviewer);
  };
  const handleJournalClick = () => {
    setShowJournal(!showJournal);
  };
  const [isReadOnly, setIsReadOnly] = React.useState(true);

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

            <div className="col-12  wapper  w-100 mt-3 ">
              <div className="pt-2 px-2 d-none d-md-block">
                <Breadcrumbs></Breadcrumbs>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row w-100 mt-2   ">
                  {/* <div className="col-md-3 float-start pt-5 ">
                    <label className="statis-name ">Process Title</label>
                    <select
                      className={`form-control  ${
                        errors.processTitle ? "error" : ""
                      }`}
                      name="processTitle"
                      value={formData.processTitle}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select Process Title
                      </option>

                      <option value="Statistics">Statistics</option>
                      <option value="Manuscript">Manuscript</option>
                      <option value="Thesis">Thesis</option>
                      <option value="Presentation">Presentation</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                  <div className="col-md-3 float-start pt-5  ">
                    <label className="statis-name ">Process Status</label>
                    <select
                      className={`form-control  ${
                        errors.processStatus ? "error" : ""
                      }`}
                      name="processStatus"
                      value={formData.processStatus}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select Process status
                      </option>
                      <option value="one">Not Assigned</option>
                      <option value="two">Pending - Statistics</option>
                      <option value="three">Pending - Writer</option>
                      <option value="four">Pending - Reviewer</option>
                      <option value="five">Pending - Author</option>
                      <option value="six">Completed</option>
                      <option value="seven">In-discussion
                      </option>
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
                  <div className="col-md-3 float-start pt-5  ">
                    <label className="statis-name ">Process Status Date</label>
                    <input
                      type="date"
                      className={`form-control ${
                        errors.processStatusDate ? "error" : ""
                      }`}
                      name="processStatusDate"
                      value={formData.processStatusDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-3 float-start pt-5 ">
                    <label className="statis-name ">Commands Box</label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.processComments ? "error" : ""
                      }`}
                      name="processComments" // Match the key in formData (case-sensitive)
                      placeholder="Enter the Comments"
                      value={formData.processComments || ""} // Ensure a default value
                      onChange={handleChange}
                      required
                    />
                  </div> */}
                   <div className="row mt-1 mx-2 py-4">
              
              
              <div className="col-md-3 float-start pt-2 ">
                <label className="statis-name ">Entry Date</label>

                <input
                  type="text"
                  className="form-control1 px-2"
                  readOnly={isReadOnly}
                />
              </div>
              <div className="col-md-3 float-start pt-2 ">
                <label className="statis-name ">Title</label>

                <input
                  type="text"
                  className="form-control1 px-2 "
                  readOnly={isReadOnly}
                />
              </div>
              <div className="col-md-3 float-start pt-2 ">
                <label className="statis-name ">Type Of work</label>
                <input
                  type="text"
                  className="form-control1 px-2"
                  readOnly={isReadOnly}
                />
              </div>
              <div className="col-md-3 float-start pt-2 ">
                <label className="statis-name ">Project ID</label>
                <input
                  type="text"
                  className="form-control1 px-2"
                  readOnly={isReadOnly}
                />
              </div>
               
              <div className="col-md-3 float-start pt-3 ">
                <label className="statis-name "> Document</label>
                <input
                  type="text"
                  className="form-control1 px-2"
                  readOnly={isReadOnly}
                  
                />
              </div>
              <div className="col-md-3 float-start pt-5 ">
                
                <button className="modula-main">
                View</button>
              </div>

              <div className="col-12">
                <label className="client-name-pop py-2 mt-2 ">
                  CLIENT INFORMATION
                </label>
              </div>

              <div className="col-md-4 float-start pt-2 ">
                <label className="statis-name ">Client Name</label>
                <input
                  type="none"
                  className="form-control1 px-2"
                  readOnly={isReadOnly}
                />
              </div>
              <div className="col-md-4 float-start pt-2 ">
                <label className="statis-name ">Email ID</label>
                <input
                  type="text"
                  className="form-control1 px-2"
                  readOnly={isReadOnly}
                />
              </div>
              <div className="col-md-4 float-start pt-2 ">
                <label className="statis-name  ">Contact No</label>
                <input
                  type="text"
                  className="form-control1 px-2"
                  readOnly={isReadOnly}
                />
              </div>
              <div className="col-md-4 float-start pt-4 ">
                <label className="statis-name ">Institute</label>
                <input
                  type="text"
                  className="form-control1 px-2"
                  readOnly={isReadOnly}
                />
              </div>

              

              <div className="col-md-4 float-start pt-4 ">
                <label className="statis-name  ">Department</label>
                <input
                  type="text"
                  className="form-control1 px-2"
                  readOnly={isReadOnly}
                />
              </div>
              <div className="col-md-4 float-start pt-4 ">
                <label className="statis-name  ">Profession</label>
                <input
                  type="email"
                  className="form-control1 px-2"
                  readOnly={isReadOnly}
                />
              </div>
              <div className="col-md-4 float-start pt-4 ">
                <label className="statis-name  ">Budget</label>
                <input
                  type="email"
                  className="form-control1 px-2 "
                  readOnly={isReadOnly}
                />
              </div>
              <div className="col-md-4 float-start pt-4 ">
                <label className="statis-name  ">Process Status</label>
                <input
                  type="email"
                  className="form-control1 px-2 "
                  readOnly={isReadOnly}
                />
              </div>
              <div className="col-md-4 float-start pt-4 ">
                <label className="statis-name  ">Process Status Date</label>
                <input
                  type="email"
                  className="form-control1 px-2 "
                  readOnly={isReadOnly}
                />
              </div>

              <div className="col-md-4 float-start pt-4 ">
                <label className="statis-name  ">Hierarchical</label>
                <input
                  type="email"
                  className="form-control1 px-2 "
                  readOnly={isReadOnly}
                />
              </div>
              </div>

                  <div className="d-flex flex-wrap  gap-3 px-5 pt-3">
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
                  {/* {showWriter && (
                    <>
                      <div className="col-md-3 float-start pt-2">
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
                      <div className="col-md-3 float-start pt-2 ">
                        <label className="statis-name ">Writer Assigned Date</label>
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
                      <div className="col-md-3 float-start pt-2 ">
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
                      <div className="col-md-3 float-start pt-2">
                        <label className="statis-name ">Writer status Date</label>

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
                          <input
                            className={`duration-input ${
                              errors.durationInput ? "error" : ""
                            }`}
                            type="text"
                            name="durationInput"
                            value={formData.durationInput}
                            onChange={handleChange}
                            required
                          />
                          <select
                            className={`duration-select ${
                              errors.duration ? "error" : ""
                            }`}
                            name="duration"
                            value={formData.duration}
                            onChange={handleChange}
                            required
                          >
                            <option value="" disabled>
                              Hrs/Days
                            </option>
                            <option value="hrs">Hrs</option>
                            <option value="days">Days</option>
                          </select>
                        </div>
                      </div>
                      
                    </>
                  )} */}
                  {/* {showWriter && (
                    <div className="row w-100 pt-2 ">
                      <div className="col-12 col-md  pt-2">
                        <label className="statis-name ">Writer</label>
                        <select
                          className={`form-select  ${
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
                      <div className="col-12 col-md  pt-2 ">
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
                      <div className="col-12 col-md pt-2 ">
                        <label className="statis-name "> Writer Status</label>
                        <select
                          className={`form-select  ${
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
                      <div className="col-12 col-md  pt-2">
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
                      <div className="col-12 col-md  pt-2">
                        <label className="statis-name ">
                          {" "}
                          Writer Project Duration
                        </label>
                        <div className="d-flex form-select">
                          <input
                            className={`duration-input ${
                              errors.durationInput ? "error" : ""
                            }`}
                            type="text"
                            name="durationInput"
                            value={formData.durationInput}
                            onChange={handleChange}
                            required
                          />
                          <select
                            className={`duration-select ${
                              errors.duration ? "error" : ""
                            }`}
                            name="duration"
                            value={formData.duration}
                            onChange={handleChange}
                            required
                          >
                            <option value="" disabled>
                              Hrs/Days
                            </option>
                            <option value="hrs">Hrs</option>
                            <option value="days">Days</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )} */}

                  {/* {showReviewer && (
                  <><div className="col-md-3 float-start pt-5">
                      <label className="statis-name "> Reviewer</label>
                      <select
                        className={`form-control  ${errors.reviwer ? "error" : ""}`}
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
                    </div><div className="col-md-3 float-start pt-5">
                        <label className="statis-name ">Reviewer Assigned Date</label>
                        <input
                          type="date"
                          className={`form-control ${errors.reviwerAssignedDate ? "error" : ""}`}
                          name="reviwerAssignedDate"
                          value={formData.reviwerAssignedDate || ""}
                          onChange={handleChange}
                          required />
                      </div><div className="col-md-3 float-start pt-5 ">
                        <label className="statis-name ">Reviewer Status</label>

                        <select
                          className={`form-control ${errors.reviwerStatus ? "error" : ""}`}
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
                      </div><div className="col-md-3 float-start pt-5">
                        <label className="statis-name ">Reviewer Status date</label>
                        <input
                          type="date"
                          className={`form-control ${errors.reviwerstatusDate ? "error" : ""}`}
                          name="reviwerstatusDate"
                          value={formData.reviwerstatusDate}
                          onChange={handleChange}
                          required />
                      </div></>

                     )} */}
                  {/* {showReviewer && (
                    <div className="row w-100 pt-4">
                      <div className="col-12 col-md  ">
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
                      <div className="col-12 col-md  ">
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
                      <div className="col-12 col-md  ">
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
                      <div className="col-12 col-md  ">
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
                      <div className="col-12 col-md  ">
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
                  )} */}

                  {/* {showStatistican && (

                  <><div className="col-12 col-md float-start pt-5">
                      <label className="statis-name ">Statistican</label>
                      <select
                        className={`form-control  ${errors.writer ? "error" : ""}`}
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
                    </div><div className="col-12 col-md float-start pt-5 ">
                        <label className="statis-name ">Statistican Assigned Date</label>
                        <input
                          type="date"
                          className={`form-control ${errors.writerDate ? "error" : ""}`}
                          name="writerDate"
                          value={formData.writerDate}
                          onChange={handleChange}
                          required />
                      </div>
                      <div className="col-12 col-md float-start pt-5 ">
                        <label className="statis-name "> Statistican Status</label>
                        <select
                          className={`form-control  ${errors.writerStatus ? "error" : ""}`}
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
                      <div className="col-12 col-md float-start pt-5">
                        <label className="statis-name ">Statistican status Date</label>

                        <input
                          type="date"
                          className={`form-control ${errors.writerStatusDate ? "error" : ""}`}
                          name="writerStatusDate"
                          value={formData.writerStatusDate || ""}
                          onChange={handleChange}
                          required />
                      </div>
                      <div className="col-12 col-md float-start pt-5 ">
                      <label className="statis-name "> Statistican Status</label>
                      <select
                        className={`form-control  ${errors.writerStatus ? "error" : ""}`}
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
                    </div></>
                )} */}
                  {/* {showStatistican && (
                    <div className="row w-100 pt-4">
                      <div className="col-12 col-md float-start ">
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
                          <option value="" disabled selected>
                            Select Statistican
                          </option>
                          <option value="one">One</option>
                          <option value="two">Two</option>
                          <option value="three">Three</option>
                        </select>
                      </div>
                      <div className="col-12 col-md float-start  ">
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
                      <div className="col-12 col-md float-start  ">
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
                      <div className="col-12 col-md float-start ">
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
                      <div className="col-12 col-md float-start  l">
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
                      <div className="col-12 col-md float-start ">
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
                          <option value="" disabled selected>
                            Select Journal
                          </option>
                          <option value="one">One</option>
                          <option value="two">Two</option>
                          <option value="three">Three</option>
                        </select>
                      </div>
                      <div className="col-12 col-md float-start  ">
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
                      <div className="col-12 col-md float-start  ">
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
                      <div className="col-12 col-md float-start ">
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
                      <div className="col-12 col-md float-start  l">
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
                  )} */}
                   {showWriter && (
                    <div className="row w-100 pt-2 p-4 d-flex flex-wrap ">
                      <div className="col-12 col-md-6 col-lg  w-100 pt-2">
                        <label className="statis-name ">Writer</label>
                        <select
                          className={`form-select  ${
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
                          className={`form-select  ${
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
                    <div className="row w-100 pt-2 d-flex flex-wrap p-4 ">
                      <div className="col-12 col-md-6 col-lg ">
                        <label className="statis-name "> Reviewer</label>
                        <select
                          className={`form-select  ${
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
                          className={`form-select ${
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
                          className="form-control"
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
                    <div className="row w-100 pt-2 px-4">
                      <div className="col-12 col-md-6 col-lg ">
                        <label className="statis-name ">Statistican</label>
                        <select
                          className={`form-select  ${
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
                          className={`form-select  ${
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
                    <div className="row w-100 pt-2 p-4">
                      <div className="col-12 col-md-6 col-lg ">
                        <label className="statis-name ">Journal</label>
                        <select
                          className={`form-select  ${
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
                          className={`form-select  ${
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

                  <div className="col-12 d-flex justify-content-end mt-1 py-5 gap-3 ">
                    <Link to="/processstatus">
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

export default Process_statistic;
