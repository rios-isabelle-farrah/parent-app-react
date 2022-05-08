import React from "react";
 import { Link } from "react-router-dom";
 import filesImage from "../Images/file.png"
 import "./FileListItem.css";


const FilesListItem = ({ filesArr }) => {
 console.log(filesArr, "all files array")

 return (
  <div className="list-files">
    <ul className="ul-show">
      {filesArr.map((file, i) => {
        return (
          <li key={i} className="li-show">
            <div className="card-center">
              <div className="file-mame">
                <img src={filesImage} className="file-pic" />
                {file?.child_name} {file?.detailsl}
                <Link to={`/files/${file?.id}`}>
                  <button className="showMe">Select</button>
                </Link>
              </div>
              <br></br>
            </div>
          </li>
        );
      })}
    </ul>
  </div>
);
}

export default FilesListItem;
