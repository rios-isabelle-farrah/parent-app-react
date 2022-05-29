import { useState} from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { addFile } from "../../Store/Actions/filesActions";
import { useSelector, useDispatch } from "react-redux";
import { updateFileById } from "../../util/networkRequest";
// import "../Style/Cars/CarEditForm.css";
// import { UserContext } from "../../Providers/UserProvider";

function FileEditForm() {
  // const user = useContext(UserContext);
  let { id } = useParams();
  let navigate = useNavigate();
  const files = useSelector((state) => state.files);
  const dispatch = useDispatch();
  const file = files[id];

  const [fileInput, setFileInput] = useState({
    id:id,
    child_name: "",
   details: "",
  

  });

  const updateFile = async (updatedFile, id) => {
    try {
      const editedFile = await updateFileById(id, updatedFile);
      if (editedFile.data.status) {
        dispatch(addFile(editedFile));
      }
    } catch (error) {
      console.log(error);
    }
  };

 











  const handleChange = (e) => {
    console.log(e.target.value,"handlehchange")
    setFileInput({ ...fileInput, [e.target.id]: e.target.value });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateFile(fileInput, id);
return navigate(`/files/${id}`);
  };

  const {child_name,details} =
fileInput;
console.log(fileInput,"inputfileee3eiouhuh")

  return (
    <div className="wrap-edit">

      <form className="edit-form-a" onSubmit={handleSubmit}>
        <label htmlFor="filer">Cabinet Name:</label>
        <input
          value={child_name}
          type="text"
          onChange={handleChange}
          id="child_name"
          placeholder="Enter your name"
        />

        <label htmlFor="make">details:</label>

        <input
          value={details}
          type="text"
          onChange={handleChange}
          id="details"
          placeholder="Enter details"
        />
        
      
          <button type="submit">Submit</button>
          <Link to={`/files/${id}`}>
            <button>Cancel</button>
          </Link>
  
      </form>
    </div>
   
  );
}

export default FileEditForm;