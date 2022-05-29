import React, { useEffect} from "react";
import { useParams, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFiles } from "../../Store/Actions/filesActions";
import { getAllFilesFN } from "../../util/networkRequest";
import { deleteFileByID} from "../../util/networkRequest";
import "./FileDetails.css"
// import { UserContext } from "../../Providers/UserProvider";
import {
  //deleteFileByID,
  getAllMeetingsFN,
} from "../../util/networkRequest";
import { addMeetings } from "../../Store/Actions/meetingsActions";


import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
// import LeftNav from "./OldLeftNav";
 import CenterNav from "./CenterNav";
// import RightPanel from "./DetailComps/RightPanel";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

function FileDetails() {
  const entireState = useSelector((state) => state);
  
  const { files, meetings} = entireState;
  const dispatch = useDispatch();
  let { id } = useParams();
  // console.log(files,"files of state")
  // const user = useContext(UserContext);
  // console.log(entireState,'state entire')
  const meetingsArr = Object.values(meetings);
  // console.log(meetingsArr,('meetings'))
 
  let navigate = useNavigate();


  const deleteFile = async () => {
    try {
      await deleteFileByID(id);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteFile();
     return navigate("/files");
    } catch (error) {
      console.log(error);
    }
  };

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

    const getAllMeetings = async () => {
      try {
     
          let res = await getAllMeetingsFN(id);
          dispatch(addMeetings(res));
        
      } catch (error) {
        console.log(error);
      }
    };
    getAllMeetings();



  }, [dispatch]);


  if (!id) {
    return <div className="spinner-border"></div>;
  } else {
    
    let filer = entireState['files'][id]

    // let totalMeetings = 0;
    let meetings = [["Meeting", "Date", "Details"]];
    meetingsArr.forEach((meeting) => {
      let newDate = new Date(meeting.date);
      let year = newDate.getFullYear();
  
        if (year === 2022) {
          meetings.push([
            `${meeting.category}`,
            `${newDate.toLocaleDateString()}`,
            `$${meeting.details}`,
          ]);
          
        
      }
    });


 

    const handleReport = () => {
      filer = entireState['files'][id];
      let documentDefinition = {
        header: function (currentPage, pageCount) {
          return {
            text: currentPage.toString() + " of " + pageCount,
            alignment: "right",
            margin: [0, 30, 20, 50],
            fontSize: 7,
          };
        },
        content: [
          {
            text: `Name: ${filer?.child_name} `,
            bold: true,
            fontSize: 20,
            alignment: "center",
            margin: [0, 20],
          },
          {
            layout: "lightHorizontalLines",
            table: {
              headerRows: 1,
              widths: ["50%"],
              height: "100",
              body: [
                [{ text: "File details", bold: true, fontSize: 15 }],
                [`name: ${filer?.child_name}`],
                [`details: ${filer?.details}`],
           
              ],
              fontSize: 40,
            },
          },

          {
            pageBreak: "before",
            text: `${filer?.child_name} ${filer?.details} meetings in 2022`,
            bold: true,
            fontSize: 20,
            alignment: "center",
            margin: [0, 20],
          },
          {
            layout: "lightHorizontalLines",
            table: {
              headerRows: 1,
              widths: ["*", "30%", "20%"],
              height: "100",
              body: meetings,
              fontSize: 40,
            },
          },




       
          {
            pageBreak: "before",
            text: `${filer?.child_name} ${filer?.details} meetings for the year 2021 `,
            bold: true,
            fontSize: 20,
            alignment: "center",
            margin: [0, 20],
          },
          {
            layout: "lightHorizontalLines",
            table: {
              headerRows: 1,
              widths: ["*", "30%", "20%"],
              height: "100",
              body: meetings,
              fontSize: 40,
            },
          },
         
          
          
        ],
      };
console.log(documentDefinition,"docDef")
      const pdfDoc = pdfMake
        .createPdf(documentDefinition)
        .download(`${filer?.child_name}.pdf`);
      return pdfDoc;
    };

    return (
      <section className="file-section">
      
         <CenterNav handleReport={handleReport} file={filer} id={id} handleDelete={handleDelete}/> 

      </section>
    );
  }
}

export default FileDetails;
