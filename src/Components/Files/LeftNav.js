


import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalNewMeetingForm from "../Modals/ModalNewMeetingForm.js";
import "./LeftNav.css";

import allmeetings from "../Images/allmeetings.png"
import addmeetings from "../Images/addnotes.png"
import meetingsreport from "../Images/meetingsreport.png"


const LeftNav = ({ id, handleReport }) => {
  const [showEForm, setShowEForm] = useState(false);
  const [showComp, setShowComp] = useState(false);

  return (
    <div className="red-cabinet">
    <>
      <img
        src="https://uxwing.com/wp-content/themes/uxwing/download/07-web-app-development/hamburger-menu.png"
        style={{ height: "40px", width: "40px" }}
        className="hamb"
        onClick={() => setShowComp(!showComp)}
        alt="menu"
      />

      <div className="left-red">
        {showEForm && (
          <ModalNewMeetingForm
            setShowEForm={setShowEForm}
            showEForm={showEForm}
          />
        )}
        
        <div className="contain-file">
          <div
            className="nav-meetings"
            onClick={() => setShowEForm(!showEForm)}
          >
         <img src={addmeetings} className="addmeeting" />
          </div>
        </div>

     

        <div className="contain-file">
          <div
            className="nav-meetings"
            onClick={handleReport}
          >
         <img src={meetingsreport} className="addmeeting" />
          </div>
        </div>








      
        <div className="contain-file">
       
            <Link to={`/files/${id}/meetings`}><img src={allmeetings} className="addmeeting"/></Link>
       
        </div>
      </div>
    </>
    </div>
  );
};

export default LeftNav;
