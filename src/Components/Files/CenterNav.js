import { Link } from "react-router-dom";
import "./CenterNav.css";
import filePic from "../Images/file.png"
const CenterNav = ({ file, id, handleDelete }) => {
  return (
    <div className="concar-div">
      <img
        className="concar"
        src={filePic}
        alt={"file"}
      />
      <div className="all-bs">
        <button type="button" className="button-delete" onClick={handleDelete} data-target="#exampleModalCenter">delete</button>
        <Link to={`/files/${id}/edit`}>
          <button className="button-edit">edit</button>
        </Link>
      </div>
    </div>
  );
};

export default CenterNav;
