import React from "react";
// import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import StudentList from "./components/studentList/StudentList";
import StudentDetail from "./components/studentDetail/StudentDetail";

import "./App.css";

function App() {
  return (
    <div className="App">
      say hello
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentList/>} />
          <Route path="/student/:id" element={<StudentDetail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;