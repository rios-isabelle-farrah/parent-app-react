import React from "react";
 import { Link } from "react-router-dom";
 import filesImage from "../Images/file.png"
 import "./FileListItem.css";


const FilesListItem = ({ filesArr }) => {
 console.log(filesArr, "all files array")

 return (
  <div className="list-files">
    <ul className="ul-select">
      {filesArr.map((file, i) => {
        return (
          <li key={i} className="li-select">
            <div className="card-center">
            
                <img src={filesImage} className="file-pic" />
                {file?.child_name} {file?.detailsl}
                <Link to={`/files/${file?.id}`}>
                  <button className="showMe">Select</button>
                </Link>
           
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
