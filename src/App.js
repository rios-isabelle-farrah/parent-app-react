import React from "react"
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
// import Register from "./Components/Register";
//import Reset from "./Components/Reset";
import Dashboard from "./Components/Dashboard";
import FileShow from "./Pages/Files/FileShow"
import FileNew from "./Pages/Files/FileNew"
import FileEdit from "./Pages/Files/FileEdit"

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          {/* <Route exact path="/register" element={<Register/>}/> */}
          {/* <Route exact path="/reset" element={<Reset/>}/> */}
          <Route exact path="/files" element={<Dashboard />}/>
          <Route exact path="files/:id" element={<FileShow />}/>
          <Route exact path="files/file/new" element={<FileNew />}/>
          <Route exact path="files/file/edit" element={<FileEdit />}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;