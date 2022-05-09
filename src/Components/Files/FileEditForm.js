import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { addFile } from "../../Store/Actions/filesActions";
import { useSelector, useDispatch } from "react-redux";
import { updateFileById } from "../../util/networkRequest";
import "./FileEditForm.css";
// import { UserContext } from "../../Providers/UserProvider";

function FileEditForm() {
//   const user = useContext(UserContext);
  let { id } = useParams();
  let navigate = useNavigate();
  const files = useSelector((state) => state.files);
  const dispatch = useDispatch();
  const file = files[id];

  const [fileInput, setFileInput] = useState({
    child_name: file.child_name,
    details: file.details,
  });

  const updateFile = async (updatedFile, id) => {
    try {
      const editedFile = await updateFileById(id, updatedFile);
      if (editedFile.data.status) {
        dispatch(addFile(editedFile.data.payload));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFileInput({ ...fileInput, [e.target.id]: e.target.value });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateFile(fileInput, id);
    return navigate(`/files/${id}`);
  };

  const { child_name, details } =
    fileInput;

  return (
    <div className="wrap-edit">
    <div className="edit-form">
      <form className="file-edit-form-a" onSubmit={handleSubmit}>
        <label htmlFor="child_name"> Name:</label>
        <input
          value={child_name}
          type="text"
          onChange={handleChange}
          id="child_name"
          placeholder="Enter your name"
        />

        <label htmlFor="make">Details</label>

        <input
          value={details}
          type="text"
          onChange={handleChange}
          id="details"
          placeholder="Enter details"
        />
        
        <div className="form-check">
          
         
        </div>
        <div>
          <button type="submit">Submit</button>
          <Link to={`/files/${id}`}>
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    </div>
    </div>
  );
}

export default FileEditForm;
