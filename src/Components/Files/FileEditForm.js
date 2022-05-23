import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
// import "./ModalNewMeetingForm.css";
import { apiURL } from "../../util/apiURL";
//import { UserContext } from "../../../Providers/UserProvider";

const API = apiURL();
const FileEditForm = () => {
//   const user = useContext(UserContext);
  let navigate = useNavigate();
  const { id} = useParams();
  const [file, setFile] = useState({
child_name: "",
   details: ""
  });

  const updateFile = async (updatedFile) => {
    try {
    
        await axios.put(
          `${API}/files/${id}`,
          updatedFile
        );
      
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFile({ ...file, [e.target.id]: e.target.value });
  };

  

  // const handleSelectChange = (e) => {
  //   setFile({ ...file, details: e.target.value });
 
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateFile(file);
     return navigate(`/files`);
    } catch (error) {
      console.log(error);
    }
  };

  const { child_name, details} = file;
  // let newDate = new Date(date);
  // newDate.setDate(newDate.getDate(date) + 1);

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
                <label htmlFor="child_name">Name:</label>
              </td>
              <td className="data-td">
                <input
                  id="child_name"
                  type="text"
                  value={child_name}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="data-td">
                <label htmlFor="details">Details:</label>
              </td>
              <td className="data-td">
                <input
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
          <Link to={`/files`}>
              <button className="new-can">Cancel</button>
            </Link>
        </div>
      </form>
    </div>
  );
};

export default FileEditForm;
