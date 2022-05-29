import React, { useState, useEffect} from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFiles } from "../../Store/Actions/filesActions";
import { addMeetings } from "../../Store/Actions/meetingsActions";
import { getAllFilesFN } from "../../util/networkRequest";
import {
    deleteMeetingByID,
    getAllMeetingsFN,
  } from "../../util/networkRequest";
// import axios from "axios";
import { apiURL } from "../../util/apiURL";

import "./MeetingsShow.css"

const API = apiURL();

const MeetingsShow = () => {
  const entireState = useSelector((state) => state);
  const { files ,meetings} = entireState;
  let [meeting, setMeeting] = useState({});
  let { id, meeting_id } = useParams();
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const meetingsArr = Object.values(meetings);

 
  const deleteMeeting= async () => {
    try {
      await deleteMeetingByID(id,meeting_id);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteMeeting();
     return navigate(`/files/${id}/meetings`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchAllFiles = async () => {
      try {
       
          const res = await getAllFilesFN();
          dispatch(addFiles(res));
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllFiles();
  const getAllMeetings = async () => {
    try {
   
        let res = await getAllMeetingsFN(id);
        dispatch(addMeetings(res));
      
    } catch (error) {
      console.log(error);
    }
  };
  getAllMeetings();



}, [dispatch]);


  

//   useEffect(() => {
//     if (!user) {
//       history.push("/");
//     }
//   }, [user, history]);


// console.log(entireState,"both")
  //const { category, details, date } = meeting;
  // console.log(meeting,"const meeting")
//   let newDate = new Date(date);
//   newDate.setDate(newDate.getDate(date) + 1);

let meet = entireState['meetings'][meeting_id]
// console.log(meet,"meeet")
    return (<>
        <Link to={`/files/${id}/meetings`}>
            <button className="back">Back</button>
          </Link>
      <div className="meeting-details">
    <div className="meeting-box">
        <p className="meeting-details-p">
          File: {files[id]?.child_name}
        </p>
        <p className="meeting-details-p">
          Date:
          {meet?.date}
        </p>
        <p className="meeting-details-p">
          Meeting Type: {meet?.category}</p>
          <br></br>
          <p className="meeting-details-p">
          Details: {meet?.details}</p>
</div>
        {/* <div className="buttons"> */}
          {/* <button onClick={handleDelete}>DELETE</button>
        
          */}

          <div className="button-frames-show">
          <Link to={`/files/${id}/meetings/${meeting_id}/edit`}>
            <button className="button-frames-edit"></button>
          </Link>
          <div className="frames-delete">

        <button className="button-frames-delete" onClick={handleDelete}></button>
          </div>
      
      {/* </div> */}



          
        </div>
      </div>
      </>
    );
  
};

export default MeetingsShow;
