import React from "react";
import "../assests/css/team_coordinator.css";
import { BsBarChartLine } from "react-icons/bs";
import Sider from "../components/Sider";
import Header from "../components/Header";
import { AiOutlineAlert } from "react-icons/ai";
import { MdDoNotDisturb } from "react-icons/md";

import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import "datatables.net-select-dt";
import "datatables.net-responsive-dt";

import { VscGitStashPop } from "react-icons/vsc";

import { IoMdAdd } from "react-icons/io";

import { Link } from "react-router-dom";

DataTable.use(DT);

function Freelancer_dashboard() {
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
                  {/* <div className="row  align-items-center ">
                    <div className="col-12 col-md-6  total-project-team ">
                      <div className="  d-flex px-3  mt-3">
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
                      <div className=" d-flex">
                        <div className="manage-title  mx-3 d-flex justify-content-around ">
                          <p className="mt-1 px-2 pt-2 p-tag-round">Writer</p>
                          <div className="manage-num-round mt-1 pt-3 d-flex justify-content-around align-items-center">
                            <p className="p-tag2">42</p>
                          </div>
                        </div>
                        <div className="manage-title  mx-3 d-flex justify-content-around ">
                          <p className="mt-1 pt-2 px-2 p-tag-round">
                            Reviewing
                          </p>
                          <div className="manage-num-round mt-1 pt-3 d-flex justify-content-around align-items-center">
                            <p className="p-tag2 ">0</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-3">
                      <div className=" project-task px-1 align-items-center d-flex justify-content-center gap-3">
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
                    </div>
                    <div className="col-12 col-xl-3">
                      <div className=" project-task px-1 align-items-center d-flex justify-content-center gap-3">
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
                    </div>
                  </div> */}
                  <div className="row  a ">
                    <div className="col-12 col-md-6 pt-5 total-project-team ">
                      {/* <div className="  d-flex px-3  mt-3">
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
                                        </div> */}
                      <div className=" d-flex">
                        <div className="manage-title  mx-3 d-flex justify-content-around ">
                          <p className="mt-1 px-2 pt-2 p-tag-round">Writer</p>
                          <div className="manage-num-round mt-1 pt-3 d-flex justify-content-around align-items-center">
                            <p className="p-tag2">42</p>
                          </div>
                        </div>
                        <div className="manage-title  mx-3 d-flex justify-content-around ">
                          <p className="mt-1 pt-2 px-2 p-tag-round">
                            Reviewing
                          </p>
                          <div className="manage-num-round mt-1 pt-3 d-flex justify-content-around align-items-center">
                            <p className="p-tag2 ">0</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-3">
                      <div className=" project-task px-1 align-items-center d-flex justify-content-center gap-3">
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
                    </div>
                    <div className="col-12 col-xl-3">
                      <div className=" project-task px-1 align-items-center d-flex justify-content-center gap-3">
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
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="row pt-1 mt-1   w-100 gap-3   ">
              <div className="col project-manage-view">
                <div className="row pt-1 mt-1   w-100  ">
                  <p className="heading-entr mt-2">
                    Manuscript Count and Status
                  </p>
                  <div class="mt-3 table-responsive  table-wrapper-scroll-y my-custom-scrollbar1  ">
                    <table>
                      <thead className>
                        <tr>
                          <th>Status</th>
                          <th>Writing</th>
                          <th>Reviewing</th>
                        </tr>
                      </thead>
                      <tbody className="">
                        <tr>
                          <td className="td-no">Completed</td>
                          <td className="td-no">12</td>
                          <td className="td-no">20</td>
                        </tr>
                        <tr>
                          <td className="td-no">ON Going</td>
                          <td className="td-no">12</td>
                          <td className="td-no">20</td>
                        </tr>
                        <tr>
                          <td className="td-no">Correction 1</td>
                          <td className="td-no">12</td>
                          <td className="td-no">20</td>
                        </tr>
                        {/* <tr>
                      <td className="td-no">Correction 2</td>
                      <td className="td-no">12</td>
                      <td className="td-no">20</td>
                    </tr> */}
                        <tr>
                          <td className="td-no">plag Correction</td>
                          <td className="td-no">12</td>
                          <td className="td-no">20</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col project-manage-view">
                <div className="row pt-1 mt-1   w-100  ">
                  <p className="heading-entr mt-2">Thesis Count and Status</p>
                  <div class="mt-3 table-responsive  table-wrapper-scroll-y my-custom-scrollbar1 ">
                    <table>
                      <thead className>
                        <tr>
                          <th>Status</th>
                          <th>Writing</th>
                          <th>Reviewing</th>
                        </tr>
                      </thead>
                      <tbody className="">
                        <tr>
                          <td className="td-no">Completed</td>
                          <td className="td-no">12</td>
                          <td className="td-no">20</td>
                        </tr>
                        <tr>
                          <td className="td-no">ON Going</td>
                          <td className="td-no">12</td>
                          <td className="td-no">20</td>
                        </tr>
                        <tr>
                          <td className="td-no">Correction 1</td>
                          <td className="td-no">12</td>
                          <td className="td-no">20</td>
                        </tr>
                        {/* <tr>
                      <td className="td-no">Correction 2</td>
                      <td className="td-no">12</td>
                      <td className="td-no">20</td>
                    </tr> */}
                        <tr>
                          <td className="td-no">plag Correction</td>
                          <td className="td-no">12</td>
                          <td className="td-no">20</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <section className="row pt-1   project-manage-view w-100   ">
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

export default Freelancer_dashboard;
