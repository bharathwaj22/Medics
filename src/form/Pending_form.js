import React, { useState } from "react";
import "../assests/css/payment_form.css";
import Sider from "../components/Sider";
import Headerenter from "../components/Headerenter.js";

function Pending_form() {
  const [formData, setFormData] = useState({
    myFee: "",
    
    writerPendingDays: "",
    reviewerPendingDays: "",
    projectPendingDays: "",
    writerDueDate: "",
    reviewerDueDate: "",
  });

  // State to store validation errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChangepending = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form before submission
  const validateForm = () => {
    let formErrors = {};

    if (!formData.myFee) formErrors.myFee = "Fee is required";
    if (!formData.projectId) formErrors.projectId = "Project ID is required";
    if (!formData.clientName) formErrors.clientName = "Client Name is required";
    if (!formData.profession) formErrors.profession = "Profession is required";
    if (!formData.writerPendingDays)
      formErrors.writerPendingDays = "Writer Pending Days is required";
    if (!formData.reviewerPendingDays)
      formErrors.reviewerPendingDays = "Reviewer Pending Days is required";
    if (!formData.projectPendingDays)
      formErrors.projectPendingDays = "Project Pending Days is required";
    if (!formData.writerDueDate) formErrors.writerDueDate = "Writer Due Date is required";
    if (!formData.reviewerDueDate) formErrors.reviewerDueDate = "Reviewer Due Date is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmitpending = (e) => {
    e.preventDefault();

    // If form is valid, process the data
    if (validateForm()) {
      console.log("Form data submitted:", formData);
    }
  };

  return (
    <>
      <div className="row header-stat">
        <Headerenter />
      </div>

      <section className="main">
        <div className="row mt-5 w-100">
          <div className="col-1 d-flex justify-content-center">
            <Sider />
          </div>
          <div className="col-11 wapper">
            <form onSubmit={handleSubmitpending}>
              <div className="row w-100 mt-5 pt-3">
                <div className="col-4">
                  <h5 className="statis-name mx-3">My Fee</h5>
                  <input
                    type="text"
                    className={`client-info1 mx-3 ${errors.myFee ? "error" : ""}`}
                    name="myFee"
                    value={formData.myFee}
                    onChange={handleChangepending}
                  />
                </div>

                <div className="col-4">
                  <h5 className="statis-name mx-3">Writer Pending Days</h5>
                  <select
                    className={`mx-3 client-info1 ${errors.writerPendingDays ? "error" : ""}`}
                    name="writerPendingDays"
                    value={formData.writerPendingDays}
                    onChange={handleChangepending}
                  >
                    <option value="">Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="Pending">Pending</option>
                  </select>
                  
                </div>

                <div className="col-4">
                  <h5 className="statis-name mx-3">Reviewer Pending Days</h5>
                  <select
                    className={`mx-3 client-info1 ${errors.reviewerPendingDays ? "error" : ""}`}
                    name="reviewerPendingDays"
                    value={formData.reviewerPendingDays}
                    onChange={handleChangepending}
                  >
                    <option value="">Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="Pending">Pending</option>
                  </select>
                 
                  
                </div>
              </div>

              <div className="row w-100 mt-5 pt-3">
                <div className="col-4">
                  <h5 className="statis-name mx-3">Project Pending Days</h5>
                  <select
                    className={`mx-3 client-info1 ${errors.projectPendingDays ? "error" : ""}`}
                    name="projectPendingDays"
                    value={formData.projectPendingDays}
                    onChange={handleChangepending}
                  >
                    <option value="">Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  
                 
                </div>

                <div className="col-4">
                  <h5 className="statis-name mx-3">Writer Payment Due Date</h5>
                  <input
                    type="date"
                    className={`client-info1 mx-3 ${errors.writerDueDate ? "error" : ""}`}
                    name="writerDueDate"
                    value={formData.writerDueDate}
                    onChange={handleChangepending}
                  />
                </div>

                <div className="col-4">
                  <h5 className="statis-name mx-3">Reviewer Payment Due Date</h5>
                  <input
                    type="date"
                    className={`client-info1 mx-3 ${errors.reviewerDueDate ? "error" : ""}`}
                    name="reviewerDueDate"
                    value={formData.reviewerDueDate}
                    onChange={handleChangepending}
                  />
                </div>
              </div>

              <div className="row w-100 py-5">
                <div className=" col-11 save-btn ">
                  <button type="submit" className="save-btn1">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pending_form;
