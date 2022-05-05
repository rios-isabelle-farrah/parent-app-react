import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
// import FileEdit from "./Pages/Files/FileEdit";
// import FileNew from "./Pages/Files/FileNew";
// import FileShow from "./Pages/Files/FileShow";
// import FilesIndex from "./Pages/Files/FilesIndex";
import { apiURL } from "./util/apiURL.js";

import "./App.css";
const API = apiURL();


function App() {

  
  const getFiles = async () => {
    try {
      const res = await axios.get(`${API}/files`);
console.log(res.data,"res data files")
    } catch (err) {
      console.log(err);
    }
  };
getFiles()


  return (
    <div className="App">
    
        <BrowserRouter>
        Parent Files
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
