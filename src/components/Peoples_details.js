import React from "react";
import Sider from "./Sider";
import Profile from "..//assests/images/profile.png";
import "../assests/css/people_details.css";
import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./Header";

function Peoples() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/c/5b99-daae-4352-8f20"
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
                <div className="col-9 mt-4 px-4">
                  <p className="heading-entr">Peoples </p>
                </div>
                <div className="col-3 mt-4 px-4 gap-3 d-flex flex-wrap justify-content-end">
                  <div className="col">
                  <input type="text" className="people-input px-3 " placeholder="ID" />
                  </div>
                  <div className="col">
                  <select className="people-select px-3">
                    <option value>Thesis</option>
                    <option value>Statistics</option>
                    <option value>Presentation</option>
                    <option value>Manuscript</option>
                    <option value>Others</option>

                  </select>
                  </div>
                </div>
                <div className="col-12 mt-4 px-4">
                  <p className="heading-entr">Writers Total Projects Status </p>
                </div>
              </div>
              <div className="col-12 px-5 table-responsive table-wrapper-scroll-y my-custom-scrollbar   ">
                <table className=" table-head   ">
                  <tbody>
                    
                    {data.map((item)=> (
                    <div className="row people-info px-1 align-items-center my-3">
                      <div className="col-1 ">
                        <img className=" object-cover people-img  " src={Profile} alt="img" />
                      </div>
                      <div className="col mt-3 text-center  ">
                        <p className="people-name">Name:{item.name}</p>
                      </div>
                      <div className="col  mt-3 text-center">
                        <p className="people-writer" >{item.profession}</p>
                      </div>
                      <div className="col mt-2 text-center">
                        <p className="people-name">Total People</p>
                        <p className="people-name ">{item.totalproject}</p>
                      </div>
                      <div className="col mt-2 text-center">
                        <p className="people-name">Pending</p>
                        <p className="people-name">{item.pending}</p>
                      </div>
                      <div className="col mt-2 text-center">
                        <p className="people-green">{ `<4 days`}</p>
                        <p className="people-green">{item.fourdays}</p>
                      </div>
                      <div className="col mt-2 text-center">
                        <p className="people-orange">5-8 days</p>
                        <p className="people-orange">{item.fivedays}</p>
                      </div>
                      <div className="col mt-2 text-center">
                        <p className="people-red">{ `>4 days`}</p>
                        <p className="people-red">{item.ninedays}</p>
                      </div>
                      <div className="col view-details text-center mx-3 ">
                        <p className="mt-1">View Details</p>
                      </div>
                    </div>
                    ))}
                  </tbody>
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
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default Peoples;



