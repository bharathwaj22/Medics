import React, { useState } from "react";
import "../assests/css/payment_form.css";
import Sider from "../components/Sider.js";
import Header from "../components/Header.js";
import { Link } from "react-router-dom";
import Breadcrumbs from "../routes/Breadcrumbs.js";

function Process_details() {
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
  const [isReadOnly, setIsReadOnly] = React.useState(true);

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
        <div className="row mt-4 w-100">
          <div className="col-1 d-flex justify-content-center">
            <Sider />
          </div>
          <div className="col-11  ">
            <div className="col-12">
              <Header></Header>
            </div>

            <div className="col-12 wapper w-100 mt-3">
              <div className="pt-2 px-2 d-none d-md-block">
                <Breadcrumbs></Breadcrumbs>
              </div>

              <div className="row mt-1 mx-2 py-4">
                <div className="col-12">
                  <label className="client-name-pop py-2 mt-1 ">
                    ENTRY PROCESS
                  </label>
                </div>
                <div className="col-md-3 float-start pt-2 ">
                  <label className="statis-name ">Entry Date</label>

                  <input
                    type="text"
                    className="form-control1"
                    readOnly={isReadOnly}
                  />
                </div>
                <div className="col-md-3 float-start pt-2 ">
                  <label className="statis-name ">Title</label>

                  <input
                    type="text"
                    className="form-control1 "
                    readOnly={isReadOnly}
                  />
                </div>
                <div className="col-md-3 float-start pt-2 ">
                  <label className="statis-name ">Type Of work</label>
                  <input
                    type="text"
                    className="form-control1"
                    readOnly={isReadOnly}
                  />
                </div>
                <div className="col-md-3 float-start pt-2 ">
                  <label className="statis-name ">Project ID </label>
                  <input
                    type="text"
                    className="form-control1"
                    readOnly={isReadOnly}
                  />
                </div>
                <div className="col-md-3 float-start pt-3 ">
                  <label className="statis-name ">Select Document</label>
                  <input
                    type="text"
                    className="form-control1"
                    placeholder="Text"
                    readOnly={isReadOnly}
                  />
                </div>
                <div className="col-md-3 float-start pt-3 ">
                  <label className="statis-name ">File</label>
                  <input
                    type="text"
                    className="form-control1"
                    placeholder="marksheet.pdf"
                    readOnly={isReadOnly}
                  />
                </div>

                <div className="col-12">
                  <label className="client-name-pop py-2 mt-3 ">
                    CLIENT INFORMATION
                  </label>
                </div>

                <div className="col-md-4 float-start pt-2 ">
                  <label className="statis-name ">Client Name</label>
                  <input
                    type="none"
                    className="form-control1"
                    readOnly={isReadOnly}
                  />
                </div>
                <div className="col-md-4 float-start pt-2 ">
                  <label className="statis-name  ">Email ID</label>
                  <input
                    type="email"
                    className="form-control1"
                    readOnly={isReadOnly}
                  />
                </div>
                <div className="col-md-4 float-start pt-2 ">
                  <label className="statis-name  ">Contact No</label>
                  <input
                    type="text"
                    className="form-control1"
                    readOnly={isReadOnly}
                  />
                </div>

                <div className="col-md-4 float-start pt-4 ">
                  <label className="statis-name ">Institute</label>
                  <input
                    type="text"
                    className="form-control1"
                    readOnly={isReadOnly}
                  />
                </div>

                <div className="col-md-4 float-start pt-4 ">
                  <label className="statis-name  ">Department</label>
                  <input
                    type="text"
                    className="form-control1"
                    readOnly={isReadOnly}
                  />
                </div>
                <div className="col-md-4 float-start pt-4 ">
                  <label className="statis-name ">Profession</label>
                  <input
                    type="text"
                    className="form-control1"
                    readOnly={isReadOnly}
                  />
                </div>
                <div className="col-md-4 float-start pt-4 ">
                  <label className="statis-name ">Budget</label>
                  <input
                    type="text"
                    className="form-control1"
                    readOnly={isReadOnly}
                  />
                </div>

                <div className="col-md-4 float-start pt-4 ">
                  <label className="statis-name  ">Process Status</label>
                  <input
                    type="text"
                    className="form-control1"
                    readOnly={isReadOnly}
                  />
                </div>
                <div className="col-md-4 float-start pt-4 ">
                  <label className="statis-name ">Process Status Date</label>
                  <input
                    type="text"
                    className="form-control1"
                    readOnly={isReadOnly}
                  />
                </div>

                <div className="col-md-4 float-start pt-4 ">
                  <label className="statis-name   ">Hierarchical</label>
                  <input
                    type="email"
                    className="form-control1 "
                    readOnly={isReadOnly}
                  />
                </div>

                <div className="col-12">
                  <label className="client-name-pop  mt-4 ">
                    PROCESS STATUS
                  </label>
                </div>

                <div className="row">
                  <div className="col-12 col-md-6 col-lg   pt-2">
                    <label className="statis-name  ">Writer</label>
                    <input
                      type="text"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>

                  <div className="col-12 col-md-6 col-lg   pt-2">
                    <label className="statis-name  ">
                      Writer Assigned Date
                    </label>
                    <input
                      type="text"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>

                  <div className="col-12 col-md-6 col-lg   pt-2">
                    <label className="statis-name   ">Writer Status</label>
                    <input
                      type="text"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg   pt-2">
                    <label className="statis-name ">Writer Status Date</label>
                    <input
                      type="email"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg   pt-2">
                    <label className="statis-name ">
                      Writer Project Duration
                    </label>
                    <input
                      type="email"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 col-lg   pt-4">
                    <label className="statis-name  ">Reviwer</label>
                    <input
                      type="text"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>

                  <div className="col-12 col-md-6 col-lg   pt-4">
                    <label className="statis-name  ">
                      Reviwer Assigned Date
                    </label>
                    <input
                      type="text"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>

                  <div className="col-12 col-md-6 col-lg   pt-4">
                    <label className="statis-name   ">Reviwer Status</label>
                    <input
                      type="text"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg   pt-4">
                    <label className="statis-name ">Reviwer Status Date</label>
                    <input
                      type="email"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg   pt-4">
                    <label className="statis-name ">
                      Reviwer Project Duration
                    </label>
                    <input
                      type="email"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 col-lg   pt-4">
                    <label className="statis-name  ">Statistican</label>
                    <input
                      type="text"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>

                  <div className="col-12 col-md-6 col-lg   pt-4">
                    <label className="statis-name  ">
                      Statistican Assigned Date
                    </label>
                    <input
                      type="text"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>

                  <div className="col-12 col-md-6 col-lg   pt-4">
                    <label className="statis-name   ">Statistican Status</label>
                    <input
                      type="text"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg   pt-4">
                    <label className="statis-name ">
                      Statistican Status Date
                    </label>
                    <input
                      type="email"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg   pt-4">
                    <label className="statis-name ">
                      Statistican Project Duration
                    </label>
                    <input
                      type="email"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 col-lg   pt-4">
                    <label className="statis-name  ">Journal</label>
                    <input
                      type="text"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>

                  <div className="col-12 col-md-6 col-lg   pt-4">
                    <label className="statis-name  ">
                      Journal Assigned Date
                    </label>
                    <input
                      type="text"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>

                  <div className="col-12 col-md-6 col-lg   pt-4">
                    <label className="statis-name   ">Journal Status</label>
                    <input
                      type="text"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg   pt-4">
                    <label className="statis-name ">Journal Status Date</label>
                    <input
                      type="email"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg   pt-4">
                    <label className="statis-name ">
                      Journal Project Duration
                    </label>
                    <input
                      type="email"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>
                </div>

                <div className="col-12">
                  <label className="client-name-pop py-2 mt-5 ">
                    PAYMENT STATUS
                  </label>
                </div>

                <div className="row   ">
                  <div className="col-md-4  pt-2">
                    <label className="statis-name ">Project Title</label>
                    <input
                      type="text"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>
                  <div className=" col-md-4  pt-2">
                    <label className="statis-name ">Buget</label>
                    <input
                      type="text"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>
                  <div className="col-md-4  pt-2 ">
                    <label className="statis-name  ">Project ID</label>
                    <input
                      type="text"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>
                </div>
                <div className="row ">
                  <div className=" col-md-4 pt-2">
                    <label className="statis-name "> Payment-1</label>
                    <input
                      type="text"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>
                  <div className=" col-md-4  pt-2  ">
                    <label className="statis-name ">Payment Date</label>
                    <input
                      type="text"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className=" col-md-4  pt-3  ">
                    <label className="statis-name ">Enter Payment Status</label>
                    <input
                      type="text"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4  pt-3 ">
                    <label className="statis-name  ">Writer Payment</label>
                    <input
                      type="text"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>
                  <div className="col-md-4  pt-3 ">
                    <label className="statis-name">Writer Payment Date</label>
                    <input
                      type="email"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4  pt-3 ">
                    <label className="statis-name  ">Reviewer Payment</label>
                    <input
                      type="text"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>
                  <div className="col-md-4  pt-3 ">
                    <label className="statis-name">Reviewer Payment Date</label>
                    <input
                      type="email"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4  pt-3 ">
                    <label className="statis-name  ">Statistican Payment</label>
                    <input
                      type="text"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>
                  <div className="col-md-4  pt-3 ">
                    <label className="statis-name">
                      Statistican Payment Date
                    </label>
                    <input
                      type="email"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4  pt-3 ">
                    <label className="statis-name  ">Journal Payment</label>
                    <input
                      type="text"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>
                  <div className="col-md-4  pt-3 ">
                    <label className="statis-name">Journal Payment Date</label>
                    <input
                      type="email"
                      className="form-control1"
                      readOnly={isReadOnly}
                    />
                  </div>
                </div>

                <div className="col-12">
                  <label className="client-name-pop mt-4 ">PENDING</label>
                </div>
                <div className="col-md-4 float-start pt-2">
                  <label className="statis-name   ">My Fee</label>
                  <input
                    type="email"
                    className="form-control1"
                    readOnly={isReadOnly}
                  />
                </div>

                <div className="col-md-4 float-start pt-2">
                  <label className="statis-name ">Writer Pending Days</label>
                  <input
                    type="text"
                    className="form-control1"
                    readOnly={isReadOnly}
                  />
                </div>

                <div className="col-md-4 float-start pt-2">
                  <label className="statis-name ">Reviewer Pending Days</label>
                  <input
                    type="text"
                    className="form-control1"
                    readOnly={isReadOnly}
                  />
                </div>

                <div className="col-md-4 float-start pt-4">
                  <label className="statis-name  ">Project Pending Days</label>
                  <input
                    type="text"
                    className="form-control1"
                    readOnly={isReadOnly}
                  />
                </div>
                <div className="col-md-4 float-start pt-4">
                  <label className="statis-name">Writer Payment Due Date</label>
                  <input
                    type="email"
                    className="form-control1"
                    readOnly={isReadOnly}
                  />
                </div>

                <div className="col-md-4 float-start pt-4">
                  <label className="statis-name ">
                    Reviewer Payment Due Date
                  </label>
                  <input
                    type="text"
                    className="form-control1"
                    readOnly={isReadOnly}
                  />
                </div>
                <div className="col-md-12 d-flex justify-content-end float-start pt-5 gap-3 ">
                  <Link to="/entry-process">
                    <button className="save-form">Back</button>
                  </Link>
                  {/* <button type="submit" className="save-form">
                    Edit
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Process_details;
