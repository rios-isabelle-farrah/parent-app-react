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
    <div className="bckground">
      <div className="divform">
        <div></div>
        <form onSubmit={handleSubmit} className="form-newfile">
          <table className="table-newfile">
            <tbody>
              <tr className="row-driver">
                <td>
                  <label className="label-data" htmlFor="child_name">
                    Name:
                  </label>
                </td>
                <td className="child-name">
                  <input
                    id="child_name"
                    type="text"
                    value={child_name}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
              <tr className="row-make">
                <td className="label-data">
                  <label htmlFor="details">Details:</label>
                </td>

                <td className="details-input">
                  <input
                    value={details}
                    type="text"
                    onChange={handleChange}
                    id="details"
                    placeholder=""
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="file-new-form-buttons">
            <button onClick={handleSubmit} className="submit" type="submit">
              Submit
            </button>
            <Link to={`/files`}>
              <button className="cancel">Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FileNewForm;
