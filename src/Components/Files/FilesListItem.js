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
 
            
                <img src={filesImage} className="file-pic" />
   
                <Link to={`/files/${file?.id}`}>
                  {file?.child_name}
                  <br></br>
                  <button className="showMe"> {file?.details} </button>
                </Link>
           
              <br></br>
    
          </li>
        );
      })}
    </ul>
  </div>
);
}

export default FilesListItem;
