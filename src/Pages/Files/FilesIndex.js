import React from "react";



const FilesIndex = ({ file }) => {

  //alert the name of the students on clicking the card
  const alertName = (event) => {
    //event.preventDefault();
    event.stopPropagatiaon();
    console.log(event.target.innerText);
    // alert(event.target.innerText);
  }

 
  return (
    <div>
          <div className="child__name">
          File Name: {file.child_name} 
        </div>
    </div>
  );
};

export default FilesIndex;