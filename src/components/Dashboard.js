import "../assests/css/dashboard.css";
import Sider from "./Sider";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import Header from "./Header";
import { BsBarChartLine } from "react-icons/bs";
import axios from "axios";
import { useState, useEffect } from "react";

import { PieChart, Pie, Cell } from "recharts";
import { VscGitStashPop } from "react-icons/vsc";

import { IoMdAdd } from "react-icons/io";

import { Link } from "react-router-dom";

import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import "datatables.net-select-dt";
import "datatables.net-responsive-dt";
import Breadcrumbs from "../routes/Breadcrumbs";

DataTable.use(DT);

function Dashboard() {
  // table api
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
  ];
  const COLORS = ["#3D99B4", "#212121"];

  const carddata = [
    { name: "presentation", value: 5000 },
    { name: "paper", value: 15000 },
    { name: "stats", value: 25000 },
    { name: "thesis", value: 10000 },
    { name: "Others", value: 50000 },
    { name: "Total", value: 20000 },
  ];

  // const COLORS = ["#212121", "#3D99B4"];

  // const randomStartAngle = Math.floor(Math.random() * 360);
  // const state = [
  //   { name: "Segment 1", value: 75 },
  //   { name: "Segment 2", value: 25 },
  // ];
  // const carddata = [
  //   {
  //     name: "Manuscript 1",
  //     value: 20,
  //     Segment: 80,
  //   },
  //   {
  //     name: "Manuscript 2",
  //     value: 15,
  //   },
  //   {
  //     name: "Manuscript 3",
  //     value: 25,
  //   },
  //   {
  //     name: "Manuscript 4",
  //     value: 10,
  //   },
  //   {
  //     name: "Manuscript 5",
  //     value: 300000,
  //   },
  //   {
  //     name: "Manuscript 6",
  //     value: 200000,
  //   },
  // ];
  // const cardexpense = [
  //   {
  //     name: "Manuscript 1",
  //     value: 20,
  //     Segment: 80,
  //   },
  //   {
  //     name: "Manuscript 2",
  //     value: 15,
  //   },
  //   {
  //     name: "Manuscript 3",
  //     value: 25,
  //   },
  //   {
  //     name: "Manuscript 4",
  //     value: 10,
  //   },
  //   {
  //     name: "Manuscript 5",
  //     value: 300000,
  //   },
  // ];

  const date = new Date();

  const [selectedMonth, setSelectedMonth] = useState(
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`
  );

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };
  const [selectedMonth1, setSelectedMonth1] = useState(
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`
  );

  const handleMonthChange1 = (event) => {
    setSelectedMonth1(event.target.value);
  };
  const datapie = [
    { name: "Journal", value: 30 },
    { name: "Salary", value: 15 },
    { name: "Freelancer", value: 20 },
    { name: "Office Expende", value: 30 },
  ];
  const COLORS1 = ["#C084FC", "#2563EB", "#22C55E", "#FB923C"];

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

            <section className="col-12 pb-3 mt-3  project-manage w-100 ">
              <div className="pt-2 px-2 d-none d-md-block">
                <Breadcrumbs></Breadcrumbs>
              </div>

              <div className="row  px-3 d-flex justify-content-between ">
                <div className="col-10 mt-4">
                  <p className="heading-entr">Project management</p>
                </div>
                <div className="col-2 text-center  mt-4 ">
                  <div className="d-flex justify-content-center ">
                    <div className="add-icon">
                      <Link to="/entry-process/enter_process_form">
                        <IoMdAdd className="add1-icon" />
                      </Link>
                    </div>
                    <div className="add-icon">
                      <VscGitStashPop className="exit-icon" />
                    </div>
                  </div>
                </div>
                <div className="row ">
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
                      <p className="mt-1 pt-2 px-2 p-tag">Pending-Statistics</p>
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
                      <p className="mt-1 px-2 pt-2 p-tag-round">Peer Review</p>
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
                  <div className=" col total-project   mx-2">
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
                  </div>
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
                      <p className="mt-1 pt-2 px-2 p-tag-round">Presentation</p>
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
            <section className="col-12 pt-1 mt-3 project-manage w-100 py-5">
              <div className="row  px-3">
                <div className="col-12 mt-4">
                  <p className="heading-entr">Writers Total Projects Status </p>
                </div>
                {/* <div className="col-12 px-2 table-responsive  table-wrapper-scroll-y my-custom-scrollbar  ">
                  <table className=" table-head    ">
                    <thead>
                      <tr className="text-center tr-head   ">
                        <th className="">Month</th>
                        <th className="">Manuscript</th>
                        <th className="">Statistics</th>
                        <th className="">Thesis</th>
                        <th className="">Others</th>
                        <th className="">Presentation</th>
                        <th className="">Total</th>
                        <th className="">Manuscript</th>
                        <th className="">Statistics</th>
                        <th className="">Thesis</th>
                        <th className="">Target</th>
                      </tr>
                    </thead>
                    <React.Fragment>
                      {data.map((item) => (
                        <tbody>
                          <tr className=" text-center tr-head ">
                            <td>{item["s.no"]}</td>
                            <td>{item.id}</td>
                            <td>{item.id}</td>
                            <td>{item.id}</td>
                            <td>{item.id}</td>
                            <td>{item.id}</td>
                            <td>{item.id}</td>
                            <td>{item.id}</td>
                            <td>{item.id}</td>
                            <td>{item.id}</td>
                            <td>{item.id}</td>
                          
                          </tr>
                        </tbody>
                      ))}
                    </React.Fragment>
                  </table>
                </div> */}
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
            <section className="row ">
              <div className="col-12 col-xxl-6 ">
                <div className="col-12 pt-1 mt-1 project-manage py-5">
                  <div className="row  px-3">
                    <div className="col-9 mt-2 px-4">
                      <p className="heading-entr">Income </p>
                    </div>
                    <div className="col-3 mt-4 px-4 gap-3 d-flex flex-wrap justify-content-end">
                      <div className="col">
                        <input
                          type="month"
                          id="monthInput"
                          className="people-select px-1"
                          value={selectedMonth}
                          onChange={handleMonthChange}
                          placeholder="YYYY-MM"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mt-2 ">
                    <div className="col ">
                      {carddata.map((item, index) => {
                        const pieData = [
                          { name: "Segment", value: item.value },
                          { name: "Remaining", value: 100000 - item.value },
                        ];

                        return (
                          <div
                            className="position-relative  justify-content-center"
                            key={index}
                          >
                            <PieChart width={200} height={117}>
                              <Pie
                                data={pieData}
                                cx={100}
                                cy={57.5}
                                innerRadius={30}
                                outerRadius={55}
                                fill="#8884d8"
                                paddingAngle={5}
                                cornerRadius={7}
                                startAngle={0}
                                endAngle={360}
                                dataKey="value"
                                animationDuration={1000}
                                isAnimationActive={true}
                                animationEasing="ease-out"
                              >
                                {pieData.map((entry, i) => (
                                  <Cell
                                    key={`cell-${i}`}
                                    fill={COLORS[i % COLORS.length]}
                                  />
                                ))}
                              </Pie>
                            </PieChart>
                            <p className="position-absolute pie-infom">
                              {item.value}
                            </p>
                            <p className="d-flex justify-content-center pie-text mt-2 ">
                              {item.name}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-xxl-6 pt-1 mt-1 project-manage  ">
                
                 
                   <div className="row  px-3">
                    <div className="col-9 mt-2 px-4">
                    <p className="heading-entr">
                      Income<span className="sym-project px-2">&</span>Exp
                    </p>
                    </div>
                    <div className="col-3 mt-4 px-4 gap-3 d-flex flex-wrap justify-content-end">
                      <div className="col">
                        <input
                          type="month"
                          id="monthInput"
                          className="people-select px-1"
                          value={selectedMonth1}
                          onChange={handleMonthChange1}
                          placeholder="YYYY-MM"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col d-flex mt-2  justify-content-center ">
                      <div className="position-relative   ">
                        <PieChart width={200} height={250}>
                          <Pie
                            data={datapie}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            // paddingAngle={2}
                            outerRadius={100}
                          >
                            {datapie.map((entry, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={COLORS1[index % COLORS1.length]}
                              />
                            ))}
                          </Pie>
                        </PieChart>
                        {/* ;<p className="position-absolute pie-infom1">100</p>
                      <p className="position-absolute pie-infom-exp1">3000</p> */}
                        <p className="d-flex justify-content-center pie-text   ">
                          Total Income & Exp
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6  pt-5">
                      <div className="col d-flex  align-items-center w-75 justify-content-between mt-5">
                        <div className="d-flex gap-3">
                          <div className="journal-dash-color"></div>
                          <div className="pie-text">Journal</div>
                        </div>
                        <div>
                          <div className="pie-text">45.61%</div>
                        </div>
                      </div>
                      <div className=" d-flex   align-items-center  w-75 justify-content-between mt-2">
                        <div className="d-flex gap-3">
                          <div className="salary-dash-color"></div>
                          <div className="pie-text">Salary</div>
                        </div>
                        <div>
                          <div className="pie-text">45.61%</div>
                        </div>
                      </div>
                      <div className=" d-flex   align-items-center  w-75 justify-content-between mt-2">
                        <div className="d-flex gap-3">
                          <div className="freelancer-dash-color"></div>
                          <div className="pie-text">Freelancer</div>
                        </div>
                        <div className="">
                          <div className="pie-text">45.61%</div>
                        </div>
                      </div>
                      <div className=" d-flex   align-items-center  w-75 justify-content-between mt-2">
                        <div className="d-flex gap-3">
                          <div className="office-dash-color"></div>
                          <div className="pie-text">Office Expende</div>
                        </div>
                        <div>
                          <div className="pie-text">45.61%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                
              </div>
            </section>

            {/* <section className="col-12 pt-1 mt-2 project-manage w-100 py-5">
              <div className="row  px-3">
                <div className="col-12 mt-4">
                  <p className="heading-entr">Comparison Of Journal </p>
                </div>
                <div className="col-12 px-2 table-responsive  table-wrapper-scroll-y my-custom-scrollbar  ">
                  <table className=" table-head    ">
                    <thead>
                      <tr className="text-center tr-head   ">
                        <th className="">2023</th>
                        <th className="">Count</th>
                        <th className="">2024</th>
                        <th className="">Count</th>
                      </tr>
                    </thead>
                    <React.Fragment>
                      {data.map((item) => (
                        <tbody>
                          <tr className=" text-center tr-head ">
                            <td>{item["s.no"]}</td>
                            <td>{item.id}</td>
                            <td>{item.date}</td>
                            <td>{item.department}</td>
                          </tr>
                        </tbody>
                      ))}
                    </React.Fragment>
                  </table>
                </div>
              </div>
            </section> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;

// import React, { useState } from "react";
// import { PiCloudArrowUpLight } from "react-icons/pi";
// import { RiDeleteBin6Line } from "react-icons/ri";

// const DocumentForm = () => {
//   const [formData, setFormData] = useState([
//     { typeofwork: "", specificOption: "", file: null },
//   ]);
//   const [errors, setErrors] = useState([]);

//   // Mapping for options based on the 'typeofwork' value
//   const optionsMapping = {
//     statistics: [
//       { value: "option1", label: "Option 1" },
//       { value: "option2", label: "Option 2" },
//     ],
//     manuscript: [
//       { value: "optionA", label: "Option A" },
//       { value: "optionB", label: "Option B" },
//     ],
//     thesis: [
//       { value: "optionX", label: "Option X" },
//       { value: "optionY", label: "Option Y" },
//     ],
//     presentation: [
//       { value: "optionM", label: "Option M" },
//       { value: "optionN", label: "Option N" },
//     ],
//   };

//   const handleChangeSelect = (index, e) => {
//     const newFormData = [...formData];
//     newFormData[index][e.target.name] = e.target.value;

//     console.log(`Updated field at index ${index}:`, newFormData[index]);

//     setFormData(newFormData);
//     setErrors(errors.filter((err) => err.index !== index)); // Clear errors for the specific field

//     console.log("Updated formData:", newFormData);
//   };

//   const handleFileChange = (index, e) => {

//     const newFormData = [...formData];

//     newFormData[index] = {
//       ...newFormData[index],
//       file: e.target.files[0],
//     };

//     console.log(`File uploaded for index ${index}:`, e.target.files[0]);

//     setFormData(newFormData);

//     setErrors(errors.filter((err) => err.index !== index));

//     console.log("Updated formData with file:", newFormData);
//   };

//   const handleFileDelete = (index) => {
//     const newFormData = [...formData];

//     // Clear only the 'file' field for the specific index
//     newFormData[index] = {
//       ...newFormData[index], // Retain other properties
//       file: null, // Only clear the file
//     };

//     setFormData(newFormData); // Update formData state

//     // Update errors state: remove errors for the 'file' field of the current index
//     const newErrors = errors.filter((err) => err.index !== index || err.field !== 'file');

//     setErrors(newErrors); // Update errors state

//     console.log("Updated formData after file deletion:", newFormData);
//     console.log("Updated errors after file deletion:", newErrors);
// };

//   // const handleAddField = () => {
//   //   if (formData[formData.length - 1].file) {
//   //     setFormData([
//   //       ...formData,
//   //       { typeofwork: "", specificOption: "", file: null },
//   //     ]);
//   //   } else {
//   //     alert("Please upload a file before adding another form.");
//   //   }
//   // };\
//   const handleAddField = () => {
//     const currentErrors = [];
//     const lastIndex = formData.length - 1;
  
//     // Validate the last form field
//     if (!formData[lastIndex].specificOption) {
//       currentErrors.push({
//         index: lastIndex,
//         field: "specificOption",
//         message: "This field is required.",
//       });
//     }
//     if (!formData[lastIndex].file) {
//       currentErrors.push({
//         index: lastIndex,
//         field: "file",
//         message: "File is required.",
//       });
//     }
  
//     // Update error state
//     setErrors([...errors, ...currentErrors]);
  
//     // Prevent adding a new field if there are validation errors
//     if (currentErrors.length > 0) {
//       return;
//     }
  
//     // Add new form field if validation passes
//     setFormData([
//       ...formData,
//       { typeofwork: "", specificOption: "", file: null },
//     ]);
//   };
  
//   const handleDeleteField = (index) => {
//     const newFormData = formData.filter((_, i) => i !== index); // Remove the field at the given index
//     const newErrors = errors.filter((err) => err.index !== index); // Remove any errors associated with the field at the given index

//     setFormData(newFormData);
//     setErrors(newErrors);

//     // Log updated formData and errors for debugging
//     console.log("Updated formData after deletion:", newFormData);
//     console.log("Updated errors after deletion:", newErrors);
//   };

//   const handleButtonClick = (index) => {
//     const errorsObj = [];
//     if (!formData[index].specificOption) {
//       errorsObj.push({ index, field: "specificOption", message: "This field is required." });
//     }
//     if (!formData[index].file) {
//       errorsObj.push({ index, field: "file", message: "File is required." });
//     }
//     setErrors(errorsObj);

//     if (errorsObj.length === 0) {
//       console.log("Form data is valid", formData);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       {formData.map((fieldData, index) => (
//         <div className="row mt-2 pt-3 p-3" key={index}>
//           <div className="col-12 col-md-4">
//             <label className="statis-name">Select Document</label>

//             {fieldData.typeofwork === "others" ? (
//               <input
//                 type="text"
//                 className={`form-control ${errors.some(err => err.index === index && err.field === "specificOption") ? "border-danger" : ""}`}
//                 name="specificOption"
//                 value={fieldData.specificOption}
//                 onChange={(e) => handleChangeSelect(index, e)}
//                 placeholder="Enter Others Option"
//                 required
//               />
//             ) : (
//               <select
//                 className={`form-select ${errors.some(err => err.index === index && err.field === "specificOption") ? "border-danger" : ""}`}
//                 name="specificOption"
//                 value={fieldData.specificOption}
//                 onChange={(e) => handleChangeSelect(index, e)}
//                 required
//               >
//                 <option value="" disabled>
//                   Select a specific option
//                 </option>
//                 {/* {optionsMapping[fieldData.typeofwork]?.map((option) => (
//                   <option key={option.value} value={option.value}>
//                     {option.label}
//                   </option>
//                 ))} */}
//                 <option>one</option>
//                 <option>two</option>
//                 {/* <option value="option1">Option 1</option>
//                 <option value="option2">Option 2</option> */}
//                 <option>three</option>
//                 {/* <option value="optionX">Option X</option>
//                 <option value="optionY">Option Y</option> */}
//                 <option>four</option>

//               </select>
//             )}
//             {errors.some(err => err.index === index && err.field === "specificOption") && (
//               <small className="text-danger">This field is required.</small>
//             )}
//           </div>

//           <div className="col-12 col-md-4">
//             <label className="statis-name">File</label>
//             <div
//               className={`form-control d-flex justify-content-end ${errors.some(err => err.index === index && err.field === "file") ? "border-danger" : ""}`}
//             >
//               <input
//                 type="file"
//                 id={`fileupload-${index}`}
//                 className="file-upload-input"
//                 onChange={(e) => handleFileChange(index, e)}
//               />
//               {!fieldData.file && (
//                 <label htmlFor={`fileupload-${index}`} className="file-icon">
//                   <PiCloudArrowUpLight />
//                 </label>
//               )}
//               {fieldData.file && (
//                 <RiDeleteBin6Line
//                   className="file-del-icon"
//                   onClick={() => handleFileDelete(index)}
//                 />
//               )}
//             </div>
//             {errors.some(err => err.index === index && err.field === "file") && (
//               <small className="text-danger">File is required.</small>
//             )}
//           </div>

//           <div className="col d-flex justify-content-start py-3 mt-2">
//             {index === 0 && (
//               <button
//                 type="button"
//                 className="save-form-add"
//                 onClick={handleAddField}
//                 disabled={!fieldData.file}
//               >
//                 Add +
//               </button>
//             )}
//             {index > 0 && (
//               <button
//                 type="button"
//                 className="save-form-del ms-3"
//                 onClick={() => handleDeleteField(index)}
//               >
//                 Delete
//               </button>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DocumentForm;
