

import React, { useEffect, useContext } from "react";
import "../../App.css";
import { useSelector, useDispatch } from "react-redux";
import { addFiles } from "../../Store/Actions/filesActions";
import { getAllFilesFN } from "../../util/networkRequest";
//import { UserContext } from "../../Providers/UserProvider";
import { Link} from "react-router-dom";
import FilesListItem from "./FilesListItem";
//import "../../Components/Style/Files/Files.css";

const Files = () => {
  const entireState = useSelector((state) => state);
  const dispatch = useDispatch();
  const { files } = entireState;
  // const user = useContext(UserContext);
  //const history = useHistory();
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
console.log(filesArr, "files array")
 

  return (
    <div className="files-div">
      <div className="button-newfile">
        <Link to={`/files/file/new`}>
          <div className="circle-file"></div>
        </Link>
      </div>
      <FilesListItem filesArr={filesArr} files={files} /> 
    </div>
  );
};

export default Files;