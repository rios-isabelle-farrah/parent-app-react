import React from "react";
import { Link } from "react-router-dom";

import './StudentCard.css';

const StudentCard = ({ student }) => {

  //alert the name of the students on clicking the card
  const alertName = (event) => {
    //event.preventDefault();
    event.stopPropagatiaon();
    console.log(event.target.innerText);
    // alert(event.target.innerText);
  }

  const logValue = (event) => {
    let inputVal = (event.target.value)

    if(!inputVal.includes('@')) {
      console.log('not a valid email');
    }

  }

  return (
    <div className="studentCard" data-testid="studentCard" onClick={alertName}>
      <Link to={`student/${student?.id}`} >
        <div className="studentCard__name">
          Student name: {student?.firstName} {student?.lastName}
        </div>
        <div className="studentCard__Company"> 
        Company: {student?.company}
        </div>
        <input onChange={logValue} />
      </Link>
    </div>
  );
};

export default StudentCard;