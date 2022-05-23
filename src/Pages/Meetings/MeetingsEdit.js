import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
// import "./ModalNewMeetingForm.css";
import { apiURL } from "../../util/apiURL";
//import { UserContext } from "../../../Providers/UserProvider";

const API = apiURL();
const MeetingsEdit = () => {
//   const user = useContext(UserContext);
  let navigate = useNavigate();
  const { id,meeting_id } = useParams();
  const [meeting, setMeeting] = useState({
   category: "",
   details: "",
    date: new Date(),
  });

  const updateMeeting = async (updatedMeeting) => {
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
      await updateMeeting(meeting);
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
     
        <table className="meeting-table-one">
          <tbody>
            <tr>
              <td className="data-td">
                <label htmlFor="date">Date:</label>
              </td>
              <td className="data-td">
                <input
                  value={date}
                  // value="1111-11-11"
                  type="date"
                  onChange={handleChange}
                  id="date"
                  placeholder="Enter date"
                />
              </td>
            </tr>
            <tr>
              <td className="data-td">
                <label> category:</label>
              </td>
              <td className="data-td">
                <select onChange={handleSelectChange}>
                  <option value="" defaultValue></option>
                  <option name="iep" value="iep">
                    iep
                  </option>
                  <option name="turning_five" value="turning_five">
                   turning five
                  </option>
      
                </select>
              </td>
            </tr>
            <tr>
              <td className="data-td">
                <label htmlFor="details">Details:</label>
              </td>
              <td className="data-td">
                <textarea
                  id="details"
                  type="text"
                  value={details}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>

    
          </tbody>
        </table>
        <div className="meeting-buttons">
          <button className="sb" type="submit">submit</button>
          <Link to={`/files/${id}/meetings`}>
              <button className="new-can">Cancel</button>
            </Link>
        </div>
      </form>
    </div>
  );
};

export default MeetingsEdit;
