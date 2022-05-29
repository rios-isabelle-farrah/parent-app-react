import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
// import "./ModalNewMeetingForm.css";
import { apiURL } from "../../util/apiURL";
//import { UserContext } from "../../../Providers/UserProvider";
// import { updateMeetingById } from '../../util/networkRequest';

const API = apiURL();
const MeetingsEdit = () => {
//   const user = useContext(UserContext);
  let navigate = useNavigate();
  const { id, meeting_id } = useParams();
  const [meeting, setMeeting] = useState({
   category: "",
   details: "",
    date: new Date(),
  });

  const updateMeeting = async (updatedMeeting,meeting_id,id) => {
    try {
    
        await axios.put(
          `${API}/files/${id}/meetings/${meeting_id}`,
          updatedMeeting
        );
      
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setMeeting({ ...meeting, [e.target.id]: e.target.value });
  };

  

  const handleSelectChange = (e) => {
    setMeeting({ ...meeting, category: e.target.value });
 
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateMeeting(meeting,meeting_id,id);
     return navigate(`/files/${id}/meetings`);
    } catch (error) {
      console.log(error);
    }
  };

  const { category, details, date } = meeting;
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate(date) + 1);

//   useEffect(() => {
//     if (!user) {
//       Navigate.push("/");
//     }
//   }, [user, Navigate]);

  return (
    <div className="main-left-div">
      <form className="form-meeting-modal" onSubmit={handleSubmit}>
     
      <label htmlFor="date"></label>
       
       <input className="date"
         value={date}
         // value="1111-11-11"
         type="date"
         onChange={handleChange}
         id="date"
         placeholder="Enter date"
       />
   
     <br></br>
   <label htmlFor="category"></label>
       <select onChange={handleSelectChange}  className="category" >
         <option value="select category" defaultValue>select category</option>
         <option name="iep" value="iep">
           iep
         </option>
         <option name="impartial hearing" value="impartial hearing">
                   impartial hearing
                  </option>
                  <option name="turning_five" value="turning_five">
                   turning five
                  </option>
                  <option name="school meeting" value="school meeting">
                  school meeting
                  </option>
                  <option name="phone call" value="phone call">
                  phone call
                  </option>
                  <option name="educational" value="educational">
                  educational
                  </option>
                  <option name="medical" value="medical">
                  medical
                  </option>
                  <option name="email" value="email">
                  email
                  </option>
                  <option name="personal" value="personal">
                  personal
                  </option>
    
       </select>

       {/* <label htmlFor="details">Details:</label> */}
     
       <br></br>
       <textarea
         id="details"
         type="text"
         value={details}
         placeholder="details"
         onChange={handleChange}
         required
       />



        <div className="meeting-buttons">
          <div className="divsub"><button className="sb" type="submit"></button></div>
          
          <Link to={`/files/${id}/meetings`}>
              <button className="button-cn"></button>
            </Link>
        </div>
      </form>
    </div>
  );
};

export default MeetingsEdit;
