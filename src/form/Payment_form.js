import React, { useState } from "react";
import "../assests/css/payment_form.css";
import Sider from "../components/Sider";
import Header from "../components/Header.js";

function Payment_form() {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // }

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
              <div className="row w-100 mt-2 pt-3   ">
                <div className="  col-md-3  float-start pt-5 ">
                  <h5 className="statis-name mx-3">Process Title</h5>
                  <select className="mx-3 client-info1 ">
                    <option value="" disabled selected>
                      Process Title
                    </option>
                    <option value="one">One</option>
                    <option value="two">Two</option>
                    <option value="three">Three</option>
                  </select>
                </div>
                <div className="col-md-3 float-start pt-5 ">
                  <h5 className="statis-name mx-4">Buget</h5>
                  <input type="text" className="client-info1 mx-3" />
                </div>
                <div className="col-md-3 float-start pt-5  ">
                  <h5 className="statis-name mx-3">Author Payment-1</h5>
                  <select className="mx-3 client-info1 ">
                    <option value="" disabled selected>
                      Author Payment-1{" "}
                    </option>
                    <option value="one">One</option>
                    <option value="two">Two</option>
                    <option value="three">Three</option>
                  </select>
                </div>
                <div className="col-md-3 float-start pt-5 ">
                  <h5 className="statis-name mx-3">Payment 1-date</h5>
                  <input
                    type="date"
                    className="mx-3 client-info1"
                    name="projectId"
                    placeholder="Enter the Commands"
                  />
                </div>
              

              
                <div className="col-md-3 float-start pt-5">
                  <h5 className="statis-name mx-3">Author Payment-2</h5>
                  <select className="mx-3 client-info1 ">
                    <option value="" disabled selected>
                      Author Payment-2
                    </option>
                    <option value="one">One</option>
                    <option value="two">Two</option>
                    <option value="three">Three</option>
                  </select>
                </div>
                <div className="col-md-3 float-start pt-5  ">
                  <h5 className="statis-name mx-3">Payment 2-date</h5>
                  <input type="date" className="client-info1 mx-3" />
                </div>
                <div className="col-md-3 float-start pt-5  ">
                  <h5 className="statis-name mx-3">Author Payment-3</h5>
                  <select className="mx-3 client-info1">
                    <option value="" disabled selected>
                      Author Payment-3
                    </option>
                    <option value="one">One</option>
                    <option value="two">Two</option>
                    <option value="three">Three</option>
                  </select>
                </div>
                <div className="col-md-3 float-start pt-5 ">
                  <h5 className="statis-name mx-3">Payment 3-date</h5>

                  <input type="date" className="client-info1 mx-3" />
                </div>
              
              
                <div className="col-md-3 float-start pt-5">
                  <h5 className="statis-name mx-4"> Journal Fee</h5>
                  <input type="text" className="client-info1 mx-3" />
                </div>
                <div className="col-md-3 float-start pt-5  ">
                  <h5 className="statis-name mx-3">Date of Journal Payment</h5>
                  <input type="date" className="client-info1 mx-3" />
                </div>

                <div className="col-md-3 float-start pt-5 ">
                  <h5 className="statis-name mx-3">Writer payment</h5>
                 
                  <select className="mx-3 client-info1 ">
                    <option value="" disabled selected>
                      Writer payment
                    </option>
                    <option value="one">One</option>
                    <option value="two">Two</option>
                    <option value="three">Three</option>
                  </select>
                </div>
                <div className="col-md-3 float-start pt-5  ">
                  <h5 className="statis-name mx-3">Writer Payment Details</h5>
                  <select className="mx-3 client-info1  ">
                    <option value="" disabled selected>
                      Writer Payment Details
                    </option>
                    <option value="one">One</option>
                    <option value="two">Two</option>
                    <option value="three">Three</option>
                  </select>
                </div>
              
              
                <div className="col-md-3 float-start pt-5">
                  <h5 className="statis-name mx-3"> Reviewer Payment</h5>
                  <select className="mx-3 client-info1">
                    <option value="" disabled selected>
                      Reviewer Payment
                    </option>
                    <option value="one">One</option>
                    <option value="two">Two</option>
                    <option value="three">Three</option>
                  </select>
                </div>
                <div className="col-md-3 float-start pt-5  ">
                  <h5 className="statis-name mx-3">Reviewer Payment Details</h5>
                  <select className=" client-info1 mx-3 ">
                    <option value="" disabled selected>
                      Reviewer Payment Details
                    </option>
                    <option value="one">One</option>
                    <option value="two">Two</option>
                    <option value="three">Three</option>
                  </select>
                </div>

                <div className="col-md-3 float-start pt-5 ">
                  <h5 className="statis-name mx-3">Vendor payment</h5>

                  <select className="mx-3 client-info1 ">
                    <option value="" disabled selected>
                      Vendor payment
                    </option>
                    <option value="one">One</option>
                    <option value="two">Two</option>
                    <option value="three">Three</option>
                  </select>
                </div>
                <div className="col-md-3 float-start pt-5  ">
                  <h5 className="statis-name mx-3">Vendor Payment Details</h5>
                  <select name="vendorPaymentDetails " class=" mx-3 client-info1">
                    <option value="" disabled selected>
                      Vendor Payment Details
                    </option>
                    <option value="bankTransfer">Bank Transfer</option>
                    <option value="paypal">PayPal</option>
                    <option value="creditCard">Credit Card</option>
                  </select>
                </div>
              
            
                <div className="col-md-3 float-start pt-5  ">
                  <h5 className="statis-name mx-3"> Payment Received</h5>
                  <select className="mx-3 client-info1">
                    <option value="0" disabled selected>Payment Received</option>
                    <option value="1">Completed</option>
                    <option value="2">Rejected</option>
                    <option value="3">Pending</option>
                    <option value="3">On Hold</option>
                  </select>
                </div>
                <div className="col-md-3 float-start pt-5 ">
                  <h5 className="statis-name mx-3">Payment Recevied Date</h5>
                  <input type="date" className="mx-3 client-info1" />
                </div>

                <div className="col-md-12  d-flex justify-content-end py-5 px-5    ">
                  
                    <button type="submit" className="save-form">
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

export default Payment_form;
