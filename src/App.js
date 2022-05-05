import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
// import FileEdit from "./Pages/Files/FileEdit";
// import FileNew from "./Pages/Files/FileNew";
// import FileShow from "./Pages/Files/FileShow";
import FilesIndex from "./Pages/Files/FilesIndex";
import { apiURL } from "./util/apiURL.js";

import "./App.css";
const API = apiURL();


function App() {

  const [files, setFiles] = useState([]);

  
 
    
    const getFiles = async () => {
      try {
        const res = await axios.get(`${API}/files`);
        setFiles(res.data.payload);
      } catch (err) {
        console.log(err);
      }
    };
  

    useEffect(() => {
      getFiles();
    }, []);




  







  return (
    <div className="App">
    
        <BrowserRouter>
        Parent Files

        <div className="fileList">
      {files.map((file, index) => {
        return ( 
            <FilesIndex file={file} key={index}/>
        )
      })}
    </div>


          {/* <>
            <BrowserRouter>
         
              <Route exact path="/files">
                <FilesIndex/>
              </Route>
              <Route exact path="/files/file/new">
                <FileNew />
              </Route>
              <Route exact path="/files/:id">
                <FileShow />
              </Route>
              <Route path="/files/:id/edit">
                <FileEdit />
              </Route>
            </BrowserRouter>
          </> */}
        </BrowserRouter>
    </div>
  );
}

export default App;
