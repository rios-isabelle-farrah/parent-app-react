import React from "react";
import { useEffect} from "react";
import MeetingsListItem from "./MeetingsListItem";
import { Link, useParams} from "react-router-dom";
import { getAllMeetingsFN } from "../../util/networkRequest";
import { useDispatch, useSelector } from "react-redux";
import { addMeetings } from "../../Store/Actions/meetingsActions";
//import { UserContext } from "../../Providers/UserProvider";
import "./Meetings.css";

const Meetings = () => {
//   const user = useContext(UserContext);
//   let navigate= useHistory();
const dispatch = useDispatch();
  const entireState = useSelector((state) => state);
  const { files, meetings } = entireState;
  const { id } = useParams();
  const meetingsArr = Object.values(meetings);

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
// console.log(meetingsArr)
  return (
    <div className="main-e-div">
       <Link to={`/files/${id}`}>
        <button className="back-a">back</button>
      </Link>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2>
       All Meetings in  {files[id]?.child_name} 
      </h2>
     
      <table className="meetings-main-table">
        <thead>
          <tr className="head-row">
            <th className="head-date">Date</th>
            <th className="head-type">Meeting Type</th>
            <th className="head-details">Details</th>
            {/* <th className="head-edit">Show</th> */}
          </tr>
        </thead>
        <tbody className="t-body">
     
          {meetingsArr.map((meeting, i) => {
            return <MeetingsListItem key={i} meeting={meeting} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Meetings;