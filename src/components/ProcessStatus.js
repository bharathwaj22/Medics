import React from "react";
import Header from "./Header";
import Sider from "./Sider";
import { IoMdAdd } from "react-icons/io";
import { VscGitStashPop } from "react-icons/vsc";
import { VscEye } from "react-icons/vsc";

import { IoIosSearch } from "react-icons/io";
import { useState, useEffect } from "react";

import DatePicker from "react-datepicker";
import axios from "axios";
// import of process status
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

function ProcessStatus() {
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

  return (
    <section className="main  w-100">
      <div className="row mt-4 w-100">
        <div className="col-1   d-flex justify-content-center">
          <Sider></Sider>
        </div>
        <div className="col-11  ">
          <div className="col-12">
            <Header></Header>
          </div>

          <div className="col-11 wapper w-100 mt-3 pt-1">
            <div className=" row mt-5 d-flex w-100  ">
              <div className="col-5">
              <div className=" search-process position-relative mx-4 mt-3">
                  <input
                    type="text"
                    className=" search-entry position-absolute z n1 "
                    placeholder="search..."
                  ></input>

                  <IoIosSearch className="   search-icon position-relative  "></IoIosSearch>
                </div>
              </div>
              <div className="col-2 text-center mt-0 ">
                <div className="d-flex justify-content-center ">
                  <div className="add-icon">
                    <Link to="/process-status-form">
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
                  <option value="HR">HR</option>
                  <option value="Finance">Finance</option>
                  <option value="IT">IT</option>
                </select>
              </div>
            </div>

            <div className="col-12 d-flex mt-4 px-4 ">
              <p className="heading-entr"> Process Status</p>
            </div>

            <div className="col-12 px-2 table-responsive  table-wrapper-scroll-y my-custom-scrollbar  ">
              <table className="    table-head  ">
                <thead>
                  <tr className="text-center tr-head  ">
                    <th className="mx-2">S.NO </th>
                    <th className="">PROCESS TITLE</th>

                    <th className="">PROCESS STATUS DATE</th>

                    <th className="">STATISTICAN STATUS</th>

                    <th className="">WRITER STATUS</th>
                    <th className="">WRITER ASSIGENED DATE</th>
                    <th className=""> REVIWER ASSIGENED DATE</th>
                    <th className="">REVIWER</th>
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
                        <td>{item.profession}</td>
                        <td>
                          <VscEye onClick={openPopup} className="open-icon" />
                          {isOpen && (
                            <div className="popup-container">
                              <div className="popup">
                                <div className="popup-content ">
                                  <span className="close" onClick={closePopup}>
                                    &times;
                                  </span>
                                  {/* <img className="pop " src={popup} alt="img" /> */}

                                  <div className="popup-content1   ">
                                    <div className="row  mt-3 mx-2 py-4   ">
                                      <div className="col-md-4 float-start pt-2">
                                        <h5 className="statis-name ">
                                          Process Title
                                        </h5>
                                        <input
                                          type="none"
                                          className="client-info1"
                                          readOnly={isReadOnly}
                                        />
                                      </div>
                                      <div className="col-md-4 float-start pt-2">
                                        <h5 className="statis-name ">
                                          Process Status
                                        </h5>
                                        <input
                                          type="text"
                                          className="client-info1"
                                          readOnly={isReadOnly}
                                        />
                                      </div>
                                      <div className=" col-md-4 float-start pt-2">
                                        <h5 className="statis-name ">
                                          Process Status Date
                                        </h5>
                                        <input
                                          type="text"
                                          className="client-info1"
                                          readOnly={isReadOnly}
                                        />
                                      </div>

                                      <div className="col-md-4 float-start pt-2">
                                        <h5 className="statis-name   ">
                                          Process Commands
                                        </h5>
                                        <input
                                          type="email"
                                          className="client-info1"
                                          readOnly={isReadOnly}
                                        />
                                      </div>

                                      <div className="col-md-4 float-start pt-2">
                                        <h5 className="statis-name ">Writer</h5>
                                        <input
                                          type="text"
                                          className="client-info1"
                                          readOnly={isReadOnly}
                                        />
                                      </div>

                                      <div className="col-md-4 float-start pt-2">
                                        <h5 className="statis-name ">
                                          Writer Assigned Date
                                        </h5>
                                        <input
                                          type="text"
                                          className="client-info1"
                                          readOnly={isReadOnly}
                                        />
                                      </div>

                                      <div className="col-md-4 float-start pt-2">
                                        <h5 className="statis-name  ">
                                          Writer Status
                                        </h5>
                                        <input
                                          type="text"
                                          className="client-info1"
                                          readOnly={isReadOnly}
                                        />
                                      </div>
                                      <div className="col-md-4 float-start pt-2">
                                        <h5 className="statis-name">
                                          Writer Status Date
                                        </h5>
                                        <input
                                          type="email"
                                          className="client-info1"
                                          readOnly={isReadOnly}
                                        />
                                      </div>

                                      <div className="col-md-4 float-start pt-2">
                                        <h5 className="statis-name ">
                                          Reviewer
                                        </h5>
                                        <input
                                          type="text"
                                          className="client-info1"
                                          readOnly={isReadOnly}
                                        />
                                      </div>

                                      <div className="col-md-4 float-start pt-2">
                                        <h5 className="statis-name  ">
                                          Reviewer Assigned Date
                                        </h5>
                                        <input
                                          type="email"
                                          className="client-info1"
                                          readOnly={isReadOnly}
                                        />
                                      </div>
                                      <div className="col-md-4 float-start pt-2">
                                        <h5 className="statis-name  ">
                                          Reviewer Status
                                        </h5>
                                        <input
                                          type="email"
                                          className="client-info1"
                                          readOnly={isReadOnly}
                                        />
                                      </div>
                                      <div className="col-md-4 float-start pt-2">
                                        <h5 className="statis-name  ">
                                          Reviewer Status Date
                                        </h5>
                                        <input
                                          type="email"
                                          className="client-info1"
                                          readOnly={isReadOnly}
                                        />
                                      </div>

                                      <div className="col-md-11 float-start pt-2 mt-5">
                                        <button className="save-btn1">
                                          Edit
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </React.Fragment>
              </table>
            </div>
            {/* <div className="col-12 d-flex justify-content-end pt-5 px-5">
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li class="page-item ">
                    <a class="page-link " href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>

                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div> */}
          </div>
        </div>
      </div>

      {/* <div className="row w-100 mt-2 d-xl-none position-relative  ">
          <img className="img-fluid   " src={Prombl} alt="img" />
          <div className=" position-absolute">
            <div className="col-4  position-relative">
              <input
                type="text"
                className="search-intt"
                placeholder="search"
              ></input>
              <span>
                <IoIosSearch className=" position-absolute search-icon"></IoIosSearch>
              </span>
            </div>
            <div className="col-4 text-center">
              <img className="img-fluid " src={Vector} alt="img" />
            </div>
            <div className="col-4 d-flex ">
              <button className="filter-butn">
                {" "}
                Fillter
                <IoFilter className="filter-icon mx-3" />
              </button>
            </div>
          </div>
        </div> */}
    </section>
  );
}

export default ProcessStatus;
