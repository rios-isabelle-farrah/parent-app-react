import React from "react";
import { useEffect} from "react";
import MeetingListItem from "./MeetingListItem";
import { Link, useParams} from "react-router-dom";
import { getAllMeetingsFN } from "../../util/networkRequest";
import { useDispatch, useSelector } from "react-redux";
import { addMeetings } from "../../Store/Actions/meetingsActions";
//import { UserContext } from "../../Providers/UserProvider";
//import "../Style/Meetings/Meetings.css";

const Meetings = () => {
//   const user = useContext(UserContext);
//   let navigate= useHistory();
  const entireState = useSelector((state) => state);
  const dispatch = useDispatch();
  const { files, meetings } = entireState;
  const { id } = useParams();
  const meetingArr = Object.values(meetings);

  useEffect(() => {
    const getAllMeetings = async () => {
      try {
     
          let res = await getAllMeetingsFN(id);
          dispatch(addMeetings(res));
        
      } catch (error) {
        console.log(error);
      }
    };
    getAllMeetings();
  }, [dispatch, id]);

//   useEffect(() => {
//     if (!user) {
//       history.push("/");
//     }
//   }, [user, history]);

  return (
    <div className="main-e-div">
      <h2>
        {files[id]?.child_name} {files[id]?.details} Meetings
      </h2>
      <Link to={`/files/${id}/meetings/meeting/new`}>
        <button className="meeting-new-button">Add New Meeting</button>
      </Link>
      <table className="meetings-main-table">
        <thead>
          <tr className="head-row">
            <th className="head-date">Date</th>
            <th className="head-type">Meeting Type</th>
            <th className="head-amount">Amount</th>
            <th className="head-edit">Show</th>
          </tr>
        </thead>
        <tbody>
          {meetingArr.map((meeting, i) => {
            return <MeetingListItem key={i} meeting={meeting} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Meetings;
