import React from "react";

import Sider from "../components/Sider";

import Header from "../components/Header";

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
            <div className="col-12 pt-1 mt-3 project-manage py-3 w-100">
              <section className="col-12">
                <div className="row px-3">
                  <div className="col-12 mt-4">
                    <p className="heading-entr">Description</p>
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
