import React from "react";
import "../assests/css/entryprocess.css";
import Vector from "..//assests/images/Vector.svg";

// import Rectan from "..//assests/images/Rectan.svg";
// import Prombl from "..//assests/images/prombl.png";
import { IoIosSearch } from "react-icons/io";
// import { IoFilter } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { VscGitStashPop } from "react-icons/vsc";
import { VscEye } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
// import { MdKeyboardArrowDown } from "react-icons/md";
import axios from "axios";
import Sider from "./Sider";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
function Entryprocess() {
  
  const [data, setData] = useState([]);
  
  const [date, setDate] = useState(null);
  const [date1, setDate1] = useState(null);

  useEffect(() => {}, []);

  const handleDateChange = (date) => {
    setDate(date);
  };
  const handleDateChange1 = (date1) => {
    setDate1(date1);
  };

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
    <section className=" main ">
      <div className=" row mt-4 w-100 ">
        <div className=" col-1  d-flex justify-content-center">
          <Sider></Sider>
        </div>

        <div className="col-11 wapper ">
          <div className=" row mt-5 d-flex w-100">
            <div className="col-5     ">
              <div className=" search-di position-relative px-4 mt-3">
                <input
                  type="text"
                  className=" search-intt position-absolute z n1 "
                  placeholder="search..."
                ></input>

                <IoIosSearch className="  search-icon position-relative  "></IoIosSearch>
              </div>
            </div>
            <div className="col-2 text-center mt-0 ">
              <img className="img-process " src={Vector} alt="img" />
            </div>
            <div className="d-flex  col-5   col-md-5   col-lg-5   justify-content-between align-items-center  gap-2 date-sel">
              <input type="text" className=" input-butn1  " placeholder="ID" />

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

          <div className="row ">
            <div className="col-5 d-flex mt-4 px-5  ">
              <p className="heading-entr mx-2">Entry Process</p>
            </div>
            <div className="col-7   d-flex justify-content-start mt-4  ">
              <div className="text-center d-flex    ">
                <div className="add-icon">
                  <NavLink to="/enter_process_form">
                    <IoMdAdd className="add1-icon" />
                  </NavLink>
                </div>
                <div className="add-icon">
                  <VscGitStashPop className="exit-icon" />
                </div>
              </div>
            </div>
            <div className=" row w-100  ">
              <div className="col-12 mt-2 mx-4 table-responsive  table-wrapper-scroll-y my-custom-scrollbar  ">
                <table className=" table-head   ">
                  <thead>
                    <tr className="text-center tr-head  ">
                      <th className="">S.NO </th>
                      <th className="">ID</th>
                      <th className="">DATE</th>
                      <th className="">DEPARTMENT</th>
                      <th className="">INSTITUTION</th>
                      <th className="">AUTHOR</th>
                      <th className="">PROFESSION</th>
                      <th></th>
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
                          <td>
                            <VscEye onClick={openPopup} className="open-icon" />
                            {isOpen && (
                              <div className="popup-container">
                                <div className="popup">
                                  <div className="popup-content">
                                    <span
                                      className="close"
                                      onClick={closePopup}
                                    >
                                      &times;
                                    </span>
                                    {/* <img className="pop " src={popup} alt="img" /> */}

                                    <div className="popup-content1 ">
                                      <div className="row mt-5 mx-2">
                                        <div className="col-4  ">
                                          <h5 className="statis-name mx-3">
                                            Entry Date
                                          </h5>

                                          <input
                                            type="text"
                                            className="client-info1"
                                            readOnly={isReadOnly}
                                          />
                                        </div>
                                        <div className="col-4 ">
                                          <h5 className="popup-name ">Title</h5>

                                          <input
                                            type="text"
                                            className="client-info1 "
                                            readOnly={isReadOnly}
                                          />
                                        </div>
                                        <div className="col-4 ">
                                          <h5 className="statis-name mx-2">
                                            Type Of work
                                          </h5>
                                          <input
                                            type="text"
                                            className="client-info1"
                                            readOnly={isReadOnly}
                                          />
                                        </div>
                                      </div>
                                      <div className="row  mt-5">
                                        <div className="col-12">
                                          <h5 className="client-name mx-5 ">
                                            Client Information
                                          </h5>
                                        </div>
                                      </div>
                                      <div className="row mt-4  ">
                                        <div className="col-4 ">
                                          <div className="mx-5 ">
                                            <div>
                                              <h5 className="statis-name ">
                                                Client Name
                                              </h5>
                                              <input
                                                type="none"
                                                className="client-info"
                                                readOnly={isReadOnly}
                                              />
                                            </div>
                                            <div className="mt-5">
                                              <h5 className="statis-name ">
                                                Profession
                                              </h5>
                                              <input
                                                type="text"
                                                className="client-info"
                                                readOnly={isReadOnly}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-4">
                                          <div className="mx-4">
                                            <div>
                                              <h5 className="statis-name ">
                                                Institute
                                              </h5>
                                              <input
                                                type="text"
                                                className="client-info"
                                                readOnly={isReadOnly}
                                              />
                                            </div>

                                            <div>
                                              <h5 className="statis-name mt-5 ">
                                                Contact No
                                              </h5>
                                              <input
                                                type="text"
                                                className="client-info"
                                                readOnly={isReadOnly}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-4">
                                          <div className="mx-4">
                                            <div>
                                              <h5 className="statis-name ">
                                                Department
                                              </h5>
                                              <input
                                                type="text"
                                                className="client-info"
                                                readOnly={isReadOnly}
                                              />
                                            </div>
                                            <div>
                                              <h5 className="statis-name mt-5 ">
                                                Email ID
                                              </h5>
                                              <input
                                                type="email"
                                                className="client-info"
                                                readOnly={isReadOnly}
                                              />
                                            </div>
                                            
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row my-4">
                                        <div className="col-4 ">
                                        
                                              <h5 className="statis-name mt-3  ">
                                                Hierarchical
                                              </h5>
                                              <input
                                                type="email"
                                                className="client-info1 mx-5"
                                                readOnly={isReadOnly}
                                              />
                                            
                                        </div>
                                        <div className="col-5 mt-5  ">
                                              <div className="popup-edit ">
                                                <button className="save-btn1">
                                                  Edit
                                                </button>
                                              </div>
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
            </div>
          </div>
        </div>
      </div>

      {/* <div className="row w-100 mt-2 d-md-none position-relative  ">
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

export default Entryprocess;
