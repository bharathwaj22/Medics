import React from "react";
import "../assests/css/register.css";
import Vector from "..//assests/images/Vector.svg";
import Registerimg from "..//assests/images/registerimg.svg";
import { eye } from "react-icons-kit/feather/eye";
import Mblogin from "..//assests/images/mblogin.svg";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import Icon from "react-icons-kit";
import { useState } from "react";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";

function Register() {
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
  const [newType, setNewType] = useState("password");
  const [newIcon, setNewIcon] = useState(eyeOff);

  const toggleNewPasswordVisibility = () => {
    if (newType === "password") {
      setNewType("text");
      setNewIcon(eye);
    } else {
      setNewType("password");
      setNewIcon(eyeOff);
    }
  };
  return (
    <div className=" rbody">
      <div className="container">
        <div className="row ">
          <div className="col-12  text-center p-5">
            <img className="img-fluid " src={Vector} alt="img" />
          </div>
        </div>

        <div className="container position-relative  justify-content-center d-flex maindiv  ">
          <div className="  position-relative ">
            <div className="">
              <img className="loo-imgreg " src={Registerimg} alt="img" />
              <img className="img-3" src={Mblogin} alt="img" />
              <h1 className=" position-absolute logo-create mx-2">
                Forgot Password
              </h1>
              <div className="position-absolute text-center user-tag1  ">
                <form>
                  <div className="input-box  mb-1 ">
                    <input
                      className="w-506 h-56px int1"
                      type="text"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="w-100 text-end">
                    <Link
                      to=""
                      className=" text-decoration-none get-otp"
                      href=""
                    >
                     Get OTP
                    </Link>
                  </div>
                  <div className="input-box  mb-2 mt-2 ">
                    <input
                      className="
          6 h-56px int1"
                      type="email"
                      placeholder="Enter OTP"
                    />
                  </div>
                  <div className="w-100 position-relative ">
                    <input
                      className=" w-md-50    int1 "
                      type={type}
                      placeholder="New password"
                    />
                    <span onClick={togglePasswordVisibility}>
                      <Icon className="position-absolute eye1" icon={icon} />
                    </span>
                  </div>
                  <div>
                    <div className=" text-end">
                      <a className="text-decoration-none forget-passed" href="">
                        use 8 or more characters with a mix of
                        letters,numbers,symbols{" "}
                      </a>
                    </div>
                    <br></br>
                    <div className="w-100 position-relative ">
                      <input
                        className=" w-md-50   int1 "
                        type={newType}
                        placeholder="Confirm password"
                      />
                      <span onClick={toggleNewPasswordVisibility}>
                        <Icon
                          className="position-absolute eye1"
                          icon={newIcon}
                        />
                      </span>
                    </div>
                    <Link to="/dashboard">
                      <button className="btn-login">Create Account</button>
                    </Link>
                    {/* <div className="signup-link1 mt-5">
                  Don<span className="sym">'</span>t have an account?
                  <Link to="/" className="sign-login">
                    login up
                  </Link>
                </div> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <div className=" mt-5  foot">
          <Footer></Footer>
        </div> */}
      </div>
    </div>
  );
}

export default Register;
