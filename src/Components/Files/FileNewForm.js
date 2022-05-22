import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { apiURL } from "../../util/apiURL";
// import "mdbreact/dist/css/mdb.css";
import "./FileNewForm.css";

const API = apiURL();

function FileNewForm() {
  const [file, setFile] = useState({
    child_name: "",
    details: "",
  });

  let navigate = useNavigate();

  const addFile = async (newFile) => {
    try {
      await axios.post(`${API}/files`, newFile);
    } catch (error) {
      console.log(error);
    }
  };


// const addFile = async (newFile) => {
//     let { data } = await axios.post(`${API}/files`, newFile);
//     return data.payload;
//   };




  const handleChange = (e) => {
    setFile({ ...file, [e.target.id]: e.target.value });
  };
  const handleSelectChange = (e) => {
    setFile({ ...file, details: e.target.value });
    console.log(e.target.value,"category")
  };

  const handleSubmit = async (e) => {
    //   debugger;
    e.preventDefault();
    try {
      await addFile(file);
     return navigate("/files");
      //return navigate("/")
    } catch (error) {
      console.log(error);
    }
  };

  const { child_name, details } = file;

  return (
    <div className="background">
      <div className="backgroundA">
        <form onSubmit={handleSubmit} className="form-newfile">
        <div className="x">

        <Link to={`/files`}>
              <button className="x-button">X</button>
            </Link>
          </div>
                  <label className="label-name" htmlFor="child_name">
                    File Name:
                  </label>
              
                  <input
                  className="input-class"
                    id="child_name"
                    type="text"
                    value={child_name}
                    onChange={handleChange}
                    required
                  />
              
              <br></br>
               <div className="label-frame"> <label htmlFor="details" className="label-categories" for="multi-select">Select Category</label>
               {/* <Link to={`/files`}>
              <button className="x-button">X</button>
            </Link> */}
            </div>  
               
                  <div className="select select-multiple">
<select onChange={handleSelectChange} id="multi-select" multiple>
                  {/* <option className="option-class" value="" defaultValue></option> */}
                  <option className="option-class" name="meetings" value="meetings">
                   Meetings
                  </option>
                  {/* <option className="option-class" name="reimbursements" value="reimbursements">
                 Reimbursements
                  </option>
                  <option className="option-class" name="behaviors" value="behaviors">
                Behaviors
                  </option>
                  <option className="option-class" name="gut_health" value="gut_health">
                Gut Health
                  </option>
                  <option className="option-class" name="milestones" value="milestones">
                  Milestones
                  </option> */}

                </select>
                </div>
                <span className="focus"></span>
   

          <div className="submit-div">
            <button onClick={handleSubmit} className="submit" type="submit">
 
            </button>

            {/* <Link to={`/files`}>
              <button className="cancel">Cancel</button>
            </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default FileNewForm;
