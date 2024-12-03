import React, { useState } from "react";
import "../assests/css/payment_form.css";
import Sider from "../components/Sider";
import Header from "../components/Header.js";

function Department_form() {
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
    if (!formData.writerDueDate)
      formErrors.writerDueDate = "Writer Due Date is required";
    if (!formData.reviewerDueDate)
      formErrors.reviewerDueDate = "Reviewer Due Date is required";

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
        <div className="row mt-5 w-100">
          <div className="col-1 d-flex justify-content-center">
            <Sider />
          </div>
          <div className="col-11  ">
            <div className="col-12">
              <Header></Header>
            </div>

            <div className="col-12 wapper w-100 mt-3">
              <form onSubmit={handleSubmitpending}>
                <div className="row w-100 mt-2 mx-1">
                  <div className="col float-start pt-5 ">
                    <h5 className="statis-name mx-3">Name</h5>
                    <input
                      type="text"
                      className={`client-info1 mx-3 ${
                        errors.myFee ? "error" : ""
                      }`}
                      name="myFee"
                      value={formData.myFee}
                      onChange={handleChangepending}
                    />
                  </div>

                  <div className="col float-start pt-5 ">
                    <h5 className="statis-name mx-3">Status</h5>
                    <select
                      className={`mx-3 client-info1 ${
                        errors.writerPendingDays ? "error" : ""
                      }`}
                      name="writerPendingDays"
                      value={formData.writerPendingDays}
                      onChange={handleChangepending}
                    >
                      <option value="" disabled>
                        Status
                      </option>
                      <option value="1">Active</option>
                      <option value="2">In Active</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-12 d-flex justify-content-end mt-5  px-5 py-5 ">
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

export default Department_form;
