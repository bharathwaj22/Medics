import React, { useState } from "react";
import "../assests/css/payment_form.css";
import Sider from "../components/Sider";
import Header from "../components/Header.js";
import { Link } from "react-router-dom";
import Breadcrumbs from "../routes/Breadcrumbs.js";

function Pending_form() {
  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const [formData, setFormData] = useState({
    myFee: "",
    
    writerPendingDays: "",
    reviewerPendingDays: "",
    projectPendingDays: "",
    writerDueDate: getTodayDate() ||"",
    reviewerDueDate:getTodayDate() || "",
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
const [isReadOnly, setIsReadOnly] = React.useState(true);
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
              
                <div className="col-md-4 float-start pt-4 ">
                  <h5 className="statis-name ">ID</h5>
                  <input
                    type="text"
                    className={`form-control1  ${errors.myFee ? "error" : ""}`}
                    name="myFee"
                    value={formData.myFee}
                    onChange={handleChangepending}
                    readOnly={isReadOnly}
                  />
                </div>

                <div className="col-md-4 float-start pt-4 ">
                  <h5 className="statis-name ">Writer Pending Days</h5>
                  <input
                    className={` form-control1 ${errors.writerPendingDays ? "error" : ""}`}
                    name="writerPendingDays"
                    value={formData.writerPendingDays}
                    onChange={handleChangepending}
                   
                    readOnly={isReadOnly}
                  />
                    
                  
                  
                </div>

                <div className="col-md-4 float-start pt-4 ">
                  <h5 className="statis-name ">Reviewer Pending Days</h5>
                  <input
                    className={` form-control1 ${errors.reviewerPendingDays ? "error" : ""}`}
                    name="reviewerPendingDays"
                    value={formData.reviewerPendingDays}
                    onChange={handleChangepending}
                    
                    readOnly={isReadOnly}
                  />
                    
                 
                  
                </div>
              
                <div className="col-md-4 float-start pt-4 ">
                  <h5 className="statis-name ">Project Pending Days</h5>
                  <input
                    className={` form-control1 ${errors.projectPendingDays ? "error" : ""}`}
                    name="projectPendingDays"
                    value={formData.projectPendingDays}
                    onChange={handleChangepending}
                  
                  />
                  
                  
                 
                </div>

                <div className="col-md-4 float-start pt-4 ">
                  <h5 className="statis-name ">Writer Payment Due Date</h5>
                  <input
                    type="text"
                    className={`form-control1  ${errors.writerDueDate ? "error" : ""}`}
                  
                    // value={formData.writerDueDate}
                    onChange={handleChangepending}
                  />
                </div>

                <div className="col-md-4 float-start pt-4 ">
                  <h5 className="statis-name ">Reviewer Payment Due Date</h5>
                  <input
                    type="text"
                    className={`form-control1  ${errors.reviewerDueDate ? "error" : ""}`}
                    name="reviewerDueDate"
                    // value={formData.reviewerDueDate}
                    onChange={handleChangepending}
                  />
                </div>
              </div>

              <div className="col-md-12 d-flex justify-content-end mt-5  px-5 py-5 gap-3">
              <Link to="/entry-process"><button  className="save-form">
                    Back
                  </button></Link>
                  {/* <button type="submit" className="save-form ">
                    Save
                  </button> */}
                
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
