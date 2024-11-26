import React,{useState} from 'react'
import '../assests/css/payment_form.css'
import Sider from "../components/Sider";
import Headerenter from "../components/Headerenter.js";





function Payment_form() {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // }
  
 
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
            <form >
            <div className="row w-100 mt-5 pt-3  ">
              
              <div className="col-3  ">
              <h5 className="statis-name mx-3">Process Title</h5>
              <select
                  className="mx-3 client-info1 " 
                  
                >
                  <option>Processing</option>

                  <option>Completed</option>

                  <option>Pending</option>
                </select>
              </div>
              <div className="col-3 ">
                <h5 className="statis-name mx-4">Buget</h5>
                <input
                  type="text"
                  className='client-info1 mx-2'
                 
                />
              </div>
              <div className="col-3  ">
                <h5 className="statis-name mx-3">Author Payment-1</h5>
                <select
                  className="mx-3 client-info1 " 
                  
                >
                  <option>Processing</option>

                  <option>Completed</option>

                  <option>Pending</option>
                </select>
                
              </div>
              <div className="col-3 ">
                <h5 className="statis-name mx-3">Payment 1-date</h5>
                <input
                  type="date"
                  className="mx-3 client-info1"
                  name="projectId"
                  placeholder="Enter the Commands"
                  
                 
                />
                
              </div>
            </div>
            
             <div className="row w-100 mt-5 pt-3  ">
              <div className="col-3">
                <h5 className="statis-name mx-3">Author Payment-2</h5>
                <select
                  className="mx-3 client-info1 "
                  
                >
                  <option>one</option>

                  <option>two </option>

                  <option>three</option>
                </select>
              </div>
              <div className="col-3  ">
              <h5 className="statis-name mx-3">Payment 2-date</h5>
              <input
                  type="date"
                  className='client-info1'
                 
                />
              </div>
              <div className="col-3  ">
                <h5 className="statis-name mx-3">Author Payment-3</h5>
                <select
                  className="mx-3 client-info1"  
                  
                >
                  <option>one</option>

                  <option>two </option>

                  <option>three</option>
                </select>
              </div>
              <div className="col-3 ">
                <h5 className="statis-name mx-3">Payment 3-date</h5>
               
                <input
                  type="date"
                  className='client-info1 mx-3'
                 
                />
              </div>
            </div>
            <div className="row w-100 mt-5 pt-3  ">
              <div className="col-3">
              <h5 className="statis-name mx-4"> Journal Fee</h5>
              <input
                  type="text"
                  className='client-info1 mx-3'
                 
                />
              </div>
              <div className="col-3  ">
              
              <h5 className="statis-name mx-3">Date of Journal Payment</h5>
                <input
                  type="date"
                  className='client-info1'
                 
                />
              </div>
              
              <div className="col-3 ">
                <h5 className="statis-name mx-3">Writer payment</h5>
                {/* <input
                  type="text"
                  className={`date-from ${errors.projectId ? "error" : ""}`}
                  name="projectId"
                  placeholder="Statistics 201"
                  value={formData.projectId}
                  required
                /> */}
                <select
                  className="mx-3 client-info1 "
                  
                >
                  <option>one</option>

                  <option>two </option>

                  <option>three</option>
                </select>
              </div>
              <div className="col-3  ">
                <h5 className="statis-name mx-3">Writer Payment Details</h5>
                <select
                  className="mx-3 client-info1  "
                  
                >
                  <option>one</option>

                  <option>two </option>

                  <option>three</option>
                </select>
              </div>
            </div>
            <div className="row w-100 mt-5 pt-3  ">
              <div className="col-3">
              <h5 className="statis-name mx-3"> Reviewer Payment</h5>
              <select
                  className="mx-3 client-info1" 
                  
                >
                  <option>one</option>

                  <option>two </option>

                  <option>three</option>
                </select>
              </div>
              <div className="col-3  ">
              
              <h5 className="statis-name mx-3">Reviewer Payment Details</h5>
              <select
                  className=" client-info1 "
                  
                >
                  <option>one</option>

                  <option>two </option>

                  <option>three</option>
                </select>
              </div>
              
              <div className="col-3 ">
                <h5 className="statis-name mx-3">Vendor payment</h5>
               
                <select
                  className="mx-3 client-info1 "
                  
                >
                  <option>one</option>

                  <option>two </option>

                  <option>three</option>
                </select>
              </div>
              <div className="col-3  ">
                <h5 className="statis-name mx-3">Vendor Payment Details</h5>
                <select
                  className="mx-3 client-info1  "
                  
                >
                  <option>one</option>

                  <option>two </option>

                  <option>three</option>
                </select>
              </div>
              </div>
            <div className="row w-100 py-5 mt-3 ">
            <div className="col-3  ">
                <h5 className="statis-name mx-3"> Payment Received</h5>
                <select
                  className="mx-3 client-info1"
                  required
                >
                  <option value="" disabled>
                    Payment Method
                  </option>
                  <option value="1">Completed</option>
                  <option value="2">Rejected</option>
                  <option value="3">Pending</option>
                  <option value="3">On Hold</option>
                </select>
              </div>
              <div className="col-3 ">
                <h5 className="statis-name mx-3">Payment Recevied Date</h5>
                <input
                  type="date"
                  className="mx-1 client-info1"
                  
                  
                 
                />
                
              </div>
              
              <div className="col-4  ">
                <div className="save-btn ">
                  <button
                    
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
    
 

export default Payment_form