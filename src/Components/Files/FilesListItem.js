import React from "react";
 import { Link } from "react-router-dom";
import filesImage from "../Images/file.png"
 import "./FileListItem.css";


const FilesListItem = ({ file }) => {
 console.log(file)

  return (
    <div className="list-files">
        Files List Item 
      <img src={filesImage} className="file-pic" alt={"file"}/>
 {file.child_name}
      {file.details} 
      <Link to={`/files/${file?.id}`}>
                    <button className="showMe">Select</button>
                  </Link> 
    </div>
  );
}

export default FilesListItem;
