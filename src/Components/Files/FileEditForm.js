import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { addFile } from "../../Store/Actions/filesActions";
import { useSelector, useDispatch } from "react-redux";
import { updateFileById, getFileByID } from "../../util/networkRequest";
import "./FileEditForm.css";
// import { UserContext } from "../../Providers/UserProvider";

function FileEditForm() {
  // const user = useContext(UserContext);
  let { id } = useParams();
  let navigate = useNavigate();
  const files = useSelector((state) => state.files);
  const dispatch = useDispatch();
  // const file = files[id];

  const [fileInput, setFileInput] = useState({
    id: id,
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
      console.log(error, files);
    }
  };

  const handleChange = (e) => {
    console.log(e.target.value, "handlehchange");
    setFileInput({ ...fileInput, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateFile(fileInput, id);
    return navigate(`/files/${id}`);
  };

  // useEffect( async () => {
  //   const fileInfo = await getFileByID(id)

  // }, []);


  useEffect(() => {
    async function fetchData() {
      // You can await here
      const fileInfo = await getFileByID(id);
      setFileInput(fileInfo);
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state
  


  const { child_name, details } = fileInput;
  console.log(fileInput, "inputfileee3eiouhuh");

  return (
    <div className="background">
      <div className="backgroundA">
        <form className="form-newfile" onSubmit={handleSubmit}>
          <div className="x">
            <Link to={`/files/${id}`}>
              <button className="x-button">X</button>
            </Link>
          </div>
          <label className="label-name">Cabinet Description:</label>
          <input
            className="input-class"
            value={child_name}
            type="text"
            onChange={handleChange}
            id="child_name"
            required
            // placeholder="Enter your name"
          />

          <br></br>
          <div className="select select-multiple">
            <label className="label-name">Cabinet Details:</label>
            <input
              className="input-class"
              id="details"
              type="text"
              value={details}
              onChange={handleChange}
              required
            />
          </div>
          <span className="focus"></span>

          <div className="submit-div-e">
            <button
              onClick={handleSubmit}
              className="submit-e"
              type="submit"
            ></button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FileEditForm;
