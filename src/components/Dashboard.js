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
    { name: "series A", value: 10 },
    { name: "series B", value: 15 },
    { name: "series C", value: 20 },
    { name: "series d", value: 30 },
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

            <section className="col-12 pt-1 mt-3 py-3 project-manage w-100 ">
              <div className="row  px-3 d-flex justify-content-between ">
                <div className="col-10 mt-4">
                  <p className="heading-entr">Project management</p>
                </div>
                <div className="col-2 text-center  mt-4 ">
                  <div className="d-flex justify-content-center ">
                    <div className="add-icon">
                      <Link to="/enter_process_form">
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
              <div className="col-12 col-xxl-9 ">
                <div className="col-12 pt-1 mt-2 project-manage py-5">
                  <div className="row  px-3">
                    <div className="col-9 mt-4 px-4">
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
                    {/* <div className="col d-flex  justify-content-around flex-wrap  ">
                      {carddata.map((items) => (
                        <div className="position-relative ">
                          <PieChart width={127} height={117}>
                            <Pie
                              data={carddata}
                              values={items.value}
                              cx={63.5}
                              cy={57.5}
                              innerRadius={30}
                              outerRadius={55}
                              fill="#8884d8"
                              paddingAngle={5}
                              cornerRadius={7}
                              startAngle={-50}
                              endAngle={-410}
                              dataKey="value"
                              animationDuration={1000}
                              isAnimationActive={true} // Make sure animation is active
                              animationEasing="ease-out" // Easing function for smooth animation
                            >
                              {carddata.map((items, index) => (
                                <Cell
                                  key={`cell-${index}`}
                                  fill={COLORS[index % COLORS.length]}
                                />
                              ))}
                            </Pie>
                          </PieChart>
                          <p className="position-absolute pie-infom">
                            {items.value}
                          </p>
                          <p className="d-flex justify-content-end pie-text mt-2 mx-2 ">
                            {items.name}
                          </p>
                        </div>
                      ))}
                    </div> */}
                    <div className="col d-flex justify-content-around flex-wrap">
                      {carddata.map((item, index) => {
                        
                        const pieData = [
                          { name: "Segment", value: item.value },
                          { name: "Remaining", value: 100000 - item.value }, 
                        ];

                        return (
                          <div className="position-relative" key={index}>
                            <PieChart width={127} height={117}>
                              <Pie
                                data={pieData}
                                cx={63.5}
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
                {/* <div className="col-12 pt-1 mt-2 project-manage py-5">
                  <div className="col-12 mt-4 px-4">
                    <div className="row  px-2">
                      <div className="col-9 mt-4 ">
                        <p className="heading-entr">Expense </p>
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
                  </div>
                  <div className="row   ">
                    <div className="col d-flex  justify-content-center flex-wrap gap-5">
                      {cardexpense.map((items) => (
                        <div className="position-relative ">
                          <PieChart width={127} height={117}>
                            <Pie
                              data={cardexpense}
                              cx={63.5}
                              cy={57.5}
                              innerRadius={30}
                              outerRadius={55}
                              fill="#8884d8"
                              paddingAngle={5}
                              cornerRadius={7}
                              startAngle={-50}
                              endAngle={-410}
                              dataKey="value"
                              animationDuration={1000}
                              isAnimationActive={true} // Make sure animation is active
                              animationEasing="ease-out" // Easing function for smooth animation
                            >
                              {cardexpense.map((item, index) => (
                                <Cell
                                  key={`cell-${index}`}
                                  fill={COLORS[index % COLORS.length]}
                                />
                              ))}
                            </Pie>
                          </PieChart>
                          <p className="position-absolute pie-infom-exp">
                            {items.value}
                          </p>
                          <p className="d-flex justify-content-end pie-text mt-2 mx-2  ">
                            {items.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="col pt-1 mt-2 project-manage ">
                <div className="col  d-flex text-center ">
                  <p className="heading-entr">
                    Income<span className="sym-project px-2">&</span>Exp
                  </p>
                </div>
                <div className="row">
                  <div className="col d-flex  justify-content-center ">
                    <div className="position-relative   ">
                      {/* <PieChart width={300} height={300}>
                        <Pie
                          data={state}
                          cx={150}
                          cy={100}
                          innerRadius={30}
                          outerRadius={75}
                          fill="#8884d8"
                          paddingAngle={5}
                          cornerRadius={7}
                          startAngle={-50}
                          endAngle={-410}
                          dataKey="value"
                          animationDuration={1000}
                          isAnimationActive={true} // Make sure animation is active
                          animationEasing="ease-out" // Easing function for smooth animation
                        >
                          {state.map((item, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                      </PieChart> */}
                      <PieChart width={300} height={300}>
                        <Pie
                          data={datapie}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
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
                      <p className="d-flex justify-content-center pie-text mt-2   ">
                        Total Income & Exp
                      </p>
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
