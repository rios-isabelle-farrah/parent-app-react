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
      await deleteMeetingByID(meeting_id);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteMeeting();
     return navigate("/meeting");
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


console.log(entireState,"both")
  //const { category, details, date } = meeting;
  console.log(meeting,"const meeting")
//   let newDate = new Date(date);
//   newDate.setDate(newDate.getDate(date) + 1);

let meet = entireState['meetings'][meeting_id]
console.log(meet,"meeet")
    return (
      <div className="expense-details">
        {/* Change to make and model */}
        <p className="car-make">
          file: {files[id]?.child_name}
        </p>
        <p>
          Date:
          {meet?.date}
        </p>
        <p>meeting Type: {meet?.category}</p>
        <p>details: {meet?.details}</p>

        <div className="buttons">
          <button onClick={handleDelete}>DELETE</button>
          <Link to={`/files/${id}/meetings`}>
            <button>BACK</button>
          </Link>
          <Link to={`/files/${id}/meetings/${meeting_id}/edit`}>
            <button>EDIT</button>
          </Link>
        </div>
      </div>
    );
  
};

export default MeetingsShow;
