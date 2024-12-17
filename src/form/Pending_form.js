import React, { useState } from "react";
import "../assests/css/payment_form.css";
import Sider from "../components/Sider";
import Header from "../components/Header.js";
import { Link } from "react-router-dom";
import Breadcrumbs from "../routes/Breadcrumbs.js";

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
      

      <section className="main">
        <div className="row mt-4 w-100">
          <div className="col-1 d-flex justify-content-center">
            <Sider />
          </div>
          <div className="col-11  ">
          
            <div className="col-12">
              <Header></Header>
            </div>
          
          
          <div className="col-12 wapper w-100 mt-3">
          <div className="pt-2 px-2 d-none d-md-block"><Breadcrumbs></Breadcrumbs></div>

            <form onSubmit={handleSubmitpending}>
              <div className="row w-100 mt-2 mx-1 p-3">
              
                <div className="col-md-4 float-start pt-5 ">
                  <h5 className="statis-name mx-3">ID</h5>
                  <input
                    type="text"
                    className={`client-info1 mx-3 ${errors.myFee ? "error" : ""}`}
                    name="myFee"
                    value={formData.myFee}
                    onChange={handleChangepending}
                  />
                </div>

                <div className="col-md-4 float-start pt-5 ">
                  <h5 className="statis-name mx-3">Writer Pending Days</h5>
                  <input
                    className={`mx-3 client-info1 ${errors.writerPendingDays ? "error" : ""}`}
                    name="writerPendingDays"
                    value={formData.writerPendingDays}
                    onChange={handleChangepending}
                    placeholder="WriterPendingDays"
                  />
                    
                  
                  
                </div>

                <div className="col-md-4 float-start pt-5 ">
                  <h5 className="statis-name mx-3">Reviewer Pending Days</h5>
                  <input
                    className={`mx-3 client-info1 ${errors.reviewerPendingDays ? "error" : ""}`}
                    name="reviewerPendingDays"
                    value={formData.reviewerPendingDays}
                    onChange={handleChangepending}
                    placeholder="ReviewerPendingDays"
                  />
                    
                 
                  
                </div>
              
                <div className="col-md-4 float-start pt-5 ">
                  <h5 className="statis-name mx-3">Project Pending Days</h5>
                  <input
                    className={`mx-3 client-info1 ${errors.projectPendingDays ? "error" : ""}`}
                    name="projectPendingDays"
                    value={formData.projectPendingDays}
                    onChange={handleChangepending}
                    placeholder="ProjectPendingDays"
                  />
                  
                  
                 
                </div>

                <div className="col-md-4 float-start pt-5 ">
                  <h5 className="statis-name mx-3">Writer Payment Due Date</h5>
                  <input
                    type="date"
                    className={`client-info1 mx-3 ${errors.writerDueDate ? "error" : ""}`}
                    name="writerDueDate"
                    value={formData.writerDueDate}
                    onChange={handleChangepending}
                  />
                </div>

                <div className="col-md-4 float-start pt-5 ">
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

              <div className="col-md-12 d-flex justify-content-end mt-5  px-5 py-5 gap-3">
              <Link to="/pending"><button  className="save-form">
                    Back
                  </button></Link>
                  <button type="submit" className="save-form ">
                    Save
                  </button>
                
              </div>
            </form>
          </div>
        </div>
        </div>
      \
      </section>
    </>
  );
}

export default Pending_form;
