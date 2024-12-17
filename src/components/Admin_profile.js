import "../assests/css/setting.css";
import Sider from "./Sider";


import { FaPencilAlt } from "react-icons/fa";

import Settingpic from "../assests/images/setting.png";

import React, { useState } from "react";
import Header from "./Header";
import { eye } from "react-icons-kit/feather/eye";
import Icon from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import Breadcrumbs from "../routes/Breadcrumbs";

function Admin_profile() {
  
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result); // Update the image state
      reader.readAsDataURL(file); // Read image as base64
    }
  };

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const togglePasswordVisibility = () => {
    if (type === "password") {
      setType("text");
      setIcon(eye);
    } else {
      setType("password");
      setIcon(eyeOff);
    }
  };
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    address: "",
    dob: "",
    city: "",
    permanentAddress: "",
    country: "",
    postCode: "",
  });
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.dob) newErrors.dob = "Date of Birth is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.permanentAddress) newErrors.permanentAddress = "permanentAddress is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.postCode) newErrors.postCode = "Post Code is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      // alert("Form submitted successfully!");
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

            <div className="col-11  mt-3 wapper w-100">
            <div className="pt-2 px-2 d-none d-md-block"><Breadcrumbs></Breadcrumbs></div>

              <div className="col-12 px-5 mt-3">
                <h1 className="set-title">Profile</h1>
              </div>

              <div className="row mt-5  ">
                <div className="col-2 mx-3 ">
                  <div className="col-12 profile-container position-relative d-inline d-flex justify-content-center">
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
                </div>

                <div className="col-md-9">
                  <form onSubmit={handleSubmit}>
                    <div className="row mt-0 w-100">
                      <div className="col-md-6 float-start  ">
                        <label htmlFor="site-title" className="site-name">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          className={`setting-input mt-2 ${
                            errors.name ? "input-error" : ""
                          }`}
                          placeholder="Enter your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-md-6 float-start  ">
                        <label htmlFor="site-description" className="site-name">
                          Password
                        </label>
                        <input
                          type={type}
                          name="password"
                          className={`setting-input mt-2 ${
                            errors.password ? "input-error" : ""
                          }`}

                          value={formData.password}
                          onChange={handleInputChange}
                           placeholder="Enter password"
                        />

                        <span className="position-absolute admin-eye pt-3 " onClick={togglePasswordVisibility}>
                          <Icon className=" " icon={icon} />
                        </span>
                      </div>

                      <div className="col-md-6 float-start pt-3 ">
                        <label htmlFor="set-admin" className="site-name">
                          Email
                        </label>
                        <input
                          type="email"
                          id="set-admin"
                          name="email"
                          className={`setting-input mt-2 ${
                            errors.email ? "input-error" : ""
                          }`}
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your Email"
                        />
                      </div>
                      <div className="col-md-6 float-start pt-3 ">
                        <label htmlFor="set-mail" className="site-name">
                          Present Address
                        </label>
                        <input
                          type="text"
                          id="set-mail"
                          name="address"
                          className={`setting-input mt-2 ${
                            errors.address ? "input-error" : ""
                          }`}

                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Enter your Address"
                        />
                      </div>

                      <div className="col-md-6 float-start pt-3 ">
                        <label htmlFor="set-contact" className="site-name">
                          Date Of Birth
                        </label>
                        <input
                          type="date"
                          id="set-contact"
                          name="dob"
                          className={`setting-input mt-2 ${
                            errors.dob ? "input-error" : ""
                          }`}

                          value={formData.dob}
                          onChange={handleInputChange}
                          placeholder="Enter your birth date"
                        />
                      </div>

                      <div className="col-md-6 float-start pt-3 ">
                        <label htmlFor="set-city" className="site-name">
                          City
                        </label>
                        <input
                          type="text"
                          id="set-city"
                          name="city"
                          className={`setting-input mt-2 ${
                            errors.city ? "input-error" : ""
                          }`}

                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="Enter your City"
                        />
                      </div>

                      <div className="col-md-6 float-start pt-3 ">
                        <label htmlFor="set-address" className="site-name">
                          Permanent Address
                        </label>
                        <input
                          type="text"
                          id="set-city"
                          name="permanentAddress"
                          className={`setting-input mt-2 ${
                            errors.permanentAddress ? "input-error" : ""
                          }`}

                          value={formData.permanentAddress}
                          onChange={handleInputChange}
                          placeholder="Enter your address"
                        />
                      </div>

                      <div className="col-md-6 float-start pt-3 ">
                        <label htmlFor="set-country" className="site-name">
                          Country
                        </label>
                        <input
                          type="text"
                          id="set-country"
                          name="country"
                          className={`setting-input mt-2 ${
                            errors.country ? "input-error" : ""
                          }`}

                          value={formData.country}
                          onChange={handleInputChange}
                          placeholder="Enter your Country"
                        />
                      </div>

                      <div className="col-md-6 float-start pt-3 ">
                        <label htmlFor="set-code" className="site-name">
                          Post Code
                        </label>
                        <input
                          type="text"
                          id="set-code"
                          name="postCode"
                          className={`setting-input mt-2 ${
                            errors.postCode ? "input-error" : ""
                          }`}

                          value={formData.postCode}
                          onChange={handleInputChange}
                          placeholder="Enter your Country"
                        />
                      </div>

                      <div className="col-md-6 float-start mt-5 text-end py-5">
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

export default Admin_profile;
