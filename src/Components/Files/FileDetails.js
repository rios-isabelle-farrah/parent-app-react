import { useParams} from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios"
import { apiURL } from "../../util/apiURL";
// import FilesListItem from "./FilesListItem"
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

// import CenterPanel from "./DetailComps/CenterPanel";
// import RightPanel from "./DetailComps/RightPanel";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
const API = apiURL();
function FileDetails() {
const [files, setFiles] = useState([]);
  let { id } = useParams();



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






  
  
    let file = files[id];
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
            text: `Name: ${file?.student_name} `,
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
                [`File Name: ${file?.child_name}`],
                [`File Details: ${file?.details}`],
              ],
              fontSize: 40,
            },
          },
        ],
      };

      console.log(documentDefinition, "docDef");
      const pdfDoc = pdfMake
        .createPdf(documentDefinition)
        .download(`${file?.child_name}.pdf`);
      return pdfDoc;
    };

    return (
      <section className="car-section">
   <div className="chrome">
          <div className="nav-expenses">
            <button onClick={handleReport} className="cars-new-button">
              🗂 Generate Report    
            </button>
          </div>
        </div>

        {/* <CenterPanel file={file} id={id} handleDelete={handleDelete} /> */}
        {/* 
        <RightPanel
          id={id}
          car={car}
          expensesArr={expensesArr}
          tripsArr={tripsArr}
        /> */}
      </section>
    );






  
}

export default FileDetails;
