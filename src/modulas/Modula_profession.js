
import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import { IoMdAdd } from "react-icons/io";
import { TfiPencilAlt } from "react-icons/tfi";
import { RiDeleteBin6Line } from "react-icons/ri";
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import "datatables.net-select-dt";
import "datatables.net-responsive-dt";
import Sider from "../components/Sider";
import Header from "../components/Header";

import { VscGitStashPop } from "react-icons/vsc";

import Modula_header from "./Modula_header";

DataTable.use(DT);

function Modula_Profession() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ name: "", status: "" });
  const [errors, setErrors] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAdd, setIsOpenAdd] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/c/940c-c0cc-4b48-98d9"
      );
      setData(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openPopup = () => {
    console.log("Opening popup...");
    setIsOpen(true);
  };
  const closePopup = () => {
    console.log("Closing popup...");
    setIsOpen(false);
  };

  const openPopupAdd = () => setIsOpenAdd(true);
  const closePopupAdd = () => setIsOpenAdd(false);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.status) formErrors.status = "Status is required";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmitAdd = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data submitted:", formData);
    }
  };

  const handleDelete = (rowData) => {
    console.log("Deleting row: ", rowData);
  };

  const columns = [
    { title: "S.NO", data: "sno" },
    { title: "Name", data: "name" },
    { title: "Status", data: "status" },
    {
      title: "Actions",
      data: null,
      render: (data, type, row) => {
        const id = `actions-${row.sno}`;
        setTimeout(() => {
          const container = document.getElementById(id);
          if (container && !container.hasChildNodes()) {
            ReactDOM.render(
              <div className="d-flex justify-content-center">
                <div className="d-flex justify-content-around modula-main mt-1  ">
                  <div className="modula-icon-edit" onClick={openPopup}>
                    <TfiPencilAlt />
                  </div>

                  <div className="border border-1"></div>

                  <div
                    className="modula-icon-del"
                    onClick={() => handleDelete(row)}
                  >
                    <RiDeleteBin6Line />
                  </div>
                </div>
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
    <section className="main">
      <div className="row mt-4 w-100">
        <div className="col-1 d-flex justify-content-center">
          <Sider />
        </div>
        <div className="col-11">
          <div className="col-12">
            <Header />
          </div>
          <div className="col-12 wapper w-100 mt-3 pt-5 py-5">
            <div className="col-12 d-flex justify-content-center w-100">
              <Modula_header />
            </div>
            <div className="col text-center mt-3">
              <div className="d-flex justify-content-center">
                <div className="add-icon">
                  <IoMdAdd onClick={openPopupAdd} className="add1-icon" />
                </div>
                {isOpenAdd && (
                  <div className="popup-container">
                    <div className="popup-add">
                      <div className="popup-content-add">
                        <span className="close" onClick={closePopupAdd}>
                          &times;
                        </span>
                        <div className="popup-content1 px-5 ">
                          <form onSubmit={handleSubmitAdd}>
                            <div className="row w-100 mt-2">
                              <div className="col-12 float-start p-3">
                                <label className="form-label">Name</label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.name ? "error" : ""
                                  }`}
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                />
                                {errors.name && (
                                  <span className="error">{errors.name}</span>
                                )}
                              </div>
                              <div className="col float-start">
                                <label className="form-label">Status</label>
                                <select
                                  className={`form-control ${
                                    errors.status ? "error" : ""
                                  }`}
                                  name="status"
                                  value={formData.status}
                                  onChange={handleChange}
                                >
                                  <option value="" disabled>
                                    Status
                                  </option>
                                  <option value="1">Active</option>
                                  <option value="2">Inactive</option>
                                </select>
                                {errors.status && (
                                  <span className="error">{errors.status}</span>
                                )}
                              </div>
                            </div>
                            <div className="col-md-12 d-flex justify-content-center px-5 py-5">
                              <button type="submit" className="save-form">
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

            <div className="px-1">
              <DataTable
                id="example"
                data={data}
                columns={columns}
                className="display"
                options={{ scrollX: true, select: true }}
              />
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="popup-container">
            <div className="popup">
              <div className="popup-content">
                <span className="close" onClick={closePopup}>
                  &times;
                </span>

                <div className="popup-content1 px-5 ">
                  <form >
                    <div className="row w-100 mt-2  ">
                      <div className="col-12  float-start p-3  ">
                        <label className="form-label d-flex justify-content-center">
                          Name
                        </label>
                        <input type="text" className=" form-control " />
                      </div>

                      <div className="col float-start  ">
                        <label className="form-label d-flex justify-content-center ">
                          Status
                        </label>
                        <select className=" form-control ">
                          <option value="" disabled>
                            Status
                          </option>
                          <option value="1">Active</option>
                          <option value="2">Inactive</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-12 d-flex justify-content-center   px-5 py-5 ">
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
      </div>
    </section>
  );
}

export default Modula_Profession;
