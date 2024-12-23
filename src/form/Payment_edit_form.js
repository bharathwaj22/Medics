import React, { useState, useEffect } from "react";
import "../assests/css/payment_form.css";
import Sider from "../components/Sider";
import Header from "../components/Header.js";
import { Link } from "react-router-dom";
import Breadcrumbs from "../routes/Breadcrumbs.js";

function Payment_edit_form() {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // }

  const [showFields, setShowFields] = useState(false);
  const [showWriter, setShowWriter] = useState(false);
  const [showReviewer, setShowReviewer] = useState(false);
  const [showVendor, setShowVendor] = useState(false);
  const [showjournal, setShowJournal] = useState(false);

  // const handleButtonClick = () => {
  //   setShowFields((prev) => prev + 1);
  // };

  const handleWriterClick = () => {
    setShowWriter(!showWriter);
  };

  const handleReviewerClick = () => {
    setShowReviewer(!showReviewer);
  };

  const handleStatisticanClick = () => {
    setShowVendor(!showVendor);
  };

  const handleJournalClick = () => {
    setShowJournal(!showjournal);
  };
  // const handleDeleteField = () => {
  //   setShowFields((prev) => (prev > 0 ? prev - 1 : 0));
  // };


  const [date, setDate] = useState("");

  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  useEffect(() => {
    setDate(getTodayDate());
  }, []);


  const [paymentFields, setPaymentFields] = useState([
    { amount: "", date: "" },
  ]);

  const handleAddField = () => {
    setPaymentFields([...paymentFields, { amount: "", date: "" }]);
  };

  const handleRemoveField = (index) => {
    setPaymentFields(paymentFields.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const updatedFields = [...paymentFields];
    updatedFields[index][field] = value;
    setPaymentFields(updatedFields);
  };

  useEffect(() => {
    console.log(paymentFields); // Logs the state to console every time paymentFields updates
  }, [paymentFields]);
  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <>
      <section className=" main ">
        <div className=" row mt-4  w-100 ">
          <div className=" col-1 d-flex justify-content-center">
            <Sider></Sider>
          </div>
          <div className="col-11  ">
            <div className="col-12">
              <Header></Header>
            </div>

            <div className="col-11   wapper w-100 mt-3 ">
              <div className="pt-2 px-2 d-none d-md-block">
                <Breadcrumbs></Breadcrumbs>
              </div>

              <form>
                <div className="row w-100 mt-2 pt-3   px-3 ">
                  <div className="col-12 col-md ">
                    <label className="statis-name">Project Title</label>
                    <select className="form-control ">
                      <option value="" disabled selected>
                        Select Payment Title
                      </option>
                      <option value="Payment Received">Payment Received</option>
                      <option value="Payment Pending">Payment Pending</option>
                    </select>
                  </div>
                  <div className="col-12 col-md">
                    <label className="statis-name">Budget</label>
                    <select className="form-control ">
                      <option value="" disabled selected>
                        Budget
                      </option>
                      <option value="Payment Received">Payment Received</option>
                      <option value="Payment Pending">Payment Pending</option>
                    </select>
                  </div>
                  <div className="col-12 col-md">
                    <label className="statis-name">Project ID</label>
                    <input
                      type="number"
                      className="form-control "
                      placeholder="Enter Project ID"
                    />
                  </div>
                </div>
  
                <div className="row mt-2 pt-1 px-3">
                  {paymentFields.map((field, index) => (
                    <div key={index} className="row mt-2 align-items-center">
                      <div className="col-12 col-md-3">
                        <label className="statis-name">{`Payment ${
                          index + 1
                        }`}</label>
                        <input
                          type="number"
                          className="form-control"
                          value={field.amount}
                          onChange={(e) =>
                            handleChange(index, "amount", e.target.value)
                          }
                        />
                      </div>
                      <div className="col-12 col-md-3">
                        <label className="statis-name">Payment Date</label>
                        <input
      type="date"
      className="form-control"
      id={`dateInput-${index}`}
      value={field.date || date} 
      onChange={(e) =>
        handleChange(index, "date", e.target.value)
      }
    />
                      </div>

                      {/* Add Button only for the first row */}
                      {index === 0 && (
                        <div className="col-12 col-md-3 d-flex justify-content-start align-items-center mt-4">
                          <button
                            type="button"
                            className="save-form-add"
                            onClick={handleAddField}
                          >
                            Add +
                          </button>
                        </div>
                      )}

                      {/* Delete Button for all rows except the first */}
                      {index > 0 && (
                        <div className="col-12 col-md-3 d-flex justify-content-start align-items-center mt-4">
                          <button
                            type="button"
                            className="save-form-del"
                            onClick={() => handleRemoveField(index)}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="col-12 col-md-4 px-3 pt-2  col-md">
                  <label className="statis-name">Enter Payment Status</label>
                  <select className="form-select">
                    <option value="" disabled selected>
                      Payment Status
                    </option>
                    <option value="completed">Completed</option>
                    <option value="balance">Balance to pay </option>
                    <option value="partial">Partial payment done</option>
                    <option value="full payment">Full payment done</option>
                    <option value="Advance payment">
                      Advance payment done{" "}
                    </option>
                  </select>
                </div>
                <div className=" gap-3 px-4 d-flex  flex-wrap pt-4">
                  <div className=" ">
                    <input
                      type="checkbox"
                      id="writer"
                      onClick={handleWriterClick}
                    />
                    <label className="statis-name1 " htmlFor="writer">
                      Writer
                    </label>
                  </div>
                  <div className=" ">
                    <input
                      type="checkbox"
                      id="reviewer"
                      onClick={handleReviewerClick}
                    />
                    <label className="statis-name1" htmlFor="reviewer">
                      Reviewer
                    </label>
                  </div>

                  <div className=" ">
                    <input
                      type="checkbox"
                      id="vendor"
                      onClick={handleStatisticanClick}
                    />
                    <label className="statis-name1" htmlFor="vendor">
                      Statistican
                    </label>
                  </div>
                  <div className="">
                    <input
                      type="checkbox"
                      id="jounel"
                      onClick={handleJournalClick}
                    />
                    <label className="statis-name1" htmlFor="jounel">
                      Journal{" "}
                    </label>
                  </div>
                </div>

                {showWriter && (
                  <div className="row pt-2 px-3">
                    <div className="col-12 col-md-4">
                      <label className="statis-name"> Writer Payment</label>
                      <input type="number" className="form-control mt-2" />
                    </div>
                    <div className="col-12 col-md-4">
                      <label className="statis-name">
                        {" "}
                        Writer Payment Date
                      </label>
                      <input
                        type="date"
                        className="form-control mt-2"
                        id="dateInput"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                  </div>
                )}
                {showReviewer && (
                  <div className="row pt-2 px-3">
                    <div className="col-12 col-md-4">
                      <label className="statis-name"> Reviewer Payment</label>
                      <input type="number" className="form-control mt-2" />
                    </div>
                    <div className="col-12 col-md-4">
                      <label className="statis-name">
                        Reviewer Payment Date
                      </label>
                      <input
                        type="date"
                        className="form-control mt-2"
                        id="dateInput"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                  </div>
                )}
                {showVendor && (
                  <div className="row pt-2 px-3">
                    <div className="col-12 col-md-4">
                      <label className="statis-name">Statistican Payment</label>
                      <input type="number" className="form-control mt-2" />
                    </div>
                    <div className="col-12 col-md-4">
                      <label className="statis-name">
                        Statistican Payment Date
                      </label>
                      <input
                        type="date"
                        className="form-control mt-2"
                        id="dateInput"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                  </div>
                )}
                {showjournal && (
                  <div className="row pt-2 px-3">
                    <div className="col-12 col-md-4">
                      <label className="statis-name">Journal</label>
                      <input type="number" className="form-control mt-2" />
                    </div>
                    <div className="col-12 col-md-4">
                      <label className="statis-name">Jounel Payment Date</label>
                      <input
                        type="date"
                        className="form-control mt-2"
                        id="dateInput"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                  </div>
                )}

                <div className="col-12  d-flex justify-content-end py-5 px-1 gap-3   ">
                  <Link to="/paymentstatus">
                    <button type="submit" className="save-form">
                      Back
                    </button>
                  </Link>
                  <button type="submit" className="save-form">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Payment_edit_form;
