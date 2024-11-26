import "../assests/css/setting.css";
import Sider from "./Sider";
import Vector from "../assests/images/Vector.svg";
import { PencilSquare } from "react-bootstrap-icons";

import React, { useState } from "react";

function Settings() {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result); // Set image as base64
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <section className="main ">
        <div className="row mt-5 w-100 ">
          <div className="col-1 d-flex justify-content-center">
            <Sider />
          </div>
          <div className="col-11 wapper ">
            <div className="row mt-3 ">
              <div className="col-12 text-center  mt-0 ">
                <img className=" " src={Vector} alt="img" />
              </div>
            </div>
            <div className="row   ">
              <div className="col-12 px-3">
                <h1>Settings</h1>
              </div>
            </div>
            <div className="row   ">
              <div className="col-12 d-flex justify-content-center ">
                <div className=" setting-header ">
                  <div className="setting-field">Setting page field</div>
                </div>
              </div>
            </div>
            <div className="row mt-3  ">
              <div className="col-3 mx-3 d-flex justify-content-center">
                

                <div className="profile-container position-relative d-inline-block">
                  {/* Circular Profile Image */}
                  <img
                    src={
                      profileImage ||
                      "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
                    }
                    alt="Profile"
                    className="profile-image rounded-circle"
                  />

                  <input
                    type="file"
                    accept="image/*"
                    id="profileImageInput"
                    className="file-input"
                    onChange={handleImageChange}
                  />

                  <label htmlFor="profileImageInput" className="edit-icon">
                    <PencilSquare color="#007bff" size={20} />
                  </label>
                </div>
                <div className="profile-container position-relative d-inline-block">
                  {/* Circular Profile Image */}
                  <img
                    src={
                      profileImage ||
                      "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
                    }
                    alt="Profile"
                    className="profile-image rounded-circle"
                  />

                  <input
                    type="file"
                    accept="image/*"
                    id="profileImageInput"
                    className="file-input"
                    onChange={handleImageChange}
                  />

                  <label htmlFor="profileImageInput" className="edit-icon">
                    <PencilSquare color="#007bff" size={20} />
                  </label>
                </div>
              </div>
              <div className="col-9"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Settings;
