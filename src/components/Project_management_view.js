import React from "react";

import Sider from "../components/Sider";

import Header from "../components/Header";
import "..//assests/css/project-management-view.css";
import Profile from "..//assests/images/profile.png";

function Project_management_view() {
  return (
    <>
      <section className="main">
        <div className="row mt-4 w-100">
          <div className="col-1 d-flex justify-content-center">
            <Sider />
          </div>
          <div className="col-11">
            <Header />
            <div className="col-12 pt-1 mt-3 project-manage-view py-3 w-100">
              <section className="col-12">
                <div className="row px-3">
                  <div className="col-12 mt-4">
                    <p className="heading-entr">Description</p>
                  </div>
                </div>
                <div className="row px-3">
                  <div className="col-12 col-md-6 float-start">
                    <div className="d-flex gap-2">
                      <div className="view-thesis">Thesis</div>
                      <div className="view-present">Presentation</div>
                    </div>
                    <div className="col-12 mt-4">
                    <p className="heading-entr">Project Title</p>
                    <p>lorem100Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</p>
                  </div>
                  </div>
                  <div className="col-12 col-md-6 float-start">
                    <div className="">
                      <div className="d-flex gap-2 ">
                        <p>Created by</p>
                        <div className="  create-view  align-items-center d-flex gap-2 px-1">
                          <img src={Profile} className="pro-view-img" alt="" />
  
                          <p className="">Rabina</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project_management_view;
