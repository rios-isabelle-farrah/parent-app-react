import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./ModalNewMeetingForm.css";
import { apiURL } from "../../util/apiURL";

//import { UserContext } from "../../../Providers/UserProvider";

const API = apiURL();
const ModalNewExpense = ({ setMeetingBoolean, meetingBoolean }) => {
//   const user = useContext(UserContext);
  let navigate = useNavigate();
  const { id } = useParams();
  const [meeting, setMeeting] = useState({
   category: "expenses",
   details: "0",
    date: new Date(),
  });

  const addMeeting = async (newMeeting) => {
    try {
    
        await axios.post(
          `${API}/files/${id}/meetings`,
          newMeeting
        );
      
    } catch (error) {
      console.log(error);
    }
  };


  

  const handleSelectChange = (e) => {
    setMeeting({ ...meeting, category: e.target.value  });
 
  };

  const handleChange = (e) => {
    setMeeting({ ...meeting, [e.target.id]:e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addMeeting(meeting);
     return navigate(`/files/${id}/meetings`);
    } catch (error) {
      console.log(error);
    }
  };

  const { details, date, category } = meeting;
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
     
       
                <label></label>
       
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
                <select onChange={handleSelectChange}  className="category" id={category}>
                  <option value="select category" defaultValue>select category</option>
                  <option name="transportation" value="transportation expenses">
                    transportation expenses
                  </option>
                  <option name="tuition" value="tuition expenses">
                   tuition expenses
                  </option>
                </select>
 
                {/* <label htmlFor="details">Details:</label> */}
              
                <br></br>
                <label>amount:</label>
                <input
                  id="details"
                  type="text"
                  value={details}
                  placeholder=""
                  onChange={handleChange}
                  required
                />
            








        <div className="meeting-buttons">
         <div className="divsub"> <button className="sb" type="submit"></button></div>
          
          
          <Link to={`/files/${id}`}>
            <button
              onClick={() => setMeetingBoolean(!meetingBoolean)}
              className="button-cn"
            ></button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ModalNewExpense;
