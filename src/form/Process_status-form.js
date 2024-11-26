import React, { useState } from "react";

import Sider from "../components/Sider.js";
import Headerenter from "../components/Headerenter.js";



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
    if (!formData.processStatusDate)
      formErrors.processStatusDate = "entrydate";

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
            <div className="row  ">
              <div className="col-12  d-flex justify-content-center pt-3  ">
                {/* <div>
                <Process_header />
                </div> */}
              </div>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="row w-100 mt-5 pt-3  ">
              
              <div className="col-3">
                <h5 className="statis-name mx-3">Process Title</h5>
                <select
                  className={`mx-3 client-info1  ${
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
                  <option value="one">One</option>
                  <option value="two">Two</option>
                  <option value="three">Three</option>
                </select>
              </div>
              <div className="col-3  ">
                <h5 className="statis-name mx-3">Process Status</h5>
                <select
                  className={`mx-3 client-info1  ${
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
              <div className="col-3  ">
                <h5 className="statis-name mx-3">Process Status Date</h5>
                <input
                  type="date"
                  className={`client-info1 mx-3 ${
                    errors.processStatusDate ? "error" : ""
                  }`}
                  name="processStatusDate"
                  value={formData.processStatusDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-3 ">
                <h5 className="statis-name mx-3"> Process Commands</h5>
                <input
                  type="text"
                  className={`client-info1 mx-3 ${
                    errors.processComments ? "error" : ""
                  }`}
                  name="processComments" // Match the key in formData (case-sensitive)
                  placeholder="Enter the Comments"
                  value={formData.processComments || ""} // Ensure a default value
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            {/* <div className="row mt-2 w-100 ">
              <div className="col-11   mt-2">
                <h5 className="client-name mx-5">Client Information</h5>
              </div>
            </div> */}
            <div className="row w-100 mt-5 pt-3  ">
              <div className="col-3">
                <h5 className="statis-name mx-3">Writer</h5>
                <select
                  className={`mx-3 client-info1  ${
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
              <div className="col-3  ">
                <h5 className="statis-name mx-3">Writer Assigned Date</h5>
                <input
                  type="date"
                  className={`client-info1 mx-3 ${
                    errors.writerDate ? "error" : ""
                  }`}
                  name="writerDate"
                  value={formData.writerDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-3  ">
                <h5 className="statis-name mx-3"> Writer Status</h5>
                <select
                  className={`mx-3 client-info1  ${
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
              <div className="col-3 ">
                <h5 className="statis-name mx-3">Writer status Date</h5>

                <input
                  type="date"
                  className={`client-info1 mx-3 ${
                    errors.writerStatusDate ? "error" : ""
                  }`}
                  name="writerStatusDate"
                  value={formData.writerStatusDate || ""}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row w-100 mt-5 pt-3  ">
              <div className="col-3">
                <h5 className="statis-name mx-3"> Reviewer</h5>
                <select
                  className={`mx-3 client-info1  ${
                    errors.reviwer ? "error" : ""
                  }`}
                  name="reviwer"
                  value={formData.reviwer || ""}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select an option</option>{" "}
                  {/* Default placeholder */}
                  <option value="one">one</option>
                  <option value="two">two</option>
                  <option value="three">three</option>
                </select>
              </div>
              <div className="col-3  ">
                <h5 className="statis-name mx-3">Reviewer Assigned Date</h5>
                <input
                  type="date"
                  className={`client-info1 mx-3 ${
                    errors.reviwerAssignedDate ? "error" : ""
                  }`}
                  name="reviwerAssignedDate"
                  value={formData.reviwerAssignedDate || ""}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-3 ">
                <h5 className="statis-name mx-3">Reviewer Status</h5>

                <select
                  className={`mx-3 client-info1 ${
                    errors.reviwerStatus ? "error" : ""
                  }`}
                  name="reviwerStatus" 
                  value={formData.reviwerStatus || ""} 
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a status</option>{" "}
                  {/* Placeholder option */}
                  <option value="one">One</option>
                  <option value="two">Two</option>
                  <option value="three">Three</option>
                </select>
              </div>
              <div className="col-3  ">
                <h5 className="statis-name mx-3">Reviewer Status date</h5>
                <input
                  type="date"
                  className={`client-info1 mx-3 ${
                    errors.reviwerstatusDate ? "error" : ""
                  }`}
                  name="reviwerstatusDate"
                  value={formData.reviwerstatusDate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row w-100 py-5 ">
              <div className="col-7 mt-2  ">
                  
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

export default Process_statistic;
