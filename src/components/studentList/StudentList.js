import React, {useEffect, useState} from "react";
import StudentCard from "../studentCard/StudentCard";
import './StudentList.css'

const StudentList = () => {
  // set a hook called students, setStudents, set it to an empty array[];
  // useSate is a method of react

  const [students, setStudents] = useState([]);

  // an empty dependency array, mean run the code in the callback
  // when the component mounts on screen

  useEffect(() => {
    //1. Callback
    console.log("do this code on mount");
    let url = 'https://accelerator-project-abc.herokuapp.com/students';
    // i want to reach out to my server and get a list of all the students
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.students,"data");
        // then i want to update my students hook to contain that list
        setStudents(data.students);
      });
  }, []); //2. Dependency array

  return (
    <div className="studentList">
      {students.map((student, index) => {
        return ( 
            <StudentCard student={student} key={index}/>
        )
      })}
    </div>
  );
};

export default StudentList;