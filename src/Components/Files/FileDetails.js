import React, { useEffect} from "react";
import { useParams, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { UserContext } from "../../Providers/UserProvider";
import {
  deleteFileByID,
  getAllMeetingsFN,
} from "../../util/networkRequest";
import { addMeetings } from "../../Store/Actions/meetingsActions";


import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import LeftNav from "./LeftNav";
// import CenterPanel from "./DetailComps/CenterPanel";
// import RightPanel from "./DetailComps/RightPanel";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

function FileDetails() {
  const entireState = useSelector((state) => state);
  const { files, meetings} = entireState;
  // const user = useContext(UserContext);
  const meetingsArr = Object.values(meetings);
  const dispatch = useDispatch();
  let { id } = useParams();
  let navigate = useNavigate();


  // const deleteFile = async () => {
  //   try {
  //     await deleteFileByID(id);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const handleDelete = async () => {
  //   try {
  //     await deleteFile();
  //    return navigate("/files");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    const getAllMeetings = async () => {
      try {
        if (id) {
          let res = await getAllMeetingsFN(id);
          dispatch(addMeetings(res));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllMeetings();
  }, [id, dispatch]);

  if (!id) {
    return <div className="spinner-border"></div>;
  } else {
    
    let file = files[id];

    // let totalMeetings = 0;
    let meetings = [["Meeting", "Date", "Details"]];
    meetingsArr.forEach((meeting) => {
      let newDate = new Date(meeting.date);
      let year = newDate.getFullYear();
      if (meeting) {
        if (year === 2022) {
          meetings.push([
            `${meeting.category}`,
            `${newDate.toLocaleDateString()}`,
            `$${meeting.details.toLocaleString()}`,
          ]);
          
        }
      }
    });


 

    const handleReport = () => {
      file = files[id];
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
            text: `Name: ${file?.child_name} `,
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
                [`name: ${file?.child_name}`],
                [`details: ${file?.details}`],
           
              ],
              fontSize: 40,
            },
          },

          {
            pageBreak: "before",
            text: `${file?.child_name} ${file?.details} meetings in 2022`,
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
        .download(`${file?.child_name}.pdf`);
      return pdfDoc;
    };

    return (
      <section className="file-section">
        <LeftNav id={id} handleReport={handleReport}/>

      </section>
    );
  }
}

export default FileDetails;
