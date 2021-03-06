import React, { useEffect} from "react";
import "../../App.css";
import { useSelector, useDispatch } from "react-redux";
 import { addFiles } from "../../Store/Actions/filesActions";
import { getAllFilesFN } from "../../util/networkRequest";
import { Link} from "react-router-dom";
import MeetSectionList from "../Meetings/MeetSectionList";
// import create from "../../Components/Images/createFile.png"
// import meetings from "../../Components/Images/meetings.png"
import "../Files/Files.css";

const Files = () => {
  const entireState = useSelector((state) => state);
  const dispatch = useDispatch();
  const { files } = entireState;
  const filesArr = Object.values(files);

  useEffect(() => {
    const fetchAllFiles = async () => {
      try {
       
          const res = await getAllFilesFN();
          dispatch(addFiles(res));
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllFiles();
  }, [dispatch]);
// console.log(filesArr, "files array")

  return (
 
      <div className="newfile">
        {/* <Link to={`/files/file/new`}>
          <img src={create} className="create"/>
        </Link> */}


        {/* <Link to={`/files`}>
        <img src={meetings} className="meetings"/>
        </Link> */}
      
 
   
      <MeetSectionList filesArr={filesArr} files={files} /> 
    </div>
  );
};

export default Files;