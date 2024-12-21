import React from "react";
import "../assests/css/loging.css";
import Vector from "..//assests/images/Vector.svg";
import Rectangle from "..//assests/images/Rectangle.png";
import Mblogin from "../assests/images/mblogin.svg";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import Icon from "react-icons-kit";
import { useState ,useEffect } from "react";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";

function Login() {

  const [loading, setLoading] = useState(false);

 
  const [formData,setFormData] = useState({
    username: "",
    password: "",
    
  })
  const [errors, setErrors] = useState({});
 
  const handleChangelogin = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const validateForm=() => {
      let formErrors ={};
      if  (!formData.username) formErrors.username="username is required";
      if  (!formData.password) formErrors.password="password is required";
      setErrors(formErrors);
      return Object.keys(formErrors).length === 0;
  };
  const handleSubmitlogin = (e) => {
    // e.preventDefault();

    
    // if (validateForm()) {
    //   console.log("Form data submitted:", formData);
    // }
  };
  
  // eye buttom
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
  if (loading) {
    return (
      <div className="loader loader--style2" title="1">
        <svg
          version="1.1"
          id="loader-1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="40px"
          height="40px"
          viewBox="0 0 50 50"
          style={{ enableBackground: "new 0 0 50 50" }}
          xmlSpace="preserve"
        >
          <path
            fill="#000"
            d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
          >
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="rotate"
              from="0 25 25"
              to="360 25 25"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
    );
  }
  return (
    <div className="container">
      
      <div className="aa">
        <div className="row  ">
          <div className="col-12  text-center p-5">
            <img className="img-fluid " src={Vector} alt="img" />
          </div>
        </div>
        <div className="container  justify-content-center d-flex maindiv  ">
          <div className=" position-relative  pic-body ">
            <div className="position-relative  "></div>
            <img className=" loo-img" src={Rectangle} alt="img" />
            <img className="img-2" src={Mblogin} alt="img" />
            <h1 className="lo position-absolute">Login</h1>
            <div className="position-absolute text-center user-tag ">
            <form >
              <div className="input-box  mb-2  ">
                
                <input
                  className={` int  ${
                    errors.username ? "error" : ""
                  }`}
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleChangelogin}
                  required
                />
              </div>
              <div className="  input-box  d-flex ">
                <input
                  className=  {` position-relative int ${
                    errors.password ? "error" : ""
                  }`}
                  type={type}
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChangelogin}
                  required
                />
                <span onClick={togglePasswordVisibility}>
                  <Icon className="position-absolute eye" icon={icon} />
                </span>
              </div>
              <div>
                <div className="w-100 text-end">
                  <Link
                    to="/register"
                    className=" text-decoration-none forget-pass"
                    href=""
                  >
                    Forgot password?
                  </Link>
                </div>
                <br></br>
                <Link to="/dashboard"><button type="submit"onClick={handleSubmitlogin}   className="btn-login">Login</button></Link>
                {/* <div className="signup-link mt-5">
                  Don<span className="sym">'</span>t have an account?
                  <Link to="/register" className="sign-login">
                  
                    Sign Up
                  </Link>
                </div> */}
              </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
