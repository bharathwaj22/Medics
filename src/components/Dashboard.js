import "../assests/css/dashboard.css";
import Sider from "./Sider";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import Header from "./Header";
import { BsBarChartLine } from "react-icons/bs";
import axios from "axios";
import { useState, useEffect } from "react";
import { ResponsiveContainer } from "recharts";
import { PieChart, Pie, Cell } from "recharts";

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
  const COLORS = ["#212121", "#3D99B4"];
  const state = [
    { name: "Segment 1", value: 75 },
    { name: "Segment 2", value: 25 },
  ];
  const randomStartAngle = Math.floor(Math.random() * 360);
  const carddata = [  
    {
      name: "Manuscript 1",
      value: 20,
    },
    {
      name: "Manuscript 2",
      value: 15,
    },
    {
      name: "Manuscript 3",
      value: 25,
    },
    {
      name: "Manuscript 4",
      value: 10,
    },{
      name: "Manuscript 5",
      value: 30,
    },
    {
      name: "Manuscript 6",
      value: 20,
    }
  ]
    

  return (
    <>
      <section className="main ">
        <div className="row mt-4 w-100">
          <div className="col-1 d-flex   justify-content-center">
            <Sider />
          </div>
          <div className="col-11 ">
            <div className="col-12">
              <Header></Header>
            </div>
            <section className="col-12 pt-1 mt-3 project-manage w-100">
              <div className="row  px-3">
                <div className="col-12 mt-4">
                  <p className="heading-entr">Project management</p>
                </div>
                <div className="row ">
                  <div className=" col total-project  my-5 py-3 mx-2">
                    <div className=" w-100 d-flex px-3 mt-3">
                      <div className="graphic-box  mt-2 ">
                        <BsBarChartLine className=" graphic-icon m-2" />
                      </div>
                      <div>
                        <div className=" d-flex px-1 project-head ">
                          <p className="px-2 text-muted fs-">2024</p>
                          <p className=" text-muted">Total Projects</p>
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

                  <div className=" col total-project  my-5 py-3 mx-2">
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

                  <div className=" col total-project  my-5 py-3 mx-2">
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
                  <div className=" col total-project  my-5 py-3 mx-2">
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
                  <div className=" col total-project  my-5 py-3 ">
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
            <section className="col-12 pt-1 mt-3 project-manage w-100">
              <div className="row  px-3">
                <div className="col-12 mt-4">
                  <p className="heading-entr">Writers Total Projects Status </p>
                </div>
                <div className="col-12 px-2 table-responsive  table-wrapper-scroll-y my-custom-scrollbar  ">
                  <table className=" table-head   ">
                    <thead>
                      <tr className="text-center tr-head  ">
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
                            <td>{item.date}</td>
                            <td>{item.department}</td>
                            <td>{item.institution}</td>
                            <td>{item.author}</td>
                            <td>{item.profession}</td>
                            <td>{item.department}</td>
                            <td>{item.institution}</td>
                            <td>{item.author}</td>
                            <td>{item.profession}</td>
                          </tr>
                        </tbody>
                      ))}
                    </React.Fragment>
                  </table>
                </div>
              </div>
            </section>
            <section className="row ">
            
              <div className="col-9 ">
                <div className="col-12 pt-1 mt-2 project-manage py-5">
                <div className="col-12 mt-4 ">
                  <p className="heading-entr">Income</p>
                </div>
                <div className="row ">
                <div className="col d-flex flex-wrap gap-5">
                  
                  {carddata.map((items)=>(
                      <div className="position-relative ">
                      <PieChart width={127} height={117}>
                        <Pie
                          data={state}
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
                          {state.map((item, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                      </PieChart>
                      <p className="position-absolute pie-infom">{items.value}</p>
                      <p className="d-flex justify-content-end pie-text mt-2 ">
                        {items.name}
                      </p>
                    </div>
                  ))}  
                  </div>
                  
                </div>
                </div>
                <div className="col-12 pt-1 mt-2 project-manage py-5">
                <div className="col-12 mt-4 ">
                  <p className="heading-entr">Income</p>
                </div>
                <div className="row   ">
                  <div className="col d-flex flex-wrap gap-5">
                  
                  {carddata.map((items)=>(
                      <div className="position-relative ">
                      <PieChart width={127} height={117}>
                        <Pie
                          data={state}
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
                          {state.map((item, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                      </PieChart>
                      <p className="position-absolute pie-infom">{items.value}</p>
                      <p className="d-flex justify-content-end pie-text mt-2 ">
                        {items.name}
                      </p>
                    </div>
                  ))}  
                  </div>
                  {/* <div className="col ">
                    <div className="position-relative">
                      <PieChart width={127} height={117}>
                        <Pie
                          data={state}
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
                          {state.map((item, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                      </PieChart>
                      <p className="position-absolute pie-input">0</p>
                      <p className="d-flex justify-content-end pie-text mt-2 ">
                        Presentation
                      </p>
                    </div>
                  </div>
                  <div className="col ">
                    <div className="position-relative">
                      <PieChart width={127} height={117}>
                        <Pie
                          data={state}
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
                        
                          {state.map((item, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                      </PieChart>
                      <p className="position-absolute pie-input">0</p>
                      <p className="d-flex justify-content-end pie-text mt-2 ">
                        Presentation
                      </p>
                    </div>
                  </div>
                  <div className="col ">
                    <div className="position-relative">
                      <PieChart width={127} height={117}>
                        <Pie
                          data={state}
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
                          {state.map((item, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                      </PieChart>
                      <p className="position-absolute pie-input">0</p>
                      <p className="d-flex justify-content-end pie-text mt-2 ">
                        Presentation
                      </p>
                    </div>
                  </div>
                  <div className="col ">
                    <div className="position-relative">
                      <PieChart width={127} height={117}>
                        <Pie
                          data={state}
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
                          {state.map((item, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                      </PieChart>
                      <p className="position-absolute pie-input">0</p>
                      <p className="d-flex justify-content-end pie-text mt-2 ">
                        Presentation
                      </p>
                    </div>
                  </div> */}
                  
                </div>
                </div>
              </div>
              <div className="col-3 pt-1 mt-3 project-manage ">
                <div className="col mt-4 ">
                  <p className="heading-entr">
                    Income<span className="sym-project px-2">&</span>Expense
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
