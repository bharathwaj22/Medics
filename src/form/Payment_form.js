import React, { useState } from "react";
import "../assests/css/payment_form.css";
import Sider from "../components/Sider";
import Header from "../components/Header.js";
import { Link } from "react-router-dom";

function Payment_form() {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // }

  const [showFields, setShowFields] = useState(false);
  const [showWriter, setShowWriter] = useState(false);
  const [showReviewer, setShowReviewer] = useState(false);
  const [showVendor, setShowVendor] = useState(false);
  const [showjournal, setShowJournal] =useState(false);

  const handleButtonClick = () => {
    setShowFields((prev) =>prev +1); 
  };

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
  const handleDeleteField = () => {
    setShowFields((prev) => (prev > 0 ? prev - 1 : 0)); 
  };



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
              <form>
                <div className="row w-100 mt-2 pt-3   p-3 ">
                  <div className="col-12 col-md ">
                    <label className="statis-name">Project Title</label>
                    <select className="form-control mt-2">
                      <option value="" disabled selected>
                        Select Payment Title
                      </option>
                      <option value="Payment Received">Payment Received</option>
                      <option value="Payment Pending">Payment Pending</option>
                    </select>
                  </div>
                  <div className="col-12 col-md">
                    <label className="statis-name">Budget</label>
                    <select className="form-control mt-2">
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
                      className="form-control mt-2"
                      placeholder="Enter Project ID"
                    />
                  </div>
                </div>
                <div className="row  mt-2 pt-3   p-3 ">
                  <div className="col-12 col-md ">
                    <label className="statis-name">Payment One</label>
                    <input type="number" className="form-control mt-2" />
                  </div>
                  <div className="col-12 col-md">
                    <label className="statis-name">Payment Date</label>
                    <input
                      type="date"
                      className="form-control mt-2"
                      placeholder="Enter Project ID"
                    />
                  </div>

                  <div className="col d-flex justify-content-start py-4 mt-3">
                    <button
                      type="button"
                      className="save-form-add"
                      onClick={handleButtonClick}
                    >
                      Add +
                    </button>
                  </div>
                </div>

                {showFields >0 && (
                  <div className="row  p-3">
                    <div className="col-12 col-md-4">
                      <label className="statis-name">Payment two</label>
                      <input type="number" className="form-control mt-2" />
                    </div>
                    <div className="col-12 col-md-4">
                      <label className="statis-name">Payment Date</label>
                      <input type="date" className="form-control mt-2" />
                    </div>
                  
                  <div className="col d-flex justify-content-start py-4 mt-3">
                  <button
                    type="button"
                    className="save-form-del"
                    onClick={handleDeleteField}
                  >
                    Delete
                  </button>
                </div>
                </div>
                )}
                {showFields >1 && (
                  <div className="row  p-3">
                    <div className="col-12 col-md-4">
                      <label className="statis-name">Payment three</label>
                      <input type="number" className="form-control mt-2" />
                    </div>
                    <div className="col-12 col-md-4">
                      <label className="statis-name">Payment Date</label>
                      <input type="date" className="form-control mt-2" />
                    </div>
                  
                  <div className="col d-flex justify-content-start py-4 mt-3">
                  <button
                    type="button"
                    className="save-form-del"
                    onClick={handleDeleteField}
                  >
                    Delete
                  </button>
                </div>
                </div>
                )}
                <div className="row p-4">
                 
                   <div className="col-6 col-md-2">
                   <input type="checkbox" id="writer" onClick={handleWriterClick} />
                   <label className="statis-name1 " htmlFor="writer">Writer</label>
                    </div>
                   <div className="col-6 col-md-2">
                   <input type="checkbox" id="reviewer" onClick={handleReviewerClick} />
                   <label className="statis-name1" htmlFor="reviewer">Reviewer</label>
                   </div>

                    <div className="col-6 col-md-2">
                    <input type="checkbox" id="vendor" onClick={handleStatisticanClick} />
                    <label className="statis-name1" htmlFor="vendor">Statistican</label>
                    </div>
                   <div className="col-6 col-md-2">
                   <input type="checkbox" id="jounel" onClick={handleJournalClick} />
                   <label className="statis-name1" htmlFor="jounel">Journal </label>
                   </div>
                  </div>
               
                {showWriter && (
                  <div className="row  p-3">
                    <div className="col-12 col-md-4">
                      <label className="statis-name"> Writer Payment</label>
                      <input type="number" className="form-control mt-2" />
                    </div>
                    <div className="col-12 col-md-4">
                      <label className="statis-name">
                        {" "}
                        Writer Payment Date
                      </label>
                      <input type="date" className="form-control mt-2" />
                    </div>
                  </div>
                )}
                {showReviewer && (
                  <div className="row  p-3">
                    <div className="col-12 col-md-4">
                      <label className="statis-name"> Reviewer Payment</label>
                      <input type="number" className="form-control mt-2" />
                    </div>
                    <div className="col-12 col-md-4">
                      <label className="statis-name">
                        Reviewer Payment Date
                      </label>
                      <input type="date" className="form-control mt-2" />
                    </div>
                  </div>
                )}
                {showVendor && (
                  <div className="row  p-3">
                    <div className="col-12 col-md-4">
                      <label className="statis-name">Statistican Payment</label>
                      <input type="number" className="form-control mt-2" />
                    </div>
                    <div className="col-12 col-md-4">
                      <label className="statis-name">
                        
                        Statistican Payment Date
                      </label>
                      <input type="date" className="form-control mt-2" />
                    </div>
                  </div>
                )}
                 {showjournal && (
                  <div className="row  p-3">
                    <div className="col-12 col-md-4">
                      <label className="statis-name">Journal</label>
                      <input type="number" className="form-control mt-2" />
                    </div>
                    <div className="col-12 col-md-4">
                      <label className="statis-name">
                        
                        Jounel Payment Date
                      </label>
                      <input type="date" className="form-control mt-2" />
                    </div>
                  </div>
                )}

                <div className="col-12 col-md-4 px-3 mt-3 col-md">
                  <label className="statis-name">Payment Status</label>
                  <select className="form-control mt-2">
                    <option value="" disabled selected>
                     Payment Status
                    </option>
                    <option value="Payment Received">Completed</option>
                    <option value="Payment Pending">Pending</option>
                    <option value="Payment Pending">Rejected</option>
                    <option value="Payment Pending">ON Hold</option>
                  </select>
                </div>

                <div className="col-md-12  d-flex justify-content-end py-5 px-1 gap-4   ">
                <Link to="/paymentstatus"><button type="submit" className="save-form">
                    Back
                  </button></Link>
                  <button type="submit" className="save-form">
                    Save
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

export default Payment_form;
