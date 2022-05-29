import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalNewMeetingForm from "../Modals/ModalNewMeetingForm.js";
import allmeetings from "../Images/allmeetingscabinet.png";
import addmeetings from "../Images/newmeetingcabinet.png";
import meetingsreport from "../Images/meetingsreportcabinet.png";
import "./CenterNav.css";

const CenterNav = ({ file, id, handleDelete, handleReport }) => {
  const [showEForm, setShowEForm] = useState(false);

  return (
    <div className="mainFile-div">

      <div className="button-frames">
        <button className="button-delete" onClick={handleDelete}></button>
        <Link to={`/files/${id}/edit`}></Link>
      </div>

      {showEForm && (
          <ModalNewMeetingForm
            setShowEForm={setShowEForm}
            showEForm={showEForm}
          />
        )}
      <div className="cabinet-frame">
        
       

        <div className="contain-file">
        
       
          <div
            className="nav-meetings"
            onClick={() => setShowEForm(!showEForm)}
          >
            <img src={addmeetings} className="addmeeting" alt="meetings" />
          </div>
        </div>

        <div className="contain-file">
          <Link to={`/files/${id}/meetings`}>
            <img src={allmeetings} className="addmeeting" alt="meetings" />
          </Link>
        </div>

        <div className="contain-file">
          <div className="nav-meetings" onClick={handleReport}>
            <img src={meetingsreport} className="addmeeting" alt="meetings" />
          </div>
        </div>
      </div>
      {/* <img
        className="concar"
        src={filePic}
        alt={"file"}
      /> */}

      {/* */}
    </div>
  );
};

export default CenterNav;
