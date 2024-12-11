import React, { useState } from "react";
import "../assests/css/payment_form.css";
import Sider from "../components/Sider.js";
import Header from "../components/Header.js";

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
        <div className="row mt-5 w-100">
          <div className="col-1 d-flex justify-content-center">
            <Sider />
          </div>
          <div className="col-11  ">
            <div className="col-12">
              <Header></Header>
            </div>

            <div className="col-12 wapper w-100 mt-3">
              <div className="row mt-1 mx-2 py-4">
                <div className="col-12">
                  <h5 className="client-name-pop py-2 mt-5 ">ENTRY PROCESS</h5>
                </div>
                <div className="col-md-4 float-start pt-2 ">
                  <h5 className="statis-name ">Entry Date</h5>

                  <input
                    type="text"
                    className="form-control"
                    readOnly={isReadOnly}
                  />
                </div>
                <div className="col-md-4 float-start pt-2 ">
                  <h5 className="statis-name ">Title</h5>

                  <input
                    type="text"
                    className="form-control "
                    readOnly={isReadOnly}
                  />
                </div>
                <div className="col-md-4 float-start pt-2 ">
                  <h5 className="statis-name ">Type Of work</h5>
                  <input
                    type="text"
                    className="form-control"
                    readOnly={isReadOnly}
                  />
                </div>

                <div className="col-12">
                  <h5 className="client-name-pop py-2 mt-5 ">
                    CLIENT INFORMATION
                  </h5>
                </div>

                <div className="col-md-4 float-start pt-2 ">
                  <h5 className="statis-name ">Client Name</h5>
                  <input
                    type="none"
                    className="form-control"
                    readOnly={isReadOnly}
                  />
                </div>
                <div className="col-md-4 float-start pt-2 ">
                  <h5 className="statis-name ">Profession</h5>
                  <input
                    type="text"
                    className="form-control"
                    readOnly={isReadOnly}
                  />
                </div>

                <div className="col-md-4 float-start pt-2 ">
                  <h5 className="statis-name ">Institute</h5>
                  <input
                    type="text"
                    className="form-control"
                    readOnly={isReadOnly}
                  />
                </div>

                <div className="col-md-4 float-start pt-2 ">
                  <h5 className="statis-name mt-5 ">Contact No</h5>
                  <input
                    type="text"
                    className="form-control"
                    readOnly={isReadOnly}
                  />
                </div>

                <div className="col-md-4 float-start pt-2 ">
                  <h5 className="statis-name mt-5 ">Department</h5>
                  <input
                    type="text"
                    className="form-control"
                    readOnly={isReadOnly}
                  />
                </div>
                <div className="col-md-4 float-start pt-2 ">
                  <h5 className="statis-name mt-5 ">Email ID</h5>
                  <input
                    type="email"
                    className="form-control"
                    readOnly={isReadOnly}
                  />
                </div>

                <div className="col-md-4 float-start pt-5 ">
                  <h5 className="statis-name mt-2  ">Hierarchical</h5>
                  <input
                    type="email"
                    className="form-control "
                    readOnly={isReadOnly}
                  />
                </div>

                <div className="col-12">
                  <h5 className="client-name-pop py-2 mt-5 ">PROCESS STATUS</h5>
                </div>
                <div className="col-md-4 float-start pt-2">
                  <h5 className="statis-name mt-2 ">Process Title</h5>
                  <input
                    type="none"
                    className="form-control"
                    readOnly={isReadOnly}
                  />
                </div>
                <div className="col-md-4 float-start pt-2">
                  <h5 className="statis-name mt-2 ">Process Status</h5>
                  <input
                    type="text"
                    className="form-control"
                    readOnly={isReadOnly}
                  />
                </div>
                <div className=" col-md-4 float-start pt-2">
                  <h5 className="statis-name mt-2 ">Process Status Date</h5>
                  <input
                    type="text"
                    className="form-control"
                    readOnly={isReadOnly}
                  />
                </div>

                <div className="col-md-4 float-start pt-4">
                  <h5 className="statis-name mt-4   ">Process Commands</h5>
                  <input
                    type="email"
                    className="form-control"
                    readOnly={isReadOnly}
                  />
                </div>

                <div className="col-md-4 float-start pt-4">
                  <h5 className="statis-name mt-4 ">Writer</h5>
                  <input
                    type="text"
                    className="form-control"
                    readOnly={isReadOnly}
                  />
                </div>

                <div className="col-md-4 float-start pt-4">
                  <h5 className="statis-name mt-4 ">Writer Assigned Date</h5>
                  <input
                    type="text"
                    className="form-control"
                    readOnly={isReadOnly}
                  />
                </div>

                <div className="col-md-4 float-start pt-4">
                  <h5 className="statis-name mt-4  ">Writer Status</h5>
                  <input
                    type="text"
                    className="form-control"
                    readOnly={isReadOnly}
                  />
                </div>
                <div className="col-md-4 float-start pt-4">
                  <h5 className="statis-name mt-4">Writer Status Date</h5>
                  <input
                    type="email"
                    className="form-control"
                    readOnly={isReadOnly}
                  />
                </div>

                <div className="col-md-4 float-start pt-4">
                  <h5 className="statis-name mt-4 ">Reviewer</h5>
                  <input
                    type="text"
                    className="form-control"
                    readOnly={isReadOnly}
                  />
                </div>

                <div className="col-md-4 float-start pt-4">
                  <h5 className="statis-name mt-4  ">Reviewer Assigned Date</h5>
                  <input
                    type="email"
                    className="form-control"
                    readOnly={isReadOnly}
                  />
                </div>
                <div className="col-md-4 float-start pt-4">
                  <h5 className="statis-name mt-4  ">Reviewer Status</h5>
                  <input
                    type="email"
                    className="form-control"
                    readOnly={isReadOnly}
                  />
                </div>
                <div className="col-md-4 float-start pt-4">
                  <h5 className="statis-name mt-4  ">Reviewer Status Date</h5>
                  <input
                    type="email"
                    className="form-control"
                    readOnly={isReadOnly}
                  />
                </div>

                <div className="col-12">
                  <h5 className="client-name-pop py-2 mt-5 ">PAYMENT STATUS</h5>
                </div>

                <div className="col-12">
                  <h5 className="client-name-pop py-2 mt-5 ">PENDING</h5>
                </div>
                <div className="col-md-4 float-start pt-2">
                  <h5 className="statis-name   ">My Fee</h5>
                  <input
                    type="email"
                    className="form-control"
                    readOnly={isReadOnly}
                  />
                </div>

                <div className="col-md-4 float-start pt-2">
                  <h5 className="statis-name ">Writer Pending Days</h5>
                  <input
                    type="text"
                    className="form-control"
                    readOnly={isReadOnly}
                  />
                </div>

                <div className="col-md-4 float-start pt-2">
                  <h5 className="statis-name ">Reviewer Pending Days</h5>
                  <input
                    type="text"
                    className="form-control"
                    readOnly={isReadOnly}
                  />
                </div>

                <div className="col-md-4 float-start pt-5">
                  <h5 className="statis-name  ">Project Pending Days</h5>
                  <input
                    type="text"
                    className="form-control"
                    readOnly={isReadOnly}
                  />
                </div>
                <div className="col-md-4 float-start pt-5">
                  <h5 className="statis-name">Writer Payment Due Date</h5>
                  <input
                    type="email"
                    className="form-control"
                    readOnly={isReadOnly}
                  />
                </div>

                <div className="col-md-4 float-start pt-5">
                  <h5 className="statis-name-min  ">
                    Reviewer Payment Due Date
                  </h5>
                  <input
                    type="text"
                    className="form-control"
                    readOnly={isReadOnly}
                  />
                </div>
                <div className="col-md-12 d-flex justify-content-end float-start pt-5 ">
                  <button className="save-form">Edit</button>
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
