import "../assests/css/setting.css";
import Sider from "./Sider";
import Vector from "../assests/images/Vector.svg";
// import { PencilSquare } from "react-bootstrap-icons";
import { FaPencilAlt } from "react-icons/fa";

import Settingpic from "../assests/images/setting.png";

import React, { useState } from "react";
import Header from "./Header";
import Breadcrumbs from "../routes/Breadcrumbs";

function Settings() {
  // const [profileImage, setProfileImage] = useState(null);
  // const [fileImage, setfileImage] = useState(null);

  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setProfileImage(reader.result); // Set image as base64
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  // const handleFileChange = (event) => {
  //   const file1 = event.target.files[0];
  //   if (file1) {
  //     const readers = new FileReader();
  //     readers.onload = () => {
  //       setfileImage(readers.result);
  //     };
  //     readers.readAsDataURL(file1);
  //   }
  // };
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  const handleImageChange = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result); // Update the image state
      reader.readAsDataURL(file); // Read image as base64
    }
  };

  return (
    <>
      <section className="main ">
        <div className="row mt-4 w-100 ">
          <div className="col-1 d-flex justify-content-center">
            <Sider />
          </div>
          <div className="col-11  ">
            <div className="col-12">
              <Header></Header>
            </div>
            <div className="col-12  wapper w-100 mt-3 ">
            <div className="pt-2 px-2 d-none d-md-block"><Breadcrumbs></Breadcrumbs></div>

              <div className="col-12 px-5 mt-3">
                <h1 className="set-title">Settings</h1>
              </div>

              <div className="row  mt-5">
                <div className="col-2 mx-3 ">
                  <div className="col-md-12 profile-container position-relative d-inline d-flex justify-content-center">
                    <img
                      src={profileImage || Settingpic}
                      alt="Profile"
                      className="profile-image rounded-circle"
                    />

                    {/* Hidden File Input */}
                    <input
                      type="file"
                      accept="image/*"
                      id="profileImageInput"
                      className="file-input"
                      onChange={(e) => handleImageChange(e, setProfileImage)}
                    />

                    <label htmlFor="profileImageInput" className="edit-icon">
                      <FaPencilAlt size={20} />
                    </label>
                  </div>

                  <div className="col-md-12 mt-5 profile-container position-relative d-inline d-flex justify-content-center">
                    <img
                      src={coverImage || Settingpic}
                      alt="Cover"
                      className="profile-image rounded-circle"
                    />
                    <input
                      type="file"
                      accept="image/*"
                      id="coverImageInput"
                      className="file-input"
                      onChange={(e) => handleImageChange(e, setCoverImage)}
                    />
                    <label htmlFor="coverImageInput" className="edit-icon">
                      <FaPencilAlt size={20} />
                    </label>
                  </div>
                </div>
             
              <div className="col-md-9">
                <form>
                  <div className="row mt-0 w-100">
                    <div className="col-md-6 float-start ">
                      <label htmlFor="site-title" className="site-name">
                        Site Title
                      </label>
                      <input
                        type="text"
                        id="site-title"
                        className="setting-input mt-2"
                        placeholder="Enter Title"
                      />
                    </div>
                    <div className="col-md-6 float-start ">
                      <label htmlFor="site-description" className="site-name">
                        Site Description
                      </label>
                      <input
                        type="text"
                        id="site-description"
                        className="setting-input mt-2"
                        placeholder="Enter Description"
                      />
                    </div>
                  
                    <div className="col-md-6 float-start pt-3">
                      <label htmlFor="set-admin" className="site-name">
                        Admin Email
                      </label>
                      <input
                        type="email"
                        id="set-admin"
                        className="setting-input mt-2"
                        placeholder="Enter Gmail"
                      />
                    </div>
                    <div className="col-md-6 float-start pt-3">
                      <label htmlFor="set-mail" className="site-name">
                        Cc Mail
                      </label>
                      <input
                        type="email"
                        id="set-mail"
                        className="setting-input mt-2"
                        placeholder="Enter Mail"
                      />
                    </div>
                  
                    <div className="col-md-6 float-start pt-3">
                      <label htmlFor="set-contact" className="site-name">
                        Contact No
                      </label>
                      <input
                        type="number"
                        id="set-contact"
                        className="setting-input mt-2"
                        placeholder="Enter Contact"
                      />
                    </div>
                  
                    <div className="col-md-12 mt-3">
                      <p className="site-name">Social Media URLs</p>
                    </div>
                    <div className="col-md-6 float-start pt-3">
                      <input
                        type="url"
                        className="setting-input mt-2"
                        placeholder="Facebook"
                      />
                    </div>
                    <div className="col-md-6 float-start pt-3">
                      <input
                        type="url"
                        className="setting-input mt-2"
                        placeholder="LinkedIn"
                      />
                    </div>
                    <div className="col-md-6 float-start pt-3">
                      <input
                        type="url"
                        className="setting-input"
                        placeholder="Instagram"
                      />
                    </div>
                    <div className="col-md-6 float-start pt-3">
                      <input
                        type="url"
                        className="setting-input"
                        placeholder="Twitter"
                      />
                    </div>
                  
                    <div className="col-md-12 text-end mt-4 py-5">
                      <button type="submit" className="set-save-btn">
                        SAVE
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Settings;
