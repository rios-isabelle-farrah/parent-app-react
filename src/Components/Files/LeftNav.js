import React, { useState } from "react";
import { Link } from "react-router-dom";

//import "./LeftNav.css";

const LeftNav = ({ id, handleReport }) => {

  return (
    <>
 
      <div className="left-nav">
        
            <button onClick={handleReport} className="files-new-button">
              🗂 Generate Report    
            </button>
       
      </div>
   
        <div>
          <div className="left-nav-mb">


         
              <div className="nav-meetings">
                <button onClick={handleReport} className="files-new-button">
                  🗂 Generate Report    
                </button>
              </div>
      

    
          </div>
        </div>
      
    </>
  );
};

export default LeftNav;
