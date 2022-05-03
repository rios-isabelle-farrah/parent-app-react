import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const StudentDetail = () => {
  let params = useParams();

  let studentId = params.id;

  const [studentData, setStudentData] = useState({});

  useEffect(() => {
    let url = `https://accelerator-project-abc.herokuapp.com/${studentId}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStudentData(data.students);
      });
  }, []);

  return (
    <div>
      <h3>Student Info</h3>
      <div>
        Name: {studentData.firstName} {studentData.lastName}
      </div>
      <div>company: {studentData.company}</div>
      <Link to='/'>
          Go back
      </Link>
    </div>
  );
};

export default StudentDetail;