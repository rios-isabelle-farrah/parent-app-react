


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
