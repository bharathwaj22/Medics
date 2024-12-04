import React from "react";
import "../assests/css/modula.css";
import Sider from "../components/Sider";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import { TfiPencilAlt } from "react-icons/tfi";
import { RiDeleteBin6Line } from "react-icons/ri";
import Modula_header from "./Modula_header";
import { IoMdAdd } from "react-icons/io";
import { VscGitStashPop } from "react-icons/vsc";

function Modula_department() {
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

  const [isOpenadd, setIsOpenadd] = useState(false);

  const openPopupadd = () => setIsOpenadd(true);
  const closePopupadd = () => setIsOpenadd(false);
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

  const [formData, setFormData] = useState({
    name: "",

    status: "",
  });
  // Validate form before submission
  const validateForm = () => {
    let formErrors = {};

    if (!formData.name) formErrors.name = "name is required";
    if (!formData.status) formErrors.status = "status is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmitadd = (e) => {
    e.preventDefault();

    // If form is valid, process the data
    if (validateForm()) {
      console.log("Form data submitted:", formData);
    }
  };

  return (
    <>
      <section className="main ">
        <div className="row mt-4 w-100">
          <div className="col-1 d-flex   justify-content-center">
            <Sider />
          </div>
          <div className="col-11">
            <div className="col-12">
              <Header></Header>
            </div>
            <div className="col-12 wapper w-100 mt-3 pt-5 py-5 ">
              <div className="col-12 d-flex justify-content-center w-100">
                <Modula_header></Modula_header>
              </div>
              <div className="col text-center mt-3 ">
                <div className=" d-flex justify-content-center    ">
                  <div className="add-icon">
                    <IoMdAdd onClick={openPopupadd} className="add1-icon" />
                  </div>
                  {isOpenadd && (
                    <div className="popup-container">
                      <div className="popup-add">
                        <div className="popup-content-add">
                          <span className="close" onClick={closePopupadd}>
                            &times;
                          </span>

                          <div className="popup-content1 px-5 ">
                          <form onSubmit={handleSubmitadd}>
                              <div className="row w-100 mt-2 ">
                                <div className="col-12  float-start pt-5 ">
                                  <h5 className="statis-name mx-2">Name</h5>
                                  <input
                                    type="text"
                                    className={`client-info mx-3 ${
                                      errors.name ? "error" : ""
                                    }`}
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChangepending}
                                  />
                                </div>

                                <div className="col float-start pt-5 ">
                                  <h5 className="statis-name mx-3">Status</h5>
                                  <select
                                    className={`mx-3 client-info ${
                                      errors.status ? "error" : ""
                                    }`}
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChangepending}
                                  >
                                    <option value="" disabled>
                                      Status
                                    </option>
                                    <option value="1">Active</option>
                                    <option value="2">Inactive</option>
                                  </select>
                                </div>
                              </div>

                              <div className="col-md-12 d-flex justify-content-center mt-2  px-5 py-5 ">
                                <button type="submit" className="save-form ">
                                  Save
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="add-icon">
                    <VscGitStashPop className="exit-icon" />
                  </div>
                </div>
              </div>
              <div className="col-12 mt-3 px-2 table-responsive  table-wrapper-scroll-y my-custom-scrollbar  ">
                <table className=" table-head   ">
                  <thead>
                    <tr className="text-center tr-head  ">
                      <th className="">S.NO </th>
                      <th className="">NAME</th>
                      <th className="">STATUS</th>

                      <th className="">ACTION</th>

                      <th></th>
                    </tr>
                  </thead>

                  <React.Fragment>
                    {data.map((item) => (
                      <tbody key={item.id}>
                        <tr className=" text-center tr-head ">
                          <td>{item["s.no"]}</td>
                          <td>{item.id}</td>
                          <td>{item.department}</td>

                          <td className="d-flex justify-content-center ">
                            <div className="d-flex justify-content-around modula-main mt-1  ">
                              <div
                                className="modula-icon-edit"
                                onClick={openPopup}
                              >
                                <TfiPencilAlt />
                              </div>
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

                                      <div className="popup-content1 px-5 ">
                                      <div className="row w-100 mt-2 ">
                                          <div className="col-12  float-start pt-5 ">
                                            <h5 className="statis-name ">
                                              Name
                                            </h5>
                                            <input
                                              type="text"
                                              className=" mx-2 client-info1 "
                                              readOnly={isReadOnly}
                                            />
                                          </div>

                                          <div className="col float-start pt-5 ">
                                            <h5 className="statis-name ">
                                              Status
                                            </h5>
                                            <input
                                              type="text"
                                              className=" mx-2 client-info1 "
                                              readOnly={isReadOnly}
                                            />
                                          </div>
                                        </div>

                                        <div className="col-md-12 d-flex justify-content-center mt-2  px-5 py-5 ">
                                          <button
                                            type="submit"
                                            className="save-form "
                                          >
                                            Save
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}

                              <div className="border border-1"></div>
                              <div className="modula-icon-del">
                                <RiDeleteBin6Line />
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </React.Fragment>
                </table>
              </div>
              <div className="col-12 d-flex justify-content-end pt-5 px-5">
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
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Modula_department;
