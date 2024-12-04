import React from "react";
import Sider from "./Sider";

import Header from "./Header";
import "../assests/css/project_management.css";
import { AiOutlineAlert } from "react-icons/ai";
import { MdDoNotDisturb } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { GiPiggyBank } from "react-icons/gi";





function Project_managment() {
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
            
            <section className="col-12 pt-1 mt-3 project-manage w-100">
              <div className="row  px-3">
                <div className="col-12 mt-4">
                  <p className="heading-entr">Project management</p>
                </div>
              </div>
              <div className="row px-5 py-3 gap-3">
                <div className="col project-task px-1 align-items-center d-flex justify-content-center gap-3 ">
                  <div className="task-box align-items-center pt-3">
                  <AiOutlineAlert className="project-icon" />
                  </div>
                  <div className="align-items-center ">
                    <p className="project-writer pt-2 ">Emergancy work count</p>
                    
                    <div className=" h4 ">5</div>
                  </div>
                </div>
                <div className="col project-task px-1 align-items-center d-flex justify-content-center gap-3 ">
                  <div className="task-box1 align-items-center pt-1 ">
                  <MdDoNotDisturb
                  className="project-icon1 mt-3" />
                  </div>
                  <div className="align-items-center ">
                    <p className="project-writer pt-2 ">Emergancy work count</p>
                    
                    <div className=" h4 ">825</div>
                  </div>
                </div>
                <div className="col project-task px-1 align-items-center d-flex justify-content-center gap-3 ">
                  <div className="task-box2 align-items-center pt-1">
                  <FaFileInvoiceDollar
                  className="project-icon2 mt-3" />
                  </div>
                  <div className="align-items-center ">
                    <p className="project-writer pt-2 ">Emergancy work count</p>
                    
                    <div className=" h4 ">502</div>
                  </div>
                </div>
                <div className="col project-task px-1 align-items-center d-flex justify-content-center gap-3 ">
                  <div className="task-box3 align-items-center pt-3">
                  <GiPiggyBank  className="project-icon3" />
                  </div>
                  <div className="align-items-center ">
                    <p className="project-writer pt-2 ">Emergancy work count</p>
                    
                    <div className=" h4 ">5</div>
                  </div>
                </div>
               
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project_managment;
