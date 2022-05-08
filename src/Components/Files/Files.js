import React, { useState, useEffect } from "react";
import axios from "axios"
import { apiURL } from "../../util/apiURL";
import FilesListItem from "./FilesListItem"

const API = apiURL();
const Files = () => {

  const [files, setFiles] = useState([]);
// const navigate = useNavigate();
  

  useEffect(() => {
    const getAllFiles = async () => {
      try {
      
          let res = await axios.get(
            `${API}/files`
          );
          setFiles(res.data.payload);
        console.log(res.data.payload,"results")
      } catch (err) {
        console.log(err);
      }
    };
   getAllFiles();

   
  }, []);

  console.log(files,"files") 


  return (
    <div className="fileItem">
      {files.map((file, index) => {
        return ( 
            <FilesListItem file={file} key={index}/>
        )
      })}
    </div>
  );
};

export default Files;