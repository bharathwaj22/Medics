import React from "react";
import Header from "./Header";
import Sider from "./Sider";
import { IoMdAdd } from "react-icons/io";
import { VscGitStashPop } from "react-icons/vsc";
import { VscEye } from "react-icons/vsc";

import Vector from "..//assests/images/Vector.svg";
import { IoIosSearch } from "react-icons/io";
import { useState, useEffect } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import axios from "axios";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import "datatables.net-select-dt";
import "datatables.net-responsive-dt";
function Paymentstatus() {
  const [date, setDate] = useState(null);
  const [date1, setDate1] = useState(null);

  useEffect(() => {}, []);

  const handleDateChange = (date) => {
    setDate(date);
  };
  const handleDateChange1 = (date1) => {
    setDate1(date1);
  };

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/c/15fb-d155-40a6-a49e"
      );
      setData(response.data);

      console.log(response.data);
    } catch (error) {
      console.error("error fetching data", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const [isReadOnly, setIsReadOnly] = React.useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  const columns = [
    {
      title: "S.NO",
      data: null,
      render: (data, type, row, meta) => meta.row + 1,
    },
    { title: "ID  ", data: "id" },
    { title: "DATE", data: "date" },
    { title: "BUDGET", data: "id" },
    { title: "WRITER PAYMENT ", data: "institution" },
    { title: "REVIEWER PAYMENT", data: "institution" },
    { title: "VENDOR PAYMENT", data: "institution" },
    { title: "JOURNAL PAYMENT", data: "institution" },


    {
      title: "",
      data: null,
      render: (data, type, row) => {
        const id = `actions-${row.sno || Math.random()}`;
        setTimeout(() => {
          const container = document.getElementById(id);
          if (container && !container.hasChildNodes()) {
            ReactDOM.render(
              <div className="d-flex justify-content-center">
                <VscEye onClick={openPopup} className="open-icon" />
              </div>,
              container
            );
          }
        }, 0);
        return `<div id="${id}"></div>`;
      },
    },
  ];
  return (
    <>
      <section className="main  w-100">
        <div className="row mt-4 w-100">
          <div className="col-1   d-flex justify-content-center">
            <Sider></Sider>
          </div>
          <div className="col-11  ">
            <div className="col-12">
              <Header></Header>
            </div>

            <div className="col-11  pt-1 mt-3 wapper w-100 py-5 ">
              <div className=" row mt-3 d-flex w-100  ">
                {/* <div className="col-5">
                  <div className=" search-process position-relative mx-4 mt-3">
                    <input
                      type="text"
                      className=" search-entry position-absolute z n1 "
                      placeholder="search..."
                    ></input>

                    <IoIosSearch className="   search-icon position-relative  "></IoIosSearch>
                  </div>
                </div> */}
                <div className="col-5 d-flex mt-2 px-4 ">
                <p className="heading-entr "> Payment Status</p>
              </div>

                <div className="col-2 text-center mt-2 ">
                  <div className=" d-flex justify-content-center   ">
                    <div className="add-icon">
                      <Link to="/payment-form">
                        <IoMdAdd className="add1-icon" />
                      </Link>
                    </div>
                    <div className="add-icon">
                      <VscGitStashPop className="exit-icon" />
                    </div>
                  </div>
                </div>
                <div className="d-flex  col-5   col-md-5   col-lg-5   justify-content-between align-items-center  gap-2 date-sel">
                  <input
                    type="text"
                    className=" input-butn1  "
                    placeholder="ID"
                  />
                  <DatePicker
                    className="input-butn2 mx-2"
                    selected={date}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    placeholderText="Date From"
                    popperPlacement="bottom"
                  />
                  <DatePicker
                    className="input-butn4 mx-2"
                    selected={date1}
                    onChange={handleDateChange1}
                    dateFormat="dd/MM/yyyy"
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    placeholderText="Date To"
                    popperPlacement="bottom"
                  />

                  <select className=" input-butn3 ">
                    <option value="">Department</option>
                    <option>one</option>
                    <option>2</option>
                    <option>one</option>
                  </select>
                </div>
              </div>

              {/* <div className="col-12 d-flex mt-4 px-4 ">
                <p className="heading-entr "> Payment Status</p>
              </div> */}

              {/* <div className="col-12 px-2 table-responsive  table-wrapper-scroll-y my-custom-scrollbar  ">
                <table className="   table-head   ">
                  <thead>
                    <tr className="text-center tr-head   ">
                      <th className="">BUDGET </th>
                      <th className="">PAYMENT-1</th>

                      <th className="">PAYMENT DATE</th>
                      <th className="">PAYMENT-2</th>
                      <th className="">PAYMENT DATE</th>
                      <th className="">PAYMENT-3</th>
                      <th className="">PAYMENT DATE</th>

                      <th className=""></th>
                    </tr>
                  </thead>

                  <React.Fragment>
                    {data.map((item) => (
                      <tbody key={item.id}>
                        <tr className=" text-center tr-head ">
                          <td>{item["s.no"]}</td>
                          <td>{item.id}</td>
                          <td>{item.date}</td>
                          <td>{item.department}</td>
                          <td>{item.institution}</td>
                          <td>{item.author}</td>
                          <td>{item.profession}</td>

                          <td> */}
              <div className="px-1">
                <DataTable
                  id="example"
                  data={data}
                  columns={columns}
                  className="display"
                  options={{ scrollX: true, select: true }}
                />
              </div>
              {/* <VscEye onClick={openPopup} className="open-icon" /> */}
              {isOpen && (
                <div className="popup-container">
                  <div className="popup">
                    <div className="popup-content">
                      <span className="close" onClick={closePopup}>
                        &times;
                      </span>
                      {/* <img className="pop " src={popup} alt="img" /> */}

                      <div className="popup-content1 px-5 ">
                        <div className="row  mt-4 mx-2 py-4 ">
                          <div className="col-md-3 float-start pt-2">
                            <h5 className="statis-name ">Process Title</h5>
                            <select className="form-control mt-2">
                      <option value="" disabled selected>
                        
                      </option>
                      <option value="Payment Received">Payment Received</option>
                      <option value="Payment Pending">Payment Pending</option>
                    </select>
                          </div>
                          <div className=" col-md-3 float-start pt-2">
                            <h5 className="statis-name ">Buget</h5>
                            
                            <select className="form-control mt-2">
                      <option value="" disabled selected>
                        
                      </option>
                      <option value="Payment Received">Payment Received</option>
                      <option value="Payment Pending">Payment Pending</option>
                    </select>
                          </div>
                          <div className=" col-md-3 float-start pt-2 ">
                            <h5 className="statis-name ">Author Payment-1</h5>
                            <input
                              type="text"
                              className="form-control"
                              readOnly={isReadOnly}
                            />
                          </div>
                          <div className=" col-md-3 float-start pt-2  ">
                            <h5 className="statis-name ">Payment-1 Date</h5>
                            <input
                              type="text"
                              className="form-control"
                              readOnly={isReadOnly}
                            />
                          </div>

                          <div className="col-md-3 float-start pt-4 ">
                            <h5 className="statis-name   ">Author Payment-2</h5>
                            <input
                              type="email"
                              className="form-control"
                              readOnly={isReadOnly}
                            />
                          </div>

                          <div className="col-md-3 float-start pt-4 ">
                            <h5 className="statis-name ">Payment-2 Date</h5>
                            <input
                              type="text"
                              className="form-control"
                              readOnly={isReadOnly}
                            />
                          </div>

                          <div className="col-md-3 float-start pt-4 ">
                            <h5 className="statis-name ">Author Payment-3</h5>
                            <input
                              type="text"
                              className="form-control"
                              readOnly={isReadOnly}
                            />
                          </div>
                          <div className="col-md-3 float-start pt-4 ">
                            <h5 className="statis-name ">Payment-3 Date</h5>
                            <input
                              type="text"
                              className="form-control"
                              readOnly={isReadOnly}
                            />
                          </div>

                          <div className="col-md-3 float-start pt-4 ">
                            <h5 className="statis-name  ">Journal</h5>
                            <input
                              type="text"
                              className="form-control"
                              readOnly={isReadOnly}
                            />
                          </div>
                          <div className="col-md-3 float-start pt-4 ">
                            <h5 className="statis-name">
                              Journal Payment Date
                            </h5>
                            <input
                              type="email"
                              className="form-control"
                              readOnly={isReadOnly}
                            />
                          </div>

                          <div className="col-md-3 float-start pt-4 ">
                            <h5 className="statis-name ">Writer Payment</h5>
                            <input
                              type="text"
                              className="form-control"
                              readOnly={isReadOnly}
                            />
                          </div>
                          <div className="col-md-3 float-start pt-4 ">
                            <h5 className="statis-name ">
                              Writer Payment Date
                            </h5>
                            <input
                              type="text"
                              className="form-control"
                              readOnly={isReadOnly}
                            />
                          </div>

                          <div className="col-md-3 float-start pt-4 ">
                            <h5 className="statis-name  ">Reviewer Payment</h5>
                            <input
                              type="email"
                              className="form-control"
                              readOnly={isReadOnly}
                            />
                          </div>
                          <div className="col-md-3 float-start pt-4 ">
                            <h5 className="statis-name  ">
                              Reviewer Payment Date
                            </h5>
                            <input
                              type="email"
                              className="form-control"
                              readOnly={isReadOnly}
                            />
                          </div>
                          <div className="col-md-3 float-start pt-4 ">
                            <h5 className="statis-name  ">Statistican Payment</h5>
                            <input
                              type="email"
                              className="form-control"
                              readOnly={isReadOnly}
                            />
                          </div>
                          <div className="col-md-3 float-start pt-4 ">
                            <h5 className="statis-name  ">
                              Statistican Payment Date
                            </h5>
                            <input
                              type="email"
                              className="form-control"
                              readOnly={isReadOnly}
                            />
                          </div>

                          <div className="col-md-3 float-start pt-4 ">
                            <h5 className="statis-name  ">Payment Received</h5>
                            <select className="form-control mt-2">
                      <option value="" disabled selected>
                        </option>
                     
                    <option value="Payment Received">Completed</option>
                    <option value="Payment Pending">Pending</option>
                    <option value="Payment Pending">Rejected</option>
                    <option value="Payment Pending">ON Hold</option>
                    </select>
                          </div>
                          
                          <div className="col-12 d-flex justify-content-end  mt-5 ">
                            <div className="popup-edit ">
                              <button className="save-form">Edit</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* </td>
                        </tr>
                      </tbody>
                    ))}
                  </React.Fragment>
                </table>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Paymentstatus;
