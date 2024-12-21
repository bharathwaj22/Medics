import React from "react";
import Sider from "./Sider";
import Profile from "..//assests/images/profile.png";
import "../assests/css/people_details.css";
import { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import "datatables.net-select-dt";
import "datatables.net-responsive-dt";

import Header from "./Header";
import Breadcrumbs from "../routes/Breadcrumbs";

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
  const columns = [
    { title: "S.NO", data: "name" },
    { title: "ID", data: "name" },
    { title: "TITLE", data: "status" },
    { title: "Type of work", data: "status" },
    { title: "Assigned Status", data: "status" },
    { title: "Status", data: "status" },
    { title: "With in Days", data: "status" },
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
            <section className="col-12  mt-3 pb-5 project-manage w-100">
            <div className="pt-2 px-2 d-none d-md-block"><Breadcrumbs></Breadcrumbs></div>
            <div className="col-12 mt-4 px-4">
                  <p className="heading-entr">Rabina</p>
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
              
             

            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default Peoples;
