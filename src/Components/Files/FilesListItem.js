import React from "react";
 import { Link } from "react-router-dom";
 //import grey from "../Images/greydrawer.png"

 import "./FilesListItem.css";


const FilesListItem = ({ filesArr }) => {
 console.log(filesArr, "all files array")

 return (
  <div className="cabinet-list">
    <ul className="ul-cabinet">
      {filesArr.map((file, i) => {
        return (
          <li key={i} className="li-files">
 
            {/* <img src={grey} className="drawer"/> */}
         
   
                 <Link to={`/files/${file?.id}`}>
               
                  
                  <button className="details-route">    {file?.child_name}<br></br>{file?.details} </button>
                </Link> 
           
         
    
          </li>
        );
      })}
    </ul>
  </div>
);
}

export default FilesListItem;
