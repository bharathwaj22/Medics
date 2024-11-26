import React from "react";
import "../assests/css/footer.css";
import { Icon } from "react-icons-kit";
import { globe } from "react-icons-kit/feather/globe";

function Footer() {
  return (
    <div>
      <div className="container d-flex justify-content-center  ">
        <div className=" border border-2  d-flex    fot ">
         
            <div className=" btt"><button className=" bt-lo ">
              privacy <span className="sym">&</span> Terms
            </button></div>
            <div><button className="bt-lol">Contact US</button></div>
           <div className="bbt1"> <button className="bt-lo">
              <Icon className="goble" icon={globe} /> Change Region
            </button>
            </div>
          </div>
         
        
      </div>
    </div>
  );
}

export default Footer;
