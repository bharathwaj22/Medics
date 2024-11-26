import React from "react";
import "../assests/css/loging.css";
import Vector from "..//assests/images/Vector.svg";
import Rectangle from "..//assests/images/Rectangle.png";
import Mblogin from "../assests/images/mblogin.svg";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import Icon from "react-icons-kit";
import { useState } from "react";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";

function Login() {
  const [formData,setFormData] = useState({
    username: "",
    password: "",
    
  })
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
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
    e.preventDefault();

    
    if (validateForm()) {
      console.log("Form data submitted:", formData);
    }
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
                    Forget password?
                  </Link>
                </div>
                <br></br>
                <button type="submit"onClick={handleSubmitlogin}   className="btn-login">Login</button>
                <div className="signup-link mt-5">
                  Don<span className="sym">'</span>t have an account?
                  <Link to="/register" className="sign-login">
                  
                    Sign Up
                  </Link>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>

        <div className=" mt-5  foot">
          <Footer></Footer>
        </div>
      </div>

      {/* tablet........................> */}
      {/* <div className="d-md-none">
        <div className="row ">
          <div className="col-12  text-center p-5">
            <img className="img-fluid  " src={Vector} alt="img" />
          </div>
        </div>
        <div className="container  justify-content-center d-flex maindiv w-75  ">
          <div className=" position-relative ">
            <div className=" squar ">
              <img className="w-100 " src={Rectangle} alt="img" />
              <div className="">
                <h1 className=" lo position-absolute w-25 ">Login</h1>
                <div className="position-absolute text-center user-tag  ">
                  <div className="input-box  mb-2 w-75 ">
                    <input
                      className=" int w-50"
                      type="text"
                      placeholder="Username"
                      required
                    />
                  </div>
                  <div className="  input-box  d-flex  w-100">
                    <input
                      className=" w-50 position-relative int"
                      type={type}
                      placeholder="Password"
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
                        Forget password?
                      </Link>
                    </div>
                    <br></br>
                    <button className="btn-login">Login</button>
                    <div className="signup-link mt-5">
                      Don<span className="sym">'</span>t have an account?
                      <Link to="/register" className="sign-login">
                        Sign Up
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-5  foot">
          <Footer></Footer>
        </div>
      </div> */}
    </div>
  );
}

export default Login;
