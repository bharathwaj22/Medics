import React from "react";

import { BsBarChartLine } from "react-icons/bs";
import Sider from "../components/Sider";

import Header from "../components/Header";
import { AiOutlineAlert } from "react-icons/ai";
import { MdDoNotDisturb } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { GiPiggyBank } from "react-icons/gi";

import ReactDOM from "react-dom";

import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import "datatables.net-select-dt";
import "datatables.net-responsive-dt";
import { useState, useEffect } from "react";
import { VscGitStashPop } from "react-icons/vsc";

import { IoMdAdd } from "react-icons/io";

import axios from "axios";
import { Link } from "react-router-dom";

DataTable.use(DT);

function Project_manager_dashboard() {
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
  const columns = [
    // {
    //   title: "S.NO",
    //   data: null,
    //   render: (data, type, row, meta) => meta.row + 1,
    // },
    { title: "MONTH ", data: "id" },
    { title: "Manuscript ", data: "id" },
    { title: "Statistics", data: "id" },
    { title: "thesis ", data: "id" },
    { title: "Others ", data: "id" },
    { title: "Presentation ", data: "id" },
    { title: "Total", data: "id" },
    { title: "Manuscript", data: "id" },
    { title: "Statistics", data: "id" },
    { title: "thesis ", data: "id" },
    { title: "Target", data: "id" },

    // {
    //   title: "",
    //   data: null,
    //   render: (data, type, row) => {
    //     const id = `actions-${row.sno || Math.random()}`;
    //     setTimeout(() => {
    //       const container = document.getElementById(id);
    //       if (container && !container.hasChildNodes()) {
    //         ReactDOM.render(
    //           <div className="d-flex justify-content-center">
    //             <VscEye onClick={openPopup} className="open-icon" />
    //           </div>,
    //           container
    //         );
    //       }
    //     }, 0);
    //     return `<div id="${id}"></div>`;
    //   },
    // },
  ];
  return (
    <>
      <section className="main ">
        <div className="row mt-4 w-100">
          <div className="col-1 d-flex    justify-content-center">
            <Sider />
          </div>
          <div className="col-11 ">
            <div className="col-12">
              <Header></Header>
            </div>
            <div className="row pt-1 mt-3 py-3 project-manage w-100 ">  
              <section className="col-12 ">
                <div className="row  px-3">
                  <div className="col-12 mt-4 d-flex justify-content-between">
                    <p className="heading-entr">Project management</p>
                    <div className="col-2 text-center  ">
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
                  </div>
                  <div className="row  gap-2">
                    <div className=" col total-project    mx-2">
                      <div className=" w-100 d-flex px-3  mt-3">
                        <div className="graphic-box  mt-2 ">
                          <BsBarChartLine className=" graphic-icon m-2" />
                        </div>
                        <div>
                          <div className=" d-flex mx-2 project-head gap-3 ">
                            <p className=" text-muted dash-year ">2024</p>
                            <p className=" text-muted dash-project ">
                              Total Projects
                            </p>
                          </div>
                          <div className=" h1  px-2">1000</div>
                        </div>
                      </div>
                      <div className="manage-title  mx-3  d-flex justify-content-around mt-1">
                        <p className="mt-1 pt-2 px-2 p-tag">Manuscript</p>
                        <div className="manage-num mt-1 pt-3 d-flex justify-content-around align-items-center">
                          <p className="p-tag2">432</p>
                          <p className="p-tag3">40.2%</p>
                        </div>
                      </div>
                      <div className="manage-title  mx-3 d-flex justify-content-around mt-3">
                        <p className="mt-1 pt-2 px-2 p-tag">Thesis</p>
                        <div className="manage-num mt-1 pt-3 d-flex justify-content-around align-items-center">
                          <p className="p-tag2 ">432</p>
                          <p className="p-tag3 ">40.2%</p>
                        </div>
                      </div>
                      <div className="manage-title  mx-3 d-flex justify-content-around mt-3 ">
                        <p className="mt-1 pt-2 px-2 p-tag">Statistics</p>
                        <div className="manage-num mt-1 pt-3 d-flex justify-content-around align-items-center">
                          <p className="p-tag2 ">432</p>
                          <p className="p-tag3 ">40.2%</p>
                        </div>
                      </div>
                      <div className="manage-title  mx-3 d-flex justify-content-around mt-3">
                        <p className="mt-1 pt-2 px-2 p-tag">Presentation</p>
                        <div className="manage-num mt-1  pt-3 d-flex justify-content-around align-items-center">
                          <p className="p-tag2 ">432</p>
                          <p className="p-tag3 ">40.2%</p>
                        </div>
                      </div>
                      <div className="manage-title  mx-3 d-flex justify-content-around mt-3">
                        <p className="mt-1 pt-2 px-2 p-tag">Others</p>
                        <div className="manage-num mt-1  pt-3 d-flex justify-content-around align-items-center">
                          <p className="p-tag2 ">432</p>
                          <p className="p-tag3 ">40.2%</p>
                        </div>
                      </div>
                    </div>

                    <div className=" col total-project   mx-2">
                      <div className=" w-100 d-flex px-3 mt-3">
                        <div className="graphic-box  mt-2 ">
                          <BsBarChartLine className=" graphic-icon m-2" />
                        </div>
                        <div>
                          <div className="status-title px-2 mt-3 mx-3">
                            Process Status
                          </div>
                        </div>
                      </div>
                      <div className="manage-title  mx-3 d-flex justify-content-around mt-4">
                        <p className="mt-1 pt-2 px-2 p-tag">Not Assigned</p>
                        <div className="manage-num mt-1 pt-3 d-flex justify-content-around align-items-center">
                          <p className="p-tag2">432</p>
                          <p className="p-tag3">40.2%</p>
                        </div>
                      </div>
                      <div className="manage-title  mx-3 d-flex justify-content-around mt-3">
                        <p className="mt-1 pt-2 px-2 p-tag">Pending-Writer</p>
                        <div className="manage-num mt-1 pt-3 d-flex justify-content-around align-items-center">
                          <p className="p-tag2 ">432</p>
                          <p className="p-tag3 ">40.2%</p>
                        </div>
                      </div>
                      <div className="manage-title  mx-3 d-flex justify-content-around mt-3 ">
                        <p className="mt-1 pt-2 px-2 p-tag">Pending-Reviewer</p>
                        <div className="manage-num mt-1 pt-3 d-flex justify-content-around align-items-center">
                          <p className="p-tag2 ">432</p>
                          <p className="p-tag3 ">40.2%</p>
                        </div>
                      </div>
                      <div className="manage-title  mx-3 d-flex justify-content-around mt-3">
                        <p className="mt-1 pt-2 px-2 p-tag">
                          Pending-Statistics
                        </p>
                        <div className="manage-num mt-1    pt-3 d-flex justify-content-around align-items-center">
                          <p className="p-tag2 ">432</p>
                          <p className="p-tag3 ">40.2%</p>
                        </div>
                      </div>
                      <div className="manage-title  mx-3 d-flex justify-content-around mt-3">
                        <p className="mt-1 pt-2 px-2 p-tag">completed 2024</p>
                        <div className="manage-num mt-1  pt-3 d-flex justify-content-around align-items-center">
                          <p className="p-tag2 ">432</p>
                          <p className="p-tag3 ">40.2%</p>
                        </div>
                      </div>
                    </div>

                    <div className=" col total-project   mx-2">
                      <div className=" w-100 d-flex px-3 mt-3">
                        <div className="graphic-box  mt-2 ">
                          <BsBarChartLine className=" graphic-icon m-2" />
                        </div>
                        <div>
                          <div className="status-title px-2 mt-3 mx-3">
                            Journal Status
                          </div>
                        </div>
                      </div>
                      <div className="manage-title  mx-3 d-flex justify-content-around mt-4">
                        <p className="mt-1 px-2 pt-2 p-tag-round">
                          Pending - Author
                        </p>
                        <div className="manage-num-round mt-1 pt-3 d-flex justify-content-around align-items-center">
                          <p className="p-tag2">432</p>
                        </div>
                      </div>
                      <div className="manage-title  mx-3 d-flex justify-content-around mt-3">
                        <p className="mt-1 pt-2 px-2 p-tag-round">
                          Waiting for Submission
                        </p>
                        <div className="manage-num-round mt-1 pt-3 d-flex justify-content-around align-items-center">
                          <p className="p-tag2 ">0</p>
                        </div>
                      </div>
                      <div className="manage-title  mx-3 d-flex justify-content-around mt-3 ">
                        <p className="mt-1 px-2 pt-2 p-tag-round">
                          Peer Review
                        </p>
                        <div className="manage-num-round mt-1 pt-3 d-flex justify-content-around align-items-center">
                          <p className="p-tag2 ">77</p>
                        </div>
                      </div>
                      <div className="manage-title  mx-3 d-flex justify-content-around mt-3">
                        <p className="mt-1 pt-2 px-2 p-tag-round">
                          Review Client
                        </p>
                        <div className="manage-num-round mt-1  pt-3 d-flex justify-content-around align-items-center">
                          <p className="p-tag2 ">1</p>
                        </div>
                      </div>
                      <div className="manage-title  mx-3 d-flex justify-content-around mt-3">
                        <p className="mt-1 pt-2 px-2 p-tag-round">Rejected</p>
                        <div className="manage-num-round mt-1  pt-3 d-flex justify-content-around align-items-center">
                          <p className="p-tag2 ">0</p>
                        </div>
                      </div>
                    </div>
                    {/* <div className=" col total-project   mx-2">
                    <div className=" w-100 d-flex px-3 mt-3">
                      <div className="graphic-box  mt-2 ">
                        <BsBarChartLine className=" graphic-icon m-2" />
                      </div>
                      <div>
                        <div className="status-title px-2 mt-3 mx-3">
                          Payment Status
                        </div>
                      </div>
                    </div>
                    <div className="manage-title  mx-3 d-flex justify-content-around mt-4">
                      <p className="mt-1 px-2 pt-2 p-tag-round">
                        Advance Pending
                      </p>
                      <div className="manage-num-round mt-1 pt-3 d-flex justify-content-around align-items-center">
                        <p className="p-tag2">77</p>
                      </div>
                    </div>
                    <div className="manage-title  mx-3 d-flex justify-content-around mt-3">
                      <p className="mt-1 pt-2 px-2 p-tag-round1">
                        Partial Payment pending
                      </p>
                      <div className="manage-num-round mt-1 pt-3  mx-1 d-flex justify-content-around align-items-center">
                        <p className="p-tag2 ">0</p>
                      </div>
                    </div>
                    <div className="manage-title  mx-3 d-flex justify-content-around mt-3 ">
                      <p className="mt-1 px-2 pt-2 p-tag-round">
                        Payment Pending
                      </p>
                      <div className="manage-num-round mt-1 pt-3 d-flex justify-content-around align-items-center">
                        <p className="p-tag2 ">55</p>
                      </div>
                    </div>
                    <div className="manage-title  mx-3 d-flex justify-content-around mt-3">
                      <p className="mt-1 pt-2 px-2 p-tag-round">Presentation</p>
                      <div className="manage-num-round mt-1  pt-3 d-flex justify-content-around align-items-center">
                        <p className="p-tag2 ">0</p>
                      </div>
                    </div>
                    <div className="manage-title  mx-3 d-flex justify-content-around mt-3">
                      <p className="mt-1 pt-2 px-2 p-tag-round">
                        Balance to pay
                      </p>
                      <div className="manage-num-round mt-1  pt-3 d-flex justify-content-around align-items-center">
                        <p className="p-tag2 ">4</p>
                      </div>
                    </div>
                  </div> */}
                    <div className=" col total-project   ">
                      <div className=" w-100 d-flex px-3 mt-3">
                        <div className="graphic-box  mt-2 ">
                          <BsBarChartLine className=" graphic-icon m-2" />
                        </div>
                        <div>
                          <div className="status-title px-2 mt-3 mx-3">
                            Completed Count
                          </div>
                        </div>
                      </div>
                      <div className="manage-title  mx-3 d-flex justify-content-around mt-4">
                        <p className="mt-1 px-2 pt-2 p-tag-round">Manuscript</p>
                        <div className="manage-num-round mt-1 pt-3 d-flex justify-content-around align-items-center">
                          <p className="p-tag2">42</p>
                        </div>
                      </div>
                      <div className="manage-title  mx-3 d-flex justify-content-around mt-3">
                        <p className="mt-1 pt-2 px-2 p-tag-round">Thesis</p>
                        <div className="manage-num-round mt-1 pt-3 d-flex justify-content-around align-items-center">
                          <p className="p-tag2 ">0</p>
                        </div>
                      </div>
                      <div className="manage-title  mx-3 d-flex justify-content-around mt-3 ">
                        <p className="mt-1 px-2 pt-2 p-tag-round">Statistics</p>
                        <div className="manage-num-round mt-1 pt-3 d-flex justify-content-around align-items-center">
                          <p className="p-tag2 ">77</p>
                        </div>
                      </div>
                      <div className="manage-title  mx-3 d-flex justify-content-around mt-3">
                        <p className="mt-1 pt-2 px-2 p-tag-round">
                          Presentation
                        </p>
                        <div className="manage-num-round mt-1  pt-3 d-flex justify-content-around align-items-center">
                          <p className="p-tag2 ">55</p>
                        </div>
                      </div>
                      <div className="manage-title  mx-3 d-flex justify-content-around mt-3">
                        <p className="mt-1 pt-2 px-2 p-tag-round">Others</p>
                        <div className="manage-num-round mt-1  pt-3 d-flex justify-content-around align-items-center">
                          <p className="p-tag2 ">0</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="col-12">
                <div className="row px-4 py-3 gap-3">
                  {/* Task Count Boxes */}
                  <div className="col project-task px-1 align-items-center d-flex justify-content-center gap-3">
                    <div className="task-box align-items-center pt-3">
                      <AiOutlineAlert className="project-icon" />
                    </div>
                    <div className="align-items-center">
                      <p className="project-writer pt-2">
                        Emergency work count
                      </p>
                      <div className="h4">5</div>
                    </div>
                  </div>
                  <div className="col project-task px-1 align-items-center d-flex justify-content-center gap-3">
                    <div className="task-box1 align-items-center pt-1">
                      <MdDoNotDisturb className="project-icon1 mt-3" />
                    </div>
                    <div className="align-items-center">
                      <p className="project-writer pt-2">
                        Not Assgined Work Count
                      </p>
                      <div className="h4">825</div>
                    </div>
                  </div>
                  <div className="col project-task px-1 align-items-center d-flex justify-content-center gap-3">
                    <div className="task-box2 align-items-center pt-1">
                      <FaFileInvoiceDollar className="project-icon2 mt-3" />
                    </div>
                    <div className="align-items-center">
                      <p className="project-writer pt-2">Project Delay Count</p>
                      <div className="h4">502</div>
                    </div>
                  </div>
                  <div className="col project-task px-1 align-items-center d-flex justify-content-center gap-3">
                    <div className="task-box3 align-items-center pt-3">
                      <GiPiggyBank className="project-icon3" />
                    </div>
                    <div className="align-items-center">
                      <p className="project-writer pt-2">
                        Freelancer Payment count
                      </p>
                      <div className="h4">5</div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <section className="row pt-1 mt-2 project-manage w-100 py-5">
              <div className="row  px-3">
                <div className="col-12 mt-4">
                  <p className="heading-entr">Comparison Of Journal </p>
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
            </section>

            <section className="row pt-1 mt-3  project-manage w-100   ">
              <div className="d-flex flex-wrap  p-3  ">
                <div className="col  ">
                  <div>TODO</div>
                  <div className="task-list ">
                    <Link to="/project-view " className="text-decoration-none">
                      <div className=" task-details m-2 p-2">
                        <p className="m-0 task-name-todo">Rabina</p>
                        <p className="task-comments">
                          lorem ipsum dolor sit amet, consectetur adip id
                          nncbuyg kjnsdguw hjwhbduyugfys dhjwhdiu
                        </p>
                        <div className="d-flex justify-content-between">
                          <div className="task-thesis-head">
                            <p className="task-thesis">Manuscript</p>
                          </div>
                          <div className="task-thesis-head1">
                            <p className="task-thesis1">Writer</p>
                          </div>
                          <div className="task-thesis-head2">
                            <p className="task-thesis2">Completed</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col ">
                  <div>IN WORK</div>
                  <div className="task-list "></div>
                </div>
                <div className="col ">
                  <div>Reviews</div>
                  <div className="task-list "></div>
                </div>
                <div className="col ">
                  <div>Correction</div>
                  <div className="task-list "></div>
                </div>
                <div className="col ">
                  <div>COMPLETED</div>
                  <div className="task-list "></div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project_manager_dashboard;
