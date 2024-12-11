import React, { useState } from "react";

import Sider from "../components/Sider.js";
import Header from "../components/Header.js";
import { Link } from "react-router-dom";

function Process_statistic() {
  const [formData, setFormData] = useState({
    processTitle: "",
    processStatus: "",
    processStatusDate: "",
    processComments: "",
    writer: "",
    writerDate: "",
    writerStatus: "",
    writerStatusDate: "",
    reviwer: "",
    reviwerAssignedDate: "",
    reviwerStatus: "",
    reviwerstatusDate: "",
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

  const handleWriterClick = () => {
    setShowWriter(!showWriter);
  };
  const handleStatisticanClick = () => {
    setShowStatistican(!showStatistican);
  };

  const handleReviewerClick = () => {
    setShowReviewer(!showReviewer);
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

            <div className="col-12  wapper  w-100 mt-3 ">
              <form onSubmit={handleSubmit}>
                <div className="row w-100 mt-2 mx-1  ">
                  <div className="col-md-3 float-start pt-5 ">
                    <h5 className="statis-name ">Process Title</h5>
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
                    <h5 className="statis-name ">Process Status</h5>
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
                      <option value="one">One</option>
                      <option value="two">Two</option>
                      <option value="three">Three</option>
                    </select>
                  </div>
                  <div className="col-md-3 float-start pt-5  ">
                    <h5 className="statis-name ">Process Status Date</h5>
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
                    <h5 className="statis-name ">Commands Box</h5>
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
                  </div>

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
                  {showWriter && (
                    <>
                      <div className="col-md-3 float-start pt-2">
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
                      <div className="col-md-3 float-start pt-2 ">
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
                      <div className="col-md-3 float-start pt-2 ">
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
                      <div className="col-md-3 float-start pt-2">
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
                      
                    </>
                  )}
                  
                  {showReviewer && (
                  <><div className="col-md-3 float-start pt-5">
                      <h5 className="statis-name "> Reviewer</h5>
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
                        <h5 className="statis-name ">Reviewer Assigned Date</h5>
                        <input
                          type="date"
                          className={`form-control ${errors.reviwerAssignedDate ? "error" : ""}`}
                          name="reviwerAssignedDate"
                          value={formData.reviwerAssignedDate || ""}
                          onChange={handleChange}
                          required />
                      </div><div className="col-md-3 float-start pt-5 ">
                        <h5 className="statis-name ">Reviewer Status</h5>

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
                        <h5 className="statis-name ">Reviewer Status date</h5>
                        <input
                          type="date"
                          className={`form-control ${errors.reviwerstatusDate ? "error" : ""}`}
                          name="reviwerstatusDate"
                          value={formData.reviwerstatusDate}
                          onChange={handleChange}
                          required />
                      </div></>

                     )}

                     {showStatistican && (

                  <><div className="col float-start pt-5">
                      <h5 className="statis-name ">Statistican</h5>
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
                    </div><div className="col float-start pt-5 ">
                        <h5 className="statis-name ">Statistican Assigned Date</h5>
                        <input
                          type="date"
                          className={`form-control ${errors.writerDate ? "error" : ""}`}
                          name="writerDate"
                          value={formData.writerDate}
                          onChange={handleChange}
                          required />
                      </div>
                      <div className="col float-start pt-5 ">
                        <h5 className="statis-name "> Statistican Status</h5>
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
                      <div className="col float-start pt-5">
                        <h5 className="statis-name ">Statistican status Date</h5>

                        <input
                          type="date"
                          className={`form-control ${errors.writerStatusDate ? "error" : ""}`}
                          name="writerStatusDate"
                          value={formData.writerStatusDate || ""}
                          onChange={handleChange}
                          required />
                      </div>
                      <div className="col float-start pt-5 ">
                      <h5 className="statis-name "> Statistican Status</h5>
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
                )}

                  <div className="col-md-12 d-flex justify-content-end mt-4 px-1 py-5 gap-3 ">
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
