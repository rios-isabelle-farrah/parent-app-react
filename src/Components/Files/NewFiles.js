import React, { useEffect } from "react";
import "../../App.css";
import { useSelector, useDispatch } from "react-redux";
import { addFiles } from "../../Store/Actions/filesActions";
import { getAllFilesFN } from "../../util/networkRequest";
import { Link } from "react-router-dom";
import FilesListItem from "./FilesListItem";
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
   console.log(filesArr, "files array");

  return (
    <div className="cabinet-files">
      <div className="grey-header">
        <Link to={`/files/file/new`}>Create New Files +</Link>
      </div>

      {/* <Link to={`/files`}>
        <img src={meetings} className="meetings"/>
        </Link> */}
<div className="list-item-div">


      <FilesListItem filesArr={filesArr} files={files} /> 
      </div>
    </div>
  );
};

export default Files;
